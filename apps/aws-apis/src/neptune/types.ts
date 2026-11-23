type DBClusterNotFoundFault = { [x: string]: unknown }
type DBClusterRoleAlreadyExistsFault = { [x: string]: unknown }
type InvalidDBClusterStateFault = { [x: string]: unknown }
type DBClusterRoleQuotaExceededFault = { [x: string]: unknown }
type AddRoleToDBClusterMessage = {
  DBClusterIdentifier: {}
  RoleArn: {}
  FeatureName?: {} | undefined
}
type EventSubscription = {
  CustomerAwsId?: {} | undefined
  CustSubscriptionId?: {} | undefined
  SnsTopicArn?: {} | undefined
  Status?: {} | undefined
  SubscriptionCreationTime?: {} | undefined
  SourceType?: {} | undefined
  SourceIdsList?: {} | undefined
  EventCategoriesList?: {} | undefined
  Enabled?: {} | undefined
  EventSubscriptionArn?: {} | undefined
}
type AddSourceIdentifierToSubscriptionResult = { EventSubscription?: EventSubscription | undefined }
type SubscriptionNotFoundFault = { [x: string]: unknown }
type SourceNotFoundFault = { [x: string]: unknown }
type AddSourceIdentifierToSubscriptionMessage = { SubscriptionName: {}; SourceIdentifier: {} }
type DBInstanceNotFoundFault = { [x: string]: unknown }
type DBSnapshotNotFoundFault = { [x: string]: unknown }
type AddTagsToResourceMessage = { ResourceName: {}; Tags: {} }
type ResourcePendingMaintenanceActions = {
  ResourceIdentifier?: {} | undefined
  PendingMaintenanceActionDetails?: {} | undefined
}
type ApplyPendingMaintenanceActionResult = {
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions | undefined
}
type ResourceNotFoundFault = { [x: string]: unknown }
type ApplyPendingMaintenanceActionMessage = {
  ResourceIdentifier: {}
  ApplyAction: {}
  OptInType: {}
}
type DBClusterParameterGroup = {
  DBClusterParameterGroupName?: {} | undefined
  DBParameterGroupFamily?: {} | undefined
  Description?: {} | undefined
  DBClusterParameterGroupArn?: {} | undefined
}
type CopyDBClusterParameterGroupResult = {
  DBClusterParameterGroup?: DBClusterParameterGroup | undefined
}
type DBParameterGroupNotFoundFault = { [x: string]: unknown }
type DBParameterGroupQuotaExceededFault = { [x: string]: unknown }
type DBParameterGroupAlreadyExistsFault = { [x: string]: unknown }
type CopyDBClusterParameterGroupMessage = {
  SourceDBClusterParameterGroupIdentifier: {}
  TargetDBClusterParameterGroupIdentifier: {}
  TargetDBClusterParameterGroupDescription: {}
  Tags?: {} | undefined
}
type DBClusterSnapshot = {
  AvailabilityZones?: {} | undefined
  DBClusterSnapshotIdentifier?: {} | undefined
  DBClusterIdentifier?: {} | undefined
  SnapshotCreateTime?: {} | undefined
  Engine?: {} | undefined
  AllocatedStorage?: {} | undefined
  Status?: {} | undefined
  Port?: {} | undefined
  VpcId?: {} | undefined
  ClusterCreateTime?: {} | undefined
  MasterUsername?: {} | undefined
  EngineVersion?: {} | undefined
  LicenseModel?: {} | undefined
  SnapshotType?: {} | undefined
  PercentProgress?: {} | undefined
  StorageEncrypted?: {} | undefined
  KmsKeyId?: {} | undefined
  DBClusterSnapshotArn?: {} | undefined
  SourceDBClusterSnapshotArn?: {} | undefined
  IAMDatabaseAuthenticationEnabled?: {} | undefined
}
type CopyDBClusterSnapshotResult = { DBClusterSnapshot?: DBClusterSnapshot | undefined }
type DBClusterSnapshotAlreadyExistsFault = { [x: string]: unknown }
type DBClusterSnapshotNotFoundFault = { [x: string]: unknown }
type InvalidDBClusterSnapshotStateFault = { [x: string]: unknown }
type SnapshotQuotaExceededFault = { [x: string]: unknown }
type KMSKeyNotAccessibleFault = { [x: string]: unknown }
type CopyDBClusterSnapshotMessage = {
  SourceDBClusterSnapshotIdentifier: {}
  TargetDBClusterSnapshotIdentifier: {}
  KmsKeyId?: {} | undefined
  PreSignedUrl?: {} | undefined
  CopyTags?: {} | undefined
  Tags?: {} | undefined
}
type DBParameterGroup = {
  DBParameterGroupName?: {} | undefined
  DBParameterGroupFamily?: {} | undefined
  Description?: {} | undefined
  DBParameterGroupArn?: {} | undefined
}
type CopyDBParameterGroupResult = { DBParameterGroup?: DBParameterGroup | undefined }
type CopyDBParameterGroupMessage = {
  SourceDBParameterGroupIdentifier: {}
  TargetDBParameterGroupIdentifier: {}
  TargetDBParameterGroupDescription: {}
  Tags?: {} | undefined
}
type String = string
type ServerlessV2ScalingConfigurationInfo = {
  MinCapacity?: {} | undefined
  MaxCapacity?: {} | undefined
}
type DBCluster = {
  AllocatedStorage?: {} | undefined
  AvailabilityZones?: {} | undefined
  BackupRetentionPeriod?: {} | undefined
  CharacterSetName?: {} | undefined
  DatabaseName?: {} | undefined
  DBClusterIdentifier?: {} | undefined
  DBClusterParameterGroup?: {} | undefined
  DBSubnetGroup?: {} | undefined
  Status?: {} | undefined
  PercentProgress?: {} | undefined
  EarliestRestorableTime?: {} | undefined
  Endpoint?: {} | undefined
  ReaderEndpoint?: {} | undefined
  MultiAZ?: {} | undefined
  Engine?: {} | undefined
  EngineVersion?: {} | undefined
  LatestRestorableTime?: {} | undefined
  Port?: {} | undefined
  MasterUsername?: {} | undefined
  DBClusterOptionGroupMemberships?: {} | undefined
  PreferredBackupWindow?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  ReplicationSourceIdentifier?: {} | undefined
  ReadReplicaIdentifiers?: {} | undefined
  DBClusterMembers?: {} | undefined
  VpcSecurityGroups?: {} | undefined
  HostedZoneId?: {} | undefined
  StorageEncrypted?: {} | undefined
  KmsKeyId?: {} | undefined
  DbClusterResourceId?: {} | undefined
  DBClusterArn?: {} | undefined
  AssociatedRoles?: {} | undefined
  IAMDatabaseAuthenticationEnabled?: {} | undefined
  CloneGroupId?: {} | undefined
  ClusterCreateTime?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  EnabledCloudwatchLogsExports?: {} | undefined
  PendingModifiedValues?:
    | {
        PendingCloudwatchLogsExports?:
          | { LogTypesToEnable?: {} | undefined; LogTypesToDisable?: {} | undefined }
          | undefined
        DBClusterIdentifier?: {} | undefined
        IAMDatabaseAuthenticationEnabled?: {} | undefined
        EngineVersion?: {} | undefined
        BackupRetentionPeriod?: {} | undefined
        AllocatedStorage?: {} | undefined
        Iops?: {} | undefined
      }
    | undefined
  DeletionProtection?: {} | undefined
  CrossAccountClone?: {} | undefined
  AutomaticRestartTime?: {} | undefined
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfigurationInfo | undefined
  GlobalClusterIdentifier?: {} | undefined
}
type CreateDBClusterResult = { DBCluster?: DBCluster | undefined }
type DBClusterAlreadyExistsFault = { [x: string]: unknown }
type InsufficientStorageClusterCapacityFault = { [x: string]: unknown }
type DBClusterQuotaExceededFault = { [x: string]: unknown }
type StorageQuotaExceededFault = { [x: string]: unknown }
type DBSubnetGroupNotFoundFault = { [x: string]: unknown }
type InvalidVPCNetworkStateFault = { [x: string]: unknown }
type InvalidDBSubnetGroupStateFault = { [x: string]: unknown }
type InvalidSubnet = { [x: string]: unknown }
type InvalidDBInstanceStateFault = { [x: string]: unknown }
type DBClusterParameterGroupNotFoundFault = { [x: string]: unknown }
type DBSubnetGroupDoesNotCoverEnoughAZs = { [x: string]: unknown }
type GlobalClusterNotFoundFault = { [x: string]: unknown }
type InvalidGlobalClusterStateFault = { [x: string]: unknown }
type ServerlessV2ScalingConfiguration = {
  MinCapacity?: {} | undefined
  MaxCapacity?: {} | undefined
}
type CreateDBClusterMessage = {
  AvailabilityZones?: {} | undefined
  BackupRetentionPeriod?: {} | undefined
  CharacterSetName?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  DatabaseName?: {} | undefined
  DBClusterIdentifier: {}
  DBClusterParameterGroupName?: {} | undefined
  VpcSecurityGroupIds?: {} | undefined
  DBSubnetGroupName?: {} | undefined
  Engine: {}
  EngineVersion?: {} | undefined
  Port?: {} | undefined
  MasterUsername?: {} | undefined
  MasterUserPassword?: {} | undefined
  OptionGroupName?: {} | undefined
  PreferredBackupWindow?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  ReplicationSourceIdentifier?: {} | undefined
  Tags?: {} | undefined
  StorageEncrypted?: {} | undefined
  KmsKeyId?: {} | undefined
  PreSignedUrl?: {} | undefined
  EnableIAMDatabaseAuthentication?: {} | undefined
  EnableCloudwatchLogsExports?: {} | undefined
  DeletionProtection?: {} | undefined
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined
  GlobalClusterIdentifier?: {} | undefined
}
type CreateDBClusterEndpointOutput = {
  DBClusterEndpointIdentifier?: {} | undefined
  DBClusterIdentifier?: {} | undefined
  DBClusterEndpointResourceIdentifier?: {} | undefined
  Endpoint?: {} | undefined
  Status?: {} | undefined
  EndpointType?: {} | undefined
  CustomEndpointType?: {} | undefined
  StaticMembers?: {} | undefined
  ExcludedMembers?: {} | undefined
  DBClusterEndpointArn?: {} | undefined
}
type DBClusterEndpointQuotaExceededFault = { [x: string]: unknown }
type DBClusterEndpointAlreadyExistsFault = { [x: string]: unknown }
type CreateDBClusterEndpointMessage = {
  DBClusterIdentifier: {}
  DBClusterEndpointIdentifier: {}
  EndpointType: {}
  StaticMembers?: {} | undefined
  ExcludedMembers?: {} | undefined
  Tags?: {} | undefined
}
type CreateDBClusterParameterGroupResult = {
  DBClusterParameterGroup?: DBClusterParameterGroup | undefined
}
type CreateDBClusterParameterGroupMessage = {
  DBClusterParameterGroupName: {}
  DBParameterGroupFamily: {}
  Description: {}
  Tags?: {} | undefined
}
type CreateDBClusterSnapshotResult = { DBClusterSnapshot?: DBClusterSnapshot | undefined }
type CreateDBClusterSnapshotMessage = {
  DBClusterSnapshotIdentifier: {}
  DBClusterIdentifier: {}
  Tags?: {} | undefined
}
type DBInstance = {
  DBInstanceIdentifier?: {} | undefined
  DBInstanceClass?: {} | undefined
  Engine?: {} | undefined
  DBInstanceStatus?: {} | undefined
  MasterUsername?: {} | undefined
  DBName?: {} | undefined
  Endpoint?:
    | { Address?: {} | undefined; Port?: {} | undefined; HostedZoneId?: {} | undefined }
    | undefined
  AllocatedStorage?: {} | undefined
  InstanceCreateTime?: {} | undefined
  PreferredBackupWindow?: {} | undefined
  BackupRetentionPeriod?: {} | undefined
  DBSecurityGroups?: {} | undefined
  VpcSecurityGroups?: {} | undefined
  DBParameterGroups?: {} | undefined
  AvailabilityZone?: {} | undefined
  DBSubnetGroup?:
    | {
        DBSubnetGroupName?: {} | undefined
        DBSubnetGroupDescription?: {} | undefined
        VpcId?: {} | undefined
        SubnetGroupStatus?: {} | undefined
        Subnets?: {} | undefined
        DBSubnetGroupArn?: {} | undefined
      }
    | undefined
  PreferredMaintenanceWindow?: {} | undefined
  PendingModifiedValues?:
    | {
        DBInstanceClass?: {} | undefined
        AllocatedStorage?: {} | undefined
        MasterUserPassword?: {} | undefined
        Port?: {} | undefined
        BackupRetentionPeriod?: {} | undefined
        MultiAZ?: {} | undefined
        EngineVersion?: {} | undefined
        LicenseModel?: {} | undefined
        Iops?: {} | undefined
        DBInstanceIdentifier?: {} | undefined
        StorageType?: {} | undefined
        CACertificateIdentifier?: {} | undefined
        DBSubnetGroupName?: {} | undefined
        PendingCloudwatchLogsExports?:
          | { LogTypesToEnable?: {} | undefined; LogTypesToDisable?: {} | undefined }
          | undefined
      }
    | undefined
  LatestRestorableTime?: {} | undefined
  MultiAZ?: {} | undefined
  EngineVersion?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  ReadReplicaSourceDBInstanceIdentifier?: {} | undefined
  ReadReplicaDBInstanceIdentifiers?: {} | undefined
  ReadReplicaDBClusterIdentifiers?: {} | undefined
  LicenseModel?: {} | undefined
  Iops?: {} | undefined
  OptionGroupMemberships?: {} | undefined
  CharacterSetName?: {} | undefined
  SecondaryAvailabilityZone?: {} | undefined
  PubliclyAccessible?: {} | undefined
  StatusInfos?: {} | undefined
  StorageType?: {} | undefined
  TdeCredentialArn?: {} | undefined
  DbInstancePort?: {} | undefined
  DBClusterIdentifier?: {} | undefined
  StorageEncrypted?: {} | undefined
  KmsKeyId?: {} | undefined
  DbiResourceId?: {} | undefined
  CACertificateIdentifier?: {} | undefined
  DomainMemberships?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  MonitoringInterval?: {} | undefined
  EnhancedMonitoringResourceArn?: {} | undefined
  MonitoringRoleArn?: {} | undefined
  PromotionTier?: {} | undefined
  DBInstanceArn?: {} | undefined
  Timezone?: {} | undefined
  IAMDatabaseAuthenticationEnabled?: {} | undefined
  PerformanceInsightsEnabled?: {} | undefined
  PerformanceInsightsKMSKeyId?: {} | undefined
  EnabledCloudwatchLogsExports?: {} | undefined
  DeletionProtection?: {} | undefined
}
type CreateDBInstanceResult = { DBInstance?: DBInstance | undefined }
type DBInstanceAlreadyExistsFault = { [x: string]: unknown }
type InsufficientDBInstanceCapacityFault = { [x: string]: unknown }
type DBSecurityGroupNotFoundFault = { [x: string]: unknown }
type InstanceQuotaExceededFault = { [x: string]: unknown }
type ProvisionedIopsNotAvailableInAZFault = { [x: string]: unknown }
type OptionGroupNotFoundFault = { [x: string]: unknown }
type StorageTypeNotSupportedFault = { [x: string]: unknown }
type AuthorizationNotFoundFault = { [x: string]: unknown }
type DomainNotFoundFault = { [x: string]: unknown }
type CreateDBInstanceMessage = {
  DBName?: {} | undefined
  DBInstanceIdentifier: {}
  AllocatedStorage?: {} | undefined
  DBInstanceClass: {}
  Engine: {}
  MasterUsername?: {} | undefined
  MasterUserPassword?: {} | undefined
  DBSecurityGroups?: {} | undefined
  VpcSecurityGroupIds?: {} | undefined
  AvailabilityZone?: {} | undefined
  DBSubnetGroupName?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  DBParameterGroupName?: {} | undefined
  BackupRetentionPeriod?: {} | undefined
  PreferredBackupWindow?: {} | undefined
  Port?: {} | undefined
  MultiAZ?: {} | undefined
  EngineVersion?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  LicenseModel?: {} | undefined
  Iops?: {} | undefined
  OptionGroupName?: {} | undefined
  CharacterSetName?: {} | undefined
  PubliclyAccessible?: {} | undefined
  Tags?: {} | undefined
  DBClusterIdentifier: {}
  StorageType?: {} | undefined
  TdeCredentialArn?: {} | undefined
  TdeCredentialPassword?: {} | undefined
  StorageEncrypted?: {} | undefined
  KmsKeyId?: {} | undefined
  Domain?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  MonitoringInterval?: {} | undefined
  MonitoringRoleArn?: {} | undefined
  DomainIAMRoleName?: {} | undefined
  PromotionTier?: {} | undefined
  Timezone?: {} | undefined
  EnableIAMDatabaseAuthentication?: {} | undefined
  EnablePerformanceInsights?: {} | undefined
  PerformanceInsightsKMSKeyId?: {} | undefined
  EnableCloudwatchLogsExports?: {} | undefined
  DeletionProtection?: {} | undefined
}
type CreateDBParameterGroupResult = { DBParameterGroup?: DBParameterGroup | undefined }
type CreateDBParameterGroupMessage = {
  DBParameterGroupName: {}
  DBParameterGroupFamily: {}
  Description: {}
  Tags?: {} | undefined
}
type DBSubnetGroup = {
  DBSubnetGroupName?: {} | undefined
  DBSubnetGroupDescription?: {} | undefined
  VpcId?: {} | undefined
  SubnetGroupStatus?: {} | undefined
  Subnets?: {} | undefined
  DBSubnetGroupArn?: {} | undefined
}
type CreateDBSubnetGroupResult = { DBSubnetGroup?: DBSubnetGroup | undefined }
type DBSubnetGroupAlreadyExistsFault = { [x: string]: unknown }
type DBSubnetGroupQuotaExceededFault = { [x: string]: unknown }
type DBSubnetQuotaExceededFault = { [x: string]: unknown }
type CreateDBSubnetGroupMessage = {
  DBSubnetGroupName: {}
  DBSubnetGroupDescription: {}
  SubnetIds: {}
  Tags?: {} | undefined
}
type CreateEventSubscriptionResult = { EventSubscription?: EventSubscription | undefined }
type EventSubscriptionQuotaExceededFault = { [x: string]: unknown }
type SubscriptionAlreadyExistFault = { [x: string]: unknown }
type SNSInvalidTopicFault = { [x: string]: unknown }
type SNSNoAuthorizationFault = { [x: string]: unknown }
type SNSTopicArnNotFoundFault = { [x: string]: unknown }
type SubscriptionCategoryNotFoundFault = { [x: string]: unknown }
type CreateEventSubscriptionMessage = {
  SubscriptionName: {}
  SnsTopicArn: {}
  SourceType?: {} | undefined
  EventCategories?: {} | undefined
  SourceIds?: {} | undefined
  Enabled?: {} | undefined
  Tags?: {} | undefined
}
type GlobalCluster = {
  GlobalClusterIdentifier?: {} | undefined
  GlobalClusterResourceId?: {} | undefined
  GlobalClusterArn?: {} | undefined
  Status?: {} | undefined
  Engine?: {} | undefined
  EngineVersion?: {} | undefined
  StorageEncrypted?: {} | undefined
  DeletionProtection?: {} | undefined
  GlobalClusterMembers?: {} | undefined
}
type CreateGlobalClusterResult = { GlobalCluster?: GlobalCluster | undefined }
type GlobalClusterAlreadyExistsFault = { [x: string]: unknown }
type GlobalClusterQuotaExceededFault = { [x: string]: unknown }
type CreateGlobalClusterMessage = {
  GlobalClusterIdentifier: {}
  SourceDBClusterIdentifier?: {} | undefined
  Engine?: {} | undefined
  EngineVersion?: {} | undefined
  DeletionProtection?: {} | undefined
  StorageEncrypted?: {} | undefined
}
type DeleteDBClusterResult = { DBCluster?: DBCluster | undefined }
type DeleteDBClusterMessage = {
  DBClusterIdentifier: {}
  SkipFinalSnapshot?: {} | undefined
  FinalDBSnapshotIdentifier?: {} | undefined
}
type DeleteDBClusterEndpointOutput = {
  DBClusterEndpointIdentifier?: {} | undefined
  DBClusterIdentifier?: {} | undefined
  DBClusterEndpointResourceIdentifier?: {} | undefined
  Endpoint?: {} | undefined
  Status?: {} | undefined
  EndpointType?: {} | undefined
  CustomEndpointType?: {} | undefined
  StaticMembers?: {} | undefined
  ExcludedMembers?: {} | undefined
  DBClusterEndpointArn?: {} | undefined
}
type InvalidDBClusterEndpointStateFault = { [x: string]: unknown }
type DBClusterEndpointNotFoundFault = { [x: string]: unknown }
type DeleteDBClusterEndpointMessage = { DBClusterEndpointIdentifier: {} }
type InvalidDBParameterGroupStateFault = { [x: string]: unknown }
type DeleteDBClusterParameterGroupMessage = { DBClusterParameterGroupName: {} }
type DeleteDBClusterSnapshotResult = { DBClusterSnapshot?: DBClusterSnapshot | undefined }
type DeleteDBClusterSnapshotMessage = { DBClusterSnapshotIdentifier: {} }
type DeleteDBInstanceResult = { DBInstance?: DBInstance | undefined }
type DBSnapshotAlreadyExistsFault = { [x: string]: unknown }
type DeleteDBInstanceMessage = {
  DBInstanceIdentifier: {}
  SkipFinalSnapshot?: {} | undefined
  FinalDBSnapshotIdentifier?: {} | undefined
}
type DeleteDBParameterGroupMessage = { DBParameterGroupName: {} }
type InvalidDBSubnetStateFault = { [x: string]: unknown }
type DeleteDBSubnetGroupMessage = { DBSubnetGroupName: {} }
type DeleteEventSubscriptionResult = { EventSubscription?: EventSubscription | undefined }
type InvalidEventSubscriptionStateFault = { [x: string]: unknown }
type DeleteEventSubscriptionMessage = { SubscriptionName: {} }
type DeleteGlobalClusterResult = { GlobalCluster?: GlobalCluster | undefined }
type DeleteGlobalClusterMessage = { GlobalClusterIdentifier: {} }
type DBClusterEndpointMessage = { Marker?: {} | undefined; DBClusterEndpoints?: {} | undefined }
type DescribeDBClusterEndpointsMessage = {
  DBClusterIdentifier?: {} | undefined
  DBClusterEndpointIdentifier?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DBClusterParameterGroupsMessage = {
  Marker?: {} | undefined
  DBClusterParameterGroups?: {} | undefined
}
type DescribeDBClusterParameterGroupsMessage = {
  DBClusterParameterGroupName?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DBClusterParameterGroupDetails = { Parameters?: {} | undefined; Marker?: {} | undefined }
type DescribeDBClusterParametersMessage = {
  DBClusterParameterGroupName: {}
  Source?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DBClusterSnapshotAttributesResult = {
  DBClusterSnapshotIdentifier?: {} | undefined
  DBClusterSnapshotAttributes?: {} | undefined
}
type DescribeDBClusterSnapshotAttributesResult = {
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult | undefined
}
type DescribeDBClusterSnapshotAttributesMessage = { DBClusterSnapshotIdentifier: {} }
type DBClusterSnapshotMessage = { Marker?: {} | undefined; DBClusterSnapshots?: {} | undefined }
type DescribeDBClusterSnapshotsMessage = {
  DBClusterIdentifier?: {} | undefined
  DBClusterSnapshotIdentifier?: {} | undefined
  SnapshotType?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  IncludeShared?: {} | undefined
  IncludePublic?: {} | undefined
}
type DBClusterMessage = { Marker?: {} | undefined; DBClusters?: {} | undefined }
type DescribeDBClustersMessage = {
  DBClusterIdentifier?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DBEngineVersionMessage = { Marker?: {} | undefined; DBEngineVersions?: {} | undefined }
type DescribeDBEngineVersionsMessage = {
  Engine?: {} | undefined
  EngineVersion?: {} | undefined
  DBParameterGroupFamily?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  DefaultOnly?: {} | undefined
  ListSupportedCharacterSets?: {} | undefined
  ListSupportedTimezones?: {} | undefined
}
type DBInstanceMessage = { Marker?: {} | undefined; DBInstances?: {} | undefined }
type DescribeDBInstancesMessage = {
  DBInstanceIdentifier?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DBParameterGroupsMessage = { Marker?: {} | undefined; DBParameterGroups?: {} | undefined }
type DescribeDBParameterGroupsMessage = {
  DBParameterGroupName?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DBParameterGroupDetails = { Parameters?: {} | undefined; Marker?: {} | undefined }
type DescribeDBParametersMessage = {
  DBParameterGroupName: {}
  Source?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DBSubnetGroupMessage = { Marker?: {} | undefined; DBSubnetGroups?: {} | undefined }
type DescribeDBSubnetGroupsMessage = {
  DBSubnetGroupName?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type EngineDefaults = {
  DBParameterGroupFamily?: {} | undefined
  Marker?: {} | undefined
  Parameters?: {} | undefined
}
type DescribeEngineDefaultClusterParametersResult = { EngineDefaults?: EngineDefaults | undefined }
type DescribeEngineDefaultClusterParametersMessage = {
  DBParameterGroupFamily: {}
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeEngineDefaultParametersResult = { EngineDefaults?: EngineDefaults | undefined }
type DescribeEngineDefaultParametersMessage = {
  DBParameterGroupFamily: {}
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type EventCategoriesMessage = { EventCategoriesMapList?: {} | undefined }
type DescribeEventCategoriesMessage = { SourceType?: {} | undefined; Filters?: {} | undefined }
type EventSubscriptionsMessage = {
  Marker?: {} | undefined
  EventSubscriptionsList?: {} | undefined
}
type DescribeEventSubscriptionsMessage = {
  SubscriptionName?: {} | undefined
  Filters?: {} | undefined
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
  EventCategories?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type GlobalClustersMessage = { Marker?: {} | undefined; GlobalClusters?: {} | undefined }
type DescribeGlobalClustersMessage = {
  GlobalClusterIdentifier?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type OrderableDBInstanceOptionsMessage = {
  OrderableDBInstanceOptions?: {} | undefined
  Marker?: {} | undefined
}
type DescribeOrderableDBInstanceOptionsMessage = {
  Engine: {}
  EngineVersion?: {} | undefined
  DBInstanceClass?: {} | undefined
  LicenseModel?: {} | undefined
  Vpc?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type PendingMaintenanceActionsMessage = {
  PendingMaintenanceActions?: {} | undefined
  Marker?: {} | undefined
}
type DescribePendingMaintenanceActionsMessage = {
  ResourceIdentifier?: {} | undefined
  Filters?: {} | undefined
  Marker?: {} | undefined
  MaxRecords?: {} | undefined
}
type ValidDBInstanceModificationsMessage = { Storage?: {} | undefined }
type DescribeValidDBInstanceModificationsResult = {
  ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage | undefined
}
type DescribeValidDBInstanceModificationsMessage = { DBInstanceIdentifier: {} }
type FailoverDBClusterResult = { DBCluster?: DBCluster | undefined }
type FailoverDBClusterMessage = {
  DBClusterIdentifier?: {} | undefined
  TargetDBInstanceIdentifier?: {} | undefined
}
type FailoverGlobalClusterResult = { GlobalCluster?: GlobalCluster | undefined }
type FailoverGlobalClusterMessage = { GlobalClusterIdentifier: {}; TargetDbClusterIdentifier: {} }
type TagListMessage = { TagList?: {} | undefined }
type ListTagsForResourceMessage = { ResourceName: {}; Filters?: {} | undefined }
type ModifyDBClusterResult = { DBCluster?: DBCluster | undefined }
type InvalidDBSecurityGroupStateFault = { [x: string]: unknown }
type ModifyDBClusterMessage = {
  DBClusterIdentifier: {}
  NewDBClusterIdentifier?: {} | undefined
  ApplyImmediately?: {} | undefined
  BackupRetentionPeriod?: {} | undefined
  DBClusterParameterGroupName?: {} | undefined
  VpcSecurityGroupIds?: {} | undefined
  Port?: {} | undefined
  MasterUserPassword?: {} | undefined
  OptionGroupName?: {} | undefined
  PreferredBackupWindow?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  EnableIAMDatabaseAuthentication?: {} | undefined
  CloudwatchLogsExportConfiguration?:
    | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
    | undefined
  EngineVersion?: {} | undefined
  AllowMajorVersionUpgrade?: {} | undefined
  DBInstanceParameterGroupName?: {} | undefined
  DeletionProtection?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined
}
type ModifyDBClusterEndpointOutput = {
  DBClusterEndpointIdentifier?: {} | undefined
  DBClusterIdentifier?: {} | undefined
  DBClusterEndpointResourceIdentifier?: {} | undefined
  Endpoint?: {} | undefined
  Status?: {} | undefined
  EndpointType?: {} | undefined
  CustomEndpointType?: {} | undefined
  StaticMembers?: {} | undefined
  ExcludedMembers?: {} | undefined
  DBClusterEndpointArn?: {} | undefined
}
type ModifyDBClusterEndpointMessage = {
  DBClusterEndpointIdentifier: {}
  EndpointType?: {} | undefined
  StaticMembers?: {} | undefined
  ExcludedMembers?: {} | undefined
}
type DBClusterParameterGroupNameMessage = { DBClusterParameterGroupName?: {} | undefined }
type ModifyDBClusterParameterGroupMessage = { DBClusterParameterGroupName: {}; Parameters: {} }
type ModifyDBClusterSnapshotAttributeResult = {
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult | undefined
}
type SharedSnapshotQuotaExceededFault = { [x: string]: unknown }
type ModifyDBClusterSnapshotAttributeMessage = {
  DBClusterSnapshotIdentifier: {}
  AttributeName: {}
  ValuesToAdd?: {} | undefined
  ValuesToRemove?: {} | undefined
}
type ModifyDBInstanceResult = { DBInstance?: DBInstance | undefined }
type DBUpgradeDependencyFailureFault = { [x: string]: unknown }
type CertificateNotFoundFault = { [x: string]: unknown }
type ModifyDBInstanceMessage = {
  DBInstanceIdentifier: {}
  AllocatedStorage?: {} | undefined
  DBInstanceClass?: {} | undefined
  DBSubnetGroupName?: {} | undefined
  DBSecurityGroups?: {} | undefined
  VpcSecurityGroupIds?: {} | undefined
  ApplyImmediately?: {} | undefined
  MasterUserPassword?: {} | undefined
  DBParameterGroupName?: {} | undefined
  BackupRetentionPeriod?: {} | undefined
  PreferredBackupWindow?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  MultiAZ?: {} | undefined
  EngineVersion?: {} | undefined
  AllowMajorVersionUpgrade?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  LicenseModel?: {} | undefined
  Iops?: {} | undefined
  OptionGroupName?: {} | undefined
  NewDBInstanceIdentifier?: {} | undefined
  StorageType?: {} | undefined
  TdeCredentialArn?: {} | undefined
  TdeCredentialPassword?: {} | undefined
  CACertificateIdentifier?: {} | undefined
  Domain?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  MonitoringInterval?: {} | undefined
  DBPortNumber?: {} | undefined
  PubliclyAccessible?: {} | undefined
  MonitoringRoleArn?: {} | undefined
  DomainIAMRoleName?: {} | undefined
  PromotionTier?: {} | undefined
  EnableIAMDatabaseAuthentication?: {} | undefined
  EnablePerformanceInsights?: {} | undefined
  PerformanceInsightsKMSKeyId?: {} | undefined
  CloudwatchLogsExportConfiguration?:
    | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
    | undefined
  DeletionProtection?: {} | undefined
}
type DBParameterGroupNameMessage = { DBParameterGroupName?: {} | undefined }
type ModifyDBParameterGroupMessage = { DBParameterGroupName: {}; Parameters: {} }
type ModifyDBSubnetGroupResult = { DBSubnetGroup?: DBSubnetGroup | undefined }
type SubnetAlreadyInUse = { [x: string]: unknown }
type ModifyDBSubnetGroupMessage = {
  DBSubnetGroupName: {}
  DBSubnetGroupDescription?: {} | undefined
  SubnetIds: {}
}
type ModifyEventSubscriptionResult = { EventSubscription?: EventSubscription | undefined }
type ModifyEventSubscriptionMessage = {
  SubscriptionName: {}
  SnsTopicArn?: {} | undefined
  SourceType?: {} | undefined
  EventCategories?: {} | undefined
  Enabled?: {} | undefined
}
type ModifyGlobalClusterResult = { GlobalCluster?: GlobalCluster | undefined }
type ModifyGlobalClusterMessage = {
  GlobalClusterIdentifier: {}
  NewGlobalClusterIdentifier?: {} | undefined
  DeletionProtection?: {} | undefined
  EngineVersion?: {} | undefined
  AllowMajorVersionUpgrade?: {} | undefined
}
type PromoteReadReplicaDBClusterResult = { DBCluster?: DBCluster | undefined }
type PromoteReadReplicaDBClusterMessage = { DBClusterIdentifier: {} }
type RebootDBInstanceResult = { DBInstance?: DBInstance | undefined }
type RebootDBInstanceMessage = { DBInstanceIdentifier: {}; ForceFailover?: {} | undefined }
type RemoveFromGlobalClusterResult = { GlobalCluster?: GlobalCluster | undefined }
type RemoveFromGlobalClusterMessage = { GlobalClusterIdentifier: {}; DbClusterIdentifier: {} }
type DBClusterRoleNotFoundFault = { [x: string]: unknown }
type RemoveRoleFromDBClusterMessage = {
  DBClusterIdentifier: {}
  RoleArn: {}
  FeatureName?: {} | undefined
}
type RemoveSourceIdentifierFromSubscriptionResult = {
  EventSubscription?: EventSubscription | undefined
}
type RemoveSourceIdentifierFromSubscriptionMessage = { SubscriptionName: {}; SourceIdentifier: {} }
type RemoveTagsFromResourceMessage = { ResourceName: {}; TagKeys: {} }
type ResetDBClusterParameterGroupMessage = {
  DBClusterParameterGroupName: {}
  ResetAllParameters?: {} | undefined
  Parameters?: {} | undefined
}
type ResetDBParameterGroupMessage = {
  DBParameterGroupName: {}
  ResetAllParameters?: {} | undefined
  Parameters?: {} | undefined
}
type RestoreDBClusterFromSnapshotResult = { DBCluster?: DBCluster | undefined }
type InsufficientDBClusterCapacityFault = { [x: string]: unknown }
type InvalidDBSnapshotStateFault = { [x: string]: unknown }
type InvalidRestoreFault = { [x: string]: unknown }
type RestoreDBClusterFromSnapshotMessage = {
  AvailabilityZones?: {} | undefined
  DBClusterIdentifier: {}
  SnapshotIdentifier: {}
  Engine: {}
  EngineVersion?: {} | undefined
  Port?: {} | undefined
  DBSubnetGroupName?: {} | undefined
  DatabaseName?: {} | undefined
  OptionGroupName?: {} | undefined
  VpcSecurityGroupIds?: {} | undefined
  Tags?: {} | undefined
  KmsKeyId?: {} | undefined
  EnableIAMDatabaseAuthentication?: {} | undefined
  EnableCloudwatchLogsExports?: {} | undefined
  DBClusterParameterGroupName?: {} | undefined
  DeletionProtection?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined
}
type RestoreDBClusterToPointInTimeResult = { DBCluster?: DBCluster | undefined }
type RestoreDBClusterToPointInTimeMessage = {
  DBClusterIdentifier: {}
  RestoreType?: {} | undefined
  SourceDBClusterIdentifier: {}
  RestoreToTime?: {} | undefined
  UseLatestRestorableTime?: {} | undefined
  Port?: {} | undefined
  DBSubnetGroupName?: {} | undefined
  OptionGroupName?: {} | undefined
  VpcSecurityGroupIds?: {} | undefined
  Tags?: {} | undefined
  KmsKeyId?: {} | undefined
  EnableIAMDatabaseAuthentication?: {} | undefined
  EnableCloudwatchLogsExports?: {} | undefined
  DBClusterParameterGroupName?: {} | undefined
  DeletionProtection?: {} | undefined
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined
}
type StartDBClusterResult = { DBCluster?: DBCluster | undefined }
type StartDBClusterMessage = { DBClusterIdentifier: {} }
type StopDBClusterResult = { DBCluster?: DBCluster | undefined }
type StopDBClusterMessage = { DBClusterIdentifier: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Action=AddRoleToDBCluster': {
      $get:
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RoleArn: string
                FeatureName?: string | undefined
                Action: 'AddRoleToDBCluster'
                Version: '2014-10-31'
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
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RoleArn: string
                FeatureName?: string | undefined
                Action: 'AddRoleToDBCluster'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RoleArn: string
                FeatureName?: string | undefined
                Action: 'AddRoleToDBCluster'
                Version: '2014-10-31'
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
            output: DBClusterRoleAlreadyExistsFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RoleArn: string
                FeatureName?: string | undefined
                Action: 'AddRoleToDBCluster'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RoleArn: string
                FeatureName?: string | undefined
                Action: 'AddRoleToDBCluster'
                Version: '2014-10-31'
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
            output: DBClusterRoleQuotaExceededFault
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'AddRoleToDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddRoleToDBClusterMessage }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'AddRoleToDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddRoleToDBClusterMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'AddRoleToDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddRoleToDBClusterMessage }
            output: DBClusterRoleAlreadyExistsFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'AddRoleToDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddRoleToDBClusterMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'AddRoleToDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddRoleToDBClusterMessage }
            output: DBClusterRoleQuotaExceededFault
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=AddSourceIdentifierToSubscription': {
      $get:
        | {
            input: {
              query: {
                SubscriptionName: string
                SourceIdentifier: string
                Action: 'AddSourceIdentifierToSubscription'
                Version: '2014-10-31'
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
            output: AddSourceIdentifierToSubscriptionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                SourceIdentifier: string
                Action: 'AddSourceIdentifierToSubscription'
                Version: '2014-10-31'
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
            output: SubscriptionNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                SourceIdentifier: string
                Action: 'AddSourceIdentifierToSubscription'
                Version: '2014-10-31'
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
            output: SourceNotFoundFault
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: {
              query: { Action: 'AddSourceIdentifierToSubscription'; Version: '2014-10-31' }
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
            } & { json: AddSourceIdentifierToSubscriptionMessage }
            output: AddSourceIdentifierToSubscriptionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'AddSourceIdentifierToSubscription'; Version: '2014-10-31' }
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
            } & { json: AddSourceIdentifierToSubscriptionMessage }
            output: SubscriptionNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'AddSourceIdentifierToSubscription'; Version: '2014-10-31' }
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
            } & { json: AddSourceIdentifierToSubscriptionMessage }
            output: SourceNotFoundFault
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=AddTagsToResource': {
      $get:
        | {
            input: {
              query: {
                ResourceName: string
                Tags: { Key?: {} | undefined; Value?: {} | undefined }[]
                Action: 'AddTagsToResource'
                Version: '2014-10-31'
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
        | {
            input: {
              query: {
                ResourceName: string
                Tags: { Key?: {} | undefined; Value?: {} | undefined }[]
                Action: 'AddTagsToResource'
                Version: '2014-10-31'
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
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ResourceName: string
                Tags: { Key?: {} | undefined; Value?: {} | undefined }[]
                Action: 'AddTagsToResource'
                Version: '2014-10-31'
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
            output: DBSnapshotNotFoundFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ResourceName: string
                Tags: { Key?: {} | undefined; Value?: {} | undefined }[]
                Action: 'AddTagsToResource'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'AddTagsToResource'; Version: '2014-10-31' } } & {
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
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'AddTagsToResource'; Version: '2014-10-31' } } & {
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
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'AddTagsToResource'; Version: '2014-10-31' } } & {
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
            output: DBSnapshotNotFoundFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'AddTagsToResource'; Version: '2014-10-31' } } & {
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=ApplyPendingMaintenanceAction': {
      $get:
        | {
            input: {
              query: {
                ResourceIdentifier: string
                ApplyAction: string
                OptInType: string
                Action: 'ApplyPendingMaintenanceAction'
                Version: '2014-10-31'
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
            output: ApplyPendingMaintenanceActionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ResourceIdentifier: string
                ApplyAction: string
                OptInType: string
                Action: 'ApplyPendingMaintenanceAction'
                Version: '2014-10-31'
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
            output: ResourceNotFoundFault
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'ApplyPendingMaintenanceAction'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ApplyPendingMaintenanceActionMessage }
            output: ApplyPendingMaintenanceActionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ApplyPendingMaintenanceAction'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ApplyPendingMaintenanceActionMessage }
            output: ResourceNotFoundFault
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=CopyDBClusterParameterGroup': {
      $get:
        | {
            input: {
              query: {
                SourceDBClusterParameterGroupIdentifier: string
                TargetDBClusterParameterGroupIdentifier: string
                TargetDBClusterParameterGroupDescription: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CopyDBClusterParameterGroup'
                Version: '2014-10-31'
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
            output: CopyDBClusterParameterGroupResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SourceDBClusterParameterGroupIdentifier: string
                TargetDBClusterParameterGroupIdentifier: string
                TargetDBClusterParameterGroupDescription: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CopyDBClusterParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                SourceDBClusterParameterGroupIdentifier: string
                TargetDBClusterParameterGroupIdentifier: string
                TargetDBClusterParameterGroupDescription: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CopyDBClusterParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupQuotaExceededFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                SourceDBClusterParameterGroupIdentifier: string
                TargetDBClusterParameterGroupIdentifier: string
                TargetDBClusterParameterGroupDescription: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CopyDBClusterParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupAlreadyExistsFault
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'CopyDBClusterParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyDBClusterParameterGroupMessage }
            output: CopyDBClusterParameterGroupResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CopyDBClusterParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyDBClusterParameterGroupMessage }
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CopyDBClusterParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyDBClusterParameterGroupMessage }
            output: DBParameterGroupQuotaExceededFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CopyDBClusterParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyDBClusterParameterGroupMessage }
            output: DBParameterGroupAlreadyExistsFault
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=CopyDBClusterSnapshot': {
      $get:
        | {
            input: {
              query: {
                SourceDBClusterSnapshotIdentifier: string
                TargetDBClusterSnapshotIdentifier: string
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                CopyTags?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CopyDBClusterSnapshot'
                Version: '2014-10-31'
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
            output: CopyDBClusterSnapshotResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SourceDBClusterSnapshotIdentifier: string
                TargetDBClusterSnapshotIdentifier: string
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                CopyTags?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CopyDBClusterSnapshot'
                Version: '2014-10-31'
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
            output: DBClusterSnapshotAlreadyExistsFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                SourceDBClusterSnapshotIdentifier: string
                TargetDBClusterSnapshotIdentifier: string
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                CopyTags?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CopyDBClusterSnapshot'
                Version: '2014-10-31'
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
            output: DBClusterSnapshotNotFoundFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                SourceDBClusterSnapshotIdentifier: string
                TargetDBClusterSnapshotIdentifier: string
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                CopyTags?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CopyDBClusterSnapshot'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                SourceDBClusterSnapshotIdentifier: string
                TargetDBClusterSnapshotIdentifier: string
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                CopyTags?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CopyDBClusterSnapshot'
                Version: '2014-10-31'
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
            output: InvalidDBClusterSnapshotStateFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                SourceDBClusterSnapshotIdentifier: string
                TargetDBClusterSnapshotIdentifier: string
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                CopyTags?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CopyDBClusterSnapshot'
                Version: '2014-10-31'
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
            output: SnapshotQuotaExceededFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                SourceDBClusterSnapshotIdentifier: string
                TargetDBClusterSnapshotIdentifier: string
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                CopyTags?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CopyDBClusterSnapshot'
                Version: '2014-10-31'
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
            output: KMSKeyNotAccessibleFault
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'CopyDBClusterSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyDBClusterSnapshotMessage }
            output: CopyDBClusterSnapshotResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CopyDBClusterSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyDBClusterSnapshotMessage }
            output: DBClusterSnapshotAlreadyExistsFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CopyDBClusterSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyDBClusterSnapshotMessage }
            output: DBClusterSnapshotNotFoundFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CopyDBClusterSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyDBClusterSnapshotMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CopyDBClusterSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyDBClusterSnapshotMessage }
            output: InvalidDBClusterSnapshotStateFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CopyDBClusterSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyDBClusterSnapshotMessage }
            output: SnapshotQuotaExceededFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'CopyDBClusterSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyDBClusterSnapshotMessage }
            output: KMSKeyNotAccessibleFault
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=CopyDBParameterGroup': {
      $get:
        | {
            input: {
              query: {
                SourceDBParameterGroupIdentifier: string
                TargetDBParameterGroupIdentifier: string
                TargetDBParameterGroupDescription: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CopyDBParameterGroup'
                Version: '2014-10-31'
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
            output: CopyDBParameterGroupResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SourceDBParameterGroupIdentifier: string
                TargetDBParameterGroupIdentifier: string
                TargetDBParameterGroupDescription: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CopyDBParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                SourceDBParameterGroupIdentifier: string
                TargetDBParameterGroupIdentifier: string
                TargetDBParameterGroupDescription: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CopyDBParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupAlreadyExistsFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                SourceDBParameterGroupIdentifier: string
                TargetDBParameterGroupIdentifier: string
                TargetDBParameterGroupDescription: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CopyDBParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupQuotaExceededFault
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'CopyDBParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyDBParameterGroupMessage }
            output: CopyDBParameterGroupResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CopyDBParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyDBParameterGroupMessage }
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CopyDBParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyDBParameterGroupMessage }
            output: DBParameterGroupAlreadyExistsFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CopyDBParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CopyDBParameterGroupMessage }
            output: DBParameterGroupQuotaExceededFault
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=CreateDBCluster': {
      $get:
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: CreateDBClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: DBClusterAlreadyExistsFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: InsufficientStorageClusterCapacityFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: DBClusterQuotaExceededFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: StorageQuotaExceededFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: InvalidVPCNetworkStateFault
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 486
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: InvalidDBSubnetGroupStateFault
            outputFormat: 'text'
            status: 487
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: InvalidSubnet
            outputFormat: 'text'
            status: 488
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 489
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: DBClusterParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 490
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: KMSKeyNotAccessibleFault
            outputFormat: 'text'
            status: 491
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 492
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 493
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: DBSubnetGroupDoesNotCoverEnoughAZs
            outputFormat: 'text'
            status: 494
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: GlobalClusterNotFoundFault
            outputFormat: 'text'
            status: 495
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                BackupRetentionPeriod?: number | undefined
                CharacterSetName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DatabaseName?: string | undefined
                DBClusterIdentifier: string
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                DBSubnetGroupName?: string | undefined
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ReplicationSourceIdentifier?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                GlobalClusterIdentifier?: string | undefined
                Action: 'CreateDBCluster'
                Version: '2014-10-31'
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
            output: InvalidGlobalClusterStateFault
            outputFormat: 'text'
            status: 496
          }
      $post:
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: CreateDBClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: DBClusterAlreadyExistsFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: InsufficientStorageClusterCapacityFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: DBClusterQuotaExceededFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: StorageQuotaExceededFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: InvalidVPCNetworkStateFault
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 486
          }
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: InvalidDBSubnetGroupStateFault
            outputFormat: 'text'
            status: 487
          }
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: InvalidSubnet
            outputFormat: 'text'
            status: 488
          }
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 489
          }
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: DBClusterParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 490
          }
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: KMSKeyNotAccessibleFault
            outputFormat: 'text'
            status: 491
          }
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 492
          }
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 493
          }
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: DBSubnetGroupDoesNotCoverEnoughAZs
            outputFormat: 'text'
            status: 494
          }
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: GlobalClusterNotFoundFault
            outputFormat: 'text'
            status: 495
          }
        | {
            input: { query: { Action: 'CreateDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterMessage }
            output: InvalidGlobalClusterStateFault
            outputFormat: 'text'
            status: 496
          }
    }
  } & {
    '/#Action=CreateDBClusterEndpoint': {
      $get:
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                DBClusterEndpointIdentifier: string
                EndpointType: string
                StaticMembers?: String[] | undefined
                ExcludedMembers?: String[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBClusterEndpoint'
                Version: '2014-10-31'
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
            output: CreateDBClusterEndpointOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                DBClusterEndpointIdentifier: string
                EndpointType: string
                StaticMembers?: String[] | undefined
                ExcludedMembers?: String[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBClusterEndpoint'
                Version: '2014-10-31'
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
            output: DBClusterEndpointQuotaExceededFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                DBClusterEndpointIdentifier: string
                EndpointType: string
                StaticMembers?: String[] | undefined
                ExcludedMembers?: String[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBClusterEndpoint'
                Version: '2014-10-31'
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
            output: DBClusterEndpointAlreadyExistsFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                DBClusterEndpointIdentifier: string
                EndpointType: string
                StaticMembers?: String[] | undefined
                ExcludedMembers?: String[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBClusterEndpoint'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                DBClusterEndpointIdentifier: string
                EndpointType: string
                StaticMembers?: String[] | undefined
                ExcludedMembers?: String[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBClusterEndpoint'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                DBClusterEndpointIdentifier: string
                EndpointType: string
                StaticMembers?: String[] | undefined
                ExcludedMembers?: String[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBClusterEndpoint'
                Version: '2014-10-31'
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
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                DBClusterEndpointIdentifier: string
                EndpointType: string
                StaticMembers?: String[] | undefined
                ExcludedMembers?: String[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBClusterEndpoint'
                Version: '2014-10-31'
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
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'CreateDBClusterEndpoint'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterEndpointMessage }
            output: CreateDBClusterEndpointOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateDBClusterEndpoint'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterEndpointMessage }
            output: DBClusterEndpointQuotaExceededFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateDBClusterEndpoint'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterEndpointMessage }
            output: DBClusterEndpointAlreadyExistsFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateDBClusterEndpoint'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterEndpointMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateDBClusterEndpoint'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterEndpointMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CreateDBClusterEndpoint'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterEndpointMessage }
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'CreateDBClusterEndpoint'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterEndpointMessage }
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=CreateDBClusterParameterGroup': {
      $get:
        | {
            input: {
              query: {
                DBClusterParameterGroupName: string
                DBParameterGroupFamily: string
                Description: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBClusterParameterGroup'
                Version: '2014-10-31'
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
            output: CreateDBClusterParameterGroupResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterParameterGroupName: string
                DBParameterGroupFamily: string
                Description: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBClusterParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupQuotaExceededFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterParameterGroupName: string
                DBParameterGroupFamily: string
                Description: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBClusterParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupAlreadyExistsFault
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'CreateDBClusterParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterParameterGroupMessage }
            output: CreateDBClusterParameterGroupResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateDBClusterParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterParameterGroupMessage }
            output: DBParameterGroupQuotaExceededFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateDBClusterParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterParameterGroupMessage }
            output: DBParameterGroupAlreadyExistsFault
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=CreateDBClusterSnapshot': {
      $get:
        | {
            input: {
              query: {
                DBClusterSnapshotIdentifier: string
                DBClusterIdentifier: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBClusterSnapshot'
                Version: '2014-10-31'
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
            output: CreateDBClusterSnapshotResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterSnapshotIdentifier: string
                DBClusterIdentifier: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBClusterSnapshot'
                Version: '2014-10-31'
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
            output: DBClusterSnapshotAlreadyExistsFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterSnapshotIdentifier: string
                DBClusterIdentifier: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBClusterSnapshot'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBClusterSnapshotIdentifier: string
                DBClusterIdentifier: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBClusterSnapshot'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DBClusterSnapshotIdentifier: string
                DBClusterIdentifier: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBClusterSnapshot'
                Version: '2014-10-31'
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
            output: SnapshotQuotaExceededFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DBClusterSnapshotIdentifier: string
                DBClusterIdentifier: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBClusterSnapshot'
                Version: '2014-10-31'
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
            output: InvalidDBClusterSnapshotStateFault
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'CreateDBClusterSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterSnapshotMessage }
            output: CreateDBClusterSnapshotResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateDBClusterSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterSnapshotMessage }
            output: DBClusterSnapshotAlreadyExistsFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateDBClusterSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterSnapshotMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateDBClusterSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterSnapshotMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateDBClusterSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterSnapshotMessage }
            output: SnapshotQuotaExceededFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CreateDBClusterSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBClusterSnapshotMessage }
            output: InvalidDBClusterSnapshotStateFault
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=CreateDBInstance': {
      $get:
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: CreateDBInstanceResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: DBInstanceAlreadyExistsFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: InsufficientDBInstanceCapacityFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: DBSecurityGroupNotFoundFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: InstanceQuotaExceededFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: StorageQuotaExceededFault
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 486
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: DBSubnetGroupDoesNotCoverEnoughAZs
            outputFormat: 'text'
            status: 487
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 488
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: InvalidSubnet
            outputFormat: 'text'
            status: 489
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: InvalidVPCNetworkStateFault
            outputFormat: 'text'
            status: 490
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: ProvisionedIopsNotAvailableInAZFault
            outputFormat: 'text'
            status: 491
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: OptionGroupNotFoundFault
            outputFormat: 'text'
            status: 492
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 493
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: StorageTypeNotSupportedFault
            outputFormat: 'text'
            status: 494
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: AuthorizationNotFoundFault
            outputFormat: 'text'
            status: 495
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: KMSKeyNotAccessibleFault
            outputFormat: 'text'
            status: 496
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass: string
                Engine: string
                MasterUsername?: string | undefined
                MasterUserPassword?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier: string
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DeletionProtection?: boolean | undefined
                Action: 'CreateDBInstance'
                Version: '2014-10-31'
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
            output: DomainNotFoundFault
            outputFormat: 'text'
            status: 497
          }
      $post:
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: CreateDBInstanceResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: DBInstanceAlreadyExistsFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: InsufficientDBInstanceCapacityFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: DBSecurityGroupNotFoundFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: InstanceQuotaExceededFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: StorageQuotaExceededFault
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 486
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: DBSubnetGroupDoesNotCoverEnoughAZs
            outputFormat: 'text'
            status: 487
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 488
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: InvalidSubnet
            outputFormat: 'text'
            status: 489
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: InvalidVPCNetworkStateFault
            outputFormat: 'text'
            status: 490
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: ProvisionedIopsNotAvailableInAZFault
            outputFormat: 'text'
            status: 491
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: OptionGroupNotFoundFault
            outputFormat: 'text'
            status: 492
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 493
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: StorageTypeNotSupportedFault
            outputFormat: 'text'
            status: 494
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: AuthorizationNotFoundFault
            outputFormat: 'text'
            status: 495
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: KMSKeyNotAccessibleFault
            outputFormat: 'text'
            status: 496
          }
        | {
            input: { query: { Action: 'CreateDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceMessage }
            output: DomainNotFoundFault
            outputFormat: 'text'
            status: 497
          }
    }
  } & {
    '/#Action=CreateDBParameterGroup': {
      $get:
        | {
            input: {
              query: {
                DBParameterGroupName: string
                DBParameterGroupFamily: string
                Description: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBParameterGroup'
                Version: '2014-10-31'
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
            output: CreateDBParameterGroupResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBParameterGroupName: string
                DBParameterGroupFamily: string
                Description: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupQuotaExceededFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBParameterGroupName: string
                DBParameterGroupFamily: string
                Description: string
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupAlreadyExistsFault
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'CreateDBParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBParameterGroupMessage }
            output: CreateDBParameterGroupResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateDBParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBParameterGroupMessage }
            output: DBParameterGroupQuotaExceededFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateDBParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBParameterGroupMessage }
            output: DBParameterGroupAlreadyExistsFault
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=CreateDBSubnetGroup': {
      $get:
        | {
            input: {
              query: {
                DBSubnetGroupName: string
                DBSubnetGroupDescription: string
                SubnetIds: {}[]
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBSubnetGroup'
                Version: '2014-10-31'
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
            output: CreateDBSubnetGroupResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBSubnetGroupName: string
                DBSubnetGroupDescription: string
                SubnetIds: {}[]
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBSubnetGroup'
                Version: '2014-10-31'
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
            output: DBSubnetGroupAlreadyExistsFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBSubnetGroupName: string
                DBSubnetGroupDescription: string
                SubnetIds: {}[]
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBSubnetGroup'
                Version: '2014-10-31'
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
            output: DBSubnetGroupQuotaExceededFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBSubnetGroupName: string
                DBSubnetGroupDescription: string
                SubnetIds: {}[]
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBSubnetGroup'
                Version: '2014-10-31'
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
            output: DBSubnetQuotaExceededFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DBSubnetGroupName: string
                DBSubnetGroupDescription: string
                SubnetIds: {}[]
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBSubnetGroup'
                Version: '2014-10-31'
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
            output: DBSubnetGroupDoesNotCoverEnoughAZs
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DBSubnetGroupName: string
                DBSubnetGroupDescription: string
                SubnetIds: {}[]
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateDBSubnetGroup'
                Version: '2014-10-31'
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
            output: InvalidSubnet
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'CreateDBSubnetGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBSubnetGroupMessage }
            output: CreateDBSubnetGroupResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateDBSubnetGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBSubnetGroupMessage }
            output: DBSubnetGroupAlreadyExistsFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateDBSubnetGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBSubnetGroupMessage }
            output: DBSubnetGroupQuotaExceededFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateDBSubnetGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBSubnetGroupMessage }
            output: DBSubnetQuotaExceededFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateDBSubnetGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBSubnetGroupMessage }
            output: DBSubnetGroupDoesNotCoverEnoughAZs
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CreateDBSubnetGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBSubnetGroupMessage }
            output: InvalidSubnet
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=CreateEventSubscription': {
      $get:
        | {
            input: {
              query: {
                SubscriptionName: string
                SnsTopicArn: string
                SourceType?: string | undefined
                EventCategories?: {}[] | undefined
                SourceIds?: {}[] | undefined
                Enabled?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateEventSubscription'
                Version: '2014-10-31'
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
            output: CreateEventSubscriptionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                SnsTopicArn: string
                SourceType?: string | undefined
                EventCategories?: {}[] | undefined
                SourceIds?: {}[] | undefined
                Enabled?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateEventSubscription'
                Version: '2014-10-31'
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
            output: EventSubscriptionQuotaExceededFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                SnsTopicArn: string
                SourceType?: string | undefined
                EventCategories?: {}[] | undefined
                SourceIds?: {}[] | undefined
                Enabled?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateEventSubscription'
                Version: '2014-10-31'
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
            output: SubscriptionAlreadyExistFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                SnsTopicArn: string
                SourceType?: string | undefined
                EventCategories?: {}[] | undefined
                SourceIds?: {}[] | undefined
                Enabled?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateEventSubscription'
                Version: '2014-10-31'
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
            output: SNSInvalidTopicFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                SnsTopicArn: string
                SourceType?: string | undefined
                EventCategories?: {}[] | undefined
                SourceIds?: {}[] | undefined
                Enabled?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateEventSubscription'
                Version: '2014-10-31'
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
            output: SNSNoAuthorizationFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                SnsTopicArn: string
                SourceType?: string | undefined
                EventCategories?: {}[] | undefined
                SourceIds?: {}[] | undefined
                Enabled?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateEventSubscription'
                Version: '2014-10-31'
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
            output: SNSTopicArnNotFoundFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                SnsTopicArn: string
                SourceType?: string | undefined
                EventCategories?: {}[] | undefined
                SourceIds?: {}[] | undefined
                Enabled?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateEventSubscription'
                Version: '2014-10-31'
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
            output: SubscriptionCategoryNotFoundFault
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                SnsTopicArn: string
                SourceType?: string | undefined
                EventCategories?: {}[] | undefined
                SourceIds?: {}[] | undefined
                Enabled?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                Action: 'CreateEventSubscription'
                Version: '2014-10-31'
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
            output: SourceNotFoundFault
            outputFormat: 'text'
            status: 486
          }
      $post:
        | {
            input: { query: { Action: 'CreateEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: CreateEventSubscriptionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: EventSubscriptionQuotaExceededFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: SubscriptionAlreadyExistFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: SNSInvalidTopicFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: SNSNoAuthorizationFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CreateEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: SNSTopicArnNotFoundFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'CreateEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: SubscriptionCategoryNotFoundFault
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'CreateEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateEventSubscriptionMessage }
            output: SourceNotFoundFault
            outputFormat: 'text'
            status: 486
          }
    }
  } & {
    '/#Action=CreateGlobalCluster': {
      $get:
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                SourceDBClusterIdentifier?: string | undefined
                Engine?: string | undefined
                EngineVersion?: string | undefined
                DeletionProtection?: boolean | undefined
                StorageEncrypted?: boolean | undefined
                Action: 'CreateGlobalCluster'
                Version: '2014-10-31'
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
            output: CreateGlobalClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                SourceDBClusterIdentifier?: string | undefined
                Engine?: string | undefined
                EngineVersion?: string | undefined
                DeletionProtection?: boolean | undefined
                StorageEncrypted?: boolean | undefined
                Action: 'CreateGlobalCluster'
                Version: '2014-10-31'
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
            output: GlobalClusterAlreadyExistsFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                SourceDBClusterIdentifier?: string | undefined
                Engine?: string | undefined
                EngineVersion?: string | undefined
                DeletionProtection?: boolean | undefined
                StorageEncrypted?: boolean | undefined
                Action: 'CreateGlobalCluster'
                Version: '2014-10-31'
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
            output: GlobalClusterQuotaExceededFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                SourceDBClusterIdentifier?: string | undefined
                Engine?: string | undefined
                EngineVersion?: string | undefined
                DeletionProtection?: boolean | undefined
                StorageEncrypted?: boolean | undefined
                Action: 'CreateGlobalCluster'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                SourceDBClusterIdentifier?: string | undefined
                Engine?: string | undefined
                EngineVersion?: string | undefined
                DeletionProtection?: boolean | undefined
                StorageEncrypted?: boolean | undefined
                Action: 'CreateGlobalCluster'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'CreateGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGlobalClusterMessage }
            output: CreateGlobalClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGlobalClusterMessage }
            output: GlobalClusterAlreadyExistsFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGlobalClusterMessage }
            output: GlobalClusterQuotaExceededFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGlobalClusterMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGlobalClusterMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=DeleteDBCluster': {
      $get:
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                SkipFinalSnapshot?: boolean | undefined
                FinalDBSnapshotIdentifier?: string | undefined
                Action: 'DeleteDBCluster'
                Version: '2014-10-31'
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
            output: DeleteDBClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                SkipFinalSnapshot?: boolean | undefined
                FinalDBSnapshotIdentifier?: string | undefined
                Action: 'DeleteDBCluster'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                SkipFinalSnapshot?: boolean | undefined
                FinalDBSnapshotIdentifier?: string | undefined
                Action: 'DeleteDBCluster'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                SkipFinalSnapshot?: boolean | undefined
                FinalDBSnapshotIdentifier?: string | undefined
                Action: 'DeleteDBCluster'
                Version: '2014-10-31'
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
            output: DBClusterSnapshotAlreadyExistsFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                SkipFinalSnapshot?: boolean | undefined
                FinalDBSnapshotIdentifier?: string | undefined
                Action: 'DeleteDBCluster'
                Version: '2014-10-31'
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
            output: SnapshotQuotaExceededFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                SkipFinalSnapshot?: boolean | undefined
                FinalDBSnapshotIdentifier?: string | undefined
                Action: 'DeleteDBCluster'
                Version: '2014-10-31'
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
            output: InvalidDBClusterSnapshotStateFault
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'DeleteDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBClusterMessage }
            output: DeleteDBClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBClusterMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBClusterMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DeleteDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBClusterMessage }
            output: DBClusterSnapshotAlreadyExistsFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'DeleteDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBClusterMessage }
            output: SnapshotQuotaExceededFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'DeleteDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBClusterMessage }
            output: InvalidDBClusterSnapshotStateFault
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=DeleteDBClusterEndpoint': {
      $get:
        | {
            input: {
              query: {
                DBClusterEndpointIdentifier: string
                Action: 'DeleteDBClusterEndpoint'
                Version: '2014-10-31'
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
            output: DeleteDBClusterEndpointOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterEndpointIdentifier: string
                Action: 'DeleteDBClusterEndpoint'
                Version: '2014-10-31'
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
            output: InvalidDBClusterEndpointStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterEndpointIdentifier: string
                Action: 'DeleteDBClusterEndpoint'
                Version: '2014-10-31'
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
            output: DBClusterEndpointNotFoundFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBClusterEndpointIdentifier: string
                Action: 'DeleteDBClusterEndpoint'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'DeleteDBClusterEndpoint'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBClusterEndpointMessage }
            output: DeleteDBClusterEndpointOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteDBClusterEndpoint'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBClusterEndpointMessage }
            output: InvalidDBClusterEndpointStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteDBClusterEndpoint'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBClusterEndpointMessage }
            output: DBClusterEndpointNotFoundFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DeleteDBClusterEndpoint'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBClusterEndpointMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=DeleteDBClusterParameterGroup': {
      $get:
        | {
            input: {
              query: {
                DBClusterParameterGroupName: string
                Action: 'DeleteDBClusterParameterGroup'
                Version: '2014-10-31'
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
        | {
            input: {
              query: {
                DBClusterParameterGroupName: string
                Action: 'DeleteDBClusterParameterGroup'
                Version: '2014-10-31'
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
            output: InvalidDBParameterGroupStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterParameterGroupName: string
                Action: 'DeleteDBClusterParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DeleteDBClusterParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBClusterParameterGroupMessage }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteDBClusterParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBClusterParameterGroupMessage }
            output: InvalidDBParameterGroupStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteDBClusterParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBClusterParameterGroupMessage }
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DeleteDBClusterSnapshot': {
      $get:
        | {
            input: {
              query: {
                DBClusterSnapshotIdentifier: string
                Action: 'DeleteDBClusterSnapshot'
                Version: '2014-10-31'
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
            output: DeleteDBClusterSnapshotResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterSnapshotIdentifier: string
                Action: 'DeleteDBClusterSnapshot'
                Version: '2014-10-31'
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
            output: InvalidDBClusterSnapshotStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterSnapshotIdentifier: string
                Action: 'DeleteDBClusterSnapshot'
                Version: '2014-10-31'
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
            output: DBClusterSnapshotNotFoundFault
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DeleteDBClusterSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBClusterSnapshotMessage }
            output: DeleteDBClusterSnapshotResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteDBClusterSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBClusterSnapshotMessage }
            output: InvalidDBClusterSnapshotStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteDBClusterSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBClusterSnapshotMessage }
            output: DBClusterSnapshotNotFoundFault
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DeleteDBInstance': {
      $get:
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                SkipFinalSnapshot?: boolean | undefined
                FinalDBSnapshotIdentifier?: string | undefined
                Action: 'DeleteDBInstance'
                Version: '2014-10-31'
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
            output: DeleteDBInstanceResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                SkipFinalSnapshot?: boolean | undefined
                FinalDBSnapshotIdentifier?: string | undefined
                Action: 'DeleteDBInstance'
                Version: '2014-10-31'
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
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                SkipFinalSnapshot?: boolean | undefined
                FinalDBSnapshotIdentifier?: string | undefined
                Action: 'DeleteDBInstance'
                Version: '2014-10-31'
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
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                SkipFinalSnapshot?: boolean | undefined
                FinalDBSnapshotIdentifier?: string | undefined
                Action: 'DeleteDBInstance'
                Version: '2014-10-31'
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
            output: DBSnapshotAlreadyExistsFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                SkipFinalSnapshot?: boolean | undefined
                FinalDBSnapshotIdentifier?: string | undefined
                Action: 'DeleteDBInstance'
                Version: '2014-10-31'
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
            output: SnapshotQuotaExceededFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                SkipFinalSnapshot?: boolean | undefined
                FinalDBSnapshotIdentifier?: string | undefined
                Action: 'DeleteDBInstance'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'DeleteDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBInstanceMessage }
            output: DeleteDBInstanceResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBInstanceMessage }
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBInstanceMessage }
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DeleteDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBInstanceMessage }
            output: DBSnapshotAlreadyExistsFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'DeleteDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBInstanceMessage }
            output: SnapshotQuotaExceededFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'DeleteDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBInstanceMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=DeleteDBParameterGroup': {
      $get:
        | {
            input: {
              query: {
                DBParameterGroupName: string
                Action: 'DeleteDBParameterGroup'
                Version: '2014-10-31'
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
        | {
            input: {
              query: {
                DBParameterGroupName: string
                Action: 'DeleteDBParameterGroup'
                Version: '2014-10-31'
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
            output: InvalidDBParameterGroupStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBParameterGroupName: string
                Action: 'DeleteDBParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DeleteDBParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBParameterGroupMessage }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteDBParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBParameterGroupMessage }
            output: InvalidDBParameterGroupStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteDBParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBParameterGroupMessage }
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DeleteDBSubnetGroup': {
      $get:
        | {
            input: {
              query: {
                DBSubnetGroupName: string
                Action: 'DeleteDBSubnetGroup'
                Version: '2014-10-31'
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
        | {
            input: {
              query: {
                DBSubnetGroupName: string
                Action: 'DeleteDBSubnetGroup'
                Version: '2014-10-31'
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
            output: InvalidDBSubnetGroupStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBSubnetGroupName: string
                Action: 'DeleteDBSubnetGroup'
                Version: '2014-10-31'
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
            output: InvalidDBSubnetStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBSubnetGroupName: string
                Action: 'DeleteDBSubnetGroup'
                Version: '2014-10-31'
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
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'DeleteDBSubnetGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBSubnetGroupMessage }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteDBSubnetGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBSubnetGroupMessage }
            output: InvalidDBSubnetGroupStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteDBSubnetGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBSubnetGroupMessage }
            output: InvalidDBSubnetStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DeleteDBSubnetGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteDBSubnetGroupMessage }
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=DeleteEventSubscription': {
      $get:
        | {
            input: {
              query: {
                SubscriptionName: string
                Action: 'DeleteEventSubscription'
                Version: '2014-10-31'
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
            output: DeleteEventSubscriptionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                Action: 'DeleteEventSubscription'
                Version: '2014-10-31'
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
            output: SubscriptionNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                Action: 'DeleteEventSubscription'
                Version: '2014-10-31'
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
            output: InvalidEventSubscriptionStateFault
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DeleteEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEventSubscriptionMessage }
            output: DeleteEventSubscriptionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEventSubscriptionMessage }
            output: SubscriptionNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteEventSubscriptionMessage }
            output: InvalidEventSubscriptionStateFault
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DeleteGlobalCluster': {
      $get:
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                Action: 'DeleteGlobalCluster'
                Version: '2014-10-31'
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
            output: DeleteGlobalClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                Action: 'DeleteGlobalCluster'
                Version: '2014-10-31'
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
            output: GlobalClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                Action: 'DeleteGlobalCluster'
                Version: '2014-10-31'
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
            output: InvalidGlobalClusterStateFault
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DeleteGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGlobalClusterMessage }
            output: DeleteGlobalClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGlobalClusterMessage }
            output: GlobalClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGlobalClusterMessage }
            output: InvalidGlobalClusterStateFault
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DescribeDBClusterEndpoints': {
      $get:
        | {
            input: {
              query: {
                DBClusterIdentifier?: string | undefined
                DBClusterEndpointIdentifier?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusterEndpoints'
                Version: '2014-10-31'
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
            output: DBClusterEndpointMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterIdentifier?: string | undefined
                DBClusterEndpointIdentifier?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusterEndpoints'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusterEndpoints'
                Version: '2014-10-31'
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
            } & { json: DescribeDBClusterEndpointsMessage }
            output: DBClusterEndpointMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusterEndpoints'
                Version: '2014-10-31'
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
            } & { json: DescribeDBClusterEndpointsMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeDBClusterParameterGroups': {
      $get:
        | {
            input: {
              query: {
                DBClusterParameterGroupName?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusterParameterGroups'
                Version: '2014-10-31'
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
            output: DBClusterParameterGroupsMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterParameterGroupName?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusterParameterGroups'
                Version: '2014-10-31'
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
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusterParameterGroups'
                Version: '2014-10-31'
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
            } & { json: DescribeDBClusterParameterGroupsMessage }
            output: DBClusterParameterGroupsMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusterParameterGroups'
                Version: '2014-10-31'
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
            } & { json: DescribeDBClusterParameterGroupsMessage }
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeDBClusterParameters': {
      $get:
        | {
            input: {
              query: {
                DBClusterParameterGroupName: string
                Source?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusterParameters'
                Version: '2014-10-31'
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
            output: DBClusterParameterGroupDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterParameterGroupName: string
                Source?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusterParameters'
                Version: '2014-10-31'
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
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusterParameters'
                Version: '2014-10-31'
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
            } & { json: DescribeDBClusterParametersMessage }
            output: DBClusterParameterGroupDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusterParameters'
                Version: '2014-10-31'
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
            } & { json: DescribeDBClusterParametersMessage }
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeDBClusterSnapshotAttributes': {
      $get:
        | {
            input: {
              query: {
                DBClusterSnapshotIdentifier: string
                Action: 'DescribeDBClusterSnapshotAttributes'
                Version: '2014-10-31'
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
            output: DescribeDBClusterSnapshotAttributesResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterSnapshotIdentifier: string
                Action: 'DescribeDBClusterSnapshotAttributes'
                Version: '2014-10-31'
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
            output: DBClusterSnapshotNotFoundFault
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: { Action: 'DescribeDBClusterSnapshotAttributes'; Version: '2014-10-31' }
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
            } & { json: DescribeDBClusterSnapshotAttributesMessage }
            output: DescribeDBClusterSnapshotAttributesResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'DescribeDBClusterSnapshotAttributes'; Version: '2014-10-31' }
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
            } & { json: DescribeDBClusterSnapshotAttributesMessage }
            output: DBClusterSnapshotNotFoundFault
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeDBClusterSnapshots': {
      $get:
        | {
            input: {
              query: {
                DBClusterIdentifier?: string | undefined
                DBClusterSnapshotIdentifier?: string | undefined
                SnapshotType?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                IncludeShared?: boolean | undefined
                IncludePublic?: boolean | undefined
                Action: 'DescribeDBClusterSnapshots'
                Version: '2014-10-31'
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
            output: DBClusterSnapshotMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterIdentifier?: string | undefined
                DBClusterSnapshotIdentifier?: string | undefined
                SnapshotType?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                IncludeShared?: boolean | undefined
                IncludePublic?: boolean | undefined
                Action: 'DescribeDBClusterSnapshots'
                Version: '2014-10-31'
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
            output: DBClusterSnapshotNotFoundFault
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusterSnapshots'
                Version: '2014-10-31'
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
            } & { json: DescribeDBClusterSnapshotsMessage }
            output: DBClusterSnapshotMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusterSnapshots'
                Version: '2014-10-31'
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
            } & { json: DescribeDBClusterSnapshotsMessage }
            output: DBClusterSnapshotNotFoundFault
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeDBClusters': {
      $get:
        | {
            input: {
              query: {
                DBClusterIdentifier?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusters'
                Version: '2014-10-31'
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
            output: DBClusterMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterIdentifier?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusters'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusters'
                Version: '2014-10-31'
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
            } & { json: DescribeDBClustersMessage }
            output: DBClusterMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBClusters'
                Version: '2014-10-31'
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
            } & { json: DescribeDBClustersMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeDBEngineVersions': {
      $get: {
        input: {
          query: {
            Engine?: string | undefined
            EngineVersion?: string | undefined
            DBParameterGroupFamily?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            DefaultOnly?: boolean | undefined
            ListSupportedCharacterSets?: boolean | undefined
            ListSupportedTimezones?: boolean | undefined
            Action: 'DescribeDBEngineVersions'
            Version: '2014-10-31'
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
        output: DBEngineVersionMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeDBEngineVersions'
            Version: '2014-10-31'
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
        } & { json: DescribeDBEngineVersionsMessage }
        output: DBEngineVersionMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeDBInstances': {
      $get:
        | {
            input: {
              query: {
                DBInstanceIdentifier?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeDBInstances'
                Version: '2014-10-31'
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
            output: DBInstanceMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeDBInstances'
                Version: '2014-10-31'
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
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBInstances'
                Version: '2014-10-31'
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
            } & { json: DescribeDBInstancesMessage }
            output: DBInstanceMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBInstances'
                Version: '2014-10-31'
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
            } & { json: DescribeDBInstancesMessage }
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeDBParameterGroups': {
      $get:
        | {
            input: {
              query: {
                DBParameterGroupName?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeDBParameterGroups'
                Version: '2014-10-31'
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
            output: DBParameterGroupsMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBParameterGroupName?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeDBParameterGroups'
                Version: '2014-10-31'
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
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBParameterGroups'
                Version: '2014-10-31'
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
            } & { json: DescribeDBParameterGroupsMessage }
            output: DBParameterGroupsMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBParameterGroups'
                Version: '2014-10-31'
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
            } & { json: DescribeDBParameterGroupsMessage }
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeDBParameters': {
      $get:
        | {
            input: {
              query: {
                DBParameterGroupName: string
                Source?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeDBParameters'
                Version: '2014-10-31'
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
            output: DBParameterGroupDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBParameterGroupName: string
                Source?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeDBParameters'
                Version: '2014-10-31'
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
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBParameters'
                Version: '2014-10-31'
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
            } & { json: DescribeDBParametersMessage }
            output: DBParameterGroupDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBParameters'
                Version: '2014-10-31'
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
            } & { json: DescribeDBParametersMessage }
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeDBSubnetGroups': {
      $get:
        | {
            input: {
              query: {
                DBSubnetGroupName?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeDBSubnetGroups'
                Version: '2014-10-31'
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
            output: DBSubnetGroupMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBSubnetGroupName?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeDBSubnetGroups'
                Version: '2014-10-31'
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
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBSubnetGroups'
                Version: '2014-10-31'
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
            } & { json: DescribeDBSubnetGroupsMessage }
            output: DBSubnetGroupMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeDBSubnetGroups'
                Version: '2014-10-31'
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
            } & { json: DescribeDBSubnetGroupsMessage }
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeEngineDefaultClusterParameters': {
      $get: {
        input: {
          query: {
            DBParameterGroupFamily: string
            Filters?: { Name: {}; Values: {} }[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeEngineDefaultClusterParameters'
            Version: '2014-10-31'
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
        output: DescribeEngineDefaultClusterParametersResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'DescribeEngineDefaultClusterParameters'; Version: '2014-10-31' }
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
        } & { json: DescribeEngineDefaultClusterParametersMessage }
        output: DescribeEngineDefaultClusterParametersResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeEngineDefaultParameters': {
      $get: {
        input: {
          query: {
            DBParameterGroupFamily: string
            Filters?: { Name: {}; Values: {} }[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeEngineDefaultParameters'
            Version: '2014-10-31'
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
            Version: '2014-10-31'
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
    '/#Action=DescribeEventCategories': {
      $get: {
        input: {
          query: {
            SourceType?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            Action: 'DescribeEventCategories'
            Version: '2014-10-31'
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
        output: EventCategoriesMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeEventCategories'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEventCategoriesMessage }
        output: EventCategoriesMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeEventSubscriptions': {
      $get:
        | {
            input: {
              query: {
                SubscriptionName?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeEventSubscriptions'
                Version: '2014-10-31'
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
            output: EventSubscriptionsMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SubscriptionName?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeEventSubscriptions'
                Version: '2014-10-31'
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
            output: SubscriptionNotFoundFault
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeEventSubscriptions'
                Version: '2014-10-31'
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
            } & { json: DescribeEventSubscriptionsMessage }
            output: EventSubscriptionsMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeEventSubscriptions'
                Version: '2014-10-31'
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
            } & { json: DescribeEventSubscriptionsMessage }
            output: SubscriptionNotFoundFault
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeEvents': {
      $get: {
        input: {
          query: {
            SourceIdentifier?: string | undefined
            SourceType?:
              | 'db-instance'
              | 'db-parameter-group'
              | 'db-security-group'
              | 'db-snapshot'
              | 'db-cluster'
              | 'db-cluster-snapshot'
              | undefined
            StartTime?: string | undefined
            EndTime?: string | undefined
            Duration?: number | undefined
            EventCategories?: {}[] | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeEvents'
            Version: '2014-10-31'
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
            Version: '2014-10-31'
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
    '/#Action=DescribeGlobalClusters': {
      $get:
        | {
            input: {
              query: {
                GlobalClusterIdentifier?: string | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeGlobalClusters'
                Version: '2014-10-31'
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
            output: GlobalClustersMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                GlobalClusterIdentifier?: string | undefined
                MaxRecords?: number | undefined
                Marker?: string | undefined
                Action: 'DescribeGlobalClusters'
                Version: '2014-10-31'
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
            output: GlobalClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeGlobalClusters'
                Version: '2014-10-31'
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
            } & { json: DescribeGlobalClustersMessage }
            output: GlobalClustersMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribeGlobalClusters'
                Version: '2014-10-31'
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
            } & { json: DescribeGlobalClustersMessage }
            output: GlobalClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeOrderableDBInstanceOptions': {
      $get: {
        input: {
          query: {
            Engine: string
            EngineVersion?: string | undefined
            DBInstanceClass?: string | undefined
            LicenseModel?: string | undefined
            Vpc?: boolean | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeOrderableDBInstanceOptions'
            Version: '2014-10-31'
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
        output: OrderableDBInstanceOptionsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeOrderableDBInstanceOptions'
            Version: '2014-10-31'
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
        } & { json: DescribeOrderableDBInstanceOptionsMessage }
        output: OrderableDBInstanceOptionsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribePendingMaintenanceActions': {
      $get:
        | {
            input: {
              query: {
                ResourceIdentifier?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                Marker?: string | undefined
                MaxRecords?: number | undefined
                Action: 'DescribePendingMaintenanceActions'
                Version: '2014-10-31'
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
            output: PendingMaintenanceActionsMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ResourceIdentifier?: string | undefined
                Filters?: { Name: {}; Values: {} }[] | undefined
                Marker?: string | undefined
                MaxRecords?: number | undefined
                Action: 'DescribePendingMaintenanceActions'
                Version: '2014-10-31'
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
            output: ResourceNotFoundFault
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribePendingMaintenanceActions'
                Version: '2014-10-31'
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
            } & { json: DescribePendingMaintenanceActionsMessage }
            output: PendingMaintenanceActionsMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxRecords?: string | undefined
                Marker?: string | undefined
                Action: 'DescribePendingMaintenanceActions'
                Version: '2014-10-31'
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
            } & { json: DescribePendingMaintenanceActionsMessage }
            output: ResourceNotFoundFault
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeValidDBInstanceModifications': {
      $get:
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                Action: 'DescribeValidDBInstanceModifications'
                Version: '2014-10-31'
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
            output: DescribeValidDBInstanceModificationsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                Action: 'DescribeValidDBInstanceModifications'
                Version: '2014-10-31'
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
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                Action: 'DescribeValidDBInstanceModifications'
                Version: '2014-10-31'
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
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: {
              query: { Action: 'DescribeValidDBInstanceModifications'; Version: '2014-10-31' }
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
            } & { json: DescribeValidDBInstanceModificationsMessage }
            output: DescribeValidDBInstanceModificationsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'DescribeValidDBInstanceModifications'; Version: '2014-10-31' }
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
            } & { json: DescribeValidDBInstanceModificationsMessage }
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'DescribeValidDBInstanceModifications'; Version: '2014-10-31' }
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
            } & { json: DescribeValidDBInstanceModificationsMessage }
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=FailoverDBCluster': {
      $get:
        | {
            input: {
              query: {
                DBClusterIdentifier?: string | undefined
                TargetDBInstanceIdentifier?: string | undefined
                Action: 'FailoverDBCluster'
                Version: '2014-10-31'
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
            output: FailoverDBClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterIdentifier?: string | undefined
                TargetDBInstanceIdentifier?: string | undefined
                Action: 'FailoverDBCluster'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterIdentifier?: string | undefined
                TargetDBInstanceIdentifier?: string | undefined
                Action: 'FailoverDBCluster'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBClusterIdentifier?: string | undefined
                TargetDBInstanceIdentifier?: string | undefined
                Action: 'FailoverDBCluster'
                Version: '2014-10-31'
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
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'FailoverDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: FailoverDBClusterMessage }
            output: FailoverDBClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'FailoverDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: FailoverDBClusterMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'FailoverDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: FailoverDBClusterMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'FailoverDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: FailoverDBClusterMessage }
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=FailoverGlobalCluster': {
      $get:
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                TargetDbClusterIdentifier: string
                Action: 'FailoverGlobalCluster'
                Version: '2014-10-31'
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
            output: FailoverGlobalClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                TargetDbClusterIdentifier: string
                Action: 'FailoverGlobalCluster'
                Version: '2014-10-31'
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
            output: GlobalClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                TargetDbClusterIdentifier: string
                Action: 'FailoverGlobalCluster'
                Version: '2014-10-31'
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
            output: InvalidGlobalClusterStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                TargetDbClusterIdentifier: string
                Action: 'FailoverGlobalCluster'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                TargetDbClusterIdentifier: string
                Action: 'FailoverGlobalCluster'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'FailoverGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: FailoverGlobalClusterMessage }
            output: FailoverGlobalClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'FailoverGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: FailoverGlobalClusterMessage }
            output: GlobalClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'FailoverGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: FailoverGlobalClusterMessage }
            output: InvalidGlobalClusterStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'FailoverGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: FailoverGlobalClusterMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'FailoverGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: FailoverGlobalClusterMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=ListTagsForResource': {
      $get:
        | {
            input: {
              query: {
                ResourceName: string
                Filters?: { Name: {}; Values: {} }[] | undefined
                Action: 'ListTagsForResource'
                Version: '2014-10-31'
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
        | {
            input: {
              query: {
                ResourceName: string
                Filters?: { Name: {}; Values: {} }[] | undefined
                Action: 'ListTagsForResource'
                Version: '2014-10-31'
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
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ResourceName: string
                Filters?: { Name: {}; Values: {} }[] | undefined
                Action: 'ListTagsForResource'
                Version: '2014-10-31'
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
            output: DBSnapshotNotFoundFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ResourceName: string
                Filters?: { Name: {}; Values: {} }[] | undefined
                Action: 'ListTagsForResource'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'ListTagsForResource'; Version: '2014-10-31' } } & {
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
        | {
            input: { query: { Action: 'ListTagsForResource'; Version: '2014-10-31' } } & {
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
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ListTagsForResource'; Version: '2014-10-31' } } & {
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
            output: DBSnapshotNotFoundFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'ListTagsForResource'; Version: '2014-10-31' } } & {
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=ModifyDBCluster': {
      $get:
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                NewDBClusterIdentifier?: string | undefined
                ApplyImmediately?: boolean | undefined
                BackupRetentionPeriod?: number | undefined
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Port?: number | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                DBInstanceParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'ModifyDBCluster'
                Version: '2014-10-31'
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
            output: ModifyDBClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                NewDBClusterIdentifier?: string | undefined
                ApplyImmediately?: boolean | undefined
                BackupRetentionPeriod?: number | undefined
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Port?: number | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                DBInstanceParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'ModifyDBCluster'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                NewDBClusterIdentifier?: string | undefined
                ApplyImmediately?: boolean | undefined
                BackupRetentionPeriod?: number | undefined
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Port?: number | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                DBInstanceParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'ModifyDBCluster'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                NewDBClusterIdentifier?: string | undefined
                ApplyImmediately?: boolean | undefined
                BackupRetentionPeriod?: number | undefined
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Port?: number | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                DBInstanceParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'ModifyDBCluster'
                Version: '2014-10-31'
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
            output: StorageQuotaExceededFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                NewDBClusterIdentifier?: string | undefined
                ApplyImmediately?: boolean | undefined
                BackupRetentionPeriod?: number | undefined
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Port?: number | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                DBInstanceParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'ModifyDBCluster'
                Version: '2014-10-31'
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
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                NewDBClusterIdentifier?: string | undefined
                ApplyImmediately?: boolean | undefined
                BackupRetentionPeriod?: number | undefined
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Port?: number | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                DBInstanceParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'ModifyDBCluster'
                Version: '2014-10-31'
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
            output: InvalidVPCNetworkStateFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                NewDBClusterIdentifier?: string | undefined
                ApplyImmediately?: boolean | undefined
                BackupRetentionPeriod?: number | undefined
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Port?: number | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                DBInstanceParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'ModifyDBCluster'
                Version: '2014-10-31'
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
            output: InvalidDBSubnetGroupStateFault
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                NewDBClusterIdentifier?: string | undefined
                ApplyImmediately?: boolean | undefined
                BackupRetentionPeriod?: number | undefined
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Port?: number | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                DBInstanceParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'ModifyDBCluster'
                Version: '2014-10-31'
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
            output: InvalidSubnet
            outputFormat: 'text'
            status: 486
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                NewDBClusterIdentifier?: string | undefined
                ApplyImmediately?: boolean | undefined
                BackupRetentionPeriod?: number | undefined
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Port?: number | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                DBInstanceParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'ModifyDBCluster'
                Version: '2014-10-31'
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
            output: DBClusterParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 487
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                NewDBClusterIdentifier?: string | undefined
                ApplyImmediately?: boolean | undefined
                BackupRetentionPeriod?: number | undefined
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Port?: number | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                DBInstanceParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'ModifyDBCluster'
                Version: '2014-10-31'
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
            output: InvalidDBSecurityGroupStateFault
            outputFormat: 'text'
            status: 488
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                NewDBClusterIdentifier?: string | undefined
                ApplyImmediately?: boolean | undefined
                BackupRetentionPeriod?: number | undefined
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Port?: number | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                DBInstanceParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'ModifyDBCluster'
                Version: '2014-10-31'
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
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 489
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                NewDBClusterIdentifier?: string | undefined
                ApplyImmediately?: boolean | undefined
                BackupRetentionPeriod?: number | undefined
                DBClusterParameterGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Port?: number | undefined
                MasterUserPassword?: string | undefined
                OptionGroupName?: string | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                DBInstanceParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'ModifyDBCluster'
                Version: '2014-10-31'
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
            output: DBClusterAlreadyExistsFault
            outputFormat: 'text'
            status: 490
          }
      $post:
        | {
            input: { query: { Action: 'ModifyDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterMessage }
            output: ModifyDBClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ModifyDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ModifyDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'ModifyDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterMessage }
            output: StorageQuotaExceededFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'ModifyDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterMessage }
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'ModifyDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterMessage }
            output: InvalidVPCNetworkStateFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'ModifyDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterMessage }
            output: InvalidDBSubnetGroupStateFault
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'ModifyDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterMessage }
            output: InvalidSubnet
            outputFormat: 'text'
            status: 486
          }
        | {
            input: { query: { Action: 'ModifyDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterMessage }
            output: DBClusterParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 487
          }
        | {
            input: { query: { Action: 'ModifyDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterMessage }
            output: InvalidDBSecurityGroupStateFault
            outputFormat: 'text'
            status: 488
          }
        | {
            input: { query: { Action: 'ModifyDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterMessage }
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 489
          }
        | {
            input: { query: { Action: 'ModifyDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterMessage }
            output: DBClusterAlreadyExistsFault
            outputFormat: 'text'
            status: 490
          }
    }
  } & {
    '/#Action=ModifyDBClusterEndpoint': {
      $get:
        | {
            input: {
              query: {
                DBClusterEndpointIdentifier: string
                EndpointType?: string | undefined
                StaticMembers?: String[] | undefined
                ExcludedMembers?: String[] | undefined
                Action: 'ModifyDBClusterEndpoint'
                Version: '2014-10-31'
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
            output: ModifyDBClusterEndpointOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterEndpointIdentifier: string
                EndpointType?: string | undefined
                StaticMembers?: String[] | undefined
                ExcludedMembers?: String[] | undefined
                Action: 'ModifyDBClusterEndpoint'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterEndpointIdentifier: string
                EndpointType?: string | undefined
                StaticMembers?: String[] | undefined
                ExcludedMembers?: String[] | undefined
                Action: 'ModifyDBClusterEndpoint'
                Version: '2014-10-31'
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
            output: InvalidDBClusterEndpointStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBClusterEndpointIdentifier: string
                EndpointType?: string | undefined
                StaticMembers?: String[] | undefined
                ExcludedMembers?: String[] | undefined
                Action: 'ModifyDBClusterEndpoint'
                Version: '2014-10-31'
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
            output: DBClusterEndpointNotFoundFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DBClusterEndpointIdentifier: string
                EndpointType?: string | undefined
                StaticMembers?: String[] | undefined
                ExcludedMembers?: String[] | undefined
                Action: 'ModifyDBClusterEndpoint'
                Version: '2014-10-31'
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
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DBClusterEndpointIdentifier: string
                EndpointType?: string | undefined
                StaticMembers?: String[] | undefined
                ExcludedMembers?: String[] | undefined
                Action: 'ModifyDBClusterEndpoint'
                Version: '2014-10-31'
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
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'ModifyDBClusterEndpoint'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterEndpointMessage }
            output: ModifyDBClusterEndpointOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ModifyDBClusterEndpoint'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterEndpointMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ModifyDBClusterEndpoint'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterEndpointMessage }
            output: InvalidDBClusterEndpointStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'ModifyDBClusterEndpoint'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterEndpointMessage }
            output: DBClusterEndpointNotFoundFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'ModifyDBClusterEndpoint'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterEndpointMessage }
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'ModifyDBClusterEndpoint'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterEndpointMessage }
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=ModifyDBClusterParameterGroup': {
      $get:
        | {
            input: {
              query: {
                DBClusterParameterGroupName: string
                Parameters: {
                  ParameterName?: {} | undefined
                  ParameterValue?: {} | undefined
                  Description?: {} | undefined
                  Source?: {} | undefined
                  ApplyType?: {} | undefined
                  DataType?: {} | undefined
                  AllowedValues?: {} | undefined
                  IsModifiable?: {} | undefined
                  MinimumEngineVersion?: {} | undefined
                  ApplyMethod?: {} | undefined
                }[]
                Action: 'ModifyDBClusterParameterGroup'
                Version: '2014-10-31'
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
            output: DBClusterParameterGroupNameMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterParameterGroupName: string
                Parameters: {
                  ParameterName?: {} | undefined
                  ParameterValue?: {} | undefined
                  Description?: {} | undefined
                  Source?: {} | undefined
                  ApplyType?: {} | undefined
                  DataType?: {} | undefined
                  AllowedValues?: {} | undefined
                  IsModifiable?: {} | undefined
                  MinimumEngineVersion?: {} | undefined
                  ApplyMethod?: {} | undefined
                }[]
                Action: 'ModifyDBClusterParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterParameterGroupName: string
                Parameters: {
                  ParameterName?: {} | undefined
                  ParameterValue?: {} | undefined
                  Description?: {} | undefined
                  Source?: {} | undefined
                  ApplyType?: {} | undefined
                  DataType?: {} | undefined
                  AllowedValues?: {} | undefined
                  IsModifiable?: {} | undefined
                  MinimumEngineVersion?: {} | undefined
                  ApplyMethod?: {} | undefined
                }[]
                Action: 'ModifyDBClusterParameterGroup'
                Version: '2014-10-31'
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
            output: InvalidDBParameterGroupStateFault
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'ModifyDBClusterParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterParameterGroupMessage }
            output: DBClusterParameterGroupNameMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ModifyDBClusterParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterParameterGroupMessage }
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ModifyDBClusterParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBClusterParameterGroupMessage }
            output: InvalidDBParameterGroupStateFault
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=ModifyDBClusterSnapshotAttribute': {
      $get:
        | {
            input: {
              query: {
                DBClusterSnapshotIdentifier: string
                AttributeName: string
                ValuesToAdd?: {}[] | undefined
                ValuesToRemove?: {}[] | undefined
                Action: 'ModifyDBClusterSnapshotAttribute'
                Version: '2014-10-31'
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
            output: ModifyDBClusterSnapshotAttributeResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterSnapshotIdentifier: string
                AttributeName: string
                ValuesToAdd?: {}[] | undefined
                ValuesToRemove?: {}[] | undefined
                Action: 'ModifyDBClusterSnapshotAttribute'
                Version: '2014-10-31'
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
            output: DBClusterSnapshotNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterSnapshotIdentifier: string
                AttributeName: string
                ValuesToAdd?: {}[] | undefined
                ValuesToRemove?: {}[] | undefined
                Action: 'ModifyDBClusterSnapshotAttribute'
                Version: '2014-10-31'
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
            output: InvalidDBClusterSnapshotStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBClusterSnapshotIdentifier: string
                AttributeName: string
                ValuesToAdd?: {}[] | undefined
                ValuesToRemove?: {}[] | undefined
                Action: 'ModifyDBClusterSnapshotAttribute'
                Version: '2014-10-31'
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
            output: SharedSnapshotQuotaExceededFault
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: {
              query: { Action: 'ModifyDBClusterSnapshotAttribute'; Version: '2014-10-31' }
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
            } & { json: ModifyDBClusterSnapshotAttributeMessage }
            output: ModifyDBClusterSnapshotAttributeResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'ModifyDBClusterSnapshotAttribute'; Version: '2014-10-31' }
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
            } & { json: ModifyDBClusterSnapshotAttributeMessage }
            output: DBClusterSnapshotNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'ModifyDBClusterSnapshotAttribute'; Version: '2014-10-31' }
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
            } & { json: ModifyDBClusterSnapshotAttributeMessage }
            output: InvalidDBClusterSnapshotStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { Action: 'ModifyDBClusterSnapshotAttribute'; Version: '2014-10-31' }
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
            } & { json: ModifyDBClusterSnapshotAttributeMessage }
            output: SharedSnapshotQuotaExceededFault
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=ModifyDBInstance': {
      $get:
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass?: string | undefined
                DBSubnetGroupName?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ApplyImmediately?: boolean | undefined
                MasterUserPassword?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                NewDBInstanceIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                CACertificateIdentifier?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                DBPortNumber?: number | undefined
                PubliclyAccessible?: boolean | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                DeletionProtection?: boolean | undefined
                Action: 'ModifyDBInstance'
                Version: '2014-10-31'
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
            output: ModifyDBInstanceResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass?: string | undefined
                DBSubnetGroupName?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ApplyImmediately?: boolean | undefined
                MasterUserPassword?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                NewDBInstanceIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                CACertificateIdentifier?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                DBPortNumber?: number | undefined
                PubliclyAccessible?: boolean | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                DeletionProtection?: boolean | undefined
                Action: 'ModifyDBInstance'
                Version: '2014-10-31'
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
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass?: string | undefined
                DBSubnetGroupName?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ApplyImmediately?: boolean | undefined
                MasterUserPassword?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                NewDBInstanceIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                CACertificateIdentifier?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                DBPortNumber?: number | undefined
                PubliclyAccessible?: boolean | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                DeletionProtection?: boolean | undefined
                Action: 'ModifyDBInstance'
                Version: '2014-10-31'
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
            output: InvalidDBSecurityGroupStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass?: string | undefined
                DBSubnetGroupName?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ApplyImmediately?: boolean | undefined
                MasterUserPassword?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                NewDBInstanceIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                CACertificateIdentifier?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                DBPortNumber?: number | undefined
                PubliclyAccessible?: boolean | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                DeletionProtection?: boolean | undefined
                Action: 'ModifyDBInstance'
                Version: '2014-10-31'
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
            output: DBInstanceAlreadyExistsFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass?: string | undefined
                DBSubnetGroupName?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ApplyImmediately?: boolean | undefined
                MasterUserPassword?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                NewDBInstanceIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                CACertificateIdentifier?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                DBPortNumber?: number | undefined
                PubliclyAccessible?: boolean | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                DeletionProtection?: boolean | undefined
                Action: 'ModifyDBInstance'
                Version: '2014-10-31'
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
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass?: string | undefined
                DBSubnetGroupName?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ApplyImmediately?: boolean | undefined
                MasterUserPassword?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                NewDBInstanceIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                CACertificateIdentifier?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                DBPortNumber?: number | undefined
                PubliclyAccessible?: boolean | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                DeletionProtection?: boolean | undefined
                Action: 'ModifyDBInstance'
                Version: '2014-10-31'
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
            output: DBSecurityGroupNotFoundFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass?: string | undefined
                DBSubnetGroupName?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ApplyImmediately?: boolean | undefined
                MasterUserPassword?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                NewDBInstanceIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                CACertificateIdentifier?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                DBPortNumber?: number | undefined
                PubliclyAccessible?: boolean | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                DeletionProtection?: boolean | undefined
                Action: 'ModifyDBInstance'
                Version: '2014-10-31'
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
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass?: string | undefined
                DBSubnetGroupName?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ApplyImmediately?: boolean | undefined
                MasterUserPassword?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                NewDBInstanceIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                CACertificateIdentifier?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                DBPortNumber?: number | undefined
                PubliclyAccessible?: boolean | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                DeletionProtection?: boolean | undefined
                Action: 'ModifyDBInstance'
                Version: '2014-10-31'
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
            output: InsufficientDBInstanceCapacityFault
            outputFormat: 'text'
            status: 486
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass?: string | undefined
                DBSubnetGroupName?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ApplyImmediately?: boolean | undefined
                MasterUserPassword?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                NewDBInstanceIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                CACertificateIdentifier?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                DBPortNumber?: number | undefined
                PubliclyAccessible?: boolean | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                DeletionProtection?: boolean | undefined
                Action: 'ModifyDBInstance'
                Version: '2014-10-31'
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
            output: StorageQuotaExceededFault
            outputFormat: 'text'
            status: 487
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass?: string | undefined
                DBSubnetGroupName?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ApplyImmediately?: boolean | undefined
                MasterUserPassword?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                NewDBInstanceIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                CACertificateIdentifier?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                DBPortNumber?: number | undefined
                PubliclyAccessible?: boolean | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                DeletionProtection?: boolean | undefined
                Action: 'ModifyDBInstance'
                Version: '2014-10-31'
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
            output: InvalidVPCNetworkStateFault
            outputFormat: 'text'
            status: 488
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass?: string | undefined
                DBSubnetGroupName?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ApplyImmediately?: boolean | undefined
                MasterUserPassword?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                NewDBInstanceIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                CACertificateIdentifier?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                DBPortNumber?: number | undefined
                PubliclyAccessible?: boolean | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                DeletionProtection?: boolean | undefined
                Action: 'ModifyDBInstance'
                Version: '2014-10-31'
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
            output: ProvisionedIopsNotAvailableInAZFault
            outputFormat: 'text'
            status: 489
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass?: string | undefined
                DBSubnetGroupName?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ApplyImmediately?: boolean | undefined
                MasterUserPassword?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                NewDBInstanceIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                CACertificateIdentifier?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                DBPortNumber?: number | undefined
                PubliclyAccessible?: boolean | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                DeletionProtection?: boolean | undefined
                Action: 'ModifyDBInstance'
                Version: '2014-10-31'
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
            output: OptionGroupNotFoundFault
            outputFormat: 'text'
            status: 490
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass?: string | undefined
                DBSubnetGroupName?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ApplyImmediately?: boolean | undefined
                MasterUserPassword?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                NewDBInstanceIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                CACertificateIdentifier?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                DBPortNumber?: number | undefined
                PubliclyAccessible?: boolean | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                DeletionProtection?: boolean | undefined
                Action: 'ModifyDBInstance'
                Version: '2014-10-31'
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
            output: DBUpgradeDependencyFailureFault
            outputFormat: 'text'
            status: 491
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass?: string | undefined
                DBSubnetGroupName?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ApplyImmediately?: boolean | undefined
                MasterUserPassword?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                NewDBInstanceIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                CACertificateIdentifier?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                DBPortNumber?: number | undefined
                PubliclyAccessible?: boolean | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                DeletionProtection?: boolean | undefined
                Action: 'ModifyDBInstance'
                Version: '2014-10-31'
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
            output: StorageTypeNotSupportedFault
            outputFormat: 'text'
            status: 492
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass?: string | undefined
                DBSubnetGroupName?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ApplyImmediately?: boolean | undefined
                MasterUserPassword?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                NewDBInstanceIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                CACertificateIdentifier?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                DBPortNumber?: number | undefined
                PubliclyAccessible?: boolean | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                DeletionProtection?: boolean | undefined
                Action: 'ModifyDBInstance'
                Version: '2014-10-31'
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
            output: AuthorizationNotFoundFault
            outputFormat: 'text'
            status: 493
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass?: string | undefined
                DBSubnetGroupName?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ApplyImmediately?: boolean | undefined
                MasterUserPassword?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                NewDBInstanceIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                CACertificateIdentifier?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                DBPortNumber?: number | undefined
                PubliclyAccessible?: boolean | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                DeletionProtection?: boolean | undefined
                Action: 'ModifyDBInstance'
                Version: '2014-10-31'
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
            output: CertificateNotFoundFault
            outputFormat: 'text'
            status: 494
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                AllocatedStorage?: number | undefined
                DBInstanceClass?: string | undefined
                DBSubnetGroupName?: string | undefined
                DBSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ApplyImmediately?: boolean | undefined
                MasterUserPassword?: string | undefined
                DBParameterGroupName?: string | undefined
                BackupRetentionPeriod?: number | undefined
                PreferredBackupWindow?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                MultiAZ?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                NewDBInstanceIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                CACertificateIdentifier?: string | undefined
                Domain?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                DBPortNumber?: number | undefined
                PubliclyAccessible?: boolean | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                CloudwatchLogsExportConfiguration?:
                  | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
                  | undefined
                DeletionProtection?: boolean | undefined
                Action: 'ModifyDBInstance'
                Version: '2014-10-31'
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
            output: DomainNotFoundFault
            outputFormat: 'text'
            status: 495
          }
      $post:
        | {
            input: { query: { Action: 'ModifyDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBInstanceMessage }
            output: ModifyDBInstanceResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ModifyDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBInstanceMessage }
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ModifyDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBInstanceMessage }
            output: InvalidDBSecurityGroupStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'ModifyDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBInstanceMessage }
            output: DBInstanceAlreadyExistsFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'ModifyDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBInstanceMessage }
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'ModifyDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBInstanceMessage }
            output: DBSecurityGroupNotFoundFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'ModifyDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBInstanceMessage }
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'ModifyDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBInstanceMessage }
            output: InsufficientDBInstanceCapacityFault
            outputFormat: 'text'
            status: 486
          }
        | {
            input: { query: { Action: 'ModifyDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBInstanceMessage }
            output: StorageQuotaExceededFault
            outputFormat: 'text'
            status: 487
          }
        | {
            input: { query: { Action: 'ModifyDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBInstanceMessage }
            output: InvalidVPCNetworkStateFault
            outputFormat: 'text'
            status: 488
          }
        | {
            input: { query: { Action: 'ModifyDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBInstanceMessage }
            output: ProvisionedIopsNotAvailableInAZFault
            outputFormat: 'text'
            status: 489
          }
        | {
            input: { query: { Action: 'ModifyDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBInstanceMessage }
            output: OptionGroupNotFoundFault
            outputFormat: 'text'
            status: 490
          }
        | {
            input: { query: { Action: 'ModifyDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBInstanceMessage }
            output: DBUpgradeDependencyFailureFault
            outputFormat: 'text'
            status: 491
          }
        | {
            input: { query: { Action: 'ModifyDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBInstanceMessage }
            output: StorageTypeNotSupportedFault
            outputFormat: 'text'
            status: 492
          }
        | {
            input: { query: { Action: 'ModifyDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBInstanceMessage }
            output: AuthorizationNotFoundFault
            outputFormat: 'text'
            status: 493
          }
        | {
            input: { query: { Action: 'ModifyDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBInstanceMessage }
            output: CertificateNotFoundFault
            outputFormat: 'text'
            status: 494
          }
        | {
            input: { query: { Action: 'ModifyDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBInstanceMessage }
            output: DomainNotFoundFault
            outputFormat: 'text'
            status: 495
          }
    }
  } & {
    '/#Action=ModifyDBParameterGroup': {
      $get:
        | {
            input: {
              query: {
                DBParameterGroupName: string
                Parameters: {
                  ParameterName?: {} | undefined
                  ParameterValue?: {} | undefined
                  Description?: {} | undefined
                  Source?: {} | undefined
                  ApplyType?: {} | undefined
                  DataType?: {} | undefined
                  AllowedValues?: {} | undefined
                  IsModifiable?: {} | undefined
                  MinimumEngineVersion?: {} | undefined
                  ApplyMethod?: {} | undefined
                }[]
                Action: 'ModifyDBParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupNameMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBParameterGroupName: string
                Parameters: {
                  ParameterName?: {} | undefined
                  ParameterValue?: {} | undefined
                  Description?: {} | undefined
                  Source?: {} | undefined
                  ApplyType?: {} | undefined
                  DataType?: {} | undefined
                  AllowedValues?: {} | undefined
                  IsModifiable?: {} | undefined
                  MinimumEngineVersion?: {} | undefined
                  ApplyMethod?: {} | undefined
                }[]
                Action: 'ModifyDBParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBParameterGroupName: string
                Parameters: {
                  ParameterName?: {} | undefined
                  ParameterValue?: {} | undefined
                  Description?: {} | undefined
                  Source?: {} | undefined
                  ApplyType?: {} | undefined
                  DataType?: {} | undefined
                  AllowedValues?: {} | undefined
                  IsModifiable?: {} | undefined
                  MinimumEngineVersion?: {} | undefined
                  ApplyMethod?: {} | undefined
                }[]
                Action: 'ModifyDBParameterGroup'
                Version: '2014-10-31'
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
            output: InvalidDBParameterGroupStateFault
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'ModifyDBParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBParameterGroupMessage }
            output: DBParameterGroupNameMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ModifyDBParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBParameterGroupMessage }
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ModifyDBParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBParameterGroupMessage }
            output: InvalidDBParameterGroupStateFault
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=ModifyDBSubnetGroup': {
      $get:
        | {
            input: {
              query: {
                DBSubnetGroupName: string
                DBSubnetGroupDescription?: string | undefined
                SubnetIds: {}[]
                Action: 'ModifyDBSubnetGroup'
                Version: '2014-10-31'
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
            output: ModifyDBSubnetGroupResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBSubnetGroupName: string
                DBSubnetGroupDescription?: string | undefined
                SubnetIds: {}[]
                Action: 'ModifyDBSubnetGroup'
                Version: '2014-10-31'
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
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBSubnetGroupName: string
                DBSubnetGroupDescription?: string | undefined
                SubnetIds: {}[]
                Action: 'ModifyDBSubnetGroup'
                Version: '2014-10-31'
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
            output: DBSubnetQuotaExceededFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBSubnetGroupName: string
                DBSubnetGroupDescription?: string | undefined
                SubnetIds: {}[]
                Action: 'ModifyDBSubnetGroup'
                Version: '2014-10-31'
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
            output: SubnetAlreadyInUse
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DBSubnetGroupName: string
                DBSubnetGroupDescription?: string | undefined
                SubnetIds: {}[]
                Action: 'ModifyDBSubnetGroup'
                Version: '2014-10-31'
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
            output: DBSubnetGroupDoesNotCoverEnoughAZs
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DBSubnetGroupName: string
                DBSubnetGroupDescription?: string | undefined
                SubnetIds: {}[]
                Action: 'ModifyDBSubnetGroup'
                Version: '2014-10-31'
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
            output: InvalidSubnet
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'ModifyDBSubnetGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBSubnetGroupMessage }
            output: ModifyDBSubnetGroupResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ModifyDBSubnetGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBSubnetGroupMessage }
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ModifyDBSubnetGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBSubnetGroupMessage }
            output: DBSubnetQuotaExceededFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'ModifyDBSubnetGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBSubnetGroupMessage }
            output: SubnetAlreadyInUse
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'ModifyDBSubnetGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBSubnetGroupMessage }
            output: DBSubnetGroupDoesNotCoverEnoughAZs
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'ModifyDBSubnetGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyDBSubnetGroupMessage }
            output: InvalidSubnet
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=ModifyEventSubscription': {
      $get:
        | {
            input: {
              query: {
                SubscriptionName: string
                SnsTopicArn?: string | undefined
                SourceType?: string | undefined
                EventCategories?: {}[] | undefined
                Enabled?: boolean | undefined
                Action: 'ModifyEventSubscription'
                Version: '2014-10-31'
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
            output: ModifyEventSubscriptionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                SnsTopicArn?: string | undefined
                SourceType?: string | undefined
                EventCategories?: {}[] | undefined
                Enabled?: boolean | undefined
                Action: 'ModifyEventSubscription'
                Version: '2014-10-31'
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
            output: EventSubscriptionQuotaExceededFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                SnsTopicArn?: string | undefined
                SourceType?: string | undefined
                EventCategories?: {}[] | undefined
                Enabled?: boolean | undefined
                Action: 'ModifyEventSubscription'
                Version: '2014-10-31'
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
            output: SubscriptionNotFoundFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                SnsTopicArn?: string | undefined
                SourceType?: string | undefined
                EventCategories?: {}[] | undefined
                Enabled?: boolean | undefined
                Action: 'ModifyEventSubscription'
                Version: '2014-10-31'
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
            output: SNSInvalidTopicFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                SnsTopicArn?: string | undefined
                SourceType?: string | undefined
                EventCategories?: {}[] | undefined
                Enabled?: boolean | undefined
                Action: 'ModifyEventSubscription'
                Version: '2014-10-31'
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
            output: SNSNoAuthorizationFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                SnsTopicArn?: string | undefined
                SourceType?: string | undefined
                EventCategories?: {}[] | undefined
                Enabled?: boolean | undefined
                Action: 'ModifyEventSubscription'
                Version: '2014-10-31'
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
            output: SNSTopicArnNotFoundFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                SnsTopicArn?: string | undefined
                SourceType?: string | undefined
                EventCategories?: {}[] | undefined
                Enabled?: boolean | undefined
                Action: 'ModifyEventSubscription'
                Version: '2014-10-31'
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
            output: SubscriptionCategoryNotFoundFault
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'ModifyEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEventSubscriptionMessage }
            output: ModifyEventSubscriptionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ModifyEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEventSubscriptionMessage }
            output: EventSubscriptionQuotaExceededFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ModifyEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEventSubscriptionMessage }
            output: SubscriptionNotFoundFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'ModifyEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEventSubscriptionMessage }
            output: SNSInvalidTopicFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'ModifyEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEventSubscriptionMessage }
            output: SNSNoAuthorizationFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'ModifyEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEventSubscriptionMessage }
            output: SNSTopicArnNotFoundFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'ModifyEventSubscription'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyEventSubscriptionMessage }
            output: SubscriptionCategoryNotFoundFault
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=ModifyGlobalCluster': {
      $get:
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                NewGlobalClusterIdentifier?: string | undefined
                DeletionProtection?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                Action: 'ModifyGlobalCluster'
                Version: '2014-10-31'
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
            output: ModifyGlobalClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                NewGlobalClusterIdentifier?: string | undefined
                DeletionProtection?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                Action: 'ModifyGlobalCluster'
                Version: '2014-10-31'
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
            output: GlobalClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                NewGlobalClusterIdentifier?: string | undefined
                DeletionProtection?: boolean | undefined
                EngineVersion?: string | undefined
                AllowMajorVersionUpgrade?: boolean | undefined
                Action: 'ModifyGlobalCluster'
                Version: '2014-10-31'
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
            output: InvalidGlobalClusterStateFault
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'ModifyGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyGlobalClusterMessage }
            output: ModifyGlobalClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ModifyGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyGlobalClusterMessage }
            output: GlobalClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ModifyGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyGlobalClusterMessage }
            output: InvalidGlobalClusterStateFault
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=PromoteReadReplicaDBCluster': {
      $get:
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                Action: 'PromoteReadReplicaDBCluster'
                Version: '2014-10-31'
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
            output: PromoteReadReplicaDBClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                Action: 'PromoteReadReplicaDBCluster'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                Action: 'PromoteReadReplicaDBCluster'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'PromoteReadReplicaDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PromoteReadReplicaDBClusterMessage }
            output: PromoteReadReplicaDBClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'PromoteReadReplicaDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PromoteReadReplicaDBClusterMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'PromoteReadReplicaDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PromoteReadReplicaDBClusterMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=RebootDBInstance': {
      $get:
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                ForceFailover?: boolean | undefined
                Action: 'RebootDBInstance'
                Version: '2014-10-31'
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
            output: RebootDBInstanceResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                ForceFailover?: boolean | undefined
                Action: 'RebootDBInstance'
                Version: '2014-10-31'
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
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                ForceFailover?: boolean | undefined
                Action: 'RebootDBInstance'
                Version: '2014-10-31'
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
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'RebootDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RebootDBInstanceMessage }
            output: RebootDBInstanceResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'RebootDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RebootDBInstanceMessage }
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'RebootDBInstance'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RebootDBInstanceMessage }
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=RemoveFromGlobalCluster': {
      $get:
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                DbClusterIdentifier: string
                Action: 'RemoveFromGlobalCluster'
                Version: '2014-10-31'
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
            output: RemoveFromGlobalClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                DbClusterIdentifier: string
                Action: 'RemoveFromGlobalCluster'
                Version: '2014-10-31'
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
            output: GlobalClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                DbClusterIdentifier: string
                Action: 'RemoveFromGlobalCluster'
                Version: '2014-10-31'
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
            output: InvalidGlobalClusterStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                GlobalClusterIdentifier: string
                DbClusterIdentifier: string
                Action: 'RemoveFromGlobalCluster'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'RemoveFromGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveFromGlobalClusterMessage }
            output: RemoveFromGlobalClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'RemoveFromGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveFromGlobalClusterMessage }
            output: GlobalClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'RemoveFromGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveFromGlobalClusterMessage }
            output: InvalidGlobalClusterStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'RemoveFromGlobalCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveFromGlobalClusterMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=RemoveRoleFromDBCluster': {
      $get:
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RoleArn: string
                FeatureName?: string | undefined
                Action: 'RemoveRoleFromDBCluster'
                Version: '2014-10-31'
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
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RoleArn: string
                FeatureName?: string | undefined
                Action: 'RemoveRoleFromDBCluster'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RoleArn: string
                FeatureName?: string | undefined
                Action: 'RemoveRoleFromDBCluster'
                Version: '2014-10-31'
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
            output: DBClusterRoleNotFoundFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RoleArn: string
                FeatureName?: string | undefined
                Action: 'RemoveRoleFromDBCluster'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'RemoveRoleFromDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveRoleFromDBClusterMessage }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'RemoveRoleFromDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveRoleFromDBClusterMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'RemoveRoleFromDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveRoleFromDBClusterMessage }
            output: DBClusterRoleNotFoundFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'RemoveRoleFromDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveRoleFromDBClusterMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=RemoveSourceIdentifierFromSubscription': {
      $get:
        | {
            input: {
              query: {
                SubscriptionName: string
                SourceIdentifier: string
                Action: 'RemoveSourceIdentifierFromSubscription'
                Version: '2014-10-31'
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
            output: RemoveSourceIdentifierFromSubscriptionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                SourceIdentifier: string
                Action: 'RemoveSourceIdentifierFromSubscription'
                Version: '2014-10-31'
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
            output: SubscriptionNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                SubscriptionName: string
                SourceIdentifier: string
                Action: 'RemoveSourceIdentifierFromSubscription'
                Version: '2014-10-31'
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
            output: SourceNotFoundFault
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: {
              query: { Action: 'RemoveSourceIdentifierFromSubscription'; Version: '2014-10-31' }
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
            } & { json: RemoveSourceIdentifierFromSubscriptionMessage }
            output: RemoveSourceIdentifierFromSubscriptionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'RemoveSourceIdentifierFromSubscription'; Version: '2014-10-31' }
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
            } & { json: RemoveSourceIdentifierFromSubscriptionMessage }
            output: SubscriptionNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'RemoveSourceIdentifierFromSubscription'; Version: '2014-10-31' }
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
            } & { json: RemoveSourceIdentifierFromSubscriptionMessage }
            output: SourceNotFoundFault
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=RemoveTagsFromResource': {
      $get:
        | {
            input: {
              query: {
                ResourceName: string
                TagKeys: String[]
                Action: 'RemoveTagsFromResource'
                Version: '2014-10-31'
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
        | {
            input: {
              query: {
                ResourceName: string
                TagKeys: String[]
                Action: 'RemoveTagsFromResource'
                Version: '2014-10-31'
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
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ResourceName: string
                TagKeys: String[]
                Action: 'RemoveTagsFromResource'
                Version: '2014-10-31'
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
            output: DBSnapshotNotFoundFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ResourceName: string
                TagKeys: String[]
                Action: 'RemoveTagsFromResource'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'RemoveTagsFromResource'; Version: '2014-10-31' } } & {
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
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { Action: 'RemoveTagsFromResource'; Version: '2014-10-31' } } & {
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
            output: DBInstanceNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'RemoveTagsFromResource'; Version: '2014-10-31' } } & {
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
            output: DBSnapshotNotFoundFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'RemoveTagsFromResource'; Version: '2014-10-31' } } & {
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=ResetDBClusterParameterGroup': {
      $get:
        | {
            input: {
              query: {
                DBClusterParameterGroupName: string
                ResetAllParameters?: boolean | undefined
                Parameters?:
                  | {
                      ParameterName?: {} | undefined
                      ParameterValue?: {} | undefined
                      Description?: {} | undefined
                      Source?: {} | undefined
                      ApplyType?: {} | undefined
                      DataType?: {} | undefined
                      AllowedValues?: {} | undefined
                      IsModifiable?: {} | undefined
                      MinimumEngineVersion?: {} | undefined
                      ApplyMethod?: {} | undefined
                    }[]
                  | undefined
                Action: 'ResetDBClusterParameterGroup'
                Version: '2014-10-31'
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
            output: DBClusterParameterGroupNameMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterParameterGroupName: string
                ResetAllParameters?: boolean | undefined
                Parameters?:
                  | {
                      ParameterName?: {} | undefined
                      ParameterValue?: {} | undefined
                      Description?: {} | undefined
                      Source?: {} | undefined
                      ApplyType?: {} | undefined
                      DataType?: {} | undefined
                      AllowedValues?: {} | undefined
                      IsModifiable?: {} | undefined
                      MinimumEngineVersion?: {} | undefined
                      ApplyMethod?: {} | undefined
                    }[]
                  | undefined
                Action: 'ResetDBClusterParameterGroup'
                Version: '2014-10-31'
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
            output: InvalidDBParameterGroupStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterParameterGroupName: string
                ResetAllParameters?: boolean | undefined
                Parameters?:
                  | {
                      ParameterName?: {} | undefined
                      ParameterValue?: {} | undefined
                      Description?: {} | undefined
                      Source?: {} | undefined
                      ApplyType?: {} | undefined
                      DataType?: {} | undefined
                      AllowedValues?: {} | undefined
                      IsModifiable?: {} | undefined
                      MinimumEngineVersion?: {} | undefined
                      ApplyMethod?: {} | undefined
                    }[]
                  | undefined
                Action: 'ResetDBClusterParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'ResetDBClusterParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResetDBClusterParameterGroupMessage }
            output: DBClusterParameterGroupNameMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ResetDBClusterParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResetDBClusterParameterGroupMessage }
            output: InvalidDBParameterGroupStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ResetDBClusterParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResetDBClusterParameterGroupMessage }
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=ResetDBParameterGroup': {
      $get:
        | {
            input: {
              query: {
                DBParameterGroupName: string
                ResetAllParameters?: boolean | undefined
                Parameters?:
                  | {
                      ParameterName?: {} | undefined
                      ParameterValue?: {} | undefined
                      Description?: {} | undefined
                      Source?: {} | undefined
                      ApplyType?: {} | undefined
                      DataType?: {} | undefined
                      AllowedValues?: {} | undefined
                      IsModifiable?: {} | undefined
                      MinimumEngineVersion?: {} | undefined
                      ApplyMethod?: {} | undefined
                    }[]
                  | undefined
                Action: 'ResetDBParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupNameMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBParameterGroupName: string
                ResetAllParameters?: boolean | undefined
                Parameters?:
                  | {
                      ParameterName?: {} | undefined
                      ParameterValue?: {} | undefined
                      Description?: {} | undefined
                      Source?: {} | undefined
                      ApplyType?: {} | undefined
                      DataType?: {} | undefined
                      AllowedValues?: {} | undefined
                      IsModifiable?: {} | undefined
                      MinimumEngineVersion?: {} | undefined
                      ApplyMethod?: {} | undefined
                    }[]
                  | undefined
                Action: 'ResetDBParameterGroup'
                Version: '2014-10-31'
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
            output: InvalidDBParameterGroupStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBParameterGroupName: string
                ResetAllParameters?: boolean | undefined
                Parameters?:
                  | {
                      ParameterName?: {} | undefined
                      ParameterValue?: {} | undefined
                      Description?: {} | undefined
                      Source?: {} | undefined
                      ApplyType?: {} | undefined
                      DataType?: {} | undefined
                      AllowedValues?: {} | undefined
                      IsModifiable?: {} | undefined
                      MinimumEngineVersion?: {} | undefined
                      ApplyMethod?: {} | undefined
                    }[]
                  | undefined
                Action: 'ResetDBParameterGroup'
                Version: '2014-10-31'
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
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'ResetDBParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResetDBParameterGroupMessage }
            output: DBParameterGroupNameMessage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ResetDBParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResetDBParameterGroupMessage }
            output: InvalidDBParameterGroupStateFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ResetDBParameterGroup'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResetDBParameterGroupMessage }
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=RestoreDBClusterFromSnapshot': {
      $get:
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: RestoreDBClusterFromSnapshotResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: DBClusterAlreadyExistsFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: DBClusterQuotaExceededFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: StorageQuotaExceededFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: DBSnapshotNotFoundFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: DBClusterSnapshotNotFoundFault
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: InsufficientDBClusterCapacityFault
            outputFormat: 'text'
            status: 486
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: InsufficientStorageClusterCapacityFault
            outputFormat: 'text'
            status: 487
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: InvalidDBSnapshotStateFault
            outputFormat: 'text'
            status: 488
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: InvalidDBClusterSnapshotStateFault
            outputFormat: 'text'
            status: 489
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: StorageQuotaExceededFault
            outputFormat: 'text'
            status: 490
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: InvalidVPCNetworkStateFault
            outputFormat: 'text'
            status: 491
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: InvalidRestoreFault
            outputFormat: 'text'
            status: 492
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 493
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: InvalidSubnet
            outputFormat: 'text'
            status: 494
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: OptionGroupNotFoundFault
            outputFormat: 'text'
            status: 495
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: KMSKeyNotAccessibleFault
            outputFormat: 'text'
            status: 496
          }
        | {
            input: {
              query: {
                AvailabilityZones?: {}[] | undefined
                DBClusterIdentifier: string
                SnapshotIdentifier: string
                Engine: string
                EngineVersion?: string | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                DatabaseName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                CopyTagsToSnapshot?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterFromSnapshot'
                Version: '2014-10-31'
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
            output: DBClusterParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 497
          }
      $post:
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: RestoreDBClusterFromSnapshotResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: DBClusterAlreadyExistsFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: DBClusterQuotaExceededFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: StorageQuotaExceededFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: DBSnapshotNotFoundFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: DBClusterSnapshotNotFoundFault
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: InsufficientDBClusterCapacityFault
            outputFormat: 'text'
            status: 486
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: InsufficientStorageClusterCapacityFault
            outputFormat: 'text'
            status: 487
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: InvalidDBSnapshotStateFault
            outputFormat: 'text'
            status: 488
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: InvalidDBClusterSnapshotStateFault
            outputFormat: 'text'
            status: 489
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: StorageQuotaExceededFault
            outputFormat: 'text'
            status: 490
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: InvalidVPCNetworkStateFault
            outputFormat: 'text'
            status: 491
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: InvalidRestoreFault
            outputFormat: 'text'
            status: 492
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 493
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: InvalidSubnet
            outputFormat: 'text'
            status: 494
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: OptionGroupNotFoundFault
            outputFormat: 'text'
            status: 495
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: KMSKeyNotAccessibleFault
            outputFormat: 'text'
            status: 496
          }
        | {
            input: { query: { Action: 'RestoreDBClusterFromSnapshot'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterFromSnapshotMessage }
            output: DBClusterParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 497
          }
    }
  } & {
    '/#Action=RestoreDBClusterToPointInTime': {
      $get:
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: RestoreDBClusterToPointInTimeResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: DBClusterAlreadyExistsFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: DBClusterQuotaExceededFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: DBClusterSnapshotNotFoundFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: InsufficientDBClusterCapacityFault
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: InsufficientStorageClusterCapacityFault
            outputFormat: 'text'
            status: 486
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: InvalidDBClusterSnapshotStateFault
            outputFormat: 'text'
            status: 487
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 488
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: InvalidDBSnapshotStateFault
            outputFormat: 'text'
            status: 489
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: InvalidRestoreFault
            outputFormat: 'text'
            status: 490
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: InvalidSubnet
            outputFormat: 'text'
            status: 491
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: InvalidVPCNetworkStateFault
            outputFormat: 'text'
            status: 492
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: KMSKeyNotAccessibleFault
            outputFormat: 'text'
            status: 493
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: OptionGroupNotFoundFault
            outputFormat: 'text'
            status: 494
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: StorageQuotaExceededFault
            outputFormat: 'text'
            status: 495
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                RestoreType?: string | undefined
                SourceDBClusterIdentifier: string
                RestoreToTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                Port?: number | undefined
                DBSubnetGroupName?: string | undefined
                OptionGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                DBClusterParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                ServerlessV2ScalingConfiguration?:
                  | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
                  | undefined
                Action: 'RestoreDBClusterToPointInTime'
                Version: '2014-10-31'
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
            output: DBClusterParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 496
          }
      $post:
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: RestoreDBClusterToPointInTimeResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: DBClusterAlreadyExistsFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: DBClusterQuotaExceededFault
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: DBClusterSnapshotNotFoundFault
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: DBSubnetGroupNotFoundFault
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: InsufficientDBClusterCapacityFault
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: InsufficientStorageClusterCapacityFault
            outputFormat: 'text'
            status: 486
          }
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: InvalidDBClusterSnapshotStateFault
            outputFormat: 'text'
            status: 487
          }
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 488
          }
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: InvalidDBSnapshotStateFault
            outputFormat: 'text'
            status: 489
          }
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: InvalidRestoreFault
            outputFormat: 'text'
            status: 490
          }
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: InvalidSubnet
            outputFormat: 'text'
            status: 491
          }
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: InvalidVPCNetworkStateFault
            outputFormat: 'text'
            status: 492
          }
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: KMSKeyNotAccessibleFault
            outputFormat: 'text'
            status: 493
          }
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: OptionGroupNotFoundFault
            outputFormat: 'text'
            status: 494
          }
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: StorageQuotaExceededFault
            outputFormat: 'text'
            status: 495
          }
        | {
            input: { query: { Action: 'RestoreDBClusterToPointInTime'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBClusterToPointInTimeMessage }
            output: DBClusterParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 496
          }
    }
  } & {
    '/#Action=StartDBCluster': {
      $get:
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                Action: 'StartDBCluster'
                Version: '2014-10-31'
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
            output: StartDBClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                Action: 'StartDBCluster'
                Version: '2014-10-31'
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                Action: 'StartDBCluster'
                Version: '2014-10-31'
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                DBClusterIdentifier: string
                Action: 'StartDBCluster'
                Version: '2014-10-31'
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
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'StartDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDBClusterMessage }
            output: StartDBClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'StartDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDBClusterMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'StartDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDBClusterMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'StartDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartDBClusterMessage }
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=StopDBCluster': {
      $get:
        | {
            input: {
              query: { DBClusterIdentifier: string; Action: 'StopDBCluster'; Version: '2014-10-31' }
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
            output: StopDBClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { DBClusterIdentifier: string; Action: 'StopDBCluster'; Version: '2014-10-31' }
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
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { DBClusterIdentifier: string; Action: 'StopDBCluster'; Version: '2014-10-31' }
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
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { DBClusterIdentifier: string; Action: 'StopDBCluster'; Version: '2014-10-31' }
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
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'StopDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopDBClusterMessage }
            output: StopDBClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'StopDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopDBClusterMessage }
            output: DBClusterNotFoundFault
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'StopDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopDBClusterMessage }
            output: InvalidDBClusterStateFault
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'StopDBCluster'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopDBClusterMessage }
            output: InvalidDBInstanceStateFault
            outputFormat: 'text'
            status: 482
          }
    }
  },
  '/'
>
export default routes
