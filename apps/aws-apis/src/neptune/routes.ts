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
            'The effective date when the pending maintenance action is applied to the resource. This date takes into account opt-in requests received from the <a>ApplyPendingMaintenanceAction</a> API, the <code>AutoAppliedAfterDate</code>, and the <code>ForcedApplyDate</code>. This value is blank if an opt-in request has not been received and nothing has been specified as <code>AutoAppliedAfterDate</code> or <code>ForcedApplyDate</code>.',
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
        .openapi({ description: 'The ARN of the resource that has pending maintenance actions.' }),
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
    description: 'Describes the pending maintenance actions for a resource.',
    required: [],
  })
  .openapi('ResourcePendingMaintenanceActions')

type PendingMaintenanceActionsType = (z.infer<typeof ResourcePendingMaintenanceActionsSchema> & {
  [key: string]: unknown
})[]

const DBClusterNotFoundFaultSchema = z.any().openapi('DBClusterNotFoundFault')

const DBClusterRoleAlreadyExistsFaultSchema = z.any().openapi('DBClusterRoleAlreadyExistsFault')

const InvalidDBClusterStateFaultSchema = z.any().openapi('InvalidDBClusterStateFault')

const DBClusterRoleQuotaExceededFaultSchema = z.any().openapi('DBClusterRoleQuotaExceededFault')

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
            'The Amazon customer account associated with the event notification subscription.',
        }),
    ).exactOptional(),
    CustSubscriptionId: StringSchema.and(
      z.any().openapi({ description: 'The event notification subscription Id.' }),
    ).exactOptional(),
    SnsTopicArn: StringSchema.and(
      z.any().openapi({ description: 'The topic ARN of the event notification subscription.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the event notification subscription.</p> <p>Constraints:</p> <p>Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist</p> <p>The status "no-permission" indicates that Neptune no longer has permission to post to the SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.</p>',
        }),
    ).exactOptional(),
    SubscriptionCreationTime: StringSchema.and(
      z.any().openapi({ description: 'The time the event notification subscription was created.' }),
    ).exactOptional(),
    SourceType: StringSchema.and(
      z.any().openapi({ description: 'The source type for the event notification subscription.' }),
    ).exactOptional(),
    SourceIdsList: SourceIdsListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of source IDs for the event notification subscription.' }),
    ).exactOptional(),
    EventCategoriesList: EventCategoriesListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of event categories for the event notification subscription.',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating if the subscription is enabled. True indicates the subscription is enabled.',
        }),
    ).exactOptional(),
    EventSubscriptionArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) for the event subscription.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.',
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
            "A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>. The string can only contain the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: \"^([\\\\p{L}\\\\p{Z}\\\\p{N}_.:/=+\\\\-]*)$\").",
        }),
    ).exactOptional(),
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>. The string can only contain the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: \"^([\\\\p{L}\\\\p{Z}\\\\p{N}_.:/=+\\\\-]*)$\").",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Metadata assigned to an Amazon Neptune resource consisting of a key-value pair.',
    required: [],
  })
  .openapi('Tag')

const DBInstanceNotFoundFaultSchema = z.any().openapi('DBInstanceNotFoundFault')

const DBSnapshotNotFoundFaultSchema = z.any().openapi('DBSnapshotNotFoundFault')

const ApplyPendingMaintenanceActionResultSchema = z
  .object({
    ResourcePendingMaintenanceActions: ResourcePendingMaintenanceActionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApplyPendingMaintenanceActionResult')

const ResourceNotFoundFaultSchema = z.any().openapi('ResourceNotFoundFault')

const DBClusterParameterGroupSchema = z
  .object({
    DBClusterParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'Provides the name of the DB cluster parameter group.' }),
    ).exactOptional(),
    DBParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the name of the DB parameter group family that this DB cluster parameter group is compatible with.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the customer-specified description for this DB cluster parameter group.',
        }),
    ).exactOptional(),
    DBClusterParameterGroupArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) for the DB cluster parameter group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>',
    required: [],
  })
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
            'Provides the list of EC2 Availability Zones that instances in the DB cluster snapshot can be restored in.',
        }),
    ).exactOptional(),
    DBClusterSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot.</p> <p>After you restore a DB cluster using a <code>DBClusterSnapshotIdentifier</code>, you must specify the same <code>DBClusterSnapshotIdentifier</code> for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed.</p> <p>However, if you don't specify the <code>DBClusterSnapshotIdentifier</code>, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the snapshot specified by the <code>DBClusterSnapshotIdentifier</code>, and the original DB cluster is deleted.</p>",
        }),
    ).exactOptional(),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the DB cluster identifier of the DB cluster that this DB cluster snapshot was created from.',
        }),
    ).exactOptional(),
    SnapshotCreateTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the time when the snapshot was taken, in Universal Coordinated Time (UTC).',
        }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z.any().openapi({ description: 'Specifies the name of the database engine.' }),
    ).exactOptional(),
    AllocatedStorage: IntegerSchema.and(
      z.any().openapi({ description: 'Specifies the allocated storage size in gibibytes (GiB).' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'Specifies the status of this DB cluster snapshot.' }),
    ).exactOptional(),
    Port: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the port that the DB cluster was listening on at the time of the snapshot.',
        }),
    ).exactOptional(),
    VpcId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Provides the VPC ID associated with the DB cluster snapshot.' }),
    ).exactOptional(),
    ClusterCreateTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).',
        }),
    ).exactOptional(),
    MasterUsername: StringSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides the version of the database engine for this DB cluster snapshot.',
        }),
    ).exactOptional(),
    LicenseModel: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides the license model information for this DB cluster snapshot.',
        }),
    ).exactOptional(),
    SnapshotType: StringSchema.and(
      z.any().openapi({ description: 'Provides the type of the DB cluster snapshot.' }),
    ).exactOptional(),
    PercentProgress: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the percentage of the estimated data that has been transferred.',
        }),
    ).exactOptional(),
    StorageEncrypted: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the DB cluster snapshot is encrypted.' }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>StorageEncrypted</code> is true, the Amazon KMS key identifier for the encrypted DB cluster snapshot.',
        }),
    ).exactOptional(),
    DBClusterSnapshotArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) for the DB cluster snapshot.' }),
    ).exactOptional(),
    SourceDBClusterSnapshotArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the DB cluster snapshot was copied from a source DB cluster snapshot, the Amazon Resource Name (ARN) for the source DB cluster snapshot, otherwise, a null value.',
        }),
    ).exactOptional(),
    IAMDatabaseAuthenticationEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>',
    required: [],
  })
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

const DBParameterGroupSchema = z
  .object({
    DBParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'Provides the name of the DB parameter group.' }),
    ).exactOptional(),
    DBParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the name of the DB parameter group family that this DB parameter group is compatible with.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides the customer-specified description for this DB parameter group.',
        }),
    ).exactOptional(),
    DBParameterGroupArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) for the DB parameter group.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>',
    required: [],
  })
  .openapi('DBParameterGroup')

const CopyDBParameterGroupResultSchema = z
  .object({ DBParameterGroup: DBParameterGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CopyDBParameterGroupResult')

const IntegerOptionalSchema = z.int().openapi('IntegerOptional')

const DBClusterOptionGroupStatusSchema = z
  .object({
    DBClusterOptionGroupName: StringSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Not supported by Neptune.', required: [] })
  .openapi('DBClusterOptionGroupStatus')

const DBClusterOptionGroupMembershipsSchema = z
  .array(
    DBClusterOptionGroupStatusSchema.and(
      z.any().openapi({ xml: { name: 'DBClusterOptionGroup' } }),
    ),
  )
  .openapi('DBClusterOptionGroupMemberships')

const ReadReplicaIdentifierListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'ReadReplicaIdentifier' } })))
  .openapi('ReadReplicaIdentifierList')

const DBClusterMemberSchema = z
  .object({
    DBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the instance identifier for this member of the DB cluster.',
        }),
    ).exactOptional(),
    IsClusterWriter: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Value that is <code>true</code> if the cluster member is the primary instance for the DB cluster and <code>false</code> otherwise.',
        }),
    ).exactOptional(),
    DBClusterParameterGroupStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the status of the DB cluster parameter group for this member of the DB cluster.',
        }),
    ).exactOptional(),
    PromotionTier: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about an instance that is part of a DB cluster.',
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
      'This data type is used as a response element for queries on VPC security group membership.',
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
            'The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the state of association between the IAM role and the DB cluster. The Status property returns one of the following values:</p> <ul> <li> <p> <code>ACTIVE</code> - the IAM role ARN is associated with the DB cluster and can be used to access other Amazon services on your behalf.</p> </li> <li> <p> <code>PENDING</code> - the IAM role ARN is being associated with the DB cluster.</p> </li> <li> <p> <code>INVALID</code> - the IAM role ARN is associated with the DB cluster, but the DB cluster is unable to assume the IAM role in order to access other Amazon services on your behalf.</p> </li> </ul>',
        }),
    ).exactOptional(),
    FeatureName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the feature associated with the Amazon Identity and Access Management (IAM) role. For the list of supported feature names, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/api-other-apis.html#DescribeDBEngineVersions">DescribeDBEngineVersions</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes an Amazon Identity and Access Management (IAM) role that is associated with a DB cluster.',
    required: [],
  })
  .openapi('DBClusterRole')

const DBClusterRolesSchema = z
  .array(DBClusterRoleSchema.and(z.any().openapi({ xml: { name: 'DBClusterRole' } })))
  .openapi('DBClusterRoles')

const BooleanOptionalSchema = z.boolean().openapi('BooleanOptional')

const LogTypeListSchema = z.array(StringSchema).openapi('LogTypeList')

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
            'Log types that are in the process of being enabled. After they are enabled, these log types are exported to CloudWatch Logs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.',
    required: [],
  })
  .openapi('PendingCloudwatchLogsExports')

const ClusterPendingModifiedValuesSchema = z
  .object({
    PendingCloudwatchLogsExports: PendingCloudwatchLogsExportsSchema.and(
      z
        .any()
        .openapi({
          description:
            'This <code>PendingCloudwatchLogsExports</code> structure specifies pending changes to which CloudWatch logs are enabled and which are disabled.',
        }),
    ).exactOptional(),
    DBClusterIdentifier: StringSchema.and(
      z.any().openapi({ description: 'The DBClusterIdentifier value for the DB cluster.' }),
    ).exactOptional(),
    IAMDatabaseAuthenticationEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'The database engine version.' }),
    ).exactOptional(),
    BackupRetentionPeriod: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of days for which automatic DB snapshots are retained.',
        }),
    ).exactOptional(),
    AllocatedStorage: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "The allocated storage size in gibibytes (GiB) for database engines. For Neptune, <code>AllocatedStorage</code> always returns 1, because Neptune DB cluster storage size isn't fixed, but instead automatically adjusts as needed.",
        }),
    ).exactOptional(),
    Iops: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Provisioned IOPS (I/O operations per second) value. This setting is only for non-Aurora Multi-AZ DB clusters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This data type is used as a response element in the <code>ModifyDBCluster</code> operation and contains changes that will be applied during the next maintenance window.',
    required: [],
  })
  .openapi('ClusterPendingModifiedValues')

const DoubleOptionalSchema = z.float64().openapi('DoubleOptional')

const ServerlessV2ScalingConfigurationInfoSchema = z
  .object({
    MinCapacity: DoubleOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on.',
        }),
    ).exactOptional(),
    MaxCapacity: DoubleOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Shows the scaling configuration for a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>',
    required: [],
  })
  .openapi('ServerlessV2ScalingConfigurationInfo')

const GlobalClusterIdentifierSchema = z
  .string()
  .regex(/[A-Za-z][0-9A-Za-z-:._]*/)
  .min(1)
  .max(255)
  .openapi('GlobalClusterIdentifier')

const DBClusterSchema = z
  .object({
    AllocatedStorage: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>AllocatedStorage</code> always returns 1, because Neptune DB cluster storage size is not fixed, but instead automatically adjusts as needed.',
        }),
    ).exactOptional(),
    AvailabilityZones: AvailabilityZonesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in.',
        }),
    ).exactOptional(),
    BackupRetentionPeriod: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of days for which automatic DB snapshots are retained.',
        }),
    ).exactOptional(),
    CharacterSetName: StringSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the name of the initial database of this DB cluster that was provided at create time, if one was specified when the DB cluster was created. This same name is returned for the life of the DB cluster.',
        }),
    ).exactOptional(),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.',
        }),
    ).exactOptional(),
    DBClusterParameterGroup: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the name of the DB cluster parameter group for the DB cluster.',
        }),
    ).exactOptional(),
    DBSubnetGroup: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'Specifies the current state of this DB cluster.' }),
    ).exactOptional(),
    PercentProgress: StringSchema.and(
      z.any().openapi({ description: 'Specifies the progress of the operation as a percentage.' }),
    ).exactOptional(),
    EarliestRestorableTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the earliest time to which a database can be restored with point-in-time restore.',
        }),
    ).exactOptional(),
    Endpoint: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the connection endpoint for the primary instance of the DB cluster.',
        }),
    ).exactOptional(),
    ReaderEndpoint: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The reader endpoint for the DB cluster. The reader endpoint for a DB cluster load-balances connections across the Read Replicas that are available in a DB cluster. As clients request new connections to the reader endpoint, Neptune distributes the connection requests among the Read Replicas in the DB cluster. This functionality can help balance your read workload across multiple Read Replicas in your DB cluster.</p> <p>If a failover occurs, and the Read Replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Read Replicas in the cluster, you can then reconnect to the reader endpoint.</p>',
        }),
    ).exactOptional(),
    MultiAZ: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the DB cluster has instances in multiple Availability Zones.',
        }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides the name of the database engine to be used for this DB cluster.',
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
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    DBClusterOptionGroupMemberships: DBClusterOptionGroupMembershipsSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    PreferredBackupWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the <code>BackupRetentionPeriod</code>.',
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
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    ReadReplicaIdentifiers: ReadReplicaIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains one or more identifiers of the Read Replicas associated with this DB cluster.',
        }),
    ).exactOptional(),
    DBClusterMembers: DBClusterMemberListSchema.and(
      z
        .any()
        .openapi({ description: 'Provides the list of instances that make up the DB cluster.' }),
    ).exactOptional(),
    VpcSecurityGroups: VpcSecurityGroupMembershipListSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides a list of VPC security groups that the DB cluster belongs to.',
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
      z.any().openapi({ description: 'Specifies whether the DB cluster is encrypted.' }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>StorageEncrypted</code> is true, the Amazon KMS key identifier for the encrypted DB cluster.',
        }),
    ).exactOptional(),
    DbClusterResourceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Region-unique, immutable identifier for the DB cluster. This identifier is found in Amazon CloudTrail log entries whenever the Amazon KMS key for the DB cluster is accessed.',
        }),
    ).exactOptional(),
    DBClusterArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the DB cluster.' }),
    ).exactOptional(),
    AssociatedRoles: DBClusterRolesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides a list of the Amazon Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon services on your behalf.',
        }),
    ).exactOptional(),
    IAMDatabaseAuthenticationEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.',
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
            'Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).',
        }),
    ).exactOptional(),
    CopyTagsToSnapshot: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <i>If set to <code>true</code>, tags are copied to any snapshot of the DB cluster that is created.</i> ',
        }),
    ).exactOptional(),
    EnabledCloudwatchLogsExports: LogTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of log types that this DB cluster is configured to export to CloudWatch Logs.',
        }),
    ).exactOptional(),
    PendingModifiedValues: ClusterPendingModifiedValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'This data type is used as a response element in the <code>ModifyDBCluster</code> operation and contains changes that will be applied during the next maintenance window.',
        }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "Indicates whether or not the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled.",
        }),
    ).exactOptional(),
    CrossAccountClone: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'If set to <code>true</code>, the DB cluster can be cloned across accounts.',
        }),
    ).exactOptional(),
    AutomaticRestartTime: TStampSchema.and(
      z
        .any()
        .openapi({ description: 'Time at which the DB cluster will be automatically restarted.' }),
    ).exactOptional(),
    ServerlessV2ScalingConfiguration: ServerlessV2ScalingConfigurationInfoSchema.exactOptional(),
    GlobalClusterIdentifier: GlobalClusterIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a user-supplied global database cluster identifier. This identifier is the unique key that identifies a global database.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>',
    required: [],
  })
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

const InvalidDBInstanceStateFaultSchema = z.any().openapi('InvalidDBInstanceStateFault')

const DBClusterParameterGroupNotFoundFaultSchema = z
  .any()
  .openapi('DBClusterParameterGroupNotFoundFault')

const DBSubnetGroupDoesNotCoverEnoughAZsSchema = z
  .any()
  .openapi('DBSubnetGroupDoesNotCoverEnoughAZs')

const GlobalClusterNotFoundFaultSchema = z.any().openapi('GlobalClusterNotFoundFault')

const InvalidGlobalClusterStateFaultSchema = z.any().openapi('InvalidGlobalClusterStateFault')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const CreateDBClusterEndpointOutputSchema = z
  .object({
    DBClusterEndpointIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier associated with the endpoint. This parameter is stored as a lowercase string.',
        }),
    ).exactOptional(),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.',
        }),
    ).exactOptional(),
    DBClusterEndpointResourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.',
        }),
    ).exactOptional(),
    Endpoint: StringSchema.and(
      z.any().openapi({ description: 'The DNS address of the endpoint.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that cannot be used for a certain kind of cluster, such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.',
        }),
    ).exactOptional(),
    EndpointType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>CUSTOM</code>.',
        }),
    ).exactOptional(),
    CustomEndpointType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type associated with a custom endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.',
        }),
    ).exactOptional(),
    StaticMembers: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of DB instance identifiers that are part of the custom endpoint group.',
        }),
    ).exactOptional(),
    ExcludedMembers: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.",
        }),
    ).exactOptional(),
    DBClusterEndpointArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the endpoint.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon Neptune DB instance endpoints, see <code>Endpoint</code>.</p>',
    required: [],
  })
  .openapi('CreateDBClusterEndpointOutput')

const DBClusterEndpointQuotaExceededFaultSchema = z
  .any()
  .openapi('DBClusterEndpointQuotaExceededFault')

const DBClusterEndpointAlreadyExistsFaultSchema = z
  .any()
  .openapi('DBClusterEndpointAlreadyExistsFault')

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
      z.any().openapi({ description: 'Specifies the DNS address of the DB instance.' }),
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
      '<p>Specifies a connection endpoint.</p> <p>For the data structure that represents Amazon Neptune DB cluster endpoints, see <code>DBClusterEndpoint</code>.</p>',
    required: [],
  })
  .openapi('Endpoint')

const DBSecurityGroupMembershipSchema = z
  .object({
    DBSecurityGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the DB security group.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'The status of the DB security group.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies membership in a designated DB security group.', required: [] })
  .openapi('DBSecurityGroupMembership')

const DBSecurityGroupMembershipListSchema = z
  .array(DBSecurityGroupMembershipSchema.and(z.any().openapi({ xml: { name: 'DBSecurityGroup' } })))
  .openapi('DBSecurityGroupMembershipList')

const DBParameterGroupStatusSchema = z
  .object({
    DBParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the DP parameter group.' }),
    ).exactOptional(),
    ParameterApplyStatus: StringSchema.and(
      z.any().openapi({ description: 'The status of parameter updates.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The status of the DB parameter group.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateDBInstance</a> </p> </li> <li> <p> <a>DeleteDBInstance</a> </p> </li> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RebootDBInstance</a> </p> </li> </ul>',
    required: [],
  })
  .openapi('DBParameterGroupStatus')

const DBParameterGroupStatusListSchema = z
  .array(DBParameterGroupStatusSchema.and(z.any().openapi({ xml: { name: 'DBParameterGroup' } })))
  .openapi('DBParameterGroupStatusList')

const AvailabilityZoneSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the availability zone.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies an Availability Zone.', required: [] })
  .openapi('AvailabilityZone')

const SubnetSchema = z
  .object({
    SubnetIdentifier: StringSchema.and(
      z.any().openapi({ description: 'Specifies the identifier of the subnet.' }),
    ).exactOptional(),
    SubnetAvailabilityZone: AvailabilityZoneSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the EC2 Availability Zone that the subnet is in.' }),
    ).exactOptional(),
    SubnetStatus: StringSchema.and(
      z.any().openapi({ description: 'Specifies the status of the subnet.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Specifies a subnet.</p> <p> This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>',
    required: [],
  })
  .openapi('Subnet')

const SubnetListSchema = z
  .array(SubnetSchema.and(z.any().openapi({ xml: { name: 'Subnet' } })))
  .openapi('SubnetList')

const DBSubnetGroupSchema = z
  .object({
    DBSubnetGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the DB subnet group.' }),
    ).exactOptional(),
    DBSubnetGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'Provides the description of the DB subnet group.' }),
    ).exactOptional(),
    VpcId: StringSchema.and(
      z.any().openapi({ description: 'Provides the VpcId of the DB subnet group.' }),
    ).exactOptional(),
    SubnetGroupStatus: StringSchema.and(
      z.any().openapi({ description: 'Provides the status of the DB subnet group.' }),
    ).exactOptional(),
    Subnets: SubnetListSchema.and(
      z.any().openapi({ description: ' Contains a list of <a>Subnet</a> elements.' }),
    ).exactOptional(),
    DBSubnetGroupArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the DB subnet group.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>',
    required: [],
  })
  .openapi('DBSubnetGroup')

const PendingModifiedValuesSchema = z
  .object({
    DBInstanceClass: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Contains the new <code>DBInstanceClass</code> for the DB instance that will be applied or is currently being applied.',
        }),
    ).exactOptional(),
    AllocatedStorage: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Contains the new <code>AllocatedStorage</code> size for the DB instance that will be applied or is currently being applied.',
        }),
    ).exactOptional(),
    MasterUserPassword: StringSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'Specifies the pending port for the DB instance.' }),
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
            'Indicates that the Single-AZ DB instance is to change to a Multi-AZ deployment.',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'Indicates the database engine version.' }),
    ).exactOptional(),
    LicenseModel: StringSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    Iops: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the new Provisioned IOPS value for the DB instance that will be applied or is currently being applied.',
        }),
    ).exactOptional(),
    DBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Contains the new <code>DBInstanceIdentifier</code> for the DB instance that will be applied or is currently being applied.',
        }),
    ).exactOptional(),
    StorageType: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the storage type to be associated with the DB instance.',
        }),
    ).exactOptional(),
    CACertificateIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the identifier of the CA certificate for the DB instance.',
        }),
    ).exactOptional(),
    DBSubnetGroupName: StringSchema.and(
      z.any().openapi({ description: 'The new DB subnet group for the DB instance.' }),
    ).exactOptional(),
    PendingCloudwatchLogsExports: PendingCloudwatchLogsExportsSchema.and(
      z
        .any()
        .openapi({
          description:
            'This <code>PendingCloudwatchLogsExports</code> structure specifies pending changes to which CloudWatch logs are enabled and which are disabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' This data type is used as a response element in the <a>ModifyDBInstance</a> action.',
    required: [],
  })
  .openapi('PendingModifiedValues')

const ReadReplicaDBInstanceIdentifierListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'ReadReplicaDBInstanceIdentifier' } })))
  .openapi('ReadReplicaDBInstanceIdentifierList')

const ReadReplicaDBClusterIdentifierListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'ReadReplicaDBClusterIdentifier' } })))
  .openapi('ReadReplicaDBClusterIdentifierList')

const OptionGroupMembershipSchema = z
  .object({
    OptionGroupName: StringSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Not supported by Neptune.', required: [] })
  .openapi('OptionGroupMembership')

const OptionGroupMembershipListSchema = z
  .array(
    OptionGroupMembershipSchema.and(z.any().openapi({ xml: { name: 'OptionGroupMembership' } })),
  )
  .openapi('OptionGroupMembershipList')

const DBInstanceStatusInfoSchema = z
  .object({
    StatusType: StringSchema.and(
      z.any().openapi({ description: 'This value is currently "read replication."' }),
    ).exactOptional(),
    Normal: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Boolean value that is true if the instance is operating normally, or false if the instance is in an error state.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Status of the DB instance. For a StatusType of read replica, the values can be replicating, error, stopped, or terminated.',
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
  .openapi({
    description: 'Provides a list of status information for a DB instance.',
    required: [],
  })
  .openapi('DBInstanceStatusInfo')

const DBInstanceStatusInfoListSchema = z
  .array(DBInstanceStatusInfoSchema.and(z.any().openapi({ xml: { name: 'DBInstanceStatusInfo' } })))
  .openapi('DBInstanceStatusInfoList')

const DomainMembershipSchema = z
  .object({
    Domain: StringSchema.and(
      z.any().openapi({ description: 'The identifier of the Active Directory Domain.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The status of the DB instance's Active Directory Domain membership, such as joined, pending-join, failed etc).",
        }),
    ).exactOptional(),
    FQDN: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The fully qualified domain name of the Active Directory Domain.',
        }),
    ).exactOptional(),
    IAMRoleName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the IAM role to be used when making API calls to the Directory Service.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An Active Directory Domain membership record associated with a DB instance.',
    required: [],
  })
  .openapi('DomainMembership')

const DomainMembershipListSchema = z
  .array(DomainMembershipSchema.and(z.any().openapi({ xml: { name: 'DomainMembership' } })))
  .openapi('DomainMembershipList')

const DBInstanceSchema = z
  .object({
    DBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a user-supplied database identifier. This identifier is the unique key that identifies a DB instance.',
        }),
    ).exactOptional(),
    DBInstanceClass: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the name of the compute and memory capacity class of the DB instance.',
        }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides the name of the database engine to be used for this DB instance.',
        }),
    ).exactOptional(),
    DBInstanceStatus: StringSchema.and(
      z.any().openapi({ description: 'Specifies the current state of this database.' }),
    ).exactOptional(),
    MasterUsername: StringSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    DBName: StringSchema.and(
      z.any().openapi({ description: 'The database name.' }),
    ).exactOptional(),
    Endpoint: EndpointSchema.and(
      z.any().openapi({ description: 'Specifies the connection endpoint.' }),
    ).exactOptional(),
    AllocatedStorage: IntegerSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    InstanceCreateTime: TStampSchema.and(
      z.any().openapi({ description: 'Provides the date and time the DB instance was created.' }),
    ).exactOptional(),
    PreferredBackupWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the <code>BackupRetentionPeriod</code>.',
        }),
    ).exactOptional(),
    BackupRetentionPeriod: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the number of days for which automatic DB snapshots are retained.',
        }),
    ).exactOptional(),
    DBSecurityGroups: DBSecurityGroupMembershipListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Provides List of DB security group elements containing only <code>DBSecurityGroup.Name</code> and <code>DBSecurityGroup.Status</code> subelements.',
        }),
    ).exactOptional(),
    VpcSecurityGroups: VpcSecurityGroupMembershipListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides a list of VPC security group elements that the DB instance belongs to.',
        }),
    ).exactOptional(),
    DBParameterGroups: DBParameterGroupStatusListSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides the list of DB parameter groups applied to this DB instance.',
        }),
    ).exactOptional(),
    AvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the name of the Availability Zone the DB instance is located in.',
        }),
    ).exactOptional(),
    DBSubnetGroup: DBSubnetGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies information on the subnet group associated with the DB instance, including the name, description, and subnets in the subnet group.',
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
            'Specifies that changes to the DB instance are pending. This element is only included when changes are pending. Specific changes are identified by subelements.',
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
    MultiAZ: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies if the DB instance is a Multi-AZ deployment.' }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'Indicates the database engine version.' }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates that minor version patches are applied automatically.',
        }),
    ).exactOptional(),
    ReadReplicaSourceDBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the identifier of the source DB instance if this DB instance is a Read Replica.',
        }),
    ).exactOptional(),
    ReadReplicaDBInstanceIdentifiers: ReadReplicaDBInstanceIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains one or more identifiers of the Read Replicas associated with this DB instance.',
        }),
    ).exactOptional(),
    ReadReplicaDBClusterIdentifiers: ReadReplicaDBClusterIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains one or more identifiers of DB clusters that are Read Replicas of this DB instance.',
        }),
    ).exactOptional(),
    LicenseModel: StringSchema.and(
      z.any().openapi({ description: 'License model information for this DB instance.' }),
    ).exactOptional(),
    Iops: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the Provisioned IOPS (I/O operations per second) value.',
        }),
    ).exactOptional(),
    OptionGroupMemberships: OptionGroupMembershipListSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    CharacterSetName: StringSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    SecondaryAvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, specifies the name of the secondary Availability Zone for a DB instance with multi-AZ support.',
        }),
    ).exactOptional(),
    PubliclyAccessible: BooleanSchema.and(
      z.any().openapi({ deprecated: true, description: 'This flag should no longer be used.' }),
    ).exactOptional(),
    StatusInfos: DBInstanceStatusInfoListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of a Read Replica. If the instance is not a Read Replica, this is blank.',
        }),
    ).exactOptional(),
    StorageType: StringSchema.and(
      z.any().openapi({ description: 'Specifies the storage type associated with DB instance.' }),
    ).exactOptional(),
    TdeCredentialArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN from the key store with which the instance is associated for TDE encryption.',
        }),
    ).exactOptional(),
    DbInstancePort: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the port that the DB instance listens on. If the DB instance is part of a DB cluster, this can be a different port than the DB cluster port.',
        }),
    ).exactOptional(),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.',
        }),
    ).exactOptional(),
    StorageEncrypted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Not supported: The encryption for DB instances is managed by the DB cluster.',
        }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Not supported: The encryption for DB instances is managed by the DB cluster.',
        }),
    ).exactOptional(),
    DbiResourceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Region-unique, immutable identifier for the DB instance. This identifier is found in Amazon CloudTrail log entries whenever the Amazon KMS key for the DB instance is accessed.',
        }),
    ).exactOptional(),
    CACertificateIdentifier: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the CA certificate for this DB instance.' }),
    ).exactOptional(),
    DomainMemberships: DomainMembershipListSchema.and(
      z.any().openapi({ description: 'Not supported' }),
    ).exactOptional(),
    CopyTagsToSnapshot: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether tags are copied from the DB instance to snapshots of the DB instance.',
        }),
    ).exactOptional(),
    MonitoringInterval: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.',
        }),
    ).exactOptional(),
    EnhancedMonitoringResourceArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log stream that receives the Enhanced Monitoring metrics data for the DB instance.',
        }),
    ).exactOptional(),
    MonitoringRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN for the IAM role that permits Neptune to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.',
        }),
    ).exactOptional(),
    PromotionTier: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance. ',
        }),
    ).exactOptional(),
    DBInstanceArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the DB instance.' }),
    ).exactOptional(),
    Timezone: StringSchema.and(z.any().openapi({ description: 'Not supported.' })).exactOptional(),
    IAMDatabaseAuthenticationEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if Amazon Identity and Access Management (IAM) authentication is enabled, and otherwise false.',
        }),
    ).exactOptional(),
    PerformanceInsightsEnabled: BooleanOptionalSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    PerformanceInsightsKMSKeyId: StringSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    EnabledCloudwatchLogsExports: LogTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of log types that this DB instance is configured to export to CloudWatch Logs.',
        }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether or not the DB instance has deletion protection enabled. The instance can\'t be deleted when deletion protection is enabled. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting a DB Instance</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>',
    required: [],
  })
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

const ProvisionedIopsNotAvailableInAZFaultSchema = z
  .any()
  .openapi('ProvisionedIopsNotAvailableInAZFault')

const OptionGroupNotFoundFaultSchema = z.any().openapi('OptionGroupNotFoundFault')

const StorageTypeNotSupportedFaultSchema = z.any().openapi('StorageTypeNotSupportedFault')

const AuthorizationNotFoundFaultSchema = z.any().openapi('AuthorizationNotFoundFault')

const DomainNotFoundFaultSchema = z.any().openapi('DomainNotFoundFault')

const CreateDBParameterGroupResultSchema = z
  .object({ DBParameterGroup: DBParameterGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateDBParameterGroupResult')

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

const ReadersArnListSchema = z.array(StringSchema).openapi('ReadersArnList')

const GlobalClusterMemberSchema = z
  .object({
    DBClusterArn: StringSchema.and(
      z
        .any()
        .openapi({ description: ' The Amazon Resource Name (ARN) for each Neptune cluster. ' }),
    ).exactOptional(),
    Readers: ReadersArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) for each read-only secondary cluster associated with the Neptune global database. ',
        }),
    ).exactOptional(),
    IsWriter: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies whether the Neptune cluster is the primary cluster (that is, has read-write capability) for the Neptune global database with which it is associated. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' A data structure with information about any primary and secondary clusters associated with an Neptune global database. ',
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
            'Contains a user-supplied global database cluster identifier. This identifier is the unique key that identifies a global database.',
        }),
    ).exactOptional(),
    GlobalClusterResourceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An immutable identifier for the global database that is unique within in all regions. This identifier is found in CloudTrail log entries whenever the KMS key for the DB cluster is accessed.',
        }),
    ).exactOptional(),
    GlobalClusterArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the global database.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'Specifies the current state of this global database.' }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Neptune database engine used by the global database (<code>"neptune"</code>).',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'The Neptune engine version used by the global database.' }),
    ).exactOptional(),
    StorageEncrypted: BooleanOptionalSchema.and(
      z.any().openapi({ description: 'The storage encryption setting for the global database.' }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z.any().openapi({ description: 'The deletion protection setting for the global database.' }),
    ).exactOptional(),
    GlobalClusterMembers: GlobalClusterMemberListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of cluster ARNs and instance ARNs for all the DB clusters that are part of the global database.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains the details of an Amazon Neptune global database.</p> <p>This data type is used as a response element for the <a>CreateGlobalCluster</a>, <a>DescribeGlobalClusters</a>, <a>ModifyGlobalCluster</a>, <a>DeleteGlobalCluster</a>, <a>FailoverGlobalCluster</a>, and <a>RemoveFromGlobalCluster</a> actions.</p>',
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

const DeleteDBClusterEndpointOutputSchema = z
  .object({
    DBClusterEndpointIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier associated with the endpoint. This parameter is stored as a lowercase string.',
        }),
    ).exactOptional(),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.',
        }),
    ).exactOptional(),
    DBClusterEndpointResourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.',
        }),
    ).exactOptional(),
    Endpoint: StringSchema.and(
      z.any().openapi({ description: 'The DNS address of the endpoint.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that cannot be used for a certain kind of cluster, such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.',
        }),
    ).exactOptional(),
    EndpointType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>CUSTOM</code>.',
        }),
    ).exactOptional(),
    CustomEndpointType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type associated with a custom endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.',
        }),
    ).exactOptional(),
    StaticMembers: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of DB instance identifiers that are part of the custom endpoint group.',
        }),
    ).exactOptional(),
    ExcludedMembers: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.",
        }),
    ).exactOptional(),
    DBClusterEndpointArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the endpoint.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p>',
    required: [],
  })
  .openapi('DeleteDBClusterEndpointOutput')

const InvalidDBClusterEndpointStateFaultSchema = z
  .any()
  .openapi('InvalidDBClusterEndpointStateFault')

const DBClusterEndpointNotFoundFaultSchema = z.any().openapi('DBClusterEndpointNotFoundFault')

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

const DBClusterEndpointSchema = z
  .object({
    DBClusterEndpointIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier associated with the endpoint. This parameter is stored as a lowercase string.',
        }),
    ).exactOptional(),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.',
        }),
    ).exactOptional(),
    DBClusterEndpointResourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.',
        }),
    ).exactOptional(),
    Endpoint: StringSchema.and(
      z.any().openapi({ description: 'The DNS address of the endpoint.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that cannot be used for a certain kind of cluster, such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.',
        }),
    ).exactOptional(),
    EndpointType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>CUSTOM</code>.',
        }),
    ).exactOptional(),
    CustomEndpointType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type associated with a custom endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.',
        }),
    ).exactOptional(),
    StaticMembers: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of DB instance identifiers that are part of the custom endpoint group.',
        }),
    ).exactOptional(),
    ExcludedMembers: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.",
        }),
    ).exactOptional(),
    DBClusterEndpointArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the endpoint.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon Neptune DB instance endpoints, see <code>Endpoint</code>.</p>',
    required: [],
  })
  .openapi('DBClusterEndpoint')

const DBClusterEndpointListSchema = z
  .array(DBClusterEndpointSchema.and(z.any().openapi({ xml: { name: 'DBClusterEndpointList' } })))
  .openapi('DBClusterEndpointList')

const DBClusterEndpointMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous <code>DescribeDBClusterEndpoints</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    DBClusterEndpoints: DBClusterEndpointListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the details of the endpoints associated with the cluster and matching any filter conditions.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DBClusterEndpointMessage')

const FilterValueListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'Value' } })))
  .openapi('FilterValueList')

const FilterSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ),
    Values: FilterValueListSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ),
  })
  .openapi({ required: ['Name', 'Values'], description: 'This type is not currently supported.' })
  .openapi('Filter')

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
            ' An optional pagination token provided by a previous <code>DescribeDBClusterParameterGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    DBClusterParameterGroups: DBClusterParameterGroupListSchema.and(
      z.any().openapi({ description: 'A list of DB cluster parameter groups.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
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
      z.any().openapi({ description: 'Specifies the engine specific parameters type.' }),
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
            ' Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.',
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
  .openapi({ description: 'Specifies a parameter.', required: [] })
  .openapi('Parameter')

const ParametersListSchema = z
  .array(ParameterSchema.and(z.any().openapi({ xml: { name: 'Parameter' } })))
  .openapi('ParametersList')

const DBClusterParameterGroupDetailsSchema = z
  .object({
    Parameters: ParametersListSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides a list of parameters for the DB cluster parameter group.',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous DescribeDBClusterParameters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> .',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
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
            '<p>The name of the manual DB cluster snapshot attribute.</p> <p>The attribute named <code>restore</code> refers to the list of Amazon accounts that have permission to copy or restore the manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>',
        }),
    ).exactOptional(),
    AttributeValues: AttributeValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value(s) for the manual DB cluster snapshot attribute.</p> <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element returns a list of IDs of the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If a value of <code>all</code> is in the list, then the manual DB cluster snapshot is public and available for any Amazon account to copy or restore.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains the name and values of a manual DB cluster snapshot attribute.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>',
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
          description:
            'The identifier of the manual DB cluster snapshot that the attributes apply to.',
        }),
    ).exactOptional(),
    DBClusterSnapshotAttributes: DBClusterSnapshotAttributeListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of attributes and values for the manual DB cluster snapshot.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>',
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
            ' An optional pagination token provided by a previous <a>DescribeDBClusterSnapshots</a> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    DBClusterSnapshots: DBClusterSnapshotListSchema.and(
      z.any().openapi({ description: 'Provides a list of DB cluster snapshots for the user.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
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
            'A pagination token that can be used in a subsequent DescribeDBClusters request.',
        }),
    ).exactOptional(),
    DBClusters: DBClusterListSchema.and(
      z.any().openapi({ description: 'Contains a list of DB clusters for the user.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DBClusterMessage')

const CharacterSetSchema = z
  .object({
    CharacterSetName: StringSchema.and(
      z.any().openapi({ description: 'The name of the character set.' }),
    ).exactOptional(),
    CharacterSetDescription: StringSchema.and(
      z.any().openapi({ description: 'The description of the character set.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies a character set.', required: [] })
  .openapi('CharacterSet')

const SupportedCharacterSetsListSchema = z
  .array(CharacterSetSchema.and(z.any().openapi({ xml: { name: 'CharacterSet' } })))
  .openapi('SupportedCharacterSetsList')

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
          description: 'The version of the database engine that a DB instance can be upgraded to.',
        }),
    ).exactOptional(),
    AutoUpgrade: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether the target version is applied to any source DB instances that have AutoMinorVersionUpgrade set to true.',
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
    SupportsGlobalDatabases: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether you can use Neptune global databases with the target engine version.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The version of the database engine that a DB instance can be upgraded to.',
    required: [],
  })
  .openapi('UpgradeTarget')

const ValidUpgradeTargetListSchema = z
  .array(UpgradeTargetSchema.and(z.any().openapi({ xml: { name: 'UpgradeTarget' } })))
  .openapi('ValidUpgradeTargetList')

const TimezoneSchema = z
  .object({
    TimezoneName: StringSchema.and(
      z.any().openapi({ description: 'The name of the time zone.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A time zone associated with a <a>DBInstance</a>.', required: [] })
  .openapi('Timezone')

const SupportedTimezonesListSchema = z
  .array(TimezoneSchema.and(z.any().openapi({ xml: { name: 'Timezone' } })))
  .openapi('SupportedTimezonesList')

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
          description: 'The name of the DB parameter group family for the database engine.',
        }),
    ).exactOptional(),
    DBEngineDescription: StringSchema.and(
      z.any().openapi({ description: 'The description of the database engine.' }),
    ).exactOptional(),
    DBEngineVersionDescription: StringSchema.and(
      z.any().openapi({ description: 'The description of the database engine version.' }),
    ).exactOptional(),
    DefaultCharacterSet: CharacterSetSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    SupportedCharacterSets: SupportedCharacterSetsListSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    ValidUpgradeTarget: ValidUpgradeTargetListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of engine versions that this database engine version can be upgraded to.',
        }),
    ).exactOptional(),
    SupportedTimezones: SupportedTimezonesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the time zones supported by this engine for the <code>Timezone</code> parameter of the <code>CreateDBInstance</code> action.',
        }),
    ).exactOptional(),
    ExportableLogTypes: LogTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The types of logs that the database engine has available for export to CloudWatch Logs.',
        }),
    ).exactOptional(),
    SupportsLogExportsToCloudwatchLogs: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether the engine version supports exporting the log types specified by ExportableLogTypes to CloudWatch Logs.',
        }),
    ).exactOptional(),
    SupportsReadReplica: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether the database engine version supports read replicas.',
        }),
    ).exactOptional(),
    SupportsGlobalDatabases: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether you can use Aurora global databases with a specific DB engine version.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>.',
    required: [],
  })
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
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    DBEngineVersions: DBEngineVersionListSchema.and(
      z.any().openapi({ description: ' A list of <code>DBEngineVersion</code> elements.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
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
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> .',
        }),
    ).exactOptional(),
    DBInstances: DBInstanceListSchema.and(
      z.any().openapi({ description: ' A list of <a>DBInstance</a> instances.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DBInstanceMessage')

const DBParameterGroupListSchema = z
  .array(DBParameterGroupSchema.and(z.any().openapi({ xml: { name: 'DBParameterGroup' } })))
  .openapi('DBParameterGroupList')

const DBParameterGroupsMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    DBParameterGroups: DBParameterGroupListSchema.and(
      z.any().openapi({ description: 'A list of <a>DBParameterGroup</a> instances.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DBParameterGroupsMessage')

const DBParameterGroupDetailsSchema = z
  .object({
    Parameters: ParametersListSchema.and(
      z.any().openapi({ description: 'A list of <a>Parameter</a> values.' }),
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
  .openapi({ required: [] })
  .openapi('DBParameterGroupDetails')

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
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    DBSubnetGroups: DBSubnetGroupsSchema.and(
      z.any().openapi({ description: ' A list of <a>DBSubnetGroup</a> instances.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DBSubnetGroupMessage')

const EngineDefaultsSchema = z
  .object({
    DBParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the name of the DB parameter group family that the engine default parameters apply to.',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous EngineDefaults request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> .',
        }),
    ).exactOptional(),
    Parameters: ParametersListSchema.and(
      z.any().openapi({ description: 'Contains a list of engine default parameters.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.',
    required: [],
  })
  .openapi('EngineDefaults')

const DescribeEngineDefaultClusterParametersResultSchema = z
  .object({ EngineDefaults: EngineDefaultsSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DescribeEngineDefaultClusterParametersResult')

const DescribeEngineDefaultParametersResultSchema = z
  .object({ EngineDefaults: EngineDefaultsSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DescribeEngineDefaultParametersResult')

const EventCategoriesMapSchema = z
  .object({
    SourceType: StringSchema.and(
      z.any().openapi({ description: 'The source type that the returned categories belong to' }),
    ).exactOptional(),
    EventCategories: EventCategoriesListSchema.and(
      z.any().openapi({ description: 'The event categories for the specified source type' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action.',
    required: [],
  })
  .openapi('EventCategoriesMap')

const EventCategoriesMapListSchema = z
  .array(EventCategoriesMapSchema.and(z.any().openapi({ xml: { name: 'EventCategoriesMap' } })))
  .openapi('EventCategoriesMapList')

const EventCategoriesMessageSchema = z
  .object({
    EventCategoriesMapList: EventCategoriesMapListSchema.and(
      z.any().openapi({ description: 'A list of EventCategoriesMap data types.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
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
            ' An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    EventSubscriptionsList: EventSubscriptionsListSchema.and(
      z.any().openapi({ description: 'A list of EventSubscriptions data types.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
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
  .openapi({
    description:
      ' This data type is used as a response element in the <a>DescribeEvents</a> action.',
    required: [],
  })
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
            ' An optional pagination token provided by a previous Events request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> .',
        }),
    ).exactOptional(),
    Events: EventListSchema.and(
      z.any().openapi({ description: ' A list of <a>Event</a> instances.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EventsMessage')

const GlobalClusterListSchema = z
  .array(GlobalClusterSchema.and(z.any().openapi({ xml: { name: 'GlobalClusterMember' } })))
  .openapi('GlobalClusterList')

const GlobalClustersMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token. If this parameter is returned in the response, more records are available, which can be retrieved by one or more additional calls to <code>DescribeGlobalClusters</code>.',
        }),
    ).exactOptional(),
    GlobalClusters: GlobalClusterListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of global clusters and instances returned by this request.',
        }),
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
      z.any().openapi({ description: 'The engine type of a DB instance.' }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'The engine version of a DB instance.' }),
    ).exactOptional(),
    DBInstanceClass: StringSchema.and(
      z.any().openapi({ description: 'The DB instance class for a DB instance.' }),
    ).exactOptional(),
    LicenseModel: StringSchema.and(
      z.any().openapi({ description: 'The license model for a DB instance.' }),
    ).exactOptional(),
    AvailabilityZones: AvailabilityZoneListSchema.and(
      z.any().openapi({ description: 'A list of Availability Zones for a DB instance.' }),
    ).exactOptional(),
    MultiAZCapable: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether a DB instance is Multi-AZ capable.' }),
    ).exactOptional(),
    ReadReplicaCapable: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether a DB instance can have a Read Replica.' }),
    ).exactOptional(),
    Vpc: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether a DB instance is in a VPC.' }),
    ).exactOptional(),
    SupportsStorageEncryption: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates whether a DB instance supports encrypted storage.' }),
    ).exactOptional(),
    StorageType: StringSchema.and(
      z.any().openapi({ description: 'Indicates the storage type for a DB instance.' }),
    ).exactOptional(),
    SupportsIops: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates whether a DB instance supports provisioned IOPS.' }),
    ).exactOptional(),
    SupportsEnhancedMonitoring: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether a DB instance supports Enhanced Monitoring at intervals from 1 to 60 seconds.',
        }),
    ).exactOptional(),
    SupportsIAMDatabaseAuthentication: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether a DB instance supports IAM database authentication.',
        }),
    ).exactOptional(),
    SupportsPerformanceInsights: BooleanSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    MinStorageSize: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'Minimum storage size for a DB instance.' }),
    ).exactOptional(),
    MaxStorageSize: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'Maximum storage size for a DB instance.' }),
    ).exactOptional(),
    MinIopsPerDbInstance: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'Minimum total provisioned IOPS for a DB instance.' }),
    ).exactOptional(),
    MaxIopsPerDbInstance: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'Maximum total provisioned IOPS for a DB instance.' }),
    ).exactOptional(),
    MinIopsPerGib: DoubleOptionalSchema.and(
      z.any().openapi({ description: 'Minimum provisioned IOPS per GiB for a DB instance.' }),
    ).exactOptional(),
    MaxIopsPerGib: DoubleOptionalSchema.and(
      z.any().openapi({ description: 'Maximum provisioned IOPS per GiB for a DB instance.' }),
    ).exactOptional(),
    SupportsGlobalDatabases: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether you can use Neptune global databases with a specific combination of other DB engine attributes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action.</p>',
    required: [],
  })
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
          description:
            'An <a>OrderableDBInstanceOption</a> structure containing information about orderable options for the DB instance.',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous OrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> .',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
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
      z
        .any()
        .openapi({ description: 'A list of the pending maintenance actions for the resource.' }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the response includes only records beyond the marker, up to a number of records specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PendingMaintenanceActionsMessage')

const RangeSchema = z
  .object({
    From: IntegerSchema.and(
      z.any().openapi({ description: 'The minimum value in the range.' }),
    ).exactOptional(),
    To: IntegerSchema.and(
      z.any().openapi({ description: 'The maximum value in the range.' }),
    ).exactOptional(),
    Step: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "The step value for the range. For example, if you have a range of 5,000 to 10,000, with a step value of 1,000, the valid values start at 5,000 and step up by 1,000. Even though 7,500 is within the range, it isn't a valid value for the range. The valid values are 5,000, 6,000, 7,000, 8,000...",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A range of integer values.', required: [] })
  .openapi('Range')

const RangeListSchema = z
  .array(RangeSchema.and(z.any().openapi({ xml: { name: 'Range' } })))
  .openapi('RangeList')

const DoubleSchema = z.float64().openapi('Double')

const DoubleRangeSchema = z
  .object({
    From: DoubleSchema.and(
      z.any().openapi({ description: 'The minimum value in the range.' }),
    ).exactOptional(),
    To: DoubleSchema.and(
      z.any().openapi({ description: 'The maximum value in the range.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A range of double values.', required: [] })
  .openapi('DoubleRange')

const DoubleRangeListSchema = z
  .array(DoubleRangeSchema.and(z.any().openapi({ xml: { name: 'DoubleRange' } })))
  .openapi('DoubleRangeList')

const ValidStorageOptionsSchema = z
  .object({
    StorageType: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The valid storage types for your DB instance. For example, gp2, io1.',
        }),
    ).exactOptional(),
    StorageSize: RangeListSchema.and(
      z
        .any()
        .openapi({
          description: 'The valid range of storage in gibibytes. For example, 100 to 16384.',
        }),
    ).exactOptional(),
    ProvisionedIops: RangeListSchema.and(
      z
        .any()
        .openapi({ description: 'The valid range of provisioned IOPS. For example, 1000-20000.' }),
    ).exactOptional(),
    IopsToStorageRatio: DoubleRangeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The valid range of Provisioned IOPS to gibibytes of storage multiplier. For example, 3-10, which means that provisioned IOPS can be between 3 and 10 times storage.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Information about valid modifications that you can make to your DB instance.</p> <p>Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action.</p>',
    required: [],
  })
  .openapi('ValidStorageOptions')

const ValidStorageOptionsListSchema = z
  .array(ValidStorageOptionsSchema.and(z.any().openapi({ xml: { name: 'ValidStorageOptions' } })))
  .openapi('ValidStorageOptionsList')

const ValidDBInstanceModificationsMessageSchema = z
  .object({
    Storage: ValidStorageOptionsListSchema.and(
      z.any().openapi({ description: 'Valid storage options for your DB instance.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. You can use this information when you call <a>ModifyDBInstance</a>. ',
    required: [],
  })
  .openapi('ValidDBInstanceModificationsMessage')

const DescribeValidDBInstanceModificationsResultSchema = z
  .object({
    ValidDBInstanceModificationsMessage: ValidDBInstanceModificationsMessageSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeValidDBInstanceModificationsResult')

const FailoverDBClusterResultSchema = z
  .object({ DBCluster: DBClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('FailoverDBClusterResult')

const FailoverGlobalClusterResultSchema = z
  .object({ GlobalCluster: GlobalClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('FailoverGlobalClusterResult')

const TagListSchema = z
  .array(TagSchema.and(z.any().openapi({ xml: { name: 'Tag' } })))
  .openapi('TagList')

const TagListMessageSchema = z
  .object({
    TagList: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'List of tags returned by the ListTagsForResource operation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagListMessage')

const ModifyDBClusterResultSchema = z
  .object({ DBCluster: DBClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ModifyDBClusterResult')

const InvalidDBSecurityGroupStateFaultSchema = z.any().openapi('InvalidDBSecurityGroupStateFault')

const ModifyDBClusterEndpointOutputSchema = z
  .object({
    DBClusterEndpointIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier associated with the endpoint. This parameter is stored as a lowercase string.',
        }),
    ).exactOptional(),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.',
        }),
    ).exactOptional(),
    DBClusterEndpointResourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.',
        }),
    ).exactOptional(),
    Endpoint: StringSchema.and(
      z.any().openapi({ description: 'The DNS address of the endpoint.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that cannot be used for a certain kind of cluster, such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.',
        }),
    ).exactOptional(),
    EndpointType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>CUSTOM</code>.',
        }),
    ).exactOptional(),
    CustomEndpointType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type associated with a custom endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.',
        }),
    ).exactOptional(),
    StaticMembers: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of DB instance identifiers that are part of the custom endpoint group.',
        }),
    ).exactOptional(),
    ExcludedMembers: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.",
        }),
    ).exactOptional(),
    DBClusterEndpointArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the endpoint.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p>',
    required: [],
  })
  .openapi('ModifyDBClusterEndpointOutput')

const DBClusterParameterGroupNameMessageSchema = z
  .object({
    DBClusterParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters or numbers.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
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

const CertificateNotFoundFaultSchema = z.any().openapi('CertificateNotFoundFault')

const DBParameterGroupNameMessageSchema = z
  .object({
    DBParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'Provides the name of the DB parameter group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DBParameterGroupNameMessage')

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

const PromoteReadReplicaDBClusterResultSchema = z
  .object({ DBCluster: DBClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PromoteReadReplicaDBClusterResult')

const RebootDBInstanceResultSchema = z
  .object({ DBInstance: DBInstanceSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RebootDBInstanceResult')

const RemoveFromGlobalClusterResultSchema = z
  .object({ GlobalCluster: GlobalClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RemoveFromGlobalClusterResult')

const DBClusterRoleNotFoundFaultSchema = z.any().openapi('DBClusterRoleNotFoundFault')

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

const AddRoleToDBClusterMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the DB cluster to associate the IAM role with.' }),
    ),
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role to associate with the Neptune DB cluster, for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.',
        }),
    ),
    FeatureName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the feature for the Neptune DB cluster that the IAM role is to be associated with. For the list of supported feature names, see <a href="neptune/latest/userguide/api-other-apis.html#DBEngineVersion">DBEngineVersion</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DBClusterIdentifier', 'RoleArn'], title: 'AddRoleToDBClusterMessage' })
  .openapi('AddRoleToDBClusterMessage')

const AddSourceIdentifierToSubscriptionMessageSchema = z
  .object({
    SubscriptionName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the event notification subscription you want to add a source identifier to.',
        }),
    ),
    SourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the event source to be added.</p> <p>Constraints:</p> <ul> <li> <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['SubscriptionName', 'SourceIdentifier'],
    title: 'AddSourceIdentifierToSubscriptionMessage',
  })
  .openapi('AddSourceIdentifierToSubscriptionMessage')

const AddTagsToResourceMessageSchema = z
  .object({
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Neptune resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the Amazon Neptune resource.' }),
    ),
  })
  .openapi({ required: ['ResourceName', 'Tags'], title: 'AddTagsToResourceMessage' })
  .openapi('AddTagsToResourceMessage')

const ApplyPendingMaintenanceActionMessageSchema = z
  .object({
    ResourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.',
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
            "<p>A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in request of type <code>immediate</code> can't be undone.</p> <p>Valid values:</p> <ul> <li> <p> <code>immediate</code> - Apply the maintenance action immediately.</p> </li> <li> <p> <code>next-maintenance</code> - Apply the maintenance action during the next maintenance window for the resource.</p> </li> <li> <p> <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code> opt-in requests.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['ResourceIdentifier', 'ApplyAction', 'OptInType'],
    title: 'ApplyPendingMaintenanceActionMessage',
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
      '<p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs.</p>',
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
            '<p>The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid DB cluster parameter group.</p> </li> <li> <p>If the source DB cluster parameter group is in the same Amazon Region as the copy, specify a valid DB parameter group identifier, for example <code>my-db-cluster-param-group</code>, or a valid ARN.</p> </li> <li> <p>If the source DB parameter group is in a different Amazon Region than the copy, specify a valid DB cluster parameter group ARN, for example <code>arn:aws:rds:us-east-1:123456789012:cluster-pg:custom-cluster-group1</code>.</p> </li> </ul>',
        }),
    ),
    TargetDBClusterParameterGroupIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier for the copied DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster-param-group1</code> </p>',
        }),
    ),
    TargetDBClusterParameterGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'A description for the copied DB cluster parameter group.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags to be assigned to the copied DB cluster parameter group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'SourceDBClusterParameterGroupIdentifier',
      'TargetDBClusterParameterGroupIdentifier',
      'TargetDBClusterParameterGroupDescription',
    ],
    title: 'CopyDBClusterParameterGroupMessage',
  })
  .openapi('CopyDBClusterParameterGroupMessage')

const CopyDBClusterSnapshotMessageSchema = z
  .object({
    SourceDBClusterSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the DB cluster snapshot to copy. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid system snapshot in the "available" state.</p> </li> <li> <p>Specify a valid DB snapshot identifier.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot1</code> </p>',
        }),
    ),
    TargetDBClusterSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot2</code> </p>',
        }),
    ),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon Amazon KMS key ID for an encrypted DB cluster snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p> <p>If you copy an encrypted DB cluster snapshot from your Amazon account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you don't specify a value for <code>KmsKeyId</code>, then the copy of the DB cluster snapshot is encrypted with the same KMS key as the source DB cluster snapshot.</p> <p>If you copy an encrypted DB cluster snapshot that is shared from another Amazon account, then you must specify a value for <code>KmsKeyId</code>.</p> <p> KMS encryption keys are specific to the Amazon Region that they are created in, and you can't use encryption keys from one Amazon Region in another Amazon Region.</p> <p>You cannot encrypt an unencrypted DB cluster snapshot when you copy it. If you try to copy an unencrypted DB cluster snapshot and specify a value for the KmsKeyId parameter, an error is returned.</p>",
        }),
    ).exactOptional(),
    PreSignedUrl: StringSchema.and(
      z.any().openapi({ description: 'Not currently supported.' }),
    ).exactOptional(),
    CopyTags: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'True to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot, and otherwise false. The default is false.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to assign to the new DB cluster snapshot copy.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SourceDBClusterSnapshotIdentifier', 'TargetDBClusterSnapshotIdentifier'],
    title: 'CopyDBClusterSnapshotMessage',
  })
  .openapi('CopyDBClusterSnapshotMessage')

const CopyDBParameterGroupMessageSchema = z
  .object({
    SourceDBParameterGroupIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier or ARN for the source DB parameter group. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid DB parameter group.</p> </li> <li> <p>Must specify a valid DB parameter group identifier, for example <code>my-db-param-group</code>, or a valid ARN.</p> </li> </ul>',
        }),
    ),
    TargetDBParameterGroupIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier for the copied DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank.</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-db-parameter-group</code> </p>',
        }),
    ),
    TargetDBParameterGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'A description for the copied DB parameter group.' }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the copied DB parameter group.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'SourceDBParameterGroupIdentifier',
      'TargetDBParameterGroupIdentifier',
      'TargetDBParameterGroupDescription',
    ],
    title: 'CopyDBParameterGroupMessage',
  })
  .openapi('CopyDBParameterGroupMessage')

const CreateDBClusterEndpointMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.',
        }),
    ),
    DBClusterEndpointIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier to use for the new endpoint. This parameter is stored as a lowercase string.',
        }),
    ),
    EndpointType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.',
        }),
    ),
    StaticMembers: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of DB instance identifiers that are part of the custom endpoint group.',
        }),
    ).exactOptional(),
    ExcludedMembers: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.",
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the Amazon Neptune resource.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBClusterIdentifier', 'DBClusterEndpointIdentifier', 'EndpointType'],
    title: 'CreateDBClusterEndpointMessage',
  })
  .openapi('CreateDBClusterEndpointMessage')

const VpcSecurityGroupIdListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'VpcSecurityGroupId' } })))
  .openapi('VpcSecurityGroupIdList')

const ServerlessV2ScalingConfigurationSchema = z
  .object({
    MinCapacity: DoubleOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on.',
        }),
    ).exactOptional(),
    MaxCapacity: DoubleOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>',
    required: [],
  })
  .openapi('ServerlessV2ScalingConfiguration')

const CreateDBClusterMessageSchema = z
  .object({
    AvailabilityZones: AvailabilityZonesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of EC2 Availability Zones that instances in the DB cluster can be created in.',
        }),
    ).exactOptional(),
    BackupRetentionPeriod: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>',
        }),
    ).exactOptional(),
    CharacterSetName: StringSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    CopyTagsToSnapshot: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <i>If set to <code>true</code>, tags are copied to any snapshot of the DB cluster that is created.</i> ',
        }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon Neptune will not create a database in the DB cluster you are creating.',
        }),
    ).exactOptional(),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The DB cluster identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>',
        }),
    ),
    DBClusterParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, the default is used.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>',
        }),
    ).exactOptional(),
    VpcSecurityGroupIds: VpcSecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of EC2 VPC security groups to associate with this DB cluster.',
        }),
    ).exactOptional(),
    DBSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A DB subnet group to associate with this DB cluster.</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>',
        }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the database engine to be used for this DB cluster.</p> <p>Valid Values: <code>neptune</code> </p>',
        }),
    ),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The version number of the database engine to use for the new DB cluster.</p> <p>Example: <code>1.0.2.1</code> </p>',
        }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The port number on which the instances in the DB cluster accept connections.</p> <p> Default: <code>8182</code> </p>',
        }),
    ).exactOptional(),
    MasterUsername: StringSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    MasterUserPassword: StringSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    OptionGroupName: StringSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    PreferredBackupWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The daily time range during which automated backups are created if automated backups are enabled using the <code>BackupRetentionPeriod</code> parameter.</p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Neptune User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Neptune User Guide.</i> </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>',
        }),
    ).exactOptional(),
    ReplicationSourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to assign to the new DB cluster.' }),
    ).exactOptional(),
    StorageEncrypted: BooleanOptionalSchema.and(
      z.any().openapi({ description: 'Specifies whether the DB cluster is encrypted.' }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon KMS key identifier for an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If an encryption key is not specified in <code>KmsKeyId</code>:</p> <ul> <li> <p>If <code>ReplicationSourceIdentifier</code> identifies an encrypted source, then Amazon Neptune will use the encryption key used to encrypt the source. Otherwise, Amazon Neptune will use your default encryption key.</p> </li> <li> <p>If the <code>StorageEncrypted</code> parameter is true and <code>ReplicationSourceIdentifier</code> is not specified, then Amazon Neptune will use your default encryption key.</p> </li> </ul> <p>Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a different default encryption key for each Amazon Region.</p> <p>If you create a Read Replica of an encrypted DB cluster in another Amazon Region, you must set <code>KmsKeyId</code> to a KMS key ID that is valid in the destination Amazon Region. This key is used to encrypt the Read Replica in that Amazon Region.</p>',
        }),
    ).exactOptional(),
    PreSignedUrl: StringSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ).exactOptional(),
    EnableIAMDatabaseAuthentication: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If set to <code>true</code>, enables Amazon Identity and Access Management (IAM) authentication for the entire DB cluster (this cannot be set at an instance level).</p> <p>Default: <code>false</code>.</p>',
        }),
    ).exactOptional(),
    EnableCloudwatchLogsExports: LogTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of log types that need to be enabled for exporting to CloudWatch Logs.',
        }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is enabled.",
        }),
    ).exactOptional(),
    ServerlessV2ScalingConfiguration: ServerlessV2ScalingConfigurationSchema.exactOptional(),
    GlobalClusterIdentifier: GlobalClusterIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Neptune global database to which this new DB cluster should be added.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DBClusterIdentifier', 'Engine'], title: 'CreateDBClusterMessage' })
  .openapi('CreateDBClusterMessage')

const CreateDBClusterParameterGroupMessageSchema = z
  .object({
    DBClusterParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DBClusterParameterGroup.</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>',
        }),
    ),
    DBParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.',
        }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description for the DB cluster parameter group.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'The tags to be assigned to the new DB cluster parameter group.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBClusterParameterGroupName', 'DBParameterGroupFamily', 'Description'],
    title: 'CreateDBClusterParameterGroupMessage',
  })
  .openapi('CreateDBClusterParameterGroupMessage')

const CreateDBClusterSnapshotMessageSchema = z
  .object({
    DBClusterSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the DB cluster snapshot. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1-snapshot1</code> </p>',
        }),
    ),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the DB cluster to create a snapshot for. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>',
        }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the DB cluster snapshot.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBClusterSnapshotIdentifier', 'DBClusterIdentifier'],
    title: 'CreateDBClusterSnapshotMessage',
  })
  .openapi('CreateDBClusterSnapshotMessage')

const DBSecurityGroupNameListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'DBSecurityGroupName' } })))
  .openapi('DBSecurityGroupNameList')

const CreateDBInstanceMessageSchema = z
  .object({
    DBName: StringSchema.and(z.any().openapi({ description: 'Not supported.' })).exactOptional(),
    DBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>',
        }),
    ),
    AllocatedStorage: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    DBInstanceClass: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all Amazon Regions.',
        }),
    ),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the database engine to be used for this instance.</p> <p>Valid Values: <code>neptune</code> </p>',
        }),
    ),
    MasterUsername: StringSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    MasterUserPassword: StringSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    DBSecurityGroups: DBSecurityGroupNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of DB security groups to associate with this DB instance.</p> <p>Default: The default DB security group for the database engine.</p>',
        }),
    ).exactOptional(),
    VpcSecurityGroupIds: VpcSecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of EC2 VPC security groups to associate with this DB instance.</p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>",
        }),
    ).exactOptional(),
    AvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The EC2 Availability Zone that the DB instance is created in</p> <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Region.</p> <p> Example: <code>us-east-1d</code> </p> <p> Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is set to <code>true</code>. The specified Availability Zone must be in the same Amazon Region as the current endpoint.</p>",
        }),
    ).exactOptional(),
    DBSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A DB subnet group to associate with this DB instance.</p> <p>If there is no DB subnet group, then it is a non-VPC DB instance.</p>',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week.</p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>',
        }),
    ).exactOptional(),
    DBParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the DB parameter group to associate with this DB instance. If this argument is omitted, the default DBParameterGroup for the specified engine is used.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>',
        }),
    ).exactOptional(),
    BackupRetentionPeriod: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of days for which automated backups are retained.</p> <p>Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 0 to 35</p> </li> <li> <p>Cannot be set to 0 if the DB instance is a source to Read Replicas</p> </li> </ul>',
        }),
    ).exactOptional(),
    PreferredBackupWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The daily time range during which automated backups are created.</p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p>',
        }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The port number on which the database accepts connections.</p> <p>Not applicable. The port is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p> Default: <code>8182</code> </p> <p>Type: Integer</p>',
        }),
    ).exactOptional(),
    MultiAZ: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies if the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the MultiAZ parameter is set to true.",
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the database engine to use. Currently, setting this parameter has no effect.',
        }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates that minor engine upgrades are applied automatically to the DB instance during the maintenance window.</p> <p>Default: <code>true</code> </p>',
        }),
    ).exactOptional(),
    LicenseModel: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>License model information for this DB instance.</p> <p> Valid values: <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code> </p>',
        }),
    ).exactOptional(),
    Iops: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.',
        }),
    ).exactOptional(),
    OptionGroupName: StringSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    CharacterSetName: StringSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    PubliclyAccessible: BooleanOptionalSchema.and(
      z.any().openapi({ deprecated: true, description: 'This flag should no longer be used.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to assign to the new instance.' }),
    ).exactOptional(),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the DB cluster that the instance will belong to.</p> <p>For information on creating a DB cluster, see <a>CreateDBCluster</a>.</p> <p>Type: String</p>',
        }),
    ),
    StorageType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the storage type to be associated with the DB instance.</p> <p>Not applicable. Storage is managed by the DB Cluster.</p>',
        }),
    ).exactOptional(),
    TdeCredentialArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN from the key store with which to associate the instance for TDE encryption.',
        }),
    ).exactOptional(),
    TdeCredentialPassword: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The password for the given ARN from the key store in order to access the device.',
        }),
    ).exactOptional(),
    StorageEncrypted: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether the DB instance is encrypted.</p> <p>Not applicable. The encryption for DB instances is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: false</p>',
        }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon KMS key identifier for an encrypted DB instance.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same Amazon account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KM encryption key.</p> <p>Not applicable. The KMS key identifier is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>If the <code>StorageEncrypted</code> parameter is true, and you do not specify a value for the <code>KmsKeyId</code> parameter, then Amazon Neptune will use your default encryption key. Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a different default encryption key for each Amazon Region.</p>',
        }),
    ).exactOptional(),
    Domain: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Specify the Active Directory Domain to create the instance in.' }),
    ).exactOptional(),
    CopyTagsToSnapshot: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.',
        }),
    ).exactOptional(),
    MonitoringInterval: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>',
        }),
    ).exactOptional(),
    MonitoringRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>',
        }),
    ).exactOptional(),
    DomainIAMRoleName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify the name of the IAM role to be used when making API calls to the Directory Service.',
        }),
    ).exactOptional(),
    PromotionTier: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that specifies the order in which an Read Replica is promoted to the primary instance after a failure of the existing primary instance. </p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>',
        }),
    ).exactOptional(),
    Timezone: StringSchema.and(
      z.any().openapi({ description: 'The time zone of the DB instance.' }),
    ).exactOptional(),
    EnableIAMDatabaseAuthentication: BooleanOptionalSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune (ignored).' }),
    ).exactOptional(),
    EnablePerformanceInsights: BooleanOptionalSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    PerformanceInsightsKMSKeyId: StringSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    EnableCloudwatchLogsExports: LogTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of log types that need to be enabled for exporting to CloudWatch Logs.',
        }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that indicates whether the DB instance has deletion protection enabled. The database can\'t be deleted when deletion protection is enabled. By default, deletion protection is disabled. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting a DB Instance</a>.</p> <p>DB instances in a DB cluster can be deleted even when deletion protection is enabled in their parent DB cluster.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBInstanceIdentifier', 'DBInstanceClass', 'Engine', 'DBClusterIdentifier'],
    title: 'CreateDBInstanceMessage',
  })
  .openapi('CreateDBInstanceMessage')

const CreateDBParameterGroupMessageSchema = z
  .object({
    DBParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>',
        }),
    ),
    DBParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family.',
        }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description for the DB parameter group.' }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the new DB parameter group.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBParameterGroupName', 'DBParameterGroupFamily', 'Description'],
    title: 'CreateDBParameterGroupMessage',
  })
  .openapi('CreateDBParameterGroupMessage')

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
            '<p>The name for the DB subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>',
        }),
    ),
    DBSubnetGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'The description for the DB subnet group.' }),
    ),
    SubnetIds: SubnetIdentifierListSchema.and(
      z.any().openapi({ description: 'The EC2 Subnet IDs for the DB subnet group.' }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the new DB subnet group.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBSubnetGroupName', 'DBSubnetGroupDescription', 'SubnetIds'],
    title: 'CreateDBSubnetGroupMessage',
  })
  .openapi('CreateDBSubnetGroupMessage')

const CreateEventSubscriptionMessageSchema = z
  .object({
    SubscriptionName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the subscription.</p> <p>Constraints: The name must be less than 255 characters.</p>',
        }),
    ),
    SnsTopicArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.',
        }),
    ),
    SourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.</p> <p>Valid values: <code>db-instance</code> | <code>db-cluster</code> | <code>db-parameter-group</code> | <code>db-security-group</code> | <code>db-snapshot</code> | <code>db-cluster-snapshot</code> </p>',
        }),
    ).exactOptional(),
    EventCategories: EventCategoriesListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the <b>DescribeEventCategories</b> action.',
        }),
    ).exactOptional(),
    SourceIds: SourceIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p> <p>Constraints:</p> <ul> <li> <p>If SourceIds are supplied, SourceType must also be provided.</p> </li> <li> <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Enabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A Boolean value; set to <b>true</b> to activate the subscription, set to <b>false</b> to create the subscription but not active it.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be applied to the new event subscription.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SubscriptionName', 'SnsTopicArn'],
    title: 'CreateEventSubscriptionMessage',
  })
  .openapi('CreateEventSubscriptionMessage')

const CreateGlobalClusterMessageSchema = z
  .object({
    GlobalClusterIdentifier: GlobalClusterIdentifierSchema.and(
      z
        .any()
        .openapi({ description: 'The cluster identifier of the new global database cluster.' }),
    ),
    SourceDBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '(<i>Optional</i>) The Amazon Resource Name (ARN) of an existing Neptune DB cluster to use as the primary cluster of the new global database.',
        }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the database engine to be used in the global database.</p> <p>Valid values: <code>neptune</code> </p>',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Neptune engine version to be used by the global database.</p> <p>Valid values: <code>1.2.0.0</code> or above.</p>',
        }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled.",
        }),
    ).exactOptional(),
    StorageEncrypted: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'The storage encryption setting for the new global database cluster.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GlobalClusterIdentifier'], title: 'CreateGlobalClusterMessage' })
  .openapi('CreateGlobalClusterMessage')

const DeleteDBClusterEndpointMessageSchema = z
  .object({
    DBClusterEndpointIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier associated with the custom endpoint. This parameter is stored as a lowercase string.',
        }),
    ),
  })
  .openapi({ required: ['DBClusterEndpointIdentifier'], title: 'DeleteDBClusterEndpointMessage' })
  .openapi('DeleteDBClusterEndpointMessage')

const DeleteDBClusterMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The DB cluster identifier for the DB cluster to be deleted. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match an existing DBClusterIdentifier.</p> </li> </ul>",
        }),
    ),
    SkipFinalSnapshot: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Determines whether a final DB cluster snapshot is created before the DB cluster is deleted. If <code>true</code> is specified, no DB cluster snapshot is created. If <code>false</code> is specified, a DB cluster snapshot is created before the DB cluster is deleted.</p> <note> <p>You must specify a <code>FinalDBSnapshotIdentifier</code> parameter if <code>SkipFinalSnapshot</code> is <code>false</code>.</p> </note> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    FinalDBSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The DB cluster snapshot identifier of the new DB cluster snapshot created when <code>SkipFinalSnapshot</code> is set to <code>false</code>.</p> <note> <p> Specifying this parameter and also setting the <code>SkipFinalShapshot</code> parameter to true results in an error.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DBClusterIdentifier'], title: 'DeleteDBClusterMessage' })
  .openapi('DeleteDBClusterMessage')

const DeleteDBClusterParameterGroupMessageSchema = z
  .object({
    DBClusterParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing DB cluster parameter group.</p> </li> <li> <p>You can't delete a default DB cluster parameter group.</p> </li> <li> <p>Cannot be associated with any DB clusters.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['DBClusterParameterGroupName'],
    title: 'DeleteDBClusterParameterGroupMessage',
  })
  .openapi('DeleteDBClusterParameterGroupMessage')

const DeleteDBClusterSnapshotMessageSchema = z
  .object({
    DBClusterSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the DB cluster snapshot to delete.</p> <p>Constraints: Must be the name of an existing DB cluster snapshot in the <code>available</code> state.</p>',
        }),
    ),
  })
  .openapi({ required: ['DBClusterSnapshotIdentifier'], title: 'DeleteDBClusterSnapshotMessage' })
  .openapi('DeleteDBClusterSnapshotMessage')

const DeleteDBInstanceMessageSchema = z
  .object({
    DBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The DB instance identifier for the DB instance to be deleted. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DB instance.</p> </li> </ul>",
        }),
    ),
    SkipFinalSnapshot: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> Determines whether a final DB snapshot is created before the DB instance is deleted. If <code>true</code> is specified, no DBSnapshot is created. If <code>false</code> is specified, a DB snapshot is created before the DB instance is deleted.</p> <p>Note that when a DB instance is in a failure state and has a status of 'failed', 'incompatible-restore', or 'incompatible-network', it can only be deleted when the SkipFinalSnapshot parameter is set to \"true\".</p> <p>Specify <code>true</code> when deleting a Read Replica.</p> <note> <p>The FinalDBSnapshotIdentifier parameter must be specified if SkipFinalSnapshot is <code>false</code>.</p> </note> <p>Default: <code>false</code> </p>",
        }),
    ).exactOptional(),
    FinalDBSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The DBSnapshotIdentifier of the new DBSnapshot created when SkipFinalSnapshot is set to <code>false</code>.</p> <note> <p>Specifying this parameter and also setting the SkipFinalShapshot parameter to true results in an error.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters or numbers.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> <li> <p>Cannot be specified when deleting a Read Replica.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DBInstanceIdentifier'], title: 'DeleteDBInstanceMessage' })
  .openapi('DeleteDBInstanceMessage')

const DeleteDBParameterGroupMessageSchema = z
  .object({
    DBParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing DB parameter group</p> </li> <li> <p>You can't delete a default DB parameter group</p> </li> <li> <p>Cannot be associated with any DB instances</p> </li> </ul>",
        }),
    ),
  })
  .openapi({ required: ['DBParameterGroupName'], title: 'DeleteDBParameterGroupMessage' })
  .openapi('DeleteDBParameterGroupMessage')

const DeleteDBSubnetGroupMessageSchema = z
  .object({
    DBSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the database subnet group to delete.</p> <note> <p>You can't delete the default subnet group.</p> </note> <p>Constraints:</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>",
        }),
    ),
  })
  .openapi({ required: ['DBSubnetGroupName'], title: 'DeleteDBSubnetGroupMessage' })
  .openapi('DeleteDBSubnetGroupMessage')

const DeleteEventSubscriptionMessageSchema = z
  .object({
    SubscriptionName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the event notification subscription you want to delete.',
        }),
    ),
  })
  .openapi({ required: ['SubscriptionName'], title: 'DeleteEventSubscriptionMessage' })
  .openapi('DeleteEventSubscriptionMessage')

const DeleteGlobalClusterMessageSchema = z
  .object({
    GlobalClusterIdentifier: GlobalClusterIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The cluster identifier of the global database cluster being deleted.',
        }),
    ),
  })
  .openapi({ required: ['GlobalClusterIdentifier'], title: 'DeleteGlobalClusterMessage' })
  .openapi('DeleteGlobalClusterMessage')

const FilterListSchema = z
  .array(FilterSchema.and(z.any().openapi({ xml: { name: 'Filter' } })))
  .openapi('FilterList')

const DescribeDBClusterEndpointsMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.',
        }),
    ).exactOptional(),
    DBClusterEndpointIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the endpoint to describe. This parameter is stored as a lowercase string.',
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of name-value pairs that define which endpoints to include in the output. The filters are specified as name-value pairs, in the format <code>Name=<i>endpoint_type</i>,Values=<i>endpoint_type1</i>,<i>endpoint_type2</i>,...</code>. <code>Name</code> can be one of: <code>db-cluster-endpoint-type</code>, <code>db-cluster-endpoint-custom-type</code>, <code>db-cluster-endpoint-id</code>, <code>db-cluster-endpoint-status</code>. <code>Values</code> for the <code> db-cluster-endpoint-type</code> filter can be one or more of: <code>reader</code>, <code>writer</code>, <code>custom</code>. <code>Values</code> for the <code>db-cluster-endpoint-custom-type</code> filter can be one or more of: <code>reader</code>, <code>any</code>. <code>Values</code> for the <code>db-cluster-endpoint-status</code> filter can be one or more of: <code>available</code>, <code>creating</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. ',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous <code>DescribeDBClusterEndpoints</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeDBClusterEndpointsMessage', required: [] })
  .openapi('DescribeDBClusterEndpointsMessage')

const DescribeDBClusterParameterGroupsMessageSchema = z
  .object({
    DBClusterParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a specific DB cluster parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>',
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
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous <code>DescribeDBClusterParameterGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeDBClusterParameterGroupsMessage', required: [] })
  .openapi('DescribeDBClusterParameterGroupsMessage')

const DescribeDBClusterParametersMessageSchema = z
  .object({
    DBClusterParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a specific DB cluster parameter group to return parameter details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>',
        }),
    ),
    Source: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A value that indicates to return only parameters for a specific source. Parameter sources can be <code>engine</code>, <code>service</code>, or <code>customer</code>.',
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
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous <code>DescribeDBClusterParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBClusterParameterGroupName'],
    title: 'DescribeDBClusterParametersMessage',
  })
  .openapi('DescribeDBClusterParametersMessage')

const DescribeDBClusterSnapshotAttributesMessageSchema = z
  .object({
    DBClusterSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the DB cluster snapshot to describe the attributes for.',
        }),
    ),
  })
  .openapi({
    required: ['DBClusterSnapshotIdentifier'],
    title: 'DescribeDBClusterSnapshotAttributesMessage',
  })
  .openapi('DescribeDBClusterSnapshotAttributesMessage')

const DescribeDBClusterSnapshotsMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the <code>DBClusterSnapshotIdentifier</code> parameter. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBCluster.</p> </li> </ul>",
        }),
    ).exactOptional(),
    DBClusterSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A specific DB cluster snapshot identifier to describe. This parameter can't be used in conjunction with the <code>DBClusterIdentifier</code> parameter. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBClusterSnapshot.</p> </li> <li> <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p> </li> </ul>",
        }),
    ).exactOptional(),
    SnapshotType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of DB cluster snapshots to be returned. You can specify one of the following values:</p> <ul> <li> <p> <code>automated</code> - Return all DB cluster snapshots that have been automatically taken by Amazon Neptune for my Amazon account.</p> </li> <li> <p> <code>manual</code> - Return all DB cluster snapshots that have been taken by my Amazon account.</p> </li> <li> <p> <code>shared</code> - Return all manual DB cluster snapshots that have been shared to my Amazon account.</p> </li> <li> <p> <code>public</code> - Return all DB cluster snapshots that have been marked as public.</p> </li> </ul> <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by setting the <code>IncludeShared</code> parameter to <code>true</code>. You can include public DB cluster snapshots with these results by setting the <code>IncludePublic</code> parameter to <code>true</code>.</p> <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>public</code>.</p>",
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
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous <code>DescribeDBClusterSnapshots</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    IncludeShared: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>True to include shared manual DB cluster snapshots from other Amazon accounts that this Amazon account has been given permission to copy or restore, and otherwise false. The default is <code>false</code>.</p> <p>You can give an Amazon account permission to restore a manual DB cluster snapshot from another Amazon account by the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>',
        }),
    ).exactOptional(),
    IncludePublic: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>True to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon account, and otherwise false. The default is <code>false</code>. The default is false.</p> <p>You can share a manual DB cluster snapshot as public by using the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeDBClusterSnapshotsMessage', required: [] })
  .openapi('DescribeDBClusterSnapshotsMessage')

const DescribeDBClustersMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match an existing DBClusterIdentifier.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A filter that specifies one or more DB clusters to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>engine</code> - Accepts an engine name (such as <code>neptune</code>), and restricts the results list to DB clusters created by that engine.</p> </li> </ul> <p>For example, to invoke this API from the Amazon CLI and filter so that only Neptune DB clusters are returned, you could use the following command:</p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous <a>DescribeDBClusters</a> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeDBClustersMessage', required: [] })
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
            '<p>The database engine version to return.</p> <p>Example: <code>5.1.49</code> </p>',
        }),
    ).exactOptional(),
    DBParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a specific DB parameter group family to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match an existing DBParameterGroupFamily.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'Not currently supported.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is included in the response so that the following results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
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
            'If this parameter is specified and the requested engine supports the <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported character sets for each engine version.',
        }),
    ).exactOptional(),
    ListSupportedTimezones: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this parameter is specified and the requested engine supports the <code>TimeZone</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported time zones for each engine version.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeDBEngineVersionsMessage', required: [] })
  .openapi('DescribeDBEngineVersionsMessage')

const DescribeDBInstancesMessageSchema = z
  .object({
    DBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The user-supplied instance identifier. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBInstance.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A filter that specifies one or more DB instances to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB instances associated with the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>engine</code> - Accepts an engine name (such as <code>neptune</code>), and restricts the results list to DB instances created by that engine.</p> </li> </ul> <p>For example, to invoke this API from the Amazon CLI and filter so that only Neptune DB instances are returned, you could use the following command:</p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous <code>DescribeDBInstances</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeDBInstancesMessage', required: [] })
  .openapi('DescribeDBInstancesMessage')

const DescribeDBParameterGroupsMessageSchema = z
  .object({
    DBParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a specific DB parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>',
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
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous <code>DescribeDBParameterGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeDBParameterGroupsMessage', required: [] })
  .openapi('DescribeDBParameterGroupsMessage')

const DescribeDBParametersMessageSchema = z
  .object({
    DBParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a specific DB parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBParameterGroup.</p> </li> </ul>',
        }),
    ),
    Source: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The parameter types to return.</p> <p>Default: All parameter types returned</p> <p>Valid Values: <code>user | system | engine-default</code> </p>',
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
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional pagination token provided by a previous <code>DescribeDBParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DBParameterGroupName'], title: 'DescribeDBParametersMessage' })
  .openapi('DescribeDBParametersMessage')

const DescribeDBSubnetGroupsMessageSchema = z
  .object({
    DBSubnetGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the DB subnet group to return details for.' }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous DescribeDBSubnetGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeDBSubnetGroupsMessage', required: [] })
  .openapi('DescribeDBSubnetGroupsMessage')

const DescribeEngineDefaultClusterParametersMessageSchema = z
  .object({
    DBParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the DB cluster parameter group family to return engine parameter information for.',
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
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous <code>DescribeEngineDefaultClusterParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBParameterGroupFamily'],
    title: 'DescribeEngineDefaultClusterParametersMessage',
  })
  .openapi('DescribeEngineDefaultClusterParametersMessage')

const DescribeEngineDefaultParametersMessageSchema = z
  .object({
    DBParameterGroupFamily: StringSchema.and(
      z.any().openapi({ description: 'The name of the DB parameter group family.' }),
    ),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'Not currently supported.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous <code>DescribeEngineDefaultParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBParameterGroupFamily'],
    title: 'DescribeEngineDefaultParametersMessage',
  })
  .openapi('DescribeEngineDefaultParametersMessage')

const DescribeEventCategoriesMessageSchema = z
  .object({
    SourceType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of source that is generating the events.</p> <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>',
        }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEventCategoriesMessage', required: [] })
  .openapi('DescribeEventCategoriesMessage')

const DescribeEventSubscriptionsMessageSchema = z
  .object({
    SubscriptionName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the event notification subscription you want to describe.',
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
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> .',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEventSubscriptionsMessage', required: [] })
  .openapi('DescribeEventSubscriptionsMessage')

const DescribeEventsMessageSchema = z
  .object({
    SourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the event source for which events are returned. If not specified, then all sources are included in the response.</p> <p>Constraints:</p> <ul> <li> <p>If SourceIdentifier is supplied, SourceType must also be provided.</p> </li> <li> <p>If the source type is <code>DBInstance</code>, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBSecurityGroup</code>, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBParameterGroup</code>, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBSnapshot</code>, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>',
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
            '<p> The beginning of the time interval to retrieve events for, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: 2009-07-08T18:00Z</p>',
        }),
    ).exactOptional(),
    EndTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The end of the time interval for which to retrieve events, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: 2009-07-08T18:00Z</p>',
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
            'A list of event categories that trigger notifications for a event notification subscription.',
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
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous DescribeEvents request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEventsMessage', required: [] })
  .openapi('DescribeEventsMessage')

const DescribeGlobalClustersMessageSchema = z
  .object({
    GlobalClusterIdentifier: GlobalClusterIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The user-supplied DB cluster identifier. If this parameter is specified, only information about the specified DB cluster is returned. This parameter is not case-sensitive.</p> <p>Constraints: If supplied, must match an existing DB cluster identifier.</p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination marker token is included in the response that you can use to retrieve the remaining results.</p> <p>Default: <code>100</code> </p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '(<i>Optional</i>) A pagination token returned by a previous call to <code>DescribeGlobalClusters</code>. If this parameter is specified, the response will only include records beyond the marker, up to the number specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeGlobalClustersMessage', required: [] })
  .openapi('DescribeGlobalClustersMessage')

const DescribeOrderableDBInstanceOptionsMessageSchema = z
  .object({
    Engine: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the engine to retrieve DB instance options for.' }),
    ),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The engine version filter value. Specify this parameter to show only the available offerings matching the specified engine version.',
        }),
    ).exactOptional(),
    DBInstanceClass: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.',
        }),
    ).exactOptional(),
    LicenseModel: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The license model filter value. Specify this parameter to show only the available offerings matching the specified license model.',
        }),
    ).exactOptional(),
    Vpc: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The VPC filter value. Specify this parameter to show only the available VPC or non-VPC offerings.',
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
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> .',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Engine'], title: 'DescribeOrderableDBInstanceOptionsMessage' })
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
            '<p>A filter that specifies one or more resources to return pending maintenance actions for.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include pending maintenance actions for the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>db-instance-id</code> - Accepts DB instance identifiers and DB instance ARNs. The results list will only include pending maintenance actions for the DB instances identified by these ARNs.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An optional pagination token provided by a previous <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the response includes only records beyond the marker, up to a number of records specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribePendingMaintenanceActionsMessage', required: [] })
  .openapi('DescribePendingMaintenanceActionsMessage')

const DescribeValidDBInstanceModificationsMessageSchema = z
  .object({
    DBInstanceIdentifier: StringSchema.and(
      z.any().openapi({ description: 'The customer identifier or the ARN of your DB instance.' }),
    ),
  })
  .openapi({
    required: ['DBInstanceIdentifier'],
    title: 'DescribeValidDBInstanceModificationsMessage',
  })
  .openapi('DescribeValidDBInstanceModificationsMessage')

const FailoverDBClusterMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A DB cluster identifier to force a failover for. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>',
        }),
    ).exactOptional(),
    TargetDBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the instance to promote to the primary instance.</p> <p>You must specify the instance identifier for an Read Replica in the DB cluster. For example, <code>mydbcluster-replica1</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'FailoverDBClusterMessage', required: [] })
  .openapi('FailoverDBClusterMessage')

const FailoverGlobalClusterMessageSchema = z
  .object({
    GlobalClusterIdentifier: GlobalClusterIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Identifier of the Neptune global database that should be failed over. The identifier is the unique key assigned by the user when the Neptune global database was created. In other words, it's the name of the global database that you want to fail over.</p> <p>Constraints: Must match the identifier of an existing Neptune global database.</p>",
        }),
    ),
    TargetDbClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the secondary Neptune DB cluster that you want to promote to primary for the global database.',
        }),
    ),
  })
  .openapi({
    required: ['GlobalClusterIdentifier', 'TargetDbClusterIdentifier'],
    title: 'FailoverGlobalClusterMessage',
  })
  .openapi('FailoverGlobalClusterMessage')

const KeyListSchema = z.array(StringSchema).openapi('KeyList')

const ListTagsForResourceMessageSchema = z
  .object({
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Neptune resource with tags to be listed. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.',
        }),
    ),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'This parameter is not currently supported.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceName'], title: 'ListTagsForResourceMessage' })
  .openapi('ListTagsForResourceMessage')

const ModifyDBClusterEndpointMessageSchema = z
  .object({
    DBClusterEndpointIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the endpoint to modify. This parameter is stored as a lowercase string.',
        }),
    ),
    EndpointType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.',
        }),
    ).exactOptional(),
    StaticMembers: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of DB instance identifiers that are part of the custom endpoint group.',
        }),
    ).exactOptional(),
    ExcludedMembers: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            "List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DBClusterEndpointIdentifier'], title: 'ModifyDBClusterEndpointMessage' })
  .openapi('ModifyDBClusterEndpointMessage')

const ModifyDBClusterMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The DB cluster identifier for the cluster being modified. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>',
        }),
    ),
    NewDBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>The first character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>',
        }),
    ).exactOptional(),
    ApplyImmediately: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB cluster. If this parameter is set to <code>false</code>, changes to the DB cluster are applied during the next maintenance window.</p> <p>The <code>ApplyImmediately</code> parameter only affects <code>NewDBClusterIdentifier</code> values. If you set the <code>ApplyImmediately</code> parameter value to false, then changes to <code>NewDBClusterIdentifier</code> values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    BackupRetentionPeriod: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>',
        }),
    ).exactOptional(),
    DBClusterParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the DB cluster parameter group to use for the DB cluster.',
        }),
    ).exactOptional(),
    VpcSecurityGroupIds: VpcSecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of VPC security groups that the DB cluster will belong to.',
        }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The port number on which the DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>',
        }),
    ).exactOptional(),
    MasterUserPassword: StringSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    OptionGroupName: StringSchema.and(
      z.any().openapi({ description: ' <i>Not supported by Neptune.</i> ' }),
    ).exactOptional(),
    PreferredBackupWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter.</p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week.</p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>',
        }),
    ).exactOptional(),
    EnableIAMDatabaseAuthentication: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    CloudwatchLogsExportConfiguration: CloudwatchLogsExportConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster.',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to true.</p> <p>For a list of valid engine versions, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/engine-releases.html">Engine Releases for Amazon Neptune</a>, or call <a href="https://docs.aws.amazon.com/neptune/latest/userguide/api-other-apis.html#DescribeDBEngineVersions">DescribeDBEngineVersions</a>.</p>',
        }),
    ).exactOptional(),
    AllowMajorVersionUpgrade: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A value that indicates whether upgrades between different major versions are allowed.</p> <p>Constraints: You must set the allow-major-version-upgrade flag when providing an <code>EngineVersion</code> parameter that uses a different major version than the DB cluster's current version.</p>",
        }),
    ).exactOptional(),
    DBInstanceParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the DB parameter group to apply to all instances of the DB cluster. </p> <note> <p>When you apply a parameter group using <code>DBInstanceParameterGroupName</code>, parameter changes aren't applied during the next maintenance window but instead are applied immediately.</p> </note> <p>Default: The existing name setting</p> <p>Constraints:</p> <ul> <li> <p>The DB parameter group must be in the same DB parameter group family as the target DB cluster version.</p> </li> <li> <p>The <code>DBInstanceParameterGroupName</code> parameter is only valid in combination with the <code>AllowMajorVersionUpgrade</code> parameter.</p> </li> </ul>",
        }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.",
        }),
    ).exactOptional(),
    CopyTagsToSnapshot: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <i>If set to <code>true</code>, tags are copied to any snapshot of the DB cluster that is created.</i> ',
        }),
    ).exactOptional(),
    ServerlessV2ScalingConfiguration: ServerlessV2ScalingConfigurationSchema.exactOptional(),
  })
  .openapi({ required: ['DBClusterIdentifier'], title: 'ModifyDBClusterMessage' })
  .openapi('ModifyDBClusterMessage')

const ModifyDBClusterParameterGroupMessageSchema = z
  .object({
    DBClusterParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the DB cluster parameter group to modify.' }),
    ),
    Parameters: ParametersListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of parameters in the DB cluster parameter group to modify.',
        }),
    ),
  })
  .openapi({
    required: ['DBClusterParameterGroupName', 'Parameters'],
    title: 'ModifyDBClusterParameterGroupMessage',
  })
  .openapi('ModifyDBClusterParameterGroupMessage')

const ModifyDBClusterSnapshotAttributeMessageSchema = z
  .object({
    DBClusterSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the DB cluster snapshot to modify the attributes for.',
        }),
    ),
    AttributeName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the DB cluster snapshot attribute to modify.</p> <p>To manage authorization for other Amazon accounts to copy or restore a manual DB cluster snapshot, set this value to <code>restore</code>.</p>',
        }),
    ),
    ValuesToAdd: AttributeValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of DB cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p> <p>To authorize other Amazon accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon account IDs, or <code>all</code> to make the manual DB cluster snapshot restorable by any Amazon account. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts.</p>",
        }),
    ).exactOptional(),
    ValuesToRemove: AttributeValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of DB cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p> <p>To remove authorization for other Amazon accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon account identifiers, or <code>all</code> to remove authorization for any Amazon account to copy or restore the DB cluster snapshot. If you specify <code>all</code>, an Amazon account whose account ID is explicitly added to the <code>restore</code> attribute can still copy or restore a manual DB cluster snapshot.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBClusterSnapshotIdentifier', 'AttributeName'],
    title: 'ModifyDBClusterSnapshotAttributeMessage',
  })
  .openapi('ModifyDBClusterSnapshotAttributeMessage')

const ModifyDBInstanceMessageSchema = z
  .object({
    DBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The DB instance identifier. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>',
        }),
    ),
    AllocatedStorage: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    DBInstanceClass: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The new compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all Amazon Regions.</p> <p>If you modify the DB instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless <code>ApplyImmediately</code> is specified as <code>true</code> for this request.</p> <p>Default: Uses existing setting</p>',
        }),
    ).exactOptional(),
    DBSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The new DB subnet group for the DB instance. You can use this parameter to move your DB instance to a different VPC.</p> <p>Changing the subnet group causes an outage during the change. The change is applied during the next maintenance window, unless you specify <code>true</code> for the <code>ApplyImmediately</code> parameter.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetGroup</code> </p>',
        }),
    ).exactOptional(),
    DBSecurityGroups: DBSecurityGroupNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of DB security groups to authorize on this DB instance. Changing this setting doesn't result in an outage and the change is asynchronously applied as soon as possible.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match existing DBSecurityGroups.</p> </li> </ul>",
        }),
    ).exactOptional(),
    VpcSecurityGroupIds: VpcSecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of EC2 VPC security groups to authorize on this DB instance. This change is asynchronously applied as soon as possible.</p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match existing VpcSecurityGroupIds.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ApplyImmediately: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB instance.</p> <p> If this parameter is set to <code>false</code>, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to <a>RebootDBInstance</a>, or the next failure reboot.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    MasterUserPassword: StringSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    DBParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the DB parameter group to apply to the DB instance. Changing this setting doesn't result in an outage. The parameter group name itself is changed immediately, but the actual parameter changes are not applied until you reboot the instance without failover. The db instance will NOT be rebooted automatically and the parameter changes will NOT be applied during the next maintenance window.</p> <p>Default: Uses existing setting</p> <p>Constraints: The DB parameter group must be in the same DB parameter group family as this DB instance.</p>",
        }),
    ).exactOptional(),
    BackupRetentionPeriod: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Default: Uses existing setting</p>',
        }),
    ).exactOptional(),
    PreferredBackupWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The daily time range during which automated backups are created if automated backups are enabled.</p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the format hh24:mi-hh24:mi</p> </li> <li> <p>Must be in Universal Time Coordinated (UTC)</p> </li> <li> <p>Must not conflict with the preferred maintenance window</p> </li> <li> <p>Must be at least 30 minutes</p> </li> </ul>',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, then changing this parameter will cause a reboot of the DB instance. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied.</p> <p>Default: Uses existing setting</p> <p>Format: ddd:hh24:mi-ddd:hh24:mi</p> <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p> <p>Constraints: Must be at least 30 minutes</p>",
        }),
    ).exactOptional(),
    MultiAZ: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies if the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request.",
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the database engine to upgrade to. Currently, setting this parameter has no effect. To upgrade your database engine to the most recent release, use the <a>ApplyPendingMaintenanceAction</a> API.',
        }),
    ).exactOptional(),
    AllowMajorVersionUpgrade: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Indicates that major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.",
        }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            " Indicates that minor version upgrades are applied automatically to the DB instance during the maintenance window. Changing this parameter doesn't result in an outage except in the following case and the change is asynchronously applied as soon as possible. An outage will result if this parameter is set to <code>true</code> during the maintenance window, and a newer minor version is available, and Neptune has enabled auto patching for that engine version.",
        }),
    ).exactOptional(),
    LicenseModel: StringSchema.and(
      z.any().openapi({ description: 'Not supported by Neptune.' }),
    ).exactOptional(),
    Iops: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The new Provisioned IOPS (I/O operations per second) value for the instance.</p> <p>Changing this setting doesn't result in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request.</p> <p>Default: Uses existing setting</p>",
        }),
    ).exactOptional(),
    OptionGroupName: StringSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    NewDBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The new DB instance identifier for the DB instance when renaming a DB instance. When you change the DB instance identifier, an instance reboot will occur immediately if you set <code>Apply Immediately</code> to true, or will occur during the next maintenance window if <code>Apply Immediately</code> to false. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>',
        }),
    ).exactOptional(),
    StorageType: StringSchema.and(
      z.any().openapi({ description: 'Not supported.' }),
    ).exactOptional(),
    TdeCredentialArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN from the key store with which to associate the instance for TDE encryption.',
        }),
    ).exactOptional(),
    TdeCredentialPassword: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The password for the given ARN from the key store in order to access the device.',
        }),
    ).exactOptional(),
    CACertificateIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates the certificate that needs to be associated with the instance.',
        }),
    ).exactOptional(),
    Domain: StringSchema.and(z.any().openapi({ description: 'Not supported.' })).exactOptional(),
    CopyTagsToSnapshot: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.',
        }),
    ).exactOptional(),
    MonitoringInterval: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>',
        }),
    ).exactOptional(),
    DBPortNumber: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The port number on which the database accepts connections.</p> <p>The value of the <code>DBPortNumber</code> parameter must not match any of the port values specified for options in the option group for the DB instance.</p> <p>Your database will restart when you change the <code>DBPortNumber</code> value regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p> Default: <code>8182</code> </p>',
        }),
    ).exactOptional(),
    PubliclyAccessible: BooleanOptionalSchema.and(
      z.any().openapi({ deprecated: true, description: 'This flag should no longer be used.' }),
    ).exactOptional(),
    MonitoringRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>',
        }),
    ).exactOptional(),
    DomainIAMRoleName: StringSchema.and(
      z.any().openapi({ description: 'Not supported' }),
    ).exactOptional(),
    PromotionTier: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance.</p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>',
        }),
    ).exactOptional(),
    EnableIAMDatabaseAuthentication: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>You can enable IAM database authentication for the following database engines</p> <p>Not applicable. Mapping Amazon IAM accounts to database accounts is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    EnablePerformanceInsights: BooleanOptionalSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    PerformanceInsightsKMSKeyId: StringSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    CloudwatchLogsExportConfiguration: CloudwatchLogsExportConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.',
        }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A value that indicates whether the DB instance has deletion protection enabled. The database can\'t be deleted when deletion protection is enabled. By default, deletion protection is disabled. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting a DB Instance</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DBInstanceIdentifier'], title: 'ModifyDBInstanceMessage' })
  .openapi('ModifyDBInstanceMessage')

const ModifyDBParameterGroupMessageSchema = z
  .object({
    DBParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBParameterGroup.</p> </li> </ul>',
        }),
    ),
    Parameters: ParametersListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of parameter names, values, and the apply method for the parameter update. At least one parameter name, value, and apply method must be supplied; subsequent arguments are optional. A maximum of 20 parameters can be modified in a single request.</p> <p>Valid Values (for the application method): <code>immediate | pending-reboot</code> </p> <note> <p>You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters, and changes are applied when you reboot the DB instance without failover.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['DBParameterGroupName', 'Parameters'],
    title: 'ModifyDBParameterGroupMessage',
  })
  .openapi('ModifyDBParameterGroupMessage')

const ModifyDBSubnetGroupMessageSchema = z
  .object({
    DBSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name for the DB subnet group. This value is stored as a lowercase string. You can't modify the default subnet group.</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>",
        }),
    ),
    DBSubnetGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'The description for the DB subnet group.' }),
    ).exactOptional(),
    SubnetIds: SubnetIdentifierListSchema.and(
      z.any().openapi({ description: 'The EC2 subnet IDs for the DB subnet group.' }),
    ),
  })
  .openapi({ required: ['DBSubnetGroupName', 'SubnetIds'], title: 'ModifyDBSubnetGroupMessage' })
  .openapi('ModifyDBSubnetGroupMessage')

const ModifyEventSubscriptionMessageSchema = z
  .object({
    SubscriptionName: StringSchema.and(
      z.any().openapi({ description: 'The name of the event notification subscription.' }),
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
            '<p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.</p> <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>',
        }),
    ).exactOptional(),
    EventCategories: EventCategoriesListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the <b>DescribeEventCategories</b> action.',
        }),
    ).exactOptional(),
    Enabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description: ' A Boolean value; set to <b>true</b> to activate the subscription.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SubscriptionName'], title: 'ModifyEventSubscriptionMessage' })
  .openapi('ModifyEventSubscriptionMessage')

const ModifyGlobalClusterMessageSchema = z
  .object({
    GlobalClusterIdentifier: GlobalClusterIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The DB cluster identifier for the global cluster being modified. This parameter is not case-sensitive.</p> <p>Constraints: Must match the identifier of an existing global database cluster.</p>',
        }),
    ),
    NewGlobalClusterIdentifier: GlobalClusterIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A new cluster identifier to assign to the global database. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>",
        }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the global database has deletion protection enabled. The global database cannot be deleted when deletion protection is enabled.',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The version number of the database engine to which you want to upgrade. Changing this parameter will result in an outage. The change is applied during the next maintenance window unless <code>ApplyImmediately</code> is enabled.</p> <p>To list all of the available Neptune engine versions, use the following command:</p>',
        }),
    ).exactOptional(),
    AllowMajorVersionUpgrade: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A value that indicates whether major version upgrades are allowed.</p> <p>Constraints: You must allow major version upgrades if you specify a value for the <code>EngineVersion</code> parameter that is a different major version than the DB cluster's current version.</p> <p>If you upgrade the major version of a global database, the cluster and DB instance parameter groups are set to the default parameter groups for the new version, so you will need to apply any custom parameter groups after completing the upgrade.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['GlobalClusterIdentifier'], title: 'ModifyGlobalClusterMessage' })
  .openapi('ModifyGlobalClusterMessage')

const PromoteReadReplicaDBClusterMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(z.any().openapi({ description: 'Not supported.' })),
  })
  .openapi({ required: ['DBClusterIdentifier'], title: 'PromoteReadReplicaDBClusterMessage' })
  .openapi('PromoteReadReplicaDBClusterMessage')

const RebootDBInstanceMessageSchema = z
  .object({
    DBInstanceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>',
        }),
    ),
    ForceFailover: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> When <code>true</code>, the reboot is conducted through a MultiAZ failover.</p> <p>Constraint: You can't specify <code>true</code> if the instance is not configured for MultiAZ.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DBInstanceIdentifier'], title: 'RebootDBInstanceMessage' })
  .openapi('RebootDBInstanceMessage')

const RemoveFromGlobalClusterMessageSchema = z
  .object({
    GlobalClusterIdentifier: GlobalClusterIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the Neptune global database from which to detach the specified Neptune DB cluster.',
        }),
    ),
    DbClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) identifying the cluster to be detached from the Neptune global database cluster.',
        }),
    ),
  })
  .openapi({
    required: ['GlobalClusterIdentifier', 'DbClusterIdentifier'],
    title: 'RemoveFromGlobalClusterMessage',
  })
  .openapi('RemoveFromGlobalClusterMessage')

const RemoveRoleFromDBClusterMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the DB cluster to disassociate the IAM role from.' }),
    ),
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB cluster, for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.',
        }),
    ),
    FeatureName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the feature for the DB cluster that the IAM role is to be disassociated from. For the list of supported feature names, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/api-other-apis.html#DescribeDBEngineVersions">DescribeDBEngineVersions</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBClusterIdentifier', 'RoleArn'],
    title: 'RemoveRoleFromDBClusterMessage',
  })
  .openapi('RemoveRoleFromDBClusterMessage')

const RemoveSourceIdentifierFromSubscriptionMessageSchema = z
  .object({
    SubscriptionName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the event notification subscription you want to remove a source identifier from.',
        }),
    ),
    SourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The source identifier to be removed from the subscription, such as the <b>DB instance identifier</b> for a DB instance or the name of a security group.',
        }),
    ),
  })
  .openapi({
    required: ['SubscriptionName', 'SourceIdentifier'],
    title: 'RemoveSourceIdentifierFromSubscriptionMessage',
  })
  .openapi('RemoveSourceIdentifierFromSubscriptionMessage')

const RemoveTagsFromResourceMessageSchema = z
  .object({
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Neptune resource that the tags are removed from. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.',
        }),
    ),
    TagKeys: KeyListSchema.and(
      z.any().openapi({ description: 'The tag key (name) of the tag to be removed.' }),
    ),
  })
  .openapi({ required: ['ResourceName', 'TagKeys'], title: 'RemoveTagsFromResourceMessage' })
  .openapi('RemoveTagsFromResourceMessage')

const ResetDBClusterParameterGroupMessageSchema = z
  .object({
    DBClusterParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the DB cluster parameter group to reset.' }),
    ),
    ResetAllParameters: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value that is set to <code>true</code> to reset all parameters in the DB cluster parameter group to their default values, and <code>false</code> otherwise. You can't use this parameter if there is a list of parameter names specified for the <code>Parameters</code> parameter.",
        }),
    ).exactOptional(),
    Parameters: ParametersListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is set to <code>true</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DBClusterParameterGroupName'],
    title: 'ResetDBClusterParameterGroupMessage',
  })
  .openapi('ResetDBClusterParameterGroupMessage')

const ResetDBParameterGroupMessageSchema = z
  .object({
    DBParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DBParameterGroup.</p> </li> </ul>',
        }),
    ),
    ResetAllParameters: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether (<code>true</code>) or not (<code>false</code>) to reset all parameters in the DB parameter group to default values.</p> <p>Default: <code>true</code> </p>',
        }),
    ).exactOptional(),
    Parameters: ParametersListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <p>Valid Values (for Apply method): <code>pending-reboot</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DBParameterGroupName'], title: 'ResetDBParameterGroupMessage' })
  .openapi('ResetDBParameterGroupMessage')

const RestoreDBClusterFromSnapshotMessageSchema = z
  .object({
    AvailabilityZones: AvailabilityZonesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the list of EC2 Availability Zones that instances in the restored DB cluster can be created in.',
        }),
    ).exactOptional(),
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the DB cluster to create from the DB snapshot or DB cluster snapshot. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>",
        }),
    ),
    SnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier for the DB snapshot or DB cluster snapshot to restore from.</p> <p>You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing Snapshot.</p> </li> </ul>',
        }),
    ),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The database engine to use for the new DB cluster.</p> <p>Default: The same as source</p> <p>Constraint: Must be compatible with the engine of the source</p>',
        }),
    ),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of the database engine to use for the new DB cluster.',
        }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The port number on which the new DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>',
        }),
    ).exactOptional(),
    DBSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the DB subnet group to use for the new DB cluster.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>',
        }),
    ).exactOptional(),
    DatabaseName: StringSchema.and(
      z.any().openapi({ description: 'Not supported.' }),
    ).exactOptional(),
    OptionGroupName: StringSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    VpcSecurityGroupIds: VpcSecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of VPC security groups that the new DB cluster will belong to.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the restored DB cluster.' }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon KMS key identifier to use when restoring an encrypted DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following will occur:</p> <ul> <li> <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the DB snapshot or DB cluster snapshot.</p> </li> <li> <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is not encrypted, then the restored DB cluster is not encrypted.</p> </li> </ul>',
        }),
    ).exactOptional(),
    EnableIAMDatabaseAuthentication: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    EnableCloudwatchLogsExports: LogTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs.',
        }),
    ).exactOptional(),
    DBClusterParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the DB cluster parameter group to associate with the new DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>',
        }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. ",
        }),
    ).exactOptional(),
    CopyTagsToSnapshot: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <i>If set to <code>true</code>, tags are copied to any snapshot of the restored DB cluster that is created.</i> ',
        }),
    ).exactOptional(),
    ServerlessV2ScalingConfiguration: ServerlessV2ScalingConfigurationSchema.exactOptional(),
  })
  .openapi({
    required: ['DBClusterIdentifier', 'SnapshotIdentifier', 'Engine'],
    title: 'RestoreDBClusterFromSnapshotMessage',
  })
  .openapi('RestoreDBClusterFromSnapshotMessage')

const RestoreDBClusterToPointInTimeMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the new DB cluster to be created.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>',
        }),
    ),
    RestoreType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of restore to be performed. You can specify one of the following values:</p> <ul> <li> <p> <code>full-copy</code> - The new DB cluster is restored as a full copy of the source DB cluster.</p> </li> <li> <p> <code>copy-on-write</code> - The new DB cluster is restored as a clone of the source DB cluster.</p> </li> </ul> <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is restored as a full copy of the source DB cluster.</p>",
        }),
    ).exactOptional(),
    SourceDBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the source DB cluster from which to restore.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>',
        }),
    ),
    RestoreToTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date and time to restore the DB cluster to.</p> <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p> <p>Constraints:</p> <ul> <li> <p>Must be before the latest restorable time for the DB instance</p> </li> <li> <p>Must be specified if <code>UseLatestRestorableTime</code> parameter is not provided</p> </li> <li> <p>Cannot be specified if <code>UseLatestRestorableTime</code> parameter is true</p> </li> <li> <p>Cannot be specified if <code>RestoreType</code> parameter is <code>copy-on-write</code> </p> </li> </ul> <p>Example: <code>2015-03-07T23:45:00Z</code> </p>',
        }),
    ).exactOptional(),
    UseLatestRestorableTime: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that is set to <code>true</code> to restore the DB cluster to the latest restorable backup time, and <code>false</code> otherwise.</p> <p>Default: <code>false</code> </p> <p>Constraints: Cannot be specified if <code>RestoreToTime</code> parameter is provided.</p>',
        }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The port number on which the new DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>',
        }),
    ).exactOptional(),
    DBSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The DB subnet group name to use for the new DB cluster.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>',
        }),
    ).exactOptional(),
    OptionGroupName: StringSchema.and(
      z.any().openapi({ description: ' <i>(Not supported by Neptune)</i> ' }),
    ).exactOptional(),
    VpcSecurityGroupIds: VpcSecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of VPC security groups that the new DB cluster belongs to.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be applied to the restored DB cluster.' }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is different than the KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the KMS key identified by the <code>KmsKeyId</code> parameter.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following will occur:</p> <ul> <li> <p>If the DB cluster is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the source DB cluster.</p> </li> <li> <p>If the DB cluster is not encrypted, then the restored DB cluster is not encrypted.</p> </li> </ul> <p>If <code>DBClusterIdentifier</code> refers to a DB cluster that is not encrypted, then the restore request is rejected.</p>',
        }),
    ).exactOptional(),
    EnableIAMDatabaseAuthentication: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    EnableCloudwatchLogsExports: LogTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of logs that the restored DB cluster is to export to CloudWatch Logs.',
        }),
    ).exactOptional(),
    DBClusterParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the DB cluster parameter group to associate with the new DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>',
        }),
    ).exactOptional(),
    DeletionProtection: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. ",
        }),
    ).exactOptional(),
    ServerlessV2ScalingConfiguration: ServerlessV2ScalingConfigurationSchema.exactOptional(),
  })
  .openapi({
    required: ['DBClusterIdentifier', 'SourceDBClusterIdentifier'],
    title: 'RestoreDBClusterToPointInTimeMessage',
  })
  .openapi('RestoreDBClusterToPointInTimeMessage')

const StartDBClusterMessageSchema = z
  .object({
    DBClusterIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DB cluster identifier of the Neptune DB cluster to be started. This parameter is stored as a lowercase string.',
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
            'The DB cluster identifier of the Neptune DB cluster to be stopped. This parameter is stored as a lowercase string.',
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

export const getActionAddRoleToDBClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=AddRoleToDBCluster',
  description:
    'Associates an Identity and Access Management (IAM) role with an Neptune DB cluster.',
  operationId: 'GET_AddRoleToDBCluster',
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
            description: 'The name of the DB cluster to associate the IAM role with.',
            schema: { type: 'string' },
          },
        }),
      RoleArn: z
        .string()
        .openapi({
          param: {
            name: 'RoleArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the IAM role to associate with the Neptune DB cluster, for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.',
            schema: { type: 'string' },
          },
        }),
      FeatureName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'FeatureName',
            in: 'query',
            required: false,
            description:
              'The name of the feature for the Neptune DB cluster that the IAM role is to be associated with. For the list of supported feature names, see <a href="neptune/latest/userguide/api-other-apis.html#DBEngineVersion">DBEngineVersion</a>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('AddRoleToDBCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AddRoleToDBCluster'] },
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
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'DBClusterRoleAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterRoleAlreadyExistsFaultSchema } },
    },
    482: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    483: {
      description: 'DBClusterRoleQuotaExceededFault',
      content: { 'text/xml': { schema: DBClusterRoleQuotaExceededFaultSchema } },
    },
  },
})

export const postActionAddRoleToDBClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=AddRoleToDBCluster',
  description:
    'Associates an Identity and Access Management (IAM) role with an Neptune DB cluster.',
  operationId: 'POST_AddRoleToDBCluster',
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
        .literal('AddRoleToDBCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AddRoleToDBCluster'] },
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
    body: { content: { 'text/xml': { schema: AddRoleToDBClusterMessageSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'DBClusterRoleAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterRoleAlreadyExistsFaultSchema } },
    },
    482: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    483: {
      description: 'DBClusterRoleQuotaExceededFault',
      content: { 'text/xml': { schema: DBClusterRoleQuotaExceededFaultSchema } },
    },
  },
})

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
              'The name of the event notification subscription you want to add a source identifier to.',
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
              '<p>The identifier of the event source to be added.</p> <p>Constraints:</p> <ul> <li> <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> </ul>',
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
    'Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon Neptune resources, or used in a Condition statement in an IAM policy for Amazon Neptune.',
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
              'The Amazon Neptune resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.',
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
            description: 'The tags to be assigned to the Amazon Neptune resource.',
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
    'Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon Neptune resources, or used in a Condition statement in an IAM policy for Amazon Neptune.',
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
    'Applies a pending maintenance action to a resource (for example, to a DB instance).',
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
              'The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.',
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
              "<p>A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in request of type <code>immediate</code> can't be undone.</p> <p>Valid values:</p> <ul> <li> <p> <code>immediate</code> - Apply the maintenance action immediately.</p> </li> <li> <p> <code>next-maintenance</code> - Apply the maintenance action during the next maintenance window for the resource.</p> </li> <li> <p> <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code> opt-in requests.</p> </li> </ul>",
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
  },
})

export const postActionApplyPendingMaintenanceActionRoute = createRoute({
  method: 'post',
  path: '/#Action=ApplyPendingMaintenanceAction',
  description:
    'Applies a pending maintenance action to a resource (for example, to a DB instance).',
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
  },
})

export const getActionCopyDBClusterParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=CopyDBClusterParameterGroup',
  description: 'Copies the specified DB cluster parameter group.',
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
              '<p>The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid DB cluster parameter group.</p> </li> <li> <p>If the source DB cluster parameter group is in the same Amazon Region as the copy, specify a valid DB parameter group identifier, for example <code>my-db-cluster-param-group</code>, or a valid ARN.</p> </li> <li> <p>If the source DB parameter group is in a different Amazon Region than the copy, specify a valid DB cluster parameter group ARN, for example <code>arn:aws:rds:us-east-1:123456789012:cluster-pg:custom-cluster-group1</code>.</p> </li> </ul>',
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
              '<p>The identifier for the copied DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster-param-group1</code> </p>',
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
            description: 'A description for the copied DB cluster parameter group.',
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
            description: 'The tags to be assigned to the copied DB cluster parameter group.',
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
  description: 'Copies the specified DB cluster parameter group.',
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
    '<p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p>',
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
              '<p>The identifier of the DB cluster snapshot to copy. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid system snapshot in the "available" state.</p> </li> <li> <p>Specify a valid DB snapshot identifier.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot1</code> </p>',
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
              '<p>The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot2</code> </p>',
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
              "<p>The Amazon Amazon KMS key ID for an encrypted DB cluster snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p> <p>If you copy an encrypted DB cluster snapshot from your Amazon account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you don't specify a value for <code>KmsKeyId</code>, then the copy of the DB cluster snapshot is encrypted with the same KMS key as the source DB cluster snapshot.</p> <p>If you copy an encrypted DB cluster snapshot that is shared from another Amazon account, then you must specify a value for <code>KmsKeyId</code>.</p> <p> KMS encryption keys are specific to the Amazon Region that they are created in, and you can't use encryption keys from one Amazon Region in another Amazon Region.</p> <p>You cannot encrypt an unencrypted DB cluster snapshot when you copy it. If you try to copy an unencrypted DB cluster snapshot and specify a value for the KmsKeyId parameter, an error is returned.</p>",
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
            description: 'Not currently supported.',
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
              'True to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot, and otherwise false. The default is false.',
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
            description: 'The tags to assign to the new DB cluster snapshot copy.',
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
    '<p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p>',
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

export const getActionCopyDBParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=CopyDBParameterGroup',
  description: 'Copies the specified DB parameter group.',
  operationId: 'GET_CopyDBParameterGroup',
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
      SourceDBParameterGroupIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'SourceDBParameterGroupIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The identifier or ARN for the source DB parameter group. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid DB parameter group.</p> </li> <li> <p>Must specify a valid DB parameter group identifier, for example <code>my-db-param-group</code>, or a valid ARN.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      TargetDBParameterGroupIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'TargetDBParameterGroupIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The identifier for the copied DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank.</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-db-parameter-group</code> </p>',
            schema: { type: 'string' },
          },
        }),
      TargetDBParameterGroupDescription: z
        .string()
        .openapi({
          param: {
            name: 'TargetDBParameterGroupDescription',
            in: 'query',
            required: true,
            description: 'A description for the copied DB parameter group.',
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
            description: 'The tags to be assigned to the copied DB parameter group.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      Action: z
        .literal('CopyDBParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CopyDBParameterGroup'] },
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
      content: { 'text/xml': { schema: CopyDBParameterGroupResultSchema } },
    },
    480: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'DBParameterGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: DBParameterGroupAlreadyExistsFaultSchema } },
    },
    482: {
      description: 'DBParameterGroupQuotaExceededFault',
      content: { 'text/xml': { schema: DBParameterGroupQuotaExceededFaultSchema } },
    },
  },
})

export const postActionCopyDBParameterGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=CopyDBParameterGroup',
  description: 'Copies the specified DB parameter group.',
  operationId: 'POST_CopyDBParameterGroup',
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
        .literal('CopyDBParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CopyDBParameterGroup'] },
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
    body: { content: { 'text/xml': { schema: CopyDBParameterGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CopyDBParameterGroupResultSchema } },
    },
    480: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'DBParameterGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: DBParameterGroupAlreadyExistsFaultSchema } },
    },
    482: {
      description: 'DBParameterGroupQuotaExceededFault',
      content: { 'text/xml': { schema: DBParameterGroupQuotaExceededFaultSchema } },
    },
  },
})

export const getActionCreateDBClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateDBCluster',
  description:
    '<p>Creates a new Amazon Neptune DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.</p> <p>Note that when you create a new cluster using <code>CreateDBCluster</code> directly, deletion protection is disabled by default (when you create a new production cluster in the console, deletion protection is enabled by default). You can only delete a DB cluster if its <code>DeletionProtection</code> field is set to <code>false</code>.</p>',
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
          ['MinCapacity', ['ServerlessV2ScalingConfiguration']],
          ['MaxCapacity', ['ServerlessV2ScalingConfiguration']],
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
          AvailabilityZones: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                StringSchema.and(
                  ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.any()).openapi({ xml: { name: 'AvailabilityZone' } }),
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
                  'A list of EC2 Availability Zones that instances in the DB cluster can be created in.',
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
                  '<p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>',
                schema: { type: 'integer' },
              },
            }),
          CharacterSetName: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'CharacterSetName',
                in: 'query',
                required: false,
                description: ' <i>(Not supported by Neptune)</i> ',
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
                  ' <i>If set to <code>true</code>, tags are copied to any snapshot of the DB cluster that is created.</i> ',
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
                  'The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon Neptune will not create a database in the DB cluster you are creating.',
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
                  '<p>The DB cluster identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>',
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
                description:
                  '<p> The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, the default is used.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>',
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
                description: 'A list of EC2 VPC security groups to associate with this DB cluster.',
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
                  '<p>A DB subnet group to associate with this DB cluster.</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>',
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
                  '<p>The name of the database engine to be used for this DB cluster.</p> <p>Valid Values: <code>neptune</code> </p>',
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
                  '<p>The version number of the database engine to use for the new DB cluster.</p> <p>Example: <code>1.0.2.1</code> </p>',
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
                  '<p>The port number on which the instances in the DB cluster accept connections.</p> <p> Default: <code>8182</code> </p>',
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
                description: 'Not supported by Neptune.',
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
                description: 'Not supported by Neptune.',
                schema: { type: 'string' },
              },
            }),
          OptionGroupName: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'OptionGroupName',
                in: 'query',
                required: false,
                description: ' <i>(Not supported by Neptune)</i> ',
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
                  '<p>The daily time range during which automated backups are created if automated backups are enabled using the <code>BackupRetentionPeriod</code> parameter.</p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Neptune User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>',
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
                  '<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Neptune User Guide.</i> </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>',
                schema: { type: 'string' },
              },
            }),
          ReplicationSourceIdentifier: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'ReplicationSourceIdentifier',
                in: 'query',
                required: false,
                description:
                  'The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.',
                schema: { type: 'string' },
              },
            }),
          Tags: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                TagSchema.and(
                  ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.any()).openapi({ xml: { name: 'Tag' } }),
                ),
              ),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Tags',
                in: 'query',
                required: false,
                description: 'The tags to assign to the new DB cluster.',
                schema: {
                  type: 'array',
                  items: {
                    allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }],
                  },
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
                description: 'Specifies whether the DB cluster is encrypted.',
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
                  '<p>The Amazon KMS key identifier for an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If an encryption key is not specified in <code>KmsKeyId</code>:</p> <ul> <li> <p>If <code>ReplicationSourceIdentifier</code> identifies an encrypted source, then Amazon Neptune will use the encryption key used to encrypt the source. Otherwise, Amazon Neptune will use your default encryption key.</p> </li> <li> <p>If the <code>StorageEncrypted</code> parameter is true and <code>ReplicationSourceIdentifier</code> is not specified, then Amazon Neptune will use your default encryption key.</p> </li> </ul> <p>Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a different default encryption key for each Amazon Region.</p> <p>If you create a Read Replica of an encrypted DB cluster in another Amazon Region, you must set <code>KmsKeyId</code> to a KMS key ID that is valid in the destination Amazon Region. This key is used to encrypt the Read Replica in that Amazon Region.</p>',
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
                description: 'This parameter is not currently supported.',
                schema: { type: 'string' },
              },
            }),
          EnableIAMDatabaseAuthentication: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'EnableIAMDatabaseAuthentication',
                in: 'query',
                required: false,
                description:
                  '<p>If set to <code>true</code>, enables Amazon Identity and Access Management (IAM) authentication for the entire DB cluster (this cannot be set at an instance level).</p> <p>Default: <code>false</code>.</p>',
                schema: { type: 'boolean' },
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
                  'The list of log types that need to be enabled for exporting to CloudWatch Logs.',
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
                  "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is enabled.",
                schema: { type: 'boolean' },
              },
            }),
          ServerlessV2ScalingConfiguration: z
            .object({
              MinCapacity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  DoubleOptionalSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The minimum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on.',
                    }),
                )
                .exactOptional(),
              MaxCapacity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  DoubleOptionalSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The maximum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on.',
                    }),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'ServerlessV2ScalingConfiguration',
                in: 'query',
                required: false,
                description: '',
                schema: {
                  type: 'object',
                  properties: {
                    MinCapacity: {
                      allOf: [
                        { $ref: '#/components/schemas/DoubleOptional' },
                        {
                          description:
                            'The minimum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on.',
                        },
                      ],
                    },
                    MaxCapacity: {
                      allOf: [
                        { $ref: '#/components/schemas/DoubleOptional' },
                        {
                          description:
                            'The maximum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on.',
                        },
                      ],
                    },
                  },
                  description:
                    '<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>',
                },
              },
              description:
                '<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>',
              required: [],
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
                description:
                  'The ID of the Neptune global database to which this new DB cluster should be added.',
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
      ),
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
  description:
    '<p>Creates a new Amazon Neptune DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.</p> <p>Note that when you create a new cluster using <code>CreateDBCluster</code> directly, deletion protection is disabled by default (when you create a new production cluster in the console, deletion protection is enabled by default). You can only delete a DB cluster if its <code>DeletionProtection</code> field is set to <code>false</code>.</p>',
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

export const getActionCreateDBClusterEndpointRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateDBClusterEndpoint',
  description: 'Creates a new custom endpoint and associates it with an Amazon Neptune DB cluster.',
  operationId: 'GET_CreateDBClusterEndpoint',
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
              'The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.',
            schema: { type: 'string' },
          },
        }),
      DBClusterEndpointIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterEndpointIdentifier',
            in: 'query',
            required: true,
            description:
              'The identifier to use for the new endpoint. This parameter is stored as a lowercase string.',
            schema: { type: 'string' },
          },
        }),
      EndpointType: z
        .string()
        .openapi({
          param: {
            name: 'EndpointType',
            in: 'query',
            required: true,
            description:
              'The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.',
            schema: { type: 'string' },
          },
        }),
      StaticMembers: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'StaticMembers',
            in: 'query',
            required: false,
            description:
              'List of DB instance identifiers that are part of the custom endpoint group.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
      ExcludedMembers: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ExcludedMembers',
            in: 'query',
            required: false,
            description:
              "List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.",
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
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
            description: 'The tags to be assigned to the Amazon Neptune resource.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      Action: z
        .literal('CreateDBClusterEndpoint')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDBClusterEndpoint'] },
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
      content: { 'text/xml': { schema: CreateDBClusterEndpointOutputSchema } },
    },
    480: {
      description: 'DBClusterEndpointQuotaExceededFault',
      content: { 'text/xml': { schema: DBClusterEndpointQuotaExceededFaultSchema } },
    },
    481: {
      description: 'DBClusterEndpointAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterEndpointAlreadyExistsFaultSchema } },
    },
    482: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    483: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    484: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    485: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
  },
})

export const postActionCreateDBClusterEndpointRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateDBClusterEndpoint',
  description: 'Creates a new custom endpoint and associates it with an Amazon Neptune DB cluster.',
  operationId: 'POST_CreateDBClusterEndpoint',
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
        .literal('CreateDBClusterEndpoint')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDBClusterEndpoint'] },
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
    body: { content: { 'text/xml': { schema: CreateDBClusterEndpointMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateDBClusterEndpointOutputSchema } },
    },
    480: {
      description: 'DBClusterEndpointQuotaExceededFault',
      content: { 'text/xml': { schema: DBClusterEndpointQuotaExceededFaultSchema } },
    },
    481: {
      description: 'DBClusterEndpointAlreadyExistsFault',
      content: { 'text/xml': { schema: DBClusterEndpointAlreadyExistsFaultSchema } },
    },
    482: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    483: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    484: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    485: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
  },
})

export const getActionCreateDBClusterParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateDBClusterParameterGroup',
  description:
    '<p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <a>ModifyDBClusterParameterGroup</a>. Once you\'ve created a DB cluster parameter group, you need to associate it with your DB cluster using <a>ModifyDBCluster</a>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon Neptune console</a> or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>',
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
              '<p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DBClusterParameterGroup.</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>',
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
            description:
              'The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.',
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
            description: 'The description for the DB cluster parameter group.',
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
            description: 'The tags to be assigned to the new DB cluster parameter group.',
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
    '<p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <a>ModifyDBClusterParameterGroup</a>. Once you\'ve created a DB cluster parameter group, you need to associate it with your DB cluster using <a>ModifyDBCluster</a>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon Neptune console</a> or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>',
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
  description: 'Creates a snapshot of a DB cluster.',
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
              '<p>The identifier of the DB cluster snapshot. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1-snapshot1</code> </p>',
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
              '<p>The identifier of the DB cluster to create a snapshot for. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>',
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
            description: 'The tags to be assigned to the DB cluster snapshot.',
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
  description: 'Creates a snapshot of a DB cluster.',
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
  description: 'Creates a new DB instance.',
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
      DBName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBName',
            in: 'query',
            required: false,
            description: 'Not supported.',
            schema: { type: 'string' },
          },
        }),
      DBInstanceIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBInstanceIdentifier',
            in: 'query',
            required: true,
            description:
              '<p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>',
            schema: { type: 'string' },
          },
        }),
      AllocatedStorage: z
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
            name: 'AllocatedStorage',
            in: 'query',
            required: false,
            description: 'Not supported by Neptune.',
            schema: { type: 'integer' },
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
              'The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all Amazon Regions.',
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
              '<p>The name of the database engine to be used for this instance.</p> <p>Valid Values: <code>neptune</code> </p>',
            schema: { type: 'string' },
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
            description: 'Not supported by Neptune.',
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
            description: 'Not supported by Neptune.',
            schema: { type: 'string' },
          },
        }),
      DBSecurityGroups: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'DBSecurityGroupName' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'DBSecurityGroups',
            in: 'query',
            required: false,
            description:
              '<p>A list of DB security groups to associate with this DB instance.</p> <p>Default: The default DB security group for the database engine.</p>',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'DBSecurityGroupName' } },
                ],
              },
            },
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
              "<p>A list of EC2 VPC security groups to associate with this DB instance.</p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>",
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
      AvailabilityZone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'AvailabilityZone',
            in: 'query',
            required: false,
            description:
              "<p> The EC2 Availability Zone that the DB instance is created in</p> <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Region.</p> <p> Example: <code>us-east-1d</code> </p> <p> Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is set to <code>true</code>. The specified Availability Zone must be in the same Amazon Region as the current endpoint.</p>",
            schema: { type: 'string' },
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
              '<p>A DB subnet group to associate with this DB instance.</p> <p>If there is no DB subnet group, then it is a non-VPC DB instance.</p>',
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
              '<p>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week.</p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>',
            schema: { type: 'string' },
          },
        }),
      DBParameterGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBParameterGroupName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the DB parameter group to associate with this DB instance. If this argument is omitted, the default DBParameterGroup for the specified engine is used.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>',
            schema: { type: 'string' },
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
              '<p>The number of days for which automated backups are retained.</p> <p>Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 0 to 35</p> </li> <li> <p>Cannot be set to 0 if the DB instance is a source to Read Replicas</p> </li> </ul>',
            schema: { type: 'integer' },
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
              '<p> The daily time range during which automated backups are created.</p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p>',
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
              '<p>The port number on which the database accepts connections.</p> <p>Not applicable. The port is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p> Default: <code>8182</code> </p> <p>Type: Integer</p>',
            schema: { type: 'integer' },
          },
        }),
      MultiAZ: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'MultiAZ',
            in: 'query',
            required: false,
            description:
              "Specifies if the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the MultiAZ parameter is set to true.",
            schema: { type: 'boolean' },
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
              'The version number of the database engine to use. Currently, setting this parameter has no effect.',
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
              '<p>Indicates that minor engine upgrades are applied automatically to the DB instance during the maintenance window.</p> <p>Default: <code>true</code> </p>',
            schema: { type: 'boolean' },
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
              '<p>License model information for this DB instance.</p> <p> Valid values: <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code> </p>',
            schema: { type: 'string' },
          },
        }),
      Iops: z
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
            name: 'Iops',
            in: 'query',
            required: false,
            description:
              'The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.',
            schema: { type: 'integer' },
          },
        }),
      OptionGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'OptionGroupName',
            in: 'query',
            required: false,
            description: ' <i>(Not supported by Neptune)</i> ',
            schema: { type: 'string' },
          },
        }),
      CharacterSetName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CharacterSetName',
            in: 'query',
            required: false,
            description: ' <i>(Not supported by Neptune)</i> ',
            schema: { type: 'string' },
          },
        }),
      PubliclyAccessible: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'PubliclyAccessible',
            in: 'query',
            required: false,
            description: 'This flag should no longer be used.',
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
            description: 'The tags to assign to the new instance.',
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
            description:
              '<p>The identifier of the DB cluster that the instance will belong to.</p> <p>For information on creating a DB cluster, see <a>CreateDBCluster</a>.</p> <p>Type: String</p>',
            schema: { type: 'string' },
          },
        }),
      StorageType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'StorageType',
            in: 'query',
            required: false,
            description:
              '<p>Specifies the storage type to be associated with the DB instance.</p> <p>Not applicable. Storage is managed by the DB Cluster.</p>',
            schema: { type: 'string' },
          },
        }),
      TdeCredentialArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'TdeCredentialArn',
            in: 'query',
            required: false,
            description:
              'The ARN from the key store with which to associate the instance for TDE encryption.',
            schema: { type: 'string' },
          },
        }),
      TdeCredentialPassword: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'TdeCredentialPassword',
            in: 'query',
            required: false,
            description:
              'The password for the given ARN from the key store in order to access the device.',
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
            description:
              '<p>Specifies whether the DB instance is encrypted.</p> <p>Not applicable. The encryption for DB instances is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: false</p>',
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
              '<p>The Amazon KMS key identifier for an encrypted DB instance.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same Amazon account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KM encryption key.</p> <p>Not applicable. The KMS key identifier is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>If the <code>StorageEncrypted</code> parameter is true, and you do not specify a value for the <code>KmsKeyId</code> parameter, then Amazon Neptune will use your default encryption key. Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a different default encryption key for each Amazon Region.</p>',
            schema: { type: 'string' },
          },
        }),
      Domain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Domain',
            in: 'query',
            required: false,
            description: 'Specify the Active Directory Domain to create the instance in.',
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
              'True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.',
            schema: { type: 'boolean' },
          },
        }),
      MonitoringInterval: z
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
            name: 'MonitoringInterval',
            in: 'query',
            required: false,
            description:
              '<p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>',
            schema: { type: 'integer' },
          },
        }),
      MonitoringRoleArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MonitoringRoleArn',
            in: 'query',
            required: false,
            description:
              '<p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>',
            schema: { type: 'string' },
          },
        }),
      DomainIAMRoleName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DomainIAMRoleName',
            in: 'query',
            required: false,
            description:
              'Specify the name of the IAM role to be used when making API calls to the Directory Service.',
            schema: { type: 'string' },
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
              '<p>A value that specifies the order in which an Read Replica is promoted to the primary instance after a failure of the existing primary instance. </p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>',
            schema: { type: 'integer' },
          },
        }),
      Timezone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Timezone',
            in: 'query',
            required: false,
            description: 'The time zone of the DB instance.',
            schema: { type: 'string' },
          },
        }),
      EnableIAMDatabaseAuthentication: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnableIAMDatabaseAuthentication',
            in: 'query',
            required: false,
            description: 'Not supported by Neptune (ignored).',
            schema: { type: 'boolean' },
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
            description: ' <i>(Not supported by Neptune)</i> ',
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
            description: ' <i>(Not supported by Neptune)</i> ',
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
              'The list of log types that need to be enabled for exporting to CloudWatch Logs.',
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
              '<p>A value that indicates whether the DB instance has deletion protection enabled. The database can\'t be deleted when deletion protection is enabled. By default, deletion protection is disabled. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting a DB Instance</a>.</p> <p>DB instances in a DB cluster can be deleted even when deletion protection is enabled in their parent DB cluster.</p>',
            schema: { type: 'boolean' },
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
      description: 'ProvisionedIopsNotAvailableInAZFault',
      content: { 'text/xml': { schema: ProvisionedIopsNotAvailableInAZFaultSchema } },
    },
    492: {
      description: 'OptionGroupNotFoundFault',
      content: { 'text/xml': { schema: OptionGroupNotFoundFaultSchema } },
    },
    493: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    494: {
      description: 'StorageTypeNotSupportedFault',
      content: { 'text/xml': { schema: StorageTypeNotSupportedFaultSchema } },
    },
    495: {
      description: 'AuthorizationNotFoundFault',
      content: { 'text/xml': { schema: AuthorizationNotFoundFaultSchema } },
    },
    496: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'text/xml': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
    497: {
      description: 'DomainNotFoundFault',
      content: { 'text/xml': { schema: DomainNotFoundFaultSchema } },
    },
  },
})

export const postActionCreateDBInstanceRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateDBInstance',
  description: 'Creates a new DB instance.',
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
      description: 'ProvisionedIopsNotAvailableInAZFault',
      content: { 'text/xml': { schema: ProvisionedIopsNotAvailableInAZFaultSchema } },
    },
    492: {
      description: 'OptionGroupNotFoundFault',
      content: { 'text/xml': { schema: OptionGroupNotFoundFaultSchema } },
    },
    493: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    494: {
      description: 'StorageTypeNotSupportedFault',
      content: { 'text/xml': { schema: StorageTypeNotSupportedFaultSchema } },
    },
    495: {
      description: 'AuthorizationNotFoundFault',
      content: { 'text/xml': { schema: AuthorizationNotFoundFaultSchema } },
    },
    496: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'text/xml': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
    497: {
      description: 'DomainNotFoundFault',
      content: { 'text/xml': { schema: DomainNotFoundFaultSchema } },
    },
  },
})

export const getActionCreateDBParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateDBParameterGroup',
  description:
    "<p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>",
  operationId: 'GET_CreateDBParameterGroup',
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
      DBParameterGroupName: z
        .string()
        .openapi({
          param: {
            name: 'DBParameterGroupName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>',
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
            description:
              'The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family.',
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
            description: 'The description for the DB parameter group.',
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
            description: 'The tags to be assigned to the new DB parameter group.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      Action: z
        .literal('CreateDBParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDBParameterGroup'] },
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
      content: { 'text/xml': { schema: CreateDBParameterGroupResultSchema } },
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

export const postActionCreateDBParameterGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateDBParameterGroup',
  description:
    "<p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>",
  operationId: 'POST_CreateDBParameterGroup',
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
        .literal('CreateDBParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateDBParameterGroup'] },
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
    body: { content: { 'text/xml': { schema: CreateDBParameterGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateDBParameterGroupResultSchema } },
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

export const getActionCreateDBSubnetGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateDBSubnetGroup',
  description:
    'Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.',
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
              '<p>The name for the DB subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>',
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
            description: 'The description for the DB subnet group.',
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
            description: 'The EC2 Subnet IDs for the DB subnet group.',
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
            description: 'The tags to be assigned to the new DB subnet group.',
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
    'Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.',
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
    '<p>Creates an event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (SourceType) you want to be notified of, provide a list of Neptune sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.</p> <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your Neptune sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all Neptune sources belonging to your customer account.</p>',
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
              '<p>The name of the subscription.</p> <p>Constraints: The name must be less than 255 characters.</p>',
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
              '<p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.</p> <p>Valid values: <code>db-instance</code> | <code>db-cluster</code> | <code>db-parameter-group</code> | <code>db-security-group</code> | <code>db-snapshot</code> | <code>db-cluster-snapshot</code> </p>',
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
              ' A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the <b>DescribeEventCategories</b> action.',
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
              "<p>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p> <p>Constraints:</p> <ul> <li> <p>If SourceIds are supplied, SourceType must also be provided.</p> </li> <li> <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> </ul>",
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
              ' A Boolean value; set to <b>true</b> to activate the subscription, set to <b>false</b> to create the subscription but not active it.',
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
            description: 'The tags to be applied to the new event subscription.',
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
    '<p>Creates an event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (SourceType) you want to be notified of, provide a list of Neptune sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.</p> <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your Neptune sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all Neptune sources belonging to your customer account.</p>',
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
    '<p>Creates a Neptune global database spread across multiple Amazon Regions. The global database contains a single primary cluster with read-write capability, and read-only secondary clusters that receive data from the primary cluster through high-speed replication performed by the Neptune storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and secondary clusters to it, or you can specify an existing Neptune cluster during the create operation to become the primary cluster of the global database.</p>',
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
            description: 'The cluster identifier of the new global database cluster.',
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
              '(<i>Optional</i>) The Amazon Resource Name (ARN) of an existing Neptune DB cluster to use as the primary cluster of the new global database.',
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
            description:
              '<p>The name of the database engine to be used in the global database.</p> <p>Valid values: <code>neptune</code> </p>',
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
              '<p>The Neptune engine version to be used by the global database.</p> <p>Valid values: <code>1.2.0.0</code> or above.</p>',
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
              "The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled.",
            schema: { type: 'boolean' },
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
            description: 'The storage encryption setting for the new global database cluster.',
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
    '<p>Creates a Neptune global database spread across multiple Amazon Regions. The global database contains a single primary cluster with read-write capability, and read-only secondary clusters that receive data from the primary cluster through high-speed replication performed by the Neptune storage subsystem.</p> <p>You can create a global database that is initially empty, and then add a primary cluster and secondary clusters to it, or you can specify an existing Neptune cluster during the create operation to become the primary cluster of the global database.</p>',
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
    "<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its <code>DeletionProtection</code> field to <code>False</code>.</p>",
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
              "<p>The DB cluster identifier for the DB cluster to be deleted. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match an existing DBClusterIdentifier.</p> </li> </ul>",
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
              '<p> Determines whether a final DB cluster snapshot is created before the DB cluster is deleted. If <code>true</code> is specified, no DB cluster snapshot is created. If <code>false</code> is specified, a DB cluster snapshot is created before the DB cluster is deleted.</p> <note> <p>You must specify a <code>FinalDBSnapshotIdentifier</code> parameter if <code>SkipFinalSnapshot</code> is <code>false</code>.</p> </note> <p>Default: <code>false</code> </p>',
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
              '<p> The DB cluster snapshot identifier of the new DB cluster snapshot created when <code>SkipFinalSnapshot</code> is set to <code>false</code>.</p> <note> <p> Specifying this parameter and also setting the <code>SkipFinalShapshot</code> parameter to true results in an error.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>',
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
    "<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its <code>DeletionProtection</code> field to <code>False</code>.</p>",
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

export const getActionDeleteDBClusterEndpointRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteDBClusterEndpoint',
  description: 'Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.',
  operationId: 'GET_DeleteDBClusterEndpoint',
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
      DBClusterEndpointIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterEndpointIdentifier',
            in: 'query',
            required: true,
            description:
              'The identifier associated with the custom endpoint. This parameter is stored as a lowercase string.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteDBClusterEndpoint')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDBClusterEndpoint'] },
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
      content: { 'text/xml': { schema: DeleteDBClusterEndpointOutputSchema } },
    },
    480: {
      description: 'InvalidDBClusterEndpointStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterEndpointStateFaultSchema } },
    },
    481: {
      description: 'DBClusterEndpointNotFoundFault',
      content: { 'text/xml': { schema: DBClusterEndpointNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
  },
})

export const postActionDeleteDBClusterEndpointRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteDBClusterEndpoint',
  description: 'Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.',
  operationId: 'POST_DeleteDBClusterEndpoint',
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
        .literal('DeleteDBClusterEndpoint')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDBClusterEndpoint'] },
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
    body: { content: { 'text/xml': { schema: DeleteDBClusterEndpointMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteDBClusterEndpointOutputSchema } },
    },
    480: {
      description: 'InvalidDBClusterEndpointStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterEndpointStateFaultSchema } },
    },
    481: {
      description: 'DBClusterEndpointNotFoundFault',
      content: { 'text/xml': { schema: DBClusterEndpointNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
  },
})

export const getActionDeleteDBClusterParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteDBClusterParameterGroup',
  description:
    "Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.",
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
              "<p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing DB cluster parameter group.</p> </li> <li> <p>You can't delete a default DB cluster parameter group.</p> </li> <li> <p>Cannot be associated with any DB clusters.</p> </li> </ul>",
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
    "Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.",
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
    '<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>',
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
              '<p>The identifier of the DB cluster snapshot to delete.</p> <p>Constraints: Must be the name of an existing DB cluster snapshot in the <code>available</code> state.</p>',
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
    '<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>',
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
  description:
    "<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.</p>",
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
              "<p>The DB instance identifier for the DB instance to be deleted. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DB instance.</p> </li> </ul>",
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
              "<p> Determines whether a final DB snapshot is created before the DB instance is deleted. If <code>true</code> is specified, no DBSnapshot is created. If <code>false</code> is specified, a DB snapshot is created before the DB instance is deleted.</p> <p>Note that when a DB instance is in a failure state and has a status of 'failed', 'incompatible-restore', or 'incompatible-network', it can only be deleted when the SkipFinalSnapshot parameter is set to \"true\".</p> <p>Specify <code>true</code> when deleting a Read Replica.</p> <note> <p>The FinalDBSnapshotIdentifier parameter must be specified if SkipFinalSnapshot is <code>false</code>.</p> </note> <p>Default: <code>false</code> </p>",
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
              '<p> The DBSnapshotIdentifier of the new DBSnapshot created when SkipFinalSnapshot is set to <code>false</code>.</p> <note> <p>Specifying this parameter and also setting the SkipFinalShapshot parameter to true results in an error.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters or numbers.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> <li> <p>Cannot be specified when deleting a Read Replica.</p> </li> </ul>',
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
  description:
    "<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.</p>",
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

export const getActionDeleteDBParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteDBParameterGroup',
  description:
    "Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.",
  operationId: 'GET_DeleteDBParameterGroup',
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
      DBParameterGroupName: z
        .string()
        .openapi({
          param: {
            name: 'DBParameterGroupName',
            in: 'query',
            required: true,
            description:
              "<p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing DB parameter group</p> </li> <li> <p>You can't delete a default DB parameter group</p> </li> <li> <p>Cannot be associated with any DB instances</p> </li> </ul>",
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteDBParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDBParameterGroup'] },
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

export const postActionDeleteDBParameterGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteDBParameterGroup',
  description:
    "Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.",
  operationId: 'POST_DeleteDBParameterGroup',
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
        .literal('DeleteDBParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteDBParameterGroup'] },
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
    body: { content: { 'text/xml': { schema: DeleteDBParameterGroupMessageSchema } } },
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

export const getActionDeleteDBSubnetGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteDBSubnetGroup',
  description:
    '<p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>',
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
              "<p>The name of the database subnet group to delete.</p> <note> <p>You can't delete the default subnet group.</p> </note> <p>Constraints:</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>",
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
    '<p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>',
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
  description: 'Deletes an event notification subscription.',
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
            description: 'The name of the event notification subscription you want to delete.',
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
  description: 'Deletes an event notification subscription.',
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
    'Deletes a global database. The primary and all secondary clusters must already be detached or deleted first.',
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
            description: 'The cluster identifier of the global database cluster being deleted.',
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
    'Deletes a global database. The primary and all secondary clusters must already be detached or deleted first.',
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

export const getActionDescribeDBClusterEndpointsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeDBClusterEndpoints',
  description:
    '<p>Returns information about endpoints for an Amazon Neptune DB cluster.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>',
  operationId: 'GET_DescribeDBClusterEndpoints',
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
              'The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.',
            schema: { type: 'string' },
          },
        }),
      DBClusterEndpointIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBClusterEndpointIdentifier',
            in: 'query',
            required: false,
            description:
              'The identifier of the endpoint to describe. This parameter is stored as a lowercase string.',
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
              'A set of name-value pairs that define which endpoints to include in the output. The filters are specified as name-value pairs, in the format <code>Name=<i>endpoint_type</i>,Values=<i>endpoint_type1</i>,<i>endpoint_type2</i>,...</code>. <code>Name</code> can be one of: <code>db-cluster-endpoint-type</code>, <code>db-cluster-endpoint-custom-type</code>, <code>db-cluster-endpoint-id</code>, <code>db-cluster-endpoint-status</code>. <code>Values</code> for the <code> db-cluster-endpoint-type</code> filter can be one or more of: <code>reader</code>, <code>writer</code>, <code>custom</code>. <code>Values</code> for the <code>db-cluster-endpoint-custom-type</code> filter can be one or more of: <code>reader</code>, <code>any</code>. <code>Values</code> for the <code>db-cluster-endpoint-status</code> filter can be one or more of: <code>available</code>, <code>creating</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. ',
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so you can retrieve the remaining results. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
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
              ' An optional pagination token provided by a previous <code>DescribeDBClusterEndpoints</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeDBClusterEndpoints')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBClusterEndpoints'] },
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
      content: { 'text/xml': { schema: DBClusterEndpointMessageSchema } },
    },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
  },
})

export const postActionDescribeDBClusterEndpointsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeDBClusterEndpoints',
  description:
    '<p>Returns information about endpoints for an Amazon Neptune DB cluster.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>',
  operationId: 'POST_DescribeDBClusterEndpoints',
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
        .literal('DescribeDBClusterEndpoints')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBClusterEndpoints'] },
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
    body: { content: { 'text/xml': { schema: DescribeDBClusterEndpointsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBClusterEndpointMessageSchema } },
    },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
  },
})

export const getActionDescribeDBClusterParameterGroupsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeDBClusterParameterGroups',
  description:
    ' Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.',
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
              '<p>The name of a specific DB cluster parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>',
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
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
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
              ' An optional pagination token provided by a previous <code>DescribeDBClusterParameterGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
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
    ' Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.',
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
  description: 'Returns the detailed parameter list for a particular DB cluster parameter group.',
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
              '<p>The name of a specific DB cluster parameter group to return parameter details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>',
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
              ' A value that indicates to return only parameters for a specific source. Parameter sources can be <code>engine</code>, <code>service</code>, or <code>customer</code>.',
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
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
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
              ' An optional pagination token provided by a previous <code>DescribeDBClusterParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
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
  description: 'Returns the detailed parameter list for a particular DB cluster parameter group.',
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
    '<p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts.</p> <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>',
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
            description:
              'The identifier for the DB cluster snapshot to describe the attributes for.',
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
    '<p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts.</p> <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>',
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
    'Returns information about DB cluster snapshots. This API action supports pagination.',
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
              "<p>The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the <code>DBClusterSnapshotIdentifier</code> parameter. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBCluster.</p> </li> </ul>",
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
              "<p>A specific DB cluster snapshot identifier to describe. This parameter can't be used in conjunction with the <code>DBClusterIdentifier</code> parameter. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBClusterSnapshot.</p> </li> <li> <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p> </li> </ul>",
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
              "<p>The type of DB cluster snapshots to be returned. You can specify one of the following values:</p> <ul> <li> <p> <code>automated</code> - Return all DB cluster snapshots that have been automatically taken by Amazon Neptune for my Amazon account.</p> </li> <li> <p> <code>manual</code> - Return all DB cluster snapshots that have been taken by my Amazon account.</p> </li> <li> <p> <code>shared</code> - Return all manual DB cluster snapshots that have been shared to my Amazon account.</p> </li> <li> <p> <code>public</code> - Return all DB cluster snapshots that have been marked as public.</p> </li> </ul> <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by setting the <code>IncludeShared</code> parameter to <code>true</code>. You can include public DB cluster snapshots with these results by setting the <code>IncludePublic</code> parameter to <code>true</code>.</p> <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>public</code>.</p>",
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
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
              'An optional pagination token provided by a previous <code>DescribeDBClusterSnapshots</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
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
              '<p>True to include shared manual DB cluster snapshots from other Amazon accounts that this Amazon account has been given permission to copy or restore, and otherwise false. The default is <code>false</code>.</p> <p>You can give an Amazon account permission to restore a manual DB cluster snapshot from another Amazon account by the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>',
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
              '<p>True to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon account, and otherwise false. The default is <code>false</code>. The default is false.</p> <p>You can share a manual DB cluster snapshot as public by using the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>',
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
    'Returns information about DB cluster snapshots. This API action supports pagination.',
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
    '<p>Returns information about provisioned DB clusters, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>',
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
              "<p>The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match an existing DBClusterIdentifier.</p> </li> </ul>",
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
              '<p>A filter that specifies one or more DB clusters to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>engine</code> - Accepts an engine name (such as <code>neptune</code>), and restricts the results list to DB clusters created by that engine.</p> </li> </ul> <p>For example, to invoke this API from the Amazon CLI and filter so that only Neptune DB clusters are returned, you could use the following command:</p>',
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
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
              'An optional pagination token provided by a previous <a>DescribeDBClusters</a> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
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
    '<p>Returns information about provisioned DB clusters, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>',
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
  description: 'Returns a list of the available DB engines.',
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
              '<p>The database engine version to return.</p> <p>Example: <code>5.1.49</code> </p>',
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
              '<p>The name of a specific DB parameter group family to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match an existing DBParameterGroupFamily.</p> </li> </ul>',
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
            description: 'Not currently supported.',
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
              '<p> The maximum number of records to include in the response. If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is included in the response so that the following results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
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
              ' An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
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
              'If this parameter is specified and the requested engine supports the <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported character sets for each engine version.',
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
              'If this parameter is specified and the requested engine supports the <code>TimeZone</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported time zones for each engine version.',
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
  description: 'Returns a list of the available DB engines.',
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
    '<p>Returns information about provisioned instances, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS instances and Amazon DocDB instances.</p> </note>',
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
              "<p>The user-supplied instance identifier. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBInstance.</p> </li> </ul>",
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
              '<p>A filter that specifies one or more DB instances to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB instances associated with the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>engine</code> - Accepts an engine name (such as <code>neptune</code>), and restricts the results list to DB instances created by that engine.</p> </li> </ul> <p>For example, to invoke this API from the Amazon CLI and filter so that only Neptune DB instances are returned, you could use the following command:</p>',
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
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
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
              ' An optional pagination token provided by a previous <code>DescribeDBInstances</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
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
    '<p>Returns information about provisioned instances, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS instances and Amazon DocDB instances.</p> </note>',
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

export const getActionDescribeDBParameterGroupsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeDBParameterGroups',
  description:
    'Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.',
  operationId: 'GET_DescribeDBParameterGroups',
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
      DBParameterGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DBParameterGroupName',
            in: 'query',
            required: false,
            description:
              '<p>The name of a specific DB parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>',
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
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
              'An optional pagination token provided by a previous <code>DescribeDBParameterGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeDBParameterGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBParameterGroups'] },
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
      content: { 'text/xml': { schema: DBParameterGroupsMessageSchema } },
    },
    480: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
  },
})

export const postActionDescribeDBParameterGroupsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeDBParameterGroups',
  description:
    'Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.',
  operationId: 'POST_DescribeDBParameterGroups',
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
        .literal('DescribeDBParameterGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBParameterGroups'] },
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
    body: { content: { 'text/xml': { schema: DescribeDBParameterGroupsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBParameterGroupsMessageSchema } },
    },
    480: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
  },
})

export const getActionDescribeDBParametersRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeDBParameters',
  description: 'Returns the detailed parameter list for a particular DB parameter group.',
  operationId: 'GET_DescribeDBParameters',
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
      DBParameterGroupName: z
        .string()
        .openapi({
          param: {
            name: 'DBParameterGroupName',
            in: 'query',
            required: true,
            description:
              '<p>The name of a specific DB parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBParameterGroup.</p> </li> </ul>',
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
              '<p>The parameter types to return.</p> <p>Default: All parameter types returned</p> <p>Valid Values: <code>user | system | engine-default</code> </p>',
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
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
              'An optional pagination token provided by a previous <code>DescribeDBParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeDBParameters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBParameters'] },
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
      content: { 'text/xml': { schema: DBParameterGroupDetailsSchema } },
    },
    480: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
  },
})

export const postActionDescribeDBParametersRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeDBParameters',
  description: 'Returns the detailed parameter list for a particular DB parameter group.',
  operationId: 'POST_DescribeDBParameters',
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
        .literal('DescribeDBParameters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeDBParameters'] },
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
    body: { content: { 'text/xml': { schema: DescribeDBParametersMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBParameterGroupDetailsSchema } },
    },
    480: {
      description: 'DBParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBParameterGroupNotFoundFaultSchema } },
    },
  },
})

export const getActionDescribeDBSubnetGroupsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeDBSubnetGroups',
  description:
    '<p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>',
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
            description: 'The name of the DB subnet group to return details for.',
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
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
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
              ' An optional pagination token provided by a previous DescribeDBSubnetGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
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
    '<p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>',
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
              'The name of the DB cluster parameter group family to return engine parameter information for.',
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
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
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
              ' An optional pagination token provided by a previous <code>DescribeEngineDefaultClusterParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
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

export const getActionDescribeEngineDefaultParametersRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeEngineDefaultParameters',
  description:
    'Returns the default engine and system parameter information for the specified database engine.',
  operationId: 'GET_DescribeEngineDefaultParameters',
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
            description: 'The name of the DB parameter group family.',
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
            description: 'Not currently supported.',
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
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
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
              ' An optional pagination token provided by a previous <code>DescribeEngineDefaultParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeEngineDefaultParameters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEngineDefaultParameters'] },
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
      content: { 'text/xml': { schema: DescribeEngineDefaultParametersResultSchema } },
    },
  },
})

export const postActionDescribeEngineDefaultParametersRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeEngineDefaultParameters',
  description:
    'Returns the default engine and system parameter information for the specified database engine.',
  operationId: 'POST_DescribeEngineDefaultParameters',
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
        .literal('DescribeEngineDefaultParameters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEngineDefaultParameters'] },
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
    body: { content: { 'text/xml': { schema: DescribeEngineDefaultParametersMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeEngineDefaultParametersResultSchema } },
    },
  },
})

export const getActionDescribeEventCategoriesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeEventCategories',
  description:
    'Displays a list of categories for all event source types, or, if specified, for a specified source type.',
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
              '<p>The type of source that is generating the events.</p> <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>',
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
    'Displays a list of categories for all event source types, or, if specified, for a specified source type.',
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
    '<p>Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.</p> <p>If you specify a SubscriptionName, lists the description for that subscription.</p>',
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
            description: 'The name of the event notification subscription you want to describe.',
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
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
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
              ' An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> .',
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
    '<p>Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.</p> <p>If you specify a SubscriptionName, lists the description for that subscription.</p>',
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
    'Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. Events specific to a particular DB instance, DB security group, database snapshot, or DB parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.',
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
              '<p>The identifier of the event source for which events are returned. If not specified, then all sources are included in the response.</p> <p>Constraints:</p> <ul> <li> <p>If SourceIdentifier is supplied, SourceType must also be provided.</p> </li> <li> <p>If the source type is <code>DBInstance</code>, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBSecurityGroup</code>, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBParameterGroup</code>, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBSnapshot</code>, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>',
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
              '<p> The beginning of the time interval to retrieve events for, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: 2009-07-08T18:00Z</p>',
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
              '<p> The end of the time interval for which to retrieve events, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: 2009-07-08T18:00Z</p>',
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
              'A list of event categories that trigger notifications for a event notification subscription.',
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
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
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
              ' An optional pagination token provided by a previous DescribeEvents request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
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
    'Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. Events specific to a particular DB instance, DB security group, database snapshot, or DB parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.',
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
    'Returns information about Neptune global database clusters. This API supports pagination.',
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
              '<p>The user-supplied DB cluster identifier. If this parameter is specified, only information about the specified DB cluster is returned. This parameter is not case-sensitive.</p> <p>Constraints: If supplied, must match an existing DB cluster identifier.</p>',
            schema: {
              type: 'string',
              pattern: '[A-Za-z][0-9A-Za-z-:._]*',
              minLength: 1,
              maxLength: 255,
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination marker token is included in the response that you can use to retrieve the remaining results.</p> <p>Default: <code>100</code> </p> <p>Constraints: Minimum 20, maximum 100.</p>',
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
              '(<i>Optional</i>) A pagination token returned by a previous call to <code>DescribeGlobalClusters</code>. If this parameter is specified, the response will only include records beyond the marker, up to the number specified by <code>MaxRecords</code>.',
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
    'Returns information about Neptune global database clusters. This API supports pagination.',
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
  description: 'Returns a list of orderable DB instance options for the specified engine.',
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
            description: 'The name of the engine to retrieve DB instance options for.',
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
              'The engine version filter value. Specify this parameter to show only the available offerings matching the specified engine version.',
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
              'The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.',
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
              'The license model filter value. Specify this parameter to show only the available offerings matching the specified license model.',
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
              'The VPC filter value. Specify this parameter to show only the available VPC or non-VPC offerings.',
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
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
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
              ' An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> .',
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
  description: 'Returns a list of orderable DB instance options for the specified engine.',
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
    'Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.',
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
              '<p>A filter that specifies one or more resources to return pending maintenance actions for.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include pending maintenance actions for the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>db-instance-id</code> - Accepts DB instance identifiers and DB instance ARNs. The results list will only include pending maintenance actions for the DB instances identified by these ARNs.</p> </li> </ul>',
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
              ' An optional pagination token provided by a previous <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the response includes only records beyond the marker, up to a number of records specified by <code>MaxRecords</code>.',
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
              '<p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>',
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
    'Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.',
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

export const getActionDescribeValidDBInstanceModificationsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeValidDBInstanceModifications',
  description:
    'You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>.',
  operationId: 'GET_DescribeValidDBInstanceModifications',
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
            description: 'The customer identifier or the ARN of your DB instance.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeValidDBInstanceModifications')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeValidDBInstanceModifications'] },
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
      content: { 'text/xml': { schema: DescribeValidDBInstanceModificationsResultSchema } },
    },
    480: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
  },
})

export const postActionDescribeValidDBInstanceModificationsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeValidDBInstanceModifications',
  description:
    'You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>.',
  operationId: 'POST_DescribeValidDBInstanceModifications',
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
        .literal('DescribeValidDBInstanceModifications')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeValidDBInstanceModifications'] },
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
      content: { 'text/xml': { schema: DescribeValidDBInstanceModificationsMessageSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeValidDBInstanceModificationsResultSchema } },
    },
    480: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
  },
})

export const getActionFailoverDBClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=FailoverDBCluster',
  description:
    '<p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>',
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
              '<p>A DB cluster identifier to force a failover for. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>',
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
              '<p>The name of the instance to promote to the primary instance.</p> <p>You must specify the instance identifier for an Read Replica in the DB cluster. For example, <code>mydbcluster-replica1</code>.</p>',
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
    '<p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>',
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

export const getActionFailoverGlobalClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=FailoverGlobalCluster',
  description:
    '<p>Initiates the failover process for a Neptune global database.</p> <p>A failover for a Neptune global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected target secondary DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Neptune global database.</p> <note> <p>This action applies <b>only</b> to Neptune global databases. This action is only intended for use on healthy Neptune global databases with healthy Neptune DB clusters and no region-wide outages, to test disaster recovery scenarios or to reconfigure the global database topology.</p> </note>',
  operationId: 'GET_FailoverGlobalCluster',
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
              "<p>Identifier of the Neptune global database that should be failed over. The identifier is the unique key assigned by the user when the Neptune global database was created. In other words, it's the name of the global database that you want to fail over.</p> <p>Constraints: Must match the identifier of an existing Neptune global database.</p>",
            schema: {
              type: 'string',
              pattern: '[A-Za-z][0-9A-Za-z-:._]*',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
      TargetDbClusterIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'TargetDbClusterIdentifier',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the secondary Neptune DB cluster that you want to promote to primary for the global database.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('FailoverGlobalCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['FailoverGlobalCluster'] },
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
      content: { 'text/xml': { schema: FailoverGlobalClusterResultSchema } },
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
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    483: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
  },
})

export const postActionFailoverGlobalClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=FailoverGlobalCluster',
  description:
    '<p>Initiates the failover process for a Neptune global database.</p> <p>A failover for a Neptune global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected target secondary DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Neptune global database.</p> <note> <p>This action applies <b>only</b> to Neptune global databases. This action is only intended for use on healthy Neptune global databases with healthy Neptune DB clusters and no region-wide outages, to test disaster recovery scenarios or to reconfigure the global database topology.</p> </note>',
  operationId: 'POST_FailoverGlobalCluster',
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
        .literal('FailoverGlobalCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['FailoverGlobalCluster'] },
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
    body: { content: { 'text/xml': { schema: FailoverGlobalClusterMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: FailoverGlobalClusterResultSchema } },
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
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    483: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
  },
})

export const getActionListTagsForResourceRoute = createRoute({
  method: 'get',
  path: '/#Action=ListTagsForResource',
  description: 'Lists all tags on an Amazon Neptune resource.',
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
              'The Amazon Neptune resource with tags to be listed. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.',
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
  description: 'Lists all tags on an Amazon Neptune resource.',
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
    'Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.',
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
          ['MinCapacity', ['ServerlessV2ScalingConfiguration']],
          ['MaxCapacity', ['ServerlessV2ScalingConfiguration']],
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
                  '<p>The DB cluster identifier for the cluster being modified. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>',
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
                  '<p>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>The first character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>',
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
                  '<p>A value that specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB cluster. If this parameter is set to <code>false</code>, changes to the DB cluster are applied during the next maintenance window.</p> <p>The <code>ApplyImmediately</code> parameter only affects <code>NewDBClusterIdentifier</code> values. If you set the <code>ApplyImmediately</code> parameter value to false, then changes to <code>NewDBClusterIdentifier</code> values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p>Default: <code>false</code> </p>',
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
                  '<p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>',
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
                description:
                  'The name of the DB cluster parameter group to use for the DB cluster.',
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
                description: 'A list of VPC security groups that the DB cluster will belong to.',
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
                  '<p>The port number on which the DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>',
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
                description: 'Not supported by Neptune.',
                schema: { type: 'string' },
              },
            }),
          OptionGroupName: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'OptionGroupName',
                in: 'query',
                required: false,
                description: ' <i>Not supported by Neptune.</i> ',
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
                  '<p>The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter.</p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>',
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
                  '<p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week.</p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>',
                schema: { type: 'string' },
              },
            }),
          EnableIAMDatabaseAuthentication: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'EnableIAMDatabaseAuthentication',
                in: 'query',
                required: false,
                description:
                  '<p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>',
                schema: { type: 'boolean' },
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
                  'The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster.',
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
                    '<p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs.</p>',
                },
              },
              description:
                '<p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs.</p>',
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
                  '<p>The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to true.</p> <p>For a list of valid engine versions, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/engine-releases.html">Engine Releases for Amazon Neptune</a>, or call <a href="https://docs.aws.amazon.com/neptune/latest/userguide/api-other-apis.html#DescribeDBEngineVersions">DescribeDBEngineVersions</a>.</p>',
                schema: { type: 'string' },
              },
            }),
          AllowMajorVersionUpgrade: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'AllowMajorVersionUpgrade',
                in: 'query',
                required: false,
                description:
                  "<p>A value that indicates whether upgrades between different major versions are allowed.</p> <p>Constraints: You must set the allow-major-version-upgrade flag when providing an <code>EngineVersion</code> parameter that uses a different major version than the DB cluster's current version.</p>",
                schema: { type: 'boolean' },
              },
            }),
          DBInstanceParameterGroupName: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'DBInstanceParameterGroupName',
                in: 'query',
                required: false,
                description:
                  "<p>The name of the DB parameter group to apply to all instances of the DB cluster. </p> <note> <p>When you apply a parameter group using <code>DBInstanceParameterGroupName</code>, parameter changes aren't applied during the next maintenance window but instead are applied immediately.</p> </note> <p>Default: The existing name setting</p> <p>Constraints:</p> <ul> <li> <p>The DB parameter group must be in the same DB parameter group family as the target DB cluster version.</p> </li> <li> <p>The <code>DBInstanceParameterGroupName</code> parameter is only valid in combination with the <code>AllowMajorVersionUpgrade</code> parameter.</p> </li> </ul>",
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
                  "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.",
                schema: { type: 'boolean' },
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
                  ' <i>If set to <code>true</code>, tags are copied to any snapshot of the DB cluster that is created.</i> ',
                schema: { type: 'boolean' },
              },
            }),
          ServerlessV2ScalingConfiguration: z
            .object({
              MinCapacity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  DoubleOptionalSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The minimum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on.',
                    }),
                )
                .exactOptional(),
              MaxCapacity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  DoubleOptionalSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The maximum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on.',
                    }),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'ServerlessV2ScalingConfiguration',
                in: 'query',
                required: false,
                description: '',
                schema: {
                  type: 'object',
                  properties: {
                    MinCapacity: {
                      allOf: [
                        { $ref: '#/components/schemas/DoubleOptional' },
                        {
                          description:
                            'The minimum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on.',
                        },
                      ],
                    },
                    MaxCapacity: {
                      allOf: [
                        { $ref: '#/components/schemas/DoubleOptional' },
                        {
                          description:
                            'The maximum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on.',
                        },
                      ],
                    },
                  },
                  description:
                    '<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>',
                },
              },
              description:
                '<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>',
              required: [],
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
    'Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.',
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

export const getActionModifyDBClusterEndpointRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyDBClusterEndpoint',
  description: 'Modifies the properties of an endpoint in an Amazon Neptune DB cluster.',
  operationId: 'GET_ModifyDBClusterEndpoint',
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
      DBClusterEndpointIdentifier: z
        .string()
        .openapi({
          param: {
            name: 'DBClusterEndpointIdentifier',
            in: 'query',
            required: true,
            description:
              'The identifier of the endpoint to modify. This parameter is stored as a lowercase string.',
            schema: { type: 'string' },
          },
        }),
      EndpointType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EndpointType',
            in: 'query',
            required: false,
            description:
              'The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.',
            schema: { type: 'string' },
          },
        }),
      StaticMembers: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'StaticMembers',
            in: 'query',
            required: false,
            description:
              'List of DB instance identifiers that are part of the custom endpoint group.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
      ExcludedMembers: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ExcludedMembers',
            in: 'query',
            required: false,
            description:
              "List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.",
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
      Action: z
        .literal('ModifyDBClusterEndpoint')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyDBClusterEndpoint'] },
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
      content: { 'text/xml': { schema: ModifyDBClusterEndpointOutputSchema } },
    },
    480: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterEndpointStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterEndpointStateFaultSchema } },
    },
    482: {
      description: 'DBClusterEndpointNotFoundFault',
      content: { 'text/xml': { schema: DBClusterEndpointNotFoundFaultSchema } },
    },
    483: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
  },
})

export const postActionModifyDBClusterEndpointRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyDBClusterEndpoint',
  description: 'Modifies the properties of an endpoint in an Amazon Neptune DB cluster.',
  operationId: 'POST_ModifyDBClusterEndpoint',
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
        .literal('ModifyDBClusterEndpoint')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyDBClusterEndpoint'] },
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
    body: { content: { 'text/xml': { schema: ModifyDBClusterEndpointMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyDBClusterEndpointOutputSchema } },
    },
    480: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterEndpointStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterEndpointStateFaultSchema } },
    },
    482: {
      description: 'DBClusterEndpointNotFoundFault',
      content: { 'text/xml': { schema: DBClusterEndpointNotFoundFaultSchema } },
    },
    483: {
      description: 'DBInstanceNotFoundFault',
      content: { 'text/xml': { schema: DBInstanceNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidDBInstanceStateFault',
      content: { 'text/xml': { schema: InvalidDBInstanceStateFaultSchema } },
    },
  },
})

export const getActionModifyDBClusterParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyDBClusterParameterGroup',
  description:
    '<p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>',
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
            description: 'The name of the DB cluster parameter group to modify.',
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
                    .openapi({ description: 'Specifies the engine specific parameters type.' }),
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
                          ' Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.',
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
              .openapi({ description: 'Specifies a parameter.', required: [] })
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
            description: 'A list of parameters in the DB cluster parameter group to modify.',
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
                          { description: 'Specifies the engine specific parameters type.' },
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
                              ' Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.',
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
                    description: 'Specifies a parameter.',
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
    '<p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>',
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
    "<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>",
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
            description: 'The identifier for the DB cluster snapshot to modify the attributes for.',
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
              '<p>The name of the DB cluster snapshot attribute to modify.</p> <p>To manage authorization for other Amazon accounts to copy or restore a manual DB cluster snapshot, set this value to <code>restore</code>.</p>',
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
              "<p>A list of DB cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p> <p>To authorize other Amazon accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon account IDs, or <code>all</code> to make the manual DB cluster snapshot restorable by any Amazon account. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts.</p>",
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
              '<p>A list of DB cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p> <p>To remove authorization for other Amazon accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon account identifiers, or <code>all</code> to remove authorization for any Amazon account to copy or restore the DB cluster snapshot. If you specify <code>all</code>, an Amazon account whose account ID is explicitly added to the <code>restore</code> attribute can still copy or restore a manual DB cluster snapshot.</p>',
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
    "<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>",
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
    'Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.',
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
          DBInstanceIdentifier: z
            .string()
            .openapi({
              param: {
                name: 'DBInstanceIdentifier',
                in: 'query',
                required: true,
                description:
                  '<p>The DB instance identifier. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>',
                schema: { type: 'string' },
              },
            }),
          AllocatedStorage: z
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
                name: 'AllocatedStorage',
                in: 'query',
                required: false,
                description: 'Not supported by Neptune.',
                schema: { type: 'integer' },
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
                  '<p>The new compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all Amazon Regions.</p> <p>If you modify the DB instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless <code>ApplyImmediately</code> is specified as <code>true</code> for this request.</p> <p>Default: Uses existing setting</p>',
                schema: { type: 'string' },
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
                  '<p>The new DB subnet group for the DB instance. You can use this parameter to move your DB instance to a different VPC.</p> <p>Changing the subnet group causes an outage during the change. The change is applied during the next maintenance window, unless you specify <code>true</code> for the <code>ApplyImmediately</code> parameter.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetGroup</code> </p>',
                schema: { type: 'string' },
              },
            }),
          DBSecurityGroups: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                StringSchema.and(
                  ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.any()).openapi({ xml: { name: 'DBSecurityGroupName' } }),
                ),
              ),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'DBSecurityGroups',
                in: 'query',
                required: false,
                description:
                  "<p>A list of DB security groups to authorize on this DB instance. Changing this setting doesn't result in an outage and the change is asynchronously applied as soon as possible.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match existing DBSecurityGroups.</p> </li> </ul>",
                schema: {
                  type: 'array',
                  items: {
                    allOf: [
                      { $ref: '#/components/schemas/String' },
                      { xml: { name: 'DBSecurityGroupName' } },
                    ],
                  },
                },
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
                  '<p>A list of EC2 VPC security groups to authorize on this DB instance. This change is asynchronously applied as soon as possible.</p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match existing VpcSecurityGroupIds.</p> </li> </ul>',
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
          ApplyImmediately: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'ApplyImmediately',
                in: 'query',
                required: false,
                description:
                  '<p>Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB instance.</p> <p> If this parameter is set to <code>false</code>, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to <a>RebootDBInstance</a>, or the next failure reboot.</p> <p>Default: <code>false</code> </p>',
                schema: { type: 'boolean' },
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
                description: 'Not supported by Neptune.',
                schema: { type: 'string' },
              },
            }),
          DBParameterGroupName: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'DBParameterGroupName',
                in: 'query',
                required: false,
                description:
                  "<p>The name of the DB parameter group to apply to the DB instance. Changing this setting doesn't result in an outage. The parameter group name itself is changed immediately, but the actual parameter changes are not applied until you reboot the instance without failover. The db instance will NOT be rebooted automatically and the parameter changes will NOT be applied during the next maintenance window.</p> <p>Default: Uses existing setting</p> <p>Constraints: The DB parameter group must be in the same DB parameter group family as this DB instance.</p>",
                schema: { type: 'string' },
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
                  '<p>Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Default: Uses existing setting</p>',
                schema: { type: 'integer' },
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
                  '<p> The daily time range during which automated backups are created if automated backups are enabled.</p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the format hh24:mi-hh24:mi</p> </li> <li> <p>Must be in Universal Time Coordinated (UTC)</p> </li> <li> <p>Must not conflict with the preferred maintenance window</p> </li> <li> <p>Must be at least 30 minutes</p> </li> </ul>',
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
                  "<p>The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, then changing this parameter will cause a reboot of the DB instance. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied.</p> <p>Default: Uses existing setting</p> <p>Format: ddd:hh24:mi-ddd:hh24:mi</p> <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p> <p>Constraints: Must be at least 30 minutes</p>",
                schema: { type: 'string' },
              },
            }),
          MultiAZ: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'MultiAZ',
                in: 'query',
                required: false,
                description:
                  "Specifies if the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request.",
                schema: { type: 'boolean' },
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
                  'The version number of the database engine to upgrade to. Currently, setting this parameter has no effect. To upgrade your database engine to the most recent release, use the <a>ApplyPendingMaintenanceAction</a> API.',
                schema: { type: 'string' },
              },
            }),
          AllowMajorVersionUpgrade: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'AllowMajorVersionUpgrade',
                in: 'query',
                required: false,
                description:
                  "Indicates that major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.",
                schema: { type: 'boolean' },
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
                  " Indicates that minor version upgrades are applied automatically to the DB instance during the maintenance window. Changing this parameter doesn't result in an outage except in the following case and the change is asynchronously applied as soon as possible. An outage will result if this parameter is set to <code>true</code> during the maintenance window, and a newer minor version is available, and Neptune has enabled auto patching for that engine version.",
                schema: { type: 'boolean' },
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
                description: 'Not supported by Neptune.',
                schema: { type: 'string' },
              },
            }),
          Iops: z
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
                name: 'Iops',
                in: 'query',
                required: false,
                description:
                  "<p>The new Provisioned IOPS (I/O operations per second) value for the instance.</p> <p>Changing this setting doesn't result in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request.</p> <p>Default: Uses existing setting</p>",
                schema: { type: 'integer' },
              },
            }),
          OptionGroupName: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'OptionGroupName',
                in: 'query',
                required: false,
                description: ' <i>(Not supported by Neptune)</i> ',
                schema: { type: 'string' },
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
                  '<p> The new DB instance identifier for the DB instance when renaming a DB instance. When you change the DB instance identifier, an instance reboot will occur immediately if you set <code>Apply Immediately</code> to true, or will occur during the next maintenance window if <code>Apply Immediately</code> to false. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>',
                schema: { type: 'string' },
              },
            }),
          StorageType: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'StorageType',
                in: 'query',
                required: false,
                description: 'Not supported.',
                schema: { type: 'string' },
              },
            }),
          TdeCredentialArn: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'TdeCredentialArn',
                in: 'query',
                required: false,
                description:
                  'The ARN from the key store with which to associate the instance for TDE encryption.',
                schema: { type: 'string' },
              },
            }),
          TdeCredentialPassword: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'TdeCredentialPassword',
                in: 'query',
                required: false,
                description:
                  'The password for the given ARN from the key store in order to access the device.',
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
                description:
                  'Indicates the certificate that needs to be associated with the instance.',
                schema: { type: 'string' },
              },
            }),
          Domain: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'Domain',
                in: 'query',
                required: false,
                description: 'Not supported.',
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
                  'True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.',
                schema: { type: 'boolean' },
              },
            }),
          MonitoringInterval: z
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
                name: 'MonitoringInterval',
                in: 'query',
                required: false,
                description:
                  '<p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>',
                schema: { type: 'integer' },
              },
            }),
          DBPortNumber: z
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
                name: 'DBPortNumber',
                in: 'query',
                required: false,
                description:
                  '<p>The port number on which the database accepts connections.</p> <p>The value of the <code>DBPortNumber</code> parameter must not match any of the port values specified for options in the option group for the DB instance.</p> <p>Your database will restart when you change the <code>DBPortNumber</code> value regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p> Default: <code>8182</code> </p>',
                schema: { type: 'integer' },
              },
            }),
          PubliclyAccessible: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'PubliclyAccessible',
                in: 'query',
                required: false,
                description: 'This flag should no longer be used.',
                schema: { type: 'boolean' },
              },
            }),
          MonitoringRoleArn: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'MonitoringRoleArn',
                in: 'query',
                required: false,
                description:
                  '<p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>',
                schema: { type: 'string' },
              },
            }),
          DomainIAMRoleName: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'DomainIAMRoleName',
                in: 'query',
                required: false,
                description: 'Not supported',
                schema: { type: 'string' },
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
                  '<p>A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance.</p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>',
                schema: { type: 'integer' },
              },
            }),
          EnableIAMDatabaseAuthentication: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'EnableIAMDatabaseAuthentication',
                in: 'query',
                required: false,
                description:
                  '<p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>You can enable IAM database authentication for the following database engines</p> <p>Not applicable. Mapping Amazon IAM accounts to database accounts is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Default: <code>false</code> </p>',
                schema: { type: 'boolean' },
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
                description: ' <i>(Not supported by Neptune)</i> ',
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
                description: ' <i>(Not supported by Neptune)</i> ',
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
                  'The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.',
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
                    '<p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs.</p>',
                },
              },
              description:
                '<p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs.</p>',
              required: [],
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
                  'A value that indicates whether the DB instance has deletion protection enabled. The database can\'t be deleted when deletion protection is enabled. By default, deletion protection is disabled. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting a DB Instance</a>.',
                schema: { type: 'boolean' },
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
      ),
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
      description: 'ProvisionedIopsNotAvailableInAZFault',
      content: { 'text/xml': { schema: ProvisionedIopsNotAvailableInAZFaultSchema } },
    },
    490: {
      description: 'OptionGroupNotFoundFault',
      content: { 'text/xml': { schema: OptionGroupNotFoundFaultSchema } },
    },
    491: {
      description: 'DBUpgradeDependencyFailureFault',
      content: { 'text/xml': { schema: DBUpgradeDependencyFailureFaultSchema } },
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
      description: 'CertificateNotFoundFault',
      content: { 'text/xml': { schema: CertificateNotFoundFaultSchema } },
    },
    495: {
      description: 'DomainNotFoundFault',
      content: { 'text/xml': { schema: DomainNotFoundFaultSchema } },
    },
  },
})

export const postActionModifyDBInstanceRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyDBInstance',
  description:
    'Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.',
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
      description: 'ProvisionedIopsNotAvailableInAZFault',
      content: { 'text/xml': { schema: ProvisionedIopsNotAvailableInAZFaultSchema } },
    },
    490: {
      description: 'OptionGroupNotFoundFault',
      content: { 'text/xml': { schema: OptionGroupNotFoundFaultSchema } },
    },
    491: {
      description: 'DBUpgradeDependencyFailureFault',
      content: { 'text/xml': { schema: DBUpgradeDependencyFailureFaultSchema } },
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
      description: 'CertificateNotFoundFault',
      content: { 'text/xml': { schema: CertificateNotFoundFaultSchema } },
    },
    495: {
      description: 'DomainNotFoundFault',
      content: { 'text/xml': { schema: DomainNotFoundFaultSchema } },
    },
  },
})

export const getActionModifyDBParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyDBParameterGroup',
  description:
    '<p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>',
  operationId: 'GET_ModifyDBParameterGroup',
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
      DBParameterGroupName: z
        .string()
        .openapi({
          param: {
            name: 'DBParameterGroupName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBParameterGroup.</p> </li> </ul>',
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
                    .openapi({ description: 'Specifies the engine specific parameters type.' }),
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
                          ' Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.',
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
              .openapi({ description: 'Specifies a parameter.', required: [] })
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
            description:
              '<p>An array of parameter names, values, and the apply method for the parameter update. At least one parameter name, value, and apply method must be supplied; subsequent arguments are optional. A maximum of 20 parameters can be modified in a single request.</p> <p>Valid Values (for the application method): <code>immediate | pending-reboot</code> </p> <note> <p>You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters, and changes are applied when you reboot the DB instance without failover.</p> </note>',
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
                          { description: 'Specifies the engine specific parameters type.' },
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
                              ' Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.',
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
                    description: 'Specifies a parameter.',
                  },
                  { xml: { name: 'Parameter' } },
                ],
              },
            },
          },
        }),
      Action: z
        .literal('ModifyDBParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyDBParameterGroup'] },
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
      content: { 'text/xml': { schema: DBParameterGroupNameMessageSchema } },
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

export const postActionModifyDBParameterGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyDBParameterGroup',
  description:
    '<p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>',
  operationId: 'POST_ModifyDBParameterGroup',
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
        .literal('ModifyDBParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyDBParameterGroup'] },
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
    body: { content: { 'text/xml': { schema: ModifyDBParameterGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBParameterGroupNameMessageSchema } },
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

export const getActionModifyDBSubnetGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyDBSubnetGroup',
  description:
    'Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.',
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
              "<p>The name for the DB subnet group. This value is stored as a lowercase string. You can't modify the default subnet group.</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>",
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
            description: 'The description for the DB subnet group.',
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
            description: 'The EC2 subnet IDs for the DB subnet group.',
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
    'Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.',
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
  description:
    "<p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>",
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
            description: 'The name of the event notification subscription.',
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
              '<p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.</p> <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>',
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
              ' A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the <b>DescribeEventCategories</b> action.',
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
            description: ' A Boolean value; set to <b>true</b> to activate the subscription.',
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
  description:
    "<p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>",
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
    'Modify a setting for an Amazon Neptune global cluster. You can change one or more database configuration parameters by specifying these parameters and their new values in the request.',
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
              '<p>The DB cluster identifier for the global cluster being modified. This parameter is not case-sensitive.</p> <p>Constraints: Must match the identifier of an existing global database cluster.</p>',
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
              "<p>A new cluster identifier to assign to the global database. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>",
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
              'Indicates whether the global database has deletion protection enabled. The global database cannot be deleted when deletion protection is enabled.',
            schema: { type: 'boolean' },
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
              '<p>The version number of the database engine to which you want to upgrade. Changing this parameter will result in an outage. The change is applied during the next maintenance window unless <code>ApplyImmediately</code> is enabled.</p> <p>To list all of the available Neptune engine versions, use the following command:</p>',
            schema: { type: 'string' },
          },
        }),
      AllowMajorVersionUpgrade: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'AllowMajorVersionUpgrade',
            in: 'query',
            required: false,
            description:
              "<p>A value that indicates whether major version upgrades are allowed.</p> <p>Constraints: You must allow major version upgrades if you specify a value for the <code>EngineVersion</code> parameter that is a different major version than the DB cluster's current version.</p> <p>If you upgrade the major version of a global database, the cluster and DB instance parameter groups are set to the default parameter groups for the new version, so you will need to apply any custom parameter groups after completing the upgrade.</p>",
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
    'Modify a setting for an Amazon Neptune global cluster. You can change one or more database configuration parameters by specifying these parameters and their new values in the request.',
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

export const getActionPromoteReadReplicaDBClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=PromoteReadReplicaDBCluster',
  description: 'Not supported.',
  operationId: 'GET_PromoteReadReplicaDBCluster',
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
            description: 'Not supported.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('PromoteReadReplicaDBCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PromoteReadReplicaDBCluster'] },
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
      content: { 'text/xml': { schema: PromoteReadReplicaDBClusterResultSchema } },
    },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
  },
})

export const postActionPromoteReadReplicaDBClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=PromoteReadReplicaDBCluster',
  description: 'Not supported.',
  operationId: 'POST_PromoteReadReplicaDBCluster',
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
        .literal('PromoteReadReplicaDBCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PromoteReadReplicaDBCluster'] },
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
    body: { content: { 'text/xml': { schema: PromoteReadReplicaDBClusterMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PromoteReadReplicaDBClusterResultSchema } },
    },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
  },
})

export const getActionRebootDBInstanceRoute = createRoute({
  method: 'get',
  path: '/#Action=RebootDBInstance',
  description:
    '<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>',
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
              '<p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>',
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
              "<p> When <code>true</code>, the reboot is conducted through a MultiAZ failover.</p> <p>Constraint: You can't specify <code>true</code> if the instance is not configured for MultiAZ.</p>",
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
    '<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>',
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
    'Detaches a Neptune DB cluster from a Neptune global database. A secondary cluster becomes a normal standalone cluster with read-write capability instead of being read-only, and no longer receives data from a the primary cluster.',
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
              'The identifier of the Neptune global database from which to detach the specified Neptune DB cluster.',
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
              'The Amazon Resource Name (ARN) identifying the cluster to be detached from the Neptune global database cluster.',
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
    'Detaches a Neptune DB cluster from a Neptune global database. A secondary cluster becomes a normal standalone cluster with read-write capability instead of being read-only, and no longer receives data from a the primary cluster.',
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

export const getActionRemoveRoleFromDBClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=RemoveRoleFromDBCluster',
  description: 'Disassociates an Identity and Access Management (IAM) role from a DB cluster.',
  operationId: 'GET_RemoveRoleFromDBCluster',
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
            description: 'The name of the DB cluster to disassociate the IAM role from.',
            schema: { type: 'string' },
          },
        }),
      RoleArn: z
        .string()
        .openapi({
          param: {
            name: 'RoleArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB cluster, for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.',
            schema: { type: 'string' },
          },
        }),
      FeatureName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'FeatureName',
            in: 'query',
            required: false,
            description:
              'The name of the feature for the DB cluster that the IAM role is to be disassociated from. For the list of supported feature names, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/api-other-apis.html#DescribeDBEngineVersions">DescribeDBEngineVersions</a>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('RemoveRoleFromDBCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemoveRoleFromDBCluster'] },
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
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'DBClusterRoleNotFoundFault',
      content: { 'text/xml': { schema: DBClusterRoleNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
  },
})

export const postActionRemoveRoleFromDBClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=RemoveRoleFromDBCluster',
  description: 'Disassociates an Identity and Access Management (IAM) role from a DB cluster.',
  operationId: 'POST_RemoveRoleFromDBCluster',
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
        .literal('RemoveRoleFromDBCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RemoveRoleFromDBCluster'] },
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
    body: { content: { 'text/xml': { schema: RemoveRoleFromDBClusterMessageSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'DBClusterNotFoundFault',
      content: { 'text/xml': { schema: DBClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'DBClusterRoleNotFoundFault',
      content: { 'text/xml': { schema: DBClusterRoleNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidDBClusterStateFault',
      content: { 'text/xml': { schema: InvalidDBClusterStateFaultSchema } },
    },
  },
})

export const getActionRemoveSourceIdentifierFromSubscriptionRoute = createRoute({
  method: 'get',
  path: '/#Action=RemoveSourceIdentifierFromSubscription',
  description: 'Removes a source identifier from an existing event notification subscription.',
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
              'The name of the event notification subscription you want to remove a source identifier from.',
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
              ' The source identifier to be removed from the subscription, such as the <b>DB instance identifier</b> for a DB instance or the name of a security group.',
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
  description: 'Removes a source identifier from an existing event notification subscription.',
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
  description: 'Removes metadata tags from an Amazon Neptune resource.',
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
              'The Amazon Neptune resource that the tags are removed from. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.',
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
  description: 'Removes metadata tags from an Amazon Neptune resource.',
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
    '<p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p>',
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
            description: 'The name of the DB cluster parameter group to reset.',
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
              "A value that is set to <code>true</code> to reset all parameters in the DB cluster parameter group to their default values, and <code>false</code> otherwise. You can't use this parameter if there is a list of parameter names specified for the <code>Parameters</code> parameter.",
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
                    .openapi({ description: 'Specifies the engine specific parameters type.' }),
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
                          ' Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.',
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
              .openapi({ description: 'Specifies a parameter.', required: [] })
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
              "A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is set to <code>true</code>.",
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
                          { description: 'Specifies the engine specific parameters type.' },
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
                              ' Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.',
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
                    description: 'Specifies a parameter.',
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
    '<p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p>',
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

export const getActionResetDBParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=ResetDBParameterGroup',
  description:
    'Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.',
  operationId: 'GET_ResetDBParameterGroup',
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
      DBParameterGroupName: z
        .string()
        .openapi({
          param: {
            name: 'DBParameterGroupName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DBParameterGroup.</p> </li> </ul>',
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
              '<p>Specifies whether (<code>true</code>) or not (<code>false</code>) to reset all parameters in the DB parameter group to default values.</p> <p>Default: <code>true</code> </p>',
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
                    .openapi({ description: 'Specifies the engine specific parameters type.' }),
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
                          ' Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.',
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
              .openapi({ description: 'Specifies a parameter.', required: [] })
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
              '<p>To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <p>Valid Values (for Apply method): <code>pending-reboot</code> </p>',
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
                          { description: 'Specifies the engine specific parameters type.' },
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
                              ' Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.',
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
                    description: 'Specifies a parameter.',
                  },
                  { xml: { name: 'Parameter' } },
                ],
              },
            },
          },
        }),
      Action: z
        .literal('ResetDBParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ResetDBParameterGroup'] },
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
      content: { 'text/xml': { schema: DBParameterGroupNameMessageSchema } },
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

export const postActionResetDBParameterGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=ResetDBParameterGroup',
  description:
    'Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.',
  operationId: 'POST_ResetDBParameterGroup',
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
        .literal('ResetDBParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ResetDBParameterGroup'] },
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
    body: { content: { 'text/xml': { schema: ResetDBParameterGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DBParameterGroupNameMessageSchema } },
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
    '<p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</p>',
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
          ['MinCapacity', ['ServerlessV2ScalingConfiguration']],
          ['MaxCapacity', ['ServerlessV2ScalingConfiguration']],
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
          AvailabilityZones: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                StringSchema.and(
                  ((schema) =>
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.any()).openapi({ xml: { name: 'AvailabilityZone' } }),
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
                  'Provides the list of EC2 Availability Zones that instances in the restored DB cluster can be created in.',
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
                  "<p>The name of the DB cluster to create from the DB snapshot or DB cluster snapshot. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>",
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
                  '<p>The identifier for the DB snapshot or DB cluster snapshot to restore from.</p> <p>You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing Snapshot.</p> </li> </ul>',
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
                  '<p>The database engine to use for the new DB cluster.</p> <p>Default: The same as source</p> <p>Constraint: Must be compatible with the engine of the source</p>',
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
                description: 'The version of the database engine to use for the new DB cluster.',
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
                  '<p>The port number on which the new DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>',
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
                  '<p>The name of the DB subnet group to use for the new DB cluster.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>',
                schema: { type: 'string' },
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
                description: 'Not supported.',
                schema: { type: 'string' },
              },
            }),
          OptionGroupName: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'OptionGroupName',
                in: 'query',
                required: false,
                description: ' <i>(Not supported by Neptune)</i> ',
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
                  'A list of VPC security groups that the new DB cluster will belong to.',
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
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.any()).openapi({ xml: { name: 'Tag' } }),
                ),
              ),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Tags',
                in: 'query',
                required: false,
                description: 'The tags to be assigned to the restored DB cluster.',
                schema: {
                  type: 'array',
                  items: {
                    allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }],
                  },
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
                  '<p>The Amazon KMS key identifier to use when restoring an encrypted DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following will occur:</p> <ul> <li> <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the DB snapshot or DB cluster snapshot.</p> </li> <li> <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is not encrypted, then the restored DB cluster is not encrypted.</p> </li> </ul>',
                schema: { type: 'string' },
              },
            }),
          EnableIAMDatabaseAuthentication: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'EnableIAMDatabaseAuthentication',
                in: 'query',
                required: false,
                description:
                  '<p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>',
                schema: { type: 'boolean' },
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
                  'The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs.',
                schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
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
                  '<p>The name of the DB cluster parameter group to associate with the new DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>',
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
                  "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. ",
                schema: { type: 'boolean' },
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
                  ' <i>If set to <code>true</code>, tags are copied to any snapshot of the restored DB cluster that is created.</i> ',
                schema: { type: 'boolean' },
              },
            }),
          ServerlessV2ScalingConfiguration: z
            .object({
              MinCapacity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  DoubleOptionalSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The minimum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on.',
                    }),
                )
                .exactOptional(),
              MaxCapacity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  DoubleOptionalSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The maximum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on.',
                    }),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'ServerlessV2ScalingConfiguration',
                in: 'query',
                required: false,
                description: '',
                schema: {
                  type: 'object',
                  properties: {
                    MinCapacity: {
                      allOf: [
                        { $ref: '#/components/schemas/DoubleOptional' },
                        {
                          description:
                            'The minimum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on.',
                        },
                      ],
                    },
                    MaxCapacity: {
                      allOf: [
                        { $ref: '#/components/schemas/DoubleOptional' },
                        {
                          description:
                            'The maximum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on.',
                        },
                      ],
                    },
                  },
                  description:
                    '<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>',
                },
              },
              description:
                '<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>',
              required: [],
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
      ),
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
      description: 'OptionGroupNotFoundFault',
      content: { 'text/xml': { schema: OptionGroupNotFoundFaultSchema } },
    },
    496: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'text/xml': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
    497: {
      description: 'DBClusterParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBClusterParameterGroupNotFoundFaultSchema } },
    },
  },
})

export const postActionRestoreDBClusterFromSnapshotRoute = createRoute({
  method: 'post',
  path: '/#Action=RestoreDBClusterFromSnapshot',
  description:
    '<p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</p>',
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
      description: 'OptionGroupNotFoundFault',
      content: { 'text/xml': { schema: OptionGroupNotFoundFaultSchema } },
    },
    496: {
      description: 'KMSKeyNotAccessibleFault',
      content: { 'text/xml': { schema: KMSKeyNotAccessibleFaultSchema } },
    },
    497: {
      description: 'DBClusterParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBClusterParameterGroupNotFoundFaultSchema } },
    },
  },
})

export const getActionRestoreDBClusterToPointInTimeRoute = createRoute({
  method: 'get',
  path: '/#Action=RestoreDBClusterToPointInTime',
  description:
    '<p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <a>CreateDBInstance</a> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note>',
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
          ['MinCapacity', ['ServerlessV2ScalingConfiguration']],
          ['MaxCapacity', ['ServerlessV2ScalingConfiguration']],
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
                  '<p>The name of the new DB cluster to be created.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>',
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
                  "<p>The type of restore to be performed. You can specify one of the following values:</p> <ul> <li> <p> <code>full-copy</code> - The new DB cluster is restored as a full copy of the source DB cluster.</p> </li> <li> <p> <code>copy-on-write</code> - The new DB cluster is restored as a clone of the source DB cluster.</p> </li> </ul> <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is restored as a full copy of the source DB cluster.</p>",
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
                  '<p>The identifier of the source DB cluster from which to restore.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>',
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
                  '<p>The date and time to restore the DB cluster to.</p> <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p> <p>Constraints:</p> <ul> <li> <p>Must be before the latest restorable time for the DB instance</p> </li> <li> <p>Must be specified if <code>UseLatestRestorableTime</code> parameter is not provided</p> </li> <li> <p>Cannot be specified if <code>UseLatestRestorableTime</code> parameter is true</p> </li> <li> <p>Cannot be specified if <code>RestoreType</code> parameter is <code>copy-on-write</code> </p> </li> </ul> <p>Example: <code>2015-03-07T23:45:00Z</code> </p>',
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
                  '<p>A value that is set to <code>true</code> to restore the DB cluster to the latest restorable backup time, and <code>false</code> otherwise.</p> <p>Default: <code>false</code> </p> <p>Constraints: Cannot be specified if <code>RestoreToTime</code> parameter is provided.</p>',
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
                  '<p>The port number on which the new DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>',
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
                  '<p>The DB subnet group name to use for the new DB cluster.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>',
                schema: { type: 'string' },
              },
            }),
          OptionGroupName: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'OptionGroupName',
                in: 'query',
                required: false,
                description: ' <i>(Not supported by Neptune)</i> ',
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
                description: 'A list of VPC security groups that the new DB cluster belongs to.',
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
                    z.union([
                      schema,
                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                    ]))(z.any()).openapi({ xml: { name: 'Tag' } }),
                ),
              ),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Tags',
                in: 'query',
                required: false,
                description: 'The tags to be applied to the restored DB cluster.',
                schema: {
                  type: 'array',
                  items: {
                    allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }],
                  },
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
                  '<p>The Amazon KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is different than the KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the KMS key identified by the <code>KmsKeyId</code> parameter.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following will occur:</p> <ul> <li> <p>If the DB cluster is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the source DB cluster.</p> </li> <li> <p>If the DB cluster is not encrypted, then the restored DB cluster is not encrypted.</p> </li> </ul> <p>If <code>DBClusterIdentifier</code> refers to a DB cluster that is not encrypted, then the restore request is rejected.</p>',
                schema: { type: 'string' },
              },
            }),
          EnableIAMDatabaseAuthentication: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'EnableIAMDatabaseAuthentication',
                in: 'query',
                required: false,
                description:
                  '<p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>',
                schema: { type: 'boolean' },
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
                  'The list of logs that the restored DB cluster is to export to CloudWatch Logs.',
                schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
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
                  '<p>The name of the DB cluster parameter group to associate with the new DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>',
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
                  "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. ",
                schema: { type: 'boolean' },
              },
            }),
          ServerlessV2ScalingConfiguration: z
            .object({
              MinCapacity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  DoubleOptionalSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The minimum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on.',
                    }),
                )
                .exactOptional(),
              MaxCapacity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  DoubleOptionalSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The maximum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on.',
                    }),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'ServerlessV2ScalingConfiguration',
                in: 'query',
                required: false,
                description: '',
                schema: {
                  type: 'object',
                  properties: {
                    MinCapacity: {
                      allOf: [
                        { $ref: '#/components/schemas/DoubleOptional' },
                        {
                          description:
                            'The minimum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on.',
                        },
                      ],
                    },
                    MaxCapacity: {
                      allOf: [
                        { $ref: '#/components/schemas/DoubleOptional' },
                        {
                          description:
                            'The maximum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on.',
                        },
                      ],
                    },
                  },
                  description:
                    '<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>',
                },
              },
              description:
                '<p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>',
              required: [],
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
      ),
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
      description: 'OptionGroupNotFoundFault',
      content: { 'text/xml': { schema: OptionGroupNotFoundFaultSchema } },
    },
    495: {
      description: 'StorageQuotaExceededFault',
      content: { 'text/xml': { schema: StorageQuotaExceededFaultSchema } },
    },
    496: {
      description: 'DBClusterParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBClusterParameterGroupNotFoundFaultSchema } },
    },
  },
})

export const postActionRestoreDBClusterToPointInTimeRoute = createRoute({
  method: 'post',
  path: '/#Action=RestoreDBClusterToPointInTime',
  description:
    '<p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <a>CreateDBInstance</a> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note>',
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
      description: 'OptionGroupNotFoundFault',
      content: { 'text/xml': { schema: OptionGroupNotFoundFaultSchema } },
    },
    495: {
      description: 'StorageQuotaExceededFault',
      content: { 'text/xml': { schema: StorageQuotaExceededFaultSchema } },
    },
    496: {
      description: 'DBClusterParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: DBClusterParameterGroupNotFoundFaultSchema } },
    },
  },
})

export const getActionStartDBClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=StartDBCluster',
  description:
    'Starts an Amazon Neptune DB cluster that was stopped using the Amazon console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.',
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
              'The DB cluster identifier of the Neptune DB cluster to be started. This parameter is stored as a lowercase string.',
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
    'Starts an Amazon Neptune DB cluster that was stopped using the Amazon console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.',
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
    "<p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups.</p> <p>Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.</p>",
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
              'The DB cluster identifier of the Neptune DB cluster to be stopped. This parameter is stored as a lowercase string.',
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
    "<p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups.</p> <p>Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.</p>",
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
