import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const CloudWatchLogsDestinationDetailsSchema = z
  .object({
    LogGroup: StringSchema.and(
      z.any().openapi({ description: 'The name of the CloudWatch Logs log group.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The configuration details of the CloudWatch Logs destination.',
    required: [],
  })
  .openapi('CloudWatchLogsDestinationDetails')

const KinesisFirehoseDestinationDetailsSchema = z
  .object({
    DeliveryStream: StringSchema.and(
      z.any().openapi({ description: 'The name of the Kinesis Data Firehose delivery stream.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The configuration details of the Kinesis Data Firehose destination.',
    required: [],
  })
  .openapi('KinesisFirehoseDestinationDetails')

type DestinationDetailsType = {
  CloudWatchLogsDetails?: z.infer<typeof CloudWatchLogsDestinationDetailsSchema> & {
    [key: string]: unknown
  }
  KinesisFirehoseDetails?: z.infer<typeof KinesisFirehoseDestinationDetailsSchema> & {
    [key: string]: unknown
  }
}

const TagSchema = z
  .object({
    Key: StringSchema.and(
      z.any().openapi({ description: 'The key for the tag. May not be null.' }),
    ).exactOptional(),
    Value: StringSchema.and(
      z.any().openapi({ description: "The tag's value. May be null." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A tag that can be added to an ElastiCache cluster or replication group. Tags are composed of a Key/Value pair. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. A tag with a null Value is permitted.',
    required: [],
  })
  .openapi('Tag')

const TagListSchema = z
  .array(TagSchema.and(z.any().openapi({ xml: { name: 'Tag' } })))
  .openapi('TagList')

const TagListMessageSchema = z
  .object({
    TagList: TagListSchema.and(
      z.any().openapi({ description: 'A list of tags as key-value pairs.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the output from the <code>AddTagsToResource</code>, <code>ListTagsForResource</code>, and <code>RemoveTagsFromResource</code> operations.',
    required: [],
  })
  .openapi('TagListMessage')

const CacheClusterNotFoundFaultSchema = z.any().openapi('CacheClusterNotFoundFault')

const CacheParameterGroupNotFoundFaultSchema = z.any().openapi('CacheParameterGroupNotFoundFault')

const CacheSecurityGroupNotFoundFaultSchema = z.any().openapi('CacheSecurityGroupNotFoundFault')

const CacheSubnetGroupNotFoundFaultSchema = z.any().openapi('CacheSubnetGroupNotFoundFault')

const InvalidReplicationGroupStateFaultSchema = z.any().openapi('InvalidReplicationGroupStateFault')

const ReplicationGroupNotFoundFaultSchema = z.any().openapi('ReplicationGroupNotFoundFault')

const ReservedCacheNodeNotFoundFaultSchema = z.any().openapi('ReservedCacheNodeNotFoundFault')

const SnapshotNotFoundFaultSchema = z.any().openapi('SnapshotNotFoundFault')

const UserNotFoundFaultSchema = z.any().openapi('UserNotFoundFault')

const UserGroupNotFoundFaultSchema = z.any().openapi('UserGroupNotFoundFault')

const TagQuotaPerResourceExceededSchema = z.any().openapi('TagQuotaPerResourceExceeded')

const InvalidARNFaultSchema = z.any().openapi('InvalidARNFault')

const EC2SecurityGroupSchema = z
  .object({
    Status: StringSchema.and(
      z.any().openapi({ description: 'The status of the Amazon EC2 security group.' }),
    ).exactOptional(),
    EC2SecurityGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the Amazon EC2 security group.' }),
    ).exactOptional(),
    EC2SecurityGroupOwnerId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon account ID of the Amazon EC2 security group owner.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides ownership and status information for an Amazon EC2 security group.',
    required: [],
  })
  .openapi('EC2SecurityGroup')

const EC2SecurityGroupListSchema = z
  .array(EC2SecurityGroupSchema.and(z.any().openapi({ xml: { name: 'EC2SecurityGroup' } })))
  .openapi('EC2SecurityGroupList')

const CacheSecurityGroupSchema = z
  .object({
    OwnerId: StringSchema.and(
      z.any().openapi({ description: 'The Amazon account ID of the cache security group owner.' }),
    ).exactOptional(),
    CacheSecurityGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the cache security group.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description of the cache security group.' }),
    ).exactOptional(),
    EC2SecurityGroups: EC2SecurityGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Amazon EC2 security groups that are associated with this cache security group.',
        }),
    ).exactOptional(),
    ARN: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the cache security group,' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>',
    required: [],
  })
  .openapi('CacheSecurityGroup')

const AuthorizeCacheSecurityGroupIngressResultSchema = z
  .object({ CacheSecurityGroup: CacheSecurityGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AuthorizeCacheSecurityGroupIngressResult')

const InvalidCacheSecurityGroupStateFaultSchema = z
  .any()
  .openapi('InvalidCacheSecurityGroupStateFault')

const AuthorizationAlreadyExistsFaultSchema = z.any().openapi('AuthorizationAlreadyExistsFault')

const InvalidParameterValueExceptionSchema = z.any().openapi('InvalidParameterValueException')

const InvalidParameterCombinationExceptionSchema = z
  .any()
  .openapi('InvalidParameterCombinationException')

const UpdateActionStatusSchema = z
  .enum([
    'not-applied',
    'waiting-to-start',
    'in-progress',
    'stopping',
    'stopped',
    'complete',
    'scheduling',
    'scheduled',
    'not-applicable',
  ])
  .openapi('UpdateActionStatus')

const ProcessedUpdateActionSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the replication group' }),
    ).exactOptional(),
    CacheClusterId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the cache cluster' }),
    ).exactOptional(),
    ServiceUpdateName: StringSchema.and(
      z.any().openapi({ description: 'The unique ID of the service update' }),
    ).exactOptional(),
    UpdateActionStatus: UpdateActionStatusSchema.and(
      z.any().openapi({ description: 'The status of the update action on the Redis cluster' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Update action that has been processed for the corresponding apply/stop request',
    required: [],
  })
  .openapi('ProcessedUpdateAction')

const ProcessedUpdateActionListSchema = z
  .array(
    ProcessedUpdateActionSchema.and(z.any().openapi({ xml: { name: 'ProcessedUpdateAction' } })),
  )
  .openapi('ProcessedUpdateActionList')

const UnprocessedUpdateActionSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The replication group ID' }),
    ).exactOptional(),
    CacheClusterId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the cache cluster' }),
    ).exactOptional(),
    ServiceUpdateName: StringSchema.and(
      z.any().openapi({ description: 'The unique ID of the service update' }),
    ).exactOptional(),
    ErrorType: StringSchema.and(
      z.any().openapi({ description: 'The error type for requests that are not processed' }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The error message that describes the reason the request was not processed',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Update action that has failed to be processed for the corresponding apply/stop request',
    required: [],
  })
  .openapi('UnprocessedUpdateAction')

const UnprocessedUpdateActionListSchema = z
  .array(
    UnprocessedUpdateActionSchema.and(
      z.any().openapi({ xml: { name: 'UnprocessedUpdateAction' } }),
    ),
  )
  .openapi('UnprocessedUpdateActionList')

const UpdateActionResultsMessageSchema = z
  .object({
    ProcessedUpdateActions: ProcessedUpdateActionListSchema.and(
      z.any().openapi({ description: 'Update actions that have been processed successfully' }),
    ).exactOptional(),
    UnprocessedUpdateActions: UnprocessedUpdateActionListSchema.and(
      z.any().openapi({ description: "Update actions that haven't been processed successfully" }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateActionResultsMessage')

const ServiceUpdateNotFoundFaultSchema = z.any().openapi('ServiceUpdateNotFoundFault')

const GlobalReplicationGroupInfoSchema = z
  .object({
    GlobalReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The name of the Global datastore' }),
    ).exactOptional(),
    GlobalReplicationGroupMemberRole: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The role of the replication group in a Global datastore. Can be primary or secondary.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The name of the Global datastore and role of this replication group in the Global datastore.',
    required: [],
  })
  .openapi('GlobalReplicationGroupInfo')

const PendingAutomaticFailoverStatusSchema = z
  .enum(['enabled', 'disabled'])
  .openapi('PendingAutomaticFailoverStatus')

const DoubleSchema = z.float64().openapi('Double')

const SlotMigrationSchema = z
  .object({
    ProgressPercentage: DoubleSchema.and(
      z.any().openapi({ description: 'The percentage of the slot migration that is complete.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the progress of an online resharding operation.',
    required: [],
  })
  .openapi('SlotMigration')

const ReshardingStatusSchema = z
  .object({
    SlotMigration: SlotMigrationSchema.and(
      z
        .any()
        .openapi({ description: 'Represents the progress of an online resharding operation.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The status of an online resharding operation.', required: [] })
  .openapi('ReshardingStatus')

const AuthTokenUpdateStatusSchema = z.enum(['SETTING', 'ROTATING']).openapi('AuthTokenUpdateStatus')

const UserGroupIdSchema = z
  .string()
  .regex(/[a-zA-Z][a-zA-Z0-9\-]*/)
  .min(1)
  .openapi('UserGroupId')

const UserGroupIdListSchema = z.array(UserGroupIdSchema).openapi('UserGroupIdList')

const UserGroupsUpdateStatusSchema = z
  .object({
    UserGroupIdsToAdd: UserGroupIdListSchema.and(
      z.any().openapi({ description: 'The ID of the user group to add.' }),
    ).exactOptional(),
    UserGroupIdsToRemove: UserGroupIdListSchema.and(
      z.any().openapi({ description: 'The ID of the user group to remove.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The status of the user group update.', required: [] })
  .openapi('UserGroupsUpdateStatus')

const LogTypeSchema = z.enum(['slow-log', 'engine-log']).openapi('LogType')

const DestinationTypeSchema = z
  .enum(['cloudwatch-logs', 'kinesis-firehose'])
  .openapi('DestinationType')

const DestinationDetailsSchema: z.ZodType<DestinationDetailsType> = z
  .lazy(() =>
    z
      .object({
        CloudWatchLogsDetails: CloudWatchLogsDestinationDetailsSchema.and(
          z
            .any()
            .openapi({
              description: 'The configuration details of the CloudWatch Logs destination.',
            }),
        ).exactOptional(),
        KinesisFirehoseDetails: KinesisFirehoseDestinationDetailsSchema.and(
          z
            .any()
            .openapi({
              description: 'The configuration details of the Kinesis Data Firehose destination.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.',
        required: [],
      }),
  )
  .openapi('DestinationDetails')

const LogFormatSchema = z.enum(['text', 'json']).openapi('LogFormat')

const PendingLogDeliveryConfigurationSchema = z
  .object({
    LogType: LogTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Refers to <a href="https://redis.io/commands/slowlog">slow-log</a> or engine-log..',
        }),
    ).exactOptional(),
    DestinationType: DestinationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the destination type, either CloudWatch Logs or Kinesis Data Firehose.',
        }),
    ).exactOptional(),
    DestinationDetails: DestinationDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.',
        }),
    ).exactOptional(),
    LogFormat: LogFormatSchema.and(
      z.any().openapi({ description: 'Returns the log format, either JSON or TEXT' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The log delivery configurations being modified ', required: [] })
  .openapi('PendingLogDeliveryConfiguration')

const PendingLogDeliveryConfigurationListSchema = z
  .array(PendingLogDeliveryConfigurationSchema)
  .openapi('PendingLogDeliveryConfigurationList')

const BooleanOptionalSchema = z.boolean().openapi('BooleanOptional')

const TransitEncryptionModeSchema = z
  .enum(['preferred', 'required'])
  .openapi('TransitEncryptionMode')

const ClusterModeSchema = z.enum(['enabled', 'disabled', 'compatible']).openapi('ClusterMode')

const ReplicationGroupPendingModifiedValuesSchema = z
  .object({
    PrimaryClusterId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The primary cluster ID that is applied immediately (if <code>--apply-immediately</code> was specified), or during the next maintenance window.',
        }),
    ).exactOptional(),
    AutomaticFailoverStatus: PendingAutomaticFailoverStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the status of automatic failover for this Redis replication group.',
        }),
    ).exactOptional(),
    Resharding: ReshardingStatusSchema.and(
      z.any().openapi({ description: 'The status of an online resharding operation.' }),
    ).exactOptional(),
    AuthTokenStatus: AuthTokenUpdateStatusSchema.and(
      z.any().openapi({ description: 'The auth token status' }),
    ).exactOptional(),
    UserGroups: UserGroupsUpdateStatusSchema.and(
      z.any().openapi({ description: 'The user group being modified.' }),
    ).exactOptional(),
    LogDeliveryConfigurations: PendingLogDeliveryConfigurationListSchema.and(
      z.any().openapi({ description: 'The log delivery configurations being modified ' }),
    ).exactOptional(),
    TransitEncryptionEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({ description: 'A flag that enables in-transit encryption when set to true.' }),
    ).exactOptional(),
    TransitEncryptionMode: TransitEncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.',
        }),
    ).exactOptional(),
    ClusterMode: ClusterModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Redis clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Redis clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The settings to be applied to the Redis replication group, either immediately or during the next maintenance window.',
    required: [],
  })
  .openapi('ReplicationGroupPendingModifiedValues')

const ClusterIdListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'ClusterId' } })))
  .openapi('ClusterIdList')

const IntegerSchema = z.int().openapi('Integer')

const EndpointSchema = z
  .object({
    Address: StringSchema.and(
      z.any().openapi({ description: 'The DNS hostname of the cache node.' }),
    ).exactOptional(),
    Port: IntegerSchema.and(
      z.any().openapi({ description: 'The port number that the cache engine is listening on.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the information required for client programs to connect to a cache node.',
    required: [],
  })
  .openapi('Endpoint')

const NodeGroupMemberSchema = z
  .object({
    CacheClusterId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the cluster to which the node belongs.' }),
    ).exactOptional(),
    CacheNodeId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the node within its cluster. A node ID is a numeric identifier (0001, 0002, etc.).',
        }),
    ).exactOptional(),
    ReadEndpoint: EndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The information required for client programs to connect to a node for read operations. The read endpoint is only applicable on Redis (cluster mode disabled) clusters.',
        }),
    ).exactOptional(),
    PreferredAvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Availability Zone in which the node is located.',
        }),
    ).exactOptional(),
    PreferredOutpostArn: StringSchema.and(
      z.any().openapi({ description: 'The outpost ARN of the node group member.' }),
    ).exactOptional(),
    CurrentRole: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The role that is currently assigned to the node - <code>primary</code> or <code>replica</code>. This member is only applicable for Redis (cluster mode disabled) replication groups.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a single node within a node group (shard).', required: [] })
  .openapi('NodeGroupMember')

const NodeGroupMemberListSchema = z
  .array(NodeGroupMemberSchema.and(z.any().openapi({ xml: { name: 'NodeGroupMember' } })))
  .openapi('NodeGroupMemberList')

const NodeGroupSchema = z
  .object({
    NodeGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the node group (shard). A Redis (cluster mode disabled) replication group contains only 1 node group; therefore, the node group ID is 0001. A Redis (cluster mode enabled) replication group contains 1 to 90 node groups numbered 0001 to 0090. Optionally, the user can provide the id for a node group. ',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current state of this replication group - <code>creating</code>, <code>available</code>, <code>modifying</code>, <code>deleting</code>.',
        }),
    ).exactOptional(),
    PrimaryEndpoint: EndpointSchema.and(
      z
        .any()
        .openapi({ description: 'The endpoint of the primary node in this node group (shard).' }),
    ).exactOptional(),
    ReaderEndpoint: EndpointSchema.and(
      z
        .any()
        .openapi({ description: 'The endpoint of the replica nodes in this node group (shard).' }),
    ).exactOptional(),
    Slots: StringSchema.and(
      z.any().openapi({ description: 'The keyspace for this node group (shard).' }),
    ).exactOptional(),
    NodeGroupMembers: NodeGroupMemberListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list containing information about individual nodes within the node group (shard).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a collection of cache nodes in a replication group. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.',
    required: [],
  })
  .openapi('NodeGroup')

const NodeGroupListSchema = z
  .array(NodeGroupSchema.and(z.any().openapi({ xml: { name: 'NodeGroup' } })))
  .openapi('NodeGroupList')

const AutomaticFailoverStatusSchema = z
  .enum(['enabled', 'disabled', 'enabling', 'disabling'])
  .openapi('AutomaticFailoverStatus')

const MultiAZStatusSchema = z.enum(['enabled', 'disabled']).openapi('MultiAZStatus')

const IntegerOptionalSchema = z.int().openapi('IntegerOptional')

const TStampSchema = z.iso.datetime({ offset: true }).openapi('TStamp')

const ReplicationGroupOutpostArnListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'ReplicationGroupOutpostArn' } })))
  .openapi('ReplicationGroupOutpostArnList')

const LogDeliveryConfigurationStatusSchema = z
  .enum(['active', 'enabling', 'modifying', 'disabling', 'error'])
  .openapi('LogDeliveryConfigurationStatus')

const LogDeliveryConfigurationSchema = z
  .object({
    LogType: LogTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Refers to <a href="https://redis.io/commands/slowlog">slow-log</a> or engine-log.',
        }),
    ).exactOptional(),
    DestinationType: DestinationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the destination type, either <code>cloudwatch-logs</code> or <code>kinesis-firehose</code>.',
        }),
    ).exactOptional(),
    DestinationDetails: DestinationDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.',
        }),
    ).exactOptional(),
    LogFormat: LogFormatSchema.and(
      z.any().openapi({ description: 'Returns the log format, either JSON or TEXT.' }),
    ).exactOptional(),
    Status: LogDeliveryConfigurationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the log delivery configuration status. Values are one of <code>enabling</code> | <code>disabling</code> | <code>modifying</code> | <code>active</code> | <code>error</code> ',
        }),
    ).exactOptional(),
    Message: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Returns an error message for the log delivery configuration.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns the destination, format and type of the logs. ', required: [] })
  .openapi('LogDeliveryConfiguration')

const LogDeliveryConfigurationListSchema = z
  .array(
    LogDeliveryConfigurationSchema.and(
      z.any().openapi({ xml: { name: 'LogDeliveryConfiguration' } }),
    ),
  )
  .openapi('LogDeliveryConfigurationList')

const DataTieringStatusSchema = z.enum(['enabled', 'disabled']).openapi('DataTieringStatus')

const BooleanSchema = z.boolean().openapi('Boolean')

const NetworkTypeSchema = z.enum(['ipv4', 'ipv6', 'dual_stack']).openapi('NetworkType')

const IpDiscoverySchema = z.enum(['ipv4', 'ipv6']).openapi('IpDiscovery')

const ReplicationGroupSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The identifier for the replication group.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The user supplied description of the replication group.' }),
    ).exactOptional(),
    GlobalReplicationGroupInfo: GlobalReplicationGroupInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Global datastore and role of this replication group in the Global datastore.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current state of this replication group - <code>creating</code>, <code>available</code>, <code>modifying</code>, <code>deleting</code>, <code>create-failed</code>, <code>snapshotting</code>.',
        }),
    ).exactOptional(),
    PendingModifiedValues: ReplicationGroupPendingModifiedValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A group of settings to be applied to the replication group, either immediately or during the next maintenance window.',
        }),
    ).exactOptional(),
    MemberClusters: ClusterIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names of all the cache clusters that are part of this replication group.',
        }),
    ).exactOptional(),
    NodeGroups: NodeGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of node groups in this replication group. For Redis (cluster mode disabled) replication groups, this is a single-element list. For Redis (cluster mode enabled) replication groups, the list contains an entry for each node group (shard).',
        }),
    ).exactOptional(),
    SnapshottingClusterId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cluster ID that is used as the daily snapshot source for the replication group.',
        }),
    ).exactOptional(),
    AutomaticFailover: AutomaticFailoverStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the status of automatic failover for this Redis replication group.',
        }),
    ).exactOptional(),
    MultiAZ: MultiAZStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html">Minimizing Downtime: Multi-AZ</a> ',
        }),
    ).exactOptional(),
    ConfigurationEndpoint: EndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration endpoint for this replication group. Use the configuration endpoint to connect to this replication group.',
        }),
    ).exactOptional(),
    SnapshotRetentionLimit: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of days for which ElastiCache retains automatic cluster snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p> <important> <p> If the value of <code>SnapshotRetentionLimit</code> is set to zero (0), backups are turned off.</p> </important>',
        }),
    ).exactOptional(),
    SnapshotWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).</p> <p>Example: <code>05:00-09:00</code> </p> <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note>',
        }),
    ).exactOptional(),
    ClusterEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A flag indicating whether or not this replication group is cluster enabled; i.e., whether its data can be partitioned across multiple shards (API/CLI: node groups).</p> <p>Valid values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    CacheNodeType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the compute and memory capacity node type for each node in the replication group.',
        }),
    ).exactOptional(),
    AuthTokenEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A flag that enables using an <code>AuthToken</code> (password) when issuing Redis commands.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    AuthTokenLastModifiedDate: TStampSchema.and(
      z.any().openapi({ description: 'The date the auth token was last modified' }),
    ).exactOptional(),
    TransitEncryptionEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A flag that enables in-transit encryption when set to <code>true</code>.</p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    AtRestEncryptionEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A flag that enables encryption at-rest when set to <code>true</code>.</p> <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code> after the cluster is created. To enable encryption at-rest on a cluster you must set <code>AtRestEncryptionEnabled</code> to <code>true</code> when you create a cluster.</p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    MemberClustersOutpostArns: ReplicationGroupOutpostArnListSchema.and(
      z
        .any()
        .openapi({ description: "The outpost ARNs of the replication group's member clusters." }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the KMS key used to encrypt the disk in the cluster.' }),
    ).exactOptional(),
    ARN: StringSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) of the replication group.' }),
    ).exactOptional(),
    UserGroupIds: UserGroupIdListSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the user group associated to the replication group.' }),
    ).exactOptional(),
    LogDeliveryConfigurations: LogDeliveryConfigurationListSchema.and(
      z.any().openapi({ description: 'Returns the destination, format and type of the logs. ' }),
    ).exactOptional(),
    ReplicationGroupCreateTime: TStampSchema.and(
      z.any().openapi({ description: 'The date and time when the cluster was created.' }),
    ).exactOptional(),
    DataTiering: DataTieringStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/data-tiering.html">Data tiering</a>.',
        }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions. ',
        }),
    ).exactOptional(),
    NetworkType: NetworkTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Must be either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.',
        }),
    ).exactOptional(),
    IpDiscovery: IpDiscoverySchema.and(
      z
        .any()
        .openapi({
          description:
            'The network type you choose when modifying a cluster, either <code>ipv4</code> | <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.',
        }),
    ).exactOptional(),
    TransitEncryptionMode: TransitEncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.',
        }),
    ).exactOptional(),
    ClusterMode: ClusterModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Redis clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Redis clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains all of the attributes of a specific Redis replication group.',
    required: [],
  })
  .openapi('ReplicationGroup')

const CompleteMigrationResponseSchema = z
  .object({ ReplicationGroup: ReplicationGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CompleteMigrationResponse')

const ReplicationGroupNotUnderMigrationFaultSchema = z
  .any()
  .openapi('ReplicationGroupNotUnderMigrationFault')

const AllowedNodeGroupIdSchema = z.string().regex(/\d+/).min(1).max(4).openapi('AllowedNodeGroupId')

const AvailabilityZonesListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'AvailabilityZone' } })))
  .openapi('AvailabilityZonesList')

const OutpostArnsListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'OutpostArn' } })))
  .openapi('OutpostArnsList')

const NodeGroupConfigurationSchema = z
  .object({
    NodeGroupId: AllowedNodeGroupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to.',
        }),
    ).exactOptional(),
    Slots: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that specifies the keyspace for a particular node group. Keyspaces range from 0 to 16,383. The string is in the format <code>startkey-endkey</code>.</p> <p>Example: <code>"0-3999"</code> </p>',
        }),
    ).exactOptional(),
    ReplicaCount: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({ description: 'The number of read replica nodes in this node group (shard).' }),
    ).exactOptional(),
    PrimaryAvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Availability Zone where the primary node of this node group (shard) is launched.',
        }),
    ).exactOptional(),
    ReplicaAvailabilityZones: AvailabilityZonesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Availability Zones to be used for the read replicas. The number of Availability Zones in this list must match the value of <code>ReplicaCount</code> or <code>ReplicasPerNodeGroup</code> if not specified.',
        }),
    ).exactOptional(),
    PrimaryOutpostArn: StringSchema.and(
      z.any().openapi({ description: 'The outpost ARN of the primary node.' }),
    ).exactOptional(),
    ReplicaOutpostArns: OutpostArnsListSchema.and(
      z.any().openapi({ description: 'The outpost ARN of the node replicas.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Node group (shard) configuration options. Each node group (shard) configuration has the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>.',
    required: [],
  })
  .openapi('NodeGroupConfiguration')

const NodeSnapshotSchema = z
  .object({
    CacheClusterId: StringSchema.and(
      z.any().openapi({ description: 'A unique identifier for the source cluster.' }),
    ).exactOptional(),
    NodeGroupId: StringSchema.and(
      z.any().openapi({ description: 'A unique identifier for the source node group (shard).' }),
    ).exactOptional(),
    CacheNodeId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The cache node identifier for the node in the source cluster.' }),
    ).exactOptional(),
    NodeGroupConfiguration: NodeGroupConfigurationSchema.and(
      z.any().openapi({ description: 'The configuration for the source node group (shard).' }),
    ).exactOptional(),
    CacheSize: StringSchema.and(
      z.any().openapi({ description: 'The size of the cache on the source cache node.' }),
    ).exactOptional(),
    CacheNodeCreateTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time when the cache node was created in the source cluster.',
        }),
    ).exactOptional(),
    SnapshotCreateTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time when the source node's metadata and cache data set was obtained for the snapshot.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents an individual cache node in a snapshot of a cluster.',
    required: [],
  })
  .openapi('NodeSnapshot')

const NodeSnapshotListSchema = z
  .array(NodeSnapshotSchema.and(z.any().openapi({ xml: { name: 'NodeSnapshot' } })))
  .openapi('NodeSnapshotList')

const SnapshotSchema = z
  .object({
    SnapshotName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a snapshot. For an automatic snapshot, the name is system-generated. For a manual snapshot, this is the user-provided name.',
        }),
    ).exactOptional(),
    ReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the source replication group.' }),
    ).exactOptional(),
    ReplicationGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'A description of the source replication group.' }),
    ).exactOptional(),
    CacheClusterId: StringSchema.and(
      z.any().openapi({ description: 'The user-supplied identifier of the source cluster.' }),
    ).exactOptional(),
    SnapshotStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the snapshot. Valid values: <code>creating</code> | <code>available</code> | <code>restoring</code> | <code>copying</code> | <code>deleting</code>.',
        }),
    ).exactOptional(),
    SnapshotSource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the snapshot is from an automatic backup (<code>automated</code>) or was created manually (<code>manual</code>).',
        }),
    ).exactOptional(),
    CacheNodeType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the compute and memory capacity node type for the source cluster.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the cache engine (<code>memcached</code> or <code>redis</code>) used by the source cluster.',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the cache engine version that is used by the source cluster.',
        }),
    ).exactOptional(),
    NumCacheNodes: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of cache nodes in the source cluster.</p> <p>For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 40.</p>',
        }),
    ).exactOptional(),
    PreferredAvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Availability Zone in which the source cluster is located.',
        }),
    ).exactOptional(),
    PreferredOutpostArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) of the preferred outpost.' }),
    ).exactOptional(),
    CacheClusterCreateTime: TStampSchema.and(
      z.any().openapi({ description: 'The date and time when the source cluster was created.' }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p> <p>Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:23:00-mon:01:30</code> </p>',
        }),
    ).exactOptional(),
    TopicArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the topic used by the source cluster for publishing notifications.',
        }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'The port number used by each cache nodes in the source cluster.',
        }),
    ).exactOptional(),
    CacheParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The cache parameter group that is associated with the source cluster.',
        }),
    ).exactOptional(),
    CacheSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the cache subnet group associated with the source cluster.',
        }),
    ).exactOptional(),
    VpcId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group for the source cluster.',
        }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.  ',
        }),
    ).exactOptional(),
    SnapshotRetentionLimit: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For an automatic snapshot, the number of days for which ElastiCache retains the snapshot before deleting it.</p> <p>For manual snapshots, this field reflects the <code>SnapshotRetentionLimit</code> for the source cluster when the snapshot was created. This field is otherwise ignored: Manual snapshots do not expire, and can only be deleted using the <code>DeleteSnapshot</code> operation. </p> <p> <b>Important</b> If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.</p>',
        }),
    ).exactOptional(),
    SnapshotWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The daily time range during which ElastiCache takes daily snapshots of the source cluster.',
        }),
    ).exactOptional(),
    NumNodeGroups: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of node groups (shards) in this snapshot. When restoring from a snapshot, the number of node groups (shards) in the snapshot and in the restored replication group must be the same.',
        }),
    ).exactOptional(),
    AutomaticFailover: AutomaticFailoverStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the status of automatic failover for the source Redis replication group.',
        }),
    ).exactOptional(),
    NodeSnapshots: NodeSnapshotListSchema.and(
      z.any().openapi({ description: 'A list of the cache nodes in the source cluster.' }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the KMS key used to encrypt the snapshot.' }),
    ).exactOptional(),
    ARN: StringSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) of the snapshot.' }),
    ).exactOptional(),
    DataTiering: DataTieringStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/data-tiering.html">Data tiering</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.',
    required: [],
  })
  .openapi('Snapshot')

const CopySnapshotResultSchema = z
  .object({ Snapshot: SnapshotSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CopySnapshotResult')

const SnapshotAlreadyExistsFaultSchema = z.any().openapi('SnapshotAlreadyExistsFault')

const SnapshotQuotaExceededFaultSchema = z.any().openapi('SnapshotQuotaExceededFault')

const InvalidSnapshotStateFaultSchema = z.any().openapi('InvalidSnapshotStateFault')

const CacheNodeIdsListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'CacheNodeId' } })))
  .openapi('CacheNodeIdsList')

const PendingModifiedValuesSchema = z
  .object({
    NumCacheNodes: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The new number of cache nodes for the cluster.</p> <p>For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 40.</p>',
        }),
    ).exactOptional(),
    CacheNodeIdsToRemove: CacheNodeIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of cache node IDs that are being removed (or will be removed) from the cluster. A node ID is a 4-digit numeric identifier (0001, 0002, etc.).',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'The new cache engine version that the cluster runs.' }),
    ).exactOptional(),
    CacheNodeType: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The cache node type that this cluster or replication group is scaled to.',
        }),
    ).exactOptional(),
    AuthTokenStatus: AuthTokenUpdateStatusSchema.and(
      z.any().openapi({ description: 'The auth token status' }),
    ).exactOptional(),
    LogDeliveryConfigurations: PendingLogDeliveryConfigurationListSchema.and(
      z.any().openapi({ description: 'The log delivery configurations being modified ' }),
    ).exactOptional(),
    TransitEncryptionEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({ description: 'A flag that enables in-transit encryption when set to true.' }),
    ).exactOptional(),
    TransitEncryptionMode: TransitEncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A group of settings that are applied to the cluster in the future, or that are currently being applied.',
    required: [],
  })
  .openapi('PendingModifiedValues')

const NotificationConfigurationSchema = z
  .object({
    TopicArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) that identifies the topic.' }),
    ).exactOptional(),
    TopicStatus: StringSchema.and(
      z.any().openapi({ description: 'The current state of the topic.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS).',
    required: [],
  })
  .openapi('NotificationConfiguration')

const CacheSecurityGroupMembershipSchema = z
  .object({
    CacheSecurityGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the cache security group.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The membership status in the cache security group. The status changes when a cache security group is modified, or when the cache security groups assigned to a cluster are modified.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: "Represents a cluster's status within a particular cache security group.",
    required: [],
  })
  .openapi('CacheSecurityGroupMembership')

const CacheSecurityGroupMembershipListSchema = z
  .array(
    CacheSecurityGroupMembershipSchema.and(
      z.any().openapi({ xml: { name: 'CacheSecurityGroup' } }),
    ),
  )
  .openapi('CacheSecurityGroupMembershipList')

const CacheParameterGroupStatusSchema = z
  .object({
    CacheParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the cache parameter group.' }),
    ).exactOptional(),
    ParameterApplyStatus: StringSchema.and(
      z.any().openapi({ description: 'The status of parameter updates.' }),
    ).exactOptional(),
    CacheNodeIdsToReboot: CacheNodeIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the cache node IDs which need to be rebooted for parameter changes to be applied. A node ID is a numeric identifier (0001, 0002, etc.).',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Status of the cache parameter group.', required: [] })
  .openapi('CacheParameterGroupStatus')

const CacheNodeSchema = z
  .object({
    CacheNodeId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The cache node identifier. A node ID is a numeric identifier (0001, 0002, etc.). The combination of cluster ID and node ID uniquely identifies every cache node used in a customer's Amazon account.",
        }),
    ).exactOptional(),
    CacheNodeStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current state of this cache node, one of the following values: <code>available</code>, <code>creating</code>, <code>rebooting</code>, or <code>deleting</code>.',
        }),
    ).exactOptional(),
    CacheNodeCreateTime: TStampSchema.and(
      z.any().openapi({ description: 'The date and time when the cache node was created.' }),
    ).exactOptional(),
    Endpoint: EndpointSchema.and(
      z.any().openapi({ description: 'The hostname for connecting to this cache node.' }),
    ).exactOptional(),
    ParameterGroupStatus: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The status of the parameter group applied to this cache node.' }),
    ).exactOptional(),
    SourceCacheNodeId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the primary node to which this read replica node is synchronized. If this field is empty, this node is not associated with a primary cluster.',
        }),
    ).exactOptional(),
    CustomerAvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Availability Zone where this node was created and now resides.',
        }),
    ).exactOptional(),
    CustomerOutpostArn: StringSchema.and(
      z.any().openapi({ description: 'The customer outpost ARN of the cache node.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents an individual cache node within a cluster. Each cache node runs its own instance of the cluster\'s protocol-compliant caching software - either Memcached or Redis.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>',
    required: [],
  })
  .openapi('CacheNode')

const CacheNodeListSchema = z
  .array(CacheNodeSchema.and(z.any().openapi({ xml: { name: 'CacheNode' } })))
  .openapi('CacheNodeList')

const SecurityGroupMembershipSchema = z
  .object({
    SecurityGroupId: StringSchema.and(
      z.any().openapi({ description: 'The identifier of the cache security group.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the cache security group membership. The status changes whenever a cache security group is modified, or when the cache security groups assigned to a cluster are modified.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents a single cache security group and its status.',
    required: [],
  })
  .openapi('SecurityGroupMembership')

const SecurityGroupMembershipListSchema = z
  .array(SecurityGroupMembershipSchema)
  .openapi('SecurityGroupMembershipList')

const CacheClusterSchema = z
  .object({
    CacheClusterId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user-supplied identifier of the cluster. This identifier is a unique key that identifies a cluster.',
        }),
    ).exactOptional(),
    ConfigurationEndpoint: EndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents a Memcached cluster endpoint which can be used by an application to connect to any node in the cluster. The configuration endpoint will always have <code>.cfg</code> in it.</p> <p>Example: <code>mem-3.9dvc4r<u>.cfg</u>.usw2.cache.amazonaws.com:11211</code> </p>',
        }),
    ).exactOptional(),
    ClientDownloadLandingPage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the web page where you can download the latest ElastiCache client library.',
        }),
    ).exactOptional(),
    CacheNodeType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the compute and memory capacity node type for the cluster.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the cache engine (<code>memcached</code> or <code>redis</code>) to be used for this cluster.',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The version of the cache engine that is used in this cluster.' }),
    ).exactOptional(),
    CacheClusterStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current state of this cluster, one of the following values: <code>available</code>, <code>creating</code>, <code>deleted</code>, <code>deleting</code>, <code>incompatible-network</code>, <code>modifying</code>, <code>rebooting cluster nodes</code>, <code>restore-failed</code>, or <code>snapshotting</code>.',
        }),
    ).exactOptional(),
    NumCacheNodes: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of cache nodes in the cluster.</p> <p>For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 40.</p>',
        }),
    ).exactOptional(),
    PreferredAvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Availability Zone in which the cluster is located or "Multiple" if the cache nodes are located in different Availability Zones.',
        }),
    ).exactOptional(),
    PreferredOutpostArn: StringSchema.and(
      z.any().openapi({ description: 'The outpost ARN in which the cache cluster is created.' }),
    ).exactOptional(),
    CacheClusterCreateTime: TStampSchema.and(
      z.any().openapi({ description: 'The date and time when the cluster was created.' }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p> <p>Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:23:00-mon:01:30</code> </p>',
        }),
    ).exactOptional(),
    PendingModifiedValues: PendingModifiedValuesSchema.exactOptional(),
    NotificationConfiguration: NotificationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS). ',
        }),
    ).exactOptional(),
    CacheSecurityGroups: CacheSecurityGroupMembershipListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of cache security group elements, composed of name and status sub-elements.',
        }),
    ).exactOptional(),
    CacheParameterGroup: CacheParameterGroupStatusSchema.and(
      z.any().openapi({ description: 'Status of the cache parameter group.' }),
    ).exactOptional(),
    CacheSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the cache subnet group associated with the cluster.',
        }),
    ).exactOptional(),
    CacheNodes: CacheNodeListSchema.and(
      z.any().openapi({ description: 'A list of cache nodes that are members of the cluster.' }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.  ',
        }),
    ).exactOptional(),
    SecurityGroups: SecurityGroupMembershipListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of VPC Security Groups associated with the cluster.' }),
    ).exactOptional(),
    ReplicationGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The replication group to which this cluster belongs. If this field is empty, the cluster is not associated with any replication group.',
        }),
    ).exactOptional(),
    SnapshotRetentionLimit: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of days for which ElastiCache retains automatic cluster snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p> <important> <p> If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.</p> </important>',
        }),
    ).exactOptional(),
    SnapshotWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your cluster.</p> <p>Example: <code>05:00-09:00</code> </p>',
        }),
    ).exactOptional(),
    AuthTokenEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A flag that enables using an <code>AuthToken</code> (password) when issuing Redis commands.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    AuthTokenLastModifiedDate: TStampSchema.and(
      z.any().openapi({ description: 'The date the auth token was last modified' }),
    ).exactOptional(),
    TransitEncryptionEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A flag that enables in-transit encryption when set to <code>true</code>.</p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    AtRestEncryptionEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A flag that enables encryption at-rest when set to <code>true</code>.</p> <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code> after the cluster is created. To enable at-rest encryption on a cluster you must set <code>AtRestEncryptionEnabled</code> to <code>true</code> when you create a cluster.</p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    ARN: StringSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) of the cache cluster.' }),
    ).exactOptional(),
    ReplicationGroupLogDeliveryEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean value indicating whether log delivery is enabled for the replication group.',
        }),
    ).exactOptional(),
    LogDeliveryConfigurations: LogDeliveryConfigurationListSchema.and(
      z.any().openapi({ description: 'Returns the destination, format and type of the logs.' }),
    ).exactOptional(),
    NetworkType: NetworkTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Must be either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.',
        }),
    ).exactOptional(),
    IpDiscovery: IpDiscoverySchema.and(
      z
        .any()
        .openapi({
          description:
            'The network type associated with the cluster, either <code>ipv4</code> | <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.',
        }),
    ).exactOptional(),
    TransitEncryptionMode: TransitEncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains all of the attributes of a specific cluster.', required: [] })
  .openapi('CacheCluster')

const CreateCacheClusterResultSchema = z
  .object({ CacheCluster: CacheClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateCacheClusterResult')

const LogDeliveryConfigurationRequestSchema = z
  .object({
    LogType: LogTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Refers to <a href="https://redis.io/commands/slowlog">slow-log</a> or engine-log..',
        }),
    ).exactOptional(),
    DestinationType: DestinationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify either <code>cloudwatch-logs</code> or <code>kinesis-firehose</code> as the destination type.',
        }),
    ).exactOptional(),
    DestinationDetails: DestinationDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.',
        }),
    ).exactOptional(),
    LogFormat: LogFormatSchema.and(
      z.any().openapi({ description: 'Specifies either JSON or TEXT' }),
    ).exactOptional(),
    Enabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({ description: 'Specify if log delivery is enabled. Default <code>true</code>.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the destination, format and type of the logs. ',
    required: [],
  })
  .openapi('LogDeliveryConfigurationRequest')

const CacheClusterAlreadyExistsFaultSchema = z.any().openapi('CacheClusterAlreadyExistsFault')

const InsufficientCacheClusterCapacityFaultSchema = z
  .any()
  .openapi('InsufficientCacheClusterCapacityFault')

const ClusterQuotaForCustomerExceededFaultSchema = z
  .any()
  .openapi('ClusterQuotaForCustomerExceededFault')

const NodeQuotaForClusterExceededFaultSchema = z.any().openapi('NodeQuotaForClusterExceededFault')

const NodeQuotaForCustomerExceededFaultSchema = z.any().openapi('NodeQuotaForCustomerExceededFault')

const InvalidVPCNetworkStateFaultSchema = z.any().openapi('InvalidVPCNetworkStateFault')

const CacheParameterGroupSchema = z
  .object({
    CacheParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the cache parameter group.' }),
    ).exactOptional(),
    CacheParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the cache parameter group family that this cache parameter group is compatible with.</p> <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> | <code>memcached1.6</code> | <code>redis2.6</code> | <code>redis2.8</code> | <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> | <code>redis6.x</code> | <code>redis7</code> </p>',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description for this cache parameter group.' }),
    ).exactOptional(),
    IsGlobal: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the parameter group is associated with a Global datastore',
        }),
    ).exactOptional(),
    ARN: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN (Amazon Resource Name) of the cache parameter group.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>CreateCacheParameterGroup</code> operation.',
    required: [],
  })
  .openapi('CacheParameterGroup')

const CreateCacheParameterGroupResultSchema = z
  .object({ CacheParameterGroup: CacheParameterGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateCacheParameterGroupResult')

const CacheParameterGroupQuotaExceededFaultSchema = z
  .any()
  .openapi('CacheParameterGroupQuotaExceededFault')

const CacheParameterGroupAlreadyExistsFaultSchema = z
  .any()
  .openapi('CacheParameterGroupAlreadyExistsFault')

const InvalidCacheParameterGroupStateFaultSchema = z
  .any()
  .openapi('InvalidCacheParameterGroupStateFault')

const CreateCacheSecurityGroupResultSchema = z
  .object({ CacheSecurityGroup: CacheSecurityGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateCacheSecurityGroupResult')

const CacheSecurityGroupAlreadyExistsFaultSchema = z
  .any()
  .openapi('CacheSecurityGroupAlreadyExistsFault')

const CacheSecurityGroupQuotaExceededFaultSchema = z
  .any()
  .openapi('CacheSecurityGroupQuotaExceededFault')

const AvailabilityZoneSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the Availability Zone.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes an Availability Zone in which the cluster is launched.',
    required: [],
  })
  .openapi('AvailabilityZone')

const SubnetOutpostSchema = z
  .object({
    SubnetOutpostArn: StringSchema.and(
      z.any().openapi({ description: 'The outpost ARN of the subnet.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The ID of the outpost subnet.', required: [] })
  .openapi('SubnetOutpost')

const NetworkTypeListSchema = z.array(NetworkTypeSchema).openapi('NetworkTypeList')

const SubnetSchema = z
  .object({
    SubnetIdentifier: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the subnet.' }),
    ).exactOptional(),
    SubnetAvailabilityZone: AvailabilityZoneSchema.and(
      z.any().openapi({ description: 'The Availability Zone associated with the subnet.' }),
    ).exactOptional(),
    SubnetOutpost: SubnetOutpostSchema.and(
      z.any().openapi({ description: 'The outpost ARN of the subnet.' }),
    ).exactOptional(),
    SupportedNetworkTypes: NetworkTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with ElastiCache.',
    required: [],
  })
  .openapi('Subnet')

const SubnetListSchema = z
  .array(SubnetSchema.and(z.any().openapi({ xml: { name: 'Subnet' } })))
  .openapi('SubnetList')

const CacheSubnetGroupSchema = z
  .object({
    CacheSubnetGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the cache subnet group.' }),
    ).exactOptional(),
    CacheSubnetGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'The description of the cache subnet group.' }),
    ).exactOptional(),
    VpcId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group.',
        }),
    ).exactOptional(),
    Subnets: SubnetListSchema.and(
      z.any().openapi({ description: 'A list of subnets associated with the cache subnet group.' }),
    ).exactOptional(),
    ARN: StringSchema.and(
      z.any().openapi({ description: 'The ARN (Amazon Resource Name) of the cache subnet group.' }),
    ).exactOptional(),
    SupportedNetworkTypes: NetworkTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul>',
    required: [],
  })
  .openapi('CacheSubnetGroup')

const CreateCacheSubnetGroupResultSchema = z
  .object({ CacheSubnetGroup: CacheSubnetGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateCacheSubnetGroupResult')

const CacheSubnetGroupAlreadyExistsFaultSchema = z
  .any()
  .openapi('CacheSubnetGroupAlreadyExistsFault')

const CacheSubnetGroupQuotaExceededFaultSchema = z
  .any()
  .openapi('CacheSubnetGroupQuotaExceededFault')

const CacheSubnetQuotaExceededFaultSchema = z.any().openapi('CacheSubnetQuotaExceededFault')

const InvalidSubnetSchema = z.any().openapi('InvalidSubnet')

const SubnetNotAllowedFaultSchema = z.any().openapi('SubnetNotAllowedFault')

const GlobalReplicationGroupMemberSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The replication group id of the Global datastore member.' }),
    ).exactOptional(),
    ReplicationGroupRegion: StringSchema.and(
      z.any().openapi({ description: 'The Amazon region of the Global datastore member.' }),
    ).exactOptional(),
    Role: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates the role of the replication group, primary or secondary.',
        }),
    ).exactOptional(),
    AutomaticFailover: AutomaticFailoverStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether automatic failover is enabled for the replication group.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'The status of the membership of the replication group.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A member of a Global datastore. It contains the Replication Group Id, the Amazon region and the role of the replication group. ',
    required: [],
  })
  .openapi('GlobalReplicationGroupMember')

const GlobalReplicationGroupMemberListSchema = z
  .array(
    GlobalReplicationGroupMemberSchema.and(
      z.any().openapi({ xml: { name: 'GlobalReplicationGroupMember' } }),
    ),
  )
  .openapi('GlobalReplicationGroupMemberList')

const GlobalNodeGroupSchema = z
  .object({
    GlobalNodeGroupId: StringSchema.and(
      z.any().openapi({ description: 'The name of the global node group' }),
    ).exactOptional(),
    Slots: StringSchema.and(
      z.any().openapi({ description: 'The keyspace for this node group' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Indicates the slot configuration and global identifier for a slice group.',
    required: [],
  })
  .openapi('GlobalNodeGroup')

const GlobalNodeGroupListSchema = z
  .array(GlobalNodeGroupSchema.and(z.any().openapi({ xml: { name: 'GlobalNodeGroup' } })))
  .openapi('GlobalNodeGroupList')

const GlobalReplicationGroupSchema = z
  .object({
    GlobalReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The name of the Global datastore' }),
    ).exactOptional(),
    GlobalReplicationGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'The optional description of the Global datastore' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'The status of the Global datastore' }),
    ).exactOptional(),
    CacheNodeType: StringSchema.and(
      z.any().openapi({ description: 'The cache node type of the Global datastore' }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z.any().openapi({ description: 'The Elasticache engine. For Redis only.' }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'The Elasticache Redis engine version.' }),
    ).exactOptional(),
    Members: GlobalReplicationGroupMemberListSchema.and(
      z
        .any()
        .openapi({ description: 'The replication groups that comprise the Global datastore.' }),
    ).exactOptional(),
    ClusterEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'A flag that indicates whether the Global datastore is cluster enabled.',
        }),
    ).exactOptional(),
    GlobalNodeGroups: GlobalNodeGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the slot configuration and global identifier for each slice group.',
        }),
    ).exactOptional(),
    AuthTokenEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A flag that enables using an <code>AuthToken</code> (password) when issuing Redis commands.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    TransitEncryptionEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A flag that enables in-transit encryption when set to true.</p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p>',
        }),
    ).exactOptional(),
    AtRestEncryptionEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A flag that enables encryption at rest when set to <code>true</code>.</p> <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code> after the replication group is created. To enable encryption at rest on a replication group you must set <code>AtRestEncryptionEnabled</code> to <code>true</code> when you create the replication group. </p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p>',
        }),
    ).exactOptional(),
    ARN: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN (Amazon Resource Name) of the global replication group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore, which is what you use to associate a secondary cluster.</p> </li> </ul>',
    required: [],
  })
  .openapi('GlobalReplicationGroup')

const CreateGlobalReplicationGroupResultSchema = z
  .object({ GlobalReplicationGroup: GlobalReplicationGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateGlobalReplicationGroupResult')

const GlobalReplicationGroupAlreadyExistsFaultSchema = z
  .any()
  .openapi('GlobalReplicationGroupAlreadyExistsFault')

const ServiceLinkedRoleNotFoundFaultSchema = z.any().openapi('ServiceLinkedRoleNotFoundFault')

const CreateReplicationGroupResultSchema = z
  .object({ ReplicationGroup: ReplicationGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateReplicationGroupResult')

const InvalidCacheClusterStateFaultSchema = z.any().openapi('InvalidCacheClusterStateFault')

const ReplicationGroupAlreadyExistsFaultSchema = z
  .any()
  .openapi('ReplicationGroupAlreadyExistsFault')

const InvalidUserGroupStateFaultSchema = z.any().openapi('InvalidUserGroupStateFault')

const NodeGroupsPerReplicationGroupQuotaExceededFaultSchema = z
  .any()
  .openapi('NodeGroupsPerReplicationGroupQuotaExceededFault')

const GlobalReplicationGroupNotFoundFaultSchema = z
  .any()
  .openapi('GlobalReplicationGroupNotFoundFault')

const InvalidGlobalReplicationGroupStateFaultSchema = z
  .any()
  .openapi('InvalidGlobalReplicationGroupStateFault')

const CreateSnapshotResultSchema = z
  .object({ Snapshot: SnapshotSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateSnapshotResult')

const SnapshotFeatureNotSupportedFaultSchema = z.any().openapi('SnapshotFeatureNotSupportedFault')

const EngineTypeSchema = z
  .string()
  .regex(/[a-zA-Z]*/)
  .openapi('EngineType')

const AuthenticationTypeSchema = z
  .enum(['password', 'no-password', 'iam'])
  .openapi('AuthenticationType')

const AuthenticationSchema = z
  .object({
    Type: AuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether the user requires a password to authenticate.',
        }),
    ).exactOptional(),
    PasswordCount: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of passwords belonging to the user. The maximum is two.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Indicates whether the user requires a password to authenticate.',
    required: [],
  })
  .openapi('Authentication')

const UserSchema = z
  .object({
    UserId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the user.' }),
    ).exactOptional(),
    UserName: StringSchema.and(
      z.any().openapi({ description: 'The username of the user.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates the user status. Can be "active", "modifying" or "deleting".',
        }),
    ).exactOptional(),
    Engine: EngineTypeSchema.and(
      z.any().openapi({ description: 'The current supported value is Redis.' }),
    ).exactOptional(),
    MinimumEngineVersion: StringSchema.and(
      z.any().openapi({ description: 'The minimum engine version required, which is Redis 6.0' }),
    ).exactOptional(),
    AccessString: StringSchema.and(
      z.any().openapi({ description: 'Access permissions string used for this user.' }),
    ).exactOptional(),
    UserGroupIds: UserGroupIdListSchema.and(
      z.any().openapi({ description: 'Returns a list of the user group IDs the user belongs to.' }),
    ).exactOptional(),
    Authentication: AuthenticationSchema.and(
      z
        .any()
        .openapi({ description: 'Denotes whether the user requires a password to authenticate.' }),
    ).exactOptional(),
    ARN: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the user.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User')

const InputAuthenticationTypeSchema = z
  .enum(['password', 'no-password-required', 'iam'])
  .openapi('InputAuthenticationType')

const PasswordListInputSchema = z.array(StringSchema).min(1).openapi('PasswordListInput')

const UserAlreadyExistsFaultSchema = z.any().openapi('UserAlreadyExistsFault')

const UserQuotaExceededFaultSchema = z.any().openapi('UserQuotaExceededFault')

const DuplicateUserNameFaultSchema = z.any().openapi('DuplicateUserNameFault')

const UserIdSchema = z
  .string()
  .regex(/[a-zA-Z][a-zA-Z0-9\-]*/)
  .min(1)
  .openapi('UserId')

const UserIdListSchema = z.array(UserIdSchema).openapi('UserIdList')

const UserGroupPendingChangesSchema = z
  .object({
    UserIdsToRemove: UserIdListSchema.and(
      z.any().openapi({ description: 'The list of user IDs to remove.' }),
    ).exactOptional(),
    UserIdsToAdd: UserIdListSchema.and(
      z.any().openapi({ description: 'The list of user IDs to add.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns the updates being applied to the user group.', required: [] })
  .openapi('UserGroupPendingChanges')

const UGReplicationGroupIdListSchema = z.array(StringSchema).openapi('UGReplicationGroupIdList')

const UserGroupSchema = z
  .object({
    UserGroupId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the user group.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates user group status. Can be "creating", "active", "modifying", "deleting".',
        }),
    ).exactOptional(),
    Engine: EngineTypeSchema.and(
      z.any().openapi({ description: 'The current supported value is Redis. ' }),
    ).exactOptional(),
    UserIds: UserIdListSchema.and(
      z.any().openapi({ description: 'The list of user IDs that belong to the user group.' }),
    ).exactOptional(),
    MinimumEngineVersion: StringSchema.and(
      z.any().openapi({ description: 'The minimum engine version required, which is Redis 6.0' }),
    ).exactOptional(),
    PendingChanges: UserGroupPendingChangesSchema.and(
      z.any().openapi({ description: 'A list of updates being applied to the user group.' }),
    ).exactOptional(),
    ReplicationGroups: UGReplicationGroupIdListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of replication groups that the user group can access.' }),
    ).exactOptional(),
    ARN: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the user group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserGroup')

const UserGroupAlreadyExistsFaultSchema = z.any().openapi('UserGroupAlreadyExistsFault')

const DefaultUserRequiredSchema = z.any().openapi('DefaultUserRequired')

const UserGroupQuotaExceededFaultSchema = z.any().openapi('UserGroupQuotaExceededFault')

const DecreaseNodeGroupsInGlobalReplicationGroupResultSchema = z
  .object({ GlobalReplicationGroup: GlobalReplicationGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DecreaseNodeGroupsInGlobalReplicationGroupResult')

const DecreaseReplicaCountResultSchema = z
  .object({ ReplicationGroup: ReplicationGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DecreaseReplicaCountResult')

const PreferredAvailabilityZoneListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'PreferredAvailabilityZone' } })))
  .openapi('PreferredAvailabilityZoneList')

const PreferredOutpostArnListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'PreferredOutpostArn' } })))
  .openapi('PreferredOutpostArnList')

const ConfigureShardSchema = z
  .object({
    NodeGroupId: AllowedNodeGroupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The 4-digit id for the node group you are configuring. For Redis (cluster mode disabled) replication groups, the node group id is always 0001. To find a Redis (cluster mode enabled)'s node group's (shard's) id, see <a href=\"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/shard-find-id.html\">Finding a Shard's Id</a>.",
        }),
    ),
    NewReplicaCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of replicas you want in this node group at the end of this operation. The maximum value for <code>NewReplicaCount</code> is 5. The minimum value depends upon the type of Redis replication group you are working with.</p> <p>The minimum number of replicas in a shard or replication group is:</p> <ul> <li> <p>Redis (cluster mode disabled)</p> <ul> <li> <p>If Multi-AZ: 1</p> </li> <li> <p>If Multi-AZ: 0</p> </li> </ul> </li> <li> <p>Redis (cluster mode enabled): 0 (though you will not be able to failover to a replica if your primary node fails)</p> </li> </ul>',
        }),
    ),
    PreferredAvailabilityZones: PreferredAvailabilityZoneListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of <code>PreferredAvailabilityZone</code> strings that specify which availability zones the replication group's nodes are to be in. The nummber of <code>PreferredAvailabilityZone</code> values must equal the value of <code>NewReplicaCount</code> plus 1 to account for the primary node. If this member of <code>ReplicaConfiguration</code> is omitted, ElastiCache for Redis selects the availability zone for each of the replicas.",
        }),
    ).exactOptional(),
    PreferredOutpostArns: PreferredOutpostArnListSchema.and(
      z.any().openapi({ description: 'The outpost ARNs in which the cache cluster is created.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['NodeGroupId', 'NewReplicaCount'],
    description:
      'Node group (shard) configuration options when adding or removing replicas. Each node group (shard) configuration has the following members: NodeGroupId, NewReplicaCount, and PreferredAvailabilityZones. ',
  })
  .openapi('ConfigureShard')

const NoOperationFaultSchema = z.any().openapi('NoOperationFault')

const DeleteCacheClusterResultSchema = z
  .object({ CacheCluster: CacheClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DeleteCacheClusterResult')

const CacheSubnetGroupInUseSchema = z.any().openapi('CacheSubnetGroupInUse')

const DeleteGlobalReplicationGroupResultSchema = z
  .object({ GlobalReplicationGroup: GlobalReplicationGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DeleteGlobalReplicationGroupResult')

const DeleteReplicationGroupResultSchema = z
  .object({ ReplicationGroup: ReplicationGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DeleteReplicationGroupResult')

const DeleteSnapshotResultSchema = z
  .object({ Snapshot: SnapshotSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DeleteSnapshotResult')

const InvalidUserStateFaultSchema = z.any().openapi('InvalidUserStateFault')

const DefaultUserAssociatedToUserGroupFaultSchema = z
  .any()
  .openapi('DefaultUserAssociatedToUserGroupFault')

const CacheClusterListSchema = z
  .array(CacheClusterSchema.and(z.any().openapi({ xml: { name: 'CacheCluster' } })))
  .openapi('CacheClusterList')

const CacheClusterMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    CacheClusters: CacheClusterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of clusters. Each item in the list contains detailed information about one cluster.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>DescribeCacheClusters</code> operation.',
    required: [],
  })
  .openapi('CacheClusterMessage')

const CacheEngineVersionSchema = z
  .object({
    Engine: StringSchema.and(
      z.any().openapi({ description: 'The name of the cache engine.' }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z.any().openapi({ description: 'The version number of the cache engine.' }),
    ).exactOptional(),
    CacheParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the cache parameter group family associated with this cache engine.</p> <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> | <code>memcached1.6</code> | <code>redis2.6</code> | <code>redis2.8</code> | <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> | <code>redis6.x</code> | <code>redis7</code> </p>',
        }),
    ).exactOptional(),
    CacheEngineDescription: StringSchema.and(
      z.any().openapi({ description: 'The description of the cache engine.' }),
    ).exactOptional(),
    CacheEngineVersionDescription: StringSchema.and(
      z.any().openapi({ description: 'The description of the cache engine version.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides all of the details about a particular cache engine version.',
    required: [],
  })
  .openapi('CacheEngineVersion')

const CacheEngineVersionListSchema = z
  .array(CacheEngineVersionSchema.and(z.any().openapi({ xml: { name: 'CacheEngineVersion' } })))
  .openapi('CacheEngineVersionList')

const CacheEngineVersionMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    CacheEngineVersions: CacheEngineVersionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of cache engine version details. Each element in the list contains detailed information about one cache engine version.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>DescribeCacheEngineVersions</a> operation.',
    required: [],
  })
  .openapi('CacheEngineVersionMessage')

const CacheParameterGroupListSchema = z
  .array(CacheParameterGroupSchema.and(z.any().openapi({ xml: { name: 'CacheParameterGroup' } })))
  .openapi('CacheParameterGroupList')

const CacheParameterGroupsMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    CacheParameterGroups: CacheParameterGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of cache parameter groups. Each element in the list contains detailed information about one cache parameter group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>DescribeCacheParameterGroups</code> operation.',
    required: [],
  })
  .openapi('CacheParameterGroupsMessage')

const ChangeTypeSchema = z.enum(['immediate', 'requires-reboot']).openapi('ChangeType')

const ParameterSchema = z
  .object({
    ParameterName: StringSchema.and(
      z.any().openapi({ description: 'The name of the parameter.' }),
    ).exactOptional(),
    ParameterValue: StringSchema.and(
      z.any().openapi({ description: 'The value of the parameter.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A description of the parameter.' }),
    ).exactOptional(),
    Source: StringSchema.and(
      z.any().openapi({ description: 'The source of the parameter.' }),
    ).exactOptional(),
    DataType: StringSchema.and(
      z.any().openapi({ description: 'The valid data type for the parameter.' }),
    ).exactOptional(),
    AllowedValues: StringSchema.and(
      z.any().openapi({ description: 'The valid range of values for the parameter.' }),
    ).exactOptional(),
    IsModifiable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.',
        }),
    ).exactOptional(),
    MinimumEngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The earliest cache engine version to which the parameter can apply.',
        }),
    ).exactOptional(),
    ChangeType: ChangeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether a change to the parameter is applied immediately or requires a reboot for the change to be applied. You can force a reboot or wait until the next maintenance window\'s reboot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Rebooting.html">Rebooting a Cluster</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes an individual setting that controls some aspect of ElastiCache behavior.',
    required: [],
  })
  .openapi('Parameter')

const ParametersListSchema = z
  .array(ParameterSchema.and(z.any().openapi({ xml: { name: 'Parameter' } })))
  .openapi('ParametersList')

const CacheNodeTypeSpecificValueSchema = z
  .object({
    CacheNodeType: StringSchema.and(
      z.any().openapi({ description: 'The cache node type for which this value applies.' }),
    ).exactOptional(),
    Value: StringSchema.and(
      z.any().openapi({ description: 'The value for the cache node type.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A value that applies only to a certain cache node type.', required: [] })
  .openapi('CacheNodeTypeSpecificValue')

const CacheNodeTypeSpecificValueListSchema = z
  .array(
    CacheNodeTypeSpecificValueSchema.and(
      z.any().openapi({ xml: { name: 'CacheNodeTypeSpecificValue' } }),
    ),
  )
  .openapi('CacheNodeTypeSpecificValueList')

const CacheNodeTypeSpecificParameterSchema = z
  .object({
    ParameterName: StringSchema.and(
      z.any().openapi({ description: 'The name of the parameter.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A description of the parameter.' }),
    ).exactOptional(),
    Source: StringSchema.and(
      z.any().openapi({ description: 'The source of the parameter value.' }),
    ).exactOptional(),
    DataType: StringSchema.and(
      z.any().openapi({ description: 'The valid data type for the parameter.' }),
    ).exactOptional(),
    AllowedValues: StringSchema.and(
      z.any().openapi({ description: 'The valid range of values for the parameter.' }),
    ).exactOptional(),
    IsModifiable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.',
        }),
    ).exactOptional(),
    MinimumEngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The earliest cache engine version to which the parameter can apply.',
        }),
    ).exactOptional(),
    CacheNodeTypeSpecificValues: CacheNodeTypeSpecificValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of cache node types and their corresponding values for this parameter.',
        }),
    ).exactOptional(),
    ChangeType: ChangeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether a change to the parameter is applied immediately or requires a reboot for the change to be applied. You can force a reboot or wait until the next maintenance window\'s reboot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Rebooting.html">Rebooting a Cluster</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A parameter that has a different value for each cache node type it is applied to. For example, in a Redis cluster, a <code>cache.m1.large</code> cache node type would have a larger <code>maxmemory</code> value than a <code>cache.m1.small</code> type.',
    required: [],
  })
  .openapi('CacheNodeTypeSpecificParameter')

const CacheNodeTypeSpecificParametersListSchema = z
  .array(
    CacheNodeTypeSpecificParameterSchema.and(
      z.any().openapi({ xml: { name: 'CacheNodeTypeSpecificParameter' } }),
    ),
  )
  .openapi('CacheNodeTypeSpecificParametersList')

const CacheParameterGroupDetailsSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    Parameters: ParametersListSchema.and(
      z.any().openapi({ description: 'A list of <a>Parameter</a> instances.' }),
    ).exactOptional(),
    CacheNodeTypeSpecificParameters: CacheNodeTypeSpecificParametersListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of parameters specific to a particular cache node type. Each element in the list contains detailed information about one parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>DescribeCacheParameters</code> operation.',
    required: [],
  })
  .openapi('CacheParameterGroupDetails')

const CacheSecurityGroupsSchema = z
  .array(CacheSecurityGroupSchema.and(z.any().openapi({ xml: { name: 'CacheSecurityGroup' } })))
  .openapi('CacheSecurityGroups')

const CacheSecurityGroupMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    CacheSecurityGroups: CacheSecurityGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of cache security groups. Each element in the list contains detailed information about one group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>DescribeCacheSecurityGroups</code> operation.',
    required: [],
  })
  .openapi('CacheSecurityGroupMessage')

const CacheSubnetGroupsSchema = z
  .array(CacheSubnetGroupSchema.and(z.any().openapi({ xml: { name: 'CacheSubnetGroup' } })))
  .openapi('CacheSubnetGroups')

const CacheSubnetGroupMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    CacheSubnetGroups: CacheSubnetGroupsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of cache subnet groups. Each element in the list contains detailed information about one group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>DescribeCacheSubnetGroups</code> operation.',
    required: [],
  })
  .openapi('CacheSubnetGroupMessage')

const EngineDefaultsSchema = z
  .object({
    CacheParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the name of the cache parameter group family to which the engine default parameters apply.</p> <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> | <code>memcached1.6</code> | <code>redis2.6</code> | <code>redis2.8</code> | <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> | <code>redis6.0</code> | <code>redis6.x</code> | <code>redis7</code> </p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    Parameters: ParametersListSchema.and(
      z.any().openapi({ description: 'Contains a list of engine default parameters.' }),
    ).exactOptional(),
    CacheNodeTypeSpecificParameters: CacheNodeTypeSpecificParametersListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of parameters specific to a particular cache node type. Each element in the list contains detailed information about one parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.',
    required: [],
  })
  .openapi('EngineDefaults')

const DescribeEngineDefaultParametersResultSchema = z
  .object({ EngineDefaults: EngineDefaultsSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DescribeEngineDefaultParametersResult')

const SourceTypeSchema = z
  .enum([
    'cache-cluster',
    'cache-parameter-group',
    'cache-security-group',
    'cache-subnet-group',
    'replication-group',
    'user',
    'user-group',
  ])
  .openapi('SourceType')

const EventSchema = z
  .object({
    SourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the source of the event. For example, if the event occurred at the cluster level, the identifier would be the name of the cluster.',
        }),
    ).exactOptional(),
    SourceType: SourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the origin of this event - a cluster, a parameter group, a security group, etc.',
        }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'The text of the event.' }),
    ).exactOptional(),
    Date: TStampSchema.and(
      z.any().openapi({ description: 'The date and time when the event occurred.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster, adding or removing a cache node, or rebooting a node.',
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
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    Events: EventListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of events. Each element in the list contains detailed information about one event.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>DescribeEvents</code> operation.',
    required: [],
  })
  .openapi('EventsMessage')

const GlobalReplicationGroupListSchema = z
  .array(
    GlobalReplicationGroupSchema.and(z.any().openapi({ xml: { name: 'GlobalReplicationGroup' } })),
  )
  .openapi('GlobalReplicationGroupList')

const DescribeGlobalReplicationGroupsResultSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. &gt;',
        }),
    ).exactOptional(),
    GlobalReplicationGroups: GlobalReplicationGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the slot configuration and global identifier for each slice group.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeGlobalReplicationGroupsResult')

const ReplicationGroupListSchema = z
  .array(ReplicationGroupSchema.and(z.any().openapi({ xml: { name: 'ReplicationGroup' } })))
  .openapi('ReplicationGroupList')

const ReplicationGroupMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    ReplicationGroups: ReplicationGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of replication groups. Each item in the list contains detailed information about one replication group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>DescribeReplicationGroups</code> operation.',
    required: [],
  })
  .openapi('ReplicationGroupMessage')

const RecurringChargeSchema = z
  .object({
    RecurringChargeAmount: DoubleSchema.and(
      z.any().openapi({ description: 'The monetary amount of the recurring charge.' }),
    ).exactOptional(),
    RecurringChargeFrequency: StringSchema.and(
      z.any().openapi({ description: 'The frequency of the recurring charge.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the specific price and frequency of a recurring charges for a reserved cache node, or for a reserved cache node offering.',
    required: [],
  })
  .openapi('RecurringCharge')

const RecurringChargeListSchema = z
  .array(RecurringChargeSchema.and(z.any().openapi({ xml: { name: 'RecurringCharge' } })))
  .openapi('RecurringChargeList')

const ReservedCacheNodeSchema = z
  .object({
    ReservedCacheNodeId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the reservation.' }),
    ).exactOptional(),
    ReservedCacheNodesOfferingId: StringSchema.and(
      z.any().openapi({ description: 'The offering identifier.' }),
    ).exactOptional(),
    CacheNodeType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The cache node type for the reserved cache nodes.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>',
        }),
    ).exactOptional(),
    StartTime: TStampSchema.and(
      z.any().openapi({ description: 'The time the reservation started.' }),
    ).exactOptional(),
    Duration: IntegerSchema.and(
      z.any().openapi({ description: 'The duration of the reservation in seconds.' }),
    ).exactOptional(),
    FixedPrice: DoubleSchema.and(
      z.any().openapi({ description: 'The fixed price charged for this reserved cache node.' }),
    ).exactOptional(),
    UsagePrice: DoubleSchema.and(
      z.any().openapi({ description: 'The hourly price charged for this reserved cache node.' }),
    ).exactOptional(),
    CacheNodeCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of cache nodes that have been reserved.' }),
    ).exactOptional(),
    ProductDescription: StringSchema.and(
      z.any().openapi({ description: 'The description of the reserved cache node.' }),
    ).exactOptional(),
    OfferingType: StringSchema.and(
      z.any().openapi({ description: 'The offering type of this reserved cache node.' }),
    ).exactOptional(),
    State: StringSchema.and(
      z.any().openapi({ description: 'The state of the reserved cache node.' }),
    ).exactOptional(),
    RecurringCharges: RecurringChargeListSchema.and(
      z
        .any()
        .openapi({ description: 'The recurring price charged to run this reserved cache node.' }),
    ).exactOptional(),
    ReservationARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the reserved cache node.</p> <p>Example: <code>arn:aws:elasticache:us-east-1:123456789012:reserved-instance:ri-2017-03-27-08-33-25-582</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation.',
    required: [],
  })
  .openapi('ReservedCacheNode')

const ReservedCacheNodeListSchema = z
  .array(ReservedCacheNodeSchema.and(z.any().openapi({ xml: { name: 'ReservedCacheNode' } })))
  .openapi('ReservedCacheNodeList')

const ReservedCacheNodeMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    ReservedCacheNodes: ReservedCacheNodeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of reserved cache nodes. Each element in the list contains detailed information about one node.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>DescribeReservedCacheNodes</code> operation.',
    required: [],
  })
  .openapi('ReservedCacheNodeMessage')

const ReservedCacheNodesOfferingSchema = z
  .object({
    ReservedCacheNodesOfferingId: StringSchema.and(
      z.any().openapi({ description: 'A unique identifier for the reserved cache node offering.' }),
    ).exactOptional(),
    CacheNodeType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The cache node type for the reserved cache node.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Duration: IntegerSchema.and(
      z.any().openapi({ description: 'The duration of the offering. in seconds.' }),
    ).exactOptional(),
    FixedPrice: DoubleSchema.and(
      z.any().openapi({ description: 'The fixed price charged for this offering.' }),
    ).exactOptional(),
    UsagePrice: DoubleSchema.and(
      z.any().openapi({ description: 'The hourly price charged for this offering.' }),
    ).exactOptional(),
    ProductDescription: StringSchema.and(
      z.any().openapi({ description: 'The cache engine used by the offering.' }),
    ).exactOptional(),
    OfferingType: StringSchema.and(
      z.any().openapi({ description: 'The offering type.' }),
    ).exactOptional(),
    RecurringCharges: RecurringChargeListSchema.and(
      z
        .any()
        .openapi({ description: 'The recurring price charged to run this reserved cache node.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes all of the attributes of a reserved cache node offering.',
    required: [],
  })
  .openapi('ReservedCacheNodesOffering')

const ReservedCacheNodesOfferingListSchema = z
  .array(
    ReservedCacheNodesOfferingSchema.and(
      z.any().openapi({ xml: { name: 'ReservedCacheNodesOffering' } }),
    ),
  )
  .openapi('ReservedCacheNodesOfferingList')

const ReservedCacheNodesOfferingMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    ReservedCacheNodesOfferings: ReservedCacheNodesOfferingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of reserved cache node offerings. Each element in the list contains detailed information about one offering.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the output of a <code>DescribeReservedCacheNodesOfferings</code> operation.',
    required: [],
  })
  .openapi('ReservedCacheNodesOfferingMessage')

const ReservedCacheNodesOfferingNotFoundFaultSchema = z
  .any()
  .openapi('ReservedCacheNodesOfferingNotFoundFault')

const ServiceUpdateSeveritySchema = z
  .enum(['critical', 'important', 'medium', 'low'])
  .openapi('ServiceUpdateSeverity')

const ServiceUpdateStatusSchema = z
  .enum(['available', 'cancelled', 'expired'])
  .openapi('ServiceUpdateStatus')

const ServiceUpdateTypeSchema = z.literal('security-update').openapi('ServiceUpdateType')

const ServiceUpdateSchema = z
  .object({
    ServiceUpdateName: StringSchema.and(
      z.any().openapi({ description: 'The unique ID of the service update' }),
    ).exactOptional(),
    ServiceUpdateReleaseDate: TStampSchema.and(
      z.any().openapi({ description: 'The date when the service update is initially available' }),
    ).exactOptional(),
    ServiceUpdateEndDate: TStampSchema.and(
      z
        .any()
        .openapi({ description: 'The date after which the service update is no longer available' }),
    ).exactOptional(),
    ServiceUpdateSeverity: ServiceUpdateSeveritySchema.and(
      z.any().openapi({ description: 'The severity of the service update' }),
    ).exactOptional(),
    ServiceUpdateRecommendedApplyByDate: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommendend date to apply the service update in order to ensure compliance. For information on compliance, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-compliance.html#elasticache-compliance-self-service">Self-Service Security Updates for Compliance</a>.',
        }),
    ).exactOptional(),
    ServiceUpdateStatus: ServiceUpdateStatusSchema.and(
      z.any().openapi({ description: 'The status of the service update' }),
    ).exactOptional(),
    ServiceUpdateDescription: StringSchema.and(
      z.any().openapi({ description: 'Provides details of the service update' }),
    ).exactOptional(),
    ServiceUpdateType: ServiceUpdateTypeSchema.and(
      z.any().openapi({ description: 'Reflects the nature of the service update' }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Elasticache engine to which the update applies. Either Redis or Memcached',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Elasticache engine version to which the update applies. Either Redis or Memcached engine version',
        }),
    ).exactOptional(),
    AutoUpdateAfterRecommendedApplyByDate: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the service update will be automatically applied once the recommended apply-by date has expired. ',
        }),
    ).exactOptional(),
    EstimatedUpdateTime: StringSchema.and(
      z.any().openapi({ description: 'The estimated length of time the service update will take' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An update that you can apply to your Redis clusters.', required: [] })
  .openapi('ServiceUpdate')

const ServiceUpdateListSchema = z
  .array(ServiceUpdateSchema.and(z.any().openapi({ xml: { name: 'ServiceUpdate' } })))
  .openapi('ServiceUpdateList')

const ServiceUpdatesMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    ServiceUpdates: ServiceUpdateListSchema.and(
      z.any().openapi({ description: 'A list of service updates' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceUpdatesMessage')

const SnapshotListSchema = z
  .array(SnapshotSchema.and(z.any().openapi({ xml: { name: 'Snapshot' } })))
  .openapi('SnapshotList')

const DescribeSnapshotsListMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    Snapshots: SnapshotListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of snapshots. Each item in the list contains detailed information about one snapshot.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>DescribeSnapshots</code> operation.',
    required: [],
  })
  .openapi('DescribeSnapshotsListMessage')

const SlaMetSchema = z.enum(['yes', 'no', 'n/a']).openapi('SlaMet')

const NodeUpdateStatusSchema = z
  .enum(['not-applied', 'waiting-to-start', 'in-progress', 'stopping', 'stopped', 'complete'])
  .openapi('NodeUpdateStatus')

const NodeUpdateInitiatedBySchema = z.enum(['system', 'customer']).openapi('NodeUpdateInitiatedBy')

const NodeGroupMemberUpdateStatusSchema = z
  .object({
    CacheClusterId: StringSchema.and(
      z.any().openapi({ description: 'The cache cluster ID' }),
    ).exactOptional(),
    CacheNodeId: StringSchema.and(
      z.any().openapi({ description: 'The node ID of the cache cluster' }),
    ).exactOptional(),
    NodeUpdateStatus: NodeUpdateStatusSchema.and(
      z.any().openapi({ description: 'The update status of the node' }),
    ).exactOptional(),
    NodeDeletionDate: TStampSchema.and(
      z.any().openapi({ description: 'The deletion date of the node' }),
    ).exactOptional(),
    NodeUpdateStartDate: TStampSchema.and(
      z.any().openapi({ description: 'The start date of the update for a node' }),
    ).exactOptional(),
    NodeUpdateEndDate: TStampSchema.and(
      z.any().openapi({ description: 'The end date of the update for a node' }),
    ).exactOptional(),
    NodeUpdateInitiatedBy: NodeUpdateInitiatedBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Reflects whether the update was initiated by the customer or automatically applied',
        }),
    ).exactOptional(),
    NodeUpdateInitiatedDate: TStampSchema.and(
      z.any().openapi({ description: 'The date when the update is triggered' }),
    ).exactOptional(),
    NodeUpdateStatusModifiedDate: TStampSchema.and(
      z.any().openapi({ description: 'The date when the NodeUpdateStatus was last modified' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The status of the service update on the node group member ',
    required: [],
  })
  .openapi('NodeGroupMemberUpdateStatus')

const NodeGroupMemberUpdateStatusListSchema = z
  .array(
    NodeGroupMemberUpdateStatusSchema.and(
      z.any().openapi({ xml: { name: 'NodeGroupMemberUpdateStatus' } }),
    ),
  )
  .openapi('NodeGroupMemberUpdateStatusList')

const NodeGroupUpdateStatusSchema = z
  .object({
    NodeGroupId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the node group' }),
    ).exactOptional(),
    NodeGroupMemberUpdateStatus: NodeGroupMemberUpdateStatusListSchema.and(
      z.any().openapi({ description: 'The status of the service update on the node group member' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The status of the service update on the node group ', required: [] })
  .openapi('NodeGroupUpdateStatus')

const NodeGroupUpdateStatusListSchema = z
  .array(
    NodeGroupUpdateStatusSchema.and(z.any().openapi({ xml: { name: 'NodeGroupUpdateStatus' } })),
  )
  .openapi('NodeGroupUpdateStatusList')

const CacheNodeUpdateStatusSchema = z
  .object({
    CacheNodeId: StringSchema.and(
      z.any().openapi({ description: 'The node ID of the cache cluster' }),
    ).exactOptional(),
    NodeUpdateStatus: NodeUpdateStatusSchema.and(
      z.any().openapi({ description: 'The update status of the node' }),
    ).exactOptional(),
    NodeDeletionDate: TStampSchema.and(
      z.any().openapi({ description: 'The deletion date of the node' }),
    ).exactOptional(),
    NodeUpdateStartDate: TStampSchema.and(
      z.any().openapi({ description: 'The start date of the update for a node' }),
    ).exactOptional(),
    NodeUpdateEndDate: TStampSchema.and(
      z.any().openapi({ description: 'The end date of the update for a node' }),
    ).exactOptional(),
    NodeUpdateInitiatedBy: NodeUpdateInitiatedBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Reflects whether the update was initiated by the customer or automatically applied',
        }),
    ).exactOptional(),
    NodeUpdateInitiatedDate: TStampSchema.and(
      z.any().openapi({ description: 'The date when the update is triggered' }),
    ).exactOptional(),
    NodeUpdateStatusModifiedDate: TStampSchema.and(
      z.any().openapi({ description: 'The date when the NodeUpdateStatus was last modified&gt;' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The status of the service update on the cache node', required: [] })
  .openapi('CacheNodeUpdateStatus')

const CacheNodeUpdateStatusListSchema = z
  .array(
    CacheNodeUpdateStatusSchema.and(z.any().openapi({ xml: { name: 'CacheNodeUpdateStatus' } })),
  )
  .openapi('CacheNodeUpdateStatusList')

const UpdateActionSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the replication group' }),
    ).exactOptional(),
    CacheClusterId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the cache cluster' }),
    ).exactOptional(),
    ServiceUpdateName: StringSchema.and(
      z.any().openapi({ description: 'The unique ID of the service update' }),
    ).exactOptional(),
    ServiceUpdateReleaseDate: TStampSchema.and(
      z.any().openapi({ description: 'The date the update is first available' }),
    ).exactOptional(),
    ServiceUpdateSeverity: ServiceUpdateSeveritySchema.and(
      z.any().openapi({ description: 'The severity of the service update' }),
    ).exactOptional(),
    ServiceUpdateStatus: ServiceUpdateStatusSchema.and(
      z.any().openapi({ description: 'The status of the service update' }),
    ).exactOptional(),
    ServiceUpdateRecommendedApplyByDate: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommended date to apply the service update to ensure compliance. For information on compliance, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-compliance.html#elasticache-compliance-self-service">Self-Service Security Updates for Compliance</a>.',
        }),
    ).exactOptional(),
    ServiceUpdateType: ServiceUpdateTypeSchema.and(
      z.any().openapi({ description: 'Reflects the nature of the service update ' }),
    ).exactOptional(),
    UpdateActionAvailableDate: TStampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date that the service update is available to a replication group',
        }),
    ).exactOptional(),
    UpdateActionStatus: UpdateActionStatusSchema.and(
      z.any().openapi({ description: 'The status of the update action' }),
    ).exactOptional(),
    NodesUpdated: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The progress of the service update on the replication group' }),
    ).exactOptional(),
    UpdateActionStatusModifiedDate: TStampSchema.and(
      z.any().openapi({ description: 'The date when the UpdateActionStatus was last modified' }),
    ).exactOptional(),
    SlaMet: SlaMetSchema.and(
      z
        .any()
        .openapi({
          description:
            'If yes, all nodes in the replication group have been updated by the recommended apply-by date. If no, at least one node in the replication group have not been updated by the recommended apply-by date. If N/A, the replication group was created after the recommended apply-by date.',
        }),
    ).exactOptional(),
    NodeGroupUpdateStatus: NodeGroupUpdateStatusListSchema.and(
      z.any().openapi({ description: 'The status of the service update on the node group' }),
    ).exactOptional(),
    CacheNodeUpdateStatus: CacheNodeUpdateStatusListSchema.and(
      z.any().openapi({ description: 'The status of the service update on the cache node' }),
    ).exactOptional(),
    EstimatedUpdateTime: StringSchema.and(
      z.any().openapi({ description: 'The estimated length of time for the update to complete' }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Elasticache engine to which the update applies. Either Redis or Memcached',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The status of the service update for a specific replication group',
    required: [],
  })
  .openapi('UpdateAction')

const UpdateActionListSchema = z
  .array(UpdateActionSchema.and(z.any().openapi({ xml: { name: 'UpdateAction' } })))
  .openapi('UpdateActionList')

const UpdateActionsMessageSchema = z
  .object({
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    UpdateActions: UpdateActionListSchema.and(
      z.any().openapi({ description: 'Returns a list of update actions' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateActionsMessage')

const UserGroupListSchema = z.array(UserGroupSchema).openapi('UserGroupList')

const DescribeUserGroupsResultSchema = z
  .object({
    UserGroups: UserGroupListSchema.and(
      z.any().openapi({ description: 'Returns a list of user groups.' }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. &gt;',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeUserGroupsResult')

const UserListSchema = z.array(UserSchema).openapi('UserList')

const DescribeUsersResultSchema = z
  .object({
    Users: UserListSchema.and(z.any().openapi({ description: 'A list of users.' })).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. &gt;',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeUsersResult')

const FilterNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .openapi('FilterName')

const FilterValueSchema = z
  .string()
  .regex(/.*\S.*/)
  .openapi('FilterValue')

const FilterValueListSchema = z.array(FilterValueSchema).min(1).openapi('FilterValueList')

const FilterSchema = z
  .object({
    Name: FilterNameSchema.and(
      z.any().openapi({ description: 'The property being filtered. For example, UserId.' }),
    ),
    Values: FilterValueListSchema.and(
      z
        .any()
        .openapi({ description: 'The property values to filter on. For example, "user-123".' }),
    ),
  })
  .openapi({
    required: ['Name', 'Values'],
    description: 'Used to streamline results of a search based on the property being filtered.',
  })
  .openapi('Filter')

const DisassociateGlobalReplicationGroupResultSchema = z
  .object({ GlobalReplicationGroup: GlobalReplicationGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DisassociateGlobalReplicationGroupResult')

const FailoverGlobalReplicationGroupResultSchema = z
  .object({ GlobalReplicationGroup: GlobalReplicationGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('FailoverGlobalReplicationGroupResult')

const IncreaseNodeGroupsInGlobalReplicationGroupResultSchema = z
  .object({ GlobalReplicationGroup: GlobalReplicationGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('IncreaseNodeGroupsInGlobalReplicationGroupResult')

const ReshardingConfigurationSchema = z
  .object({
    NodeGroupId: AllowedNodeGroupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to.',
        }),
    ).exactOptional(),
    PreferredAvailabilityZones: AvailabilityZonesListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of preferred availability zones for the nodes in this cluster.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list of <code>PreferredAvailabilityZones</code> objects that specifies the configuration of a node group in the resharded cluster.',
    required: [],
  })
  .openapi('ReshardingConfiguration')

const ReshardingConfigurationListSchema = z
  .array(
    ReshardingConfigurationSchema.and(
      z.any().openapi({ xml: { name: 'ReshardingConfiguration' } }),
    ),
  )
  .openapi('ReshardingConfigurationList')

const RegionalConfigurationSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The name of the secondary cluster' }),
    ),
    ReplicationGroupRegion: StringSchema.and(
      z.any().openapi({ description: 'The Amazon region where the cluster is stored' }),
    ),
    ReshardingConfiguration: ReshardingConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>PreferredAvailabilityZones</code> objects that specifies the configuration of a node group in the resharded cluster. ',
        }),
    ),
  })
  .openapi({
    required: ['ReplicationGroupId', 'ReplicationGroupRegion', 'ReshardingConfiguration'],
    description: 'A list of the replication groups ',
  })
  .openapi('RegionalConfiguration')

const IncreaseReplicaCountResultSchema = z
  .object({ ReplicationGroup: ReplicationGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('IncreaseReplicaCountResult')

const InvalidKMSKeyFaultSchema = z.any().openapi('InvalidKMSKeyFault')

const NodeTypeListSchema = z.array(StringSchema).openapi('NodeTypeList')

const AllowedNodeTypeModificationsMessageSchema = z
  .object({
    ScaleUpModifications: NodeTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string list, each element of which specifies a cache node type which you can use to scale your cluster or replication group.</p> <p>When scaling up a Redis cluster or replication group using <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code>, use a value from this list for the <code>CacheNodeType</code> parameter.</p>',
        }),
    ).exactOptional(),
    ScaleDownModifications: NodeTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string list, each element of which specifies a cache node type which you can use to scale your cluster or replication group. When scaling down a Redis cluster or replication group using ModifyCacheCluster or ModifyReplicationGroup, use a value from this list for the CacheNodeType parameter. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the allowed node types you can use to modify your cluster or replication group.',
    required: [],
  })
  .openapi('AllowedNodeTypeModificationsMessage')

const ModifyCacheClusterResultSchema = z
  .object({ CacheCluster: CacheClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ModifyCacheClusterResult')

const CacheParameterGroupNameMessageSchema = z
  .object({
    CacheParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the cache parameter group.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>ModifyCacheParameterGroup</code> </p> </li> <li> <p> <code>ResetCacheParameterGroup</code> </p> </li> </ul>',
    required: [],
  })
  .openapi('CacheParameterGroupNameMessage')

const ParameterNameValueSchema = z
  .object({
    ParameterName: StringSchema.and(
      z.any().openapi({ description: 'The name of the parameter.' }),
    ).exactOptional(),
    ParameterValue: StringSchema.and(
      z.any().openapi({ description: 'The value of the parameter.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a name-value pair that is used to update the value of a parameter.',
    required: [],
  })
  .openapi('ParameterNameValue')

const ModifyCacheSubnetGroupResultSchema = z
  .object({ CacheSubnetGroup: CacheSubnetGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ModifyCacheSubnetGroupResult')

const SubnetInUseSchema = z.any().openapi('SubnetInUse')

const ModifyGlobalReplicationGroupResultSchema = z
  .object({ GlobalReplicationGroup: GlobalReplicationGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ModifyGlobalReplicationGroupResult')

const ModifyReplicationGroupResultSchema = z
  .object({ ReplicationGroup: ReplicationGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ModifyReplicationGroupResult')

const ModifyReplicationGroupShardConfigurationResultSchema = z
  .object({ ReplicationGroup: ReplicationGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ModifyReplicationGroupShardConfigurationResult')

const PurchaseReservedCacheNodesOfferingResultSchema = z
  .object({ ReservedCacheNode: ReservedCacheNodeSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PurchaseReservedCacheNodesOfferingResult')

const ReservedCacheNodeAlreadyExistsFaultSchema = z
  .any()
  .openapi('ReservedCacheNodeAlreadyExistsFault')

const ReservedCacheNodeQuotaExceededFaultSchema = z
  .any()
  .openapi('ReservedCacheNodeQuotaExceededFault')

const RebalanceSlotsInGlobalReplicationGroupResultSchema = z
  .object({ GlobalReplicationGroup: GlobalReplicationGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RebalanceSlotsInGlobalReplicationGroupResult')

const RebootCacheClusterResultSchema = z
  .object({ CacheCluster: CacheClusterSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RebootCacheClusterResult')

const TagNotFoundFaultSchema = z.any().openapi('TagNotFoundFault')

const RevokeCacheSecurityGroupIngressResultSchema = z
  .object({ CacheSecurityGroup: CacheSecurityGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RevokeCacheSecurityGroupIngressResult')

const AuthorizationNotFoundFaultSchema = z.any().openapi('AuthorizationNotFoundFault')

const StartMigrationResponseSchema = z
  .object({ ReplicationGroup: ReplicationGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('StartMigrationResponse')

const CustomerNodeEndpointSchema = z
  .object({
    Address: StringSchema.and(
      z.any().openapi({ description: 'The address of the node endpoint' }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'The port of the node endpoint' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The endpoint from which data should be migrated.', required: [] })
  .openapi('CustomerNodeEndpoint')

const ReplicationGroupAlreadyUnderMigrationFaultSchema = z
  .any()
  .openapi('ReplicationGroupAlreadyUnderMigrationFault')

const TestFailoverResultSchema = z
  .object({ ReplicationGroup: ReplicationGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('TestFailoverResult')

const APICallRateForCustomerExceededFaultSchema = z
  .any()
  .openapi('APICallRateForCustomerExceededFault')

const NodeGroupNotFoundFaultSchema = z.any().openapi('NodeGroupNotFoundFault')

const TestFailoverNotAvailableFaultSchema = z.any().openapi('TestFailoverNotAvailableFault')

const AZModeSchema = z.enum(['single-az', 'cross-az']).openapi('AZMode')

const AccessStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .openapi('AccessString')

const AddTagsToResourceMessageSchema = z
  .object({
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the resource to which the tags are to be added, for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code> or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>. ElastiCache resources are <i>cluster</i> and <i>snapshot</i>.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Service Namespaces</a>.</p>',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceName', 'Tags'],
    title: 'AddTagsToResourceMessage',
    description: 'Represents the input of an AddTagsToResource operation.',
  })
  .openapi('AddTagsToResourceMessage')

const AuthTokenUpdateStrategyTypeSchema = z
  .enum(['SET', 'ROTATE', 'DELETE'])
  .openapi('AuthTokenUpdateStrategyType')

const AuthenticationModeSchema = z
  .object({
    Type: InputAuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the authentication type. Possible options are IAM authentication, password and no password.',
        }),
    ).exactOptional(),
    Passwords: PasswordListInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the passwords to use for authentication if <code>Type</code> is set to <code>password</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies the authentication mode to use.', required: [] })
  .openapi('AuthenticationMode')

const AuthorizeCacheSecurityGroupIngressMessageSchema = z
  .object({
    CacheSecurityGroupName: StringSchema.and(
      z.any().openapi({ description: 'The cache security group that allows network ingress.' }),
    ),
    EC2SecurityGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon EC2 security group to be authorized for ingress to the cache security group.',
        }),
    ),
    EC2SecurityGroupOwnerId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon account number of the Amazon EC2 security group owner. Note that this is not the same thing as an Amazon access key ID - you must provide a valid Amazon account number for this parameter.',
        }),
    ),
  })
  .openapi({
    required: ['CacheSecurityGroupName', 'EC2SecurityGroupName', 'EC2SecurityGroupOwnerId'],
    title: 'AuthorizeCacheSecurityGroupIngressMessage',
    description: 'Represents the input of an AuthorizeCacheSecurityGroupIngress operation.',
  })
  .openapi('AuthorizeCacheSecurityGroupIngressMessage')

const ReplicationGroupIdListSchema = z.array(StringSchema).max(20).openapi('ReplicationGroupIdList')

const CacheClusterIdListSchema = z.array(StringSchema).max(20).openapi('CacheClusterIdList')

const BatchApplyUpdateActionMessageSchema = z
  .object({
    ReplicationGroupIds: ReplicationGroupIdListSchema.and(
      z.any().openapi({ description: 'The replication group IDs' }),
    ).exactOptional(),
    CacheClusterIds: CacheClusterIdListSchema.and(
      z.any().openapi({ description: 'The cache cluster IDs' }),
    ).exactOptional(),
    ServiceUpdateName: StringSchema.and(
      z.any().openapi({ description: 'The unique ID of the service update' }),
    ),
  })
  .openapi({ required: ['ServiceUpdateName'], title: 'BatchApplyUpdateActionMessage' })
  .openapi('BatchApplyUpdateActionMessage')

const BatchStopUpdateActionMessageSchema = z
  .object({
    ReplicationGroupIds: ReplicationGroupIdListSchema.and(
      z.any().openapi({ description: 'The replication group IDs' }),
    ).exactOptional(),
    CacheClusterIds: CacheClusterIdListSchema.and(
      z.any().openapi({ description: 'The cache cluster IDs' }),
    ).exactOptional(),
    ServiceUpdateName: StringSchema.and(
      z.any().openapi({ description: 'The unique ID of the service update' }),
    ),
  })
  .openapi({ required: ['ServiceUpdateName'], title: 'BatchStopUpdateActionMessage' })
  .openapi('BatchStopUpdateActionMessage')

const CacheSecurityGroupNameListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'CacheSecurityGroupName' } })))
  .openapi('CacheSecurityGroupNameList')

const CompleteMigrationMessageSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the replication group to which data is being migrated.',
        }),
    ),
    Force: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Forces the migration to stop without ensuring that data is in sync. It is recommended to use this option only to abort the migration and not recommended when application wants to continue migration to ElastiCache.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ReplicationGroupId'], title: 'CompleteMigrationMessage' })
  .openapi('CompleteMigrationMessage')

const CopySnapshotMessageSchema = z
  .object({
    SourceSnapshotName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of an existing snapshot from which to make a copy.' }),
    ),
    TargetSnapshotName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name for the snapshot copy. ElastiCache does not permit overwriting a snapshot, therefore this name must be unique within its context - ElastiCache or an Amazon S3 bucket if exporting.',
        }),
    ),
    TargetBucket: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon S3 bucket to which the snapshot is exported. This parameter is used only when exporting a snapshot for external access.</p> <p>When using this parameter to export a snapshot, be sure Amazon ElastiCache has the needed permissions to this S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the <i>Amazon ElastiCache User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting a Snapshot</a> in the <i>Amazon ElastiCache User Guide</i>.</p>',
        }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the KMS key used to encrypt the target snapshot.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SourceSnapshotName', 'TargetSnapshotName'],
    title: 'CopySnapshotMessage',
    description: 'Represents the input of a <code>CopySnapshotMessage</code> operation.',
  })
  .openapi('CopySnapshotMessage')

const SecurityGroupIdsListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'SecurityGroupId' } })))
  .openapi('SecurityGroupIdsList')

const SnapshotArnsListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'SnapshotArn' } })))
  .openapi('SnapshotArnsList')

const OutpostModeSchema = z.enum(['single-outpost', 'cross-outpost']).openapi('OutpostMode')

const LogDeliveryConfigurationRequestListSchema = z
  .array(
    LogDeliveryConfigurationRequestSchema.and(
      z.any().openapi({ xml: { name: 'LogDeliveryConfigurationRequest' } }),
    ),
  )
  .openapi('LogDeliveryConfigurationRequestList')

const CreateCacheClusterMessageSchema = z
  .object({
    CacheClusterId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The node group (shard) identifier. This parameter is stored as a lowercase string.</p> <p> <b>Constraints:</b> </p> <ul> <li> <p>A name must contain from 1 to 50 alphanumeric characters or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>A name cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>',
        }),
    ),
    ReplicationGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the replication group to which this cluster should belong. If this parameter is specified, the cluster is added to the specified replication group as a read replica; otherwise, the cluster is a standalone primary that is not part of any replication group.</p> <p>If the specified replication group is Multi-AZ enabled and the Availability Zone is not specified, the cluster is created in Availability Zones that provide the best spread of read replicas across Availability Zones.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note>',
        }),
    ).exactOptional(),
    AZMode: AZModeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region.</p> <p>This parameter is only supported for Memcached clusters.</p> <p>If the <code>AZMode</code> and <code>PreferredAvailabilityZones</code> are not specified, ElastiCache assumes <code>single-az</code> mode.</p>",
        }),
    ).exactOptional(),
    PreferredAvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The EC2 Availability Zone in which the cluster is created.</p> <p>All nodes belonging to this cluster are placed in the preferred Availability Zone. If you want to create your nodes across multiple Availability Zones, use <code>PreferredAvailabilityZones</code>.</p> <p>Default: System chosen Availability Zone.</p>',
        }),
    ).exactOptional(),
    PreferredAvailabilityZones: PreferredAvailabilityZoneListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of the Availability Zones in which cache nodes are created. The order of the zones in the list is not important.</p> <p>This option is only supported on Memcached.</p> <note> <p>If you are creating your cluster in an Amazon VPC (recommended) you can only locate nodes in Availability Zones that are associated with the subnets in the selected subnet group.</p> <p>The number of Availability Zones listed must equal the value of <code>NumCacheNodes</code>.</p> </note> <p>If you want all the nodes in the same Availability Zone, use <code>PreferredAvailabilityZone</code> instead, or repeat the Availability Zone multiple times in the list.</p> <p>Default: System chosen Availability Zones.</p>',
        }),
    ).exactOptional(),
    NumCacheNodes: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The initial number of cache nodes that the cluster has.</p> <p>For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 40.</p> <p>If you need more than 40 nodes for your Memcached cluster, please fill out the ElastiCache Limit Increase Request form at <a href="http://aws.amazon.com/contact-us/elasticache-node-limit-request/">http://aws.amazon.com/contact-us/elasticache-node-limit-request/</a>.</p>',
        }),
    ).exactOptional(),
    CacheNodeType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The compute and memory capacity of the nodes in the node group (shard).</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the cache engine to be used for this cluster.</p> <p>Valid values for this parameter are: <code>memcached</code> | <code>redis</code> </p>',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The version number of the cache engine to be used for this cluster. To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.</p> <p> <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version. </p>',
        }),
    ).exactOptional(),
    CacheParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the parameter group to associate with this cluster. If this argument is omitted, the default parameter group for the specified engine is used. You cannot use any parameter group which has <code>cluster-enabled='yes'</code> when creating a cluster.",
        }),
    ).exactOptional(),
    CacheSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the subnet group to be used for the cluster.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p> <important> <p>If you\'re going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.html">Subnets and Subnet Groups</a>.</p> </important>',
        }),
    ).exactOptional(),
    CacheSecurityGroupNames: CacheSecurityGroupNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of security group names to associate with this cluster.</p> <p>Use this parameter only when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC).</p>',
        }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more VPC security groups associated with the cluster.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'A list of tags to be added to this resource.' }),
    ).exactOptional(),
    SnapshotArns: SnapshotArnsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Redis RDB snapshot file stored in Amazon S3. The snapshot file is used to populate the node group (shard). The Amazon S3 object name in the ARN cannot contain any commas.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note> <p>Example of an Amazon S3 ARN: <code>arn:aws:s3:::my_bucket/snapshot1.rdb</code> </p>',
        }),
    ).exactOptional(),
    SnapshotName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a Redis snapshot from which to restore data into the new node group (shard). The snapshot status changes to <code>restoring</code> while the new node group (shard) is being created.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note>',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. ',
        }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'The port number on which each of the cache nodes accepts connections.',
        }),
    ).exactOptional(),
    NotificationTopicArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.</p> <note> <p>The Amazon SNS topic owner must be the same as the cluster owner.</p> </note>',
        }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.  ',
        }),
    ).exactOptional(),
    SnapshotRetentionLimit: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot taken today is retained for 5 days before being deleted.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note> <p>Default: 0 (i.e., automatic backups are disabled for this cache cluster).</p>',
        }),
    ).exactOptional(),
    SnapshotWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).</p> <p>Example: <code>05:00-09:00</code> </p> <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note>',
        }),
    ).exactOptional(),
    AuthToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <b>Reserved parameter.</b> The password used to access a password protected server.</p> <p>Password constraints:</p> <ul> <li> <p>Must be only printable ASCII characters.</p> </li> <li> <p>Must be at least 16 characters and no more than 128 characters in length.</p> </li> <li> <p>The only permitted printable special characters are !, &amp;, #, $, ^, &lt;, &gt;, and -. Other printable special characters cannot be used in the AUTH token.</p> </li> </ul> <p>For more information, see <a href="http://redis.io/commands/AUTH">AUTH password</a> at http://redis.io/commands/AUTH.</p>',
        }),
    ).exactOptional(),
    OutpostMode: OutpostModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the nodes in the cluster are created in a single outpost or across multiple outposts.',
        }),
    ).exactOptional(),
    PreferredOutpostArn: StringSchema.and(
      z.any().openapi({ description: 'The outpost ARN in which the cache cluster is created.' }),
    ).exactOptional(),
    PreferredOutpostArns: PreferredOutpostArnListSchema.and(
      z.any().openapi({ description: 'The outpost ARNs in which the cache cluster is created.' }),
    ).exactOptional(),
    LogDeliveryConfigurations: LogDeliveryConfigurationRequestListSchema.and(
      z.any().openapi({ description: 'Specifies the destination, format and type of the logs. ' }),
    ).exactOptional(),
    TransitEncryptionEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({ description: 'A flag that enables in-transit encryption when set to true.' }),
    ).exactOptional(),
    NetworkType: NetworkTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Must be either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>. ',
        }),
    ).exactOptional(),
    IpDiscovery: IpDiscoverySchema.and(
      z
        .any()
        .openapi({
          description:
            'The network type you choose when modifying a cluster, either <code>ipv4</code> | <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CacheClusterId'],
    title: 'CreateCacheClusterMessage',
    description: 'Represents the input of a CreateCacheCluster operation.',
  })
  .openapi('CreateCacheClusterMessage')

const CreateCacheParameterGroupMessageSchema = z
  .object({
    CacheParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'A user-specified name for the cache parameter group.' }),
    ),
    CacheParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the cache parameter group family that the cache parameter group can be used with.</p> <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> | <code>memcached1.6</code> | <code>redis2.6</code> | <code>redis2.8</code> | <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> | <code>redis6.x</code> | <code>redis7</code> </p>',
        }),
    ),
    Description: StringSchema.and(
      z
        .any()
        .openapi({ description: 'A user-specified description for the cache parameter group.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CacheParameterGroupName', 'CacheParameterGroupFamily', 'Description'],
    title: 'CreateCacheParameterGroupMessage',
    description: 'Represents the input of a <code>CreateCacheParameterGroup</code> operation.',
  })
  .openapi('CreateCacheParameterGroupMessage')

const CreateCacheSecurityGroupMessageSchema = z
  .object({
    CacheSecurityGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A name for the cache security group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters. Cannot be the word "Default".</p> <p>Example: <code>mysecuritygroup</code> </p>',
        }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A description for the cache security group.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CacheSecurityGroupName', 'Description'],
    title: 'CreateCacheSecurityGroupMessage',
    description: 'Represents the input of a <code>CreateCacheSecurityGroup</code> operation.',
  })
  .openapi('CreateCacheSecurityGroupMessage')

const SubnetIdentifierListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'SubnetIdentifier' } })))
  .openapi('SubnetIdentifierList')

const CreateCacheSubnetGroupMessageSchema = z
  .object({
    CacheSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A name for the cache subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p> <p>Example: <code>mysubnetgroup</code> </p>',
        }),
    ),
    CacheSubnetGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'A description for the cache subnet group.' }),
    ),
    SubnetIds: SubnetIdentifierListSchema.and(
      z.any().openapi({ description: 'A list of VPC subnet IDs for the cache subnet group.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CacheSubnetGroupName', 'CacheSubnetGroupDescription', 'SubnetIds'],
    title: 'CreateCacheSubnetGroupMessage',
    description: 'Represents the input of a <code>CreateCacheSubnetGroup</code> operation.',
  })
  .openapi('CreateCacheSubnetGroupMessage')

const CreateGlobalReplicationGroupMessageSchema = z
  .object({
    GlobalReplicationGroupIdSuffix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The suffix name of a Global datastore. Amazon ElastiCache automatically applies a prefix to the Global datastore ID when it is created. Each Amazon Region has its own prefix. For instance, a Global datastore ID created in the US-West-1 region will begin with "dsdfu" along with the suffix name you provide. The suffix, combined with the auto-generated prefix, guarantees uniqueness of the Global datastore name across multiple regions. </p> <p>For a full list of Amazon Regions and their respective Global datastore iD prefixes, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastores-CLI.html">Using the Amazon CLI with Global datastores </a>.</p>',
        }),
    ),
    GlobalReplicationGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'Provides details of the Global datastore' }),
    ).exactOptional(),
    PrimaryReplicationGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.',
        }),
    ),
  })
  .openapi({
    required: ['GlobalReplicationGroupIdSuffix', 'PrimaryReplicationGroupId'],
    title: 'CreateGlobalReplicationGroupMessage',
  })
  .openapi('CreateGlobalReplicationGroupMessage')

const NodeGroupConfigurationListSchema = z
  .array(
    NodeGroupConfigurationSchema.and(z.any().openapi({ xml: { name: 'NodeGroupConfiguration' } })),
  )
  .openapi('NodeGroupConfigurationList')

const UserGroupIdListInputSchema = z.array(UserGroupIdSchema).min(1).openapi('UserGroupIdListInput')

const CreateReplicationGroupMessageSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The replication group identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>A name must contain from 1 to 40 alphanumeric characters or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>A name cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>',
        }),
    ),
    ReplicationGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'A user-created description for the replication group.' }),
    ),
    GlobalReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The name of the Global datastore' }),
    ).exactOptional(),
    PrimaryClusterId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the cluster that serves as the primary for this replication group. This cluster must already exist and have a status of <code>available</code>.</p> <p>This parameter is not required if <code>NumCacheClusters</code>, <code>NumNodeGroups</code>, or <code>ReplicasPerNodeGroup</code> is specified.</p>',
        }),
    ).exactOptional(),
    AutomaticFailoverEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.</p> <p> <code>AutomaticFailoverEnabled</code> must be enabled for Redis (cluster mode enabled) replication groups.</p> <p>Default: false</p>',
        }),
    ).exactOptional(),
    MultiAZEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html">Minimizing Downtime: Multi-AZ</a>.',
        }),
    ).exactOptional(),
    NumCacheClusters: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of clusters this replication group initially has.</p> <p>This parameter is not used if there is more than one node group (shard). You should use <code>ReplicasPerNodeGroup</code> instead.</p> <p>If <code>AutomaticFailoverEnabled</code> is <code>true</code>, the value of this parameter must be at least 2. If <code>AutomaticFailoverEnabled</code> is <code>false</code> you can omit this parameter (it will default to 1), or you can explicitly set it to a value between 2 and 6.</p> <p>The maximum permitted value for <code>NumCacheClusters</code> is 6 (1 primary plus 5 replicas).</p>',
        }),
    ).exactOptional(),
    PreferredCacheClusterAZs: AvailabilityZonesListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of EC2 Availability Zones in which the replication group's clusters are created. The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list.</p> <p>This parameter is not used if there is more than one node group (shard). You should use <code>NodeGroupConfiguration</code> instead.</p> <note> <p>If you are creating your replication group in an Amazon VPC (recommended), you can only locate clusters in Availability Zones associated with the subnets in the selected subnet group.</p> <p>The number of Availability Zones listed must equal the value of <code>NumCacheClusters</code>.</p> </note> <p>Default: system chosen Availability Zones.</p>",
        }),
    ).exactOptional(),
    NumNodeGroups: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group. For Redis (cluster mode disabled) either omit this parameter or set it to 1.</p> <p>Default: 1</p>',
        }),
    ).exactOptional(),
    ReplicasPerNodeGroup: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional parameter that specifies the number of replica nodes in each node group (shard). Valid values are 0 to 5.',
        }),
    ).exactOptional(),
    NodeGroupConfiguration: NodeGroupConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of node group (shard) configuration options. Each node group (shard) configuration has the following members: <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>, and <code>Slots</code>.</p> <p>If you're creating a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group, you can use this parameter to individually configure each node group (shard), or you can omit this parameter. However, it is required when seeding a Redis (cluster mode enabled) cluster from a S3 rdb file. You must configure each node group (shard) using this parameter because you must specify the slots for each node group.</p>",
        }),
    ).exactOptional(),
    CacheNodeType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The compute and memory capacity of the nodes in the node group (shard).</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the cache engine to be used for the clusters in this replication group. The value must be set to <code>Redis</code>.',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The version number of the cache engine to be used for the clusters in this replication group. To view the supported cache engine versions, use the <code>DescribeCacheEngineVersions</code> operation.</p> <p> <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>) in the <i>ElastiCache User Guide</i>, but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version. </p>',
        }),
    ).exactOptional(),
    CacheParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used.</p> <p>If you are running Redis version 3.2.4 or later, only one node group (shard), and want to use a default parameter group, we recommend that you specify the parameter group by name. </p> <ul> <li> <p>To create a Redis (cluster mode disabled) replication group, use <code>CacheParameterGroupName=default.redis3.2</code>.</p> </li> <li> <p>To create a Redis (cluster mode enabled) replication group, use <code>CacheParameterGroupName=default.redis3.2.cluster.on</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    CacheSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the cache subnet group to be used for the replication group.</p> <important> <p>If you\'re going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.html">Subnets and Subnet Groups</a>.</p> </important>',
        }),
    ).exactOptional(),
    CacheSecurityGroupNames: CacheSecurityGroupNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of cache security group names to associate with this replication group.',
        }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more Amazon VPC security groups associated with this replication group.</p> <p>Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud (Amazon VPC).</p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=<code>myKey</code>, Value=<code>myKeyValue</code>. You can include multiple tags as shown following: Key=<code>myKey</code>, Value=<code>myKeyValue</code> Key=<code>mySecondKey</code>, Value=<code>mySecondKeyValue</code>. Tags on replication groups will be replicated to all nodes.',
        }),
    ).exactOptional(),
    SnapshotArns: SnapshotArnsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new replication group. The Amazon S3 object name in the ARN cannot contain any commas. The new replication group will have the number of node groups (console: shards) specified by the parameter <i>NumNodeGroups</i> or the number of node groups configured by <i>NodeGroupConfiguration</i> regardless of the number of ARNs specified here.</p> <p>Example of an Amazon S3 ARN: <code>arn:aws:s3:::my_bucket/snapshot1.rdb</code> </p>',
        }),
    ).exactOptional(),
    SnapshotName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a snapshot from which to restore data into the new replication group. The snapshot status changes to <code>restoring</code> while the new replication group is being created.',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for <code>ddd</code> are:</p> <p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p> <p>Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:23:00-mon:01:30</code> </p>',
        }),
    ).exactOptional(),
    Port: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The port number on which each member of the replication group accepts connections.',
        }),
    ).exactOptional(),
    NotificationTopicArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.</p> <note> <p>The Amazon SNS topic owner must be the same as the cluster owner.</p> </note>',
        }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.  ',
        }),
    ).exactOptional(),
    SnapshotRetentionLimit: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p> <p>Default: 0 (i.e., automatic backups are disabled for this cluster).</p>',
        }),
    ).exactOptional(),
    SnapshotWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).</p> <p>Example: <code>05:00-09:00</code> </p> <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.</p>',
        }),
    ).exactOptional(),
    AuthToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <b>Reserved parameter.</b> The password used to access a password protected server.</p> <p> <code>AuthToken</code> can be specified only on replication groups where <code>TransitEncryptionEnabled</code> is <code>true</code>.</p> <important> <p>For HIPAA compliance, you must specify <code>TransitEncryptionEnabled</code> as <code>true</code>, an <code>AuthToken</code>, and a <code>CacheSubnetGroup</code>.</p> </important> <p>Password constraints:</p> <ul> <li> <p>Must be only printable ASCII characters.</p> </li> <li> <p>Must be at least 16 characters and no more than 128 characters in length.</p> </li> <li> <p>The only permitted printable special characters are !, &amp;, #, $, ^, &lt;, &gt;, and -. Other printable special characters cannot be used in the AUTH token.</p> </li> </ul> <p>For more information, see <a href="http://redis.io/commands/AUTH">AUTH password</a> at http://redis.io/commands/AUTH.</p>',
        }),
    ).exactOptional(),
    TransitEncryptionEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A flag that enables in-transit encryption when set to <code>true</code>.</p> <p>This parameter is valid only if the <code>Engine</code> parameter is <code>redis</code>, the <code>EngineVersion</code> parameter is <code>3.2.6</code>, <code>4.x</code> or later, and the cluster is being created in an Amazon VPC.</p> <p>If you enable in-transit encryption, you must also specify a value for <code>CacheSubnetGroup</code>.</p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p> <p>Default: <code>false</code> </p> <important> <p>For HIPAA compliance, you must specify <code>TransitEncryptionEnabled</code> as <code>true</code>, an <code>AuthToken</code>, and a <code>CacheSubnetGroup</code>.</p> </important>',
        }),
    ).exactOptional(),
    AtRestEncryptionEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A flag that enables encryption at rest when set to <code>true</code>.</p> <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code> after the replication group is created. To enable encryption at rest on a replication group you must set <code>AtRestEncryptionEnabled</code> to <code>true</code> when you create the replication group. </p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    KmsKeyId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the KMS key used to encrypt the disk in the cluster.' }),
    ).exactOptional(),
    UserGroupIds: UserGroupIdListInputSchema.and(
      z.any().openapi({ description: 'The user group to associate with the replication group.' }),
    ).exactOptional(),
    LogDeliveryConfigurations: LogDeliveryConfigurationRequestListSchema.and(
      z.any().openapi({ description: 'Specifies the destination, format and type of the logs.' }),
    ).exactOptional(),
    DataTieringEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/data-tiering.html">Data tiering</a>.',
        }),
    ).exactOptional(),
    NetworkType: NetworkTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Must be either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.',
        }),
    ).exactOptional(),
    IpDiscovery: IpDiscoverySchema.and(
      z
        .any()
        .openapi({
          description:
            'The network type you choose when creating a replication group, either <code>ipv4</code> | <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.',
        }),
    ).exactOptional(),
    TransitEncryptionMode: TransitEncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.</p> <p>When setting <code>TransitEncryptionEnabled</code> to <code>true</code>, you can set your <code>TransitEncryptionMode</code> to <code>preferred</code> in the same request, to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Redis clients to use encrypted connections you can modify the value to <code>required</code> to allow encrypted connections only.</p> <p>Setting <code>TransitEncryptionMode</code> to <code>required</code> is a two-step process that requires you to first set the <code>TransitEncryptionMode</code> to <code>preferred</code>, after that you can set <code>TransitEncryptionMode</code> to <code>required</code>.</p> <p>This process will not trigger the replacement of the replication group.</p>',
        }),
    ).exactOptional(),
    ClusterMode: ClusterModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Redis clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Redis clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ReplicationGroupId', 'ReplicationGroupDescription'],
    title: 'CreateReplicationGroupMessage',
    description: 'Represents the input of a <code>CreateReplicationGroup</code> operation.',
  })
  .openapi('CreateReplicationGroupMessage')

const CreateSnapshotMessageSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of an existing replication group. The snapshot is created from this replication group.',
        }),
    ).exactOptional(),
    CacheClusterId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of an existing cluster. The snapshot is created from this cluster.',
        }),
    ).exactOptional(),
    SnapshotName: StringSchema.and(
      z.any().openapi({ description: 'A name for the snapshot being created.' }),
    ),
    KmsKeyId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the KMS key used to encrypt the snapshot.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SnapshotName'],
    title: 'CreateSnapshotMessage',
    description: 'Represents the input of a <code>CreateSnapshot</code> operation.',
  })
  .openapi('CreateSnapshotMessage')

const UserIdListInputSchema = z.array(UserIdSchema).min(1).openapi('UserIdListInput')

const CreateUserGroupMessageSchema = z
  .object({
    UserGroupId: StringSchema.and(z.any().openapi({ description: 'The ID of the user group.' })),
    Engine: EngineTypeSchema.and(
      z.any().openapi({ description: 'The current supported value is Redis. ' }),
    ),
    UserIds: UserIdListInputSchema.and(
      z.any().openapi({ description: 'The list of user IDs that belong to the user group.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserGroupId', 'Engine'], title: 'CreateUserGroupMessage' })
  .openapi('CreateUserGroupMessage')

const UserNameSchema = z.string().min(1).openapi('UserName')

const CreateUserMessageSchema = z
  .object({
    UserId: UserIdSchema.and(z.any().openapi({ description: 'The ID of the user.' })),
    UserName: UserNameSchema.and(z.any().openapi({ description: 'The username of the user.' })),
    Engine: EngineTypeSchema.and(
      z.any().openapi({ description: 'The current supported value is Redis. ' }),
    ),
    Passwords: PasswordListInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'Passwords used for this user. You can create up to two passwords for each user.',
        }),
    ).exactOptional(),
    AccessString: AccessStringSchema.and(
      z.any().openapi({ description: 'Access permissions string used for this user.' }),
    ),
    NoPasswordRequired: BooleanOptionalSchema.and(
      z.any().openapi({ description: 'Indicates a password is not required for this user.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
        }),
    ).exactOptional(),
    AuthenticationMode: AuthenticationModeSchema.and(
      z.any().openapi({ description: 'Specifies how to authenticate the user.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['UserId', 'UserName', 'Engine', 'AccessString'],
    title: 'CreateUserMessage',
  })
  .openapi('CreateUserMessage')

const CustomerNodeEndpointListSchema = z
  .array(CustomerNodeEndpointSchema)
  .openapi('CustomerNodeEndpointList')

const GlobalNodeGroupIdListSchema = z
  .array(StringSchema.and(z.any().openapi({ xml: { name: 'GlobalNodeGroupId' } })))
  .openapi('GlobalNodeGroupIdList')

const DecreaseNodeGroupsInGlobalReplicationGroupMessageSchema = z
  .object({
    GlobalReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The name of the Global datastore' }),
    ),
    NodeGroupCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of node groups (shards) that results from the modification of the shard configuration',
        }),
    ),
    GlobalNodeGroupsToRemove: GlobalNodeGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. GlobalNodeGroupsToRemove is a list of NodeGroupIds to remove from the cluster. ElastiCache for Redis will attempt to remove all node groups listed by GlobalNodeGroupsToRemove from the cluster. ',
        }),
    ).exactOptional(),
    GlobalNodeGroupsToRetain: GlobalNodeGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. GlobalNodeGroupsToRetain is a list of NodeGroupIds to retain from the cluster. ElastiCache for Redis will attempt to retain all node groups listed by GlobalNodeGroupsToRetain from the cluster. ',
        }),
    ).exactOptional(),
    ApplyImmediately: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates that the shard reconfiguration process begins immediately. At present, the only permitted value for this parameter is true. ',
        }),
    ),
  })
  .openapi({
    required: ['GlobalReplicationGroupId', 'NodeGroupCount', 'ApplyImmediately'],
    title: 'DecreaseNodeGroupsInGlobalReplicationGroupMessage',
  })
  .openapi('DecreaseNodeGroupsInGlobalReplicationGroupMessage')

const ReplicaConfigurationListSchema = z
  .array(ConfigureShardSchema.and(z.any().openapi({ xml: { name: 'ConfigureShard' } })))
  .openapi('ReplicaConfigurationList')

const RemoveReplicasListSchema = z.array(StringSchema).openapi('RemoveReplicasList')

const DecreaseReplicaCountMessageSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The id of the replication group from which you want to remove replica nodes.',
        }),
    ),
    NewReplicaCount: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The number of read replica nodes you want at the completion of this operation. For Redis (cluster mode disabled) replication groups, this is the number of replica nodes in the replication group. For Redis (cluster mode enabled) replication groups, this is the number of replica nodes in each of the replication group's node groups.</p> <p>The minimum number of replicas in a shard or replication group is:</p> <ul> <li> <p>Redis (cluster mode disabled)</p> <ul> <li> <p>If Multi-AZ is enabled: 1</p> </li> <li> <p>If Multi-AZ is not enabled: 0</p> </li> </ul> </li> <li> <p>Redis (cluster mode enabled): 0 (though you will not be able to failover to a replica if your primary node fails)</p> </li> </ul>",
        }),
    ).exactOptional(),
    ReplicaConfiguration: ReplicaConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>ConfigureShard</code> objects that can be used to configure each shard in a Redis (cluster mode enabled) replication group. The <code>ConfigureShard</code> has three members: <code>NewReplicaCount</code>, <code>NodeGroupId</code>, and <code>PreferredAvailabilityZones</code>.',
        }),
    ).exactOptional(),
    ReplicasToRemove: RemoveReplicasListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the node ids to remove from the replication group or node group (shard).',
        }),
    ).exactOptional(),
    ApplyImmediately: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>True</code>, the number of replica nodes is decreased immediately. <code>ApplyImmediately=False</code> is not currently supported.',
        }),
    ),
  })
  .openapi({
    required: ['ReplicationGroupId', 'ApplyImmediately'],
    title: 'DecreaseReplicaCountMessage',
  })
  .openapi('DecreaseReplicaCountMessage')

const DeleteCacheClusterMessageSchema = z
  .object({
    CacheClusterId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cluster identifier for the cluster to be deleted. This parameter is not case sensitive.',
        }),
    ),
    FinalSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user-supplied name of a final cluster snapshot. This is the unique name that identifies the snapshot. ElastiCache creates the snapshot, and then deletes the cluster immediately afterward.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CacheClusterId'],
    title: 'DeleteCacheClusterMessage',
    description: 'Represents the input of a <code>DeleteCacheCluster</code> operation.',
  })
  .openapi('DeleteCacheClusterMessage')

const DeleteCacheParameterGroupMessageSchema = z
  .object({
    CacheParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the cache parameter group to delete.</p> <note> <p>The specified cache security group must not be associated with any clusters.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['CacheParameterGroupName'],
    title: 'DeleteCacheParameterGroupMessage',
    description: 'Represents the input of a <code>DeleteCacheParameterGroup</code> operation.',
  })
  .openapi('DeleteCacheParameterGroupMessage')

const DeleteCacheSecurityGroupMessageSchema = z
  .object({
    CacheSecurityGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the cache security group to delete.</p> <note> <p>You cannot delete the default security group.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['CacheSecurityGroupName'],
    title: 'DeleteCacheSecurityGroupMessage',
    description: 'Represents the input of a <code>DeleteCacheSecurityGroup</code> operation.',
  })
  .openapi('DeleteCacheSecurityGroupMessage')

const DeleteCacheSubnetGroupMessageSchema = z
  .object({
    CacheSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the cache subnet group to delete.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p>',
        }),
    ),
  })
  .openapi({
    required: ['CacheSubnetGroupName'],
    title: 'DeleteCacheSubnetGroupMessage',
    description: 'Represents the input of a <code>DeleteCacheSubnetGroup</code> operation.',
  })
  .openapi('DeleteCacheSubnetGroupMessage')

const DeleteGlobalReplicationGroupMessageSchema = z
  .object({
    GlobalReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The name of the Global datastore' }),
    ),
    RetainPrimaryReplicationGroup: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The primary replication group is retained as a standalone replication group. ',
        }),
    ),
  })
  .openapi({
    required: ['GlobalReplicationGroupId', 'RetainPrimaryReplicationGroup'],
    title: 'DeleteGlobalReplicationGroupMessage',
  })
  .openapi('DeleteGlobalReplicationGroupMessage')

const DeleteReplicationGroupMessageSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the cluster to be deleted. This parameter is not case sensitive.',
        }),
    ),
    RetainPrimaryCluster: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to <code>true</code>, all of the read replicas are deleted, but the primary node is retained.',
        }),
    ).exactOptional(),
    FinalSnapshotIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of a final node group (shard) snapshot. ElastiCache creates the snapshot from the primary node in the cluster, rather than one of the replicas; this is to ensure that it captures the freshest data. After the final snapshot is taken, the replication group is immediately deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ReplicationGroupId'],
    title: 'DeleteReplicationGroupMessage',
    description: 'Represents the input of a <code>DeleteReplicationGroup</code> operation.',
  })
  .openapi('DeleteReplicationGroupMessage')

const DeleteSnapshotMessageSchema = z
  .object({
    SnapshotName: StringSchema.and(
      z.any().openapi({ description: 'The name of the snapshot to be deleted.' }),
    ),
  })
  .openapi({
    required: ['SnapshotName'],
    title: 'DeleteSnapshotMessage',
    description: 'Represents the input of a <code>DeleteSnapshot</code> operation.',
  })
  .openapi('DeleteSnapshotMessage')

const DeleteUserGroupMessageSchema = z
  .object({
    UserGroupId: StringSchema.and(z.any().openapi({ description: 'The ID of the user group.' })),
  })
  .openapi({ required: ['UserGroupId'], title: 'DeleteUserGroupMessage' })
  .openapi('DeleteUserGroupMessage')

const DeleteUserMessageSchema = z
  .object({ UserId: UserIdSchema.and(z.any().openapi({ description: 'The ID of the user.' })) })
  .openapi({ required: ['UserId'], title: 'DeleteUserMessage' })
  .openapi('DeleteUserMessage')

const DescribeCacheClustersMessageSchema = z
  .object({
    CacheClusterId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The user-supplied cluster identifier. If this parameter is specified, only information about that specific cluster is returned. This parameter isn't case sensitive.",
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    ShowCacheNodeInfo: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional flag that can be included in the <code>DescribeCacheCluster</code> request to retrieve information about the individual cache nodes.',
        }),
    ).exactOptional(),
    ShowCacheClustersNotInReplicationGroups: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional flag that can be included in the <code>DescribeCacheCluster</code> request to show only nodes (API/CLI: clusters) that are not members of a replication group. In practice, this mean Memcached and single node Redis clusters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeCacheClustersMessage',
    description: 'Represents the input of a <code>DescribeCacheClusters</code> operation.',
    required: [],
  })
  .openapi('DescribeCacheClustersMessage')

const DescribeCacheEngineVersionsMessageSchema = z
  .object({
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cache engine to return. Valid values: <code>memcached</code> | <code>redis</code> ',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The cache engine version to return.</p> <p>Example: <code>1.4.14</code> </p>',
        }),
    ).exactOptional(),
    CacheParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a specific cache parameter group family to return details for.</p> <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> | <code>memcached1.6</code> | <code>redis2.6</code> | <code>redis2.8</code> | <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> | <code>redis6.x</code> | <code>redis6.2</code> | <code>redis7</code> </p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    DefaultOnly: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>true</code>, specifies that only the default version of the specified engine or engine and major version combination is to be returned.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeCacheEngineVersionsMessage',
    description: 'Represents the input of a <code>DescribeCacheEngineVersions</code> operation.',
    required: [],
  })
  .openapi('DescribeCacheEngineVersionsMessage')

const DescribeCacheParameterGroupsMessageSchema = z
  .object({
    CacheParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of a specific cache parameter group to return details for.',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeCacheParameterGroupsMessage',
    description: 'Represents the input of a <code>DescribeCacheParameterGroups</code> operation.',
    required: [],
  })
  .openapi('DescribeCacheParameterGroupsMessage')

const DescribeCacheParametersMessageSchema = z
  .object({
    CacheParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of a specific cache parameter group to return details for.',
        }),
    ),
    Source: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The parameter types to return.</p> <p>Valid values: <code>user</code> | <code>system</code> | <code>engine-default</code> </p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CacheParameterGroupName'],
    title: 'DescribeCacheParametersMessage',
    description: 'Represents the input of a <code>DescribeCacheParameters</code> operation.',
  })
  .openapi('DescribeCacheParametersMessage')

const DescribeCacheSecurityGroupsMessageSchema = z
  .object({
    CacheSecurityGroupName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the cache security group to return details for.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeCacheSecurityGroupsMessage',
    description: 'Represents the input of a <code>DescribeCacheSecurityGroups</code> operation.',
    required: [],
  })
  .openapi('DescribeCacheSecurityGroupsMessage')

const DescribeCacheSubnetGroupsMessageSchema = z
  .object({
    CacheSubnetGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the cache subnet group to return details for.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeCacheSubnetGroupsMessage',
    description: 'Represents the input of a <code>DescribeCacheSubnetGroups</code> operation.',
    required: [],
  })
  .openapi('DescribeCacheSubnetGroupsMessage')

const DescribeEngineDefaultParametersMessageSchema = z
  .object({
    CacheParameterGroupFamily: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the cache parameter group family.</p> <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> | <code>memcached1.6</code> | <code>redis2.6</code> | <code>redis2.8</code> | <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> | <code>redis6.x</code> | <code>redis6.2</code> | <code>redis7</code> </p>',
        }),
    ),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CacheParameterGroupFamily'],
    title: 'DescribeEngineDefaultParametersMessage',
    description:
      'Represents the input of a <code>DescribeEngineDefaultParameters</code> operation.',
  })
  .openapi('DescribeEngineDefaultParametersMessage')

const DescribeEventsMessageSchema = z
  .object({
    SourceIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the event source for which events are returned. If not specified, all sources are included in the response.',
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
            '<p>The beginning of the time interval to retrieve events for, specified in ISO 8601 format.</p> <p> <b>Example:</b> 2017-03-30T07:03:49.555Z</p>',
        }),
    ).exactOptional(),
    EndTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The end of the time interval for which to retrieve events, specified in ISO 8601 format.</p> <p> <b>Example:</b> 2017-03-30T07:03:49.555Z</p>',
        }),
    ).exactOptional(),
    Duration: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'The number of minutes worth of events to retrieve.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeEventsMessage',
    description: 'Represents the input of a <code>DescribeEvents</code> operation.',
    required: [],
  })
  .openapi('DescribeEventsMessage')

const DescribeGlobalReplicationGroupsMessageSchema = z
  .object({
    GlobalReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The name of the Global datastore' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. ',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
        }),
    ).exactOptional(),
    ShowMemberInfo: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns the list of members that comprise the Global datastore.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeGlobalReplicationGroupsMessage', required: [] })
  .openapi('DescribeGlobalReplicationGroupsMessage')

const DescribeReplicationGroupsMessageSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier for the replication group to be described. This parameter is not case sensitive.</p> <p>If you do not specify this parameter, information about all replication groups is returned.</p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeReplicationGroupsMessage',
    description: 'Represents the input of a <code>DescribeReplicationGroups</code> operation.',
    required: [],
  })
  .openapi('DescribeReplicationGroupsMessage')

const DescribeReservedCacheNodesMessageSchema = z
  .object({
    ReservedCacheNodeId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reserved cache node identifier filter value. Use this parameter to show only the reservation that matches the specified reservation ID.',
        }),
    ).exactOptional(),
    ReservedCacheNodesOfferingId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The offering identifier filter value. Use this parameter to show only purchased reservations matching the specified offering identifier.',
        }),
    ).exactOptional(),
    CacheNodeType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The cache node type filter value. Use this parameter to show only those reservations matching the specified cache node type.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Duration: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The duration filter value, specified in years or seconds. Use this parameter to show only reservations for this duration.</p> <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code> </p>',
        }),
    ).exactOptional(),
    ProductDescription: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The product description filter value. Use this parameter to show only those reservations matching the specified product description.',
        }),
    ).exactOptional(),
    OfferingType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.</p> <p>Valid values: <code>"Light Utilization"|"Medium Utilization"|"Heavy Utilization"|"All Upfront"|"Partial Upfront"| "No Upfront"</code> </p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeReservedCacheNodesMessage',
    description: 'Represents the input of a <code>DescribeReservedCacheNodes</code> operation.',
    required: [],
  })
  .openapi('DescribeReservedCacheNodesMessage')

const DescribeReservedCacheNodesOfferingsMessageSchema = z
  .object({
    ReservedCacheNodesOfferingId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.</p> <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code> </p>',
        }),
    ).exactOptional(),
    CacheNodeType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The cache node type filter value. Use this parameter to show only the available offerings matching the specified cache node type.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Duration: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Duration filter value, specified in years or seconds. Use this parameter to show only reservations for a given duration.</p> <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code> </p>',
        }),
    ).exactOptional(),
    ProductDescription: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The product description filter value. Use this parameter to show only the available offerings matching the specified product description.',
        }),
    ).exactOptional(),
    OfferingType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.</p> <p>Valid Values: <code>"Light Utilization"|"Medium Utilization"|"Heavy Utilization" |"All Upfront"|"Partial Upfront"| "No Upfront"</code> </p>',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeReservedCacheNodesOfferingsMessage',
    description:
      'Represents the input of a <code>DescribeReservedCacheNodesOfferings</code> operation.',
    required: [],
  })
  .openapi('DescribeReservedCacheNodesOfferingsMessage')

const ServiceUpdateStatusListSchema = z
  .array(ServiceUpdateStatusSchema)
  .max(3)
  .openapi('ServiceUpdateStatusList')

const DescribeServiceUpdatesMessageSchema = z
  .object({
    ServiceUpdateName: StringSchema.and(
      z.any().openapi({ description: 'The unique ID of the service update' }),
    ).exactOptional(),
    ServiceUpdateStatus: ServiceUpdateStatusListSchema.and(
      z.any().openapi({ description: 'The status of the service update' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'The maximum number of records to include in the response' }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeServiceUpdatesMessage', required: [] })
  .openapi('DescribeServiceUpdatesMessage')

const DescribeSnapshotsMessageSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied replication group identifier. If this parameter is specified, only snapshots associated with that specific replication group are described.',
        }),
    ).exactOptional(),
    CacheClusterId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied cluster identifier. If this parameter is specified, only snapshots associated with that specific cluster are described.',
        }),
    ).exactOptional(),
    SnapshotName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-supplied name of the snapshot. If this parameter is specified, only this snapshot are described.',
        }),
    ).exactOptional(),
    SnapshotSource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If set to <code>system</code>, the output shows snapshots that were automatically created by ElastiCache. If set to <code>user</code> the output shows snapshots that were manually created. If omitted, the output shows both automatically and manually created snapshots.',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 50</p> <p>Constraints: minimum 20; maximum 50.</p>',
        }),
    ).exactOptional(),
    ShowNodeGroupConfig: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value which if true, the node group (shard) configuration is included in the snapshot description.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeSnapshotsMessage',
    description: 'Represents the input of a <code>DescribeSnapshotsMessage</code> operation.',
    required: [],
  })
  .openapi('DescribeSnapshotsMessage')

const TimeRangeFilterSchema = z
  .object({
    StartTime: TStampSchema.and(
      z.any().openapi({ description: 'The start time of the time range filter' }),
    ).exactOptional(),
    EndTime: TStampSchema.and(
      z.any().openapi({ description: 'The end time of the time range filter' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Filters update actions from the service updates that are in available status during the time range.',
    required: [],
  })
  .openapi('TimeRangeFilter')

const UpdateActionStatusListSchema = z
  .array(UpdateActionStatusSchema)
  .max(9)
  .openapi('UpdateActionStatusList')

const DescribeUpdateActionsMessageSchema = z
  .object({
    ServiceUpdateName: StringSchema.and(
      z.any().openapi({ description: 'The unique ID of the service update' }),
    ).exactOptional(),
    ReplicationGroupIds: ReplicationGroupIdListSchema.and(
      z.any().openapi({ description: 'The replication group IDs' }),
    ).exactOptional(),
    CacheClusterIds: CacheClusterIdListSchema.and(
      z.any().openapi({ description: 'The cache cluster IDs' }),
    ).exactOptional(),
    Engine: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Elasticache engine to which the update applies. Either Redis or Memcached ',
        }),
    ).exactOptional(),
    ServiceUpdateStatus: ServiceUpdateStatusListSchema.and(
      z.any().openapi({ description: 'The status of the service update' }),
    ).exactOptional(),
    ServiceUpdateTimeRange: TimeRangeFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The range of time specified to search for service updates that are in available status',
        }),
    ).exactOptional(),
    UpdateActionStatus: UpdateActionStatusListSchema.and(
      z.any().openapi({ description: 'The status of the update action.' }),
    ).exactOptional(),
    ShowNodeLevelUpdateStatus: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description: 'Dictates whether to include node level update status in the response ',
        }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'The maximum number of records to include in the response' }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeUpdateActionsMessage', required: [] })
  .openapi('DescribeUpdateActionsMessage')

const DescribeUserGroupsMessageSchema = z
  .object({
    UserGroupId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the user group.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. ',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. &gt;',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeUserGroupsMessage', required: [] })
  .openapi('DescribeUserGroupsMessage')

const FilterListSchema = z.array(FilterSchema).openapi('FilterList')

const DescribeUsersMessageSchema = z
  .object({
    Engine: EngineTypeSchema.and(
      z.any().openapi({ description: 'The Redis engine. ' }),
    ).exactOptional(),
    UserId: UserIdSchema.and(
      z.any().openapi({ description: 'The ID of the user.' }),
    ).exactOptional(),
    Filters: FilterListSchema.and(
      z.any().openapi({ description: 'Filter to determine the list of User IDs to return.' }),
    ).exactOptional(),
    MaxRecords: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. ',
        }),
    ).exactOptional(),
    Marker: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. &gt;',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeUsersMessage', required: [] })
  .openapi('DescribeUsersMessage')

const DisassociateGlobalReplicationGroupMessageSchema = z
  .object({
    GlobalReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The name of the Global datastore' }),
    ),
    ReplicationGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the secondary cluster you wish to remove from the Global datastore',
        }),
    ),
    ReplicationGroupRegion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon region of secondary cluster you wish to remove from the Global datastore',
        }),
    ),
  })
  .openapi({
    required: ['GlobalReplicationGroupId', 'ReplicationGroupId', 'ReplicationGroupRegion'],
    title: 'DisassociateGlobalReplicationGroupMessage',
  })
  .openapi('DisassociateGlobalReplicationGroupMessage')

const FailoverGlobalReplicationGroupMessageSchema = z
  .object({
    GlobalReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The name of the Global datastore' }),
    ),
    PrimaryRegion: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon region of the primary cluster of the Global datastore',
        }),
    ),
    PrimaryReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The name of the primary replication group' }),
    ),
  })
  .openapi({
    required: ['GlobalReplicationGroupId', 'PrimaryRegion', 'PrimaryReplicationGroupId'],
    title: 'FailoverGlobalReplicationGroupMessage',
  })
  .openapi('FailoverGlobalReplicationGroupMessage')

const RegionalConfigurationListSchema = z
  .array(
    RegionalConfigurationSchema.and(z.any().openapi({ xml: { name: 'RegionalConfiguration' } })),
  )
  .openapi('RegionalConfigurationList')

const IncreaseNodeGroupsInGlobalReplicationGroupMessageSchema = z
  .object({
    GlobalReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The name of the Global datastore' }),
    ),
    NodeGroupCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of node groups you wish to add' }),
    ),
    RegionalConfigurations: RegionalConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the replication group IDs, the Amazon regions where they are stored and the shard configuration for each that comprise the Global datastore',
        }),
    ).exactOptional(),
    ApplyImmediately: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates that the process begins immediately. At present, the only permitted value for this parameter is true.',
        }),
    ),
  })
  .openapi({
    required: ['GlobalReplicationGroupId', 'NodeGroupCount', 'ApplyImmediately'],
    title: 'IncreaseNodeGroupsInGlobalReplicationGroupMessage',
  })
  .openapi('IncreaseNodeGroupsInGlobalReplicationGroupMessage')

const IncreaseReplicaCountMessageSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The id of the replication group to which you want to add replica nodes.',
        }),
    ),
    NewReplicaCount: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of read replica nodes you want at the completion of this operation. For Redis (cluster mode disabled) replication groups, this is the number of replica nodes in the replication group. For Redis (cluster mode enabled) replication groups, this is the number of replica nodes in each of the replication group's node groups.",
        }),
    ).exactOptional(),
    ReplicaConfiguration: ReplicaConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>ConfigureShard</code> objects that can be used to configure each shard in a Redis (cluster mode enabled) replication group. The <code>ConfigureShard</code> has three members: <code>NewReplicaCount</code>, <code>NodeGroupId</code>, and <code>PreferredAvailabilityZones</code>.',
        }),
    ).exactOptional(),
    ApplyImmediately: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>True</code>, the number of replica nodes is increased immediately. <code>ApplyImmediately=False</code> is not currently supported.',
        }),
    ),
  })
  .openapi({
    required: ['ReplicationGroupId', 'ApplyImmediately'],
    title: 'IncreaseReplicaCountMessage',
  })
  .openapi('IncreaseReplicaCountMessage')

const KeyListSchema = z.array(StringSchema).openapi('KeyList')

const ListAllowedNodeTypeModificationsMessageSchema = z
  .object({
    CacheClusterId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the cluster you want to scale up to a larger node instanced type. ElastiCache uses the cluster id to identify the current node type of this cluster and from that to create a list of node types you can scale up to.</p> <important> <p>You must provide a value for either the <code>CacheClusterId</code> or the <code>ReplicationGroupId</code>.</p> </important>',
        }),
    ).exactOptional(),
    ReplicationGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the replication group want to scale up to a larger node type. ElastiCache uses the replication group id to identify the current node type being used by this replication group, and from that to create a list of node types you can scale up to.</p> <important> <p>You must provide a value for either the <code>CacheClusterId</code> or the <code>ReplicationGroupId</code>.</p> </important>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListAllowedNodeTypeModificationsMessage',
    description:
      'The input parameters for the <code>ListAllowedNodeTypeModifications</code> operation.',
    required: [],
  })
  .openapi('ListAllowedNodeTypeModificationsMessage')

const ListTagsForResourceMessageSchema = z
  .object({
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the resource for which you want the list of tags, for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code> or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['ResourceName'],
    title: 'ListTagsForResourceMessage',
    description: 'The input parameters for the <code>ListTagsForResource</code> operation.',
  })
  .openapi('ListTagsForResourceMessage')

const ModifyCacheClusterMessageSchema = z
  .object({
    CacheClusterId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The cluster identifier. This value is stored as a lowercase string.',
        }),
    ),
    NumCacheNodes: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The number of cache nodes that the cluster should have. If the value for <code>NumCacheNodes</code> is greater than the sum of the number of current cache nodes and the number of cache nodes pending creation (which may be zero), more nodes are added. If the value is less than the number of existing cache nodes, nodes are removed. If the value is equal to the number of current cache nodes, any pending add or remove requests are canceled.</p> <p>If you are removing cache nodes, you must use the <code>CacheNodeIdsToRemove</code> parameter to provide the IDs of the specific cache nodes to remove.</p> <p>For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 40.</p> <note> <p>Adding or removing Memcached cache nodes can be applied immediately or as a pending operation (see <code>ApplyImmediately</code>).</p> <p>A pending operation to modify the number of cache nodes in a cluster during its maintenance window, whether by adding or removing nodes in accordance with the scale out architecture, is not queued. The customer's latest request to add or remove nodes to the cluster overrides any previous pending operations to modify the number of cache nodes in the cluster. For example, a request to remove 2 nodes would override a previous pending operation to remove 3 nodes. Similarly, a request to add 2 nodes would override a previous pending operation to remove 3 nodes and vice versa. As Memcached cache nodes may now be provisioned in different Availability Zones with flexible cache node placement, a request to add nodes does not automatically override a previous pending operation to add nodes. The customer can modify the previous pending operation to add more nodes or explicitly cancel the pending request and retry the new request. To cancel pending operations to modify the number of cache nodes in a cluster, use the <code>ModifyCacheCluster</code> request and set <code>NumCacheNodes</code> equal to the number of cache nodes currently in the cluster.</p> </note>",
        }),
    ).exactOptional(),
    CacheNodeIdsToRemove: CacheNodeIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of cache node IDs to be removed. A node ID is a numeric identifier (0001, 0002, etc.). This parameter is only valid when <code>NumCacheNodes</code> is less than the existing number of cache nodes. The number of cache node IDs supplied in this parameter must match the difference between the existing number of cache nodes in the cluster or pending cache nodes, whichever is greater, and the value of <code>NumCacheNodes</code> in the request.</p> <p>For example: If you have 3 active cache nodes, 7 pending cache nodes, and the number of cache nodes in this <code>ModifyCacheCluster</code> call is 5, you must list 2 (7 - 5) cache node IDs to remove.</p>',
        }),
    ).exactOptional(),
    AZMode: AZModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether the new nodes in this Memcached cluster are all created in a single Availability Zone or created across multiple Availability Zones.</p> <p>Valid values: <code>single-az</code> | <code>cross-az</code>.</p> <p>This option is only supported for Memcached clusters.</p> <note> <p>You cannot specify <code>single-az</code> if the Memcached cluster already has cache nodes in different Availability Zones. If <code>cross-az</code> is specified, existing Memcached nodes remain in their current Availability Zone.</p> <p>Only newly created nodes are located in different Availability Zones. </p> </note>',
        }),
    ).exactOptional(),
    NewAvailabilityZones: PreferredAvailabilityZoneListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<note> <p>This option is only supported on Memcached clusters.</p> </note> <p>The list of Availability Zones where the new Memcached cache nodes are created.</p> <p>This parameter is only valid when <code>NumCacheNodes</code> in the request is greater than the sum of the number of active cache nodes and the number of cache nodes pending creation (which may be zero). The number of Availability Zones supplied in this list must match the cache nodes being added in this request.</p> <p>Scenarios:</p> <ul> <li> <p> <b>Scenario 1:</b> You have 3 active nodes and wish to add 2 nodes. Specify <code>NumCacheNodes=5</code> (3 + 2) and optionally specify two Availability Zones for the two new nodes.</p> </li> <li> <p> <b>Scenario 2:</b> You have 3 active nodes and 2 nodes pending creation (from the scenario 1 call) and want to add 1 more node. Specify <code>NumCacheNodes=6</code> ((3 + 2) + 1) and optionally specify an Availability Zone for the new node.</p> </li> <li> <p> <b>Scenario 3:</b> You want to cancel all pending operations. Specify <code>NumCacheNodes=3</code> to cancel all pending operations.</p> </li> </ul> <p>The Availability Zone placement of nodes pending creation cannot be modified. If you wish to cancel any nodes pending creation, add 0 nodes by setting <code>NumCacheNodes</code> to the number of current nodes.</p> <p>If <code>cross-az</code> is specified, existing Memcached nodes remain in their current Availability Zone. Only newly created nodes can be located in different Availability Zones. For guidance on how to move existing Memcached nodes to different Availability Zones, see the <b>Availability Zone Considerations</b> section of <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/CacheNodes.SupportedTypes.html">Cache Node Considerations for Memcached</a>.</p> <p> <b>Impact of new add/remove requests upon pending requests</b> </p> <ul> <li> <p>Scenario-1</p> <ul> <li> <p>Pending Action: Delete</p> </li> <li> <p>New Request: Delete</p> </li> <li> <p>Result: The new delete, pending or immediate, replaces the pending delete.</p> </li> </ul> </li> <li> <p>Scenario-2</p> <ul> <li> <p>Pending Action: Delete</p> </li> <li> <p>New Request: Create</p> </li> <li> <p>Result: The new create, pending or immediate, replaces the pending delete.</p> </li> </ul> </li> <li> <p>Scenario-3</p> <ul> <li> <p>Pending Action: Create</p> </li> <li> <p>New Request: Delete</p> </li> <li> <p>Result: The new delete, pending or immediate, replaces the pending create.</p> </li> </ul> </li> <li> <p>Scenario-4</p> <ul> <li> <p>Pending Action: Create</p> </li> <li> <p>New Request: Create</p> </li> <li> <p>Result: The new create is added to the pending create.</p> <important> <p> <b>Important:</b> If the new create request is <b>Apply Immediately - Yes</b>, all creates are performed immediately. If the new create request is <b>Apply Immediately - No</b>, all creates are pending.</p> </important> </li> </ul> </li> </ul>',
        }),
    ).exactOptional(),
    CacheSecurityGroupNames: CacheSecurityGroupNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of cache security group names to authorize on this cluster. This change is asynchronously applied as soon as possible.</p> <p>You can use this parameter only with clusters that are created outside of an Amazon Virtual Private Cloud (Amazon VPC).</p> <p>Constraints: Must contain no more than 255 alphanumeric characters. Must not be "Default".</p>',
        }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the VPC Security Groups associated with the cluster.</p> <p>This parameter can be used only with clusters that are created in an Amazon Virtual Private Cloud (Amazon VPC).</p>',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p> <p>Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:23:00-mon:01:30</code> </p>',
        }),
    ).exactOptional(),
    NotificationTopicArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent.</p> <note> <p>The Amazon SNS topic owner must be same as the cluster owner.</p> </note>',
        }),
    ).exactOptional(),
    CacheParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the cache parameter group to apply to this cluster. This change is asynchronously applied as soon as possible for parameters when the <code>ApplyImmediately</code> parameter is specified as <code>true</code> for this request.',
        }),
    ).exactOptional(),
    NotificationTopicStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the Amazon SNS notification topic. Notifications are sent only if the status is <code>active</code>.</p> <p>Valid values: <code>active</code> | <code>inactive</code> </p>',
        }),
    ).exactOptional(),
    ApplyImmediately: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If <code>true</code>, this parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the cluster.</p> <p>If <code>false</code>, changes to the cluster are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first.</p> <important> <p>If you perform a <code>ModifyCacheCluster</code> before a pending modification is applied, the pending modification is replaced by the newer modification.</p> </important> <p>Valid values: <code>true</code> | <code>false</code> </p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The upgraded version of the cache engine to be run on the cache nodes.</p> <p> <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster and create it anew with the earlier engine version. </p>',
        }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.  ',
        }),
    ).exactOptional(),
    SnapshotRetentionLimit: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of days for which ElastiCache retains automatic cluster snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p> <note> <p>If the value of <code>SnapshotRetentionLimit</code> is set to zero (0), backups are turned off.</p> </note>',
        }),
    ).exactOptional(),
    SnapshotWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your cluster. ',
        }),
    ).exactOptional(),
    CacheNodeType: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A valid cache node type that you want to scale this cluster up to.',
        }),
    ).exactOptional(),
    AuthToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Reserved parameter. The password used to access a password protected server. This parameter must be specified with the <code>auth-token-update</code> parameter. Password constraints:</p> <ul> <li> <p>Must be only printable ASCII characters</p> </li> <li> <p>Must be at least 16 characters and no more than 128 characters in length</p> </li> <li> <p>Cannot contain any of the following characters: '/', '\"', or '@', '%'</p> </li> </ul> <p> For more information, see AUTH password at <a href=\"http://redis.io/commands/AUTH\">AUTH</a>.</p>",
        }),
    ).exactOptional(),
    AuthTokenUpdateStrategy: AuthTokenUpdateStrategyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the strategy to use to update the AUTH token. This parameter must be specified with the <code>auth-token</code> parameter. Possible values:</p> <ul> <li> <p>Rotate</p> </li> <li> <p>Set</p> </li> </ul> <p> For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html">Authenticating Users with Redis AUTH</a> </p>',
        }),
    ).exactOptional(),
    LogDeliveryConfigurations: LogDeliveryConfigurationRequestListSchema.and(
      z.any().openapi({ description: 'Specifies the destination, format and type of the logs.' }),
    ).exactOptional(),
    IpDiscovery: IpDiscoverySchema.and(
      z
        .any()
        .openapi({
          description:
            'The network type you choose when modifying a cluster, either <code>ipv4</code> | <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CacheClusterId'],
    title: 'ModifyCacheClusterMessage',
    description: 'Represents the input of a <code>ModifyCacheCluster</code> operation.',
  })
  .openapi('ModifyCacheClusterMessage')

const ParameterNameValueListSchema = z
  .array(ParameterNameValueSchema.and(z.any().openapi({ xml: { name: 'ParameterNameValue' } })))
  .openapi('ParameterNameValueList')

const ModifyCacheParameterGroupMessageSchema = z
  .object({
    CacheParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the cache parameter group to modify.' }),
    ),
    ParameterNameValues: ParameterNameValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional. A maximum of 20 parameters may be modified per request.',
        }),
    ),
  })
  .openapi({
    required: ['CacheParameterGroupName', 'ParameterNameValues'],
    title: 'ModifyCacheParameterGroupMessage',
    description: 'Represents the input of a <code>ModifyCacheParameterGroup</code> operation.',
  })
  .openapi('ModifyCacheParameterGroupMessage')

const ModifyCacheSubnetGroupMessageSchema = z
  .object({
    CacheSubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name for the cache subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p> <p>Example: <code>mysubnetgroup</code> </p>',
        }),
    ),
    CacheSubnetGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'A description of the cache subnet group.' }),
    ).exactOptional(),
    SubnetIds: SubnetIdentifierListSchema.and(
      z.any().openapi({ description: 'The EC2 subnet IDs for the cache subnet group.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CacheSubnetGroupName'],
    title: 'ModifyCacheSubnetGroupMessage',
    description: 'Represents the input of a <code>ModifyCacheSubnetGroup</code> operation.',
  })
  .openapi('ModifyCacheSubnetGroupMessage')

const ModifyGlobalReplicationGroupMessageSchema = z
  .object({
    GlobalReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The name of the Global datastore' }),
    ),
    ApplyImmediately: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'This parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible. Modifications to Global Replication Groups cannot be requested to be applied in PreferredMaintenceWindow. ',
        }),
    ),
    CacheNodeType: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A valid cache node type that you want to scale this Global datastore to.',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The upgraded version of the cache engine to be run on the clusters in the Global datastore. ',
        }),
    ).exactOptional(),
    CacheParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the cache parameter group to use with the Global datastore. It must be compatible with the major engine version used by the Global datastore.',
        }),
    ).exactOptional(),
    GlobalReplicationGroupDescription: StringSchema.and(
      z.any().openapi({ description: 'A description of the Global datastore' }),
    ).exactOptional(),
    AutomaticFailoverEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether a read replica is automatically promoted to read/write primary if the existing primary encounters a failure. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GlobalReplicationGroupId', 'ApplyImmediately'],
    title: 'ModifyGlobalReplicationGroupMessage',
  })
  .openapi('ModifyGlobalReplicationGroupMessage')

const ModifyReplicationGroupMessageSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The identifier of the replication group to modify.' }),
    ),
    ReplicationGroupDescription: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A description for the replication group. Maximum length is 255 characters.',
        }),
    ).exactOptional(),
    PrimaryClusterId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For replication groups with a single primary, if this parameter is specified, ElastiCache promotes the specified cluster in the specified replication group to the primary role. The nodes of all other clusters in the replication group are read replicas.',
        }),
    ).exactOptional(),
    SnapshottingClusterId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The cluster ID that is used as the daily snapshot source for the replication group. This parameter cannot be set for Redis (cluster mode enabled) replication groups.',
        }),
    ).exactOptional(),
    AutomaticFailoverEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines whether a read replica is automatically promoted to read/write primary if the existing primary encounters a failure.</p> <p>Valid values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    MultiAZEnabled: BooleanOptionalSchema.and(
      z.any().openapi({ description: 'A flag to indicate MultiAZ is enabled.' }),
    ).exactOptional(),
    NodeGroupId: StringSchema.and(
      z.any().openapi({ deprecated: true, description: 'Deprecated. This parameter is not used.' }),
    ).exactOptional(),
    CacheSecurityGroupNames: CacheSecurityGroupNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of cache security group names to authorize for the clusters in this replication group. This change is asynchronously applied as soon as possible.</p> <p>This parameter can be used only with replication group containing clusters running outside of an Amazon Virtual Private Cloud (Amazon VPC).</p> <p>Constraints: Must contain no more than 255 alphanumeric characters. Must not be <code>Default</code>.</p>',
        }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the VPC Security Groups associated with the clusters in the replication group.</p> <p>This parameter can be used only with replication group containing clusters running in an Amazon Virtual Private Cloud (Amazon VPC).</p>',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p> <p>Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:23:00-mon:01:30</code> </p>',
        }),
    ).exactOptional(),
    NotificationTopicArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent.</p> <note> <p>The Amazon SNS topic owner must be same as the replication group owner. </p> </note>',
        }),
    ).exactOptional(),
    CacheParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the cache parameter group to apply to all of the clusters in this replication group. This change is asynchronously applied as soon as possible for parameters when the <code>ApplyImmediately</code> parameter is specified as <code>true</code> for this request.',
        }),
    ).exactOptional(),
    NotificationTopicStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the Amazon SNS notification topic for the replication group. Notifications are sent only if the status is <code>active</code>.</p> <p>Valid values: <code>active</code> | <code>inactive</code> </p>',
        }),
    ).exactOptional(),
    ApplyImmediately: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If <code>true</code>, this parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the replication group.</p> <p>If <code>false</code>, changes to the nodes in the replication group are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first.</p> <p>Valid values: <code>true</code> | <code>false</code> </p> <p>Default: <code>false</code> </p>',
        }),
    ).exactOptional(),
    EngineVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The upgraded version of the cache engine to be run on the clusters in the replication group.</p> <p> <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing replication group and create it anew with the earlier engine version. </p>',
        }),
    ).exactOptional(),
    AutoMinorVersionUpgrade: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.  ',
        }),
    ).exactOptional(),
    SnapshotRetentionLimit: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of days for which ElastiCache retains automatic node group (shard) snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p> <p> <b>Important</b> If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.</p>',
        }),
    ).exactOptional(),
    SnapshotWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of the node group (shard) specified by <code>SnapshottingClusterId</code>.</p> <p>Example: <code>05:00-09:00</code> </p> <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.</p>',
        }),
    ).exactOptional(),
    CacheNodeType: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A valid cache node type that you want to scale this replication group to.',
        }),
    ).exactOptional(),
    AuthToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Reserved parameter. The password used to access a password protected server. This parameter must be specified with the <code>auth-token-update-strategy </code> parameter. Password constraints:</p> <ul> <li> <p>Must be only printable ASCII characters</p> </li> <li> <p>Must be at least 16 characters and no more than 128 characters in length</p> </li> <li> <p>Cannot contain any of the following characters: '/', '\"', or '@', '%'</p> </li> </ul> <p> For more information, see AUTH password at <a href=\"http://redis.io/commands/AUTH\">AUTH</a>.</p>",
        }),
    ).exactOptional(),
    AuthTokenUpdateStrategy: AuthTokenUpdateStrategyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the strategy to use to update the AUTH token. This parameter must be specified with the <code>auth-token</code> parameter. Possible values:</p> <ul> <li> <p>Rotate</p> </li> <li> <p>Set</p> </li> </ul> <p> For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html">Authenticating Users with Redis AUTH</a> </p>',
        }),
    ).exactOptional(),
    UserGroupIdsToAdd: UserGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the user group you are associating with the replication group.',
        }),
    ).exactOptional(),
    UserGroupIdsToRemove: UserGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the user group to disassociate from the replication group, meaning the users in the group no longer can access the replication group.',
        }),
    ).exactOptional(),
    RemoveUserGroups: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({ description: 'Removes the user group associated with this replication group.' }),
    ).exactOptional(),
    LogDeliveryConfigurations: LogDeliveryConfigurationRequestListSchema.and(
      z.any().openapi({ description: 'Specifies the destination, format and type of the logs.' }),
    ).exactOptional(),
    IpDiscovery: IpDiscoverySchema.and(
      z
        .any()
        .openapi({
          description:
            'The network type you choose when modifying a cluster, either <code>ipv4</code> | <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.',
        }),
    ).exactOptional(),
    TransitEncryptionEnabled: BooleanOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag that enables in-transit encryption when set to true. If you are enabling in-transit encryption for an existing cluster, you must also set <code>TransitEncryptionMode</code> to <code>preferred</code>.',
        }),
    ).exactOptional(),
    TransitEncryptionMode: TransitEncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.</p> <p>You must set <code>TransitEncryptionEnabled</code> to <code>true</code>, for your existing cluster, and set <code>TransitEncryptionMode</code> to <code>preferred</code> in the same request to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Redis clients to use encrypted connections you can set the value to <code>required</code> to allow encrypted connections only.</p> <p>Setting <code>TransitEncryptionMode</code> to <code>required</code> is a two-step process that requires you to first set the <code>TransitEncryptionMode</code> to <code>preferred</code>, after that you can set <code>TransitEncryptionMode</code> to <code>required</code>. </p>',
        }),
    ).exactOptional(),
    ClusterMode: ClusterModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Redis clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Redis clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ReplicationGroupId'],
    title: 'ModifyReplicationGroupMessage',
    description: 'Represents the input of a <code>ModifyReplicationGroups</code> operation.',
  })
  .openapi('ModifyReplicationGroupMessage')

const NodeGroupsToRemoveListSchema = z
  .array(AllowedNodeGroupIdSchema.and(z.any().openapi({ xml: { name: 'NodeGroupToRemove' } })))
  .openapi('NodeGroupsToRemoveList')

const NodeGroupsToRetainListSchema = z
  .array(AllowedNodeGroupIdSchema.and(z.any().openapi({ xml: { name: 'NodeGroupToRetain' } })))
  .openapi('NodeGroupsToRetainList')

const ModifyReplicationGroupShardConfigurationMessageSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Redis (cluster mode enabled) cluster (replication group) on which the shards are to be configured.',
        }),
    ),
    NodeGroupCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of node groups (shards) that results from the modification of the shard configuration.',
        }),
    ),
    ApplyImmediately: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates that the shard reconfiguration process begins immediately. At present, the only permitted value for this parameter is <code>true</code>.</p> <p>Value: true</p>',
        }),
    ),
    ReshardingConfiguration: ReshardingConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the preferred availability zones for each node group in the cluster. If the value of <code>NodeGroupCount</code> is greater than the current number of node groups (shards), you can use this parameter to specify the preferred availability zones of the cluster's shards. If you omit this parameter ElastiCache selects availability zones for you.</p> <p>You can specify this parameter only if the value of <code>NodeGroupCount</code> is greater than the current number of node groups (shards).</p>",
        }),
    ).exactOptional(),
    NodeGroupsToRemove: NodeGroupsToRemoveListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the value of <code>NodeGroupCount</code> is less than the current number of node groups (shards), then either <code>NodeGroupsToRemove</code> or <code>NodeGroupsToRetain</code> is required. <code>NodeGroupsToRemove</code> is a list of <code>NodeGroupId</code>s to remove from the cluster.</p> <p>ElastiCache for Redis will attempt to remove all node groups listed by <code>NodeGroupsToRemove</code> from the cluster.</p>',
        }),
    ).exactOptional(),
    NodeGroupsToRetain: NodeGroupsToRetainListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the value of <code>NodeGroupCount</code> is less than the current number of node groups (shards), then either <code>NodeGroupsToRemove</code> or <code>NodeGroupsToRetain</code> is required. <code>NodeGroupsToRetain</code> is a list of <code>NodeGroupId</code>s to retain in the cluster.</p> <p>ElastiCache for Redis will attempt to remove all node groups except those listed by <code>NodeGroupsToRetain</code> from the cluster.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ReplicationGroupId', 'NodeGroupCount', 'ApplyImmediately'],
    title: 'ModifyReplicationGroupShardConfigurationMessage',
    description:
      'Represents the input for a <code>ModifyReplicationGroupShardConfiguration</code> operation.',
  })
  .openapi('ModifyReplicationGroupShardConfigurationMessage')

const ModifyUserGroupMessageSchema = z
  .object({
    UserGroupId: StringSchema.and(z.any().openapi({ description: 'The ID of the user group.' })),
    UserIdsToAdd: UserIdListInputSchema.and(
      z.any().openapi({ description: 'The list of user IDs to add to the user group.' }),
    ).exactOptional(),
    UserIdsToRemove: UserIdListInputSchema.and(
      z.any().openapi({ description: 'The list of user IDs to remove from the user group.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserGroupId'], title: 'ModifyUserGroupMessage' })
  .openapi('ModifyUserGroupMessage')

const ModifyUserMessageSchema = z
  .object({
    UserId: UserIdSchema.and(z.any().openapi({ description: 'The ID of the user.' })),
    AccessString: AccessStringSchema.and(
      z.any().openapi({ description: 'Access permissions string used for this user.' }),
    ).exactOptional(),
    AppendAccessString: AccessStringSchema.and(
      z.any().openapi({ description: 'Adds additional user permissions to the access string.' }),
    ).exactOptional(),
    Passwords: PasswordListInputSchema.and(
      z
        .any()
        .openapi({
          description: 'The passwords belonging to the user. You are allowed up to two.',
        }),
    ).exactOptional(),
    NoPasswordRequired: BooleanOptionalSchema.and(
      z.any().openapi({ description: 'Indicates no password is required for the user.' }),
    ).exactOptional(),
    AuthenticationMode: AuthenticationModeSchema.and(
      z.any().openapi({ description: 'Specifies how to authenticate the user.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['UserId'], title: 'ModifyUserMessage' })
  .openapi('ModifyUserMessage')

const PurchaseReservedCacheNodesOfferingMessageSchema = z
  .object({
    ReservedCacheNodesOfferingId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the reserved cache node offering to purchase.</p> <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code> </p>',
        }),
    ),
    ReservedCacheNodeId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A customer-specified identifier to track this reservation.</p> <note> <p>The Reserved Cache Node ID is an unique customer-specified identifier to track this reservation. If this parameter is not specified, ElastiCache automatically generates an identifier for the reservation.</p> </note> <p>Example: myreservationID</p>',
        }),
    ).exactOptional(),
    CacheNodeCount: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of cache node instances to reserve.</p> <p>Default: <code>1</code> </p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ReservedCacheNodesOfferingId'],
    title: 'PurchaseReservedCacheNodesOfferingMessage',
    description:
      'Represents the input of a <code>PurchaseReservedCacheNodesOffering</code> operation.',
  })
  .openapi('PurchaseReservedCacheNodesOfferingMessage')

const RebalanceSlotsInGlobalReplicationGroupMessageSchema = z
  .object({
    GlobalReplicationGroupId: StringSchema.and(
      z.any().openapi({ description: 'The name of the Global datastore' }),
    ),
    ApplyImmediately: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'If <code>True</code>, redistribution is applied immediately.' }),
    ),
  })
  .openapi({
    required: ['GlobalReplicationGroupId', 'ApplyImmediately'],
    title: 'RebalanceSlotsInGlobalReplicationGroupMessage',
  })
  .openapi('RebalanceSlotsInGlobalReplicationGroupMessage')

const RebootCacheClusterMessageSchema = z
  .object({
    CacheClusterId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The cluster identifier. This parameter is stored as a lowercase string.',
        }),
    ),
    CacheNodeIdsToReboot: CacheNodeIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of cache node IDs to reboot. A node ID is a numeric identifier (0001, 0002, etc.). To reboot an entire cluster, specify all of the cache node IDs.',
        }),
    ),
  })
  .openapi({
    required: ['CacheClusterId', 'CacheNodeIdsToReboot'],
    title: 'RebootCacheClusterMessage',
    description: 'Represents the input of a <code>RebootCacheCluster</code> operation.',
  })
  .openapi('RebootCacheClusterMessage')

const RemoveTagsFromResourceMessageSchema = z
  .object({
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the resource from which you want the tags removed, for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code> or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Service Namespaces</a>.</p>',
        }),
    ),
    TagKeys: KeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>TagKeys</code> identifying the tags you want removed from the named resource.',
        }),
    ),
  })
  .openapi({
    required: ['ResourceName', 'TagKeys'],
    title: 'RemoveTagsFromResourceMessage',
    description: 'Represents the input of a <code>RemoveTagsFromResource</code> operation.',
  })
  .openapi('RemoveTagsFromResourceMessage')

const ResetCacheParameterGroupMessageSchema = z
  .object({
    CacheParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the cache parameter group to reset.' }),
    ),
    ResetAllParameters: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If <code>true</code>, all parameters in the cache parameter group are reset to their default values. If <code>false</code>, only the parameters listed by <code>ParameterNameValues</code> are reset to their default values.</p> <p>Valid values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    ParameterNameValues: ParameterNameValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of parameter names to reset to their default values. If <code>ResetAllParameters</code> is <code>true</code>, do not use <code>ParameterNameValues</code>. If <code>ResetAllParameters</code> is <code>false</code>, you must specify the name of at least one parameter to reset.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CacheParameterGroupName'],
    title: 'ResetCacheParameterGroupMessage',
    description: 'Represents the input of a <code>ResetCacheParameterGroup</code> operation.',
  })
  .openapi('ResetCacheParameterGroupMessage')

const RevokeCacheSecurityGroupIngressMessageSchema = z
  .object({
    CacheSecurityGroupName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the cache security group to revoke ingress from.' }),
    ),
    EC2SecurityGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Amazon EC2 security group to revoke access from.',
        }),
    ),
    EC2SecurityGroupOwnerId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon account number of the Amazon EC2 security group owner. Note that this is not the same thing as an Amazon access key ID - you must provide a valid Amazon account number for this parameter.',
        }),
    ),
  })
  .openapi({
    required: ['CacheSecurityGroupName', 'EC2SecurityGroupName', 'EC2SecurityGroupOwnerId'],
    title: 'RevokeCacheSecurityGroupIngressMessage',
    description:
      'Represents the input of a <code>RevokeCacheSecurityGroupIngress</code> operation.',
  })
  .openapi('RevokeCacheSecurityGroupIngressMessage')

const StartMigrationMessageSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the replication group to which data should be migrated.',
        }),
    ),
    CustomerNodeEndpointList: CustomerNodeEndpointListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of endpoints from which data should be migrated. For Redis (cluster mode disabled), list should have only one element.',
        }),
    ),
  })
  .openapi({
    required: ['ReplicationGroupId', 'CustomerNodeEndpointList'],
    title: 'StartMigrationMessage',
  })
  .openapi('StartMigrationMessage')

const TestFailoverMessageSchema = z
  .object({
    ReplicationGroupId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the replication group (console: cluster) whose automatic failover is being tested by this operation.',
        }),
    ),
    NodeGroupId: AllowedNodeGroupIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the node group (called shard in the console) in this replication group on which automatic failover is to be tested. You may test automatic failover on up to 5 node groups in any rolling 24-hour period.',
        }),
    ),
  })
  .openapi({ required: ['ReplicationGroupId', 'NodeGroupId'], title: 'TestFailoverMessage' })
  .openapi('TestFailoverMessage')

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

export const getActionAddTagsToResourceRoute = createRoute({
  method: 'get',
  path: '/#Action=AddTagsToResource',
  description:
    '<p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p> For example, you can use cost-allocation tags to your ElastiCache resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a> in the <i>ElastiCache User Guide</i>.</p>',
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
              '<p>The Amazon Resource Name (ARN) of the resource to which the tags are to be added, for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code> or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>. ElastiCache resources are <i>cluster</i> and <i>snapshot</i>.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Service Namespaces</a>.</p>',
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
            description:
              'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
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
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: TagListMessageSchema } } },
    480: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    482: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    483: {
      description: 'CacheSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSubnetGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    485: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    486: {
      description: 'ReservedCacheNodeNotFoundFault',
      content: { 'text/xml': { schema: ReservedCacheNodeNotFoundFaultSchema } },
    },
    487: {
      description: 'SnapshotNotFoundFault',
      content: { 'text/xml': { schema: SnapshotNotFoundFaultSchema } },
    },
    488: {
      description: 'UserNotFoundFault',
      content: { 'text/xml': { schema: UserNotFoundFaultSchema } },
    },
    489: {
      description: 'UserGroupNotFoundFault',
      content: { 'text/xml': { schema: UserGroupNotFoundFaultSchema } },
    },
    490: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    491: {
      description: 'InvalidARNFault',
      content: { 'text/xml': { schema: InvalidARNFaultSchema } },
    },
  },
})

export const postActionAddTagsToResourceRoute = createRoute({
  method: 'post',
  path: '/#Action=AddTagsToResource',
  description:
    '<p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p> For example, you can use cost-allocation tags to your ElastiCache resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a> in the <i>ElastiCache User Guide</i>.</p>',
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
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: AddTagsToResourceMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: TagListMessageSchema } } },
    480: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    482: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    483: {
      description: 'CacheSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSubnetGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    485: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    486: {
      description: 'ReservedCacheNodeNotFoundFault',
      content: { 'text/xml': { schema: ReservedCacheNodeNotFoundFaultSchema } },
    },
    487: {
      description: 'SnapshotNotFoundFault',
      content: { 'text/xml': { schema: SnapshotNotFoundFaultSchema } },
    },
    488: {
      description: 'UserNotFoundFault',
      content: { 'text/xml': { schema: UserNotFoundFaultSchema } },
    },
    489: {
      description: 'UserGroupNotFoundFault',
      content: { 'text/xml': { schema: UserGroupNotFoundFaultSchema } },
    },
    490: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    491: {
      description: 'InvalidARNFault',
      content: { 'text/xml': { schema: InvalidARNFaultSchema } },
    },
  },
})

export const getActionAuthorizeCacheSecurityGroupIngressRoute = createRoute({
  method: 'get',
  path: '/#Action=AuthorizeCacheSecurityGroupIngress',
  description:
    '<p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>',
  operationId: 'GET_AuthorizeCacheSecurityGroupIngress',
  request: {
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
      CacheSecurityGroupName: z
        .string()
        .openapi({
          param: {
            name: 'CacheSecurityGroupName',
            in: 'query',
            required: true,
            description: 'The cache security group that allows network ingress.',
            schema: { type: 'string' },
          },
        }),
      EC2SecurityGroupName: z
        .string()
        .openapi({
          param: {
            name: 'EC2SecurityGroupName',
            in: 'query',
            required: true,
            description:
              'The Amazon EC2 security group to be authorized for ingress to the cache security group.',
            schema: { type: 'string' },
          },
        }),
      EC2SecurityGroupOwnerId: z
        .string()
        .openapi({
          param: {
            name: 'EC2SecurityGroupOwnerId',
            in: 'query',
            required: true,
            description:
              'The Amazon account number of the Amazon EC2 security group owner. Note that this is not the same thing as an Amazon access key ID - you must provide a valid Amazon account number for this parameter.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('AuthorizeCacheSecurityGroupIngress')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AuthorizeCacheSecurityGroupIngress'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: AuthorizeCacheSecurityGroupIngressResultSchema } },
    },
    480: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidCacheSecurityGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheSecurityGroupStateFaultSchema } },
    },
    482: {
      description: 'AuthorizationAlreadyExistsFault',
      content: { 'text/xml': { schema: AuthorizationAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionAuthorizeCacheSecurityGroupIngressRoute = createRoute({
  method: 'post',
  path: '/#Action=AuthorizeCacheSecurityGroupIngress',
  description:
    '<p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>',
  operationId: 'POST_AuthorizeCacheSecurityGroupIngress',
  request: {
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
        .literal('AuthorizeCacheSecurityGroupIngress')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AuthorizeCacheSecurityGroupIngress'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: AuthorizeCacheSecurityGroupIngressMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: AuthorizeCacheSecurityGroupIngressResultSchema } },
    },
    480: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidCacheSecurityGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheSecurityGroupStateFaultSchema } },
    },
    482: {
      description: 'AuthorizationAlreadyExistsFault',
      content: { 'text/xml': { schema: AuthorizationAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionBatchApplyUpdateActionRoute = createRoute({
  method: 'get',
  path: '/#Action=BatchApplyUpdateAction',
  description:
    'Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.',
  operationId: 'GET_BatchApplyUpdateAction',
  request: {
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
      ReplicationGroupIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ReplicationGroupIds',
            in: 'query',
            required: false,
            description: 'The replication group IDs',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' }, maxItems: 20 },
          },
        }),
      CacheClusterIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheClusterIds',
            in: 'query',
            required: false,
            description: 'The cache cluster IDs',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' }, maxItems: 20 },
          },
        }),
      ServiceUpdateName: z
        .string()
        .openapi({
          param: {
            name: 'ServiceUpdateName',
            in: 'query',
            required: true,
            description: 'The unique ID of the service update',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('BatchApplyUpdateAction')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['BatchApplyUpdateAction'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateActionResultsMessageSchema } },
    },
    480: {
      description: 'ServiceUpdateNotFoundFault',
      content: { 'text/xml': { schema: ServiceUpdateNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postActionBatchApplyUpdateActionRoute = createRoute({
  method: 'post',
  path: '/#Action=BatchApplyUpdateAction',
  description:
    'Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.',
  operationId: 'POST_BatchApplyUpdateAction',
  request: {
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
        .literal('BatchApplyUpdateAction')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['BatchApplyUpdateAction'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: BatchApplyUpdateActionMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateActionResultsMessageSchema } },
    },
    480: {
      description: 'ServiceUpdateNotFoundFault',
      content: { 'text/xml': { schema: ServiceUpdateNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const getActionBatchStopUpdateActionRoute = createRoute({
  method: 'get',
  path: '/#Action=BatchStopUpdateAction',
  description:
    'Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.',
  operationId: 'GET_BatchStopUpdateAction',
  request: {
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
      ReplicationGroupIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ReplicationGroupIds',
            in: 'query',
            required: false,
            description: 'The replication group IDs',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' }, maxItems: 20 },
          },
        }),
      CacheClusterIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheClusterIds',
            in: 'query',
            required: false,
            description: 'The cache cluster IDs',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' }, maxItems: 20 },
          },
        }),
      ServiceUpdateName: z
        .string()
        .openapi({
          param: {
            name: 'ServiceUpdateName',
            in: 'query',
            required: true,
            description: 'The unique ID of the service update',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('BatchStopUpdateAction')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['BatchStopUpdateAction'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateActionResultsMessageSchema } },
    },
    480: {
      description: 'ServiceUpdateNotFoundFault',
      content: { 'text/xml': { schema: ServiceUpdateNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postActionBatchStopUpdateActionRoute = createRoute({
  method: 'post',
  path: '/#Action=BatchStopUpdateAction',
  description:
    'Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.',
  operationId: 'POST_BatchStopUpdateAction',
  request: {
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
        .literal('BatchStopUpdateAction')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['BatchStopUpdateAction'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: BatchStopUpdateActionMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateActionResultsMessageSchema } },
    },
    480: {
      description: 'ServiceUpdateNotFoundFault',
      content: { 'text/xml': { schema: ServiceUpdateNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const getActionCompleteMigrationRoute = createRoute({
  method: 'get',
  path: '/#Action=CompleteMigration',
  description: 'Complete the migration of data.',
  operationId: 'GET_CompleteMigration',
  request: {
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
      ReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'ReplicationGroupId',
            in: 'query',
            required: true,
            description: 'The ID of the replication group to which data is being migrated.',
            schema: { type: 'string' },
          },
        }),
      Force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'Force',
            in: 'query',
            required: false,
            description:
              'Forces the migration to stop without ensuring that data is in sync. It is recommended to use this option only to abort the migration and not recommended when application wants to continue migration to ElastiCache.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('CompleteMigration')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CompleteMigration'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CompleteMigrationResponseSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'ReplicationGroupNotUnderMigrationFault',
      content: { 'text/xml': { schema: ReplicationGroupNotUnderMigrationFaultSchema } },
    },
  },
})

export const postActionCompleteMigrationRoute = createRoute({
  method: 'post',
  path: '/#Action=CompleteMigration',
  description: 'Complete the migration of data.',
  operationId: 'POST_CompleteMigration',
  request: {
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
        .literal('CompleteMigration')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CompleteMigration'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CompleteMigrationMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CompleteMigrationResponseSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'ReplicationGroupNotUnderMigrationFault',
      content: { 'text/xml': { schema: ReplicationGroupNotUnderMigrationFaultSchema } },
    },
  },
})

export const getActionCopySnapshotRoute = createRoute({
  method: 'get',
  path: '/#Action=CopySnapshot',
  description:
    '<p>Makes a copy of an existing snapshot.</p> <note> <p>This operation is valid for Redis only.</p> </note> <important> <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the <code>CopySnapshot</code> operation. For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a> and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication &amp; Access Control</a>.</p> </important> <p>You could receive the following error messages.</p> <p class="title"> <b>Error Messages</b> </p> <ul> <li> <p> <b>Error Message:</b> The S3 bucket %s is outside of the region.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s does not exist.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s is not owned by the authenticated user.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The authenticated user does not have sufficient permissions to perform the desired activity.</p> <p> <b>Solution:</b> Contact your system administrator to get the needed permissions.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s already contains an object with key %s.</p> <p> <b>Solution:</b> Give the <code>TargetSnapshotName</code> a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for <code>TargetSnapshotName</code>.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add List and Read permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add Upload/Delete permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add View Permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> </ul>',
  operationId: 'GET_CopySnapshot',
  request: {
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
      SourceSnapshotName: z
        .string()
        .openapi({
          param: {
            name: 'SourceSnapshotName',
            in: 'query',
            required: true,
            description: 'The name of an existing snapshot from which to make a copy.',
            schema: { type: 'string' },
          },
        }),
      TargetSnapshotName: z
        .string()
        .openapi({
          param: {
            name: 'TargetSnapshotName',
            in: 'query',
            required: true,
            description:
              'A name for the snapshot copy. ElastiCache does not permit overwriting a snapshot, therefore this name must be unique within its context - ElastiCache or an Amazon S3 bucket if exporting.',
            schema: { type: 'string' },
          },
        }),
      TargetBucket: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'TargetBucket',
            in: 'query',
            required: false,
            description:
              '<p>The Amazon S3 bucket to which the snapshot is exported. This parameter is used only when exporting a snapshot for external access.</p> <p>When using this parameter to export a snapshot, be sure Amazon ElastiCache has the needed permissions to this S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the <i>Amazon ElastiCache User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting a Snapshot</a> in the <i>Amazon ElastiCache User Guide</i>.</p>',
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
            description: 'The ID of the KMS key used to encrypt the target snapshot.',
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
            description:
              'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      Action: z
        .literal('CopySnapshot')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CopySnapshot'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: CopySnapshotResultSchema } } },
    480: {
      description: 'SnapshotAlreadyExistsFault',
      content: { 'text/xml': { schema: SnapshotAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'SnapshotNotFoundFault',
      content: { 'text/xml': { schema: SnapshotNotFoundFaultSchema } },
    },
    482: {
      description: 'SnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SnapshotQuotaExceededFaultSchema } },
    },
    483: {
      description: 'InvalidSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidSnapshotStateFaultSchema } },
    },
    484: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    485: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionCopySnapshotRoute = createRoute({
  method: 'post',
  path: '/#Action=CopySnapshot',
  description:
    '<p>Makes a copy of an existing snapshot.</p> <note> <p>This operation is valid for Redis only.</p> </note> <important> <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the <code>CopySnapshot</code> operation. For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a> and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication &amp; Access Control</a>.</p> </important> <p>You could receive the following error messages.</p> <p class="title"> <b>Error Messages</b> </p> <ul> <li> <p> <b>Error Message:</b> The S3 bucket %s is outside of the region.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s does not exist.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s is not owned by the authenticated user.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The authenticated user does not have sufficient permissions to perform the desired activity.</p> <p> <b>Solution:</b> Contact your system administrator to get the needed permissions.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s already contains an object with key %s.</p> <p> <b>Solution:</b> Give the <code>TargetSnapshotName</code> a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for <code>TargetSnapshotName</code>.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add List and Read permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add Upload/Delete permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add View Permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> </ul>',
  operationId: 'POST_CopySnapshot',
  request: {
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
        .literal('CopySnapshot')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CopySnapshot'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CopySnapshotMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: CopySnapshotResultSchema } } },
    480: {
      description: 'SnapshotAlreadyExistsFault',
      content: { 'text/xml': { schema: SnapshotAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'SnapshotNotFoundFault',
      content: { 'text/xml': { schema: SnapshotNotFoundFaultSchema } },
    },
    482: {
      description: 'SnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SnapshotQuotaExceededFaultSchema } },
    },
    483: {
      description: 'InvalidSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidSnapshotStateFaultSchema } },
    },
    484: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    485: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionCreateCacheClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateCacheCluster',
  description:
    '<p>Creates a cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached or Redis.</p> <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>',
  operationId: 'GET_CreateCacheCluster',
  request: {
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
      CacheClusterId: z
        .string()
        .openapi({
          param: {
            name: 'CacheClusterId',
            in: 'query',
            required: true,
            description:
              '<p>The node group (shard) identifier. This parameter is stored as a lowercase string.</p> <p> <b>Constraints:</b> </p> <ul> <li> <p>A name must contain from 1 to 50 alphanumeric characters or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>A name cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      ReplicationGroupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ReplicationGroupId',
            in: 'query',
            required: false,
            description:
              '<p>The ID of the replication group to which this cluster should belong. If this parameter is specified, the cluster is added to the specified replication group as a read replica; otherwise, the cluster is a standalone primary that is not part of any replication group.</p> <p>If the specified replication group is Multi-AZ enabled and the Availability Zone is not specified, the cluster is created in Availability Zones that provide the best spread of read replicas across Availability Zones.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note>',
            schema: { type: 'string' },
          },
        }),
      AZMode: z
        .enum(['single-az', 'cross-az'])
        .exactOptional()
        .openapi({
          param: {
            name: 'AZMode',
            in: 'query',
            required: false,
            description:
              "<p>Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region.</p> <p>This parameter is only supported for Memcached clusters.</p> <p>If the <code>AZMode</code> and <code>PreferredAvailabilityZones</code> are not specified, ElastiCache assumes <code>single-az</code> mode.</p>",
            schema: { type: 'string', enum: ['single-az', 'cross-az'] },
          },
        }),
      PreferredAvailabilityZone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PreferredAvailabilityZone',
            in: 'query',
            required: false,
            description:
              '<p>The EC2 Availability Zone in which the cluster is created.</p> <p>All nodes belonging to this cluster are placed in the preferred Availability Zone. If you want to create your nodes across multiple Availability Zones, use <code>PreferredAvailabilityZones</code>.</p> <p>Default: System chosen Availability Zone.</p>',
            schema: { type: 'string' },
          },
        }),
      PreferredAvailabilityZones: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'PreferredAvailabilityZone' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'PreferredAvailabilityZones',
            in: 'query',
            required: false,
            description:
              '<p>A list of the Availability Zones in which cache nodes are created. The order of the zones in the list is not important.</p> <p>This option is only supported on Memcached.</p> <note> <p>If you are creating your cluster in an Amazon VPC (recommended) you can only locate nodes in Availability Zones that are associated with the subnets in the selected subnet group.</p> <p>The number of Availability Zones listed must equal the value of <code>NumCacheNodes</code>.</p> </note> <p>If you want all the nodes in the same Availability Zone, use <code>PreferredAvailabilityZone</code> instead, or repeat the Availability Zone multiple times in the list.</p> <p>Default: System chosen Availability Zones.</p>',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'PreferredAvailabilityZone' } },
                ],
              },
            },
          },
        }),
      NumCacheNodes: z
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
            name: 'NumCacheNodes',
            in: 'query',
            required: false,
            description:
              '<p>The initial number of cache nodes that the cluster has.</p> <p>For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 40.</p> <p>If you need more than 40 nodes for your Memcached cluster, please fill out the ElastiCache Limit Increase Request form at <a href="http://aws.amazon.com/contact-us/elasticache-node-limit-request/">http://aws.amazon.com/contact-us/elasticache-node-limit-request/</a>.</p>',
            schema: { type: 'integer' },
          },
        }),
      CacheNodeType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheNodeType',
            in: 'query',
            required: false,
            description:
              '<p>The compute and memory capacity of the nodes in the node group (shard).</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>',
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
              '<p>The name of the cache engine to be used for this cluster.</p> <p>Valid values for this parameter are: <code>memcached</code> | <code>redis</code> </p>',
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
              '<p>The version number of the cache engine to be used for this cluster. To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.</p> <p> <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version. </p>',
            schema: { type: 'string' },
          },
        }),
      CacheParameterGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheParameterGroupName',
            in: 'query',
            required: false,
            description:
              "The name of the parameter group to associate with this cluster. If this argument is omitted, the default parameter group for the specified engine is used. You cannot use any parameter group which has <code>cluster-enabled='yes'</code> when creating a cluster.",
            schema: { type: 'string' },
          },
        }),
      CacheSubnetGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheSubnetGroupName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the subnet group to be used for the cluster.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p> <important> <p>If you\'re going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.html">Subnets and Subnet Groups</a>.</p> </important>',
            schema: { type: 'string' },
          },
        }),
      CacheSecurityGroupNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'CacheSecurityGroupName' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheSecurityGroupNames',
            in: 'query',
            required: false,
            description:
              '<p>A list of security group names to associate with this cluster.</p> <p>Use this parameter only when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC).</p>',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'CacheSecurityGroupName' } },
                ],
              },
            },
          },
        }),
      SecurityGroupIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'SecurityGroupId' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'SecurityGroupIds',
            in: 'query',
            required: false,
            description:
              '<p>One or more VPC security groups associated with the cluster.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'SecurityGroupId' } },
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
            description: 'A list of tags to be added to this resource.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      SnapshotArns: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'SnapshotArn' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'SnapshotArns',
            in: 'query',
            required: false,
            description:
              '<p>A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Redis RDB snapshot file stored in Amazon S3. The snapshot file is used to populate the node group (shard). The Amazon S3 object name in the ARN cannot contain any commas.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note> <p>Example of an Amazon S3 ARN: <code>arn:aws:s3:::my_bucket/snapshot1.rdb</code> </p>',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/String' }, { xml: { name: 'SnapshotArn' } }],
              },
            },
          },
        }),
      SnapshotName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SnapshotName',
            in: 'query',
            required: false,
            description:
              '<p>The name of a Redis snapshot from which to restore data into the new node group (shard). The snapshot status changes to <code>restoring</code> while the new node group (shard) is being created.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note>',
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
              'Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. ',
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
            description: 'The port number on which each of the cache nodes accepts connections.',
            schema: { type: 'integer' },
          },
        }),
      NotificationTopicArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NotificationTopicArn',
            in: 'query',
            required: false,
            description:
              '<p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.</p> <note> <p>The Amazon SNS topic owner must be the same as the cluster owner.</p> </note>',
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
              ' If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.  ',
            schema: { type: 'boolean' },
          },
        }),
      SnapshotRetentionLimit: z
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
            name: 'SnapshotRetentionLimit',
            in: 'query',
            required: false,
            description:
              '<p>The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot taken today is retained for 5 days before being deleted.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note> <p>Default: 0 (i.e., automatic backups are disabled for this cache cluster).</p>',
            schema: { type: 'integer' },
          },
        }),
      SnapshotWindow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SnapshotWindow',
            in: 'query',
            required: false,
            description:
              '<p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).</p> <p>Example: <code>05:00-09:00</code> </p> <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note>',
            schema: { type: 'string' },
          },
        }),
      AuthToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'AuthToken',
            in: 'query',
            required: false,
            description:
              '<p> <b>Reserved parameter.</b> The password used to access a password protected server.</p> <p>Password constraints:</p> <ul> <li> <p>Must be only printable ASCII characters.</p> </li> <li> <p>Must be at least 16 characters and no more than 128 characters in length.</p> </li> <li> <p>The only permitted printable special characters are !, &amp;, #, $, ^, &lt;, &gt;, and -. Other printable special characters cannot be used in the AUTH token.</p> </li> </ul> <p>For more information, see <a href="http://redis.io/commands/AUTH">AUTH password</a> at http://redis.io/commands/AUTH.</p>',
            schema: { type: 'string' },
          },
        }),
      OutpostMode: z
        .enum(['single-outpost', 'cross-outpost'])
        .exactOptional()
        .openapi({
          param: {
            name: 'OutpostMode',
            in: 'query',
            required: false,
            description:
              'Specifies whether the nodes in the cluster are created in a single outpost or across multiple outposts.',
            schema: { type: 'string', enum: ['single-outpost', 'cross-outpost'] },
          },
        }),
      PreferredOutpostArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PreferredOutpostArn',
            in: 'query',
            required: false,
            description: 'The outpost ARN in which the cache cluster is created.',
            schema: { type: 'string' },
          },
        }),
      PreferredOutpostArns: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'PreferredOutpostArn' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'PreferredOutpostArns',
            in: 'query',
            required: false,
            description: 'The outpost ARNs in which the cache cluster is created.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'PreferredOutpostArn' } },
                ],
              },
            },
          },
        }),
      LogDeliveryConfigurations: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                LogType: LogTypeSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'Refers to <a href="https://redis.io/commands/slowlog">slow-log</a> or engine-log..',
                    }),
                ).exactOptional(),
                DestinationType: DestinationTypeSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'Specify either <code>cloudwatch-logs</code> or <code>kinesis-firehose</code> as the destination type.',
                    }),
                ).exactOptional(),
                DestinationDetails: DestinationDetailsSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.',
                    }),
                ).exactOptional(),
                LogFormat: LogFormatSchema.and(
                  z.any().openapi({ description: 'Specifies either JSON or TEXT' }),
                ).exactOptional(),
                Enabled: z
                  .preprocess(
                    ((read) => (val: unknown) => {
                      const result = read.safeParse(val)
                      return result.success ? result.data : val
                    })(z.stringbool()),
                    BooleanOptionalSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specify if log delivery is enabled. Default <code>true</code>.',
                      }),
                  )
                  .exactOptional(),
              })
              .openapi({
                description: 'Specifies the destination, format and type of the logs. ',
                required: [],
              })
              .and(
                ((schema) =>
                  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                  z.any(),
                ).openapi({ xml: { name: 'LogDeliveryConfigurationRequest' } }),
              ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'LogDeliveryConfigurations',
            in: 'query',
            required: false,
            description: 'Specifies the destination, format and type of the logs. ',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  {
                    type: 'object',
                    properties: {
                      LogType: {
                        allOf: [
                          { $ref: '#/components/schemas/LogType' },
                          {
                            description:
                              'Refers to <a href="https://redis.io/commands/slowlog">slow-log</a> or engine-log..',
                          },
                        ],
                      },
                      DestinationType: {
                        allOf: [
                          { $ref: '#/components/schemas/DestinationType' },
                          {
                            description:
                              'Specify either <code>cloudwatch-logs</code> or <code>kinesis-firehose</code> as the destination type.',
                          },
                        ],
                      },
                      DestinationDetails: {
                        allOf: [
                          { $ref: '#/components/schemas/DestinationDetails' },
                          {
                            description:
                              'Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.',
                          },
                        ],
                      },
                      LogFormat: {
                        allOf: [
                          { $ref: '#/components/schemas/LogFormat' },
                          { description: 'Specifies either JSON or TEXT' },
                        ],
                      },
                      Enabled: {
                        allOf: [
                          { $ref: '#/components/schemas/BooleanOptional' },
                          {
                            description:
                              'Specify if log delivery is enabled. Default <code>true</code>.',
                          },
                        ],
                      },
                    },
                    description: 'Specifies the destination, format and type of the logs. ',
                  },
                  { xml: { name: 'LogDeliveryConfigurationRequest' } },
                ],
              },
            },
          },
        }),
      TransitEncryptionEnabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'TransitEncryptionEnabled',
            in: 'query',
            required: false,
            description: 'A flag that enables in-transit encryption when set to true.',
            schema: { type: 'boolean' },
          },
        }),
      NetworkType: z
        .enum(['ipv4', 'ipv6', 'dual_stack'])
        .exactOptional()
        .openapi({
          param: {
            name: 'NetworkType',
            in: 'query',
            required: false,
            description:
              'Must be either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>. ',
            schema: { type: 'string', enum: ['ipv4', 'ipv6', 'dual_stack'] },
          },
        }),
      IpDiscovery: z
        .enum(['ipv4', 'ipv6'])
        .exactOptional()
        .openapi({
          param: {
            name: 'IpDiscovery',
            in: 'query',
            required: false,
            description:
              'The network type you choose when modifying a cluster, either <code>ipv4</code> | <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.',
            schema: { type: 'string', enum: ['ipv4', 'ipv6'] },
          },
        }),
      Action: z
        .literal('CreateCacheCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateCacheCluster'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateCacheClusterResultSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'CacheClusterAlreadyExistsFault',
      content: { 'text/xml': { schema: CacheClusterAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'InsufficientCacheClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientCacheClusterCapacityFaultSchema } },
    },
    484: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    485: {
      description: 'CacheSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSubnetGroupNotFoundFaultSchema } },
    },
    486: {
      description: 'ClusterQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: ClusterQuotaForCustomerExceededFaultSchema } },
    },
    487: {
      description: 'NodeQuotaForClusterExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForClusterExceededFaultSchema } },
    },
    488: {
      description: 'NodeQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForCustomerExceededFaultSchema } },
    },
    489: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    490: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    491: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    492: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    493: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionCreateCacheClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateCacheCluster',
  description:
    '<p>Creates a cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached or Redis.</p> <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>',
  operationId: 'POST_CreateCacheCluster',
  request: {
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
        .literal('CreateCacheCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateCacheCluster'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateCacheClusterMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateCacheClusterResultSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'CacheClusterAlreadyExistsFault',
      content: { 'text/xml': { schema: CacheClusterAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'InsufficientCacheClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientCacheClusterCapacityFaultSchema } },
    },
    484: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    485: {
      description: 'CacheSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSubnetGroupNotFoundFaultSchema } },
    },
    486: {
      description: 'ClusterQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: ClusterQuotaForCustomerExceededFaultSchema } },
    },
    487: {
      description: 'NodeQuotaForClusterExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForClusterExceededFaultSchema } },
    },
    488: {
      description: 'NodeQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForCustomerExceededFaultSchema } },
    },
    489: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    490: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    491: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    492: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    493: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionCreateCacheParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateCacheParameterGroup',
  description:
    '<p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster or replication group using the CacheParameterGroup.</p> <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p> </li> </ul>',
  operationId: 'GET_CreateCacheParameterGroup',
  request: {
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
      CacheParameterGroupName: z
        .string()
        .openapi({
          param: {
            name: 'CacheParameterGroupName',
            in: 'query',
            required: true,
            description: 'A user-specified name for the cache parameter group.',
            schema: { type: 'string' },
          },
        }),
      CacheParameterGroupFamily: z
        .string()
        .openapi({
          param: {
            name: 'CacheParameterGroupFamily',
            in: 'query',
            required: true,
            description:
              '<p>The name of the cache parameter group family that the cache parameter group can be used with.</p> <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> | <code>memcached1.6</code> | <code>redis2.6</code> | <code>redis2.8</code> | <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> | <code>redis6.x</code> | <code>redis7</code> </p>',
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
            description: 'A user-specified description for the cache parameter group.',
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
            description:
              'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      Action: z
        .literal('CreateCacheParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateCacheParameterGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateCacheParameterGroupResultSchema } },
    },
    480: {
      description: 'CacheParameterGroupQuotaExceededFault',
      content: { 'text/xml': { schema: CacheParameterGroupQuotaExceededFaultSchema } },
    },
    481: {
      description: 'CacheParameterGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: CacheParameterGroupAlreadyExistsFaultSchema } },
    },
    482: {
      description: 'InvalidCacheParameterGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheParameterGroupStateFaultSchema } },
    },
    483: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionCreateCacheParameterGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateCacheParameterGroup',
  description:
    '<p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster or replication group using the CacheParameterGroup.</p> <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p> </li> </ul>',
  operationId: 'POST_CreateCacheParameterGroup',
  request: {
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
        .literal('CreateCacheParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateCacheParameterGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateCacheParameterGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateCacheParameterGroupResultSchema } },
    },
    480: {
      description: 'CacheParameterGroupQuotaExceededFault',
      content: { 'text/xml': { schema: CacheParameterGroupQuotaExceededFaultSchema } },
    },
    481: {
      description: 'CacheParameterGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: CacheParameterGroupAlreadyExistsFaultSchema } },
    },
    482: {
      description: 'InvalidCacheParameterGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheParameterGroupStateFaultSchema } },
    },
    483: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionCreateCacheSecurityGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateCacheSecurityGroup',
  description:
    '<p>Creates a new cache security group. Use a cache security group to control access to one or more clusters.</p> <p>Cache security groups are only used when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache subnet group instead. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>',
  operationId: 'GET_CreateCacheSecurityGroup',
  request: {
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
      CacheSecurityGroupName: z
        .string()
        .openapi({
          param: {
            name: 'CacheSecurityGroupName',
            in: 'query',
            required: true,
            description:
              '<p>A name for the cache security group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters. Cannot be the word "Default".</p> <p>Example: <code>mysecuritygroup</code> </p>',
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
            description: 'A description for the cache security group.',
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
            description:
              'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      Action: z
        .literal('CreateCacheSecurityGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateCacheSecurityGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateCacheSecurityGroupResultSchema } },
    },
    480: {
      description: 'CacheSecurityGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: CacheSecurityGroupAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'CacheSecurityGroupQuotaExceededFault',
      content: { 'text/xml': { schema: CacheSecurityGroupQuotaExceededFaultSchema } },
    },
    482: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionCreateCacheSecurityGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateCacheSecurityGroup',
  description:
    '<p>Creates a new cache security group. Use a cache security group to control access to one or more clusters.</p> <p>Cache security groups are only used when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache subnet group instead. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>',
  operationId: 'POST_CreateCacheSecurityGroup',
  request: {
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
        .literal('CreateCacheSecurityGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateCacheSecurityGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateCacheSecurityGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateCacheSecurityGroupResultSchema } },
    },
    480: {
      description: 'CacheSecurityGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: CacheSecurityGroupAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'CacheSecurityGroupQuotaExceededFault',
      content: { 'text/xml': { schema: CacheSecurityGroupQuotaExceededFaultSchema } },
    },
    482: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionCreateCacheSubnetGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateCacheSubnetGroup',
  description:
    '<p>Creates a new cache subnet group.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>',
  operationId: 'GET_CreateCacheSubnetGroup',
  request: {
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
      CacheSubnetGroupName: z
        .string()
        .openapi({
          param: {
            name: 'CacheSubnetGroupName',
            in: 'query',
            required: true,
            description:
              '<p>A name for the cache subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p> <p>Example: <code>mysubnetgroup</code> </p>',
            schema: { type: 'string' },
          },
        }),
      CacheSubnetGroupDescription: z
        .string()
        .openapi({
          param: {
            name: 'CacheSubnetGroupDescription',
            in: 'query',
            required: true,
            description: 'A description for the cache subnet group.',
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
            description: 'A list of VPC subnet IDs for the cache subnet group.',
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
            description:
              'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      Action: z
        .literal('CreateCacheSubnetGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateCacheSubnetGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateCacheSubnetGroupResultSchema } },
    },
    480: {
      description: 'CacheSubnetGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: CacheSubnetGroupAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'CacheSubnetGroupQuotaExceededFault',
      content: { 'text/xml': { schema: CacheSubnetGroupQuotaExceededFaultSchema } },
    },
    482: {
      description: 'CacheSubnetQuotaExceededFault',
      content: { 'text/xml': { schema: CacheSubnetQuotaExceededFaultSchema } },
    },
    483: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    484: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
    485: {
      description: 'SubnetNotAllowedFault',
      content: { 'text/xml': { schema: SubnetNotAllowedFaultSchema } },
    },
  },
})

export const postActionCreateCacheSubnetGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateCacheSubnetGroup',
  description:
    '<p>Creates a new cache subnet group.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>',
  operationId: 'POST_CreateCacheSubnetGroup',
  request: {
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
        .literal('CreateCacheSubnetGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateCacheSubnetGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateCacheSubnetGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateCacheSubnetGroupResultSchema } },
    },
    480: {
      description: 'CacheSubnetGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: CacheSubnetGroupAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'CacheSubnetGroupQuotaExceededFault',
      content: { 'text/xml': { schema: CacheSubnetGroupQuotaExceededFaultSchema } },
    },
    482: {
      description: 'CacheSubnetQuotaExceededFault',
      content: { 'text/xml': { schema: CacheSubnetQuotaExceededFaultSchema } },
    },
    483: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    484: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
    485: {
      description: 'SubnetNotAllowedFault',
      content: { 'text/xml': { schema: SubnetNotAllowedFaultSchema } },
    },
  },
})

export const getActionCreateGlobalReplicationGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateGlobalReplicationGroup',
  description:
    '<p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>',
  operationId: 'GET_CreateGlobalReplicationGroup',
  request: {
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
      GlobalReplicationGroupIdSuffix: z
        .string()
        .openapi({
          param: {
            name: 'GlobalReplicationGroupIdSuffix',
            in: 'query',
            required: true,
            description:
              '<p>The suffix name of a Global datastore. Amazon ElastiCache automatically applies a prefix to the Global datastore ID when it is created. Each Amazon Region has its own prefix. For instance, a Global datastore ID created in the US-West-1 region will begin with "dsdfu" along with the suffix name you provide. The suffix, combined with the auto-generated prefix, guarantees uniqueness of the Global datastore name across multiple regions. </p> <p>For a full list of Amazon Regions and their respective Global datastore iD prefixes, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastores-CLI.html">Using the Amazon CLI with Global datastores </a>.</p>',
            schema: { type: 'string' },
          },
        }),
      GlobalReplicationGroupDescription: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'GlobalReplicationGroupDescription',
            in: 'query',
            required: false,
            description: 'Provides details of the Global datastore',
            schema: { type: 'string' },
          },
        }),
      PrimaryReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'PrimaryReplicationGroupId',
            in: 'query',
            required: true,
            description:
              'The name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('CreateGlobalReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateGlobalReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateGlobalReplicationGroupResultSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'GlobalReplicationGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postActionCreateGlobalReplicationGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateGlobalReplicationGroup',
  description:
    '<p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>',
  operationId: 'POST_CreateGlobalReplicationGroup',
  request: {
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
        .literal('CreateGlobalReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateGlobalReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateGlobalReplicationGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateGlobalReplicationGroupResultSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'GlobalReplicationGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const getActionCreateReplicationGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateReplicationGroup',
  description:
    '<p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p> <p>This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global datastore.</p> <p>A Redis (cluster mode disabled) replication group is a collection of clusters, where one of the clusters is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas.</p> <p>A Redis cluster-mode enabled cluster is comprised of from 1 to 90 shards (API/CLI: node groups). Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed. </p> <p>The node or shard limit can be increased to a maximum of 500 per cluster if the Redis engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between 83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase. Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.Creating.html">Creating a Subnet Group</a>. For versions below 5.0.6, the limit is 250 per cluster.</p> <p>To request a limit increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Service Limits</a> and choose the limit type <b>Nodes per cluster per instance type</b>. </p> <p>When a Redis (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. If you need to increase or decrease the number of node groups (console: shards), you can avail yourself of ElastiCache for Redis\' scaling. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Scaling.html">Scaling ElastiCache for Redis Clusters</a> in the <i>ElastiCache User Guide</i>.</p> <note> <p>This operation is valid for Redis only.</p> </note>',
  operationId: 'GET_CreateReplicationGroup',
  request: {
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
      ReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'ReplicationGroupId',
            in: 'query',
            required: true,
            description:
              '<p>The replication group identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>A name must contain from 1 to 40 alphanumeric characters or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>A name cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      ReplicationGroupDescription: z
        .string()
        .openapi({
          param: {
            name: 'ReplicationGroupDescription',
            in: 'query',
            required: true,
            description: 'A user-created description for the replication group.',
            schema: { type: 'string' },
          },
        }),
      GlobalReplicationGroupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'GlobalReplicationGroupId',
            in: 'query',
            required: false,
            description: 'The name of the Global datastore',
            schema: { type: 'string' },
          },
        }),
      PrimaryClusterId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PrimaryClusterId',
            in: 'query',
            required: false,
            description:
              '<p>The identifier of the cluster that serves as the primary for this replication group. This cluster must already exist and have a status of <code>available</code>.</p> <p>This parameter is not required if <code>NumCacheClusters</code>, <code>NumNodeGroups</code>, or <code>ReplicasPerNodeGroup</code> is specified.</p>',
            schema: { type: 'string' },
          },
        }),
      AutomaticFailoverEnabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'AutomaticFailoverEnabled',
            in: 'query',
            required: false,
            description:
              '<p>Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.</p> <p> <code>AutomaticFailoverEnabled</code> must be enabled for Redis (cluster mode enabled) replication groups.</p> <p>Default: false</p>',
            schema: { type: 'boolean' },
          },
        }),
      MultiAZEnabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'MultiAZEnabled',
            in: 'query',
            required: false,
            description:
              'A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html">Minimizing Downtime: Multi-AZ</a>.',
            schema: { type: 'boolean' },
          },
        }),
      NumCacheClusters: z
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
            name: 'NumCacheClusters',
            in: 'query',
            required: false,
            description:
              '<p>The number of clusters this replication group initially has.</p> <p>This parameter is not used if there is more than one node group (shard). You should use <code>ReplicasPerNodeGroup</code> instead.</p> <p>If <code>AutomaticFailoverEnabled</code> is <code>true</code>, the value of this parameter must be at least 2. If <code>AutomaticFailoverEnabled</code> is <code>false</code> you can omit this parameter (it will default to 1), or you can explicitly set it to a value between 2 and 6.</p> <p>The maximum permitted value for <code>NumCacheClusters</code> is 6 (1 primary plus 5 replicas).</p>',
            schema: { type: 'integer' },
          },
        }),
      PreferredCacheClusterAZs: z
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
            name: 'PreferredCacheClusterAZs',
            in: 'query',
            required: false,
            description:
              "<p>A list of EC2 Availability Zones in which the replication group's clusters are created. The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list.</p> <p>This parameter is not used if there is more than one node group (shard). You should use <code>NodeGroupConfiguration</code> instead.</p> <note> <p>If you are creating your replication group in an Amazon VPC (recommended), you can only locate clusters in Availability Zones associated with the subnets in the selected subnet group.</p> <p>The number of Availability Zones listed must equal the value of <code>NumCacheClusters</code>.</p> </note> <p>Default: system chosen Availability Zones.</p>",
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
      NumNodeGroups: z
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
            name: 'NumNodeGroups',
            in: 'query',
            required: false,
            description:
              '<p>An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group. For Redis (cluster mode disabled) either omit this parameter or set it to 1.</p> <p>Default: 1</p>',
            schema: { type: 'integer' },
          },
        }),
      ReplicasPerNodeGroup: z
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
            name: 'ReplicasPerNodeGroup',
            in: 'query',
            required: false,
            description:
              'An optional parameter that specifies the number of replica nodes in each node group (shard). Valid values are 0 to 5.',
            schema: { type: 'integer' },
          },
        }),
      NodeGroupConfiguration: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                NodeGroupId: AllowedNodeGroupIdSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to.',
                    }),
                ).exactOptional(),
                Slots: StringSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        '<p>A string that specifies the keyspace for a particular node group. Keyspaces range from 0 to 16,383. The string is in the format <code>startkey-endkey</code>.</p> <p>Example: <code>"0-3999"</code> </p>',
                    }),
                ).exactOptional(),
                ReplicaCount: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    IntegerOptionalSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description: 'The number of read replica nodes in this node group (shard).',
                      }),
                  )
                  .exactOptional(),
                PrimaryAvailabilityZone: StringSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'The Availability Zone where the primary node of this node group (shard) is launched.',
                    }),
                ).exactOptional(),
                ReplicaAvailabilityZones: AvailabilityZonesListSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'A list of Availability Zones to be used for the read replicas. The number of Availability Zones in this list must match the value of <code>ReplicaCount</code> or <code>ReplicasPerNodeGroup</code> if not specified.',
                    }),
                ).exactOptional(),
                PrimaryOutpostArn: StringSchema.and(
                  z.any().openapi({ description: 'The outpost ARN of the primary node.' }),
                ).exactOptional(),
                ReplicaOutpostArns: OutpostArnsListSchema.and(
                  z.any().openapi({ description: 'The outpost ARN of the node replicas.' }),
                ).exactOptional(),
              })
              .openapi({
                description:
                  'Node group (shard) configuration options. Each node group (shard) configuration has the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>.',
                required: [],
              })
              .and(
                ((schema) =>
                  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                  z.any(),
                ).openapi({ xml: { name: 'NodeGroupConfiguration' } }),
              ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'NodeGroupConfiguration',
            in: 'query',
            required: false,
            description:
              "<p>A list of node group (shard) configuration options. Each node group (shard) configuration has the following members: <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>, and <code>Slots</code>.</p> <p>If you're creating a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group, you can use this parameter to individually configure each node group (shard), or you can omit this parameter. However, it is required when seeding a Redis (cluster mode enabled) cluster from a S3 rdb file. You must configure each node group (shard) using this parameter because you must specify the slots for each node group.</p>",
            schema: {
              type: 'array',
              items: {
                allOf: [
                  {
                    type: 'object',
                    properties: {
                      NodeGroupId: {
                        allOf: [
                          { $ref: '#/components/schemas/AllowedNodeGroupId' },
                          {
                            description:
                              'Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to.',
                          },
                        ],
                      },
                      Slots: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          {
                            description:
                              '<p>A string that specifies the keyspace for a particular node group. Keyspaces range from 0 to 16,383. The string is in the format <code>startkey-endkey</code>.</p> <p>Example: <code>"0-3999"</code> </p>',
                          },
                        ],
                      },
                      ReplicaCount: {
                        allOf: [
                          { $ref: '#/components/schemas/IntegerOptional' },
                          {
                            description:
                              'The number of read replica nodes in this node group (shard).',
                          },
                        ],
                      },
                      PrimaryAvailabilityZone: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          {
                            description:
                              'The Availability Zone where the primary node of this node group (shard) is launched.',
                          },
                        ],
                      },
                      ReplicaAvailabilityZones: {
                        allOf: [
                          { $ref: '#/components/schemas/AvailabilityZonesList' },
                          {
                            description:
                              'A list of Availability Zones to be used for the read replicas. The number of Availability Zones in this list must match the value of <code>ReplicaCount</code> or <code>ReplicasPerNodeGroup</code> if not specified.',
                          },
                        ],
                      },
                      PrimaryOutpostArn: {
                        allOf: [
                          { $ref: '#/components/schemas/String' },
                          { description: 'The outpost ARN of the primary node.' },
                        ],
                      },
                      ReplicaOutpostArns: {
                        allOf: [
                          { $ref: '#/components/schemas/OutpostArnsList' },
                          { description: 'The outpost ARN of the node replicas.' },
                        ],
                      },
                    },
                    description:
                      'Node group (shard) configuration options. Each node group (shard) configuration has the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>.',
                  },
                  { xml: { name: 'NodeGroupConfiguration' } },
                ],
              },
            },
          },
        }),
      CacheNodeType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheNodeType',
            in: 'query',
            required: false,
            description:
              '<p>The compute and memory capacity of the nodes in the node group (shard).</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>',
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
              'The name of the cache engine to be used for the clusters in this replication group. The value must be set to <code>Redis</code>.',
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
              '<p>The version number of the cache engine to be used for the clusters in this replication group. To view the supported cache engine versions, use the <code>DescribeCacheEngineVersions</code> operation.</p> <p> <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>) in the <i>ElastiCache User Guide</i>, but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version. </p>',
            schema: { type: 'string' },
          },
        }),
      CacheParameterGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheParameterGroupName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used.</p> <p>If you are running Redis version 3.2.4 or later, only one node group (shard), and want to use a default parameter group, we recommend that you specify the parameter group by name. </p> <ul> <li> <p>To create a Redis (cluster mode disabled) replication group, use <code>CacheParameterGroupName=default.redis3.2</code>.</p> </li> <li> <p>To create a Redis (cluster mode enabled) replication group, use <code>CacheParameterGroupName=default.redis3.2.cluster.on</code>.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      CacheSubnetGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheSubnetGroupName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the cache subnet group to be used for the replication group.</p> <important> <p>If you\'re going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.html">Subnets and Subnet Groups</a>.</p> </important>',
            schema: { type: 'string' },
          },
        }),
      CacheSecurityGroupNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'CacheSecurityGroupName' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheSecurityGroupNames',
            in: 'query',
            required: false,
            description:
              'A list of cache security group names to associate with this replication group.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'CacheSecurityGroupName' } },
                ],
              },
            },
          },
        }),
      SecurityGroupIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'SecurityGroupId' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'SecurityGroupIds',
            in: 'query',
            required: false,
            description:
              '<p>One or more Amazon VPC security groups associated with this replication group.</p> <p>Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud (Amazon VPC).</p>',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'SecurityGroupId' } },
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
            description:
              'A list of tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=<code>myKey</code>, Value=<code>myKeyValue</code>. You can include multiple tags as shown following: Key=<code>myKey</code>, Value=<code>myKeyValue</code> Key=<code>mySecondKey</code>, Value=<code>mySecondKeyValue</code>. Tags on replication groups will be replicated to all nodes.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      SnapshotArns: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'SnapshotArn' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'SnapshotArns',
            in: 'query',
            required: false,
            description:
              '<p>A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new replication group. The Amazon S3 object name in the ARN cannot contain any commas. The new replication group will have the number of node groups (console: shards) specified by the parameter <i>NumNodeGroups</i> or the number of node groups configured by <i>NodeGroupConfiguration</i> regardless of the number of ARNs specified here.</p> <p>Example of an Amazon S3 ARN: <code>arn:aws:s3:::my_bucket/snapshot1.rdb</code> </p>',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/String' }, { xml: { name: 'SnapshotArn' } }],
              },
            },
          },
        }),
      SnapshotName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SnapshotName',
            in: 'query',
            required: false,
            description:
              'The name of a snapshot from which to restore data into the new replication group. The snapshot status changes to <code>restoring</code> while the new replication group is being created.',
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
              '<p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for <code>ddd</code> are:</p> <p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p> <p>Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:23:00-mon:01:30</code> </p>',
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
              'The port number on which each member of the replication group accepts connections.',
            schema: { type: 'integer' },
          },
        }),
      NotificationTopicArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NotificationTopicArn',
            in: 'query',
            required: false,
            description:
              '<p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.</p> <note> <p>The Amazon SNS topic owner must be the same as the cluster owner.</p> </note>',
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
              ' If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.  ',
            schema: { type: 'boolean' },
          },
        }),
      SnapshotRetentionLimit: z
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
            name: 'SnapshotRetentionLimit',
            in: 'query',
            required: false,
            description:
              '<p>The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p> <p>Default: 0 (i.e., automatic backups are disabled for this cluster).</p>',
            schema: { type: 'integer' },
          },
        }),
      SnapshotWindow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SnapshotWindow',
            in: 'query',
            required: false,
            description:
              '<p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).</p> <p>Example: <code>05:00-09:00</code> </p> <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.</p>',
            schema: { type: 'string' },
          },
        }),
      AuthToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'AuthToken',
            in: 'query',
            required: false,
            description:
              '<p> <b>Reserved parameter.</b> The password used to access a password protected server.</p> <p> <code>AuthToken</code> can be specified only on replication groups where <code>TransitEncryptionEnabled</code> is <code>true</code>.</p> <important> <p>For HIPAA compliance, you must specify <code>TransitEncryptionEnabled</code> as <code>true</code>, an <code>AuthToken</code>, and a <code>CacheSubnetGroup</code>.</p> </important> <p>Password constraints:</p> <ul> <li> <p>Must be only printable ASCII characters.</p> </li> <li> <p>Must be at least 16 characters and no more than 128 characters in length.</p> </li> <li> <p>The only permitted printable special characters are !, &amp;, #, $, ^, &lt;, &gt;, and -. Other printable special characters cannot be used in the AUTH token.</p> </li> </ul> <p>For more information, see <a href="http://redis.io/commands/AUTH">AUTH password</a> at http://redis.io/commands/AUTH.</p>',
            schema: { type: 'string' },
          },
        }),
      TransitEncryptionEnabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'TransitEncryptionEnabled',
            in: 'query',
            required: false,
            description:
              '<p>A flag that enables in-transit encryption when set to <code>true</code>.</p> <p>This parameter is valid only if the <code>Engine</code> parameter is <code>redis</code>, the <code>EngineVersion</code> parameter is <code>3.2.6</code>, <code>4.x</code> or later, and the cluster is being created in an Amazon VPC.</p> <p>If you enable in-transit encryption, you must also specify a value for <code>CacheSubnetGroup</code>.</p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p> <p>Default: <code>false</code> </p> <important> <p>For HIPAA compliance, you must specify <code>TransitEncryptionEnabled</code> as <code>true</code>, an <code>AuthToken</code>, and a <code>CacheSubnetGroup</code>.</p> </important>',
            schema: { type: 'boolean' },
          },
        }),
      AtRestEncryptionEnabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'AtRestEncryptionEnabled',
            in: 'query',
            required: false,
            description:
              '<p>A flag that enables encryption at rest when set to <code>true</code>.</p> <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code> after the replication group is created. To enable encryption at rest on a replication group you must set <code>AtRestEncryptionEnabled</code> to <code>true</code> when you create the replication group. </p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p> <p>Default: <code>false</code> </p>',
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
            description: 'The ID of the KMS key used to encrypt the disk in the cluster.',
            schema: { type: 'string' },
          },
        }),
      UserGroupIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(UserGroupIdSchema).min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'UserGroupIds',
            in: 'query',
            required: false,
            description: 'The user group to associate with the replication group.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/UserGroupId' },
              minItems: 1,
            },
          },
        }),
      LogDeliveryConfigurations: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                LogType: LogTypeSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'Refers to <a href="https://redis.io/commands/slowlog">slow-log</a> or engine-log..',
                    }),
                ).exactOptional(),
                DestinationType: DestinationTypeSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'Specify either <code>cloudwatch-logs</code> or <code>kinesis-firehose</code> as the destination type.',
                    }),
                ).exactOptional(),
                DestinationDetails: DestinationDetailsSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.',
                    }),
                ).exactOptional(),
                LogFormat: LogFormatSchema.and(
                  z.any().openapi({ description: 'Specifies either JSON or TEXT' }),
                ).exactOptional(),
                Enabled: z
                  .preprocess(
                    ((read) => (val: unknown) => {
                      const result = read.safeParse(val)
                      return result.success ? result.data : val
                    })(z.stringbool()),
                    BooleanOptionalSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specify if log delivery is enabled. Default <code>true</code>.',
                      }),
                  )
                  .exactOptional(),
              })
              .openapi({
                description: 'Specifies the destination, format and type of the logs. ',
                required: [],
              })
              .and(
                ((schema) =>
                  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                  z.any(),
                ).openapi({ xml: { name: 'LogDeliveryConfigurationRequest' } }),
              ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'LogDeliveryConfigurations',
            in: 'query',
            required: false,
            description: 'Specifies the destination, format and type of the logs.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  {
                    type: 'object',
                    properties: {
                      LogType: {
                        allOf: [
                          { $ref: '#/components/schemas/LogType' },
                          {
                            description:
                              'Refers to <a href="https://redis.io/commands/slowlog">slow-log</a> or engine-log..',
                          },
                        ],
                      },
                      DestinationType: {
                        allOf: [
                          { $ref: '#/components/schemas/DestinationType' },
                          {
                            description:
                              'Specify either <code>cloudwatch-logs</code> or <code>kinesis-firehose</code> as the destination type.',
                          },
                        ],
                      },
                      DestinationDetails: {
                        allOf: [
                          { $ref: '#/components/schemas/DestinationDetails' },
                          {
                            description:
                              'Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.',
                          },
                        ],
                      },
                      LogFormat: {
                        allOf: [
                          { $ref: '#/components/schemas/LogFormat' },
                          { description: 'Specifies either JSON or TEXT' },
                        ],
                      },
                      Enabled: {
                        allOf: [
                          { $ref: '#/components/schemas/BooleanOptional' },
                          {
                            description:
                              'Specify if log delivery is enabled. Default <code>true</code>.',
                          },
                        ],
                      },
                    },
                    description: 'Specifies the destination, format and type of the logs. ',
                  },
                  { xml: { name: 'LogDeliveryConfigurationRequest' } },
                ],
              },
            },
          },
        }),
      DataTieringEnabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'DataTieringEnabled',
            in: 'query',
            required: false,
            description:
              'Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/data-tiering.html">Data tiering</a>.',
            schema: { type: 'boolean' },
          },
        }),
      NetworkType: z
        .enum(['ipv4', 'ipv6', 'dual_stack'])
        .exactOptional()
        .openapi({
          param: {
            name: 'NetworkType',
            in: 'query',
            required: false,
            description:
              'Must be either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.',
            schema: { type: 'string', enum: ['ipv4', 'ipv6', 'dual_stack'] },
          },
        }),
      IpDiscovery: z
        .enum(['ipv4', 'ipv6'])
        .exactOptional()
        .openapi({
          param: {
            name: 'IpDiscovery',
            in: 'query',
            required: false,
            description:
              'The network type you choose when creating a replication group, either <code>ipv4</code> | <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.',
            schema: { type: 'string', enum: ['ipv4', 'ipv6'] },
          },
        }),
      TransitEncryptionMode: z
        .enum(['preferred', 'required'])
        .exactOptional()
        .openapi({
          param: {
            name: 'TransitEncryptionMode',
            in: 'query',
            required: false,
            description:
              '<p>A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.</p> <p>When setting <code>TransitEncryptionEnabled</code> to <code>true</code>, you can set your <code>TransitEncryptionMode</code> to <code>preferred</code> in the same request, to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Redis clients to use encrypted connections you can modify the value to <code>required</code> to allow encrypted connections only.</p> <p>Setting <code>TransitEncryptionMode</code> to <code>required</code> is a two-step process that requires you to first set the <code>TransitEncryptionMode</code> to <code>preferred</code>, after that you can set <code>TransitEncryptionMode</code> to <code>required</code>.</p> <p>This process will not trigger the replacement of the replication group.</p>',
            schema: { type: 'string', enum: ['preferred', 'required'] },
          },
        }),
      ClusterMode: z
        .enum(['enabled', 'disabled', 'compatible'])
        .exactOptional()
        .openapi({
          param: {
            name: 'ClusterMode',
            in: 'query',
            required: false,
            description:
              'Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Redis clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Redis clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled.',
            schema: { type: 'string', enum: ['enabled', 'disabled', 'compatible'] },
          },
        }),
      Action: z
        .literal('CreateReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateReplicationGroupResultSchema } },
    },
    480: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    482: {
      description: 'ReplicationGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: ReplicationGroupAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'InvalidUserGroupStateFault',
      content: { 'text/xml': { schema: InvalidUserGroupStateFaultSchema } },
    },
    484: {
      description: 'UserGroupNotFoundFault',
      content: { 'text/xml': { schema: UserGroupNotFoundFaultSchema } },
    },
    485: {
      description: 'InsufficientCacheClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientCacheClusterCapacityFaultSchema } },
    },
    486: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    487: {
      description: 'CacheSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSubnetGroupNotFoundFaultSchema } },
    },
    488: {
      description: 'ClusterQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: ClusterQuotaForCustomerExceededFaultSchema } },
    },
    489: {
      description: 'NodeQuotaForClusterExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForClusterExceededFaultSchema } },
    },
    490: {
      description: 'NodeQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForCustomerExceededFaultSchema } },
    },
    491: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    492: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    493: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    494: {
      description: 'NodeGroupsPerReplicationGroupQuotaExceededFault',
      content: { 'text/xml': { schema: NodeGroupsPerReplicationGroupQuotaExceededFaultSchema } },
    },
    495: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    496: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
    497: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    498: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionCreateReplicationGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateReplicationGroup',
  description:
    '<p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p> <p>This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global datastore.</p> <p>A Redis (cluster mode disabled) replication group is a collection of clusters, where one of the clusters is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas.</p> <p>A Redis cluster-mode enabled cluster is comprised of from 1 to 90 shards (API/CLI: node groups). Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed. </p> <p>The node or shard limit can be increased to a maximum of 500 per cluster if the Redis engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between 83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase. Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.Creating.html">Creating a Subnet Group</a>. For versions below 5.0.6, the limit is 250 per cluster.</p> <p>To request a limit increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Service Limits</a> and choose the limit type <b>Nodes per cluster per instance type</b>. </p> <p>When a Redis (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. If you need to increase or decrease the number of node groups (console: shards), you can avail yourself of ElastiCache for Redis\' scaling. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Scaling.html">Scaling ElastiCache for Redis Clusters</a> in the <i>ElastiCache User Guide</i>.</p> <note> <p>This operation is valid for Redis only.</p> </note>',
  operationId: 'POST_CreateReplicationGroup',
  request: {
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
        .literal('CreateReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateReplicationGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateReplicationGroupResultSchema } },
    },
    480: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    482: {
      description: 'ReplicationGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: ReplicationGroupAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'InvalidUserGroupStateFault',
      content: { 'text/xml': { schema: InvalidUserGroupStateFaultSchema } },
    },
    484: {
      description: 'UserGroupNotFoundFault',
      content: { 'text/xml': { schema: UserGroupNotFoundFaultSchema } },
    },
    485: {
      description: 'InsufficientCacheClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientCacheClusterCapacityFaultSchema } },
    },
    486: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    487: {
      description: 'CacheSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSubnetGroupNotFoundFaultSchema } },
    },
    488: {
      description: 'ClusterQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: ClusterQuotaForCustomerExceededFaultSchema } },
    },
    489: {
      description: 'NodeQuotaForClusterExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForClusterExceededFaultSchema } },
    },
    490: {
      description: 'NodeQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForCustomerExceededFaultSchema } },
    },
    491: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    492: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    493: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    494: {
      description: 'NodeGroupsPerReplicationGroupQuotaExceededFault',
      content: { 'text/xml': { schema: NodeGroupsPerReplicationGroupQuotaExceededFaultSchema } },
    },
    495: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    496: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
    497: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    498: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionCreateSnapshotRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateSnapshot',
  description:
    '<p>Creates a copy of an entire cluster or replication group at a specific moment in time.</p> <note> <p>This operation is valid for Redis only.</p> </note>',
  operationId: 'GET_CreateSnapshot',
  request: {
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
      ReplicationGroupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ReplicationGroupId',
            in: 'query',
            required: false,
            description:
              'The identifier of an existing replication group. The snapshot is created from this replication group.',
            schema: { type: 'string' },
          },
        }),
      CacheClusterId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheClusterId',
            in: 'query',
            required: false,
            description:
              'The identifier of an existing cluster. The snapshot is created from this cluster.',
            schema: { type: 'string' },
          },
        }),
      SnapshotName: z
        .string()
        .openapi({
          param: {
            name: 'SnapshotName',
            in: 'query',
            required: true,
            description: 'A name for the snapshot being created.',
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
            description: 'The ID of the KMS key used to encrypt the snapshot.',
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
            description:
              'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      Action: z
        .literal('CreateSnapshot')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateSnapshot'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateSnapshotResultSchema } },
    },
    480: {
      description: 'SnapshotAlreadyExistsFault',
      content: { 'text/xml': { schema: SnapshotAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    482: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    483: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    484: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    485: {
      description: 'SnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SnapshotQuotaExceededFaultSchema } },
    },
    486: {
      description: 'SnapshotFeatureNotSupportedFault',
      content: { 'text/xml': { schema: SnapshotFeatureNotSupportedFaultSchema } },
    },
    487: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    488: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    489: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postActionCreateSnapshotRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateSnapshot',
  description:
    '<p>Creates a copy of an entire cluster or replication group at a specific moment in time.</p> <note> <p>This operation is valid for Redis only.</p> </note>',
  operationId: 'POST_CreateSnapshot',
  request: {
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
        .literal('CreateSnapshot')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateSnapshot'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateSnapshotMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateSnapshotResultSchema } },
    },
    480: {
      description: 'SnapshotAlreadyExistsFault',
      content: { 'text/xml': { schema: SnapshotAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    482: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    483: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    484: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    485: {
      description: 'SnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SnapshotQuotaExceededFaultSchema } },
    },
    486: {
      description: 'SnapshotFeatureNotSupportedFault',
      content: { 'text/xml': { schema: SnapshotFeatureNotSupportedFaultSchema } },
    },
    487: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    488: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    489: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const getActionCreateUserRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateUser',
  description:
    'For Redis engine version 6.0 onwards: Creates a Redis user. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.',
  operationId: 'GET_CreateUser',
  request: {
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
        const spread = new Map<string, string[]>([['Type', ['AuthenticationMode']]])
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
          UserId: z
            .string()
            .regex(/[a-zA-Z][a-zA-Z0-9\-]*/)
            .min(1)
            .openapi({
              param: {
                name: 'UserId',
                in: 'query',
                required: true,
                description: 'The ID of the user.',
                schema: { type: 'string', pattern: '[a-zA-Z][a-zA-Z0-9\\-]*', minLength: 1 },
              },
            }),
          UserName: z
            .string()
            .min(1)
            .openapi({
              param: {
                name: 'UserName',
                in: 'query',
                required: true,
                description: 'The username of the user.',
                schema: { type: 'string', minLength: 1 },
              },
            }),
          Engine: z
            .string()
            .regex(/[a-zA-Z]*/)
            .openapi({
              param: {
                name: 'Engine',
                in: 'query',
                required: true,
                description: 'The current supported value is Redis. ',
                schema: { type: 'string', pattern: '[a-zA-Z]*' },
              },
            }),
          Passwords: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(StringSchema).min(1),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Passwords',
                in: 'query',
                required: false,
                description:
                  'Passwords used for this user. You can create up to two passwords for each user.',
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/String' },
                  minItems: 1,
                },
              },
            }),
          AccessString: z
            .string()
            .regex(/.*\S.*/)
            .openapi({
              param: {
                name: 'AccessString',
                in: 'query',
                required: true,
                description: 'Access permissions string used for this user.',
                schema: { type: 'string', pattern: '.*\\S.*' },
              },
            }),
          NoPasswordRequired: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'NoPasswordRequired',
                in: 'query',
                required: false,
                description: 'Indicates a password is not required for this user.',
                schema: { type: 'boolean' },
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
                description:
                  'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
                schema: {
                  type: 'array',
                  items: {
                    allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }],
                  },
                },
              },
            }),
          AuthenticationMode: z
            .object({
              Type: InputAuthenticationTypeSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'Specifies the authentication type. Possible options are IAM authentication, password and no password.',
                  }),
              ).exactOptional(),
              Passwords: PasswordListInputSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'Specifies the passwords to use for authentication if <code>Type</code> is set to <code>password</code>.',
                  }),
              ).exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'AuthenticationMode',
                in: 'query',
                required: false,
                description: 'Specifies how to authenticate the user.',
                schema: {
                  type: 'object',
                  properties: {
                    Type: {
                      allOf: [
                        { $ref: '#/components/schemas/InputAuthenticationType' },
                        {
                          description:
                            'Specifies the authentication type. Possible options are IAM authentication, password and no password.',
                        },
                      ],
                    },
                    Passwords: {
                      allOf: [
                        { $ref: '#/components/schemas/PasswordListInput' },
                        {
                          description:
                            'Specifies the passwords to use for authentication if <code>Type</code> is set to <code>password</code>.',
                        },
                      ],
                    },
                  },
                  description: 'Specifies the authentication mode to use.',
                },
              },
              description: 'Specifies the authentication mode to use.',
              required: [],
            }),
          Action: z
            .literal('CreateUser')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['CreateUser'] },
              },
            }),
          Version: z
            .literal('2015-02-02')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2015-02-02'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: UserSchema } } },
    480: {
      description: 'UserAlreadyExistsFault',
      content: { 'text/xml': { schema: UserAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'UserQuotaExceededFault',
      content: { 'text/xml': { schema: UserQuotaExceededFaultSchema } },
    },
    482: {
      description: 'DuplicateUserNameFault',
      content: { 'text/xml': { schema: DuplicateUserNameFaultSchema } },
    },
    483: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    486: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
  },
})

export const postActionCreateUserRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateUser',
  description:
    'For Redis engine version 6.0 onwards: Creates a Redis user. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.',
  operationId: 'POST_CreateUser',
  request: {
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
        .literal('CreateUser')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateUser'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateUserMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: UserSchema } } },
    480: {
      description: 'UserAlreadyExistsFault',
      content: { 'text/xml': { schema: UserAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'UserQuotaExceededFault',
      content: { 'text/xml': { schema: UserQuotaExceededFaultSchema } },
    },
    482: {
      description: 'DuplicateUserNameFault',
      content: { 'text/xml': { schema: DuplicateUserNameFaultSchema } },
    },
    483: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    486: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
  },
})

export const getActionCreateUserGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateUserGroup',
  description:
    'For Redis engine version 6.0 onwards: Creates a Redis user group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a> ',
  operationId: 'GET_CreateUserGroup',
  request: {
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
      UserGroupId: z
        .string()
        .openapi({
          param: {
            name: 'UserGroupId',
            in: 'query',
            required: true,
            description: 'The ID of the user group.',
            schema: { type: 'string' },
          },
        }),
      Engine: z
        .string()
        .regex(/[a-zA-Z]*/)
        .openapi({
          param: {
            name: 'Engine',
            in: 'query',
            required: true,
            description: 'The current supported value is Redis. ',
            schema: { type: 'string', pattern: '[a-zA-Z]*' },
          },
        }),
      UserIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(UserIdSchema).min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'UserIds',
            in: 'query',
            required: false,
            description: 'The list of user IDs that belong to the user group.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/UserId' }, minItems: 1 },
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
              'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      Action: z
        .literal('CreateUserGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateUserGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: UserGroupSchema } } },
    480: {
      description: 'UserNotFoundFault',
      content: { 'text/xml': { schema: UserNotFoundFaultSchema } },
    },
    481: {
      description: 'DuplicateUserNameFault',
      content: { 'text/xml': { schema: DuplicateUserNameFaultSchema } },
    },
    482: {
      description: 'UserGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: UserGroupAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    484: {
      description: 'DefaultUserRequired',
      content: { 'text/xml': { schema: DefaultUserRequiredSchema } },
    },
    485: {
      description: 'UserGroupQuotaExceededFault',
      content: { 'text/xml': { schema: UserGroupQuotaExceededFaultSchema } },
    },
    486: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    487: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
  },
})

export const postActionCreateUserGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateUserGroup',
  description:
    'For Redis engine version 6.0 onwards: Creates a Redis user group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a> ',
  operationId: 'POST_CreateUserGroup',
  request: {
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
        .literal('CreateUserGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateUserGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateUserGroupMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: UserGroupSchema } } },
    480: {
      description: 'UserNotFoundFault',
      content: { 'text/xml': { schema: UserNotFoundFaultSchema } },
    },
    481: {
      description: 'DuplicateUserNameFault',
      content: { 'text/xml': { schema: DuplicateUserNameFaultSchema } },
    },
    482: {
      description: 'UserGroupAlreadyExistsFault',
      content: { 'text/xml': { schema: UserGroupAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    484: {
      description: 'DefaultUserRequired',
      content: { 'text/xml': { schema: DefaultUserRequiredSchema } },
    },
    485: {
      description: 'UserGroupQuotaExceededFault',
      content: { 'text/xml': { schema: UserGroupQuotaExceededFaultSchema } },
    },
    486: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    487: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
  },
})

export const getActionDecreaseNodeGroupsInGlobalReplicationGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=DecreaseNodeGroupsInGlobalReplicationGroup',
  description: 'Decreases the number of node groups in a Global datastore',
  operationId: 'GET_DecreaseNodeGroupsInGlobalReplicationGroup',
  request: {
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
      GlobalReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'GlobalReplicationGroupId',
            in: 'query',
            required: true,
            description: 'The name of the Global datastore',
            schema: { type: 'string' },
          },
        }),
      NodeGroupCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'NodeGroupCount',
            in: 'query',
            required: true,
            description:
              'The number of node groups (shards) that results from the modification of the shard configuration',
            schema: { type: 'integer' },
          },
        }),
      GlobalNodeGroupsToRemove: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'GlobalNodeGroupId' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'GlobalNodeGroupsToRemove',
            in: 'query',
            required: false,
            description:
              'If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. GlobalNodeGroupsToRemove is a list of NodeGroupIds to remove from the cluster. ElastiCache for Redis will attempt to remove all node groups listed by GlobalNodeGroupsToRemove from the cluster. ',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'GlobalNodeGroupId' } },
                ],
              },
            },
          },
        }),
      GlobalNodeGroupsToRetain: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'GlobalNodeGroupId' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'GlobalNodeGroupsToRetain',
            in: 'query',
            required: false,
            description:
              'If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. GlobalNodeGroupsToRetain is a list of NodeGroupIds to retain from the cluster. ElastiCache for Redis will attempt to retain all node groups listed by GlobalNodeGroupsToRetain from the cluster. ',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'GlobalNodeGroupId' } },
                ],
              },
            },
          },
        }),
      ApplyImmediately: z
        .stringbool()
        .openapi({
          param: {
            name: 'ApplyImmediately',
            in: 'query',
            required: true,
            description:
              'Indicates that the shard reconfiguration process begins immediately. At present, the only permitted value for this parameter is true. ',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DecreaseNodeGroupsInGlobalReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DecreaseNodeGroupsInGlobalReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DecreaseNodeGroupsInGlobalReplicationGroupResultSchema } },
    },
    480: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDecreaseNodeGroupsInGlobalReplicationGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=DecreaseNodeGroupsInGlobalReplicationGroup',
  description: 'Decreases the number of node groups in a Global datastore',
  operationId: 'POST_DecreaseNodeGroupsInGlobalReplicationGroup',
  request: {
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
        .literal('DecreaseNodeGroupsInGlobalReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DecreaseNodeGroupsInGlobalReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: DecreaseNodeGroupsInGlobalReplicationGroupMessageSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DecreaseNodeGroupsInGlobalReplicationGroupResultSchema } },
    },
    480: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDecreaseReplicaCountRoute = createRoute({
  method: 'get',
  path: '/#Action=DecreaseReplicaCount',
  description:
    'Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.',
  operationId: 'GET_DecreaseReplicaCount',
  request: {
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
      ReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'ReplicationGroupId',
            in: 'query',
            required: true,
            description:
              'The id of the replication group from which you want to remove replica nodes.',
            schema: { type: 'string' },
          },
        }),
      NewReplicaCount: z
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
            name: 'NewReplicaCount',
            in: 'query',
            required: false,
            description:
              "<p>The number of read replica nodes you want at the completion of this operation. For Redis (cluster mode disabled) replication groups, this is the number of replica nodes in the replication group. For Redis (cluster mode enabled) replication groups, this is the number of replica nodes in each of the replication group's node groups.</p> <p>The minimum number of replicas in a shard or replication group is:</p> <ul> <li> <p>Redis (cluster mode disabled)</p> <ul> <li> <p>If Multi-AZ is enabled: 1</p> </li> <li> <p>If Multi-AZ is not enabled: 0</p> </li> </ul> </li> <li> <p>Redis (cluster mode enabled): 0 (though you will not be able to failover to a replica if your primary node fails)</p> </li> </ul>",
            schema: { type: 'integer' },
          },
        }),
      ReplicaConfiguration: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                NodeGroupId: AllowedNodeGroupIdSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        "The 4-digit id for the node group you are configuring. For Redis (cluster mode disabled) replication groups, the node group id is always 0001. To find a Redis (cluster mode enabled)'s node group's (shard's) id, see <a href=\"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/shard-find-id.html\">Finding a Shard's Id</a>.",
                    }),
                ),
                NewReplicaCount: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    IntegerSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The number of replicas you want in this node group at the end of this operation. The maximum value for <code>NewReplicaCount</code> is 5. The minimum value depends upon the type of Redis replication group you are working with.</p> <p>The minimum number of replicas in a shard or replication group is:</p> <ul> <li> <p>Redis (cluster mode disabled)</p> <ul> <li> <p>If Multi-AZ: 1</p> </li> <li> <p>If Multi-AZ: 0</p> </li> </ul> </li> <li> <p>Redis (cluster mode enabled): 0 (though you will not be able to failover to a replica if your primary node fails)</p> </li> </ul>',
                      }),
                  ),
                PreferredAvailabilityZones: PreferredAvailabilityZoneListSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        "A list of <code>PreferredAvailabilityZone</code> strings that specify which availability zones the replication group's nodes are to be in. The nummber of <code>PreferredAvailabilityZone</code> values must equal the value of <code>NewReplicaCount</code> plus 1 to account for the primary node. If this member of <code>ReplicaConfiguration</code> is omitted, ElastiCache for Redis selects the availability zone for each of the replicas.",
                    }),
                ).exactOptional(),
                PreferredOutpostArns: PreferredOutpostArnListSchema.and(
                  z
                    .any()
                    .openapi({
                      description: 'The outpost ARNs in which the cache cluster is created.',
                    }),
                ).exactOptional(),
              })
              .openapi({
                required: ['NodeGroupId', 'NewReplicaCount'],
                description:
                  'Node group (shard) configuration options when adding or removing replicas. Each node group (shard) configuration has the following members: NodeGroupId, NewReplicaCount, and PreferredAvailabilityZones. ',
              })
              .and(
                ((schema) =>
                  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                  z.any(),
                ).openapi({ xml: { name: 'ConfigureShard' } }),
              ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ReplicaConfiguration',
            in: 'query',
            required: false,
            description:
              'A list of <code>ConfigureShard</code> objects that can be used to configure each shard in a Redis (cluster mode enabled) replication group. The <code>ConfigureShard</code> has three members: <code>NewReplicaCount</code>, <code>NodeGroupId</code>, and <code>PreferredAvailabilityZones</code>.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  {
                    type: 'object',
                    required: ['NodeGroupId', 'NewReplicaCount'],
                    properties: {
                      NodeGroupId: {
                        allOf: [
                          { $ref: '#/components/schemas/AllowedNodeGroupId' },
                          {
                            description:
                              "The 4-digit id for the node group you are configuring. For Redis (cluster mode disabled) replication groups, the node group id is always 0001. To find a Redis (cluster mode enabled)'s node group's (shard's) id, see <a href=\"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/shard-find-id.html\">Finding a Shard's Id</a>.",
                          },
                        ],
                      },
                      NewReplicaCount: {
                        allOf: [
                          { $ref: '#/components/schemas/Integer' },
                          {
                            description:
                              '<p>The number of replicas you want in this node group at the end of this operation. The maximum value for <code>NewReplicaCount</code> is 5. The minimum value depends upon the type of Redis replication group you are working with.</p> <p>The minimum number of replicas in a shard or replication group is:</p> <ul> <li> <p>Redis (cluster mode disabled)</p> <ul> <li> <p>If Multi-AZ: 1</p> </li> <li> <p>If Multi-AZ: 0</p> </li> </ul> </li> <li> <p>Redis (cluster mode enabled): 0 (though you will not be able to failover to a replica if your primary node fails)</p> </li> </ul>',
                          },
                        ],
                      },
                      PreferredAvailabilityZones: {
                        allOf: [
                          { $ref: '#/components/schemas/PreferredAvailabilityZoneList' },
                          {
                            description:
                              "A list of <code>PreferredAvailabilityZone</code> strings that specify which availability zones the replication group's nodes are to be in. The nummber of <code>PreferredAvailabilityZone</code> values must equal the value of <code>NewReplicaCount</code> plus 1 to account for the primary node. If this member of <code>ReplicaConfiguration</code> is omitted, ElastiCache for Redis selects the availability zone for each of the replicas.",
                          },
                        ],
                      },
                      PreferredOutpostArns: {
                        allOf: [
                          { $ref: '#/components/schemas/PreferredOutpostArnList' },
                          {
                            description: 'The outpost ARNs in which the cache cluster is created.',
                          },
                        ],
                      },
                    },
                    description:
                      'Node group (shard) configuration options when adding or removing replicas. Each node group (shard) configuration has the following members: NodeGroupId, NewReplicaCount, and PreferredAvailabilityZones. ',
                  },
                  { xml: { name: 'ConfigureShard' } },
                ],
              },
            },
          },
        }),
      ReplicasToRemove: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ReplicasToRemove',
            in: 'query',
            required: false,
            description:
              'A list of the node ids to remove from the replication group or node group (shard).',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
      ApplyImmediately: z
        .stringbool()
        .openapi({
          param: {
            name: 'ApplyImmediately',
            in: 'query',
            required: true,
            description:
              'If <code>True</code>, the number of replica nodes is decreased immediately. <code>ApplyImmediately=False</code> is not currently supported.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DecreaseReplicaCount')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DecreaseReplicaCount'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DecreaseReplicaCountResultSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    483: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    484: {
      description: 'InsufficientCacheClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientCacheClusterCapacityFaultSchema } },
    },
    485: {
      description: 'ClusterQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: ClusterQuotaForCustomerExceededFaultSchema } },
    },
    486: {
      description: 'NodeGroupsPerReplicationGroupQuotaExceededFault',
      content: { 'text/xml': { schema: NodeGroupsPerReplicationGroupQuotaExceededFaultSchema } },
    },
    487: {
      description: 'NodeQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForCustomerExceededFaultSchema } },
    },
    488: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    489: {
      description: 'NoOperationFault',
      content: { 'text/xml': { schema: NoOperationFaultSchema } },
    },
    490: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    491: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDecreaseReplicaCountRoute = createRoute({
  method: 'post',
  path: '/#Action=DecreaseReplicaCount',
  description:
    'Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.',
  operationId: 'POST_DecreaseReplicaCount',
  request: {
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
        .literal('DecreaseReplicaCount')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DecreaseReplicaCount'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DecreaseReplicaCountMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DecreaseReplicaCountResultSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    483: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    484: {
      description: 'InsufficientCacheClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientCacheClusterCapacityFaultSchema } },
    },
    485: {
      description: 'ClusterQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: ClusterQuotaForCustomerExceededFaultSchema } },
    },
    486: {
      description: 'NodeGroupsPerReplicationGroupQuotaExceededFault',
      content: { 'text/xml': { schema: NodeGroupsPerReplicationGroupQuotaExceededFaultSchema } },
    },
    487: {
      description: 'NodeQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForCustomerExceededFaultSchema } },
    },
    488: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    489: {
      description: 'NoOperationFault',
      content: { 'text/xml': { schema: NoOperationFaultSchema } },
    },
    490: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    491: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDeleteCacheClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteCacheCluster',
  description:
    '<p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>',
  operationId: 'GET_DeleteCacheCluster',
  request: {
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
      CacheClusterId: z
        .string()
        .openapi({
          param: {
            name: 'CacheClusterId',
            in: 'query',
            required: true,
            description:
              'The cluster identifier for the cluster to be deleted. This parameter is not case sensitive.',
            schema: { type: 'string' },
          },
        }),
      FinalSnapshotIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'FinalSnapshotIdentifier',
            in: 'query',
            required: false,
            description:
              'The user-supplied name of a final cluster snapshot. This is the unique name that identifies the snapshot. ElastiCache creates the snapshot, and then deletes the cluster immediately afterward.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteCacheCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteCacheCluster'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteCacheClusterResultSchema } },
    },
    480: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    482: {
      description: 'SnapshotAlreadyExistsFault',
      content: { 'text/xml': { schema: SnapshotAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'SnapshotFeatureNotSupportedFault',
      content: { 'text/xml': { schema: SnapshotFeatureNotSupportedFaultSchema } },
    },
    484: {
      description: 'SnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SnapshotQuotaExceededFaultSchema } },
    },
    485: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDeleteCacheClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteCacheCluster',
  description:
    '<p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>',
  operationId: 'POST_DeleteCacheCluster',
  request: {
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
        .literal('DeleteCacheCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteCacheCluster'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteCacheClusterMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteCacheClusterResultSchema } },
    },
    480: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    482: {
      description: 'SnapshotAlreadyExistsFault',
      content: { 'text/xml': { schema: SnapshotAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'SnapshotFeatureNotSupportedFault',
      content: { 'text/xml': { schema: SnapshotFeatureNotSupportedFaultSchema } },
    },
    484: {
      description: 'SnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SnapshotQuotaExceededFaultSchema } },
    },
    485: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDeleteCacheParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteCacheParameterGroup',
  description:
    'Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.',
  operationId: 'GET_DeleteCacheParameterGroup',
  request: {
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
      CacheParameterGroupName: z
        .string()
        .openapi({
          param: {
            name: 'CacheParameterGroupName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the cache parameter group to delete.</p> <note> <p>The specified cache security group must not be associated with any clusters.</p> </note>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteCacheParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteCacheParameterGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidCacheParameterGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheParameterGroupStateFaultSchema } },
    },
    481: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDeleteCacheParameterGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteCacheParameterGroup',
  description:
    'Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.',
  operationId: 'POST_DeleteCacheParameterGroup',
  request: {
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
        .literal('DeleteCacheParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteCacheParameterGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteCacheParameterGroupMessageSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidCacheParameterGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheParameterGroupStateFaultSchema } },
    },
    481: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDeleteCacheSecurityGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteCacheSecurityGroup',
  description:
    '<p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>',
  operationId: 'GET_DeleteCacheSecurityGroup',
  request: {
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
      CacheSecurityGroupName: z
        .string()
        .openapi({
          param: {
            name: 'CacheSecurityGroupName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the cache security group to delete.</p> <note> <p>You cannot delete the default security group.</p> </note>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteCacheSecurityGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteCacheSecurityGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidCacheSecurityGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheSecurityGroupStateFaultSchema } },
    },
    481: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDeleteCacheSecurityGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteCacheSecurityGroup',
  description:
    '<p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>',
  operationId: 'POST_DeleteCacheSecurityGroup',
  request: {
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
        .literal('DeleteCacheSecurityGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteCacheSecurityGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteCacheSecurityGroupMessageSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidCacheSecurityGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheSecurityGroupStateFaultSchema } },
    },
    481: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDeleteCacheSubnetGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteCacheSubnetGroup',
  description:
    '<p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>',
  operationId: 'GET_DeleteCacheSubnetGroup',
  request: {
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
      CacheSubnetGroupName: z
        .string()
        .openapi({
          param: {
            name: 'CacheSubnetGroupName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the cache subnet group to delete.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteCacheSubnetGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteCacheSubnetGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'CacheSubnetGroupInUse',
      content: { 'text/xml': { schema: CacheSubnetGroupInUseSchema } },
    },
    481: {
      description: 'CacheSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSubnetGroupNotFoundFaultSchema } },
    },
  },
})

export const postActionDeleteCacheSubnetGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteCacheSubnetGroup',
  description:
    '<p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>',
  operationId: 'POST_DeleteCacheSubnetGroup',
  request: {
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
        .literal('DeleteCacheSubnetGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteCacheSubnetGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteCacheSubnetGroupMessageSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'CacheSubnetGroupInUse',
      content: { 'text/xml': { schema: CacheSubnetGroupInUseSchema } },
    },
    481: {
      description: 'CacheSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSubnetGroupNotFoundFaultSchema } },
    },
  },
})

export const getActionDeleteGlobalReplicationGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteGlobalReplicationGroup',
  description:
    '<p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>',
  operationId: 'GET_DeleteGlobalReplicationGroup',
  request: {
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
      GlobalReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'GlobalReplicationGroupId',
            in: 'query',
            required: true,
            description: 'The name of the Global datastore',
            schema: { type: 'string' },
          },
        }),
      RetainPrimaryReplicationGroup: z
        .stringbool()
        .openapi({
          param: {
            name: 'RetainPrimaryReplicationGroup',
            in: 'query',
            required: true,
            description:
              'The primary replication group is retained as a standalone replication group. ',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DeleteGlobalReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteGlobalReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteGlobalReplicationGroupResultSchema } },
    },
    480: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postActionDeleteGlobalReplicationGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteGlobalReplicationGroup',
  description:
    '<p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>',
  operationId: 'POST_DeleteGlobalReplicationGroup',
  request: {
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
        .literal('DeleteGlobalReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteGlobalReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteGlobalReplicationGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteGlobalReplicationGroupResultSchema } },
    },
    480: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const getActionDeleteReplicationGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteReplicationGroup',
  description:
    '<p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>',
  operationId: 'GET_DeleteReplicationGroup',
  request: {
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
      ReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'ReplicationGroupId',
            in: 'query',
            required: true,
            description:
              'The identifier for the cluster to be deleted. This parameter is not case sensitive.',
            schema: { type: 'string' },
          },
        }),
      RetainPrimaryCluster: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'RetainPrimaryCluster',
            in: 'query',
            required: false,
            description:
              'If set to <code>true</code>, all of the read replicas are deleted, but the primary node is retained.',
            schema: { type: 'boolean' },
          },
        }),
      FinalSnapshotIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'FinalSnapshotIdentifier',
            in: 'query',
            required: false,
            description:
              'The name of a final node group (shard) snapshot. ElastiCache creates the snapshot from the primary node in the cluster, rather than one of the replicas; this is to ensure that it captures the freshest data. After the final snapshot is taken, the replication group is immediately deleted.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteReplicationGroupResultSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'SnapshotAlreadyExistsFault',
      content: { 'text/xml': { schema: SnapshotAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'SnapshotFeatureNotSupportedFault',
      content: { 'text/xml': { schema: SnapshotFeatureNotSupportedFaultSchema } },
    },
    484: {
      description: 'SnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SnapshotQuotaExceededFaultSchema } },
    },
    485: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDeleteReplicationGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteReplicationGroup',
  description:
    '<p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>',
  operationId: 'POST_DeleteReplicationGroup',
  request: {
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
        .literal('DeleteReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteReplicationGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteReplicationGroupResultSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'SnapshotAlreadyExistsFault',
      content: { 'text/xml': { schema: SnapshotAlreadyExistsFaultSchema } },
    },
    483: {
      description: 'SnapshotFeatureNotSupportedFault',
      content: { 'text/xml': { schema: SnapshotFeatureNotSupportedFaultSchema } },
    },
    484: {
      description: 'SnapshotQuotaExceededFault',
      content: { 'text/xml': { schema: SnapshotQuotaExceededFaultSchema } },
    },
    485: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDeleteSnapshotRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteSnapshot',
  description:
    '<p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>',
  operationId: 'GET_DeleteSnapshot',
  request: {
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
      SnapshotName: z
        .string()
        .openapi({
          param: {
            name: 'SnapshotName',
            in: 'query',
            required: true,
            description: 'The name of the snapshot to be deleted.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteSnapshot')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteSnapshot'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteSnapshotResultSchema } },
    },
    480: {
      description: 'SnapshotNotFoundFault',
      content: { 'text/xml': { schema: SnapshotNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidSnapshotStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDeleteSnapshotRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteSnapshot',
  description:
    '<p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>',
  operationId: 'POST_DeleteSnapshot',
  request: {
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
        .literal('DeleteSnapshot')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteSnapshot'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteSnapshotMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeleteSnapshotResultSchema } },
    },
    480: {
      description: 'SnapshotNotFoundFault',
      content: { 'text/xml': { schema: SnapshotNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidSnapshotStateFault',
      content: { 'text/xml': { schema: InvalidSnapshotStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDeleteUserRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteUser',
  description:
    'For Redis engine version 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. ',
  operationId: 'GET_DeleteUser',
  request: {
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
      UserId: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z0-9\-]*/)
        .min(1)
        .openapi({
          param: {
            name: 'UserId',
            in: 'query',
            required: true,
            description: 'The ID of the user.',
            schema: { type: 'string', pattern: '[a-zA-Z][a-zA-Z0-9\\-]*', minLength: 1 },
          },
        }),
      Action: z
        .literal('DeleteUser')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteUser'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: UserSchema } } },
    480: {
      description: 'InvalidUserStateFault',
      content: { 'text/xml': { schema: InvalidUserStateFaultSchema } },
    },
    481: {
      description: 'UserNotFoundFault',
      content: { 'text/xml': { schema: UserNotFoundFaultSchema } },
    },
    482: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'DefaultUserAssociatedToUserGroupFault',
      content: { 'text/xml': { schema: DefaultUserAssociatedToUserGroupFaultSchema } },
    },
  },
})

export const postActionDeleteUserRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteUser',
  description:
    'For Redis engine version 6.0 onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. ',
  operationId: 'POST_DeleteUser',
  request: {
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
        .literal('DeleteUser')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteUser'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteUserMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: UserSchema } } },
    480: {
      description: 'InvalidUserStateFault',
      content: { 'text/xml': { schema: InvalidUserStateFaultSchema } },
    },
    481: {
      description: 'UserNotFoundFault',
      content: { 'text/xml': { schema: UserNotFoundFaultSchema } },
    },
    482: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'DefaultUserAssociatedToUserGroupFault',
      content: { 'text/xml': { schema: DefaultUserAssociatedToUserGroupFaultSchema } },
    },
  },
})

export const getActionDeleteUserGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteUserGroup',
  description:
    'For Redis engine version 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. ',
  operationId: 'GET_DeleteUserGroup',
  request: {
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
      UserGroupId: z
        .string()
        .openapi({
          param: {
            name: 'UserGroupId',
            in: 'query',
            required: true,
            description: 'The ID of the user group.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeleteUserGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteUserGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: UserGroupSchema } } },
    480: {
      description: 'UserGroupNotFoundFault',
      content: { 'text/xml': { schema: UserGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidUserGroupStateFault',
      content: { 'text/xml': { schema: InvalidUserGroupStateFaultSchema } },
    },
    482: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postActionDeleteUserGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteUserGroup',
  description:
    'For Redis engine version 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. ',
  operationId: 'POST_DeleteUserGroup',
  request: {
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
        .literal('DeleteUserGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteUserGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteUserGroupMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: UserGroupSchema } } },
    480: {
      description: 'UserGroupNotFoundFault',
      content: { 'text/xml': { schema: UserGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidUserGroupStateFault',
      content: { 'text/xml': { schema: InvalidUserGroupStateFaultSchema } },
    },
    482: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const getActionDescribeCacheClustersRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeCacheClusters',
  description:
    '<p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>',
  operationId: 'GET_DescribeCacheClusters',
  request: {
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
      CacheClusterId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheClusterId',
            in: 'query',
            required: false,
            description:
              "The user-supplied cluster identifier. If this parameter is specified, only information about that specific cluster is returned. This parameter isn't case sensitive.",
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
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
              'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      ShowCacheNodeInfo: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'ShowCacheNodeInfo',
            in: 'query',
            required: false,
            description:
              'An optional flag that can be included in the <code>DescribeCacheCluster</code> request to retrieve information about the individual cache nodes.',
            schema: { type: 'boolean' },
          },
        }),
      ShowCacheClustersNotInReplicationGroups: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'ShowCacheClustersNotInReplicationGroups',
            in: 'query',
            required: false,
            description:
              'An optional flag that can be included in the <code>DescribeCacheCluster</code> request to show only nodes (API/CLI: clusters) that are not members of a replication group. In practice, this mean Memcached and single node Redis clusters.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DescribeCacheClusters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeCacheClusters'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: CacheClusterMessageSchema } } },
    480: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDescribeCacheClustersRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeCacheClusters',
  description:
    '<p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>',
  operationId: 'POST_DescribeCacheClusters',
  request: {
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
        .literal('DescribeCacheClusters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeCacheClusters'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeCacheClustersMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: CacheClusterMessageSchema } } },
    480: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDescribeCacheEngineVersionsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeCacheEngineVersions',
  description: 'Returns a list of the available cache engines and their versions.',
  operationId: 'GET_DescribeCacheEngineVersions',
  request: {
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
            description:
              'The cache engine to return. Valid values: <code>memcached</code> | <code>redis</code> ',
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
              '<p>The cache engine version to return.</p> <p>Example: <code>1.4.14</code> </p>',
            schema: { type: 'string' },
          },
        }),
      CacheParameterGroupFamily: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheParameterGroupFamily',
            in: 'query',
            required: false,
            description:
              '<p>The name of a specific cache parameter group family to return details for.</p> <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> | <code>memcached1.6</code> | <code>redis2.6</code> | <code>redis2.8</code> | <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> | <code>redis6.x</code> | <code>redis6.2</code> | <code>redis7</code> </p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>',
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
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
              'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
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
              'If <code>true</code>, specifies that only the default version of the specified engine or engine and major version combination is to be returned.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DescribeCacheEngineVersions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeCacheEngineVersions'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CacheEngineVersionMessageSchema } },
    },
  },
})

export const postActionDescribeCacheEngineVersionsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeCacheEngineVersions',
  description: 'Returns a list of the available cache engines and their versions.',
  operationId: 'POST_DescribeCacheEngineVersions',
  request: {
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
        .literal('DescribeCacheEngineVersions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeCacheEngineVersions'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeCacheEngineVersionsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CacheEngineVersionMessageSchema } },
    },
  },
})

export const getActionDescribeCacheParameterGroupsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeCacheParameterGroups',
  description:
    'Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.',
  operationId: 'GET_DescribeCacheParameterGroups',
  request: {
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
      CacheParameterGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheParameterGroupName',
            in: 'query',
            required: false,
            description: 'The name of a specific cache parameter group to return details for.',
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
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
              'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeCacheParameterGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeCacheParameterGroups'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CacheParameterGroupsMessageSchema } },
    },
    480: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDescribeCacheParameterGroupsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeCacheParameterGroups',
  description:
    'Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.',
  operationId: 'POST_DescribeCacheParameterGroups',
  request: {
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
        .literal('DescribeCacheParameterGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeCacheParameterGroups'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeCacheParameterGroupsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CacheParameterGroupsMessageSchema } },
    },
    480: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDescribeCacheParametersRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeCacheParameters',
  description: 'Returns the detailed parameter list for a particular cache parameter group.',
  operationId: 'GET_DescribeCacheParameters',
  request: {
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
      CacheParameterGroupName: z
        .string()
        .openapi({
          param: {
            name: 'CacheParameterGroupName',
            in: 'query',
            required: true,
            description: 'The name of a specific cache parameter group to return details for.',
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
              '<p>The parameter types to return.</p> <p>Valid values: <code>user</code> | <code>system</code> | <code>engine-default</code> </p>',
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
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
              'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeCacheParameters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeCacheParameters'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CacheParameterGroupDetailsSchema } },
    },
    480: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDescribeCacheParametersRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeCacheParameters',
  description: 'Returns the detailed parameter list for a particular cache parameter group.',
  operationId: 'POST_DescribeCacheParameters',
  request: {
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
        .literal('DescribeCacheParameters')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeCacheParameters'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeCacheParametersMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CacheParameterGroupDetailsSchema } },
    },
    480: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDescribeCacheSecurityGroupsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeCacheSecurityGroups',
  description:
    'Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup ',
  operationId: 'GET_DescribeCacheSecurityGroups',
  request: {
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
      CacheSecurityGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheSecurityGroupName',
            in: 'query',
            required: false,
            description: 'The name of the cache security group to return details for.',
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
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
              'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeCacheSecurityGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeCacheSecurityGroups'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CacheSecurityGroupMessageSchema } },
    },
    480: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDescribeCacheSecurityGroupsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeCacheSecurityGroups',
  description:
    'Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup ',
  operationId: 'POST_DescribeCacheSecurityGroups',
  request: {
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
        .literal('DescribeCacheSecurityGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeCacheSecurityGroups'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeCacheSecurityGroupsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CacheSecurityGroupMessageSchema } },
    },
    480: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDescribeCacheSubnetGroupsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeCacheSubnetGroups',
  description:
    'Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default. ',
  operationId: 'GET_DescribeCacheSubnetGroups',
  request: {
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
      CacheSubnetGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheSubnetGroupName',
            in: 'query',
            required: false,
            description: 'The name of the cache subnet group to return details for.',
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
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
              'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeCacheSubnetGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeCacheSubnetGroups'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CacheSubnetGroupMessageSchema } },
    },
    480: {
      description: 'CacheSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSubnetGroupNotFoundFaultSchema } },
    },
  },
})

export const postActionDescribeCacheSubnetGroupsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeCacheSubnetGroups',
  description:
    'Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default. ',
  operationId: 'POST_DescribeCacheSubnetGroups',
  request: {
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
        .literal('DescribeCacheSubnetGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeCacheSubnetGroups'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeCacheSubnetGroupsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CacheSubnetGroupMessageSchema } },
    },
    480: {
      description: 'CacheSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSubnetGroupNotFoundFaultSchema } },
    },
  },
})

export const getActionDescribeEngineDefaultParametersRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeEngineDefaultParameters',
  description:
    'Returns the default engine and system parameter information for the specified cache engine.',
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
      CacheParameterGroupFamily: z
        .string()
        .openapi({
          param: {
            name: 'CacheParameterGroupFamily',
            in: 'query',
            required: true,
            description:
              '<p>The name of the cache parameter group family.</p> <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> | <code>memcached1.6</code> | <code>redis2.6</code> | <code>redis2.8</code> | <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> | <code>redis6.x</code> | <code>redis6.2</code> | <code>redis7</code> </p>',
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
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
              'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
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
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeEngineDefaultParametersResultSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDescribeEngineDefaultParametersRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeEngineDefaultParameters',
  description:
    'Returns the default engine and system parameter information for the specified cache engine.',
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
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
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
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDescribeEventsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeEvents',
  description:
    "<p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>",
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
              'The identifier of the event source for which events are returned. If not specified, all sources are included in the response.',
            schema: { type: 'string' },
          },
        }),
      SourceType: z
        .enum([
          'cache-cluster',
          'cache-parameter-group',
          'cache-security-group',
          'cache-subnet-group',
          'replication-group',
          'user',
          'user-group',
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
                'cache-cluster',
                'cache-parameter-group',
                'cache-security-group',
                'cache-subnet-group',
                'replication-group',
                'user',
                'user-group',
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
              '<p>The beginning of the time interval to retrieve events for, specified in ISO 8601 format.</p> <p> <b>Example:</b> 2017-03-30T07:03:49.555Z</p>',
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
              '<p>The end of the time interval for which to retrieve events, specified in ISO 8601 format.</p> <p> <b>Example:</b> 2017-03-30T07:03:49.555Z</p>',
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
            description: 'The number of minutes worth of events to retrieve.',
            schema: { type: 'integer' },
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
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
              'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
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
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: EventsMessageSchema } } },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDescribeEventsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeEvents',
  description:
    "<p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>",
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
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeEventsMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: EventsMessageSchema } } },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDescribeGlobalReplicationGroupsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeGlobalReplicationGroups',
  description:
    'Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. ',
  operationId: 'GET_DescribeGlobalReplicationGroups',
  request: {
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
      GlobalReplicationGroupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'GlobalReplicationGroupId',
            in: 'query',
            required: false,
            description: 'The name of the Global datastore',
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
              'The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. ',
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
              'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. ',
            schema: { type: 'string' },
          },
        }),
      ShowMemberInfo: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'ShowMemberInfo',
            in: 'query',
            required: false,
            description: 'Returns the list of members that comprise the Global datastore.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DescribeGlobalReplicationGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeGlobalReplicationGroups'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeGlobalReplicationGroupsResultSchema } },
    },
    480: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDescribeGlobalReplicationGroupsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeGlobalReplicationGroups',
  description:
    'Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. ',
  operationId: 'POST_DescribeGlobalReplicationGroups',
  request: {
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
        .literal('DescribeGlobalReplicationGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeGlobalReplicationGroups'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeGlobalReplicationGroupsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeGlobalReplicationGroupsResultSchema } },
    },
    480: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDescribeReplicationGroupsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeReplicationGroups',
  description:
    '<p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>',
  operationId: 'GET_DescribeReplicationGroups',
  request: {
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
      ReplicationGroupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ReplicationGroupId',
            in: 'query',
            required: false,
            description:
              '<p>The identifier for the replication group to be described. This parameter is not case sensitive.</p> <p>If you do not specify this parameter, information about all replication groups is returned.</p>',
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
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
              'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeReplicationGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeReplicationGroups'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ReplicationGroupMessageSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDescribeReplicationGroupsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeReplicationGroups',
  description:
    '<p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>',
  operationId: 'POST_DescribeReplicationGroups',
  request: {
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
        .literal('DescribeReplicationGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeReplicationGroups'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeReplicationGroupsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ReplicationGroupMessageSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDescribeReservedCacheNodesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeReservedCacheNodes',
  description:
    'Returns information about reserved cache nodes for this account, or about a specified reserved cache node.',
  operationId: 'GET_DescribeReservedCacheNodes',
  request: {
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
      ReservedCacheNodeId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ReservedCacheNodeId',
            in: 'query',
            required: false,
            description:
              'The reserved cache node identifier filter value. Use this parameter to show only the reservation that matches the specified reservation ID.',
            schema: { type: 'string' },
          },
        }),
      ReservedCacheNodesOfferingId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ReservedCacheNodesOfferingId',
            in: 'query',
            required: false,
            description:
              'The offering identifier filter value. Use this parameter to show only purchased reservations matching the specified offering identifier.',
            schema: { type: 'string' },
          },
        }),
      CacheNodeType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheNodeType',
            in: 'query',
            required: false,
            description:
              '<p>The cache node type filter value. Use this parameter to show only those reservations matching the specified cache node type.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      Duration: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Duration',
            in: 'query',
            required: false,
            description:
              '<p>The duration filter value, specified in years or seconds. Use this parameter to show only reservations for this duration.</p> <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code> </p>',
            schema: { type: 'string' },
          },
        }),
      ProductDescription: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ProductDescription',
            in: 'query',
            required: false,
            description:
              'The product description filter value. Use this parameter to show only those reservations matching the specified product description.',
            schema: { type: 'string' },
          },
        }),
      OfferingType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'OfferingType',
            in: 'query',
            required: false,
            description:
              '<p>The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.</p> <p>Valid values: <code>"Light Utilization"|"Medium Utilization"|"Heavy Utilization"|"All Upfront"|"Partial Upfront"| "No Upfront"</code> </p>',
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
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
              'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeReservedCacheNodes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeReservedCacheNodes'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ReservedCacheNodeMessageSchema } },
    },
    480: {
      description: 'ReservedCacheNodeNotFoundFault',
      content: { 'text/xml': { schema: ReservedCacheNodeNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDescribeReservedCacheNodesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeReservedCacheNodes',
  description:
    'Returns information about reserved cache nodes for this account, or about a specified reserved cache node.',
  operationId: 'POST_DescribeReservedCacheNodes',
  request: {
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
        .literal('DescribeReservedCacheNodes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeReservedCacheNodes'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeReservedCacheNodesMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ReservedCacheNodeMessageSchema } },
    },
    480: {
      description: 'ReservedCacheNodeNotFoundFault',
      content: { 'text/xml': { schema: ReservedCacheNodeNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDescribeReservedCacheNodesOfferingsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeReservedCacheNodesOfferings',
  description: 'Lists available reserved cache node offerings.',
  operationId: 'GET_DescribeReservedCacheNodesOfferings',
  request: {
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
      ReservedCacheNodesOfferingId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ReservedCacheNodesOfferingId',
            in: 'query',
            required: false,
            description:
              '<p>The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.</p> <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code> </p>',
            schema: { type: 'string' },
          },
        }),
      CacheNodeType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheNodeType',
            in: 'query',
            required: false,
            description:
              '<p>The cache node type filter value. Use this parameter to show only the available offerings matching the specified cache node type.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): <code>cache.m6g.large</code>, <code>cache.m6g.xlarge</code>, <code>cache.m6g.2xlarge</code>, <code>cache.m6g.4xlarge</code>, <code>cache.m6g.8xlarge</code>, <code>cache.m6g.12xlarge</code>, <code>cache.m6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): <code>cache.t4g.micro</code>, <code>cache.t4g.small</code>, <code>cache.t4g.medium</code> </p> <p> <b>T3 node types:</b> <code>cache.t3.micro</code>, <code>cache.t3.small</code>, <code>cache.t3.medium</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p> <p> <code>cache.r6g.large</code>, <code>cache.r6g.xlarge</code>, <code>cache.r6g.2xlarge</code>, <code>cache.r6g.4xlarge</code>, <code>cache.r6g.8xlarge</code>, <code>cache.r6g.12xlarge</code>, <code>cache.r6g.16xlarge</code> </p> <note> <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a> </p> </note> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      Duration: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Duration',
            in: 'query',
            required: false,
            description:
              '<p>Duration filter value, specified in years or seconds. Use this parameter to show only reservations for a given duration.</p> <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code> </p>',
            schema: { type: 'string' },
          },
        }),
      ProductDescription: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ProductDescription',
            in: 'query',
            required: false,
            description:
              'The product description filter value. Use this parameter to show only the available offerings matching the specified product description.',
            schema: { type: 'string' },
          },
        }),
      OfferingType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'OfferingType',
            in: 'query',
            required: false,
            description:
              '<p>The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.</p> <p>Valid Values: <code>"Light Utilization"|"Medium Utilization"|"Heavy Utilization" |"All Upfront"|"Partial Upfront"| "No Upfront"</code> </p>',
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>',
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
              'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeReservedCacheNodesOfferings')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeReservedCacheNodesOfferings'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ReservedCacheNodesOfferingMessageSchema } },
    },
    480: {
      description: 'ReservedCacheNodesOfferingNotFoundFault',
      content: { 'text/xml': { schema: ReservedCacheNodesOfferingNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDescribeReservedCacheNodesOfferingsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeReservedCacheNodesOfferings',
  description: 'Lists available reserved cache node offerings.',
  operationId: 'POST_DescribeReservedCacheNodesOfferings',
  request: {
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
        .literal('DescribeReservedCacheNodesOfferings')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeReservedCacheNodesOfferings'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeReservedCacheNodesOfferingsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ReservedCacheNodesOfferingMessageSchema } },
    },
    480: {
      description: 'ReservedCacheNodesOfferingNotFoundFault',
      content: { 'text/xml': { schema: ReservedCacheNodesOfferingNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDescribeServiceUpdatesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeServiceUpdates',
  description: 'Returns details of the service updates',
  operationId: 'GET_DescribeServiceUpdates',
  request: {
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
      ServiceUpdateName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ServiceUpdateName',
            in: 'query',
            required: false,
            description: 'The unique ID of the service update',
            schema: { type: 'string' },
          },
        }),
      ServiceUpdateStatus: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ServiceUpdateStatusSchema).max(3),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ServiceUpdateStatus',
            in: 'query',
            required: false,
            description: 'The status of the service update',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/ServiceUpdateStatus' },
              maxItems: 3,
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
            description: 'The maximum number of records to include in the response',
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
              'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeServiceUpdates')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeServiceUpdates'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ServiceUpdatesMessageSchema } },
    },
    480: {
      description: 'ServiceUpdateNotFoundFault',
      content: { 'text/xml': { schema: ServiceUpdateNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDescribeServiceUpdatesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeServiceUpdates',
  description: 'Returns details of the service updates',
  operationId: 'POST_DescribeServiceUpdates',
  request: {
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
        .literal('DescribeServiceUpdates')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeServiceUpdates'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeServiceUpdatesMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ServiceUpdatesMessageSchema } },
    },
    480: {
      description: 'ServiceUpdateNotFoundFault',
      content: { 'text/xml': { schema: ServiceUpdateNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDescribeSnapshotsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeSnapshots',
  description:
    '<p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>',
  operationId: 'GET_DescribeSnapshots',
  request: {
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
      ReplicationGroupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ReplicationGroupId',
            in: 'query',
            required: false,
            description:
              'A user-supplied replication group identifier. If this parameter is specified, only snapshots associated with that specific replication group are described.',
            schema: { type: 'string' },
          },
        }),
      CacheClusterId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheClusterId',
            in: 'query',
            required: false,
            description:
              'A user-supplied cluster identifier. If this parameter is specified, only snapshots associated with that specific cluster are described.',
            schema: { type: 'string' },
          },
        }),
      SnapshotName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SnapshotName',
            in: 'query',
            required: false,
            description:
              'A user-supplied name of the snapshot. If this parameter is specified, only this snapshot are described.',
            schema: { type: 'string' },
          },
        }),
      SnapshotSource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SnapshotSource',
            in: 'query',
            required: false,
            description:
              'If set to <code>system</code>, the output shows snapshots that were automatically created by ElastiCache. If set to <code>user</code> the output shows snapshots that were manually created. If omitted, the output shows both automatically and manually created snapshots.',
            schema: { type: 'string' },
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
              'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
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
              '<p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 50</p> <p>Constraints: minimum 20; maximum 50.</p>',
            schema: { type: 'integer' },
          },
        }),
      ShowNodeGroupConfig: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'ShowNodeGroupConfig',
            in: 'query',
            required: false,
            description:
              'A Boolean value which if true, the node group (shard) configuration is included in the snapshot description.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DescribeSnapshots')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeSnapshots'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeSnapshotsListMessageSchema } },
    },
    480: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'SnapshotNotFoundFault',
      content: { 'text/xml': { schema: SnapshotNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDescribeSnapshotsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeSnapshots',
  description:
    '<p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>',
  operationId: 'POST_DescribeSnapshots',
  request: {
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
        .literal('DescribeSnapshots')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeSnapshots'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeSnapshotsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeSnapshotsListMessageSchema } },
    },
    480: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'SnapshotNotFoundFault',
      content: { 'text/xml': { schema: SnapshotNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDescribeUpdateActionsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeUpdateActions',
  description: 'Returns details of the update actions ',
  operationId: 'GET_DescribeUpdateActions',
  request: {
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
          ['StartTime', ['ServiceUpdateTimeRange']],
          ['EndTime', ['ServiceUpdateTimeRange']],
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
          ServiceUpdateName: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'ServiceUpdateName',
                in: 'query',
                required: false,
                description: 'The unique ID of the service update',
                schema: { type: 'string' },
              },
            }),
          ReplicationGroupIds: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(StringSchema).max(20),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'ReplicationGroupIds',
                in: 'query',
                required: false,
                description: 'The replication group IDs',
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/String' },
                  maxItems: 20,
                },
              },
            }),
          CacheClusterIds: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(StringSchema).max(20),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'CacheClusterIds',
                in: 'query',
                required: false,
                description: 'The cache cluster IDs',
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/String' },
                  maxItems: 20,
                },
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
                  'The Elasticache engine to which the update applies. Either Redis or Memcached ',
                schema: { type: 'string' },
              },
            }),
          ServiceUpdateStatus: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(ServiceUpdateStatusSchema).max(3),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'ServiceUpdateStatus',
                in: 'query',
                required: false,
                description: 'The status of the service update',
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/ServiceUpdateStatus' },
                  maxItems: 3,
                },
              },
            }),
          ServiceUpdateTimeRange: z
            .object({
              StartTime: TStampSchema.and(
                z.any().openapi({ description: 'The start time of the time range filter' }),
              ).exactOptional(),
              EndTime: TStampSchema.and(
                z.any().openapi({ description: 'The end time of the time range filter' }),
              ).exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'ServiceUpdateTimeRange',
                in: 'query',
                required: false,
                description:
                  'The range of time specified to search for service updates that are in available status',
                schema: {
                  type: 'object',
                  properties: {
                    StartTime: {
                      allOf: [
                        { $ref: '#/components/schemas/TStamp' },
                        { description: 'The start time of the time range filter' },
                      ],
                    },
                    EndTime: {
                      allOf: [
                        { $ref: '#/components/schemas/TStamp' },
                        { description: 'The end time of the time range filter' },
                      ],
                    },
                  },
                  description:
                    'Filters update actions from the service updates that are in available status during the time range.',
                },
              },
              description:
                'Filters update actions from the service updates that are in available status during the time range.',
              required: [],
            }),
          UpdateActionStatus: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(UpdateActionStatusSchema).max(9),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'UpdateActionStatus',
                in: 'query',
                required: false,
                description: 'The status of the update action.',
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/UpdateActionStatus' },
                  maxItems: 9,
                },
              },
            }),
          ShowNodeLevelUpdateStatus: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'ShowNodeLevelUpdateStatus',
                in: 'query',
                required: false,
                description:
                  'Dictates whether to include node level update status in the response ',
                schema: { type: 'boolean' },
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
                description: 'The maximum number of records to include in the response',
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
                  'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.',
                schema: { type: 'string' },
              },
            }),
          Action: z
            .literal('DescribeUpdateActions')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['DescribeUpdateActions'] },
              },
            }),
          Version: z
            .literal('2015-02-02')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2015-02-02'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateActionsMessageSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDescribeUpdateActionsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeUpdateActions',
  description: 'Returns details of the update actions ',
  operationId: 'POST_DescribeUpdateActions',
  request: {
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
        .literal('DescribeUpdateActions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeUpdateActions'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeUpdateActionsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: UpdateActionsMessageSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDescribeUserGroupsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeUserGroups',
  description: 'Returns a list of user groups.',
  operationId: 'GET_DescribeUserGroups',
  request: {
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
      UserGroupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'UserGroupId',
            in: 'query',
            required: false,
            description: 'The ID of the user group.',
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
              'The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. ',
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
              'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. &gt;',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeUserGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeUserGroups'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeUserGroupsResultSchema } },
    },
    480: {
      description: 'UserGroupNotFoundFault',
      content: { 'text/xml': { schema: UserGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDescribeUserGroupsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeUserGroups',
  description: 'Returns a list of user groups.',
  operationId: 'POST_DescribeUserGroups',
  request: {
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
        .literal('DescribeUserGroups')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeUserGroups'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeUserGroupsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeUserGroupsResultSchema } },
    },
    480: {
      description: 'UserGroupNotFoundFault',
      content: { 'text/xml': { schema: UserGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDescribeUsersRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeUsers',
  description: 'Returns a list of users.',
  operationId: 'GET_DescribeUsers',
  request: {
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
        .regex(/[a-zA-Z]*/)
        .exactOptional()
        .openapi({
          param: {
            name: 'Engine',
            in: 'query',
            required: false,
            description: 'The Redis engine. ',
            schema: { type: 'string', pattern: '[a-zA-Z]*' },
          },
        }),
      UserId: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z0-9\-]*/)
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'UserId',
            in: 'query',
            required: false,
            description: 'The ID of the user.',
            schema: { type: 'string', pattern: '[a-zA-Z][a-zA-Z0-9\\-]*', minLength: 1 },
          },
        }),
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(FilterSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description: 'Filter to determine the list of User IDs to return.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Filter' } },
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
              'The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. ',
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
              'An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. &gt;',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeUsers')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeUsers'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: DescribeUsersResultSchema } } },
    480: {
      description: 'UserNotFoundFault',
      content: { 'text/xml': { schema: UserNotFoundFaultSchema } },
    },
    481: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDescribeUsersRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeUsers',
  description: 'Returns a list of users.',
  operationId: 'POST_DescribeUsers',
  request: {
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
        .literal('DescribeUsers')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeUsers'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeUsersMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: DescribeUsersResultSchema } } },
    480: {
      description: 'UserNotFoundFault',
      content: { 'text/xml': { schema: UserNotFoundFaultSchema } },
    },
    481: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionDisassociateGlobalReplicationGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=DisassociateGlobalReplicationGroup',
  description:
    'Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.',
  operationId: 'GET_DisassociateGlobalReplicationGroup',
  request: {
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
      GlobalReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'GlobalReplicationGroupId',
            in: 'query',
            required: true,
            description: 'The name of the Global datastore',
            schema: { type: 'string' },
          },
        }),
      ReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'ReplicationGroupId',
            in: 'query',
            required: true,
            description:
              'The name of the secondary cluster you wish to remove from the Global datastore',
            schema: { type: 'string' },
          },
        }),
      ReplicationGroupRegion: z
        .string()
        .openapi({
          param: {
            name: 'ReplicationGroupRegion',
            in: 'query',
            required: true,
            description:
              'The Amazon region of secondary cluster you wish to remove from the Global datastore',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DisassociateGlobalReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DisassociateGlobalReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DisassociateGlobalReplicationGroupResultSchema } },
    },
    480: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionDisassociateGlobalReplicationGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=DisassociateGlobalReplicationGroup',
  description:
    'Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.',
  operationId: 'POST_DisassociateGlobalReplicationGroup',
  request: {
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
        .literal('DisassociateGlobalReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DisassociateGlobalReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DisassociateGlobalReplicationGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DisassociateGlobalReplicationGroupResultSchema } },
    },
    480: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionFailoverGlobalReplicationGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=FailoverGlobalReplicationGroup',
  description:
    'Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.',
  operationId: 'GET_FailoverGlobalReplicationGroup',
  request: {
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
      GlobalReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'GlobalReplicationGroupId',
            in: 'query',
            required: true,
            description: 'The name of the Global datastore',
            schema: { type: 'string' },
          },
        }),
      PrimaryRegion: z
        .string()
        .openapi({
          param: {
            name: 'PrimaryRegion',
            in: 'query',
            required: true,
            description: 'The Amazon region of the primary cluster of the Global datastore',
            schema: { type: 'string' },
          },
        }),
      PrimaryReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'PrimaryReplicationGroupId',
            in: 'query',
            required: true,
            description: 'The name of the primary replication group',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('FailoverGlobalReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['FailoverGlobalReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: FailoverGlobalReplicationGroupResultSchema } },
    },
    480: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionFailoverGlobalReplicationGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=FailoverGlobalReplicationGroup',
  description:
    'Used to failover the primary region to a secondary region. The secondary region will become primary, and all other clusters will become secondary.',
  operationId: 'POST_FailoverGlobalReplicationGroup',
  request: {
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
        .literal('FailoverGlobalReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['FailoverGlobalReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: FailoverGlobalReplicationGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: FailoverGlobalReplicationGroupResultSchema } },
    },
    480: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionIncreaseNodeGroupsInGlobalReplicationGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=IncreaseNodeGroupsInGlobalReplicationGroup',
  description: 'Increase the number of node groups in the Global datastore',
  operationId: 'GET_IncreaseNodeGroupsInGlobalReplicationGroup',
  request: {
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
      GlobalReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'GlobalReplicationGroupId',
            in: 'query',
            required: true,
            description: 'The name of the Global datastore',
            schema: { type: 'string' },
          },
        }),
      NodeGroupCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'NodeGroupCount',
            in: 'query',
            required: true,
            description: 'The number of node groups you wish to add',
            schema: { type: 'integer' },
          },
        }),
      RegionalConfigurations: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            RegionalConfigurationSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'RegionalConfiguration' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'RegionalConfigurations',
            in: 'query',
            required: false,
            description:
              'Describes the replication group IDs, the Amazon regions where they are stored and the shard configuration for each that comprise the Global datastore',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/RegionalConfiguration' },
                  { xml: { name: 'RegionalConfiguration' } },
                ],
              },
            },
          },
        }),
      ApplyImmediately: z
        .stringbool()
        .openapi({
          param: {
            name: 'ApplyImmediately',
            in: 'query',
            required: true,
            description:
              'Indicates that the process begins immediately. At present, the only permitted value for this parameter is true.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('IncreaseNodeGroupsInGlobalReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['IncreaseNodeGroupsInGlobalReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: IncreaseNodeGroupsInGlobalReplicationGroupResultSchema } },
    },
    480: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postActionIncreaseNodeGroupsInGlobalReplicationGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=IncreaseNodeGroupsInGlobalReplicationGroup',
  description: 'Increase the number of node groups in the Global datastore',
  operationId: 'POST_IncreaseNodeGroupsInGlobalReplicationGroup',
  request: {
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
        .literal('IncreaseNodeGroupsInGlobalReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['IncreaseNodeGroupsInGlobalReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: IncreaseNodeGroupsInGlobalReplicationGroupMessageSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: IncreaseNodeGroupsInGlobalReplicationGroupResultSchema } },
    },
    480: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const getActionIncreaseReplicaCountRoute = createRoute({
  method: 'get',
  path: '/#Action=IncreaseReplicaCount',
  description:
    'Dynamically increases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.',
  operationId: 'GET_IncreaseReplicaCount',
  request: {
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
      ReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'ReplicationGroupId',
            in: 'query',
            required: true,
            description: 'The id of the replication group to which you want to add replica nodes.',
            schema: { type: 'string' },
          },
        }),
      NewReplicaCount: z
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
            name: 'NewReplicaCount',
            in: 'query',
            required: false,
            description:
              "The number of read replica nodes you want at the completion of this operation. For Redis (cluster mode disabled) replication groups, this is the number of replica nodes in the replication group. For Redis (cluster mode enabled) replication groups, this is the number of replica nodes in each of the replication group's node groups.",
            schema: { type: 'integer' },
          },
        }),
      ReplicaConfiguration: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                NodeGroupId: AllowedNodeGroupIdSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        "The 4-digit id for the node group you are configuring. For Redis (cluster mode disabled) replication groups, the node group id is always 0001. To find a Redis (cluster mode enabled)'s node group's (shard's) id, see <a href=\"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/shard-find-id.html\">Finding a Shard's Id</a>.",
                    }),
                ),
                NewReplicaCount: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    IntegerSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The number of replicas you want in this node group at the end of this operation. The maximum value for <code>NewReplicaCount</code> is 5. The minimum value depends upon the type of Redis replication group you are working with.</p> <p>The minimum number of replicas in a shard or replication group is:</p> <ul> <li> <p>Redis (cluster mode disabled)</p> <ul> <li> <p>If Multi-AZ: 1</p> </li> <li> <p>If Multi-AZ: 0</p> </li> </ul> </li> <li> <p>Redis (cluster mode enabled): 0 (though you will not be able to failover to a replica if your primary node fails)</p> </li> </ul>',
                      }),
                  ),
                PreferredAvailabilityZones: PreferredAvailabilityZoneListSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        "A list of <code>PreferredAvailabilityZone</code> strings that specify which availability zones the replication group's nodes are to be in. The nummber of <code>PreferredAvailabilityZone</code> values must equal the value of <code>NewReplicaCount</code> plus 1 to account for the primary node. If this member of <code>ReplicaConfiguration</code> is omitted, ElastiCache for Redis selects the availability zone for each of the replicas.",
                    }),
                ).exactOptional(),
                PreferredOutpostArns: PreferredOutpostArnListSchema.and(
                  z
                    .any()
                    .openapi({
                      description: 'The outpost ARNs in which the cache cluster is created.',
                    }),
                ).exactOptional(),
              })
              .openapi({
                required: ['NodeGroupId', 'NewReplicaCount'],
                description:
                  'Node group (shard) configuration options when adding or removing replicas. Each node group (shard) configuration has the following members: NodeGroupId, NewReplicaCount, and PreferredAvailabilityZones. ',
              })
              .and(
                ((schema) =>
                  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                  z.any(),
                ).openapi({ xml: { name: 'ConfigureShard' } }),
              ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ReplicaConfiguration',
            in: 'query',
            required: false,
            description:
              'A list of <code>ConfigureShard</code> objects that can be used to configure each shard in a Redis (cluster mode enabled) replication group. The <code>ConfigureShard</code> has three members: <code>NewReplicaCount</code>, <code>NodeGroupId</code>, and <code>PreferredAvailabilityZones</code>.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  {
                    type: 'object',
                    required: ['NodeGroupId', 'NewReplicaCount'],
                    properties: {
                      NodeGroupId: {
                        allOf: [
                          { $ref: '#/components/schemas/AllowedNodeGroupId' },
                          {
                            description:
                              "The 4-digit id for the node group you are configuring. For Redis (cluster mode disabled) replication groups, the node group id is always 0001. To find a Redis (cluster mode enabled)'s node group's (shard's) id, see <a href=\"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/shard-find-id.html\">Finding a Shard's Id</a>.",
                          },
                        ],
                      },
                      NewReplicaCount: {
                        allOf: [
                          { $ref: '#/components/schemas/Integer' },
                          {
                            description:
                              '<p>The number of replicas you want in this node group at the end of this operation. The maximum value for <code>NewReplicaCount</code> is 5. The minimum value depends upon the type of Redis replication group you are working with.</p> <p>The minimum number of replicas in a shard or replication group is:</p> <ul> <li> <p>Redis (cluster mode disabled)</p> <ul> <li> <p>If Multi-AZ: 1</p> </li> <li> <p>If Multi-AZ: 0</p> </li> </ul> </li> <li> <p>Redis (cluster mode enabled): 0 (though you will not be able to failover to a replica if your primary node fails)</p> </li> </ul>',
                          },
                        ],
                      },
                      PreferredAvailabilityZones: {
                        allOf: [
                          { $ref: '#/components/schemas/PreferredAvailabilityZoneList' },
                          {
                            description:
                              "A list of <code>PreferredAvailabilityZone</code> strings that specify which availability zones the replication group's nodes are to be in. The nummber of <code>PreferredAvailabilityZone</code> values must equal the value of <code>NewReplicaCount</code> plus 1 to account for the primary node. If this member of <code>ReplicaConfiguration</code> is omitted, ElastiCache for Redis selects the availability zone for each of the replicas.",
                          },
                        ],
                      },
                      PreferredOutpostArns: {
                        allOf: [
                          { $ref: '#/components/schemas/PreferredOutpostArnList' },
                          {
                            description: 'The outpost ARNs in which the cache cluster is created.',
                          },
                        ],
                      },
                    },
                    description:
                      'Node group (shard) configuration options when adding or removing replicas. Each node group (shard) configuration has the following members: NodeGroupId, NewReplicaCount, and PreferredAvailabilityZones. ',
                  },
                  { xml: { name: 'ConfigureShard' } },
                ],
              },
            },
          },
        }),
      ApplyImmediately: z
        .stringbool()
        .openapi({
          param: {
            name: 'ApplyImmediately',
            in: 'query',
            required: true,
            description:
              'If <code>True</code>, the number of replica nodes is increased immediately. <code>ApplyImmediately=False</code> is not currently supported.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('IncreaseReplicaCount')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['IncreaseReplicaCount'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: IncreaseReplicaCountResultSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    483: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    484: {
      description: 'InsufficientCacheClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientCacheClusterCapacityFaultSchema } },
    },
    485: {
      description: 'ClusterQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: ClusterQuotaForCustomerExceededFaultSchema } },
    },
    486: {
      description: 'NodeGroupsPerReplicationGroupQuotaExceededFault',
      content: { 'text/xml': { schema: NodeGroupsPerReplicationGroupQuotaExceededFaultSchema } },
    },
    487: {
      description: 'NodeQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForCustomerExceededFaultSchema } },
    },
    488: {
      description: 'NoOperationFault',
      content: { 'text/xml': { schema: NoOperationFaultSchema } },
    },
    489: {
      description: 'InvalidKMSKeyFault',
      content: { 'text/xml': { schema: InvalidKMSKeyFaultSchema } },
    },
    490: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    491: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionIncreaseReplicaCountRoute = createRoute({
  method: 'post',
  path: '/#Action=IncreaseReplicaCount',
  description:
    'Dynamically increases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.',
  operationId: 'POST_IncreaseReplicaCount',
  request: {
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
        .literal('IncreaseReplicaCount')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['IncreaseReplicaCount'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: IncreaseReplicaCountMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: IncreaseReplicaCountResultSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    483: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    484: {
      description: 'InsufficientCacheClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientCacheClusterCapacityFaultSchema } },
    },
    485: {
      description: 'ClusterQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: ClusterQuotaForCustomerExceededFaultSchema } },
    },
    486: {
      description: 'NodeGroupsPerReplicationGroupQuotaExceededFault',
      content: { 'text/xml': { schema: NodeGroupsPerReplicationGroupQuotaExceededFaultSchema } },
    },
    487: {
      description: 'NodeQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForCustomerExceededFaultSchema } },
    },
    488: {
      description: 'NoOperationFault',
      content: { 'text/xml': { schema: NoOperationFaultSchema } },
    },
    489: {
      description: 'InvalidKMSKeyFault',
      content: { 'text/xml': { schema: InvalidKMSKeyFaultSchema } },
    },
    490: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    491: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionListAllowedNodeTypeModificationsRoute = createRoute({
  method: 'get',
  path: '/#Action=ListAllowedNodeTypeModifications',
  description:
    "<p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>",
  operationId: 'GET_ListAllowedNodeTypeModifications',
  request: {
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
      CacheClusterId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheClusterId',
            in: 'query',
            required: false,
            description:
              '<p>The name of the cluster you want to scale up to a larger node instanced type. ElastiCache uses the cluster id to identify the current node type of this cluster and from that to create a list of node types you can scale up to.</p> <important> <p>You must provide a value for either the <code>CacheClusterId</code> or the <code>ReplicationGroupId</code>.</p> </important>',
            schema: { type: 'string' },
          },
        }),
      ReplicationGroupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ReplicationGroupId',
            in: 'query',
            required: false,
            description:
              '<p>The name of the replication group want to scale up to a larger node type. ElastiCache uses the replication group id to identify the current node type being used by this replication group, and from that to create a list of node types you can scale up to.</p> <important> <p>You must provide a value for either the <code>CacheClusterId</code> or the <code>ReplicationGroupId</code>.</p> </important>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ListAllowedNodeTypeModifications')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListAllowedNodeTypeModifications'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: AllowedNodeTypeModificationsMessageSchema } },
    },
    480: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postActionListAllowedNodeTypeModificationsRoute = createRoute({
  method: 'post',
  path: '/#Action=ListAllowedNodeTypeModifications',
  description:
    "<p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>",
  operationId: 'POST_ListAllowedNodeTypeModifications',
  request: {
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
        .literal('ListAllowedNodeTypeModifications')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListAllowedNodeTypeModifications'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListAllowedNodeTypeModificationsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: AllowedNodeTypeModificationsMessageSchema } },
    },
    480: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const getActionListTagsForResourceRoute = createRoute({
  method: 'get',
  path: '/#Action=ListTagsForResource',
  description:
    '<p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>',
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
              '<p>The Amazon Resource Name (ARN) of the resource for which you want the list of tags, for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code> or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.</p>',
            schema: { type: 'string' },
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
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: TagListMessageSchema } } },
    480: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    482: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    483: {
      description: 'CacheSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSubnetGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    485: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    486: {
      description: 'ReservedCacheNodeNotFoundFault',
      content: { 'text/xml': { schema: ReservedCacheNodeNotFoundFaultSchema } },
    },
    487: {
      description: 'SnapshotNotFoundFault',
      content: { 'text/xml': { schema: SnapshotNotFoundFaultSchema } },
    },
    488: {
      description: 'UserNotFoundFault',
      content: { 'text/xml': { schema: UserNotFoundFaultSchema } },
    },
    489: {
      description: 'UserGroupNotFoundFault',
      content: { 'text/xml': { schema: UserGroupNotFoundFaultSchema } },
    },
    490: {
      description: 'InvalidARNFault',
      content: { 'text/xml': { schema: InvalidARNFaultSchema } },
    },
  },
})

export const postActionListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#Action=ListTagsForResource',
  description:
    '<p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>',
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
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListTagsForResourceMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: TagListMessageSchema } } },
    480: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    482: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    483: {
      description: 'CacheSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSubnetGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    485: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    486: {
      description: 'ReservedCacheNodeNotFoundFault',
      content: { 'text/xml': { schema: ReservedCacheNodeNotFoundFaultSchema } },
    },
    487: {
      description: 'SnapshotNotFoundFault',
      content: { 'text/xml': { schema: SnapshotNotFoundFaultSchema } },
    },
    488: {
      description: 'UserNotFoundFault',
      content: { 'text/xml': { schema: UserNotFoundFaultSchema } },
    },
    489: {
      description: 'UserGroupNotFoundFault',
      content: { 'text/xml': { schema: UserGroupNotFoundFaultSchema } },
    },
    490: {
      description: 'InvalidARNFault',
      content: { 'text/xml': { schema: InvalidARNFaultSchema } },
    },
  },
})

export const getActionModifyCacheClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyCacheCluster',
  description:
    'Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.',
  operationId: 'GET_ModifyCacheCluster',
  request: {
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
      CacheClusterId: z
        .string()
        .openapi({
          param: {
            name: 'CacheClusterId',
            in: 'query',
            required: true,
            description: 'The cluster identifier. This value is stored as a lowercase string.',
            schema: { type: 'string' },
          },
        }),
      NumCacheNodes: z
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
            name: 'NumCacheNodes',
            in: 'query',
            required: false,
            description:
              "<p>The number of cache nodes that the cluster should have. If the value for <code>NumCacheNodes</code> is greater than the sum of the number of current cache nodes and the number of cache nodes pending creation (which may be zero), more nodes are added. If the value is less than the number of existing cache nodes, nodes are removed. If the value is equal to the number of current cache nodes, any pending add or remove requests are canceled.</p> <p>If you are removing cache nodes, you must use the <code>CacheNodeIdsToRemove</code> parameter to provide the IDs of the specific cache nodes to remove.</p> <p>For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 40.</p> <note> <p>Adding or removing Memcached cache nodes can be applied immediately or as a pending operation (see <code>ApplyImmediately</code>).</p> <p>A pending operation to modify the number of cache nodes in a cluster during its maintenance window, whether by adding or removing nodes in accordance with the scale out architecture, is not queued. The customer's latest request to add or remove nodes to the cluster overrides any previous pending operations to modify the number of cache nodes in the cluster. For example, a request to remove 2 nodes would override a previous pending operation to remove 3 nodes. Similarly, a request to add 2 nodes would override a previous pending operation to remove 3 nodes and vice versa. As Memcached cache nodes may now be provisioned in different Availability Zones with flexible cache node placement, a request to add nodes does not automatically override a previous pending operation to add nodes. The customer can modify the previous pending operation to add more nodes or explicitly cancel the pending request and retry the new request. To cancel pending operations to modify the number of cache nodes in a cluster, use the <code>ModifyCacheCluster</code> request and set <code>NumCacheNodes</code> equal to the number of cache nodes currently in the cluster.</p> </note>",
            schema: { type: 'integer' },
          },
        }),
      CacheNodeIdsToRemove: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'CacheNodeId' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheNodeIdsToRemove',
            in: 'query',
            required: false,
            description:
              '<p>A list of cache node IDs to be removed. A node ID is a numeric identifier (0001, 0002, etc.). This parameter is only valid when <code>NumCacheNodes</code> is less than the existing number of cache nodes. The number of cache node IDs supplied in this parameter must match the difference between the existing number of cache nodes in the cluster or pending cache nodes, whichever is greater, and the value of <code>NumCacheNodes</code> in the request.</p> <p>For example: If you have 3 active cache nodes, 7 pending cache nodes, and the number of cache nodes in this <code>ModifyCacheCluster</code> call is 5, you must list 2 (7 - 5) cache node IDs to remove.</p>',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/String' }, { xml: { name: 'CacheNodeId' } }],
              },
            },
          },
        }),
      AZMode: z
        .enum(['single-az', 'cross-az'])
        .exactOptional()
        .openapi({
          param: {
            name: 'AZMode',
            in: 'query',
            required: false,
            description:
              '<p>Specifies whether the new nodes in this Memcached cluster are all created in a single Availability Zone or created across multiple Availability Zones.</p> <p>Valid values: <code>single-az</code> | <code>cross-az</code>.</p> <p>This option is only supported for Memcached clusters.</p> <note> <p>You cannot specify <code>single-az</code> if the Memcached cluster already has cache nodes in different Availability Zones. If <code>cross-az</code> is specified, existing Memcached nodes remain in their current Availability Zone.</p> <p>Only newly created nodes are located in different Availability Zones. </p> </note>',
            schema: { type: 'string', enum: ['single-az', 'cross-az'] },
          },
        }),
      NewAvailabilityZones: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'PreferredAvailabilityZone' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'NewAvailabilityZones',
            in: 'query',
            required: false,
            description:
              '<note> <p>This option is only supported on Memcached clusters.</p> </note> <p>The list of Availability Zones where the new Memcached cache nodes are created.</p> <p>This parameter is only valid when <code>NumCacheNodes</code> in the request is greater than the sum of the number of active cache nodes and the number of cache nodes pending creation (which may be zero). The number of Availability Zones supplied in this list must match the cache nodes being added in this request.</p> <p>Scenarios:</p> <ul> <li> <p> <b>Scenario 1:</b> You have 3 active nodes and wish to add 2 nodes. Specify <code>NumCacheNodes=5</code> (3 + 2) and optionally specify two Availability Zones for the two new nodes.</p> </li> <li> <p> <b>Scenario 2:</b> You have 3 active nodes and 2 nodes pending creation (from the scenario 1 call) and want to add 1 more node. Specify <code>NumCacheNodes=6</code> ((3 + 2) + 1) and optionally specify an Availability Zone for the new node.</p> </li> <li> <p> <b>Scenario 3:</b> You want to cancel all pending operations. Specify <code>NumCacheNodes=3</code> to cancel all pending operations.</p> </li> </ul> <p>The Availability Zone placement of nodes pending creation cannot be modified. If you wish to cancel any nodes pending creation, add 0 nodes by setting <code>NumCacheNodes</code> to the number of current nodes.</p> <p>If <code>cross-az</code> is specified, existing Memcached nodes remain in their current Availability Zone. Only newly created nodes can be located in different Availability Zones. For guidance on how to move existing Memcached nodes to different Availability Zones, see the <b>Availability Zone Considerations</b> section of <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/CacheNodes.SupportedTypes.html">Cache Node Considerations for Memcached</a>.</p> <p> <b>Impact of new add/remove requests upon pending requests</b> </p> <ul> <li> <p>Scenario-1</p> <ul> <li> <p>Pending Action: Delete</p> </li> <li> <p>New Request: Delete</p> </li> <li> <p>Result: The new delete, pending or immediate, replaces the pending delete.</p> </li> </ul> </li> <li> <p>Scenario-2</p> <ul> <li> <p>Pending Action: Delete</p> </li> <li> <p>New Request: Create</p> </li> <li> <p>Result: The new create, pending or immediate, replaces the pending delete.</p> </li> </ul> </li> <li> <p>Scenario-3</p> <ul> <li> <p>Pending Action: Create</p> </li> <li> <p>New Request: Delete</p> </li> <li> <p>Result: The new delete, pending or immediate, replaces the pending create.</p> </li> </ul> </li> <li> <p>Scenario-4</p> <ul> <li> <p>Pending Action: Create</p> </li> <li> <p>New Request: Create</p> </li> <li> <p>Result: The new create is added to the pending create.</p> <important> <p> <b>Important:</b> If the new create request is <b>Apply Immediately - Yes</b>, all creates are performed immediately. If the new create request is <b>Apply Immediately - No</b>, all creates are pending.</p> </important> </li> </ul> </li> </ul>',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'PreferredAvailabilityZone' } },
                ],
              },
            },
          },
        }),
      CacheSecurityGroupNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'CacheSecurityGroupName' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheSecurityGroupNames',
            in: 'query',
            required: false,
            description:
              '<p>A list of cache security group names to authorize on this cluster. This change is asynchronously applied as soon as possible.</p> <p>You can use this parameter only with clusters that are created outside of an Amazon Virtual Private Cloud (Amazon VPC).</p> <p>Constraints: Must contain no more than 255 alphanumeric characters. Must not be "Default".</p>',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'CacheSecurityGroupName' } },
                ],
              },
            },
          },
        }),
      SecurityGroupIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'SecurityGroupId' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'SecurityGroupIds',
            in: 'query',
            required: false,
            description:
              '<p>Specifies the VPC Security Groups associated with the cluster.</p> <p>This parameter can be used only with clusters that are created in an Amazon Virtual Private Cloud (Amazon VPC).</p>',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'SecurityGroupId' } },
                ],
              },
            },
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
              '<p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p> <p>Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:23:00-mon:01:30</code> </p>',
            schema: { type: 'string' },
          },
        }),
      NotificationTopicArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NotificationTopicArn',
            in: 'query',
            required: false,
            description:
              '<p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent.</p> <note> <p>The Amazon SNS topic owner must be same as the cluster owner.</p> </note>',
            schema: { type: 'string' },
          },
        }),
      CacheParameterGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheParameterGroupName',
            in: 'query',
            required: false,
            description:
              'The name of the cache parameter group to apply to this cluster. This change is asynchronously applied as soon as possible for parameters when the <code>ApplyImmediately</code> parameter is specified as <code>true</code> for this request.',
            schema: { type: 'string' },
          },
        }),
      NotificationTopicStatus: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NotificationTopicStatus',
            in: 'query',
            required: false,
            description:
              '<p>The status of the Amazon SNS notification topic. Notifications are sent only if the status is <code>active</code>.</p> <p>Valid values: <code>active</code> | <code>inactive</code> </p>',
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
              '<p>If <code>true</code>, this parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the cluster.</p> <p>If <code>false</code>, changes to the cluster are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first.</p> <important> <p>If you perform a <code>ModifyCacheCluster</code> before a pending modification is applied, the pending modification is replaced by the newer modification.</p> </important> <p>Valid values: <code>true</code> | <code>false</code> </p> <p>Default: <code>false</code> </p>',
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
              '<p>The upgraded version of the cache engine to be run on the cache nodes.</p> <p> <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster and create it anew with the earlier engine version. </p>',
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
              ' If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.  ',
            schema: { type: 'boolean' },
          },
        }),
      SnapshotRetentionLimit: z
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
            name: 'SnapshotRetentionLimit',
            in: 'query',
            required: false,
            description:
              '<p>The number of days for which ElastiCache retains automatic cluster snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p> <note> <p>If the value of <code>SnapshotRetentionLimit</code> is set to zero (0), backups are turned off.</p> </note>',
            schema: { type: 'integer' },
          },
        }),
      SnapshotWindow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SnapshotWindow',
            in: 'query',
            required: false,
            description:
              'The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your cluster. ',
            schema: { type: 'string' },
          },
        }),
      CacheNodeType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheNodeType',
            in: 'query',
            required: false,
            description: 'A valid cache node type that you want to scale this cluster up to.',
            schema: { type: 'string' },
          },
        }),
      AuthToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'AuthToken',
            in: 'query',
            required: false,
            description:
              "<p>Reserved parameter. The password used to access a password protected server. This parameter must be specified with the <code>auth-token-update</code> parameter. Password constraints:</p> <ul> <li> <p>Must be only printable ASCII characters</p> </li> <li> <p>Must be at least 16 characters and no more than 128 characters in length</p> </li> <li> <p>Cannot contain any of the following characters: '/', '\"', or '@', '%'</p> </li> </ul> <p> For more information, see AUTH password at <a href=\"http://redis.io/commands/AUTH\">AUTH</a>.</p>",
            schema: { type: 'string' },
          },
        }),
      AuthTokenUpdateStrategy: z
        .enum(['SET', 'ROTATE', 'DELETE'])
        .exactOptional()
        .openapi({
          param: {
            name: 'AuthTokenUpdateStrategy',
            in: 'query',
            required: false,
            description:
              '<p>Specifies the strategy to use to update the AUTH token. This parameter must be specified with the <code>auth-token</code> parameter. Possible values:</p> <ul> <li> <p>Rotate</p> </li> <li> <p>Set</p> </li> </ul> <p> For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html">Authenticating Users with Redis AUTH</a> </p>',
            schema: { type: 'string', enum: ['SET', 'ROTATE', 'DELETE'] },
          },
        }),
      LogDeliveryConfigurations: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                LogType: LogTypeSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'Refers to <a href="https://redis.io/commands/slowlog">slow-log</a> or engine-log..',
                    }),
                ).exactOptional(),
                DestinationType: DestinationTypeSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'Specify either <code>cloudwatch-logs</code> or <code>kinesis-firehose</code> as the destination type.',
                    }),
                ).exactOptional(),
                DestinationDetails: DestinationDetailsSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.',
                    }),
                ).exactOptional(),
                LogFormat: LogFormatSchema.and(
                  z.any().openapi({ description: 'Specifies either JSON or TEXT' }),
                ).exactOptional(),
                Enabled: z
                  .preprocess(
                    ((read) => (val: unknown) => {
                      const result = read.safeParse(val)
                      return result.success ? result.data : val
                    })(z.stringbool()),
                    BooleanOptionalSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specify if log delivery is enabled. Default <code>true</code>.',
                      }),
                  )
                  .exactOptional(),
              })
              .openapi({
                description: 'Specifies the destination, format and type of the logs. ',
                required: [],
              })
              .and(
                ((schema) =>
                  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                  z.any(),
                ).openapi({ xml: { name: 'LogDeliveryConfigurationRequest' } }),
              ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'LogDeliveryConfigurations',
            in: 'query',
            required: false,
            description: 'Specifies the destination, format and type of the logs.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  {
                    type: 'object',
                    properties: {
                      LogType: {
                        allOf: [
                          { $ref: '#/components/schemas/LogType' },
                          {
                            description:
                              'Refers to <a href="https://redis.io/commands/slowlog">slow-log</a> or engine-log..',
                          },
                        ],
                      },
                      DestinationType: {
                        allOf: [
                          { $ref: '#/components/schemas/DestinationType' },
                          {
                            description:
                              'Specify either <code>cloudwatch-logs</code> or <code>kinesis-firehose</code> as the destination type.',
                          },
                        ],
                      },
                      DestinationDetails: {
                        allOf: [
                          { $ref: '#/components/schemas/DestinationDetails' },
                          {
                            description:
                              'Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.',
                          },
                        ],
                      },
                      LogFormat: {
                        allOf: [
                          { $ref: '#/components/schemas/LogFormat' },
                          { description: 'Specifies either JSON or TEXT' },
                        ],
                      },
                      Enabled: {
                        allOf: [
                          { $ref: '#/components/schemas/BooleanOptional' },
                          {
                            description:
                              'Specify if log delivery is enabled. Default <code>true</code>.',
                          },
                        ],
                      },
                    },
                    description: 'Specifies the destination, format and type of the logs. ',
                  },
                  { xml: { name: 'LogDeliveryConfigurationRequest' } },
                ],
              },
            },
          },
        }),
      IpDiscovery: z
        .enum(['ipv4', 'ipv6'])
        .exactOptional()
        .openapi({
          param: {
            name: 'IpDiscovery',
            in: 'query',
            required: false,
            description:
              'The network type you choose when modifying a cluster, either <code>ipv4</code> | <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.',
            schema: { type: 'string', enum: ['ipv4', 'ipv6'] },
          },
        }),
      Action: z
        .literal('ModifyCacheCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyCacheCluster'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyCacheClusterResultSchema } },
    },
    480: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    481: {
      description: 'InvalidCacheSecurityGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheSecurityGroupStateFaultSchema } },
    },
    482: {
      description: 'InsufficientCacheClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientCacheClusterCapacityFaultSchema } },
    },
    483: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    484: {
      description: 'NodeQuotaForClusterExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForClusterExceededFaultSchema } },
    },
    485: {
      description: 'NodeQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForCustomerExceededFaultSchema } },
    },
    486: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    487: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    488: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    489: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    490: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionModifyCacheClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyCacheCluster',
  description:
    'Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.',
  operationId: 'POST_ModifyCacheCluster',
  request: {
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
        .literal('ModifyCacheCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyCacheCluster'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyCacheClusterMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyCacheClusterResultSchema } },
    },
    480: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    481: {
      description: 'InvalidCacheSecurityGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheSecurityGroupStateFaultSchema } },
    },
    482: {
      description: 'InsufficientCacheClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientCacheClusterCapacityFaultSchema } },
    },
    483: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    484: {
      description: 'NodeQuotaForClusterExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForClusterExceededFaultSchema } },
    },
    485: {
      description: 'NodeQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForCustomerExceededFaultSchema } },
    },
    486: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    487: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    488: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    489: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    490: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionModifyCacheParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyCacheParameterGroup',
  description:
    'Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.',
  operationId: 'GET_ModifyCacheParameterGroup',
  request: {
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
      CacheParameterGroupName: z
        .string()
        .openapi({
          param: {
            name: 'CacheParameterGroupName',
            in: 'query',
            required: true,
            description: 'The name of the cache parameter group to modify.',
            schema: { type: 'string' },
          },
        }),
      ParameterNameValues: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ParameterNameValueSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'ParameterNameValue' } }),
            ),
          ),
        )
        .openapi({
          param: {
            name: 'ParameterNameValues',
            in: 'query',
            required: true,
            description:
              'An array of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional. A maximum of 20 parameters may be modified per request.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/ParameterNameValue' },
                  { xml: { name: 'ParameterNameValue' } },
                ],
              },
            },
          },
        }),
      Action: z
        .literal('ModifyCacheParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyCacheParameterGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CacheParameterGroupNameMessageSchema } },
    },
    480: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidCacheParameterGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheParameterGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    484: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
  },
})

export const postActionModifyCacheParameterGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyCacheParameterGroup',
  description:
    'Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.',
  operationId: 'POST_ModifyCacheParameterGroup',
  request: {
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
        .literal('ModifyCacheParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyCacheParameterGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyCacheParameterGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CacheParameterGroupNameMessageSchema } },
    },
    480: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidCacheParameterGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheParameterGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    484: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
  },
})

export const getActionModifyCacheSubnetGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyCacheSubnetGroup',
  description: 'Modifies an existing cache subnet group.',
  operationId: 'GET_ModifyCacheSubnetGroup',
  request: {
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
      CacheSubnetGroupName: z
        .string()
        .openapi({
          param: {
            name: 'CacheSubnetGroupName',
            in: 'query',
            required: true,
            description:
              '<p>The name for the cache subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p> <p>Example: <code>mysubnetgroup</code> </p>',
            schema: { type: 'string' },
          },
        }),
      CacheSubnetGroupDescription: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheSubnetGroupDescription',
            in: 'query',
            required: false,
            description: 'A description of the cache subnet group.',
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
        .exactOptional()
        .openapi({
          param: {
            name: 'SubnetIds',
            in: 'query',
            required: false,
            description: 'The EC2 subnet IDs for the cache subnet group.',
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
        .literal('ModifyCacheSubnetGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyCacheSubnetGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyCacheSubnetGroupResultSchema } },
    },
    480: {
      description: 'CacheSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSubnetGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'CacheSubnetQuotaExceededFault',
      content: { 'text/xml': { schema: CacheSubnetQuotaExceededFaultSchema } },
    },
    482: { description: 'SubnetInUse', content: { 'text/xml': { schema: SubnetInUseSchema } } },
    483: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
    484: {
      description: 'SubnetNotAllowedFault',
      content: { 'text/xml': { schema: SubnetNotAllowedFaultSchema } },
    },
  },
})

export const postActionModifyCacheSubnetGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyCacheSubnetGroup',
  description: 'Modifies an existing cache subnet group.',
  operationId: 'POST_ModifyCacheSubnetGroup',
  request: {
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
        .literal('ModifyCacheSubnetGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyCacheSubnetGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyCacheSubnetGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyCacheSubnetGroupResultSchema } },
    },
    480: {
      description: 'CacheSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSubnetGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'CacheSubnetQuotaExceededFault',
      content: { 'text/xml': { schema: CacheSubnetQuotaExceededFaultSchema } },
    },
    482: { description: 'SubnetInUse', content: { 'text/xml': { schema: SubnetInUseSchema } } },
    483: { description: 'InvalidSubnet', content: { 'text/xml': { schema: InvalidSubnetSchema } } },
    484: {
      description: 'SubnetNotAllowedFault',
      content: { 'text/xml': { schema: SubnetNotAllowedFaultSchema } },
    },
  },
})

export const getActionModifyGlobalReplicationGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyGlobalReplicationGroup',
  description: 'Modifies the settings for a Global datastore.',
  operationId: 'GET_ModifyGlobalReplicationGroup',
  request: {
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
      GlobalReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'GlobalReplicationGroupId',
            in: 'query',
            required: true,
            description: 'The name of the Global datastore',
            schema: { type: 'string' },
          },
        }),
      ApplyImmediately: z
        .stringbool()
        .openapi({
          param: {
            name: 'ApplyImmediately',
            in: 'query',
            required: true,
            description:
              'This parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible. Modifications to Global Replication Groups cannot be requested to be applied in PreferredMaintenceWindow. ',
            schema: { type: 'boolean' },
          },
        }),
      CacheNodeType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheNodeType',
            in: 'query',
            required: false,
            description: 'A valid cache node type that you want to scale this Global datastore to.',
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
              'The upgraded version of the cache engine to be run on the clusters in the Global datastore. ',
            schema: { type: 'string' },
          },
        }),
      CacheParameterGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheParameterGroupName',
            in: 'query',
            required: false,
            description:
              'The name of the cache parameter group to use with the Global datastore. It must be compatible with the major engine version used by the Global datastore.',
            schema: { type: 'string' },
          },
        }),
      GlobalReplicationGroupDescription: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'GlobalReplicationGroupDescription',
            in: 'query',
            required: false,
            description: 'A description of the Global datastore',
            schema: { type: 'string' },
          },
        }),
      AutomaticFailoverEnabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'AutomaticFailoverEnabled',
            in: 'query',
            required: false,
            description:
              'Determines whether a read replica is automatically promoted to read/write primary if the existing primary encounters a failure. ',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('ModifyGlobalReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyGlobalReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyGlobalReplicationGroupResultSchema } },
    },
    480: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postActionModifyGlobalReplicationGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyGlobalReplicationGroup',
  description: 'Modifies the settings for a Global datastore.',
  operationId: 'POST_ModifyGlobalReplicationGroup',
  request: {
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
        .literal('ModifyGlobalReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyGlobalReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyGlobalReplicationGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyGlobalReplicationGroupResultSchema } },
    },
    480: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const getActionModifyReplicationGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyReplicationGroup',
  description:
    '<p>Modifies the settings for a replication group.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a> in the ElastiCache User Guide</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a> in the ElastiCache API Reference</p> </li> </ul> <note> <p>This operation is valid for Redis only.</p> </note>',
  operationId: 'GET_ModifyReplicationGroup',
  request: {
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
      ReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'ReplicationGroupId',
            in: 'query',
            required: true,
            description: 'The identifier of the replication group to modify.',
            schema: { type: 'string' },
          },
        }),
      ReplicationGroupDescription: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ReplicationGroupDescription',
            in: 'query',
            required: false,
            description:
              'A description for the replication group. Maximum length is 255 characters.',
            schema: { type: 'string' },
          },
        }),
      PrimaryClusterId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PrimaryClusterId',
            in: 'query',
            required: false,
            description:
              'For replication groups with a single primary, if this parameter is specified, ElastiCache promotes the specified cluster in the specified replication group to the primary role. The nodes of all other clusters in the replication group are read replicas.',
            schema: { type: 'string' },
          },
        }),
      SnapshottingClusterId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SnapshottingClusterId',
            in: 'query',
            required: false,
            description:
              'The cluster ID that is used as the daily snapshot source for the replication group. This parameter cannot be set for Redis (cluster mode enabled) replication groups.',
            schema: { type: 'string' },
          },
        }),
      AutomaticFailoverEnabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'AutomaticFailoverEnabled',
            in: 'query',
            required: false,
            description:
              '<p>Determines whether a read replica is automatically promoted to read/write primary if the existing primary encounters a failure.</p> <p>Valid values: <code>true</code> | <code>false</code> </p>',
            schema: { type: 'boolean' },
          },
        }),
      MultiAZEnabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'MultiAZEnabled',
            in: 'query',
            required: false,
            description: 'A flag to indicate MultiAZ is enabled.',
            schema: { type: 'boolean' },
          },
        }),
      NodeGroupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NodeGroupId',
            in: 'query',
            required: false,
            description: 'Deprecated. This parameter is not used.',
            schema: { type: 'string' },
          },
        }),
      CacheSecurityGroupNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'CacheSecurityGroupName' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheSecurityGroupNames',
            in: 'query',
            required: false,
            description:
              '<p>A list of cache security group names to authorize for the clusters in this replication group. This change is asynchronously applied as soon as possible.</p> <p>This parameter can be used only with replication group containing clusters running outside of an Amazon Virtual Private Cloud (Amazon VPC).</p> <p>Constraints: Must contain no more than 255 alphanumeric characters. Must not be <code>Default</code>.</p>',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'CacheSecurityGroupName' } },
                ],
              },
            },
          },
        }),
      SecurityGroupIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'SecurityGroupId' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'SecurityGroupIds',
            in: 'query',
            required: false,
            description:
              '<p>Specifies the VPC Security Groups associated with the clusters in the replication group.</p> <p>This parameter can be used only with replication group containing clusters running in an Amazon Virtual Private Cloud (Amazon VPC).</p>',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/String' },
                  { xml: { name: 'SecurityGroupId' } },
                ],
              },
            },
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
              '<p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p> <p>Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:23:00-mon:01:30</code> </p>',
            schema: { type: 'string' },
          },
        }),
      NotificationTopicArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NotificationTopicArn',
            in: 'query',
            required: false,
            description:
              '<p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent.</p> <note> <p>The Amazon SNS topic owner must be same as the replication group owner. </p> </note>',
            schema: { type: 'string' },
          },
        }),
      CacheParameterGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheParameterGroupName',
            in: 'query',
            required: false,
            description:
              'The name of the cache parameter group to apply to all of the clusters in this replication group. This change is asynchronously applied as soon as possible for parameters when the <code>ApplyImmediately</code> parameter is specified as <code>true</code> for this request.',
            schema: { type: 'string' },
          },
        }),
      NotificationTopicStatus: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NotificationTopicStatus',
            in: 'query',
            required: false,
            description:
              '<p>The status of the Amazon SNS notification topic for the replication group. Notifications are sent only if the status is <code>active</code>.</p> <p>Valid values: <code>active</code> | <code>inactive</code> </p>',
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
              '<p>If <code>true</code>, this parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the replication group.</p> <p>If <code>false</code>, changes to the nodes in the replication group are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first.</p> <p>Valid values: <code>true</code> | <code>false</code> </p> <p>Default: <code>false</code> </p>',
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
              '<p>The upgraded version of the cache engine to be run on the clusters in the replication group.</p> <p> <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing replication group and create it anew with the earlier engine version. </p>',
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
              ' If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.  ',
            schema: { type: 'boolean' },
          },
        }),
      SnapshotRetentionLimit: z
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
            name: 'SnapshotRetentionLimit',
            in: 'query',
            required: false,
            description:
              '<p>The number of days for which ElastiCache retains automatic node group (shard) snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p> <p> <b>Important</b> If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.</p>',
            schema: { type: 'integer' },
          },
        }),
      SnapshotWindow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SnapshotWindow',
            in: 'query',
            required: false,
            description:
              '<p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of the node group (shard) specified by <code>SnapshottingClusterId</code>.</p> <p>Example: <code>05:00-09:00</code> </p> <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.</p>',
            schema: { type: 'string' },
          },
        }),
      CacheNodeType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CacheNodeType',
            in: 'query',
            required: false,
            description:
              'A valid cache node type that you want to scale this replication group to.',
            schema: { type: 'string' },
          },
        }),
      AuthToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'AuthToken',
            in: 'query',
            required: false,
            description:
              "<p>Reserved parameter. The password used to access a password protected server. This parameter must be specified with the <code>auth-token-update-strategy </code> parameter. Password constraints:</p> <ul> <li> <p>Must be only printable ASCII characters</p> </li> <li> <p>Must be at least 16 characters and no more than 128 characters in length</p> </li> <li> <p>Cannot contain any of the following characters: '/', '\"', or '@', '%'</p> </li> </ul> <p> For more information, see AUTH password at <a href=\"http://redis.io/commands/AUTH\">AUTH</a>.</p>",
            schema: { type: 'string' },
          },
        }),
      AuthTokenUpdateStrategy: z
        .enum(['SET', 'ROTATE', 'DELETE'])
        .exactOptional()
        .openapi({
          param: {
            name: 'AuthTokenUpdateStrategy',
            in: 'query',
            required: false,
            description:
              '<p>Specifies the strategy to use to update the AUTH token. This parameter must be specified with the <code>auth-token</code> parameter. Possible values:</p> <ul> <li> <p>Rotate</p> </li> <li> <p>Set</p> </li> </ul> <p> For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html">Authenticating Users with Redis AUTH</a> </p>',
            schema: { type: 'string', enum: ['SET', 'ROTATE', 'DELETE'] },
          },
        }),
      UserGroupIdsToAdd: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(UserGroupIdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'UserGroupIdsToAdd',
            in: 'query',
            required: false,
            description: 'The ID of the user group you are associating with the replication group.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/UserGroupId' } },
          },
        }),
      UserGroupIdsToRemove: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(UserGroupIdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'UserGroupIdsToRemove',
            in: 'query',
            required: false,
            description:
              'The ID of the user group to disassociate from the replication group, meaning the users in the group no longer can access the replication group.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/UserGroupId' } },
          },
        }),
      RemoveUserGroups: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'RemoveUserGroups',
            in: 'query',
            required: false,
            description: 'Removes the user group associated with this replication group.',
            schema: { type: 'boolean' },
          },
        }),
      LogDeliveryConfigurations: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                LogType: LogTypeSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'Refers to <a href="https://redis.io/commands/slowlog">slow-log</a> or engine-log..',
                    }),
                ).exactOptional(),
                DestinationType: DestinationTypeSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'Specify either <code>cloudwatch-logs</code> or <code>kinesis-firehose</code> as the destination type.',
                    }),
                ).exactOptional(),
                DestinationDetails: DestinationDetailsSchema.and(
                  z
                    .any()
                    .openapi({
                      description:
                        'Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.',
                    }),
                ).exactOptional(),
                LogFormat: LogFormatSchema.and(
                  z.any().openapi({ description: 'Specifies either JSON or TEXT' }),
                ).exactOptional(),
                Enabled: z
                  .preprocess(
                    ((read) => (val: unknown) => {
                      const result = read.safeParse(val)
                      return result.success ? result.data : val
                    })(z.stringbool()),
                    BooleanOptionalSchema,
                  )
                  .and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specify if log delivery is enabled. Default <code>true</code>.',
                      }),
                  )
                  .exactOptional(),
              })
              .openapi({
                description: 'Specifies the destination, format and type of the logs. ',
                required: [],
              })
              .and(
                ((schema) =>
                  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                  z.any(),
                ).openapi({ xml: { name: 'LogDeliveryConfigurationRequest' } }),
              ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'LogDeliveryConfigurations',
            in: 'query',
            required: false,
            description: 'Specifies the destination, format and type of the logs.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  {
                    type: 'object',
                    properties: {
                      LogType: {
                        allOf: [
                          { $ref: '#/components/schemas/LogType' },
                          {
                            description:
                              'Refers to <a href="https://redis.io/commands/slowlog">slow-log</a> or engine-log..',
                          },
                        ],
                      },
                      DestinationType: {
                        allOf: [
                          { $ref: '#/components/schemas/DestinationType' },
                          {
                            description:
                              'Specify either <code>cloudwatch-logs</code> or <code>kinesis-firehose</code> as the destination type.',
                          },
                        ],
                      },
                      DestinationDetails: {
                        allOf: [
                          { $ref: '#/components/schemas/DestinationDetails' },
                          {
                            description:
                              'Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.',
                          },
                        ],
                      },
                      LogFormat: {
                        allOf: [
                          { $ref: '#/components/schemas/LogFormat' },
                          { description: 'Specifies either JSON or TEXT' },
                        ],
                      },
                      Enabled: {
                        allOf: [
                          { $ref: '#/components/schemas/BooleanOptional' },
                          {
                            description:
                              'Specify if log delivery is enabled. Default <code>true</code>.',
                          },
                        ],
                      },
                    },
                    description: 'Specifies the destination, format and type of the logs. ',
                  },
                  { xml: { name: 'LogDeliveryConfigurationRequest' } },
                ],
              },
            },
          },
        }),
      IpDiscovery: z
        .enum(['ipv4', 'ipv6'])
        .exactOptional()
        .openapi({
          param: {
            name: 'IpDiscovery',
            in: 'query',
            required: false,
            description:
              'The network type you choose when modifying a cluster, either <code>ipv4</code> | <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.',
            schema: { type: 'string', enum: ['ipv4', 'ipv6'] },
          },
        }),
      TransitEncryptionEnabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'TransitEncryptionEnabled',
            in: 'query',
            required: false,
            description:
              'A flag that enables in-transit encryption when set to true. If you are enabling in-transit encryption for an existing cluster, you must also set <code>TransitEncryptionMode</code> to <code>preferred</code>.',
            schema: { type: 'boolean' },
          },
        }),
      TransitEncryptionMode: z
        .enum(['preferred', 'required'])
        .exactOptional()
        .openapi({
          param: {
            name: 'TransitEncryptionMode',
            in: 'query',
            required: false,
            description:
              '<p>A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.</p> <p>You must set <code>TransitEncryptionEnabled</code> to <code>true</code>, for your existing cluster, and set <code>TransitEncryptionMode</code> to <code>preferred</code> in the same request to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Redis clients to use encrypted connections you can set the value to <code>required</code> to allow encrypted connections only.</p> <p>Setting <code>TransitEncryptionMode</code> to <code>required</code> is a two-step process that requires you to first set the <code>TransitEncryptionMode</code> to <code>preferred</code>, after that you can set <code>TransitEncryptionMode</code> to <code>required</code>. </p>',
            schema: { type: 'string', enum: ['preferred', 'required'] },
          },
        }),
      ClusterMode: z
        .enum(['enabled', 'disabled', 'compatible'])
        .exactOptional()
        .openapi({
          param: {
            name: 'ClusterMode',
            in: 'query',
            required: false,
            description:
              'Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Redis clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Redis clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled.',
            schema: { type: 'string', enum: ['enabled', 'disabled', 'compatible'] },
          },
        }),
      Action: z
        .literal('ModifyReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyReplicationGroupResultSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidUserGroupStateFault',
      content: { 'text/xml': { schema: InvalidUserGroupStateFaultSchema } },
    },
    483: {
      description: 'UserGroupNotFoundFault',
      content: { 'text/xml': { schema: UserGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    485: {
      description: 'InvalidCacheSecurityGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheSecurityGroupStateFaultSchema } },
    },
    486: {
      description: 'InsufficientCacheClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientCacheClusterCapacityFaultSchema } },
    },
    487: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    488: {
      description: 'NodeQuotaForClusterExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForClusterExceededFaultSchema } },
    },
    489: {
      description: 'NodeQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForCustomerExceededFaultSchema } },
    },
    490: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    491: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    492: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    493: {
      description: 'InvalidKMSKeyFault',
      content: { 'text/xml': { schema: InvalidKMSKeyFaultSchema } },
    },
    494: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    495: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionModifyReplicationGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyReplicationGroup',
  description:
    '<p>Modifies the settings for a replication group.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a> in the ElastiCache User Guide</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a> in the ElastiCache API Reference</p> </li> </ul> <note> <p>This operation is valid for Redis only.</p> </note>',
  operationId: 'POST_ModifyReplicationGroup',
  request: {
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
        .literal('ModifyReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyReplicationGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyReplicationGroupResultSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidUserGroupStateFault',
      content: { 'text/xml': { schema: InvalidUserGroupStateFaultSchema } },
    },
    483: {
      description: 'UserGroupNotFoundFault',
      content: { 'text/xml': { schema: UserGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    485: {
      description: 'InvalidCacheSecurityGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheSecurityGroupStateFaultSchema } },
    },
    486: {
      description: 'InsufficientCacheClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientCacheClusterCapacityFaultSchema } },
    },
    487: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    488: {
      description: 'NodeQuotaForClusterExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForClusterExceededFaultSchema } },
    },
    489: {
      description: 'NodeQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForCustomerExceededFaultSchema } },
    },
    490: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    491: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    492: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    493: {
      description: 'InvalidKMSKeyFault',
      content: { 'text/xml': { schema: InvalidKMSKeyFaultSchema } },
    },
    494: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    495: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionModifyReplicationGroupShardConfigurationRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyReplicationGroupShardConfiguration',
  description:
    "Modifies a replication group's shards (node groups) by allowing you to add shards, remove shards, or rebalance the keyspaces among existing shards.",
  operationId: 'GET_ModifyReplicationGroupShardConfiguration',
  request: {
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
      ReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'ReplicationGroupId',
            in: 'query',
            required: true,
            description:
              'The name of the Redis (cluster mode enabled) cluster (replication group) on which the shards are to be configured.',
            schema: { type: 'string' },
          },
        }),
      NodeGroupCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'NodeGroupCount',
            in: 'query',
            required: true,
            description:
              'The number of node groups (shards) that results from the modification of the shard configuration.',
            schema: { type: 'integer' },
          },
        }),
      ApplyImmediately: z
        .stringbool()
        .openapi({
          param: {
            name: 'ApplyImmediately',
            in: 'query',
            required: true,
            description:
              '<p>Indicates that the shard reconfiguration process begins immediately. At present, the only permitted value for this parameter is <code>true</code>.</p> <p>Value: true</p>',
            schema: { type: 'boolean' },
          },
        }),
      ReshardingConfiguration: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ReshardingConfigurationSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'ReshardingConfiguration' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ReshardingConfiguration',
            in: 'query',
            required: false,
            description:
              "<p>Specifies the preferred availability zones for each node group in the cluster. If the value of <code>NodeGroupCount</code> is greater than the current number of node groups (shards), you can use this parameter to specify the preferred availability zones of the cluster's shards. If you omit this parameter ElastiCache selects availability zones for you.</p> <p>You can specify this parameter only if the value of <code>NodeGroupCount</code> is greater than the current number of node groups (shards).</p>",
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/ReshardingConfiguration' },
                  { xml: { name: 'ReshardingConfiguration' } },
                ],
              },
            },
          },
        }),
      NodeGroupsToRemove: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            AllowedNodeGroupIdSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'NodeGroupToRemove' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'NodeGroupsToRemove',
            in: 'query',
            required: false,
            description:
              '<p>If the value of <code>NodeGroupCount</code> is less than the current number of node groups (shards), then either <code>NodeGroupsToRemove</code> or <code>NodeGroupsToRetain</code> is required. <code>NodeGroupsToRemove</code> is a list of <code>NodeGroupId</code>s to remove from the cluster.</p> <p>ElastiCache for Redis will attempt to remove all node groups listed by <code>NodeGroupsToRemove</code> from the cluster.</p>',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/AllowedNodeGroupId' },
                  { xml: { name: 'NodeGroupToRemove' } },
                ],
              },
            },
          },
        }),
      NodeGroupsToRetain: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            AllowedNodeGroupIdSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'NodeGroupToRetain' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'NodeGroupsToRetain',
            in: 'query',
            required: false,
            description:
              '<p>If the value of <code>NodeGroupCount</code> is less than the current number of node groups (shards), then either <code>NodeGroupsToRemove</code> or <code>NodeGroupsToRetain</code> is required. <code>NodeGroupsToRetain</code> is a list of <code>NodeGroupId</code>s to retain in the cluster.</p> <p>ElastiCache for Redis will attempt to remove all node groups except those listed by <code>NodeGroupsToRetain</code> from the cluster.</p>',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/AllowedNodeGroupId' },
                  { xml: { name: 'NodeGroupToRetain' } },
                ],
              },
            },
          },
        }),
      Action: z
        .literal('ModifyReplicationGroupShardConfiguration')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyReplicationGroupShardConfiguration'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyReplicationGroupShardConfigurationResultSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    483: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    484: {
      description: 'InsufficientCacheClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientCacheClusterCapacityFaultSchema } },
    },
    485: {
      description: 'NodeGroupsPerReplicationGroupQuotaExceededFault',
      content: { 'text/xml': { schema: NodeGroupsPerReplicationGroupQuotaExceededFaultSchema } },
    },
    486: {
      description: 'NodeQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForCustomerExceededFaultSchema } },
    },
    487: {
      description: 'InvalidKMSKeyFault',
      content: { 'text/xml': { schema: InvalidKMSKeyFaultSchema } },
    },
    488: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    489: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionModifyReplicationGroupShardConfigurationRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyReplicationGroupShardConfiguration',
  description:
    "Modifies a replication group's shards (node groups) by allowing you to add shards, remove shards, or rebalance the keyspaces among existing shards.",
  operationId: 'POST_ModifyReplicationGroupShardConfiguration',
  request: {
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
        .literal('ModifyReplicationGroupShardConfiguration')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyReplicationGroupShardConfiguration'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: ModifyReplicationGroupShardConfigurationMessageSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ModifyReplicationGroupShardConfigurationResultSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    483: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'text/xml': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    484: {
      description: 'InsufficientCacheClusterCapacityFault',
      content: { 'text/xml': { schema: InsufficientCacheClusterCapacityFaultSchema } },
    },
    485: {
      description: 'NodeGroupsPerReplicationGroupQuotaExceededFault',
      content: { 'text/xml': { schema: NodeGroupsPerReplicationGroupQuotaExceededFaultSchema } },
    },
    486: {
      description: 'NodeQuotaForCustomerExceededFault',
      content: { 'text/xml': { schema: NodeQuotaForCustomerExceededFaultSchema } },
    },
    487: {
      description: 'InvalidKMSKeyFault',
      content: { 'text/xml': { schema: InvalidKMSKeyFaultSchema } },
    },
    488: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    489: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionModifyUserRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyUser',
  description: 'Changes user password(s) and/or access string.',
  operationId: 'GET_ModifyUser',
  request: {
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
        const spread = new Map<string, string[]>([['Type', ['AuthenticationMode']]])
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
          UserId: z
            .string()
            .regex(/[a-zA-Z][a-zA-Z0-9\-]*/)
            .min(1)
            .openapi({
              param: {
                name: 'UserId',
                in: 'query',
                required: true,
                description: 'The ID of the user.',
                schema: { type: 'string', pattern: '[a-zA-Z][a-zA-Z0-9\\-]*', minLength: 1 },
              },
            }),
          AccessString: z
            .string()
            .regex(/.*\S.*/)
            .exactOptional()
            .openapi({
              param: {
                name: 'AccessString',
                in: 'query',
                required: false,
                description: 'Access permissions string used for this user.',
                schema: { type: 'string', pattern: '.*\\S.*' },
              },
            }),
          AppendAccessString: z
            .string()
            .regex(/.*\S.*/)
            .exactOptional()
            .openapi({
              param: {
                name: 'AppendAccessString',
                in: 'query',
                required: false,
                description: 'Adds additional user permissions to the access string.',
                schema: { type: 'string', pattern: '.*\\S.*' },
              },
            }),
          Passwords: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(StringSchema).min(1),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Passwords',
                in: 'query',
                required: false,
                description: 'The passwords belonging to the user. You are allowed up to two.',
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/String' },
                  minItems: 1,
                },
              },
            }),
          NoPasswordRequired: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'NoPasswordRequired',
                in: 'query',
                required: false,
                description: 'Indicates no password is required for the user.',
                schema: { type: 'boolean' },
              },
            }),
          AuthenticationMode: z
            .object({
              Type: InputAuthenticationTypeSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'Specifies the authentication type. Possible options are IAM authentication, password and no password.',
                  }),
              ).exactOptional(),
              Passwords: PasswordListInputSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'Specifies the passwords to use for authentication if <code>Type</code> is set to <code>password</code>.',
                  }),
              ).exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'AuthenticationMode',
                in: 'query',
                required: false,
                description: 'Specifies how to authenticate the user.',
                schema: {
                  type: 'object',
                  properties: {
                    Type: {
                      allOf: [
                        { $ref: '#/components/schemas/InputAuthenticationType' },
                        {
                          description:
                            'Specifies the authentication type. Possible options are IAM authentication, password and no password.',
                        },
                      ],
                    },
                    Passwords: {
                      allOf: [
                        { $ref: '#/components/schemas/PasswordListInput' },
                        {
                          description:
                            'Specifies the passwords to use for authentication if <code>Type</code> is set to <code>password</code>.',
                        },
                      ],
                    },
                  },
                  description: 'Specifies the authentication mode to use.',
                },
              },
              description: 'Specifies the authentication mode to use.',
              required: [],
            }),
          Action: z
            .literal('ModifyUser')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['ModifyUser'] },
              },
            }),
          Version: z
            .literal('2015-02-02')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2015-02-02'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: UserSchema } } },
    480: {
      description: 'UserNotFoundFault',
      content: { 'text/xml': { schema: UserNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidUserStateFault',
      content: { 'text/xml': { schema: InvalidUserStateFaultSchema } },
    },
    482: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionModifyUserRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyUser',
  description: 'Changes user password(s) and/or access string.',
  operationId: 'POST_ModifyUser',
  request: {
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
        .literal('ModifyUser')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyUser'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyUserMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: UserSchema } } },
    480: {
      description: 'UserNotFoundFault',
      content: { 'text/xml': { schema: UserNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidUserStateFault',
      content: { 'text/xml': { schema: InvalidUserStateFaultSchema } },
    },
    482: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionModifyUserGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=ModifyUserGroup',
  description: 'Changes the list of users that belong to the user group.',
  operationId: 'GET_ModifyUserGroup',
  request: {
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
      UserGroupId: z
        .string()
        .openapi({
          param: {
            name: 'UserGroupId',
            in: 'query',
            required: true,
            description: 'The ID of the user group.',
            schema: { type: 'string' },
          },
        }),
      UserIdsToAdd: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(UserIdSchema).min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'UserIdsToAdd',
            in: 'query',
            required: false,
            description: 'The list of user IDs to add to the user group.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/UserId' }, minItems: 1 },
          },
        }),
      UserIdsToRemove: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(UserIdSchema).min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'UserIdsToRemove',
            in: 'query',
            required: false,
            description: 'The list of user IDs to remove from the user group.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/UserId' }, minItems: 1 },
          },
        }),
      Action: z
        .literal('ModifyUserGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyUserGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: UserGroupSchema } } },
    480: {
      description: 'UserGroupNotFoundFault',
      content: { 'text/xml': { schema: UserGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'UserNotFoundFault',
      content: { 'text/xml': { schema: UserNotFoundFaultSchema } },
    },
    482: {
      description: 'DuplicateUserNameFault',
      content: { 'text/xml': { schema: DuplicateUserNameFaultSchema } },
    },
    483: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    484: {
      description: 'DefaultUserRequired',
      content: { 'text/xml': { schema: DefaultUserRequiredSchema } },
    },
    485: {
      description: 'InvalidUserGroupStateFault',
      content: { 'text/xml': { schema: InvalidUserGroupStateFaultSchema } },
    },
    486: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    487: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionModifyUserGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=ModifyUserGroup',
  description: 'Changes the list of users that belong to the user group.',
  operationId: 'POST_ModifyUserGroup',
  request: {
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
        .literal('ModifyUserGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ModifyUserGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ModifyUserGroupMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: UserGroupSchema } } },
    480: {
      description: 'UserGroupNotFoundFault',
      content: { 'text/xml': { schema: UserGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'UserNotFoundFault',
      content: { 'text/xml': { schema: UserNotFoundFaultSchema } },
    },
    482: {
      description: 'DuplicateUserNameFault',
      content: { 'text/xml': { schema: DuplicateUserNameFaultSchema } },
    },
    483: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'text/xml': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    484: {
      description: 'DefaultUserRequired',
      content: { 'text/xml': { schema: DefaultUserRequiredSchema } },
    },
    485: {
      description: 'InvalidUserGroupStateFault',
      content: { 'text/xml': { schema: InvalidUserGroupStateFaultSchema } },
    },
    486: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    487: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionPurchaseReservedCacheNodesOfferingRoute = createRoute({
  method: 'get',
  path: '/#Action=PurchaseReservedCacheNodesOffering',
  description:
    'Allows you to purchase a reserved cache node offering. Reserved nodes are not eligible for cancellation and are non-refundable. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Redis or <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Memcached.',
  operationId: 'GET_PurchaseReservedCacheNodesOffering',
  request: {
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
      ReservedCacheNodesOfferingId: z
        .string()
        .openapi({
          param: {
            name: 'ReservedCacheNodesOfferingId',
            in: 'query',
            required: true,
            description:
              '<p>The ID of the reserved cache node offering to purchase.</p> <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code> </p>',
            schema: { type: 'string' },
          },
        }),
      ReservedCacheNodeId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ReservedCacheNodeId',
            in: 'query',
            required: false,
            description:
              '<p>A customer-specified identifier to track this reservation.</p> <note> <p>The Reserved Cache Node ID is an unique customer-specified identifier to track this reservation. If this parameter is not specified, ElastiCache automatically generates an identifier for the reservation.</p> </note> <p>Example: myreservationID</p>',
            schema: { type: 'string' },
          },
        }),
      CacheNodeCount: z
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
            name: 'CacheNodeCount',
            in: 'query',
            required: false,
            description:
              '<p>The number of cache node instances to reserve.</p> <p>Default: <code>1</code> </p>',
            schema: { type: 'integer' },
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
              'A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.',
            schema: {
              type: 'array',
              items: { allOf: [{ $ref: '#/components/schemas/Tag' }, { xml: { name: 'Tag' } }] },
            },
          },
        }),
      Action: z
        .literal('PurchaseReservedCacheNodesOffering')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PurchaseReservedCacheNodesOffering'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PurchaseReservedCacheNodesOfferingResultSchema } },
    },
    480: {
      description: 'ReservedCacheNodesOfferingNotFoundFault',
      content: { 'text/xml': { schema: ReservedCacheNodesOfferingNotFoundFaultSchema } },
    },
    481: {
      description: 'ReservedCacheNodeAlreadyExistsFault',
      content: { 'text/xml': { schema: ReservedCacheNodeAlreadyExistsFaultSchema } },
    },
    482: {
      description: 'ReservedCacheNodeQuotaExceededFault',
      content: { 'text/xml': { schema: ReservedCacheNodeQuotaExceededFaultSchema } },
    },
    483: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionPurchaseReservedCacheNodesOfferingRoute = createRoute({
  method: 'post',
  path: '/#Action=PurchaseReservedCacheNodesOffering',
  description:
    'Allows you to purchase a reserved cache node offering. Reserved nodes are not eligible for cancellation and are non-refundable. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Redis or <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Memcached.',
  operationId: 'POST_PurchaseReservedCacheNodesOffering',
  request: {
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
        .literal('PurchaseReservedCacheNodesOffering')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['PurchaseReservedCacheNodesOffering'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: PurchaseReservedCacheNodesOfferingMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: PurchaseReservedCacheNodesOfferingResultSchema } },
    },
    480: {
      description: 'ReservedCacheNodesOfferingNotFoundFault',
      content: { 'text/xml': { schema: ReservedCacheNodesOfferingNotFoundFaultSchema } },
    },
    481: {
      description: 'ReservedCacheNodeAlreadyExistsFault',
      content: { 'text/xml': { schema: ReservedCacheNodeAlreadyExistsFaultSchema } },
    },
    482: {
      description: 'ReservedCacheNodeQuotaExceededFault',
      content: { 'text/xml': { schema: ReservedCacheNodeQuotaExceededFaultSchema } },
    },
    483: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'text/xml': { schema: TagQuotaPerResourceExceededSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionRebalanceSlotsInGlobalReplicationGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=RebalanceSlotsInGlobalReplicationGroup',
  description:
    'Redistribute slots to ensure uniform distribution across existing shards in the cluster.',
  operationId: 'GET_RebalanceSlotsInGlobalReplicationGroup',
  request: {
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
      GlobalReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'GlobalReplicationGroupId',
            in: 'query',
            required: true,
            description: 'The name of the Global datastore',
            schema: { type: 'string' },
          },
        }),
      ApplyImmediately: z
        .stringbool()
        .openapi({
          param: {
            name: 'ApplyImmediately',
            in: 'query',
            required: true,
            description: 'If <code>True</code>, redistribution is applied immediately.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('RebalanceSlotsInGlobalReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RebalanceSlotsInGlobalReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RebalanceSlotsInGlobalReplicationGroupResultSchema } },
    },
    480: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postActionRebalanceSlotsInGlobalReplicationGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=RebalanceSlotsInGlobalReplicationGroup',
  description:
    'Redistribute slots to ensure uniform distribution across existing shards in the cluster.',
  operationId: 'POST_RebalanceSlotsInGlobalReplicationGroup',
  request: {
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
        .literal('RebalanceSlotsInGlobalReplicationGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RebalanceSlotsInGlobalReplicationGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: RebalanceSlotsInGlobalReplicationGroupMessageSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RebalanceSlotsInGlobalReplicationGroupResultSchema } },
    },
    480: {
      description: 'GlobalReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: GlobalReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const getActionRebootCacheClusterRoute = createRoute({
  method: 'get',
  path: '/#Action=RebootCacheCluster',
  description:
    '<p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>',
  operationId: 'GET_RebootCacheCluster',
  request: {
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
      CacheClusterId: z
        .string()
        .openapi({
          param: {
            name: 'CacheClusterId',
            in: 'query',
            required: true,
            description: 'The cluster identifier. This parameter is stored as a lowercase string.',
            schema: { type: 'string' },
          },
        }),
      CacheNodeIdsToReboot: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            StringSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'CacheNodeId' } }),
            ),
          ),
        )
        .openapi({
          param: {
            name: 'CacheNodeIdsToReboot',
            in: 'query',
            required: true,
            description:
              'A list of cache node IDs to reboot. A node ID is a numeric identifier (0001, 0002, etc.). To reboot an entire cluster, specify all of the cache node IDs.',
            schema: {
              type: 'array',
              items: {
                allOf: [{ $ref: '#/components/schemas/String' }, { xml: { name: 'CacheNodeId' } }],
              },
            },
          },
        }),
      Action: z
        .literal('RebootCacheCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RebootCacheCluster'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RebootCacheClusterResultSchema } },
    },
    480: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    481: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
  },
})

export const postActionRebootCacheClusterRoute = createRoute({
  method: 'post',
  path: '/#Action=RebootCacheCluster',
  description:
    '<p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>',
  operationId: 'POST_RebootCacheCluster',
  request: {
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
        .literal('RebootCacheCluster')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RebootCacheCluster'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RebootCacheClusterMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RebootCacheClusterResultSchema } },
    },
    480: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    481: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
  },
})

export const getActionRemoveTagsFromResourceRoute = createRoute({
  method: 'get',
  path: '/#Action=RemoveTagsFromResource',
  description:
    'Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.',
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
              '<p>The Amazon Resource Name (ARN) of the resource from which you want the tags removed, for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code> or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Service Namespaces</a>.</p>',
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
            description:
              'A list of <code>TagKeys</code> identifying the tags you want removed from the named resource.',
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
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: TagListMessageSchema } } },
    480: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    482: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    483: {
      description: 'CacheSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSubnetGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    485: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    486: {
      description: 'ReservedCacheNodeNotFoundFault',
      content: { 'text/xml': { schema: ReservedCacheNodeNotFoundFaultSchema } },
    },
    487: {
      description: 'SnapshotNotFoundFault',
      content: { 'text/xml': { schema: SnapshotNotFoundFaultSchema } },
    },
    488: {
      description: 'UserNotFoundFault',
      content: { 'text/xml': { schema: UserNotFoundFaultSchema } },
    },
    489: {
      description: 'UserGroupNotFoundFault',
      content: { 'text/xml': { schema: UserGroupNotFoundFaultSchema } },
    },
    490: {
      description: 'InvalidARNFault',
      content: { 'text/xml': { schema: InvalidARNFaultSchema } },
    },
    491: {
      description: 'TagNotFoundFault',
      content: { 'text/xml': { schema: TagNotFoundFaultSchema } },
    },
  },
})

export const postActionRemoveTagsFromResourceRoute = createRoute({
  method: 'post',
  path: '/#Action=RemoveTagsFromResource',
  description:
    'Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.',
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
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RemoveTagsFromResourceMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: TagListMessageSchema } } },
    480: {
      description: 'CacheClusterNotFoundFault',
      content: { 'text/xml': { schema: CacheClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    482: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    483: {
      description: 'CacheSubnetGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSubnetGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    485: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    486: {
      description: 'ReservedCacheNodeNotFoundFault',
      content: { 'text/xml': { schema: ReservedCacheNodeNotFoundFaultSchema } },
    },
    487: {
      description: 'SnapshotNotFoundFault',
      content: { 'text/xml': { schema: SnapshotNotFoundFaultSchema } },
    },
    488: {
      description: 'UserNotFoundFault',
      content: { 'text/xml': { schema: UserNotFoundFaultSchema } },
    },
    489: {
      description: 'UserGroupNotFoundFault',
      content: { 'text/xml': { schema: UserGroupNotFoundFaultSchema } },
    },
    490: {
      description: 'InvalidARNFault',
      content: { 'text/xml': { schema: InvalidARNFaultSchema } },
    },
    491: {
      description: 'TagNotFoundFault',
      content: { 'text/xml': { schema: TagNotFoundFaultSchema } },
    },
  },
})

export const getActionResetCacheParameterGroupRoute = createRoute({
  method: 'get',
  path: '/#Action=ResetCacheParameterGroup',
  description:
    'Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.',
  operationId: 'GET_ResetCacheParameterGroup',
  request: {
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
      CacheParameterGroupName: z
        .string()
        .openapi({
          param: {
            name: 'CacheParameterGroupName',
            in: 'query',
            required: true,
            description: 'The name of the cache parameter group to reset.',
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
              '<p>If <code>true</code>, all parameters in the cache parameter group are reset to their default values. If <code>false</code>, only the parameters listed by <code>ParameterNameValues</code> are reset to their default values.</p> <p>Valid values: <code>true</code> | <code>false</code> </p>',
            schema: { type: 'boolean' },
          },
        }),
      ParameterNameValues: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ParameterNameValueSchema.and(
              ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.any(),
              ).openapi({ xml: { name: 'ParameterNameValue' } }),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ParameterNameValues',
            in: 'query',
            required: false,
            description:
              'An array of parameter names to reset to their default values. If <code>ResetAllParameters</code> is <code>true</code>, do not use <code>ParameterNameValues</code>. If <code>ResetAllParameters</code> is <code>false</code>, you must specify the name of at least one parameter to reset.',
            schema: {
              type: 'array',
              items: {
                allOf: [
                  { $ref: '#/components/schemas/ParameterNameValue' },
                  { xml: { name: 'ParameterNameValue' } },
                ],
              },
            },
          },
        }),
      Action: z
        .literal('ResetCacheParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ResetCacheParameterGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CacheParameterGroupNameMessageSchema } },
    },
    480: {
      description: 'InvalidCacheParameterGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheParameterGroupStateFaultSchema } },
    },
    481: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    484: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
  },
})

export const postActionResetCacheParameterGroupRoute = createRoute({
  method: 'post',
  path: '/#Action=ResetCacheParameterGroup',
  description:
    'Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.',
  operationId: 'POST_ResetCacheParameterGroup',
  request: {
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
        .literal('ResetCacheParameterGroup')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ResetCacheParameterGroup'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ResetCacheParameterGroupMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CacheParameterGroupNameMessageSchema } },
    },
    480: {
      description: 'InvalidCacheParameterGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheParameterGroupStateFaultSchema } },
    },
    481: {
      description: 'CacheParameterGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheParameterGroupNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    484: {
      description: 'InvalidGlobalReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidGlobalReplicationGroupStateFaultSchema } },
    },
  },
})

export const getActionRevokeCacheSecurityGroupIngressRoute = createRoute({
  method: 'get',
  path: '/#Action=RevokeCacheSecurityGroupIngress',
  description:
    'Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.',
  operationId: 'GET_RevokeCacheSecurityGroupIngress',
  request: {
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
      CacheSecurityGroupName: z
        .string()
        .openapi({
          param: {
            name: 'CacheSecurityGroupName',
            in: 'query',
            required: true,
            description: 'The name of the cache security group to revoke ingress from.',
            schema: { type: 'string' },
          },
        }),
      EC2SecurityGroupName: z
        .string()
        .openapi({
          param: {
            name: 'EC2SecurityGroupName',
            in: 'query',
            required: true,
            description: 'The name of the Amazon EC2 security group to revoke access from.',
            schema: { type: 'string' },
          },
        }),
      EC2SecurityGroupOwnerId: z
        .string()
        .openapi({
          param: {
            name: 'EC2SecurityGroupOwnerId',
            in: 'query',
            required: true,
            description:
              'The Amazon account number of the Amazon EC2 security group owner. Note that this is not the same thing as an Amazon access key ID - you must provide a valid Amazon account number for this parameter.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('RevokeCacheSecurityGroupIngress')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RevokeCacheSecurityGroupIngress'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RevokeCacheSecurityGroupIngressResultSchema } },
    },
    480: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'AuthorizationNotFoundFault',
      content: { 'text/xml': { schema: AuthorizationNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidCacheSecurityGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheSecurityGroupStateFaultSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionRevokeCacheSecurityGroupIngressRoute = createRoute({
  method: 'post',
  path: '/#Action=RevokeCacheSecurityGroupIngress',
  description:
    'Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.',
  operationId: 'POST_RevokeCacheSecurityGroupIngress',
  request: {
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
        .literal('RevokeCacheSecurityGroupIngress')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RevokeCacheSecurityGroupIngress'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RevokeCacheSecurityGroupIngressMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RevokeCacheSecurityGroupIngressResultSchema } },
    },
    480: {
      description: 'CacheSecurityGroupNotFoundFault',
      content: { 'text/xml': { schema: CacheSecurityGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'AuthorizationNotFoundFault',
      content: { 'text/xml': { schema: AuthorizationNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidCacheSecurityGroupStateFault',
      content: { 'text/xml': { schema: InvalidCacheSecurityGroupStateFaultSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const getActionStartMigrationRoute = createRoute({
  method: 'get',
  path: '/#Action=StartMigration',
  description: 'Start the migration of data.',
  operationId: 'GET_StartMigration',
  request: {
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
      ReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'ReplicationGroupId',
            in: 'query',
            required: true,
            description: 'The ID of the replication group to which data should be migrated.',
            schema: { type: 'string' },
          },
        }),
      CustomerNodeEndpointList: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .object({
                Address: StringSchema.and(
                  z.any().openapi({ description: 'The address of the node endpoint' }),
                ).exactOptional(),
                Port: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    IntegerOptionalSchema,
                  )
                  .and(z.any().openapi({ description: 'The port of the node endpoint' }))
                  .exactOptional(),
              })
              .openapi({
                description: 'The endpoint from which data should be migrated.',
                required: [],
              }),
          ),
        )
        .openapi({
          param: {
            name: 'CustomerNodeEndpointList',
            in: 'query',
            required: true,
            description:
              'List of endpoints from which data should be migrated. For Redis (cluster mode disabled), list should have only one element.',
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  Address: {
                    allOf: [
                      { $ref: '#/components/schemas/String' },
                      { description: 'The address of the node endpoint' },
                    ],
                  },
                  Port: {
                    allOf: [
                      { $ref: '#/components/schemas/IntegerOptional' },
                      { description: 'The port of the node endpoint' },
                    ],
                  },
                },
                description: 'The endpoint from which data should be migrated.',
              },
            },
          },
        }),
      Action: z
        .literal('StartMigration')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['StartMigration'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: StartMigrationResponseSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'ReplicationGroupAlreadyUnderMigrationFault',
      content: { 'text/xml': { schema: ReplicationGroupAlreadyUnderMigrationFaultSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postActionStartMigrationRoute = createRoute({
  method: 'post',
  path: '/#Action=StartMigration',
  description: 'Start the migration of data.',
  operationId: 'POST_StartMigration',
  request: {
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
        .literal('StartMigration')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['StartMigration'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: StartMigrationMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: StartMigrationResponseSchema } },
    },
    480: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    482: {
      description: 'ReplicationGroupAlreadyUnderMigrationFault',
      content: { 'text/xml': { schema: ReplicationGroupAlreadyUnderMigrationFaultSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const getActionTestFailoverRoute = createRoute({
  method: 'get',
  path: '/#Action=TestFailover',
  description:
    '<p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p>This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. </p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>',
  operationId: 'GET_TestFailover',
  request: {
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
      ReplicationGroupId: z
        .string()
        .openapi({
          param: {
            name: 'ReplicationGroupId',
            in: 'query',
            required: true,
            description:
              'The name of the replication group (console: cluster) whose automatic failover is being tested by this operation.',
            schema: { type: 'string' },
          },
        }),
      NodeGroupId: z
        .string()
        .regex(/\d+/)
        .min(1)
        .max(4)
        .openapi({
          param: {
            name: 'NodeGroupId',
            in: 'query',
            required: true,
            description:
              'The name of the node group (called shard in the console) in this replication group on which automatic failover is to be tested. You may test automatic failover on up to 5 node groups in any rolling 24-hour period.',
            schema: { type: 'string', pattern: '\\d+', minLength: 1, maxLength: 4 },
          },
        }),
      Action: z
        .literal('TestFailover')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['TestFailover'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: TestFailoverResultSchema } } },
    480: {
      description: 'APICallRateForCustomerExceededFault',
      content: { 'text/xml': { schema: APICallRateForCustomerExceededFaultSchema } },
    },
    481: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    482: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    483: {
      description: 'NodeGroupNotFoundFault',
      content: { 'text/xml': { schema: NodeGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    485: {
      description: 'TestFailoverNotAvailableFault',
      content: { 'text/xml': { schema: TestFailoverNotAvailableFaultSchema } },
    },
    486: {
      description: 'InvalidKMSKeyFault',
      content: { 'text/xml': { schema: InvalidKMSKeyFaultSchema } },
    },
    487: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    488: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postActionTestFailoverRoute = createRoute({
  method: 'post',
  path: '/#Action=TestFailover',
  description:
    '<p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p>This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. </p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>',
  operationId: 'POST_TestFailover',
  request: {
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
        .literal('TestFailover')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['TestFailover'] },
          },
        }),
      Version: z
        .literal('2015-02-02')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2015-02-02'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: TestFailoverMessageSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: TestFailoverResultSchema } } },
    480: {
      description: 'APICallRateForCustomerExceededFault',
      content: { 'text/xml': { schema: APICallRateForCustomerExceededFaultSchema } },
    },
    481: {
      description: 'InvalidCacheClusterStateFault',
      content: { 'text/xml': { schema: InvalidCacheClusterStateFaultSchema } },
    },
    482: {
      description: 'InvalidReplicationGroupStateFault',
      content: { 'text/xml': { schema: InvalidReplicationGroupStateFaultSchema } },
    },
    483: {
      description: 'NodeGroupNotFoundFault',
      content: { 'text/xml': { schema: NodeGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'ReplicationGroupNotFoundFault',
      content: { 'text/xml': { schema: ReplicationGroupNotFoundFaultSchema } },
    },
    485: {
      description: 'TestFailoverNotAvailableFault',
      content: { 'text/xml': { schema: TestFailoverNotAvailableFaultSchema } },
    },
    486: {
      description: 'InvalidKMSKeyFault',
      content: { 'text/xml': { schema: InvalidKMSKeyFaultSchema } },
    },
    487: {
      description: 'InvalidParameterValueException',
      content: { 'text/xml': { schema: InvalidParameterValueExceptionSchema } },
    },
    488: {
      description: 'InvalidParameterCombinationException',
      content: { 'text/xml': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})
