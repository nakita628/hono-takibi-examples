type TagListMessage = { TagList?: {} | undefined }
type AddTagsToResourceMessage = { ResourceName: {}; Tags: {} }
type CacheSecurityGroup = {
  OwnerId?: {} | undefined
  CacheSecurityGroupName?: {} | undefined
  Description?: {} | undefined
  EC2SecurityGroups?: {} | undefined
  ARN?: {} | undefined
}
type AuthorizeCacheSecurityGroupIngressResult = {
  CacheSecurityGroup?: CacheSecurityGroup | undefined
}
type AuthorizeCacheSecurityGroupIngressMessage = {
  CacheSecurityGroupName: {}
  EC2SecurityGroupName: {}
  EC2SecurityGroupOwnerId: {}
}
type String = string
type UpdateActionResultsMessage = {
  ProcessedUpdateActions?: {} | undefined
  UnprocessedUpdateActions?: {} | undefined
}
type BatchApplyUpdateActionMessage = {
  ReplicationGroupIds?: {} | undefined
  CacheClusterIds?: {} | undefined
  ServiceUpdateName: {}
}
type BatchStopUpdateActionMessage = {
  ReplicationGroupIds?: {} | undefined
  CacheClusterIds?: {} | undefined
  ServiceUpdateName: {}
}
type ReplicationGroup = {
  ReplicationGroupId?: {} | undefined
  Description?: {} | undefined
  GlobalReplicationGroupInfo?:
    | {
        GlobalReplicationGroupId?: {} | undefined
        GlobalReplicationGroupMemberRole?: {} | undefined
      }
    | undefined
  Status?: {} | undefined
  PendingModifiedValues?:
    | {
        PrimaryClusterId?: {} | undefined
        AutomaticFailoverStatus?: {} | undefined
        Resharding?:
          | { SlotMigration?: { ProgressPercentage?: {} | undefined } | undefined }
          | undefined
        AuthTokenStatus?: {} | undefined
        UserGroups?:
          | { UserGroupIdsToAdd?: {} | undefined; UserGroupIdsToRemove?: {} | undefined }
          | undefined
        LogDeliveryConfigurations?: {} | undefined
        TransitEncryptionEnabled?: {} | undefined
        TransitEncryptionMode?: {} | undefined
        ClusterMode?: {} | undefined
      }
    | undefined
  MemberClusters?: {} | undefined
  NodeGroups?: {} | undefined
  SnapshottingClusterId?: {} | undefined
  AutomaticFailover?: {} | undefined
  MultiAZ?: {} | undefined
  ConfigurationEndpoint?: { Address?: {} | undefined; Port?: {} | undefined } | undefined
  SnapshotRetentionLimit?: {} | undefined
  SnapshotWindow?: {} | undefined
  ClusterEnabled?: {} | undefined
  CacheNodeType?: {} | undefined
  AuthTokenEnabled?: {} | undefined
  AuthTokenLastModifiedDate?: {} | undefined
  TransitEncryptionEnabled?: {} | undefined
  AtRestEncryptionEnabled?: {} | undefined
  MemberClustersOutpostArns?: {} | undefined
  KmsKeyId?: {} | undefined
  ARN?: {} | undefined
  UserGroupIds?: {} | undefined
  LogDeliveryConfigurations?: {} | undefined
  ReplicationGroupCreateTime?: {} | undefined
  DataTiering?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  NetworkType?: {} | undefined
  IpDiscovery?: {} | undefined
  TransitEncryptionMode?: {} | undefined
  ClusterMode?: {} | undefined
}
type CompleteMigrationResponse = { ReplicationGroup?: ReplicationGroup | undefined }
type CompleteMigrationMessage = { ReplicationGroupId: {}; Force?: {} | undefined }
type Snapshot = {
  SnapshotName?: {} | undefined
  ReplicationGroupId?: {} | undefined
  ReplicationGroupDescription?: {} | undefined
  CacheClusterId?: {} | undefined
  SnapshotStatus?: {} | undefined
  SnapshotSource?: {} | undefined
  CacheNodeType?: {} | undefined
  Engine?: {} | undefined
  EngineVersion?: {} | undefined
  NumCacheNodes?: {} | undefined
  PreferredAvailabilityZone?: {} | undefined
  PreferredOutpostArn?: {} | undefined
  CacheClusterCreateTime?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  TopicArn?: {} | undefined
  Port?: {} | undefined
  CacheParameterGroupName?: {} | undefined
  CacheSubnetGroupName?: {} | undefined
  VpcId?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  SnapshotRetentionLimit?: {} | undefined
  SnapshotWindow?: {} | undefined
  NumNodeGroups?: {} | undefined
  AutomaticFailover?: {} | undefined
  NodeSnapshots?: {} | undefined
  KmsKeyId?: {} | undefined
  ARN?: {} | undefined
  DataTiering?: {} | undefined
}
type CopySnapshotResult = { Snapshot?: Snapshot | undefined }
type CopySnapshotMessage = {
  SourceSnapshotName: {}
  TargetSnapshotName: {}
  TargetBucket?: {} | undefined
  KmsKeyId?: {} | undefined
  Tags?: {} | undefined
}
type PendingModifiedValues = {
  NumCacheNodes?: {} | undefined
  CacheNodeIdsToRemove?: {} | undefined
  EngineVersion?: {} | undefined
  CacheNodeType?: {} | undefined
  AuthTokenStatus?: {} | undefined
  LogDeliveryConfigurations?: {} | undefined
  TransitEncryptionEnabled?: {} | undefined
  TransitEncryptionMode?: {} | undefined
}
type CacheCluster = {
  CacheClusterId?: {} | undefined
  ConfigurationEndpoint?: { Address?: {} | undefined; Port?: {} | undefined } | undefined
  ClientDownloadLandingPage?: {} | undefined
  CacheNodeType?: {} | undefined
  Engine?: {} | undefined
  EngineVersion?: {} | undefined
  CacheClusterStatus?: {} | undefined
  NumCacheNodes?: {} | undefined
  PreferredAvailabilityZone?: {} | undefined
  PreferredOutpostArn?: {} | undefined
  CacheClusterCreateTime?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  PendingModifiedValues?: PendingModifiedValues | undefined
  NotificationConfiguration?:
    | { TopicArn?: {} | undefined; TopicStatus?: {} | undefined }
    | undefined
  CacheSecurityGroups?: {} | undefined
  CacheParameterGroup?:
    | {
        CacheParameterGroupName?: {} | undefined
        ParameterApplyStatus?: {} | undefined
        CacheNodeIdsToReboot?: {} | undefined
      }
    | undefined
  CacheSubnetGroupName?: {} | undefined
  CacheNodes?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  SecurityGroups?: {} | undefined
  ReplicationGroupId?: {} | undefined
  SnapshotRetentionLimit?: {} | undefined
  SnapshotWindow?: {} | undefined
  AuthTokenEnabled?: {} | undefined
  AuthTokenLastModifiedDate?: {} | undefined
  TransitEncryptionEnabled?: {} | undefined
  AtRestEncryptionEnabled?: {} | undefined
  ARN?: {} | undefined
  ReplicationGroupLogDeliveryEnabled?: {} | undefined
  LogDeliveryConfigurations?: {} | undefined
  NetworkType?: {} | undefined
  IpDiscovery?: {} | undefined
  TransitEncryptionMode?: {} | undefined
}
type CreateCacheClusterResult = { CacheCluster?: CacheCluster | undefined }
type CreateCacheClusterMessage = {
  CacheClusterId: {}
  ReplicationGroupId?: {} | undefined
  AZMode?: {} | undefined
  PreferredAvailabilityZone?: {} | undefined
  PreferredAvailabilityZones?: {} | undefined
  NumCacheNodes?: {} | undefined
  CacheNodeType?: {} | undefined
  Engine?: {} | undefined
  EngineVersion?: {} | undefined
  CacheParameterGroupName?: {} | undefined
  CacheSubnetGroupName?: {} | undefined
  CacheSecurityGroupNames?: {} | undefined
  SecurityGroupIds?: {} | undefined
  Tags?: {} | undefined
  SnapshotArns?: {} | undefined
  SnapshotName?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  Port?: {} | undefined
  NotificationTopicArn?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  SnapshotRetentionLimit?: {} | undefined
  SnapshotWindow?: {} | undefined
  AuthToken?: {} | undefined
  OutpostMode?: {} | undefined
  PreferredOutpostArn?: {} | undefined
  PreferredOutpostArns?: {} | undefined
  LogDeliveryConfigurations?: {} | undefined
  TransitEncryptionEnabled?: {} | undefined
  NetworkType?: {} | undefined
  IpDiscovery?: {} | undefined
}
type CacheParameterGroup = {
  CacheParameterGroupName?: {} | undefined
  CacheParameterGroupFamily?: {} | undefined
  Description?: {} | undefined
  IsGlobal?: {} | undefined
  ARN?: {} | undefined
}
type CreateCacheParameterGroupResult = { CacheParameterGroup?: CacheParameterGroup | undefined }
type CreateCacheParameterGroupMessage = {
  CacheParameterGroupName: {}
  CacheParameterGroupFamily: {}
  Description: {}
  Tags?: {} | undefined
}
type CreateCacheSecurityGroupResult = { CacheSecurityGroup?: CacheSecurityGroup | undefined }
type CreateCacheSecurityGroupMessage = {
  CacheSecurityGroupName: {}
  Description: {}
  Tags?: {} | undefined
}
type CacheSubnetGroup = {
  CacheSubnetGroupName?: {} | undefined
  CacheSubnetGroupDescription?: {} | undefined
  VpcId?: {} | undefined
  Subnets?: {} | undefined
  ARN?: {} | undefined
  SupportedNetworkTypes?: {} | undefined
}
type CreateCacheSubnetGroupResult = { CacheSubnetGroup?: CacheSubnetGroup | undefined }
type CreateCacheSubnetGroupMessage = {
  CacheSubnetGroupName: {}
  CacheSubnetGroupDescription: {}
  SubnetIds: {}
  Tags?: {} | undefined
}
type GlobalReplicationGroup = {
  GlobalReplicationGroupId?: {} | undefined
  GlobalReplicationGroupDescription?: {} | undefined
  Status?: {} | undefined
  CacheNodeType?: {} | undefined
  Engine?: {} | undefined
  EngineVersion?: {} | undefined
  Members?: {} | undefined
  ClusterEnabled?: {} | undefined
  GlobalNodeGroups?: {} | undefined
  AuthTokenEnabled?: {} | undefined
  TransitEncryptionEnabled?: {} | undefined
  AtRestEncryptionEnabled?: {} | undefined
  ARN?: {} | undefined
}
type CreateGlobalReplicationGroupResult = {
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined
}
type CreateGlobalReplicationGroupMessage = {
  GlobalReplicationGroupIdSuffix: {}
  GlobalReplicationGroupDescription?: {} | undefined
  PrimaryReplicationGroupId: {}
}
type UserGroupId = string
type CreateReplicationGroupResult = { ReplicationGroup?: ReplicationGroup | undefined }
type CreateReplicationGroupMessage = {
  ReplicationGroupId: {}
  ReplicationGroupDescription: {}
  GlobalReplicationGroupId?: {} | undefined
  PrimaryClusterId?: {} | undefined
  AutomaticFailoverEnabled?: {} | undefined
  MultiAZEnabled?: {} | undefined
  NumCacheClusters?: {} | undefined
  PreferredCacheClusterAZs?: {} | undefined
  NumNodeGroups?: {} | undefined
  ReplicasPerNodeGroup?: {} | undefined
  NodeGroupConfiguration?: {} | undefined
  CacheNodeType?: {} | undefined
  Engine?: {} | undefined
  EngineVersion?: {} | undefined
  CacheParameterGroupName?: {} | undefined
  CacheSubnetGroupName?: {} | undefined
  CacheSecurityGroupNames?: {} | undefined
  SecurityGroupIds?: {} | undefined
  Tags?: {} | undefined
  SnapshotArns?: {} | undefined
  SnapshotName?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  Port?: {} | undefined
  NotificationTopicArn?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  SnapshotRetentionLimit?: {} | undefined
  SnapshotWindow?: {} | undefined
  AuthToken?: {} | undefined
  TransitEncryptionEnabled?: {} | undefined
  AtRestEncryptionEnabled?: {} | undefined
  KmsKeyId?: {} | undefined
  UserGroupIds?: {} | undefined
  LogDeliveryConfigurations?: {} | undefined
  DataTieringEnabled?: {} | undefined
  NetworkType?: {} | undefined
  IpDiscovery?: {} | undefined
  TransitEncryptionMode?: {} | undefined
  ClusterMode?: {} | undefined
}
type CreateSnapshotResult = { Snapshot?: Snapshot | undefined }
type CreateSnapshotMessage = {
  ReplicationGroupId?: {} | undefined
  CacheClusterId?: {} | undefined
  SnapshotName: {}
  KmsKeyId?: {} | undefined
  Tags?: {} | undefined
}
type User = {
  UserId?: {} | undefined
  UserName?: {} | undefined
  Status?: {} | undefined
  Engine?: {} | undefined
  MinimumEngineVersion?: {} | undefined
  AccessString?: {} | undefined
  UserGroupIds?: {} | undefined
  Authentication?: { Type?: {} | undefined; PasswordCount?: {} | undefined } | undefined
  ARN?: {} | undefined
}
type CreateUserMessage = {
  UserId: {}
  UserName: {}
  Engine: {}
  Passwords?: {} | undefined
  AccessString: {}
  NoPasswordRequired?: {} | undefined
  Tags?: {} | undefined
  AuthenticationMode?: { Type?: {} | undefined; Passwords?: {} | undefined } | undefined
}
type UserId = string
type UserGroup = {
  UserGroupId?: {} | undefined
  Status?: {} | undefined
  Engine?: {} | undefined
  UserIds?: {} | undefined
  MinimumEngineVersion?: {} | undefined
  PendingChanges?: { UserIdsToRemove?: {} | undefined; UserIdsToAdd?: {} | undefined } | undefined
  ReplicationGroups?: {} | undefined
  ARN?: {} | undefined
}
type CreateUserGroupMessage = {
  UserGroupId: {}
  Engine: {}
  UserIds?: {} | undefined
  Tags?: {} | undefined
}
type DecreaseNodeGroupsInGlobalReplicationGroupResult = {
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined
}
type DecreaseNodeGroupsInGlobalReplicationGroupMessage = {
  GlobalReplicationGroupId: {}
  NodeGroupCount: {}
  GlobalNodeGroupsToRemove?: {} | undefined
  GlobalNodeGroupsToRetain?: {} | undefined
  ApplyImmediately: {}
}
type DecreaseReplicaCountResult = { ReplicationGroup?: ReplicationGroup | undefined }
type DecreaseReplicaCountMessage = {
  ReplicationGroupId: {}
  NewReplicaCount?: {} | undefined
  ReplicaConfiguration?: {} | undefined
  ReplicasToRemove?: {} | undefined
  ApplyImmediately: {}
}
type DeleteCacheClusterResult = { CacheCluster?: CacheCluster | undefined }
type DeleteCacheClusterMessage = { CacheClusterId: {}; FinalSnapshotIdentifier?: {} | undefined }
type DeleteCacheParameterGroupMessage = { CacheParameterGroupName: {} }
type DeleteCacheSecurityGroupMessage = { CacheSecurityGroupName: {} }
type DeleteCacheSubnetGroupMessage = { CacheSubnetGroupName: {} }
type DeleteGlobalReplicationGroupResult = {
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined
}
type DeleteGlobalReplicationGroupMessage = {
  GlobalReplicationGroupId: {}
  RetainPrimaryReplicationGroup: {}
}
type DeleteReplicationGroupResult = { ReplicationGroup?: ReplicationGroup | undefined }
type DeleteReplicationGroupMessage = {
  ReplicationGroupId: {}
  RetainPrimaryCluster?: {} | undefined
  FinalSnapshotIdentifier?: {} | undefined
}
type DeleteSnapshotResult = { Snapshot?: Snapshot | undefined }
type DeleteSnapshotMessage = { SnapshotName: {} }
type DeleteUserMessage = { UserId: {} }
type DeleteUserGroupMessage = { UserGroupId: {} }
type CacheClusterMessage = { Marker?: {} | undefined; CacheClusters?: {} | undefined }
type DescribeCacheClustersMessage = {
  CacheClusterId?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  ShowCacheNodeInfo?: {} | undefined
  ShowCacheClustersNotInReplicationGroups?: {} | undefined
}
type CacheEngineVersionMessage = { Marker?: {} | undefined; CacheEngineVersions?: {} | undefined }
type DescribeCacheEngineVersionsMessage = {
  Engine?: {} | undefined
  EngineVersion?: {} | undefined
  CacheParameterGroupFamily?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  DefaultOnly?: {} | undefined
}
type CacheParameterGroupsMessage = {
  Marker?: {} | undefined
  CacheParameterGroups?: {} | undefined
}
type DescribeCacheParameterGroupsMessage = {
  CacheParameterGroupName?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type CacheParameterGroupDetails = {
  Marker?: {} | undefined
  Parameters?: {} | undefined
  CacheNodeTypeSpecificParameters?: {} | undefined
}
type DescribeCacheParametersMessage = {
  CacheParameterGroupName: {}
  Source?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type CacheSecurityGroupMessage = { Marker?: {} | undefined; CacheSecurityGroups?: {} | undefined }
type DescribeCacheSecurityGroupsMessage = {
  CacheSecurityGroupName?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type CacheSubnetGroupMessage = { Marker?: {} | undefined; CacheSubnetGroups?: {} | undefined }
type DescribeCacheSubnetGroupsMessage = {
  CacheSubnetGroupName?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type EngineDefaults = {
  CacheParameterGroupFamily?: {} | undefined
  Marker?: {} | undefined
  Parameters?: {} | undefined
  CacheNodeTypeSpecificParameters?: {} | undefined
}
type DescribeEngineDefaultParametersResult = { EngineDefaults?: EngineDefaults | undefined }
type DescribeEngineDefaultParametersMessage = {
  CacheParameterGroupFamily: {}
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type EventsMessage = { Marker?: {} | undefined; Events?: {} | undefined }
type DescribeEventsMessage = {
  SourceIdentifier?: {} | undefined
  SourceType?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  Duration?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeGlobalReplicationGroupsResult = {
  Marker?: {} | undefined
  GlobalReplicationGroups?: {} | undefined
}
type DescribeGlobalReplicationGroupsMessage = {
  GlobalReplicationGroupId?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  ShowMemberInfo?: {} | undefined
}
type ReplicationGroupMessage = { Marker?: {} | undefined; ReplicationGroups?: {} | undefined }
type DescribeReplicationGroupsMessage = {
  ReplicationGroupId?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type ReservedCacheNodeMessage = { Marker?: {} | undefined; ReservedCacheNodes?: {} | undefined }
type DescribeReservedCacheNodesMessage = {
  ReservedCacheNodeId?: {} | undefined
  ReservedCacheNodesOfferingId?: {} | undefined
  CacheNodeType?: {} | undefined
  Duration?: {} | undefined
  ProductDescription?: {} | undefined
  OfferingType?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type ReservedCacheNodesOfferingMessage = {
  Marker?: {} | undefined
  ReservedCacheNodesOfferings?: {} | undefined
}
type DescribeReservedCacheNodesOfferingsMessage = {
  ReservedCacheNodesOfferingId?: {} | undefined
  CacheNodeType?: {} | undefined
  Duration?: {} | undefined
  ProductDescription?: {} | undefined
  OfferingType?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type ServiceUpdateStatus = 'available' | 'cancelled' | 'expired'
type ServiceUpdatesMessage = { Marker?: {} | undefined; ServiceUpdates?: {} | undefined }
type DescribeServiceUpdatesMessage = {
  ServiceUpdateName?: {} | undefined
  ServiceUpdateStatus?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeSnapshotsListMessage = { Marker?: {} | undefined; Snapshots?: {} | undefined }
type DescribeSnapshotsMessage = {
  ReplicationGroupId?: {} | undefined
  CacheClusterId?: {} | undefined
  SnapshotName?: {} | undefined
  SnapshotSource?: {} | undefined
  Marker?: {} | undefined
  MaxRecords?: {} | undefined
  ShowNodeGroupConfig?: {} | undefined
}
type UpdateActionStatus =
  | 'not-applied'
  | 'waiting-to-start'
  | 'in-progress'
  | 'stopping'
  | 'stopped'
  | 'complete'
  | 'scheduling'
  | 'scheduled'
  | 'not-applicable'
type UpdateActionsMessage = { Marker?: {} | undefined; UpdateActions?: {} | undefined }
type DescribeUpdateActionsMessage = {
  ServiceUpdateName?: {} | undefined
  ReplicationGroupIds?: {} | undefined
  CacheClusterIds?: {} | undefined
  Engine?: {} | undefined
  ServiceUpdateStatus?: {} | undefined
  ServiceUpdateTimeRange?: { StartTime?: {} | undefined; EndTime?: {} | undefined } | undefined
  UpdateActionStatus?: {} | undefined
  ShowNodeLevelUpdateStatus?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeUserGroupsResult = { UserGroups?: {} | undefined; Marker?: {} | undefined }
type DescribeUserGroupsMessage = {
  UserGroupId?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type Filter = { Name: {}; Values: {} }
type DescribeUsersResult = { Users?: {} | undefined; Marker?: {} | undefined }
type DescribeUsersMessage = {
  Engine?: {} | undefined
  UserId?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DisassociateGlobalReplicationGroupResult = {
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined
}
type DisassociateGlobalReplicationGroupMessage = {
  GlobalReplicationGroupId: {}
  ReplicationGroupId: {}
  ReplicationGroupRegion: {}
}
type FailoverGlobalReplicationGroupResult = {
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined
}
type FailoverGlobalReplicationGroupMessage = {
  GlobalReplicationGroupId: {}
  PrimaryRegion: {}
  PrimaryReplicationGroupId: {}
}
type IncreaseNodeGroupsInGlobalReplicationGroupResult = {
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined
}
type IncreaseNodeGroupsInGlobalReplicationGroupMessage = {
  GlobalReplicationGroupId: {}
  NodeGroupCount: {}
  RegionalConfigurations?: {} | undefined
  ApplyImmediately: {}
}
type IncreaseReplicaCountResult = { ReplicationGroup?: ReplicationGroup | undefined }
type IncreaseReplicaCountMessage = {
  ReplicationGroupId: {}
  NewReplicaCount?: {} | undefined
  ReplicaConfiguration?: {} | undefined
  ApplyImmediately: {}
}
type AllowedNodeTypeModificationsMessage = {
  ScaleUpModifications?: {} | undefined
  ScaleDownModifications?: {} | undefined
}
type ListAllowedNodeTypeModificationsMessage = {
  CacheClusterId?: {} | undefined
  ReplicationGroupId?: {} | undefined
}
type ListTagsForResourceMessage = { ResourceName: {} }
type ModifyCacheClusterResult = { CacheCluster?: CacheCluster | undefined }
type ModifyCacheClusterMessage = {
  CacheClusterId: {}
  NumCacheNodes?: {} | undefined
  CacheNodeIdsToRemove?: {} | undefined
  AZMode?: {} | undefined
  NewAvailabilityZones?: {} | undefined
  CacheSecurityGroupNames?: {} | undefined
  SecurityGroupIds?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  NotificationTopicArn?: {} | undefined
  CacheParameterGroupName?: {} | undefined
  NotificationTopicStatus?: {} | undefined
  ApplyImmediately?: {} | undefined
  EngineVersion?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  SnapshotRetentionLimit?: {} | undefined
  SnapshotWindow?: {} | undefined
  CacheNodeType?: {} | undefined
  AuthToken?: {} | undefined
  AuthTokenUpdateStrategy?: {} | undefined
  LogDeliveryConfigurations?: {} | undefined
  IpDiscovery?: {} | undefined
}
type CacheParameterGroupNameMessage = { CacheParameterGroupName?: {} | undefined }
type ModifyCacheParameterGroupMessage = { CacheParameterGroupName: {}; ParameterNameValues: {} }
type ModifyCacheSubnetGroupResult = { CacheSubnetGroup?: CacheSubnetGroup | undefined }
type ModifyCacheSubnetGroupMessage = {
  CacheSubnetGroupName: {}
  CacheSubnetGroupDescription?: {} | undefined
  SubnetIds?: {} | undefined
}
type ModifyGlobalReplicationGroupResult = {
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined
}
type ModifyGlobalReplicationGroupMessage = {
  GlobalReplicationGroupId: {}
  ApplyImmediately: {}
  CacheNodeType?: {} | undefined
  EngineVersion?: {} | undefined
  CacheParameterGroupName?: {} | undefined
  GlobalReplicationGroupDescription?: {} | undefined
  AutomaticFailoverEnabled?: {} | undefined
}
type ModifyReplicationGroupResult = { ReplicationGroup?: ReplicationGroup | undefined }
type ModifyReplicationGroupMessage = {
  ReplicationGroupId: {}
  ReplicationGroupDescription?: {} | undefined
  PrimaryClusterId?: {} | undefined
  SnapshottingClusterId?: {} | undefined
  AutomaticFailoverEnabled?: {} | undefined
  MultiAZEnabled?: {} | undefined
  NodeGroupId?: {} | undefined
  CacheSecurityGroupNames?: {} | undefined
  SecurityGroupIds?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  NotificationTopicArn?: {} | undefined
  CacheParameterGroupName?: {} | undefined
  NotificationTopicStatus?: {} | undefined
  ApplyImmediately?: {} | undefined
  EngineVersion?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  SnapshotRetentionLimit?: {} | undefined
  SnapshotWindow?: {} | undefined
  CacheNodeType?: {} | undefined
  AuthToken?: {} | undefined
  AuthTokenUpdateStrategy?: {} | undefined
  UserGroupIdsToAdd?: {} | undefined
  UserGroupIdsToRemove?: {} | undefined
  RemoveUserGroups?: {} | undefined
  LogDeliveryConfigurations?: {} | undefined
  IpDiscovery?: {} | undefined
  TransitEncryptionEnabled?: {} | undefined
  TransitEncryptionMode?: {} | undefined
  ClusterMode?: {} | undefined
}
type ModifyReplicationGroupShardConfigurationResult = {
  ReplicationGroup?: ReplicationGroup | undefined
}
type ModifyReplicationGroupShardConfigurationMessage = {
  ReplicationGroupId: {}
  NodeGroupCount: {}
  ApplyImmediately: {}
  ReshardingConfiguration?: {} | undefined
  NodeGroupsToRemove?: {} | undefined
  NodeGroupsToRetain?: {} | undefined
}
type ModifyUserMessage = {
  UserId: {}
  AccessString?: {} | undefined
  AppendAccessString?: {} | undefined
  Passwords?: {} | undefined
  NoPasswordRequired?: {} | undefined
  AuthenticationMode?: { Type?: {} | undefined; Passwords?: {} | undefined } | undefined
}
type ModifyUserGroupMessage = {
  UserGroupId: {}
  UserIdsToAdd?: {} | undefined
  UserIdsToRemove?: {} | undefined
}
type ReservedCacheNode = {
  ReservedCacheNodeId?: {} | undefined
  ReservedCacheNodesOfferingId?: {} | undefined
  CacheNodeType?: {} | undefined
  StartTime?: {} | undefined
  Duration?: {} | undefined
  FixedPrice?: {} | undefined
  UsagePrice?: {} | undefined
  CacheNodeCount?: {} | undefined
  ProductDescription?: {} | undefined
  OfferingType?: {} | undefined
  State?: {} | undefined
  RecurringCharges?: {} | undefined
  ReservationARN?: {} | undefined
}
type PurchaseReservedCacheNodesOfferingResult = {
  ReservedCacheNode?: ReservedCacheNode | undefined
}
type PurchaseReservedCacheNodesOfferingMessage = {
  ReservedCacheNodesOfferingId: {}
  ReservedCacheNodeId?: {} | undefined
  CacheNodeCount?: {} | undefined
  Tags?: {} | undefined
}
type RebalanceSlotsInGlobalReplicationGroupResult = {
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined
}
type RebalanceSlotsInGlobalReplicationGroupMessage = {
  GlobalReplicationGroupId: {}
  ApplyImmediately: {}
}
type RebootCacheClusterResult = { CacheCluster?: CacheCluster | undefined }
type RebootCacheClusterMessage = { CacheClusterId: {}; CacheNodeIdsToReboot: {} }
type RemoveTagsFromResourceMessage = { ResourceName: {}; TagKeys: {} }
type ResetCacheParameterGroupMessage = {
  CacheParameterGroupName: {}
  ResetAllParameters?: {} | undefined
  ParameterNameValues?: {} | undefined
}
type RevokeCacheSecurityGroupIngressResult = { CacheSecurityGroup?: CacheSecurityGroup | undefined }
type RevokeCacheSecurityGroupIngressMessage = {
  CacheSecurityGroupName: {}
  EC2SecurityGroupName: {}
  EC2SecurityGroupOwnerId: {}
}
type CustomerNodeEndpoint = { Address?: {} | undefined; Port?: {} | undefined }
type StartMigrationResponse = { ReplicationGroup?: ReplicationGroup | undefined }
type StartMigrationMessage = { ReplicationGroupId: {}; CustomerNodeEndpointList: {} }
type TestFailoverResult = { ReplicationGroup?: ReplicationGroup | undefined }
type TestFailoverMessage = { ReplicationGroupId: {}; NodeGroupId: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Action=AddTagsToResource': {
      $get: {
        input: {
          query: {
            ResourceName: string
            Tags: { Key?: {} | undefined; Value?: {} | undefined }[]
            Action: 'AddTagsToResource'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: TagListMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'AddTagsToResource'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddTagsToResourceMessage }
        output: TagListMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=AuthorizeCacheSecurityGroupIngress': {
      $get: {
        input: {
          query: {
            CacheSecurityGroupName: string
            EC2SecurityGroupName: string
            EC2SecurityGroupOwnerId: string
            Action: 'AuthorizeCacheSecurityGroupIngress'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: AuthorizeCacheSecurityGroupIngressResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'AuthorizeCacheSecurityGroupIngress'; Version: '2015-02-02' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AuthorizeCacheSecurityGroupIngressMessage }
        output: AuthorizeCacheSecurityGroupIngressResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=BatchApplyUpdateAction': {
      $get: {
        input: {
          query: {
            ReplicationGroupIds?: String[] | undefined
            CacheClusterIds?: String[] | undefined
            ServiceUpdateName: string
            Action: 'BatchApplyUpdateAction'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UpdateActionResultsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'BatchApplyUpdateAction'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchApplyUpdateActionMessage }
        output: UpdateActionResultsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=BatchStopUpdateAction': {
      $get: {
        input: {
          query: {
            ReplicationGroupIds?: String[] | undefined
            CacheClusterIds?: String[] | undefined
            ServiceUpdateName: string
            Action: 'BatchStopUpdateAction'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UpdateActionResultsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'BatchStopUpdateAction'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchStopUpdateActionMessage }
        output: UpdateActionResultsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CompleteMigration': {
      $get: {
        input: {
          query: {
            ReplicationGroupId: string
            Force?: boolean | undefined
            Action: 'CompleteMigration'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CompleteMigrationResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CompleteMigration'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CompleteMigrationMessage }
        output: CompleteMigrationResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CopySnapshot': {
      $get: {
        input: {
          query: {
            SourceSnapshotName: string
            TargetSnapshotName: string
            TargetBucket?: string | undefined
            KmsKeyId?: string | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CopySnapshot'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CopySnapshotResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CopySnapshot'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CopySnapshotMessage }
        output: CopySnapshotResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateCacheCluster': {
      $get: {
        input: {
          query: {
            CacheClusterId: string
            ReplicationGroupId?: string | undefined
            AZMode?: 'single-az' | 'cross-az' | undefined
            PreferredAvailabilityZone?: string | undefined
            PreferredAvailabilityZones?: {}[] | undefined
            NumCacheNodes?: number | undefined
            CacheNodeType?: string | undefined
            Engine?: string | undefined
            EngineVersion?: string | undefined
            CacheParameterGroupName?: string | undefined
            CacheSubnetGroupName?: string | undefined
            CacheSecurityGroupNames?: {}[] | undefined
            SecurityGroupIds?: {}[] | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            SnapshotArns?: {}[] | undefined
            SnapshotName?: string | undefined
            PreferredMaintenanceWindow?: string | undefined
            Port?: number | undefined
            NotificationTopicArn?: string | undefined
            AutoMinorVersionUpgrade?: boolean | undefined
            SnapshotRetentionLimit?: number | undefined
            SnapshotWindow?: string | undefined
            AuthToken?: string | undefined
            OutpostMode?: 'single-outpost' | 'cross-outpost' | undefined
            PreferredOutpostArn?: string | undefined
            PreferredOutpostArns?: {}[] | undefined
            LogDeliveryConfigurations?:
              | {
                  LogType?: {} | undefined
                  DestinationType?: {} | undefined
                  DestinationDetails?:
                    | {
                        CloudWatchLogsDetails?: { LogGroup?: {} | undefined } | undefined
                        KinesisFirehoseDetails?: { DeliveryStream?: {} | undefined } | undefined
                      }
                    | undefined
                  LogFormat?: {} | undefined
                  Enabled?: {} | undefined
                }[]
              | undefined
            TransitEncryptionEnabled?: boolean | undefined
            NetworkType?: 'ipv4' | 'ipv6' | 'dual_stack' | undefined
            IpDiscovery?: 'ipv4' | 'ipv6' | undefined
            Action: 'CreateCacheCluster'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateCacheClusterResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateCacheCluster'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCacheClusterMessage }
        output: CreateCacheClusterResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateCacheParameterGroup': {
      $get: {
        input: {
          query: {
            CacheParameterGroupName: string
            CacheParameterGroupFamily: string
            Description: string
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateCacheParameterGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateCacheParameterGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateCacheParameterGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCacheParameterGroupMessage }
        output: CreateCacheParameterGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateCacheSecurityGroup': {
      $get: {
        input: {
          query: {
            CacheSecurityGroupName: string
            Description: string
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateCacheSecurityGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateCacheSecurityGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateCacheSecurityGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCacheSecurityGroupMessage }
        output: CreateCacheSecurityGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateCacheSubnetGroup': {
      $get: {
        input: {
          query: {
            CacheSubnetGroupName: string
            CacheSubnetGroupDescription: string
            SubnetIds: {}[]
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateCacheSubnetGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateCacheSubnetGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateCacheSubnetGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCacheSubnetGroupMessage }
        output: CreateCacheSubnetGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateGlobalReplicationGroup': {
      $get: {
        input: {
          query: {
            GlobalReplicationGroupIdSuffix: string
            GlobalReplicationGroupDescription?: string | undefined
            PrimaryReplicationGroupId: string
            Action: 'CreateGlobalReplicationGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateGlobalReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateGlobalReplicationGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateGlobalReplicationGroupMessage }
        output: CreateGlobalReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateReplicationGroup': {
      $get: {
        input: {
          query: {
            ReplicationGroupId: string
            ReplicationGroupDescription: string
            GlobalReplicationGroupId?: string | undefined
            PrimaryClusterId?: string | undefined
            AutomaticFailoverEnabled?: boolean | undefined
            MultiAZEnabled?: boolean | undefined
            NumCacheClusters?: number | undefined
            PreferredCacheClusterAZs?: {}[] | undefined
            NumNodeGroups?: number | undefined
            ReplicasPerNodeGroup?: number | undefined
            NodeGroupConfiguration?:
              | {
                  NodeGroupId?: {} | undefined
                  Slots?: {} | undefined
                  ReplicaCount?: {} | undefined
                  PrimaryAvailabilityZone?: {} | undefined
                  ReplicaAvailabilityZones?: {} | undefined
                  PrimaryOutpostArn?: {} | undefined
                  ReplicaOutpostArns?: {} | undefined
                }[]
              | undefined
            CacheNodeType?: string | undefined
            Engine?: string | undefined
            EngineVersion?: string | undefined
            CacheParameterGroupName?: string | undefined
            CacheSubnetGroupName?: string | undefined
            CacheSecurityGroupNames?: {}[] | undefined
            SecurityGroupIds?: {}[] | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            SnapshotArns?: {}[] | undefined
            SnapshotName?: string | undefined
            PreferredMaintenanceWindow?: string | undefined
            Port?: number | undefined
            NotificationTopicArn?: string | undefined
            AutoMinorVersionUpgrade?: boolean | undefined
            SnapshotRetentionLimit?: number | undefined
            SnapshotWindow?: string | undefined
            AuthToken?: string | undefined
            TransitEncryptionEnabled?: boolean | undefined
            AtRestEncryptionEnabled?: boolean | undefined
            KmsKeyId?: string | undefined
            UserGroupIds?: UserGroupId[] | undefined
            LogDeliveryConfigurations?:
              | {
                  LogType?: {} | undefined
                  DestinationType?: {} | undefined
                  DestinationDetails?:
                    | {
                        CloudWatchLogsDetails?: { LogGroup?: {} | undefined } | undefined
                        KinesisFirehoseDetails?: { DeliveryStream?: {} | undefined } | undefined
                      }
                    | undefined
                  LogFormat?: {} | undefined
                  Enabled?: {} | undefined
                }[]
              | undefined
            DataTieringEnabled?: boolean | undefined
            NetworkType?: 'ipv4' | 'ipv6' | 'dual_stack' | undefined
            IpDiscovery?: 'ipv4' | 'ipv6' | undefined
            TransitEncryptionMode?: 'preferred' | 'required' | undefined
            ClusterMode?: 'enabled' | 'disabled' | 'compatible' | undefined
            Action: 'CreateReplicationGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateReplicationGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateReplicationGroupMessage }
        output: CreateReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateSnapshot': {
      $get: {
        input: {
          query: {
            ReplicationGroupId?: string | undefined
            CacheClusterId?: string | undefined
            SnapshotName: string
            KmsKeyId?: string | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateSnapshot'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateSnapshotResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateSnapshot'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSnapshotMessage }
        output: CreateSnapshotResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateUser': {
      $get: {
        input: {
          query: {
            UserId: string
            UserName: string
            Engine: string
            Passwords?: String[] | undefined
            AccessString: string
            NoPasswordRequired?: boolean | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            AuthenticationMode?: { Type?: {} | undefined; Passwords?: {} | undefined } | undefined
            Action: 'CreateUser'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: User
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateUser'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateUserMessage }
        output: User
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateUserGroup': {
      $get: {
        input: {
          query: {
            UserGroupId: string
            Engine: string
            UserIds?: UserId[] | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateUserGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UserGroup
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateUserGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateUserGroupMessage }
        output: UserGroup
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DecreaseNodeGroupsInGlobalReplicationGroup': {
      $get: {
        input: {
          query: {
            GlobalReplicationGroupId: string
            NodeGroupCount: number
            GlobalNodeGroupsToRemove?: {}[] | undefined
            GlobalNodeGroupsToRetain?: {}[] | undefined
            ApplyImmediately: boolean
            Action: 'DecreaseNodeGroupsInGlobalReplicationGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DecreaseNodeGroupsInGlobalReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'DecreaseNodeGroupsInGlobalReplicationGroup'; Version: '2015-02-02' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DecreaseNodeGroupsInGlobalReplicationGroupMessage }
        output: DecreaseNodeGroupsInGlobalReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DecreaseReplicaCount': {
      $get: {
        input: {
          query: {
            ReplicationGroupId: string
            NewReplicaCount?: number | undefined
            ReplicaConfiguration?:
              | {
                  NodeGroupId: {}
                  NewReplicaCount: {}
                  PreferredAvailabilityZones?: {} | undefined
                  PreferredOutpostArns?: {} | undefined
                }[]
              | undefined
            ReplicasToRemove?: String[] | undefined
            ApplyImmediately: boolean
            Action: 'DecreaseReplicaCount'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DecreaseReplicaCountResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DecreaseReplicaCount'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DecreaseReplicaCountMessage }
        output: DecreaseReplicaCountResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteCacheCluster': {
      $get: {
        input: {
          query: {
            CacheClusterId: string
            FinalSnapshotIdentifier?: string | undefined
            Action: 'DeleteCacheCluster'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteCacheClusterResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteCacheCluster'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCacheClusterMessage }
        output: DeleteCacheClusterResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteCacheParameterGroup': {
      $get: {
        input: {
          query: {
            CacheParameterGroupName: string
            Action: 'DeleteCacheParameterGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteCacheParameterGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCacheParameterGroupMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteCacheSecurityGroup': {
      $get: {
        input: {
          query: {
            CacheSecurityGroupName: string
            Action: 'DeleteCacheSecurityGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteCacheSecurityGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCacheSecurityGroupMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteCacheSubnetGroup': {
      $get: {
        input: {
          query: {
            CacheSubnetGroupName: string
            Action: 'DeleteCacheSubnetGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteCacheSubnetGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCacheSubnetGroupMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteGlobalReplicationGroup': {
      $get: {
        input: {
          query: {
            GlobalReplicationGroupId: string
            RetainPrimaryReplicationGroup: boolean
            Action: 'DeleteGlobalReplicationGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteGlobalReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteGlobalReplicationGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteGlobalReplicationGroupMessage }
        output: DeleteGlobalReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteReplicationGroup': {
      $get: {
        input: {
          query: {
            ReplicationGroupId: string
            RetainPrimaryCluster?: boolean | undefined
            FinalSnapshotIdentifier?: string | undefined
            Action: 'DeleteReplicationGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteReplicationGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteReplicationGroupMessage }
        output: DeleteReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteSnapshot': {
      $get: {
        input: {
          query: { SnapshotName: string; Action: 'DeleteSnapshot'; Version: '2015-02-02' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteSnapshotResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteSnapshot'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSnapshotMessage }
        output: DeleteSnapshotResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteUser': {
      $get: {
        input: { query: { UserId: string; Action: 'DeleteUser'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: User
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteUser'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteUserMessage }
        output: User
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteUserGroup': {
      $get: {
        input: {
          query: { UserGroupId: string; Action: 'DeleteUserGroup'; Version: '2015-02-02' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UserGroup
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteUserGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteUserGroupMessage }
        output: UserGroup
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeCacheClusters': {
      $get: {
        input: {
          query: {
            CacheClusterId?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            ShowCacheNodeInfo?: boolean | undefined
            ShowCacheClustersNotInReplicationGroups?: boolean | undefined
            Action: 'DescribeCacheClusters'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CacheClusterMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeCacheClusters'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCacheClustersMessage }
        output: CacheClusterMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeCacheEngineVersions': {
      $get: {
        input: {
          query: {
            Engine?: string | undefined
            EngineVersion?: string | undefined
            CacheParameterGroupFamily?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            DefaultOnly?: boolean | undefined
            Action: 'DescribeCacheEngineVersions'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CacheEngineVersionMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeCacheEngineVersions'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCacheEngineVersionsMessage }
        output: CacheEngineVersionMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeCacheParameterGroups': {
      $get: {
        input: {
          query: {
            CacheParameterGroupName?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeCacheParameterGroups'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CacheParameterGroupsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeCacheParameterGroups'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCacheParameterGroupsMessage }
        output: CacheParameterGroupsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeCacheParameters': {
      $get: {
        input: {
          query: {
            CacheParameterGroupName: string
            Source?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeCacheParameters'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CacheParameterGroupDetails
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeCacheParameters'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCacheParametersMessage }
        output: CacheParameterGroupDetails
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeCacheSecurityGroups': {
      $get: {
        input: {
          query: {
            CacheSecurityGroupName?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeCacheSecurityGroups'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CacheSecurityGroupMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeCacheSecurityGroups'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCacheSecurityGroupsMessage }
        output: CacheSecurityGroupMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeCacheSubnetGroups': {
      $get: {
        input: {
          query: {
            CacheSubnetGroupName?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeCacheSubnetGroups'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CacheSubnetGroupMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeCacheSubnetGroups'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCacheSubnetGroupsMessage }
        output: CacheSubnetGroupMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeEngineDefaultParameters': {
      $get: {
        input: {
          query: {
            CacheParameterGroupFamily: string
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeEngineDefaultParameters'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeEngineDefaultParametersResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeEngineDefaultParameters'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEngineDefaultParametersMessage }
        output: DescribeEngineDefaultParametersResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeEvents': {
      $get: {
        input: {
          query: {
            SourceIdentifier?: string | undefined
            SourceType?:
              | 'cache-cluster'
              | 'cache-parameter-group'
              | 'cache-security-group'
              | 'cache-subnet-group'
              | 'replication-group'
              | 'user'
              | 'user-group'
              | undefined
            StartTime?: string | undefined
            EndTime?: string | undefined
            Duration?: number | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeEvents'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: EventsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeEvents'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEventsMessage }
        output: EventsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeGlobalReplicationGroups': {
      $get: {
        input: {
          query: {
            GlobalReplicationGroupId?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            ShowMemberInfo?: boolean | undefined
            Action: 'DescribeGlobalReplicationGroups'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeGlobalReplicationGroupsResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeGlobalReplicationGroups'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeGlobalReplicationGroupsMessage }
        output: DescribeGlobalReplicationGroupsResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeReplicationGroups': {
      $get: {
        input: {
          query: {
            ReplicationGroupId?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeReplicationGroups'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ReplicationGroupMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeReplicationGroups'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeReplicationGroupsMessage }
        output: ReplicationGroupMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeReservedCacheNodes': {
      $get: {
        input: {
          query: {
            ReservedCacheNodeId?: string | undefined
            ReservedCacheNodesOfferingId?: string | undefined
            CacheNodeType?: string | undefined
            Duration?: string | undefined
            ProductDescription?: string | undefined
            OfferingType?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeReservedCacheNodes'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ReservedCacheNodeMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeReservedCacheNodes'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeReservedCacheNodesMessage }
        output: ReservedCacheNodeMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeReservedCacheNodesOfferings': {
      $get: {
        input: {
          query: {
            ReservedCacheNodesOfferingId?: string | undefined
            CacheNodeType?: string | undefined
            Duration?: string | undefined
            ProductDescription?: string | undefined
            OfferingType?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeReservedCacheNodesOfferings'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ReservedCacheNodesOfferingMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeReservedCacheNodesOfferings'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeReservedCacheNodesOfferingsMessage }
        output: ReservedCacheNodesOfferingMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeServiceUpdates': {
      $get: {
        input: {
          query: {
            ServiceUpdateName?: string | undefined
            ServiceUpdateStatus?: ServiceUpdateStatus[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeServiceUpdates'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ServiceUpdatesMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeServiceUpdates'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeServiceUpdatesMessage }
        output: ServiceUpdatesMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeSnapshots': {
      $get: {
        input: {
          query: {
            ReplicationGroupId?: string | undefined
            CacheClusterId?: string | undefined
            SnapshotName?: string | undefined
            SnapshotSource?: string | undefined
            Marker?: string | undefined
            MaxRecords?: number | undefined
            ShowNodeGroupConfig?: boolean | undefined
            Action: 'DescribeSnapshots'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeSnapshotsListMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeSnapshots'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSnapshotsMessage }
        output: DescribeSnapshotsListMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeUpdateActions': {
      $get: {
        input: {
          query: {
            ServiceUpdateName?: string | undefined
            ReplicationGroupIds?: String[] | undefined
            CacheClusterIds?: String[] | undefined
            Engine?: string | undefined
            ServiceUpdateStatus?: ServiceUpdateStatus[] | undefined
            ServiceUpdateTimeRange?:
              | { StartTime?: {} | undefined; EndTime?: {} | undefined }
              | undefined
            UpdateActionStatus?: UpdateActionStatus[] | undefined
            ShowNodeLevelUpdateStatus?: boolean | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeUpdateActions'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UpdateActionsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeUpdateActions'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeUpdateActionsMessage }
        output: UpdateActionsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeUserGroups': {
      $get: {
        input: {
          query: {
            UserGroupId?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeUserGroups'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeUserGroupsResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeUserGroups'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeUserGroupsMessage }
        output: DescribeUserGroupsResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeUsers': {
      $get: {
        input: {
          query: {
            Engine?: string | undefined
            UserId?: string | undefined
            Filters?: Filter[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeUsers'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeUsersResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeUsers'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeUsersMessage }
        output: DescribeUsersResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DisassociateGlobalReplicationGroup': {
      $get: {
        input: {
          query: {
            GlobalReplicationGroupId: string
            ReplicationGroupId: string
            ReplicationGroupRegion: string
            Action: 'DisassociateGlobalReplicationGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DisassociateGlobalReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'DisassociateGlobalReplicationGroup'; Version: '2015-02-02' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateGlobalReplicationGroupMessage }
        output: DisassociateGlobalReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=FailoverGlobalReplicationGroup': {
      $get: {
        input: {
          query: {
            GlobalReplicationGroupId: string
            PrimaryRegion: string
            PrimaryReplicationGroupId: string
            Action: 'FailoverGlobalReplicationGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: FailoverGlobalReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'FailoverGlobalReplicationGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: FailoverGlobalReplicationGroupMessage }
        output: FailoverGlobalReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=IncreaseNodeGroupsInGlobalReplicationGroup': {
      $get: {
        input: {
          query: {
            GlobalReplicationGroupId: string
            NodeGroupCount: number
            RegionalConfigurations?:
              | {
                  ReplicationGroupId: {}
                  ReplicationGroupRegion: {}
                  ReshardingConfiguration: {}
                }[]
              | undefined
            ApplyImmediately: boolean
            Action: 'IncreaseNodeGroupsInGlobalReplicationGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: IncreaseNodeGroupsInGlobalReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'IncreaseNodeGroupsInGlobalReplicationGroup'; Version: '2015-02-02' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: IncreaseNodeGroupsInGlobalReplicationGroupMessage }
        output: IncreaseNodeGroupsInGlobalReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=IncreaseReplicaCount': {
      $get: {
        input: {
          query: {
            ReplicationGroupId: string
            NewReplicaCount?: number | undefined
            ReplicaConfiguration?:
              | {
                  NodeGroupId: {}
                  NewReplicaCount: {}
                  PreferredAvailabilityZones?: {} | undefined
                  PreferredOutpostArns?: {} | undefined
                }[]
              | undefined
            ApplyImmediately: boolean
            Action: 'IncreaseReplicaCount'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: IncreaseReplicaCountResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'IncreaseReplicaCount'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: IncreaseReplicaCountMessage }
        output: IncreaseReplicaCountResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListAllowedNodeTypeModifications': {
      $get: {
        input: {
          query: {
            CacheClusterId?: string | undefined
            ReplicationGroupId?: string | undefined
            Action: 'ListAllowedNodeTypeModifications'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: AllowedNodeTypeModificationsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ListAllowedNodeTypeModifications'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAllowedNodeTypeModificationsMessage }
        output: AllowedNodeTypeModificationsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListTagsForResource': {
      $get: {
        input: {
          query: { ResourceName: string; Action: 'ListTagsForResource'; Version: '2015-02-02' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: TagListMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ListTagsForResource'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceMessage }
        output: TagListMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyCacheCluster': {
      $get: {
        input: {
          query: {
            CacheClusterId: string
            NumCacheNodes?: number | undefined
            CacheNodeIdsToRemove?: {}[] | undefined
            AZMode?: 'single-az' | 'cross-az' | undefined
            NewAvailabilityZones?: {}[] | undefined
            CacheSecurityGroupNames?: {}[] | undefined
            SecurityGroupIds?: {}[] | undefined
            PreferredMaintenanceWindow?: string | undefined
            NotificationTopicArn?: string | undefined
            CacheParameterGroupName?: string | undefined
            NotificationTopicStatus?: string | undefined
            ApplyImmediately?: boolean | undefined
            EngineVersion?: string | undefined
            AutoMinorVersionUpgrade?: boolean | undefined
            SnapshotRetentionLimit?: number | undefined
            SnapshotWindow?: string | undefined
            CacheNodeType?: string | undefined
            AuthToken?: string | undefined
            AuthTokenUpdateStrategy?: 'SET' | 'ROTATE' | 'DELETE' | undefined
            LogDeliveryConfigurations?:
              | {
                  LogType?: {} | undefined
                  DestinationType?: {} | undefined
                  DestinationDetails?:
                    | {
                        CloudWatchLogsDetails?: { LogGroup?: {} | undefined } | undefined
                        KinesisFirehoseDetails?: { DeliveryStream?: {} | undefined } | undefined
                      }
                    | undefined
                  LogFormat?: {} | undefined
                  Enabled?: {} | undefined
                }[]
              | undefined
            IpDiscovery?: 'ipv4' | 'ipv6' | undefined
            Action: 'ModifyCacheCluster'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyCacheClusterResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyCacheCluster'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyCacheClusterMessage }
        output: ModifyCacheClusterResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyCacheParameterGroup': {
      $get: {
        input: {
          query: {
            CacheParameterGroupName: string
            ParameterNameValues: {
              ParameterName?: {} | undefined
              ParameterValue?: {} | undefined
            }[]
            Action: 'ModifyCacheParameterGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CacheParameterGroupNameMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyCacheParameterGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyCacheParameterGroupMessage }
        output: CacheParameterGroupNameMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyCacheSubnetGroup': {
      $get: {
        input: {
          query: {
            CacheSubnetGroupName: string
            CacheSubnetGroupDescription?: string | undefined
            SubnetIds?: {}[] | undefined
            Action: 'ModifyCacheSubnetGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyCacheSubnetGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyCacheSubnetGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyCacheSubnetGroupMessage }
        output: ModifyCacheSubnetGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyGlobalReplicationGroup': {
      $get: {
        input: {
          query: {
            GlobalReplicationGroupId: string
            ApplyImmediately: boolean
            CacheNodeType?: string | undefined
            EngineVersion?: string | undefined
            CacheParameterGroupName?: string | undefined
            GlobalReplicationGroupDescription?: string | undefined
            AutomaticFailoverEnabled?: boolean | undefined
            Action: 'ModifyGlobalReplicationGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyGlobalReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyGlobalReplicationGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyGlobalReplicationGroupMessage }
        output: ModifyGlobalReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyReplicationGroup': {
      $get: {
        input: {
          query: {
            ReplicationGroupId: string
            ReplicationGroupDescription?: string | undefined
            PrimaryClusterId?: string | undefined
            SnapshottingClusterId?: string | undefined
            AutomaticFailoverEnabled?: boolean | undefined
            MultiAZEnabled?: boolean | undefined
            NodeGroupId?: string | undefined
            CacheSecurityGroupNames?: {}[] | undefined
            SecurityGroupIds?: {}[] | undefined
            PreferredMaintenanceWindow?: string | undefined
            NotificationTopicArn?: string | undefined
            CacheParameterGroupName?: string | undefined
            NotificationTopicStatus?: string | undefined
            ApplyImmediately?: boolean | undefined
            EngineVersion?: string | undefined
            AutoMinorVersionUpgrade?: boolean | undefined
            SnapshotRetentionLimit?: number | undefined
            SnapshotWindow?: string | undefined
            CacheNodeType?: string | undefined
            AuthToken?: string | undefined
            AuthTokenUpdateStrategy?: 'SET' | 'ROTATE' | 'DELETE' | undefined
            UserGroupIdsToAdd?: UserGroupId[] | undefined
            UserGroupIdsToRemove?: UserGroupId[] | undefined
            RemoveUserGroups?: boolean | undefined
            LogDeliveryConfigurations?:
              | {
                  LogType?: {} | undefined
                  DestinationType?: {} | undefined
                  DestinationDetails?:
                    | {
                        CloudWatchLogsDetails?: { LogGroup?: {} | undefined } | undefined
                        KinesisFirehoseDetails?: { DeliveryStream?: {} | undefined } | undefined
                      }
                    | undefined
                  LogFormat?: {} | undefined
                  Enabled?: {} | undefined
                }[]
              | undefined
            IpDiscovery?: 'ipv4' | 'ipv6' | undefined
            TransitEncryptionEnabled?: boolean | undefined
            TransitEncryptionMode?: 'preferred' | 'required' | undefined
            ClusterMode?: 'enabled' | 'disabled' | 'compatible' | undefined
            Action: 'ModifyReplicationGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyReplicationGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyReplicationGroupMessage }
        output: ModifyReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyReplicationGroupShardConfiguration': {
      $get: {
        input: {
          query: {
            ReplicationGroupId: string
            NodeGroupCount: number
            ApplyImmediately: boolean
            ReshardingConfiguration?:
              | { NodeGroupId?: {} | undefined; PreferredAvailabilityZones?: {} | undefined }[]
              | undefined
            NodeGroupsToRemove?: {}[] | undefined
            NodeGroupsToRetain?: {}[] | undefined
            Action: 'ModifyReplicationGroupShardConfiguration'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyReplicationGroupShardConfigurationResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'ModifyReplicationGroupShardConfiguration'; Version: '2015-02-02' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyReplicationGroupShardConfigurationMessage }
        output: ModifyReplicationGroupShardConfigurationResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyUser': {
      $get: {
        input: {
          query: {
            UserId: string
            AccessString?: string | undefined
            AppendAccessString?: string | undefined
            Passwords?: String[] | undefined
            NoPasswordRequired?: boolean | undefined
            AuthenticationMode?: { Type?: {} | undefined; Passwords?: {} | undefined } | undefined
            Action: 'ModifyUser'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: User
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyUser'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyUserMessage }
        output: User
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyUserGroup': {
      $get: {
        input: {
          query: {
            UserGroupId: string
            UserIdsToAdd?: UserId[] | undefined
            UserIdsToRemove?: UserId[] | undefined
            Action: 'ModifyUserGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UserGroup
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyUserGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyUserGroupMessage }
        output: UserGroup
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=PurchaseReservedCacheNodesOffering': {
      $get: {
        input: {
          query: {
            ReservedCacheNodesOfferingId: string
            ReservedCacheNodeId?: string | undefined
            CacheNodeCount?: number | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'PurchaseReservedCacheNodesOffering'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: PurchaseReservedCacheNodesOfferingResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'PurchaseReservedCacheNodesOffering'; Version: '2015-02-02' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PurchaseReservedCacheNodesOfferingMessage }
        output: PurchaseReservedCacheNodesOfferingResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RebalanceSlotsInGlobalReplicationGroup': {
      $get: {
        input: {
          query: {
            GlobalReplicationGroupId: string
            ApplyImmediately: boolean
            Action: 'RebalanceSlotsInGlobalReplicationGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RebalanceSlotsInGlobalReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'RebalanceSlotsInGlobalReplicationGroup'; Version: '2015-02-02' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RebalanceSlotsInGlobalReplicationGroupMessage }
        output: RebalanceSlotsInGlobalReplicationGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RebootCacheCluster': {
      $get: {
        input: {
          query: {
            CacheClusterId: string
            CacheNodeIdsToReboot: {}[]
            Action: 'RebootCacheCluster'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RebootCacheClusterResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RebootCacheCluster'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RebootCacheClusterMessage }
        output: RebootCacheClusterResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RemoveTagsFromResource': {
      $get: {
        input: {
          query: {
            ResourceName: string
            TagKeys: String[]
            Action: 'RemoveTagsFromResource'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: TagListMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RemoveTagsFromResource'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveTagsFromResourceMessage }
        output: TagListMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ResetCacheParameterGroup': {
      $get: {
        input: {
          query: {
            CacheParameterGroupName: string
            ResetAllParameters?: boolean | undefined
            ParameterNameValues?:
              | { ParameterName?: {} | undefined; ParameterValue?: {} | undefined }[]
              | undefined
            Action: 'ResetCacheParameterGroup'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CacheParameterGroupNameMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ResetCacheParameterGroup'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResetCacheParameterGroupMessage }
        output: CacheParameterGroupNameMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RevokeCacheSecurityGroupIngress': {
      $get: {
        input: {
          query: {
            CacheSecurityGroupName: string
            EC2SecurityGroupName: string
            EC2SecurityGroupOwnerId: string
            Action: 'RevokeCacheSecurityGroupIngress'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RevokeCacheSecurityGroupIngressResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RevokeCacheSecurityGroupIngress'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RevokeCacheSecurityGroupIngressMessage }
        output: RevokeCacheSecurityGroupIngressResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=StartMigration': {
      $get: {
        input: {
          query: {
            ReplicationGroupId: string
            CustomerNodeEndpointList: CustomerNodeEndpoint[]
            Action: 'StartMigration'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StartMigrationResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'StartMigration'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartMigrationMessage }
        output: StartMigrationResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=TestFailover': {
      $get: {
        input: {
          query: {
            ReplicationGroupId: string
            NodeGroupId: string
            Action: 'TestFailover'
            Version: '2015-02-02'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: TestFailoverResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'TestFailover'; Version: '2015-02-02' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TestFailoverMessage }
        output: TestFailoverResult
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
