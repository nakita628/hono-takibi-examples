type AddRoleToDBClusterMessage = {
  DBClusterIdentifier: {}
  RoleArn: {}
  FeatureName?: {} | undefined
}
type AddRoleToDBInstanceMessage = { DBInstanceIdentifier: {}; RoleArn: {}; FeatureName: {} }
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
type AddSourceIdentifierToSubscriptionMessage = { SubscriptionName: {}; SourceIdentifier: {} }
type AddTagsToResourceMessage = { ResourceName: {}; Tags: {} }
type ResourcePendingMaintenanceActions = {
  ResourceIdentifier?: {} | undefined
  PendingMaintenanceActionDetails?: {} | undefined
}
type ApplyPendingMaintenanceActionResult = {
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions | undefined
}
type ApplyPendingMaintenanceActionMessage = {
  ResourceIdentifier: {}
  ApplyAction: {}
  OptInType: {}
}
type DBSecurityGroup = {
  OwnerId?: {} | undefined
  DBSecurityGroupName?: {} | undefined
  DBSecurityGroupDescription?: {} | undefined
  VpcId?: {} | undefined
  EC2SecurityGroups?: {} | undefined
  IPRanges?: {} | undefined
  DBSecurityGroupArn?: {} | undefined
}
type AuthorizeDBSecurityGroupIngressResult = { DBSecurityGroup?: DBSecurityGroup | undefined }
type AuthorizeDBSecurityGroupIngressMessage = {
  DBSecurityGroupName: {}
  CIDRIP?: {} | undefined
  EC2SecurityGroupName?: {} | undefined
  EC2SecurityGroupId?: {} | undefined
  EC2SecurityGroupOwnerId?: {} | undefined
}
type DBClusterBacktrack = {
  DBClusterIdentifier?: {} | undefined
  BacktrackIdentifier?: {} | undefined
  BacktrackTo?: {} | undefined
  BacktrackedFrom?: {} | undefined
  BacktrackRequestCreationTime?: {} | undefined
  Status?: {} | undefined
}
type BacktrackDBClusterMessage = {
  DBClusterIdentifier: {}
  BacktrackTo: {}
  Force?: {} | undefined
  UseEarliestTimeOnPointInTimeUnavailable?: {} | undefined
}
type ExportTask = {
  ExportTaskIdentifier?: {} | undefined
  SourceArn?: {} | undefined
  ExportOnly?: {} | undefined
  SnapshotTime?: {} | undefined
  TaskStartTime?: {} | undefined
  TaskEndTime?: {} | undefined
  S3Bucket?: {} | undefined
  S3Prefix?: {} | undefined
  IamRoleArn?: {} | undefined
  KmsKeyId?: {} | undefined
  Status?: {} | undefined
  PercentProgress?: {} | undefined
  TotalExtractedDataInGB?: {} | undefined
  FailureCause?: {} | undefined
  WarningMessage?: {} | undefined
  SourceType?: {} | undefined
}
type CancelExportTaskMessage = { ExportTaskIdentifier: {} }
type DBClusterParameterGroup = {
  DBClusterParameterGroupName?: {} | undefined
  DBParameterGroupFamily?: {} | undefined
  Description?: {} | undefined
  DBClusterParameterGroupArn?: {} | undefined
}
type CopyDBClusterParameterGroupResult = {
  DBClusterParameterGroup?: DBClusterParameterGroup | undefined
}
type TagList = { Key?: {} | undefined; Value?: {} | undefined }[]
type CopyDBClusterParameterGroupMessage = {
  SourceDBClusterParameterGroupIdentifier: {}
  TargetDBClusterParameterGroupIdentifier: {}
  TargetDBClusterParameterGroupDescription: {}
  Tags?: TagList | undefined
}
type DBClusterSnapshot = {
  AvailabilityZones?: {} | undefined
  DBClusterSnapshotIdentifier?: {} | undefined
  DBClusterIdentifier?: {} | undefined
  SnapshotCreateTime?: {} | undefined
  Engine?: {} | undefined
  EngineMode?: {} | undefined
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
  TagList?: TagList | undefined
  DBSystemId?: {} | undefined
  StorageType?: {} | undefined
  DbClusterResourceId?: {} | undefined
}
type CopyDBClusterSnapshotResult = { DBClusterSnapshot?: DBClusterSnapshot | undefined }
type CopyDBClusterSnapshotMessage = {
  SourceDBClusterSnapshotIdentifier: {}
  TargetDBClusterSnapshotIdentifier: {}
  KmsKeyId?: {} | undefined
  PreSignedUrl?: {} | undefined
  CopyTags?: {} | undefined
  Tags?: TagList | undefined
  SourceRegion?: {} | undefined
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
  Tags?: TagList | undefined
}
type DBSnapshot = {
  DBSnapshotIdentifier?: {} | undefined
  DBInstanceIdentifier?: {} | undefined
  SnapshotCreateTime?: {} | undefined
  Engine?: {} | undefined
  AllocatedStorage?: {} | undefined
  Status?: {} | undefined
  Port?: {} | undefined
  AvailabilityZone?: {} | undefined
  VpcId?: {} | undefined
  InstanceCreateTime?: {} | undefined
  MasterUsername?: {} | undefined
  EngineVersion?: {} | undefined
  LicenseModel?: {} | undefined
  SnapshotType?: {} | undefined
  Iops?: {} | undefined
  OptionGroupName?: {} | undefined
  PercentProgress?: {} | undefined
  SourceRegion?: {} | undefined
  SourceDBSnapshotIdentifier?: {} | undefined
  StorageType?: {} | undefined
  TdeCredentialArn?: {} | undefined
  Encrypted?: {} | undefined
  KmsKeyId?: {} | undefined
  DBSnapshotArn?: {} | undefined
  Timezone?: {} | undefined
  IAMDatabaseAuthenticationEnabled?: {} | undefined
  ProcessorFeatures?: {} | undefined
  DbiResourceId?: {} | undefined
  TagList?: TagList | undefined
  OriginalSnapshotCreateTime?: {} | undefined
  SnapshotDatabaseTime?: {} | undefined
  SnapshotTarget?: {} | undefined
  StorageThroughput?: {} | undefined
  DBSystemId?: {} | undefined
}
type CopyDBSnapshotResult = { DBSnapshot?: DBSnapshot | undefined }
type CopyDBSnapshotMessage = {
  SourceDBSnapshotIdentifier: {}
  TargetDBSnapshotIdentifier: {}
  KmsKeyId?: {} | undefined
  Tags?: TagList | undefined
  CopyTags?: {} | undefined
  PreSignedUrl?: {} | undefined
  OptionGroupName?: {} | undefined
  TargetCustomAvailabilityZone?: {} | undefined
  CopyOptionGroup?: {} | undefined
  SourceRegion?: {} | undefined
}
type OptionGroup = {
  OptionGroupName?: {} | undefined
  OptionGroupDescription?: {} | undefined
  EngineName?: {} | undefined
  MajorEngineVersion?: {} | undefined
  Options?: {} | undefined
  AllowsVpcAndNonVpcInstanceMemberships?: {} | undefined
  VpcId?: {} | undefined
  OptionGroupArn?: {} | undefined
  SourceOptionGroup?: {} | undefined
  SourceAccountId?: {} | undefined
  CopyTimestamp?: {} | undefined
}
type CopyOptionGroupResult = { OptionGroup?: OptionGroup | undefined }
type CopyOptionGroupMessage = {
  SourceOptionGroupIdentifier: {}
  TargetOptionGroupIdentifier: {}
  TargetOptionGroupDescription: {}
  Tags?: TagList | undefined
}
type BlueGreenDeployment = {
  BlueGreenDeploymentIdentifier?: {} | undefined
  BlueGreenDeploymentName?: {} | undefined
  Source?: {} | undefined
  Target?: {} | undefined
  SwitchoverDetails?: {} | undefined
  Tasks?: {} | undefined
  Status?: {} | undefined
  StatusDetails?: {} | undefined
  CreateTime?: {} | undefined
  DeleteTime?: {} | undefined
  TagList?: TagList | undefined
}
type CreateBlueGreenDeploymentResponse = { BlueGreenDeployment?: BlueGreenDeployment | undefined }
type CreateBlueGreenDeploymentRequest = {
  BlueGreenDeploymentName: {}
  Source: {}
  TargetEngineVersion?: {} | undefined
  TargetDBParameterGroupName?: {} | undefined
  TargetDBClusterParameterGroupName?: {} | undefined
  Tags?: {} | undefined
}
type DBEngineVersion = {
  Engine?: {} | undefined
  EngineVersion?: {} | undefined
  DBParameterGroupFamily?: {} | undefined
  DBEngineDescription?: {} | undefined
  DBEngineVersionDescription?: {} | undefined
  DefaultCharacterSet?:
    | { CharacterSetName?: {} | undefined; CharacterSetDescription?: {} | undefined }
    | undefined
  Image?: { ImageId?: {} | undefined; Status?: {} | undefined } | undefined
  DBEngineMediaType?: {} | undefined
  SupportedCharacterSets?: {} | undefined
  SupportedNcharCharacterSets?: {} | undefined
  ValidUpgradeTarget?: {} | undefined
  SupportedTimezones?: {} | undefined
  ExportableLogTypes?: {} | undefined
  SupportsLogExportsToCloudwatchLogs?: {} | undefined
  SupportsReadReplica?: {} | undefined
  SupportedEngineModes?: {} | undefined
  SupportedFeatureNames?: {} | undefined
  Status?: {} | undefined
  SupportsParallelQuery?: {} | undefined
  SupportsGlobalDatabases?: {} | undefined
  MajorEngineVersion?: {} | undefined
  DatabaseInstallationFilesS3BucketName?: {} | undefined
  DatabaseInstallationFilesS3Prefix?: {} | undefined
  DBEngineVersionArn?: {} | undefined
  KMSKeyId?: {} | undefined
  CreateTime?: {} | undefined
  TagList?: TagList | undefined
  SupportsBabelfish?: {} | undefined
  CustomDBEngineVersionManifest?: {} | undefined
  SupportsCertificateRotationWithoutRestart?: {} | undefined
  SupportedCACertificateIdentifiers?: {} | undefined
  SupportsLocalWriteForwarding?: {} | undefined
}
type CreateCustomDBEngineVersionMessage = {
  Engine: {}
  EngineVersion: {}
  DatabaseInstallationFilesS3BucketName?: {} | undefined
  DatabaseInstallationFilesS3Prefix?: {} | undefined
  ImageId?: {} | undefined
  KMSKeyId?: {} | undefined
  Description?: {} | undefined
  Manifest?: {} | undefined
  Tags?: TagList | undefined
}
type String = string
type ScalingConfigurationInfo = {
  MinCapacity?: {} | undefined
  MaxCapacity?: {} | undefined
  AutoPause?: {} | undefined
  SecondsUntilAutoPause?: {} | undefined
  TimeoutAction?: {} | undefined
  SecondsBeforeTimeout?: {} | undefined
}
type PendingCloudwatchLogsExports = {
  LogTypesToEnable?: {} | undefined
  LogTypesToDisable?: {} | undefined
}
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
  AutomaticRestartTime?: {} | undefined
  PercentProgress?: {} | undefined
  EarliestRestorableTime?: {} | undefined
  Endpoint?: {} | undefined
  ReaderEndpoint?: {} | undefined
  CustomEndpoints?: {} | undefined
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
  EarliestBacktrackTime?: {} | undefined
  BacktrackWindow?: {} | undefined
  BacktrackConsumedChangeRecords?: {} | undefined
  EnabledCloudwatchLogsExports?: {} | undefined
  Capacity?: {} | undefined
  EngineMode?: {} | undefined
  ScalingConfigurationInfo?: ScalingConfigurationInfo | undefined
  DeletionProtection?: {} | undefined
  HttpEndpointEnabled?: {} | undefined
  ActivityStreamMode?: {} | undefined
  ActivityStreamStatus?: {} | undefined
  ActivityStreamKmsKeyId?: {} | undefined
  ActivityStreamKinesisStreamName?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  CrossAccountClone?: {} | undefined
  DomainMemberships?: {} | undefined
  TagList?: TagList | undefined
  GlobalWriteForwardingStatus?: {} | undefined
  GlobalWriteForwardingRequested?: {} | undefined
  PendingModifiedValues?:
    | {
        PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports | undefined
        DBClusterIdentifier?: {} | undefined
        MasterUserPassword?: {} | undefined
        IAMDatabaseAuthenticationEnabled?: {} | undefined
        EngineVersion?: {} | undefined
        BackupRetentionPeriod?: {} | undefined
        AllocatedStorage?: {} | undefined
        Iops?: {} | undefined
        StorageType?: {} | undefined
      }
    | undefined
  DBClusterInstanceClass?: {} | undefined
  StorageType?: {} | undefined
  Iops?: {} | undefined
  PubliclyAccessible?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  MonitoringInterval?: {} | undefined
  MonitoringRoleArn?: {} | undefined
  PerformanceInsightsEnabled?: {} | undefined
  PerformanceInsightsKMSKeyId?: {} | undefined
  PerformanceInsightsRetentionPeriod?: {} | undefined
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfigurationInfo | undefined
  NetworkType?: {} | undefined
  DBSystemId?: {} | undefined
  MasterUserSecret?:
    | { SecretArn?: {} | undefined; SecretStatus?: {} | undefined; KmsKeyId?: {} | undefined }
    | undefined
  IOOptimizedNextAllowedModificationTime?: {} | undefined
  LocalWriteForwardingStatus?: {} | undefined
}
type CreateDBClusterResult = { DBCluster?: DBCluster | undefined }
type ServerlessV2ScalingConfiguration = {
  MinCapacity?: {} | undefined
  MaxCapacity?: {} | undefined
}
type CreateDBClusterMessage = {
  AvailabilityZones?: {} | undefined
  BackupRetentionPeriod?: {} | undefined
  CharacterSetName?: {} | undefined
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
  BacktrackWindow?: {} | undefined
  EnableCloudwatchLogsExports?: {} | undefined
  EngineMode?: {} | undefined
  ScalingConfiguration?:
    | {
        MinCapacity?: {} | undefined
        MaxCapacity?: {} | undefined
        AutoPause?: {} | undefined
        SecondsUntilAutoPause?: {} | undefined
        TimeoutAction?: {} | undefined
        SecondsBeforeTimeout?: {} | undefined
      }
    | undefined
  DeletionProtection?: {} | undefined
  GlobalClusterIdentifier?: {} | undefined
  EnableHttpEndpoint?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  Domain?: {} | undefined
  DomainIAMRoleName?: {} | undefined
  EnableGlobalWriteForwarding?: {} | undefined
  DBClusterInstanceClass?: {} | undefined
  AllocatedStorage?: {} | undefined
  StorageType?: {} | undefined
  Iops?: {} | undefined
  PubliclyAccessible?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  MonitoringInterval?: {} | undefined
  MonitoringRoleArn?: {} | undefined
  EnablePerformanceInsights?: {} | undefined
  PerformanceInsightsKMSKeyId?: {} | undefined
  PerformanceInsightsRetentionPeriod?: {} | undefined
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined
  NetworkType?: {} | undefined
  DBSystemId?: {} | undefined
  ManageMasterUserPassword?: {} | undefined
  MasterUserSecretKmsKeyId?: {} | undefined
  EnableLocalWriteForwarding?: {} | undefined
  SourceRegion?: {} | undefined
}
type DBClusterEndpoint = {
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
  AutomaticRestartTime?: {} | undefined
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
        SupportedNetworkTypes?: {} | undefined
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
        PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports | undefined
        ProcessorFeatures?: {} | undefined
        IAMDatabaseAuthenticationEnabled?: {} | undefined
        AutomationMode?: {} | undefined
        ResumeFullAutomationModeTime?: {} | undefined
        StorageThroughput?: {} | undefined
        Engine?: {} | undefined
      }
    | undefined
  LatestRestorableTime?: {} | undefined
  MultiAZ?: {} | undefined
  EngineVersion?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  ReadReplicaSourceDBInstanceIdentifier?: {} | undefined
  ReadReplicaDBInstanceIdentifiers?: {} | undefined
  ReadReplicaDBClusterIdentifiers?: {} | undefined
  ReplicaMode?: {} | undefined
  LicenseModel?: {} | undefined
  Iops?: {} | undefined
  OptionGroupMemberships?: {} | undefined
  CharacterSetName?: {} | undefined
  NcharCharacterSetName?: {} | undefined
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
  PerformanceInsightsRetentionPeriod?: {} | undefined
  EnabledCloudwatchLogsExports?: {} | undefined
  ProcessorFeatures?: {} | undefined
  DeletionProtection?: {} | undefined
  AssociatedRoles?: {} | undefined
  ListenerEndpoint?:
    | { Address?: {} | undefined; Port?: {} | undefined; HostedZoneId?: {} | undefined }
    | undefined
  MaxAllocatedStorage?: {} | undefined
  TagList?: TagList | undefined
  DBInstanceAutomatedBackupsReplications?: {} | undefined
  CustomerOwnedIpEnabled?: {} | undefined
  AwsBackupRecoveryPointArn?: {} | undefined
  ActivityStreamStatus?: {} | undefined
  ActivityStreamKmsKeyId?: {} | undefined
  ActivityStreamKinesisStreamName?: {} | undefined
  ActivityStreamMode?: {} | undefined
  ActivityStreamEngineNativeAuditFieldsIncluded?: {} | undefined
  AutomationMode?: {} | undefined
  ResumeFullAutomationModeTime?: {} | undefined
  CustomIamInstanceProfile?: {} | undefined
  BackupTarget?: {} | undefined
  NetworkType?: {} | undefined
  ActivityStreamPolicyStatus?: {} | undefined
  StorageThroughput?: {} | undefined
  DBSystemId?: {} | undefined
  MasterUserSecret?:
    | { SecretArn?: {} | undefined; SecretStatus?: {} | undefined; KmsKeyId?: {} | undefined }
    | undefined
  CertificateDetails?: { CAIdentifier?: {} | undefined; ValidTill?: {} | undefined } | undefined
  ReadReplicaSourceDBClusterIdentifier?: {} | undefined
  PercentProgress?: {} | undefined
}
type CreateDBInstanceResult = { DBInstance?: DBInstance | undefined }
type CertificateNotFoundFault = { [x: string]: unknown }
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
  NcharCharacterSetName?: {} | undefined
  PubliclyAccessible?: {} | undefined
  Tags?: {} | undefined
  DBClusterIdentifier?: {} | undefined
  StorageType?: {} | undefined
  TdeCredentialArn?: {} | undefined
  TdeCredentialPassword?: {} | undefined
  StorageEncrypted?: {} | undefined
  KmsKeyId?: {} | undefined
  Domain?: {} | undefined
  DomainFqdn?: {} | undefined
  DomainOu?: {} | undefined
  DomainAuthSecretArn?: {} | undefined
  DomainDnsIps?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  MonitoringInterval?: {} | undefined
  MonitoringRoleArn?: {} | undefined
  DomainIAMRoleName?: {} | undefined
  PromotionTier?: {} | undefined
  Timezone?: {} | undefined
  EnableIAMDatabaseAuthentication?: {} | undefined
  EnablePerformanceInsights?: {} | undefined
  PerformanceInsightsKMSKeyId?: {} | undefined
  PerformanceInsightsRetentionPeriod?: {} | undefined
  EnableCloudwatchLogsExports?: {} | undefined
  ProcessorFeatures?: {} | undefined
  DeletionProtection?: {} | undefined
  MaxAllocatedStorage?: {} | undefined
  EnableCustomerOwnedIp?: {} | undefined
  CustomIamInstanceProfile?: {} | undefined
  BackupTarget?: {} | undefined
  NetworkType?: {} | undefined
  StorageThroughput?: {} | undefined
  ManageMasterUserPassword?: {} | undefined
  MasterUserSecretKmsKeyId?: {} | undefined
  CACertificateIdentifier?: {} | undefined
  DBSystemId?: {} | undefined
}
type CreateDBInstanceReadReplicaResult = { DBInstance?: DBInstance | undefined }
type DomainNotFoundFault = { [x: string]: unknown }
type NetworkTypeNotSupported = { [x: string]: unknown }
type CreateDBInstanceReadReplicaMessage = {
  DBInstanceIdentifier: {}
  SourceDBInstanceIdentifier?: {} | undefined
  DBInstanceClass?: {} | undefined
  AvailabilityZone?: {} | undefined
  Port?: {} | undefined
  MultiAZ?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  Iops?: {} | undefined
  OptionGroupName?: {} | undefined
  DBParameterGroupName?: {} | undefined
  PubliclyAccessible?: {} | undefined
  Tags?: TagList | undefined
  DBSubnetGroupName?: {} | undefined
  VpcSecurityGroupIds?: {} | undefined
  StorageType?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  MonitoringInterval?: {} | undefined
  MonitoringRoleArn?: {} | undefined
  KmsKeyId?: {} | undefined
  PreSignedUrl?: {} | undefined
  EnableIAMDatabaseAuthentication?: {} | undefined
  EnablePerformanceInsights?: {} | undefined
  PerformanceInsightsKMSKeyId?: {} | undefined
  PerformanceInsightsRetentionPeriod?: {} | undefined
  EnableCloudwatchLogsExports?: {} | undefined
  ProcessorFeatures?: {} | undefined
  UseDefaultProcessorFeatures?: {} | undefined
  DeletionProtection?: {} | undefined
  Domain?: {} | undefined
  DomainIAMRoleName?: {} | undefined
  DomainFqdn?: {} | undefined
  DomainOu?: {} | undefined
  DomainAuthSecretArn?: {} | undefined
  DomainDnsIps?: {} | undefined
  ReplicaMode?: {} | undefined
  MaxAllocatedStorage?: {} | undefined
  CustomIamInstanceProfile?: {} | undefined
  NetworkType?: {} | undefined
  StorageThroughput?: {} | undefined
  EnableCustomerOwnedIp?: {} | undefined
  AllocatedStorage?: {} | undefined
  SourceDBClusterIdentifier?: {} | undefined
  SourceRegion?: {} | undefined
}
type CreateDBParameterGroupResult = { DBParameterGroup?: DBParameterGroup | undefined }
type CreateDBParameterGroupMessage = {
  DBParameterGroupName: {}
  DBParameterGroupFamily: {}
  Description: {}
  Tags?: {} | undefined
}
type UserAuthConfig = {
  Description?: {} | undefined
  UserName?: {} | undefined
  AuthScheme?: {} | undefined
  SecretArn?: {} | undefined
  IAMAuth?: {} | undefined
  ClientPasswordAuthType?: {} | undefined
}
type CreateDBProxyResponse = {
  DBProxy?:
    | {
        DBProxyName?: {} | undefined
        DBProxyArn?: {} | undefined
        Status?: {} | undefined
        EngineFamily?: {} | undefined
        VpcId?: {} | undefined
        VpcSecurityGroupIds?: {} | undefined
        VpcSubnetIds?: {} | undefined
        Auth?: {} | undefined
        RoleArn?: {} | undefined
        Endpoint?: {} | undefined
        RequireTLS?: {} | undefined
        IdleClientTimeout?: {} | undefined
        DebugLogging?: {} | undefined
        CreatedDate?: {} | undefined
        UpdatedDate?: {} | undefined
      }
    | undefined
}
type CreateDBProxyRequest = {
  DBProxyName: {}
  EngineFamily: {}
  Auth: {}
  RoleArn: {}
  VpcSubnetIds: {}
  VpcSecurityGroupIds?: {} | undefined
  RequireTLS?: {} | undefined
  IdleClientTimeout?: {} | undefined
  DebugLogging?: {} | undefined
  Tags?: {} | undefined
}
type CreateDBProxyEndpointResponse = {
  DBProxyEndpoint?:
    | {
        DBProxyEndpointName?: {} | undefined
        DBProxyEndpointArn?: {} | undefined
        DBProxyName?: {} | undefined
        Status?: {} | undefined
        VpcId?: {} | undefined
        VpcSecurityGroupIds?: {} | undefined
        VpcSubnetIds?: {} | undefined
        Endpoint?: {} | undefined
        CreatedDate?: {} | undefined
        TargetRole?: {} | undefined
        IsDefault?: {} | undefined
      }
    | undefined
}
type CreateDBProxyEndpointRequest = {
  DBProxyName: {}
  DBProxyEndpointName: {}
  VpcSubnetIds: {}
  VpcSecurityGroupIds?: {} | undefined
  TargetRole?: {} | undefined
  Tags?: TagList | undefined
}
type CreateDBSecurityGroupResult = { DBSecurityGroup?: DBSecurityGroup | undefined }
type CreateDBSecurityGroupMessage = {
  DBSecurityGroupName: {}
  DBSecurityGroupDescription: {}
  Tags?: {} | undefined
}
type CreateDBSnapshotResult = { DBSnapshot?: DBSnapshot | undefined }
type CreateDBSnapshotMessage = {
  DBSnapshotIdentifier: {}
  DBInstanceIdentifier: {}
  Tags?: TagList | undefined
}
type DBSubnetGroup = {
  DBSubnetGroupName?: {} | undefined
  DBSubnetGroupDescription?: {} | undefined
  VpcId?: {} | undefined
  SubnetGroupStatus?: {} | undefined
  Subnets?: {} | undefined
  DBSubnetGroupArn?: {} | undefined
  SupportedNetworkTypes?: {} | undefined
}
type CreateDBSubnetGroupResult = { DBSubnetGroup?: DBSubnetGroup | undefined }
type CreateDBSubnetGroupMessage = {
  DBSubnetGroupName: {}
  DBSubnetGroupDescription: {}
  SubnetIds: {}
  Tags?: {} | undefined
}
type CreateEventSubscriptionResult = { EventSubscription?: EventSubscription | undefined }
type CreateEventSubscriptionMessage = {
  SubscriptionName: {}
  SnsTopicArn: {}
  SourceType?: {} | undefined
  EventCategories?: {} | undefined
  SourceIds?: {} | undefined
  Enabled?: {} | undefined
  Tags?: TagList | undefined
}
type GlobalCluster = {
  GlobalClusterIdentifier?: {} | undefined
  GlobalClusterResourceId?: {} | undefined
  GlobalClusterArn?: {} | undefined
  Status?: {} | undefined
  Engine?: {} | undefined
  EngineVersion?: {} | undefined
  DatabaseName?: {} | undefined
  StorageEncrypted?: {} | undefined
  DeletionProtection?: {} | undefined
  GlobalClusterMembers?: {} | undefined
  FailoverState?:
    | {
        Status?: {} | undefined
        FromDbClusterArn?: {} | undefined
        ToDbClusterArn?: {} | undefined
      }
    | undefined
}
type CreateGlobalClusterResult = { GlobalCluster?: GlobalCluster | undefined }
type CreateGlobalClusterMessage = {
  GlobalClusterIdentifier?: {} | undefined
  SourceDBClusterIdentifier?: {} | undefined
  Engine?: {} | undefined
  EngineVersion?: {} | undefined
  DeletionProtection?: {} | undefined
  DatabaseName?: {} | undefined
  StorageEncrypted?: {} | undefined
}
type CreateOptionGroupResult = { OptionGroup?: OptionGroup | undefined }
type CreateOptionGroupMessage = {
  OptionGroupName: {}
  EngineName: {}
  MajorEngineVersion: {}
  OptionGroupDescription: {}
  Tags?: {} | undefined
}
type DeleteBlueGreenDeploymentResponse = { BlueGreenDeployment?: BlueGreenDeployment | undefined }
type DeleteBlueGreenDeploymentRequest = {
  BlueGreenDeploymentIdentifier: {}
  DeleteTarget?: {} | undefined
}
type DeleteCustomDBEngineVersionMessage = { Engine: {}; EngineVersion: {} }
type DeleteDBClusterResult = { DBCluster?: DBCluster | undefined }
type DeleteDBClusterMessage = {
  DBClusterIdentifier: {}
  SkipFinalSnapshot?: {} | undefined
  FinalDBSnapshotIdentifier?: {} | undefined
  DeleteAutomatedBackups?: {} | undefined
}
type RestoreWindow = { EarliestTime?: {} | undefined; LatestTime?: {} | undefined }
type DBClusterAutomatedBackup = {
  Engine?: {} | undefined
  VpcId?: {} | undefined
  DBClusterAutomatedBackupsArn?: {} | undefined
  DBClusterIdentifier?: {} | undefined
  RestoreWindow?: RestoreWindow | undefined
  MasterUsername?: {} | undefined
  DbClusterResourceId?: {} | undefined
  Region?: {} | undefined
  LicenseModel?: {} | undefined
  Status?: {} | undefined
  IAMDatabaseAuthenticationEnabled?: {} | undefined
  ClusterCreateTime?: {} | undefined
  StorageEncrypted?: {} | undefined
  AllocatedStorage?: {} | undefined
  EngineVersion?: {} | undefined
  DBClusterArn?: {} | undefined
  BackupRetentionPeriod?: {} | undefined
  EngineMode?: {} | undefined
  AvailabilityZones?: {} | undefined
  Port?: {} | undefined
  KmsKeyId?: {} | undefined
  StorageType?: {} | undefined
  Iops?: {} | undefined
}
type DeleteDBClusterAutomatedBackupResult = {
  DBClusterAutomatedBackup?: DBClusterAutomatedBackup | undefined
}
type DeleteDBClusterAutomatedBackupMessage = { DbClusterResourceId: {} }
type DeleteDBClusterEndpointMessage = { DBClusterEndpointIdentifier: {} }
type DeleteDBClusterParameterGroupMessage = { DBClusterParameterGroupName: {} }
type DeleteDBClusterSnapshotResult = { DBClusterSnapshot?: DBClusterSnapshot | undefined }
type DeleteDBClusterSnapshotMessage = { DBClusterSnapshotIdentifier: {} }
type DeleteDBInstanceResult = { DBInstance?: DBInstance | undefined }
type DeleteDBInstanceMessage = {
  DBInstanceIdentifier: {}
  SkipFinalSnapshot?: {} | undefined
  FinalDBSnapshotIdentifier?: {} | undefined
  DeleteAutomatedBackups?: {} | undefined
}
type DBInstanceAutomatedBackup = {
  DBInstanceArn?: {} | undefined
  DbiResourceId?: {} | undefined
  Region?: {} | undefined
  DBInstanceIdentifier?: {} | undefined
  RestoreWindow?: { EarliestTime?: {} | undefined; LatestTime?: {} | undefined } | undefined
  AllocatedStorage?: {} | undefined
  Status?: {} | undefined
  Port?: {} | undefined
  AvailabilityZone?: {} | undefined
  VpcId?: {} | undefined
  InstanceCreateTime?: {} | undefined
  MasterUsername?: {} | undefined
  Engine?: {} | undefined
  EngineVersion?: {} | undefined
  LicenseModel?: {} | undefined
  Iops?: {} | undefined
  OptionGroupName?: {} | undefined
  TdeCredentialArn?: {} | undefined
  Encrypted?: {} | undefined
  StorageType?: {} | undefined
  KmsKeyId?: {} | undefined
  Timezone?: {} | undefined
  IAMDatabaseAuthenticationEnabled?: {} | undefined
  BackupRetentionPeriod?: {} | undefined
  DBInstanceAutomatedBackupsArn?: {} | undefined
  DBInstanceAutomatedBackupsReplications?: {} | undefined
  BackupTarget?: {} | undefined
  StorageThroughput?: {} | undefined
}
type DeleteDBInstanceAutomatedBackupResult = {
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup | undefined
}
type DeleteDBInstanceAutomatedBackupMessage = {
  DbiResourceId?: {} | undefined
  DBInstanceAutomatedBackupsArn?: {} | undefined
}
type DeleteDBParameterGroupMessage = { DBParameterGroupName: {} }
type DeleteDBProxyResponse = {
  DBProxy?:
    | {
        DBProxyName?: {} | undefined
        DBProxyArn?: {} | undefined
        Status?: {} | undefined
        EngineFamily?: {} | undefined
        VpcId?: {} | undefined
        VpcSecurityGroupIds?: {} | undefined
        VpcSubnetIds?: {} | undefined
        Auth?: {} | undefined
        RoleArn?: {} | undefined
        Endpoint?: {} | undefined
        RequireTLS?: {} | undefined
        IdleClientTimeout?: {} | undefined
        DebugLogging?: {} | undefined
        CreatedDate?: {} | undefined
        UpdatedDate?: {} | undefined
      }
    | undefined
}
type DeleteDBProxyRequest = { DBProxyName: {} }
type DeleteDBProxyEndpointResponse = {
  DBProxyEndpoint?:
    | {
        DBProxyEndpointName?: {} | undefined
        DBProxyEndpointArn?: {} | undefined
        DBProxyName?: {} | undefined
        Status?: {} | undefined
        VpcId?: {} | undefined
        VpcSecurityGroupIds?: {} | undefined
        VpcSubnetIds?: {} | undefined
        Endpoint?: {} | undefined
        CreatedDate?: {} | undefined
        TargetRole?: {} | undefined
        IsDefault?: {} | undefined
      }
    | undefined
}
type DeleteDBProxyEndpointRequest = { DBProxyEndpointName: {} }
type DeleteDBSecurityGroupMessage = { DBSecurityGroupName: {} }
type DeleteDBSnapshotResult = { DBSnapshot?: DBSnapshot | undefined }
type DeleteDBSnapshotMessage = { DBSnapshotIdentifier: {} }
type DeleteDBSubnetGroupMessage = { DBSubnetGroupName: {} }
type DeleteEventSubscriptionResult = { EventSubscription?: EventSubscription | undefined }
type DeleteEventSubscriptionMessage = { SubscriptionName: {} }
type DeleteGlobalClusterResult = { GlobalCluster?: GlobalCluster | undefined }
type DeleteGlobalClusterMessage = { GlobalClusterIdentifier: {} }
type DeleteOptionGroupMessage = { OptionGroupName: {} }
type DeregisterDBProxyTargetsResponse = { [x: string]: unknown }
type DeregisterDBProxyTargetsRequest = {
  DBProxyName: {}
  TargetGroupName?: {} | undefined
  DBInstanceIdentifiers?: {} | undefined
  DBClusterIdentifiers?: {} | undefined
}
type AccountAttributesMessage = { AccountQuotas?: {} | undefined }
type DescribeAccountAttributesMessage = { [x: string]: unknown }
type DescribeBlueGreenDeploymentsResponse = {
  BlueGreenDeployments?: {} | undefined
  Marker?: {} | undefined
}
type DescribeBlueGreenDeploymentsRequest = {
  BlueGreenDeploymentIdentifier?: {} | undefined
  Filters?: {} | undefined
  Marker?: {} | undefined
  MaxRecords?: {} | undefined
}
type CertificateMessage = { Certificates?: {} | undefined; Marker?: {} | undefined }
type DescribeCertificatesMessage = {
  CertificateIdentifier?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DBClusterAutomatedBackupMessage = {
  Marker?: {} | undefined
  DBClusterAutomatedBackups?: {} | undefined
}
type DescribeDBClusterAutomatedBackupsMessage = {
  DbClusterResourceId?: {} | undefined
  DBClusterIdentifier?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DBClusterBacktrackMessage = { Marker?: {} | undefined; DBClusterBacktracks?: {} | undefined }
type DescribeDBClusterBacktracksMessage = {
  DBClusterIdentifier: {}
  BacktrackIdentifier?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
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
  DbClusterResourceId?: {} | undefined
}
type DBClusterMessage = { Marker?: {} | undefined; DBClusters?: {} | undefined }
type DescribeDBClustersMessage = {
  DBClusterIdentifier?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  IncludeShared?: {} | undefined
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
  IncludeAll?: {} | undefined
}
type DBInstanceAutomatedBackupMessage = {
  Marker?: {} | undefined
  DBInstanceAutomatedBackups?: {} | undefined
}
type DescribeDBInstanceAutomatedBackupsMessage = {
  DbiResourceId?: {} | undefined
  DBInstanceIdentifier?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  DBInstanceAutomatedBackupsArn?: {} | undefined
}
type DBInstanceMessage = { Marker?: {} | undefined; DBInstances?: {} | undefined }
type DescribeDBInstancesMessage = {
  DBInstanceIdentifier?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeDBLogFilesResponse = { DescribeDBLogFiles?: {} | undefined; Marker?: {} | undefined }
type DescribeDBLogFilesMessage = {
  DBInstanceIdentifier: {}
  FilenameContains?: {} | undefined
  FileLastWritten?: {} | undefined
  FileSize?: {} | undefined
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
type DescribeDBProxiesResponse = { DBProxies?: {} | undefined; Marker?: {} | undefined }
type DescribeDBProxiesRequest = {
  DBProxyName?: {} | undefined
  Filters?: {} | undefined
  Marker?: {} | undefined
  MaxRecords?: {} | undefined
}
type DescribeDBProxyEndpointsResponse = {
  DBProxyEndpoints?: {} | undefined
  Marker?: {} | undefined
}
type DescribeDBProxyEndpointsRequest = {
  DBProxyName?: {} | undefined
  DBProxyEndpointName?: {} | undefined
  Filters?: {} | undefined
  Marker?: {} | undefined
  MaxRecords?: {} | undefined
}
type DescribeDBProxyTargetGroupsResponse = {
  TargetGroups?: {} | undefined
  Marker?: {} | undefined
}
type DescribeDBProxyTargetGroupsRequest = {
  DBProxyName: {}
  TargetGroupName?: {} | undefined
  Filters?: {} | undefined
  Marker?: {} | undefined
  MaxRecords?: {} | undefined
}
type DescribeDBProxyTargetsResponse = { Targets?: {} | undefined; Marker?: {} | undefined }
type DescribeDBProxyTargetsRequest = {
  DBProxyName: {}
  TargetGroupName?: {} | undefined
  Filters?: {} | undefined
  Marker?: {} | undefined
  MaxRecords?: {} | undefined
}
type DBSecurityGroupMessage = { Marker?: {} | undefined; DBSecurityGroups?: {} | undefined }
type DescribeDBSecurityGroupsMessage = {
  DBSecurityGroupName?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DBSnapshotAttributesResult = {
  DBSnapshotIdentifier?: {} | undefined
  DBSnapshotAttributes?: {} | undefined
}
type DescribeDBSnapshotAttributesResult = {
  DBSnapshotAttributesResult?: DBSnapshotAttributesResult | undefined
}
type DescribeDBSnapshotAttributesMessage = { DBSnapshotIdentifier: {} }
type DBSnapshotMessage = { Marker?: {} | undefined; DBSnapshots?: {} | undefined }
type DescribeDBSnapshotsMessage = {
  DBInstanceIdentifier?: {} | undefined
  DBSnapshotIdentifier?: {} | undefined
  SnapshotType?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  IncludeShared?: {} | undefined
  IncludePublic?: {} | undefined
  DbiResourceId?: {} | undefined
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
type ExportTasksMessage = { Marker?: {} | undefined; ExportTasks?: {} | undefined }
type DescribeExportTasksMessage = {
  ExportTaskIdentifier?: {} | undefined
  SourceArn?: {} | undefined
  Filters?: {} | undefined
  Marker?: {} | undefined
  MaxRecords?: {} | undefined
  SourceType?: {} | undefined
}
type GlobalClustersMessage = { Marker?: {} | undefined; GlobalClusters?: {} | undefined }
type DescribeGlobalClustersMessage = {
  GlobalClusterIdentifier?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type OptionGroupOptionsList = {
  Name?: {} | undefined
  Description?: {} | undefined
  EngineName?: {} | undefined
  MajorEngineVersion?: {} | undefined
  MinimumRequiredMinorEngineVersion?: {} | undefined
  PortRequired?: {} | undefined
  DefaultPort?: {} | undefined
  OptionsDependedOn?: {} | undefined
  OptionsConflictsWith?: {} | undefined
  Persistent?: {} | undefined
  Permanent?: {} | undefined
  RequiresAutoMinorEngineVersionUpgrade?: {} | undefined
  VpcOnly?: {} | undefined
  SupportsOptionVersionDowngrade?: {} | undefined
  OptionGroupOptionSettings?: {} | undefined
  OptionGroupOptionVersions?: {} | undefined
  CopyableCrossAccount?: {} | undefined
}[]
type OptionGroupOptionsMessage = {
  OptionGroupOptions?: OptionGroupOptionsList | undefined
  Marker?: {} | undefined
}
type DescribeOptionGroupOptionsMessage = {
  EngineName: {}
  MajorEngineVersion?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type OptionGroups = { OptionGroupsList?: {} | undefined; Marker?: {} | undefined }
type DescribeOptionGroupsMessage = {
  OptionGroupName?: {} | undefined
  Filters?: {} | undefined
  Marker?: {} | undefined
  MaxRecords?: {} | undefined
  EngineName?: {} | undefined
  MajorEngineVersion?: {} | undefined
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
  AvailabilityZoneGroup?: {} | undefined
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
type ReservedDBInstanceMessage = { Marker?: {} | undefined; ReservedDBInstances?: {} | undefined }
type DescribeReservedDBInstancesMessage = {
  ReservedDBInstanceId?: {} | undefined
  ReservedDBInstancesOfferingId?: {} | undefined
  DBInstanceClass?: {} | undefined
  Duration?: {} | undefined
  ProductDescription?: {} | undefined
  OfferingType?: {} | undefined
  MultiAZ?: {} | undefined
  LeaseId?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type ReservedDBInstancesOfferingMessage = {
  Marker?: {} | undefined
  ReservedDBInstancesOfferings?: {} | undefined
}
type DescribeReservedDBInstancesOfferingsMessage = {
  ReservedDBInstancesOfferingId?: {} | undefined
  DBInstanceClass?: {} | undefined
  Duration?: {} | undefined
  ProductDescription?: {} | undefined
  OfferingType?: {} | undefined
  MultiAZ?: {} | undefined
  Filters?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type SourceRegionMessage = { Marker?: {} | undefined; SourceRegions?: {} | undefined }
type DescribeSourceRegionsMessage = {
  RegionName?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  Filters?: {} | undefined
}
type ValidDBInstanceModificationsMessage = {
  Storage?: {} | undefined
  ValidProcessorFeatures?: {} | undefined
}
type DescribeValidDBInstanceModificationsResult = {
  ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage | undefined
}
type DescribeValidDBInstanceModificationsMessage = { DBInstanceIdentifier: {} }
type DownloadDBLogFilePortionDetails = {
  LogFileData?: {} | undefined
  Marker?: {} | undefined
  AdditionalDataPending?: {} | undefined
}
type DownloadDBLogFilePortionMessage = {
  DBInstanceIdentifier: {}
  LogFileName: {}
  Marker?: {} | undefined
  NumberOfLines?: {} | undefined
}
type FailoverDBClusterResult = { DBCluster?: DBCluster | undefined }
type FailoverDBClusterMessage = {
  DBClusterIdentifier: {}
  TargetDBInstanceIdentifier?: {} | undefined
}
type FailoverGlobalClusterResult = { GlobalCluster?: GlobalCluster | undefined }
type FailoverGlobalClusterMessage = { GlobalClusterIdentifier: {}; TargetDbClusterIdentifier: {} }
type TagListMessage = { TagList?: {} | undefined }
type ListTagsForResourceMessage = { ResourceName: {}; Filters?: {} | undefined }
type ModifyActivityStreamResponse = {
  KmsKeyId?: {} | undefined
  KinesisStreamName?: {} | undefined
  Status?: {} | undefined
  Mode?: {} | undefined
  EngineNativeAuditFieldsIncluded?: {} | undefined
  PolicyStatus?: {} | undefined
}
type ModifyActivityStreamRequest = {
  ResourceArn?: {} | undefined
  AuditPolicyState?: {} | undefined
}
type Certificate = {
  CertificateIdentifier?: {} | undefined
  CertificateType?: {} | undefined
  Thumbprint?: {} | undefined
  ValidFrom?: {} | undefined
  ValidTill?: {} | undefined
  CertificateArn?: {} | undefined
  CustomerOverride?: {} | undefined
  CustomerOverrideValidTill?: {} | undefined
}
type ModifyCertificatesResult = { Certificate?: Certificate | undefined }
type ModifyCertificatesMessage = {
  CertificateIdentifier?: {} | undefined
  RemoveCustomerOverride?: {} | undefined
}
type DBClusterCapacityInfo = {
  DBClusterIdentifier?: {} | undefined
  PendingCapacity?: {} | undefined
  CurrentCapacity?: {} | undefined
  SecondsBeforeTimeout?: {} | undefined
  TimeoutAction?: {} | undefined
}
type ModifyCurrentDBClusterCapacityMessage = {
  DBClusterIdentifier: {}
  Capacity?: {} | undefined
  SecondsBeforeTimeout?: {} | undefined
  TimeoutAction?: {} | undefined
}
type ModifyCustomDBEngineVersionMessage = {
  Engine: {}
  EngineVersion: {}
  Description?: {} | undefined
  Status?: {} | undefined
}
type ModifyDBClusterResult = { DBCluster?: DBCluster | undefined }
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
  BacktrackWindow?: {} | undefined
  CloudwatchLogsExportConfiguration?:
    | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
    | undefined
  EngineVersion?: {} | undefined
  AllowMajorVersionUpgrade?: {} | undefined
  DBInstanceParameterGroupName?: {} | undefined
  Domain?: {} | undefined
  DomainIAMRoleName?: {} | undefined
  ScalingConfiguration?:
    | {
        MinCapacity?: {} | undefined
        MaxCapacity?: {} | undefined
        AutoPause?: {} | undefined
        SecondsUntilAutoPause?: {} | undefined
        TimeoutAction?: {} | undefined
        SecondsBeforeTimeout?: {} | undefined
      }
    | undefined
  DeletionProtection?: {} | undefined
  EnableHttpEndpoint?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  EnableGlobalWriteForwarding?: {} | undefined
  DBClusterInstanceClass?: {} | undefined
  AllocatedStorage?: {} | undefined
  StorageType?: {} | undefined
  Iops?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  MonitoringInterval?: {} | undefined
  MonitoringRoleArn?: {} | undefined
  EnablePerformanceInsights?: {} | undefined
  PerformanceInsightsKMSKeyId?: {} | undefined
  PerformanceInsightsRetentionPeriod?: {} | undefined
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined
  NetworkType?: {} | undefined
  ManageMasterUserPassword?: {} | undefined
  RotateMasterUserPassword?: {} | undefined
  MasterUserSecretKmsKeyId?: {} | undefined
  EngineMode?: {} | undefined
  AllowEngineModeChange?: {} | undefined
  EnableLocalWriteForwarding?: {} | undefined
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
type ModifyDBClusterSnapshotAttributeMessage = {
  DBClusterSnapshotIdentifier: {}
  AttributeName: {}
  ValuesToAdd?: {} | undefined
  ValuesToRemove?: {} | undefined
}
type ModifyDBInstanceResult = { DBInstance?: DBInstance | undefined }
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
  DomainFqdn?: {} | undefined
  DomainOu?: {} | undefined
  DomainAuthSecretArn?: {} | undefined
  DomainDnsIps?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  MonitoringInterval?: {} | undefined
  DBPortNumber?: {} | undefined
  PubliclyAccessible?: {} | undefined
  MonitoringRoleArn?: {} | undefined
  DomainIAMRoleName?: {} | undefined
  DisableDomain?: {} | undefined
  PromotionTier?: {} | undefined
  EnableIAMDatabaseAuthentication?: {} | undefined
  EnablePerformanceInsights?: {} | undefined
  PerformanceInsightsKMSKeyId?: {} | undefined
  PerformanceInsightsRetentionPeriod?: {} | undefined
  CloudwatchLogsExportConfiguration?:
    | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
    | undefined
  ProcessorFeatures?: {} | undefined
  UseDefaultProcessorFeatures?: {} | undefined
  DeletionProtection?: {} | undefined
  MaxAllocatedStorage?: {} | undefined
  CertificateRotationRestart?: {} | undefined
  ReplicaMode?: {} | undefined
  EnableCustomerOwnedIp?: {} | undefined
  AwsBackupRecoveryPointArn?: {} | undefined
  AutomationMode?: {} | undefined
  ResumeFullAutomationModeMinutes?: {} | undefined
  NetworkType?: {} | undefined
  StorageThroughput?: {} | undefined
  ManageMasterUserPassword?: {} | undefined
  RotateMasterUserPassword?: {} | undefined
  MasterUserSecretKmsKeyId?: {} | undefined
  Engine?: {} | undefined
}
type DBParameterGroupNameMessage = { DBParameterGroupName?: {} | undefined }
type ModifyDBParameterGroupMessage = { DBParameterGroupName: {}; Parameters: {} }
type ModifyDBProxyResponse = {
  DBProxy?:
    | {
        DBProxyName?: {} | undefined
        DBProxyArn?: {} | undefined
        Status?: {} | undefined
        EngineFamily?: {} | undefined
        VpcId?: {} | undefined
        VpcSecurityGroupIds?: {} | undefined
        VpcSubnetIds?: {} | undefined
        Auth?: {} | undefined
        RoleArn?: {} | undefined
        Endpoint?: {} | undefined
        RequireTLS?: {} | undefined
        IdleClientTimeout?: {} | undefined
        DebugLogging?: {} | undefined
        CreatedDate?: {} | undefined
        UpdatedDate?: {} | undefined
      }
    | undefined
}
type ModifyDBProxyRequest = {
  DBProxyName: {}
  NewDBProxyName?: {} | undefined
  Auth?: {} | undefined
  RequireTLS?: {} | undefined
  IdleClientTimeout?: {} | undefined
  DebugLogging?: {} | undefined
  RoleArn?: {} | undefined
  SecurityGroups?: {} | undefined
}
type ModifyDBProxyEndpointResponse = {
  DBProxyEndpoint?:
    | {
        DBProxyEndpointName?: {} | undefined
        DBProxyEndpointArn?: {} | undefined
        DBProxyName?: {} | undefined
        Status?: {} | undefined
        VpcId?: {} | undefined
        VpcSecurityGroupIds?: {} | undefined
        VpcSubnetIds?: {} | undefined
        Endpoint?: {} | undefined
        CreatedDate?: {} | undefined
        TargetRole?: {} | undefined
        IsDefault?: {} | undefined
      }
    | undefined
}
type ModifyDBProxyEndpointRequest = {
  DBProxyEndpointName: {}
  NewDBProxyEndpointName?: {} | undefined
  VpcSecurityGroupIds?: {} | undefined
}
type ModifyDBProxyTargetGroupResponse = {
  DBProxyTargetGroup?:
    | {
        DBProxyName?: {} | undefined
        TargetGroupName?: {} | undefined
        TargetGroupArn?: {} | undefined
        IsDefault?: {} | undefined
        Status?: {} | undefined
        ConnectionPoolConfig?:
          | {
              MaxConnectionsPercent?: {} | undefined
              MaxIdleConnectionsPercent?: {} | undefined
              ConnectionBorrowTimeout?: {} | undefined
              SessionPinningFilters?: {} | undefined
              InitQuery?: {} | undefined
            }
          | undefined
        CreatedDate?: {} | undefined
        UpdatedDate?: {} | undefined
      }
    | undefined
}
type ModifyDBProxyTargetGroupRequest = {
  TargetGroupName: {}
  DBProxyName: {}
  ConnectionPoolConfig?:
    | {
        MaxConnectionsPercent?: {} | undefined
        MaxIdleConnectionsPercent?: {} | undefined
        ConnectionBorrowTimeout?: {} | undefined
        SessionPinningFilters?: {} | undefined
        InitQuery?: {} | undefined
      }
    | undefined
  NewName?: {} | undefined
}
type ModifyDBSnapshotResult = { DBSnapshot?: DBSnapshot | undefined }
type ModifyDBSnapshotMessage = {
  DBSnapshotIdentifier: {}
  EngineVersion?: {} | undefined
  OptionGroupName?: {} | undefined
}
type ModifyDBSnapshotAttributeResult = {
  DBSnapshotAttributesResult?: DBSnapshotAttributesResult | undefined
}
type ModifyDBSnapshotAttributeMessage = {
  DBSnapshotIdentifier: {}
  AttributeName: {}
  ValuesToAdd?: {} | undefined
  ValuesToRemove?: {} | undefined
}
type ModifyDBSubnetGroupResult = { DBSubnetGroup?: DBSubnetGroup | undefined }
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
  GlobalClusterIdentifier?: {} | undefined
  NewGlobalClusterIdentifier?: {} | undefined
  DeletionProtection?: {} | undefined
  EngineVersion?: {} | undefined
  AllowMajorVersionUpgrade?: {} | undefined
}
type ModifyOptionGroupResult = { OptionGroup?: OptionGroup | undefined }
type ModifyOptionGroupMessage = {
  OptionGroupName: {}
  OptionsToInclude?: {} | undefined
  OptionsToRemove?: {} | undefined
  ApplyImmediately?: {} | undefined
}
type PromoteReadReplicaResult = { DBInstance?: DBInstance | undefined }
type PromoteReadReplicaMessage = {
  DBInstanceIdentifier: {}
  BackupRetentionPeriod?: {} | undefined
  PreferredBackupWindow?: {} | undefined
}
type PromoteReadReplicaDBClusterResult = { DBCluster?: DBCluster | undefined }
type PromoteReadReplicaDBClusterMessage = { DBClusterIdentifier: {} }
type ReservedDBInstance = {
  ReservedDBInstanceId?: {} | undefined
  ReservedDBInstancesOfferingId?: {} | undefined
  DBInstanceClass?: {} | undefined
  StartTime?: {} | undefined
  Duration?: {} | undefined
  FixedPrice?: {} | undefined
  UsagePrice?: {} | undefined
  CurrencyCode?: {} | undefined
  DBInstanceCount?: {} | undefined
  ProductDescription?: {} | undefined
  OfferingType?: {} | undefined
  MultiAZ?: {} | undefined
  State?: {} | undefined
  RecurringCharges?: {} | undefined
  ReservedDBInstanceArn?: {} | undefined
  LeaseId?: {} | undefined
}
type PurchaseReservedDBInstancesOfferingResult = {
  ReservedDBInstance?: ReservedDBInstance | undefined
}
type PurchaseReservedDBInstancesOfferingMessage = {
  ReservedDBInstancesOfferingId: {}
  ReservedDBInstanceId?: {} | undefined
  DBInstanceCount?: {} | undefined
  Tags?: TagList | undefined
}
type RebootDBClusterResult = { DBCluster?: DBCluster | undefined }
type RebootDBClusterMessage = { DBClusterIdentifier: {} }
type RebootDBInstanceResult = { DBInstance?: DBInstance | undefined }
type RebootDBInstanceMessage = { DBInstanceIdentifier: {}; ForceFailover?: {} | undefined }
type RegisterDBProxyTargetsResponse = { DBProxyTargets?: {} | undefined }
type RegisterDBProxyTargetsRequest = {
  DBProxyName: {}
  TargetGroupName?: {} | undefined
  DBInstanceIdentifiers?: {} | undefined
  DBClusterIdentifiers?: {} | undefined
}
type RemoveFromGlobalClusterResult = { GlobalCluster?: GlobalCluster | undefined }
type RemoveFromGlobalClusterMessage = {
  GlobalClusterIdentifier?: {} | undefined
  DbClusterIdentifier?: {} | undefined
}
type RemoveRoleFromDBClusterMessage = {
  DBClusterIdentifier: {}
  RoleArn: {}
  FeatureName?: {} | undefined
}
type RemoveRoleFromDBInstanceMessage = { DBInstanceIdentifier: {}; RoleArn: {}; FeatureName: {} }
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
type RestoreDBClusterFromS3Result = { DBCluster?: DBCluster | undefined }
type RestoreDBClusterFromS3Message = {
  AvailabilityZones?: {} | undefined
  BackupRetentionPeriod?: {} | undefined
  CharacterSetName?: {} | undefined
  DatabaseName?: {} | undefined
  DBClusterIdentifier: {}
  DBClusterParameterGroupName?: {} | undefined
  VpcSecurityGroupIds?: {} | undefined
  DBSubnetGroupName?: {} | undefined
  Engine: {}
  EngineVersion?: {} | undefined
  Port?: {} | undefined
  MasterUsername: {}
  MasterUserPassword?: {} | undefined
  OptionGroupName?: {} | undefined
  PreferredBackupWindow?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  Tags?: TagList | undefined
  StorageEncrypted?: {} | undefined
  KmsKeyId?: {} | undefined
  EnableIAMDatabaseAuthentication?: {} | undefined
  SourceEngine: {}
  SourceEngineVersion: {}
  S3BucketName: {}
  S3Prefix?: {} | undefined
  S3IngestionRoleArn: {}
  BacktrackWindow?: {} | undefined
  EnableCloudwatchLogsExports?: {} | undefined
  DeletionProtection?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  Domain?: {} | undefined
  DomainIAMRoleName?: {} | undefined
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined
  NetworkType?: {} | undefined
  ManageMasterUserPassword?: {} | undefined
  MasterUserSecretKmsKeyId?: {} | undefined
  StorageType?: {} | undefined
}
type RestoreDBClusterFromSnapshotResult = { DBCluster?: DBCluster | undefined }
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
  BacktrackWindow?: {} | undefined
  EnableCloudwatchLogsExports?: {} | undefined
  EngineMode?: {} | undefined
  ScalingConfiguration?:
    | {
        MinCapacity?: {} | undefined
        MaxCapacity?: {} | undefined
        AutoPause?: {} | undefined
        SecondsUntilAutoPause?: {} | undefined
        TimeoutAction?: {} | undefined
        SecondsBeforeTimeout?: {} | undefined
      }
    | undefined
  DBClusterParameterGroupName?: {} | undefined
  DeletionProtection?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  Domain?: {} | undefined
  DomainIAMRoleName?: {} | undefined
  DBClusterInstanceClass?: {} | undefined
  StorageType?: {} | undefined
  Iops?: {} | undefined
  PubliclyAccessible?: {} | undefined
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined
  NetworkType?: {} | undefined
}
type RestoreDBClusterToPointInTimeResult = { DBCluster?: DBCluster | undefined }
type RestoreDBClusterToPointInTimeMessage = {
  DBClusterIdentifier: {}
  RestoreType?: {} | undefined
  SourceDBClusterIdentifier?: {} | undefined
  RestoreToTime?: {} | undefined
  UseLatestRestorableTime?: {} | undefined
  Port?: {} | undefined
  DBSubnetGroupName?: {} | undefined
  OptionGroupName?: {} | undefined
  VpcSecurityGroupIds?: {} | undefined
  Tags?: TagList | undefined
  KmsKeyId?: {} | undefined
  EnableIAMDatabaseAuthentication?: {} | undefined
  BacktrackWindow?: {} | undefined
  EnableCloudwatchLogsExports?: {} | undefined
  DBClusterParameterGroupName?: {} | undefined
  DeletionProtection?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  Domain?: {} | undefined
  DomainIAMRoleName?: {} | undefined
  ScalingConfiguration?:
    | {
        MinCapacity?: {} | undefined
        MaxCapacity?: {} | undefined
        AutoPause?: {} | undefined
        SecondsUntilAutoPause?: {} | undefined
        TimeoutAction?: {} | undefined
        SecondsBeforeTimeout?: {} | undefined
      }
    | undefined
  EngineMode?: {} | undefined
  DBClusterInstanceClass?: {} | undefined
  StorageType?: {} | undefined
  PubliclyAccessible?: {} | undefined
  Iops?: {} | undefined
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined
  NetworkType?: {} | undefined
  SourceDbClusterResourceId?: {} | undefined
}
type RestoreDBInstanceFromDBSnapshotResult = { DBInstance?: DBInstance | undefined }
type DBClusterSnapshotNotFoundFault = { [x: string]: unknown }
type RestoreDBInstanceFromDBSnapshotMessage = {
  DBInstanceIdentifier: {}
  DBSnapshotIdentifier?: {} | undefined
  DBInstanceClass?: {} | undefined
  Port?: {} | undefined
  AvailabilityZone?: {} | undefined
  DBSubnetGroupName?: {} | undefined
  MultiAZ?: {} | undefined
  PubliclyAccessible?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  LicenseModel?: {} | undefined
  DBName?: {} | undefined
  Engine?: {} | undefined
  Iops?: {} | undefined
  OptionGroupName?: {} | undefined
  Tags?: TagList | undefined
  StorageType?: {} | undefined
  TdeCredentialArn?: {} | undefined
  TdeCredentialPassword?: {} | undefined
  VpcSecurityGroupIds?: {} | undefined
  Domain?: {} | undefined
  DomainFqdn?: {} | undefined
  DomainOu?: {} | undefined
  DomainAuthSecretArn?: {} | undefined
  DomainDnsIps?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  DomainIAMRoleName?: {} | undefined
  EnableIAMDatabaseAuthentication?: {} | undefined
  EnableCloudwatchLogsExports?: {} | undefined
  ProcessorFeatures?: {} | undefined
  UseDefaultProcessorFeatures?: {} | undefined
  DBParameterGroupName?: {} | undefined
  DeletionProtection?: {} | undefined
  EnableCustomerOwnedIp?: {} | undefined
  CustomIamInstanceProfile?: {} | undefined
  BackupTarget?: {} | undefined
  NetworkType?: {} | undefined
  StorageThroughput?: {} | undefined
  DBClusterSnapshotIdentifier?: {} | undefined
  AllocatedStorage?: {} | undefined
}
type RestoreDBInstanceFromS3Result = { DBInstance?: DBInstance | undefined }
type RestoreDBInstanceFromS3Message = {
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
  PubliclyAccessible?: {} | undefined
  Tags?: {} | undefined
  StorageType?: {} | undefined
  StorageEncrypted?: {} | undefined
  KmsKeyId?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  MonitoringInterval?: {} | undefined
  MonitoringRoleArn?: {} | undefined
  EnableIAMDatabaseAuthentication?: {} | undefined
  SourceEngine: {}
  SourceEngineVersion: {}
  S3BucketName: {}
  S3Prefix?: {} | undefined
  S3IngestionRoleArn: {}
  EnablePerformanceInsights?: {} | undefined
  PerformanceInsightsKMSKeyId?: {} | undefined
  PerformanceInsightsRetentionPeriod?: {} | undefined
  EnableCloudwatchLogsExports?: {} | undefined
  ProcessorFeatures?: {} | undefined
  UseDefaultProcessorFeatures?: {} | undefined
  DeletionProtection?: {} | undefined
  MaxAllocatedStorage?: {} | undefined
  NetworkType?: {} | undefined
  StorageThroughput?: {} | undefined
  ManageMasterUserPassword?: {} | undefined
  MasterUserSecretKmsKeyId?: {} | undefined
}
type RestoreDBInstanceToPointInTimeResult = { DBInstance?: DBInstance | undefined }
type DBParameterGroupNotFoundFault = { [x: string]: unknown }
type DBInstanceAutomatedBackupNotFoundFault = { [x: string]: unknown }
type RestoreDBInstanceToPointInTimeMessage = {
  SourceDBInstanceIdentifier?: {} | undefined
  TargetDBInstanceIdentifier: {}
  RestoreTime?: {} | undefined
  UseLatestRestorableTime?: {} | undefined
  DBInstanceClass?: {} | undefined
  Port?: {} | undefined
  AvailabilityZone?: {} | undefined
  DBSubnetGroupName?: {} | undefined
  MultiAZ?: {} | undefined
  PubliclyAccessible?: {} | undefined
  AutoMinorVersionUpgrade?: {} | undefined
  LicenseModel?: {} | undefined
  DBName?: {} | undefined
  Engine?: {} | undefined
  Iops?: {} | undefined
  OptionGroupName?: {} | undefined
  CopyTagsToSnapshot?: {} | undefined
  Tags?: TagList | undefined
  StorageType?: {} | undefined
  TdeCredentialArn?: {} | undefined
  TdeCredentialPassword?: {} | undefined
  VpcSecurityGroupIds?: {} | undefined
  Domain?: {} | undefined
  DomainIAMRoleName?: {} | undefined
  DomainFqdn?: {} | undefined
  DomainOu?: {} | undefined
  DomainAuthSecretArn?: {} | undefined
  DomainDnsIps?: {} | undefined
  EnableIAMDatabaseAuthentication?: {} | undefined
  EnableCloudwatchLogsExports?: {} | undefined
  ProcessorFeatures?: {} | undefined
  UseDefaultProcessorFeatures?: {} | undefined
  DBParameterGroupName?: {} | undefined
  DeletionProtection?: {} | undefined
  SourceDbiResourceId?: {} | undefined
  MaxAllocatedStorage?: {} | undefined
  SourceDBInstanceAutomatedBackupsArn?: {} | undefined
  EnableCustomerOwnedIp?: {} | undefined
  CustomIamInstanceProfile?: {} | undefined
  BackupTarget?: {} | undefined
  NetworkType?: {} | undefined
  StorageThroughput?: {} | undefined
  AllocatedStorage?: {} | undefined
}
type RevokeDBSecurityGroupIngressResult = { DBSecurityGroup?: DBSecurityGroup | undefined }
type RevokeDBSecurityGroupIngressMessage = {
  DBSecurityGroupName: {}
  CIDRIP?: {} | undefined
  EC2SecurityGroupName?: {} | undefined
  EC2SecurityGroupId?: {} | undefined
  EC2SecurityGroupOwnerId?: {} | undefined
}
type StartActivityStreamResponse = {
  KmsKeyId?: {} | undefined
  KinesisStreamName?: {} | undefined
  Status?: {} | undefined
  Mode?: {} | undefined
  ApplyImmediately?: {} | undefined
  EngineNativeAuditFieldsIncluded?: {} | undefined
}
type StartActivityStreamRequest = {
  ResourceArn: {}
  Mode: {}
  KmsKeyId: {}
  ApplyImmediately?: {} | undefined
  EngineNativeAuditFieldsIncluded?: {} | undefined
}
type StartDBClusterResult = { DBCluster?: DBCluster | undefined }
type StartDBClusterMessage = { DBClusterIdentifier: {} }
type StartDBInstanceResult = { DBInstance?: DBInstance | undefined }
type StartDBInstanceMessage = { DBInstanceIdentifier: {} }
type StartDBInstanceAutomatedBackupsReplicationResult = {
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup | undefined
}
type StartDBInstanceAutomatedBackupsReplicationMessage = {
  SourceDBInstanceArn: {}
  BackupRetentionPeriod?: {} | undefined
  KmsKeyId?: {} | undefined
  PreSignedUrl?: {} | undefined
}
type StartExportTaskMessage = {
  ExportTaskIdentifier: {}
  SourceArn: {}
  S3BucketName: {}
  IamRoleArn: {}
  KmsKeyId: {}
  S3Prefix?: {} | undefined
  ExportOnly?: {} | undefined
}
type StopActivityStreamResponse = {
  KmsKeyId?: {} | undefined
  KinesisStreamName?: {} | undefined
  Status?: {} | undefined
}
type StopActivityStreamRequest = { ResourceArn: {}; ApplyImmediately?: {} | undefined }
type StopDBClusterResult = { DBCluster?: DBCluster | undefined }
type StopDBClusterMessage = { DBClusterIdentifier: {} }
type StopDBInstanceResult = { DBInstance?: DBInstance | undefined }
type StopDBInstanceMessage = { DBInstanceIdentifier: {}; DBSnapshotIdentifier?: {} | undefined }
type StopDBInstanceAutomatedBackupsReplicationResult = {
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup | undefined
}
type StopDBInstanceAutomatedBackupsReplicationMessage = { SourceDBInstanceArn: {} }
type SwitchoverBlueGreenDeploymentResponse = {
  BlueGreenDeployment?: BlueGreenDeployment | undefined
}
type SwitchoverBlueGreenDeploymentRequest = {
  BlueGreenDeploymentIdentifier: {}
  SwitchoverTimeout?: {} | undefined
}
type SwitchoverReadReplicaResult = { DBInstance?: DBInstance | undefined }
type SwitchoverReadReplicaMessage = { DBInstanceIdentifier: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Action=AddRoleToDBCluster': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=AddRoleToDBInstance': {
      $get: {
        input: {
          query: {
            DBInstanceIdentifier: string
            RoleArn: string
            FeatureName: string
            Action: 'AddRoleToDBInstance'
            Version: '2014-10-31'
          }
        } & {
          header: {
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
        input: { query: { Action: 'AddRoleToDBInstance'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddRoleToDBInstanceMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=AddSourceIdentifierToSubscription': {
      $get: {
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
      $post: {
        input: { query: { Action: 'AddSourceIdentifierToSubscription'; Version: '2014-10-31' } } & {
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
    }
  } & {
    '/#Action=AddTagsToResource': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=ApplyPendingMaintenanceAction': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=AuthorizeDBSecurityGroupIngress': {
      $get: {
        input: {
          query: {
            DBSecurityGroupName: string
            CIDRIP?: string | undefined
            EC2SecurityGroupName?: string | undefined
            EC2SecurityGroupId?: string | undefined
            EC2SecurityGroupOwnerId?: string | undefined
            Action: 'AuthorizeDBSecurityGroupIngress'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: AuthorizeDBSecurityGroupIngressResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'AuthorizeDBSecurityGroupIngress'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AuthorizeDBSecurityGroupIngressMessage }
        output: AuthorizeDBSecurityGroupIngressResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=BacktrackDBCluster': {
      $get: {
        input: {
          query: {
            DBClusterIdentifier: string
            BacktrackTo: string
            Force?: boolean | undefined
            UseEarliestTimeOnPointInTimeUnavailable?: boolean | undefined
            Action: 'BacktrackDBCluster'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DBClusterBacktrack
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'BacktrackDBCluster'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BacktrackDBClusterMessage }
        output: DBClusterBacktrack
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CancelExportTask': {
      $get: {
        input: {
          query: { ExportTaskIdentifier: string; Action: 'CancelExportTask'; Version: '2014-10-31' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ExportTask
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CancelExportTask'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelExportTaskMessage }
        output: ExportTask
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CopyDBClusterParameterGroup': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=CopyDBClusterSnapshot': {
      $get: {
        input: {
          query: {
            SourceDBClusterSnapshotIdentifier: string
            TargetDBClusterSnapshotIdentifier: string
            KmsKeyId?: string | undefined
            PreSignedUrl?: string | undefined
            CopyTags?: boolean | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            SourceRegion?: string | undefined
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
      $post: {
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
    }
  } & {
    '/#Action=CopyDBParameterGroup': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=CopyDBSnapshot': {
      $get: {
        input: {
          query: {
            SourceDBSnapshotIdentifier: string
            TargetDBSnapshotIdentifier: string
            KmsKeyId?: string | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            CopyTags?: boolean | undefined
            PreSignedUrl?: string | undefined
            OptionGroupName?: string | undefined
            TargetCustomAvailabilityZone?: string | undefined
            CopyOptionGroup?: boolean | undefined
            SourceRegion?: string | undefined
            Action: 'CopyDBSnapshot'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CopyDBSnapshotResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CopyDBSnapshot'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CopyDBSnapshotMessage }
        output: CopyDBSnapshotResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CopyOptionGroup': {
      $get: {
        input: {
          query: {
            SourceOptionGroupIdentifier: string
            TargetOptionGroupIdentifier: string
            TargetOptionGroupDescription: string
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CopyOptionGroup'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CopyOptionGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CopyOptionGroup'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CopyOptionGroupMessage }
        output: CopyOptionGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateBlueGreenDeployment': {
      $get: {
        input: {
          query: {
            BlueGreenDeploymentName: string
            Source: string
            TargetEngineVersion?: string | undefined
            TargetDBParameterGroupName?: string | undefined
            TargetDBClusterParameterGroupName?: string | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateBlueGreenDeployment'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateBlueGreenDeploymentResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateBlueGreenDeployment'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateBlueGreenDeploymentRequest }
        output: CreateBlueGreenDeploymentResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateCustomDBEngineVersion': {
      $get: {
        input: {
          query: {
            Engine: string
            EngineVersion: string
            DatabaseInstallationFilesS3BucketName?: string | undefined
            DatabaseInstallationFilesS3Prefix?: string | undefined
            ImageId?: string | undefined
            KMSKeyId?: string | undefined
            Description?: string | undefined
            Manifest?: string | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateCustomDBEngineVersion'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DBEngineVersion
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateCustomDBEngineVersion'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCustomDBEngineVersionMessage }
        output: DBEngineVersion
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateDBCluster': {
      $get: {
        input: {
          query: {
            AvailabilityZones?: {}[] | undefined
            BackupRetentionPeriod?: number | undefined
            CharacterSetName?: string | undefined
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
            BacktrackWindow?: number | undefined
            EnableCloudwatchLogsExports?: String[] | undefined
            EngineMode?: string | undefined
            ScalingConfiguration?:
              | {
                  MinCapacity?: {} | undefined
                  MaxCapacity?: {} | undefined
                  AutoPause?: {} | undefined
                  SecondsUntilAutoPause?: {} | undefined
                  TimeoutAction?: {} | undefined
                  SecondsBeforeTimeout?: {} | undefined
                }
              | undefined
            DeletionProtection?: boolean | undefined
            GlobalClusterIdentifier?: string | undefined
            EnableHttpEndpoint?: boolean | undefined
            CopyTagsToSnapshot?: boolean | undefined
            Domain?: string | undefined
            DomainIAMRoleName?: string | undefined
            EnableGlobalWriteForwarding?: boolean | undefined
            DBClusterInstanceClass?: string | undefined
            AllocatedStorage?: number | undefined
            StorageType?: string | undefined
            Iops?: number | undefined
            PubliclyAccessible?: boolean | undefined
            AutoMinorVersionUpgrade?: boolean | undefined
            MonitoringInterval?: number | undefined
            MonitoringRoleArn?: string | undefined
            EnablePerformanceInsights?: boolean | undefined
            PerformanceInsightsKMSKeyId?: string | undefined
            PerformanceInsightsRetentionPeriod?: number | undefined
            ServerlessV2ScalingConfiguration?:
              | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
              | undefined
            NetworkType?: string | undefined
            DBSystemId?: string | undefined
            ManageMasterUserPassword?: boolean | undefined
            MasterUserSecretKmsKeyId?: string | undefined
            EnableLocalWriteForwarding?: boolean | undefined
            SourceRegion?: string | undefined
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
      $post: {
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
    }
  } & {
    '/#Action=CreateDBClusterEndpoint': {
      $get: {
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
        output: DBClusterEndpoint
        outputFormat: 'text'
        status: 200
      }
      $post: {
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
        output: DBClusterEndpoint
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateDBClusterParameterGroup': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=CreateDBClusterSnapshot': {
      $get: {
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
      $post: {
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
                NcharCharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                DomainFqdn?: string | undefined
                DomainOu?: string | undefined
                DomainAuthSecretArn?: string | undefined
                DomainDnsIps?: String[] | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                PerformanceInsightsRetentionPeriod?: number | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                ProcessorFeatures?: { Name?: {} | undefined; Value?: {} | undefined }[] | undefined
                DeletionProtection?: boolean | undefined
                MaxAllocatedStorage?: number | undefined
                EnableCustomerOwnedIp?: boolean | undefined
                CustomIamInstanceProfile?: string | undefined
                BackupTarget?: string | undefined
                NetworkType?: string | undefined
                StorageThroughput?: number | undefined
                ManageMasterUserPassword?: boolean | undefined
                MasterUserSecretKmsKeyId?: string | undefined
                CACertificateIdentifier?: string | undefined
                DBSystemId?: string | undefined
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
                NcharCharacterSetName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBClusterIdentifier?: string | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                StorageEncrypted?: boolean | undefined
                KmsKeyId?: string | undefined
                Domain?: string | undefined
                DomainFqdn?: string | undefined
                DomainOu?: string | undefined
                DomainAuthSecretArn?: string | undefined
                DomainDnsIps?: String[] | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                DomainIAMRoleName?: string | undefined
                PromotionTier?: number | undefined
                Timezone?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                PerformanceInsightsRetentionPeriod?: number | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                ProcessorFeatures?: { Name?: {} | undefined; Value?: {} | undefined }[] | undefined
                DeletionProtection?: boolean | undefined
                MaxAllocatedStorage?: number | undefined
                EnableCustomerOwnedIp?: boolean | undefined
                CustomIamInstanceProfile?: string | undefined
                BackupTarget?: string | undefined
                NetworkType?: string | undefined
                StorageThroughput?: number | undefined
                ManageMasterUserPassword?: boolean | undefined
                MasterUserSecretKmsKeyId?: string | undefined
                CACertificateIdentifier?: string | undefined
                DBSystemId?: string | undefined
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
            output: CertificateNotFoundFault
            outputFormat: 'text'
            status: 500
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
            output: CertificateNotFoundFault
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/#Action=CreateDBInstanceReadReplica': {
      $get:
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                SourceDBInstanceIdentifier?: string | undefined
                DBInstanceClass?: string | undefined
                AvailabilityZone?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                DBParameterGroupName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBSubnetGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                StorageType?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                PerformanceInsightsRetentionPeriod?: number | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                ProcessorFeatures?: { Name?: {} | undefined; Value?: {} | undefined }[] | undefined
                UseDefaultProcessorFeatures?: boolean | undefined
                DeletionProtection?: boolean | undefined
                Domain?: string | undefined
                DomainIAMRoleName?: string | undefined
                DomainFqdn?: string | undefined
                DomainOu?: string | undefined
                DomainAuthSecretArn?: string | undefined
                DomainDnsIps?: String[] | undefined
                ReplicaMode?: 'open-read-only' | 'mounted' | undefined
                MaxAllocatedStorage?: number | undefined
                CustomIamInstanceProfile?: string | undefined
                NetworkType?: string | undefined
                StorageThroughput?: number | undefined
                EnableCustomerOwnedIp?: boolean | undefined
                AllocatedStorage?: number | undefined
                SourceDBClusterIdentifier?: string | undefined
                SourceRegion?: string | undefined
                Action: 'CreateDBInstanceReadReplica'
                Version: '2014-10-31'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CreateDBInstanceReadReplicaResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                SourceDBInstanceIdentifier?: string | undefined
                DBInstanceClass?: string | undefined
                AvailabilityZone?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                DBParameterGroupName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBSubnetGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                StorageType?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                PerformanceInsightsRetentionPeriod?: number | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                ProcessorFeatures?: { Name?: {} | undefined; Value?: {} | undefined }[] | undefined
                UseDefaultProcessorFeatures?: boolean | undefined
                DeletionProtection?: boolean | undefined
                Domain?: string | undefined
                DomainIAMRoleName?: string | undefined
                DomainFqdn?: string | undefined
                DomainOu?: string | undefined
                DomainAuthSecretArn?: string | undefined
                DomainDnsIps?: String[] | undefined
                ReplicaMode?: 'open-read-only' | 'mounted' | undefined
                MaxAllocatedStorage?: number | undefined
                CustomIamInstanceProfile?: string | undefined
                NetworkType?: string | undefined
                StorageThroughput?: number | undefined
                EnableCustomerOwnedIp?: boolean | undefined
                AllocatedStorage?: number | undefined
                SourceDBClusterIdentifier?: string | undefined
                SourceRegion?: string | undefined
                Action: 'CreateDBInstanceReadReplica'
                Version: '2014-10-31'
              }
            } & {
              header: {
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
            status: 500
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                SourceDBInstanceIdentifier?: string | undefined
                DBInstanceClass?: string | undefined
                AvailabilityZone?: string | undefined
                Port?: number | undefined
                MultiAZ?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                DBParameterGroupName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                DBSubnetGroupName?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                StorageType?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                MonitoringInterval?: number | undefined
                MonitoringRoleArn?: string | undefined
                KmsKeyId?: string | undefined
                PreSignedUrl?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnablePerformanceInsights?: boolean | undefined
                PerformanceInsightsKMSKeyId?: string | undefined
                PerformanceInsightsRetentionPeriod?: number | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                ProcessorFeatures?: { Name?: {} | undefined; Value?: {} | undefined }[] | undefined
                UseDefaultProcessorFeatures?: boolean | undefined
                DeletionProtection?: boolean | undefined
                Domain?: string | undefined
                DomainIAMRoleName?: string | undefined
                DomainFqdn?: string | undefined
                DomainOu?: string | undefined
                DomainAuthSecretArn?: string | undefined
                DomainDnsIps?: String[] | undefined
                ReplicaMode?: 'open-read-only' | 'mounted' | undefined
                MaxAllocatedStorage?: number | undefined
                CustomIamInstanceProfile?: string | undefined
                NetworkType?: string | undefined
                StorageThroughput?: number | undefined
                EnableCustomerOwnedIp?: boolean | undefined
                AllocatedStorage?: number | undefined
                SourceDBClusterIdentifier?: string | undefined
                SourceRegion?: string | undefined
                Action: 'CreateDBInstanceReadReplica'
                Version: '2014-10-31'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NetworkTypeNotSupported
            outputFormat: 'text'
            status: 501
          }
      $post:
        | {
            input: { query: { Action: 'CreateDBInstanceReadReplica'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceReadReplicaMessage }
            output: CreateDBInstanceReadReplicaResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateDBInstanceReadReplica'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceReadReplicaMessage }
            output: DomainNotFoundFault
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { Action: 'CreateDBInstanceReadReplica'; Version: '2014-10-31' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDBInstanceReadReplicaMessage }
            output: NetworkTypeNotSupported
            outputFormat: 'text'
            status: 501
          }
    }
  } & {
    '/#Action=CreateDBParameterGroup': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=CreateDBProxy': {
      $get: {
        input: {
          query: {
            DBProxyName: string
            EngineFamily: 'MYSQL' | 'POSTGRESQL' | 'SQLSERVER'
            Auth: UserAuthConfig[]
            RoleArn: string
            VpcSubnetIds: String[]
            VpcSecurityGroupIds?: String[] | undefined
            RequireTLS?: boolean | undefined
            IdleClientTimeout?: number | undefined
            DebugLogging?: boolean | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateDBProxy'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateDBProxyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateDBProxy'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDBProxyRequest }
        output: CreateDBProxyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateDBProxyEndpoint': {
      $get: {
        input: {
          query: {
            DBProxyName: string
            DBProxyEndpointName: string
            VpcSubnetIds: String[]
            VpcSecurityGroupIds?: String[] | undefined
            TargetRole?: 'READ_WRITE' | 'READ_ONLY' | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateDBProxyEndpoint'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateDBProxyEndpointResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateDBProxyEndpoint'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDBProxyEndpointRequest }
        output: CreateDBProxyEndpointResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateDBSecurityGroup': {
      $get: {
        input: {
          query: {
            DBSecurityGroupName: string
            DBSecurityGroupDescription: string
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateDBSecurityGroup'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateDBSecurityGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateDBSecurityGroup'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDBSecurityGroupMessage }
        output: CreateDBSecurityGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateDBSnapshot': {
      $get: {
        input: {
          query: {
            DBSnapshotIdentifier: string
            DBInstanceIdentifier: string
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateDBSnapshot'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateDBSnapshotResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateDBSnapshot'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDBSnapshotMessage }
        output: CreateDBSnapshotResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateDBSubnetGroup': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=CreateEventSubscription': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=CreateGlobalCluster': {
      $get: {
        input: {
          query: {
            GlobalClusterIdentifier?: string | undefined
            SourceDBClusterIdentifier?: string | undefined
            Engine?: string | undefined
            EngineVersion?: string | undefined
            DeletionProtection?: boolean | undefined
            DatabaseName?: string | undefined
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
      $post: {
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
    }
  } & {
    '/#Action=CreateOptionGroup': {
      $get: {
        input: {
          query: {
            OptionGroupName: string
            EngineName: string
            MajorEngineVersion: string
            OptionGroupDescription: string
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateOptionGroup'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateOptionGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateOptionGroup'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateOptionGroupMessage }
        output: CreateOptionGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteBlueGreenDeployment': {
      $get: {
        input: {
          query: {
            BlueGreenDeploymentIdentifier: string
            DeleteTarget?: boolean | undefined
            Action: 'DeleteBlueGreenDeployment'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteBlueGreenDeploymentResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteBlueGreenDeployment'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteBlueGreenDeploymentRequest }
        output: DeleteBlueGreenDeploymentResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteCustomDBEngineVersion': {
      $get: {
        input: {
          query: {
            Engine: string
            EngineVersion: string
            Action: 'DeleteCustomDBEngineVersion'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DBEngineVersion
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteCustomDBEngineVersion'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCustomDBEngineVersionMessage }
        output: DBEngineVersion
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteDBCluster': {
      $get: {
        input: {
          query: {
            DBClusterIdentifier: string
            SkipFinalSnapshot?: boolean | undefined
            FinalDBSnapshotIdentifier?: string | undefined
            DeleteAutomatedBackups?: boolean | undefined
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
      $post: {
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
    }
  } & {
    '/#Action=DeleteDBClusterAutomatedBackup': {
      $get: {
        input: {
          query: {
            DbClusterResourceId: string
            Action: 'DeleteDBClusterAutomatedBackup'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteDBClusterAutomatedBackupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteDBClusterAutomatedBackup'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDBClusterAutomatedBackupMessage }
        output: DeleteDBClusterAutomatedBackupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteDBClusterEndpoint': {
      $get: {
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
        output: DBClusterEndpoint
        outputFormat: 'text'
        status: 200
      }
      $post: {
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
        output: DBClusterEndpoint
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteDBClusterParameterGroup': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DeleteDBClusterSnapshot': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DeleteDBInstance': {
      $get: {
        input: {
          query: {
            DBInstanceIdentifier: string
            SkipFinalSnapshot?: boolean | undefined
            FinalDBSnapshotIdentifier?: string | undefined
            DeleteAutomatedBackups?: boolean | undefined
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
      $post: {
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
    }
  } & {
    '/#Action=DeleteDBInstanceAutomatedBackup': {
      $get: {
        input: {
          query: {
            DbiResourceId?: string | undefined
            DBInstanceAutomatedBackupsArn?: string | undefined
            Action: 'DeleteDBInstanceAutomatedBackup'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteDBInstanceAutomatedBackupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteDBInstanceAutomatedBackup'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDBInstanceAutomatedBackupMessage }
        output: DeleteDBInstanceAutomatedBackupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteDBParameterGroup': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DeleteDBProxy': {
      $get: {
        input: {
          query: { DBProxyName: string; Action: 'DeleteDBProxy'; Version: '2014-10-31' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteDBProxyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteDBProxy'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDBProxyRequest }
        output: DeleteDBProxyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteDBProxyEndpoint': {
      $get: {
        input: {
          query: {
            DBProxyEndpointName: string
            Action: 'DeleteDBProxyEndpoint'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteDBProxyEndpointResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteDBProxyEndpoint'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDBProxyEndpointRequest }
        output: DeleteDBProxyEndpointResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteDBSecurityGroup': {
      $get: {
        input: {
          query: {
            DBSecurityGroupName: string
            Action: 'DeleteDBSecurityGroup'
            Version: '2014-10-31'
          }
        } & {
          header: {
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
        input: { query: { Action: 'DeleteDBSecurityGroup'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDBSecurityGroupMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteDBSnapshot': {
      $get: {
        input: {
          query: { DBSnapshotIdentifier: string; Action: 'DeleteDBSnapshot'; Version: '2014-10-31' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteDBSnapshotResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteDBSnapshot'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDBSnapshotMessage }
        output: DeleteDBSnapshotResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteDBSubnetGroup': {
      $get: {
        input: {
          query: { DBSubnetGroupName: string; Action: 'DeleteDBSubnetGroup'; Version: '2014-10-31' }
        } & {
          header: {
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
    }
  } & {
    '/#Action=DeleteEventSubscription': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DeleteGlobalCluster': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DeleteOptionGroup': {
      $get: {
        input: {
          query: { OptionGroupName: string; Action: 'DeleteOptionGroup'; Version: '2014-10-31' }
        } & {
          header: {
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
        input: { query: { Action: 'DeleteOptionGroup'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteOptionGroupMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeregisterDBProxyTargets': {
      $get: {
        input: {
          query: {
            DBProxyName: string
            TargetGroupName?: string | undefined
            DBInstanceIdentifiers?: String[] | undefined
            DBClusterIdentifiers?: String[] | undefined
            Action: 'DeregisterDBProxyTargets'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeregisterDBProxyTargetsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeregisterDBProxyTargets'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterDBProxyTargetsRequest }
        output: DeregisterDBProxyTargetsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeAccountAttributes': {
      $get: {
        input: { query: { Action: 'DescribeAccountAttributes'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: AccountAttributesMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeAccountAttributes'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAccountAttributesMessage }
        output: AccountAttributesMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeBlueGreenDeployments': {
      $get: {
        input: {
          query: {
            BlueGreenDeploymentIdentifier?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            Marker?: string | undefined
            MaxRecords?: number | undefined
            Action: 'DescribeBlueGreenDeployments'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeBlueGreenDeploymentsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeBlueGreenDeployments'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeBlueGreenDeploymentsRequest }
        output: DescribeBlueGreenDeploymentsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeCertificates': {
      $get: {
        input: {
          query: {
            CertificateIdentifier?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeCertificates'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CertificateMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeCertificates'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCertificatesMessage }
        output: CertificateMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeDBClusterAutomatedBackups': {
      $get: {
        input: {
          query: {
            DbClusterResourceId?: string | undefined
            DBClusterIdentifier?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeDBClusterAutomatedBackups'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DBClusterAutomatedBackupMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeDBClusterAutomatedBackups'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDBClusterAutomatedBackupsMessage }
        output: DBClusterAutomatedBackupMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeDBClusterBacktracks': {
      $get: {
        input: {
          query: {
            DBClusterIdentifier: string
            BacktrackIdentifier?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeDBClusterBacktracks'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DBClusterBacktrackMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeDBClusterBacktracks'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDBClusterBacktracksMessage }
        output: DBClusterBacktrackMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeDBClusterEndpoints': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DescribeDBClusterParameterGroups': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DescribeDBClusterParameters': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DescribeDBClusterSnapshotAttributes': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DescribeDBClusterSnapshots': {
      $get: {
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
            DbClusterResourceId?: string | undefined
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
      $post: {
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
    }
  } & {
    '/#Action=DescribeDBClusters': {
      $get: {
        input: {
          query: {
            DBClusterIdentifier?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            IncludeShared?: boolean | undefined
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
      $post: {
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
            IncludeAll?: boolean | undefined
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
    '/#Action=DescribeDBInstanceAutomatedBackups': {
      $get: {
        input: {
          query: {
            DbiResourceId?: string | undefined
            DBInstanceIdentifier?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            DBInstanceAutomatedBackupsArn?: string | undefined
            Action: 'DescribeDBInstanceAutomatedBackups'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DBInstanceAutomatedBackupMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeDBInstanceAutomatedBackups'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDBInstanceAutomatedBackupsMessage }
        output: DBInstanceAutomatedBackupMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeDBInstances': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DescribeDBLogFiles': {
      $get: {
        input: {
          query: {
            DBInstanceIdentifier: string
            FilenameContains?: string | undefined
            FileLastWritten?: number | undefined
            FileSize?: number | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeDBLogFiles'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeDBLogFilesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeDBLogFiles'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDBLogFilesMessage }
        output: DescribeDBLogFilesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeDBParameterGroups': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DescribeDBParameters': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DescribeDBProxies': {
      $get: {
        input: {
          query: {
            DBProxyName?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            Marker?: string | undefined
            MaxRecords?: number | undefined
            Action: 'DescribeDBProxies'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeDBProxiesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeDBProxies'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDBProxiesRequest }
        output: DescribeDBProxiesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeDBProxyEndpoints': {
      $get: {
        input: {
          query: {
            DBProxyName?: string | undefined
            DBProxyEndpointName?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            Marker?: string | undefined
            MaxRecords?: number | undefined
            Action: 'DescribeDBProxyEndpoints'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeDBProxyEndpointsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeDBProxyEndpoints'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDBProxyEndpointsRequest }
        output: DescribeDBProxyEndpointsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeDBProxyTargetGroups': {
      $get: {
        input: {
          query: {
            DBProxyName: string
            TargetGroupName?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            Marker?: string | undefined
            MaxRecords?: number | undefined
            Action: 'DescribeDBProxyTargetGroups'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeDBProxyTargetGroupsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeDBProxyTargetGroups'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDBProxyTargetGroupsRequest }
        output: DescribeDBProxyTargetGroupsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeDBProxyTargets': {
      $get: {
        input: {
          query: {
            DBProxyName: string
            TargetGroupName?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            Marker?: string | undefined
            MaxRecords?: number | undefined
            Action: 'DescribeDBProxyTargets'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeDBProxyTargetsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeDBProxyTargets'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDBProxyTargetsRequest }
        output: DescribeDBProxyTargetsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeDBSecurityGroups': {
      $get: {
        input: {
          query: {
            DBSecurityGroupName?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeDBSecurityGroups'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DBSecurityGroupMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeDBSecurityGroups'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDBSecurityGroupsMessage }
        output: DBSecurityGroupMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeDBSnapshotAttributes': {
      $get: {
        input: {
          query: {
            DBSnapshotIdentifier: string
            Action: 'DescribeDBSnapshotAttributes'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeDBSnapshotAttributesResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeDBSnapshotAttributes'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDBSnapshotAttributesMessage }
        output: DescribeDBSnapshotAttributesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeDBSnapshots': {
      $get: {
        input: {
          query: {
            DBInstanceIdentifier?: string | undefined
            DBSnapshotIdentifier?: string | undefined
            SnapshotType?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            IncludeShared?: boolean | undefined
            IncludePublic?: boolean | undefined
            DbiResourceId?: string | undefined
            Action: 'DescribeDBSnapshots'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DBSnapshotMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeDBSnapshots'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDBSnapshotsMessage }
        output: DBSnapshotMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeDBSubnetGroups': {
      $get: {
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
      $post: {
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
      $get: {
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
      $post: {
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
              | 'custom-engine-version'
              | 'db-proxy'
              | 'blue-green-deployment'
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
    '/#Action=DescribeExportTasks': {
      $get: {
        input: {
          query: {
            ExportTaskIdentifier?: string | undefined
            SourceArn?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            Marker?: string | undefined
            MaxRecords?: number | undefined
            SourceType?: 'SNAPSHOT' | 'CLUSTER' | undefined
            Action: 'DescribeExportTasks'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ExportTasksMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeExportTasks'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeExportTasksMessage }
        output: ExportTasksMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeGlobalClusters': {
      $get: {
        input: {
          query: {
            GlobalClusterIdentifier?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
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
      $post: {
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
    }
  } & {
    '/#Action=DescribeOptionGroupOptions': {
      $get: {
        input: {
          query: {
            EngineName: string
            MajorEngineVersion?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeOptionGroupOptions'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: OptionGroupOptionsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeOptionGroupOptions'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeOptionGroupOptionsMessage }
        output: OptionGroupOptionsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeOptionGroups': {
      $get: {
        input: {
          query: {
            OptionGroupName?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            Marker?: string | undefined
            MaxRecords?: number | undefined
            EngineName?: string | undefined
            MajorEngineVersion?: string | undefined
            Action: 'DescribeOptionGroups'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: OptionGroups
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeOptionGroups'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeOptionGroupsMessage }
        output: OptionGroups
        outputFormat: 'text'
        status: 200
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
            AvailabilityZoneGroup?: string | undefined
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
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DescribeReservedDBInstances': {
      $get: {
        input: {
          query: {
            ReservedDBInstanceId?: string | undefined
            ReservedDBInstancesOfferingId?: string | undefined
            DBInstanceClass?: string | undefined
            Duration?: string | undefined
            ProductDescription?: string | undefined
            OfferingType?: string | undefined
            MultiAZ?: boolean | undefined
            LeaseId?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeReservedDBInstances'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ReservedDBInstanceMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeReservedDBInstances'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeReservedDBInstancesMessage }
        output: ReservedDBInstanceMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeReservedDBInstancesOfferings': {
      $get: {
        input: {
          query: {
            ReservedDBInstancesOfferingId?: string | undefined
            DBInstanceClass?: string | undefined
            Duration?: string | undefined
            ProductDescription?: string | undefined
            OfferingType?: string | undefined
            MultiAZ?: boolean | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeReservedDBInstancesOfferings'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ReservedDBInstancesOfferingMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeReservedDBInstancesOfferings'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeReservedDBInstancesOfferingsMessage }
        output: ReservedDBInstancesOfferingMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeSourceRegions': {
      $get: {
        input: {
          query: {
            RegionName?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            Action: 'DescribeSourceRegions'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: SourceRegionMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeSourceRegions'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSourceRegionsMessage }
        output: SourceRegionMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeValidDBInstanceModifications': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=DownloadDBLogFilePortion': {
      $get: {
        input: {
          query: {
            DBInstanceIdentifier: string
            LogFileName: string
            Marker?: string | undefined
            NumberOfLines?: number | undefined
            Action: 'DownloadDBLogFilePortion'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DownloadDBLogFilePortionDetails
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            NumberOfLines?: string | undefined
            Marker?: string | undefined
            Action: 'DownloadDBLogFilePortion'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DownloadDBLogFilePortionMessage }
        output: DownloadDBLogFilePortionDetails
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=FailoverDBCluster': {
      $get: {
        input: {
          query: {
            DBClusterIdentifier: string
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
      $post: {
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
    }
  } & {
    '/#Action=FailoverGlobalCluster': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=ListTagsForResource': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=ModifyActivityStream': {
      $get: {
        input: {
          query: {
            ResourceArn?: string | undefined
            AuditPolicyState?: 'locked' | 'unlocked' | undefined
            Action: 'ModifyActivityStream'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyActivityStreamResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyActivityStream'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyActivityStreamRequest }
        output: ModifyActivityStreamResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyCertificates': {
      $get: {
        input: {
          query: {
            CertificateIdentifier?: string | undefined
            RemoveCustomerOverride?: boolean | undefined
            Action: 'ModifyCertificates'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyCertificatesResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyCertificates'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyCertificatesMessage }
        output: ModifyCertificatesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyCurrentDBClusterCapacity': {
      $get: {
        input: {
          query: {
            DBClusterIdentifier: string
            Capacity?: number | undefined
            SecondsBeforeTimeout?: number | undefined
            TimeoutAction?: string | undefined
            Action: 'ModifyCurrentDBClusterCapacity'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DBClusterCapacityInfo
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyCurrentDBClusterCapacity'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyCurrentDBClusterCapacityMessage }
        output: DBClusterCapacityInfo
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyCustomDBEngineVersion': {
      $get: {
        input: {
          query: {
            Engine: string
            EngineVersion: string
            Description?: string | undefined
            Status?: 'available' | 'inactive' | 'inactive-except-restore' | undefined
            Action: 'ModifyCustomDBEngineVersion'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DBEngineVersion
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyCustomDBEngineVersion'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyCustomDBEngineVersionMessage }
        output: DBEngineVersion
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyDBCluster': {
      $get: {
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
            BacktrackWindow?: number | undefined
            CloudwatchLogsExportConfiguration?:
              | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
              | undefined
            EngineVersion?: string | undefined
            AllowMajorVersionUpgrade?: boolean | undefined
            DBInstanceParameterGroupName?: string | undefined
            Domain?: string | undefined
            DomainIAMRoleName?: string | undefined
            ScalingConfiguration?:
              | {
                  MinCapacity?: {} | undefined
                  MaxCapacity?: {} | undefined
                  AutoPause?: {} | undefined
                  SecondsUntilAutoPause?: {} | undefined
                  TimeoutAction?: {} | undefined
                  SecondsBeforeTimeout?: {} | undefined
                }
              | undefined
            DeletionProtection?: boolean | undefined
            EnableHttpEndpoint?: boolean | undefined
            CopyTagsToSnapshot?: boolean | undefined
            EnableGlobalWriteForwarding?: boolean | undefined
            DBClusterInstanceClass?: string | undefined
            AllocatedStorage?: number | undefined
            StorageType?: string | undefined
            Iops?: number | undefined
            AutoMinorVersionUpgrade?: boolean | undefined
            MonitoringInterval?: number | undefined
            MonitoringRoleArn?: string | undefined
            EnablePerformanceInsights?: boolean | undefined
            PerformanceInsightsKMSKeyId?: string | undefined
            PerformanceInsightsRetentionPeriod?: number | undefined
            ServerlessV2ScalingConfiguration?:
              | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
              | undefined
            NetworkType?: string | undefined
            ManageMasterUserPassword?: boolean | undefined
            RotateMasterUserPassword?: boolean | undefined
            MasterUserSecretKmsKeyId?: string | undefined
            EngineMode?: string | undefined
            AllowEngineModeChange?: boolean | undefined
            EnableLocalWriteForwarding?: boolean | undefined
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
      $post: {
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
    }
  } & {
    '/#Action=ModifyDBClusterEndpoint': {
      $get: {
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
        output: DBClusterEndpoint
        outputFormat: 'text'
        status: 200
      }
      $post: {
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
        output: DBClusterEndpoint
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyDBClusterParameterGroup': {
      $get: {
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
              SupportedEngineModes?: {} | undefined
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
      $post: {
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
    }
  } & {
    '/#Action=ModifyDBClusterSnapshotAttribute': {
      $get: {
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
      $post: {
        input: { query: { Action: 'ModifyDBClusterSnapshotAttribute'; Version: '2014-10-31' } } & {
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
    }
  } & {
    '/#Action=ModifyDBInstance': {
      $get: {
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
            DomainFqdn?: string | undefined
            DomainOu?: string | undefined
            DomainAuthSecretArn?: string | undefined
            DomainDnsIps?: String[] | undefined
            CopyTagsToSnapshot?: boolean | undefined
            MonitoringInterval?: number | undefined
            DBPortNumber?: number | undefined
            PubliclyAccessible?: boolean | undefined
            MonitoringRoleArn?: string | undefined
            DomainIAMRoleName?: string | undefined
            DisableDomain?: boolean | undefined
            PromotionTier?: number | undefined
            EnableIAMDatabaseAuthentication?: boolean | undefined
            EnablePerformanceInsights?: boolean | undefined
            PerformanceInsightsKMSKeyId?: string | undefined
            PerformanceInsightsRetentionPeriod?: number | undefined
            CloudwatchLogsExportConfiguration?:
              | { EnableLogTypes?: {} | undefined; DisableLogTypes?: {} | undefined }
              | undefined
            ProcessorFeatures?: { Name?: {} | undefined; Value?: {} | undefined }[] | undefined
            UseDefaultProcessorFeatures?: boolean | undefined
            DeletionProtection?: boolean | undefined
            MaxAllocatedStorage?: number | undefined
            CertificateRotationRestart?: boolean | undefined
            ReplicaMode?: 'open-read-only' | 'mounted' | undefined
            EnableCustomerOwnedIp?: boolean | undefined
            AwsBackupRecoveryPointArn?: string | undefined
            AutomationMode?: 'full' | 'all-paused' | undefined
            ResumeFullAutomationModeMinutes?: number | undefined
            NetworkType?: string | undefined
            StorageThroughput?: number | undefined
            ManageMasterUserPassword?: boolean | undefined
            RotateMasterUserPassword?: boolean | undefined
            MasterUserSecretKmsKeyId?: string | undefined
            Engine?: string | undefined
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
      $post: {
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
    }
  } & {
    '/#Action=ModifyDBParameterGroup': {
      $get: {
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
              SupportedEngineModes?: {} | undefined
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
      $post: {
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
    }
  } & {
    '/#Action=ModifyDBProxy': {
      $get: {
        input: {
          query: {
            DBProxyName: string
            NewDBProxyName?: string | undefined
            Auth?: UserAuthConfig[] | undefined
            RequireTLS?: boolean | undefined
            IdleClientTimeout?: number | undefined
            DebugLogging?: boolean | undefined
            RoleArn?: string | undefined
            SecurityGroups?: String[] | undefined
            Action: 'ModifyDBProxy'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyDBProxyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyDBProxy'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyDBProxyRequest }
        output: ModifyDBProxyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyDBProxyEndpoint': {
      $get: {
        input: {
          query: {
            DBProxyEndpointName: string
            NewDBProxyEndpointName?: string | undefined
            VpcSecurityGroupIds?: String[] | undefined
            Action: 'ModifyDBProxyEndpoint'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyDBProxyEndpointResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyDBProxyEndpoint'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyDBProxyEndpointRequest }
        output: ModifyDBProxyEndpointResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyDBProxyTargetGroup': {
      $get: {
        input: {
          query: {
            TargetGroupName: string
            DBProxyName: string
            ConnectionPoolConfig?:
              | {
                  MaxConnectionsPercent?: {} | undefined
                  MaxIdleConnectionsPercent?: {} | undefined
                  ConnectionBorrowTimeout?: {} | undefined
                  SessionPinningFilters?: {} | undefined
                  InitQuery?: {} | undefined
                }
              | undefined
            NewName?: string | undefined
            Action: 'ModifyDBProxyTargetGroup'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyDBProxyTargetGroupResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyDBProxyTargetGroup'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyDBProxyTargetGroupRequest }
        output: ModifyDBProxyTargetGroupResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyDBSnapshot': {
      $get: {
        input: {
          query: {
            DBSnapshotIdentifier: string
            EngineVersion?: string | undefined
            OptionGroupName?: string | undefined
            Action: 'ModifyDBSnapshot'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyDBSnapshotResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyDBSnapshot'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyDBSnapshotMessage }
        output: ModifyDBSnapshotResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyDBSnapshotAttribute': {
      $get: {
        input: {
          query: {
            DBSnapshotIdentifier: string
            AttributeName: string
            ValuesToAdd?: {}[] | undefined
            ValuesToRemove?: {}[] | undefined
            Action: 'ModifyDBSnapshotAttribute'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyDBSnapshotAttributeResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyDBSnapshotAttribute'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyDBSnapshotAttributeMessage }
        output: ModifyDBSnapshotAttributeResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyDBSubnetGroup': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=ModifyEventSubscription': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=ModifyGlobalCluster': {
      $get: {
        input: {
          query: {
            GlobalClusterIdentifier?: string | undefined
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
      $post: {
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
    }
  } & {
    '/#Action=ModifyOptionGroup': {
      $get: {
        input: {
          query: {
            OptionGroupName: string
            OptionsToInclude?:
              | {
                  OptionName: {}
                  Port?: {} | undefined
                  OptionVersion?: {} | undefined
                  DBSecurityGroupMemberships?: {} | undefined
                  VpcSecurityGroupMemberships?: {} | undefined
                  OptionSettings?: {} | undefined
                }[]
              | undefined
            OptionsToRemove?: String[] | undefined
            ApplyImmediately?: boolean | undefined
            Action: 'ModifyOptionGroup'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyOptionGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyOptionGroup'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyOptionGroupMessage }
        output: ModifyOptionGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=PromoteReadReplica': {
      $get: {
        input: {
          query: {
            DBInstanceIdentifier: string
            BackupRetentionPeriod?: number | undefined
            PreferredBackupWindow?: string | undefined
            Action: 'PromoteReadReplica'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: PromoteReadReplicaResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'PromoteReadReplica'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PromoteReadReplicaMessage }
        output: PromoteReadReplicaResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=PromoteReadReplicaDBCluster': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=PurchaseReservedDBInstancesOffering': {
      $get: {
        input: {
          query: {
            ReservedDBInstancesOfferingId: string
            ReservedDBInstanceId?: string | undefined
            DBInstanceCount?: number | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'PurchaseReservedDBInstancesOffering'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: PurchaseReservedDBInstancesOfferingResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'PurchaseReservedDBInstancesOffering'; Version: '2014-10-31' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PurchaseReservedDBInstancesOfferingMessage }
        output: PurchaseReservedDBInstancesOfferingResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RebootDBCluster': {
      $get: {
        input: {
          query: { DBClusterIdentifier: string; Action: 'RebootDBCluster'; Version: '2014-10-31' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RebootDBClusterResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RebootDBCluster'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RebootDBClusterMessage }
        output: RebootDBClusterResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RebootDBInstance': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=RegisterDBProxyTargets': {
      $get: {
        input: {
          query: {
            DBProxyName: string
            TargetGroupName?: string | undefined
            DBInstanceIdentifiers?: String[] | undefined
            DBClusterIdentifiers?: String[] | undefined
            Action: 'RegisterDBProxyTargets'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RegisterDBProxyTargetsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RegisterDBProxyTargets'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterDBProxyTargetsRequest }
        output: RegisterDBProxyTargetsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RemoveFromGlobalCluster': {
      $get: {
        input: {
          query: {
            GlobalClusterIdentifier?: string | undefined
            DbClusterIdentifier?: string | undefined
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
      $post: {
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
    }
  } & {
    '/#Action=RemoveRoleFromDBCluster': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=RemoveRoleFromDBInstance': {
      $get: {
        input: {
          query: {
            DBInstanceIdentifier: string
            RoleArn: string
            FeatureName: string
            Action: 'RemoveRoleFromDBInstance'
            Version: '2014-10-31'
          }
        } & {
          header: {
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
        input: { query: { Action: 'RemoveRoleFromDBInstance'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveRoleFromDBInstanceMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=RemoveSourceIdentifierFromSubscription': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=RemoveTagsFromResource': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=ResetDBClusterParameterGroup': {
      $get: {
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
                  SupportedEngineModes?: {} | undefined
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
      $post: {
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
    }
  } & {
    '/#Action=ResetDBParameterGroup': {
      $get: {
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
                  SupportedEngineModes?: {} | undefined
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
      $post: {
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
    }
  } & {
    '/#Action=RestoreDBClusterFromS3': {
      $get: {
        input: {
          query: {
            AvailabilityZones?: {}[] | undefined
            BackupRetentionPeriod?: number | undefined
            CharacterSetName?: string | undefined
            DatabaseName?: string | undefined
            DBClusterIdentifier: string
            DBClusterParameterGroupName?: string | undefined
            VpcSecurityGroupIds?: {}[] | undefined
            DBSubnetGroupName?: string | undefined
            Engine: string
            EngineVersion?: string | undefined
            Port?: number | undefined
            MasterUsername: string
            MasterUserPassword?: string | undefined
            OptionGroupName?: string | undefined
            PreferredBackupWindow?: string | undefined
            PreferredMaintenanceWindow?: string | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            StorageEncrypted?: boolean | undefined
            KmsKeyId?: string | undefined
            EnableIAMDatabaseAuthentication?: boolean | undefined
            SourceEngine: string
            SourceEngineVersion: string
            S3BucketName: string
            S3Prefix?: string | undefined
            S3IngestionRoleArn: string
            BacktrackWindow?: number | undefined
            EnableCloudwatchLogsExports?: String[] | undefined
            DeletionProtection?: boolean | undefined
            CopyTagsToSnapshot?: boolean | undefined
            Domain?: string | undefined
            DomainIAMRoleName?: string | undefined
            ServerlessV2ScalingConfiguration?:
              | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
              | undefined
            NetworkType?: string | undefined
            ManageMasterUserPassword?: boolean | undefined
            MasterUserSecretKmsKeyId?: string | undefined
            StorageType?: string | undefined
            Action: 'RestoreDBClusterFromS3'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RestoreDBClusterFromS3Result
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RestoreDBClusterFromS3'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RestoreDBClusterFromS3Message }
        output: RestoreDBClusterFromS3Result
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RestoreDBClusterFromSnapshot': {
      $get: {
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
            BacktrackWindow?: number | undefined
            EnableCloudwatchLogsExports?: String[] | undefined
            EngineMode?: string | undefined
            ScalingConfiguration?:
              | {
                  MinCapacity?: {} | undefined
                  MaxCapacity?: {} | undefined
                  AutoPause?: {} | undefined
                  SecondsUntilAutoPause?: {} | undefined
                  TimeoutAction?: {} | undefined
                  SecondsBeforeTimeout?: {} | undefined
                }
              | undefined
            DBClusterParameterGroupName?: string | undefined
            DeletionProtection?: boolean | undefined
            CopyTagsToSnapshot?: boolean | undefined
            Domain?: string | undefined
            DomainIAMRoleName?: string | undefined
            DBClusterInstanceClass?: string | undefined
            StorageType?: string | undefined
            Iops?: number | undefined
            PubliclyAccessible?: boolean | undefined
            ServerlessV2ScalingConfiguration?:
              | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
              | undefined
            NetworkType?: string | undefined
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
      $post: {
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
    }
  } & {
    '/#Action=RestoreDBClusterToPointInTime': {
      $get: {
        input: {
          query: {
            DBClusterIdentifier: string
            RestoreType?: string | undefined
            SourceDBClusterIdentifier?: string | undefined
            RestoreToTime?: string | undefined
            UseLatestRestorableTime?: boolean | undefined
            Port?: number | undefined
            DBSubnetGroupName?: string | undefined
            OptionGroupName?: string | undefined
            VpcSecurityGroupIds?: {}[] | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            KmsKeyId?: string | undefined
            EnableIAMDatabaseAuthentication?: boolean | undefined
            BacktrackWindow?: number | undefined
            EnableCloudwatchLogsExports?: String[] | undefined
            DBClusterParameterGroupName?: string | undefined
            DeletionProtection?: boolean | undefined
            CopyTagsToSnapshot?: boolean | undefined
            Domain?: string | undefined
            DomainIAMRoleName?: string | undefined
            ScalingConfiguration?:
              | {
                  MinCapacity?: {} | undefined
                  MaxCapacity?: {} | undefined
                  AutoPause?: {} | undefined
                  SecondsUntilAutoPause?: {} | undefined
                  TimeoutAction?: {} | undefined
                  SecondsBeforeTimeout?: {} | undefined
                }
              | undefined
            EngineMode?: string | undefined
            DBClusterInstanceClass?: string | undefined
            StorageType?: string | undefined
            PubliclyAccessible?: boolean | undefined
            Iops?: number | undefined
            ServerlessV2ScalingConfiguration?:
              | { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined }
              | undefined
            NetworkType?: string | undefined
            SourceDbClusterResourceId?: string | undefined
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
      $post: {
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
    }
  } & {
    '/#Action=RestoreDBInstanceFromDBSnapshot': {
      $get:
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                DBSnapshotIdentifier?: string | undefined
                DBInstanceClass?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                MultiAZ?: boolean | undefined
                PubliclyAccessible?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                DBName?: string | undefined
                Engine?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Domain?: string | undefined
                DomainFqdn?: string | undefined
                DomainOu?: string | undefined
                DomainAuthSecretArn?: string | undefined
                DomainDnsIps?: String[] | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DomainIAMRoleName?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                ProcessorFeatures?: { Name?: {} | undefined; Value?: {} | undefined }[] | undefined
                UseDefaultProcessorFeatures?: boolean | undefined
                DBParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                EnableCustomerOwnedIp?: boolean | undefined
                CustomIamInstanceProfile?: string | undefined
                BackupTarget?: string | undefined
                NetworkType?: string | undefined
                StorageThroughput?: number | undefined
                DBClusterSnapshotIdentifier?: string | undefined
                AllocatedStorage?: number | undefined
                Action: 'RestoreDBInstanceFromDBSnapshot'
                Version: '2014-10-31'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RestoreDBInstanceFromDBSnapshotResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                DBSnapshotIdentifier?: string | undefined
                DBInstanceClass?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                MultiAZ?: boolean | undefined
                PubliclyAccessible?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                DBName?: string | undefined
                Engine?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Domain?: string | undefined
                DomainFqdn?: string | undefined
                DomainOu?: string | undefined
                DomainAuthSecretArn?: string | undefined
                DomainDnsIps?: String[] | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DomainIAMRoleName?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                ProcessorFeatures?: { Name?: {} | undefined; Value?: {} | undefined }[] | undefined
                UseDefaultProcessorFeatures?: boolean | undefined
                DBParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                EnableCustomerOwnedIp?: boolean | undefined
                CustomIamInstanceProfile?: string | undefined
                BackupTarget?: string | undefined
                NetworkType?: string | undefined
                StorageThroughput?: number | undefined
                DBClusterSnapshotIdentifier?: string | undefined
                AllocatedStorage?: number | undefined
                Action: 'RestoreDBInstanceFromDBSnapshot'
                Version: '2014-10-31'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NetworkTypeNotSupported
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                DBInstanceIdentifier: string
                DBSnapshotIdentifier?: string | undefined
                DBInstanceClass?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                MultiAZ?: boolean | undefined
                PubliclyAccessible?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                DBName?: string | undefined
                Engine?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Domain?: string | undefined
                DomainFqdn?: string | undefined
                DomainOu?: string | undefined
                DomainAuthSecretArn?: string | undefined
                DomainDnsIps?: String[] | undefined
                CopyTagsToSnapshot?: boolean | undefined
                DomainIAMRoleName?: string | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                ProcessorFeatures?: { Name?: {} | undefined; Value?: {} | undefined }[] | undefined
                UseDefaultProcessorFeatures?: boolean | undefined
                DBParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                EnableCustomerOwnedIp?: boolean | undefined
                CustomIamInstanceProfile?: string | undefined
                BackupTarget?: string | undefined
                NetworkType?: string | undefined
                StorageThroughput?: number | undefined
                DBClusterSnapshotIdentifier?: string | undefined
                AllocatedStorage?: number | undefined
                Action: 'RestoreDBInstanceFromDBSnapshot'
                Version: '2014-10-31'
              }
            } & {
              header: {
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
            status: 501
          }
      $post:
        | {
            input: {
              query: { Action: 'RestoreDBInstanceFromDBSnapshot'; Version: '2014-10-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBInstanceFromDBSnapshotMessage }
            output: RestoreDBInstanceFromDBSnapshotResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'RestoreDBInstanceFromDBSnapshot'; Version: '2014-10-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBInstanceFromDBSnapshotMessage }
            output: NetworkTypeNotSupported
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: { Action: 'RestoreDBInstanceFromDBSnapshot'; Version: '2014-10-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBInstanceFromDBSnapshotMessage }
            output: DBClusterSnapshotNotFoundFault
            outputFormat: 'text'
            status: 501
          }
    }
  } & {
    '/#Action=RestoreDBInstanceFromS3': {
      $get: {
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
            PubliclyAccessible?: boolean | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            StorageType?: string | undefined
            StorageEncrypted?: boolean | undefined
            KmsKeyId?: string | undefined
            CopyTagsToSnapshot?: boolean | undefined
            MonitoringInterval?: number | undefined
            MonitoringRoleArn?: string | undefined
            EnableIAMDatabaseAuthentication?: boolean | undefined
            SourceEngine: string
            SourceEngineVersion: string
            S3BucketName: string
            S3Prefix?: string | undefined
            S3IngestionRoleArn: string
            EnablePerformanceInsights?: boolean | undefined
            PerformanceInsightsKMSKeyId?: string | undefined
            PerformanceInsightsRetentionPeriod?: number | undefined
            EnableCloudwatchLogsExports?: String[] | undefined
            ProcessorFeatures?: { Name?: {} | undefined; Value?: {} | undefined }[] | undefined
            UseDefaultProcessorFeatures?: boolean | undefined
            DeletionProtection?: boolean | undefined
            MaxAllocatedStorage?: number | undefined
            NetworkType?: string | undefined
            StorageThroughput?: number | undefined
            ManageMasterUserPassword?: boolean | undefined
            MasterUserSecretKmsKeyId?: string | undefined
            Action: 'RestoreDBInstanceFromS3'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RestoreDBInstanceFromS3Result
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RestoreDBInstanceFromS3'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RestoreDBInstanceFromS3Message }
        output: RestoreDBInstanceFromS3Result
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RestoreDBInstanceToPointInTime': {
      $get:
        | {
            input: {
              query: {
                SourceDBInstanceIdentifier?: string | undefined
                TargetDBInstanceIdentifier: string
                RestoreTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                DBInstanceClass?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                MultiAZ?: boolean | undefined
                PubliclyAccessible?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                DBName?: string | undefined
                Engine?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Domain?: string | undefined
                DomainIAMRoleName?: string | undefined
                DomainFqdn?: string | undefined
                DomainOu?: string | undefined
                DomainAuthSecretArn?: string | undefined
                DomainDnsIps?: String[] | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                ProcessorFeatures?: { Name?: {} | undefined; Value?: {} | undefined }[] | undefined
                UseDefaultProcessorFeatures?: boolean | undefined
                DBParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                SourceDbiResourceId?: string | undefined
                MaxAllocatedStorage?: number | undefined
                SourceDBInstanceAutomatedBackupsArn?: string | undefined
                EnableCustomerOwnedIp?: boolean | undefined
                CustomIamInstanceProfile?: string | undefined
                BackupTarget?: string | undefined
                NetworkType?: string | undefined
                StorageThroughput?: number | undefined
                AllocatedStorage?: number | undefined
                Action: 'RestoreDBInstanceToPointInTime'
                Version: '2014-10-31'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RestoreDBInstanceToPointInTimeResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                SourceDBInstanceIdentifier?: string | undefined
                TargetDBInstanceIdentifier: string
                RestoreTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                DBInstanceClass?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                MultiAZ?: boolean | undefined
                PubliclyAccessible?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                DBName?: string | undefined
                Engine?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Domain?: string | undefined
                DomainIAMRoleName?: string | undefined
                DomainFqdn?: string | undefined
                DomainOu?: string | undefined
                DomainAuthSecretArn?: string | undefined
                DomainDnsIps?: String[] | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                ProcessorFeatures?: { Name?: {} | undefined; Value?: {} | undefined }[] | undefined
                UseDefaultProcessorFeatures?: boolean | undefined
                DBParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                SourceDbiResourceId?: string | undefined
                MaxAllocatedStorage?: number | undefined
                SourceDBInstanceAutomatedBackupsArn?: string | undefined
                EnableCustomerOwnedIp?: boolean | undefined
                CustomIamInstanceProfile?: string | undefined
                BackupTarget?: string | undefined
                NetworkType?: string | undefined
                StorageThroughput?: number | undefined
                AllocatedStorage?: number | undefined
                Action: 'RestoreDBInstanceToPointInTime'
                Version: '2014-10-31'
              }
            } & {
              header: {
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
            status: 500
          }
        | {
            input: {
              query: {
                SourceDBInstanceIdentifier?: string | undefined
                TargetDBInstanceIdentifier: string
                RestoreTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                DBInstanceClass?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                MultiAZ?: boolean | undefined
                PubliclyAccessible?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                DBName?: string | undefined
                Engine?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Domain?: string | undefined
                DomainIAMRoleName?: string | undefined
                DomainFqdn?: string | undefined
                DomainOu?: string | undefined
                DomainAuthSecretArn?: string | undefined
                DomainDnsIps?: String[] | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                ProcessorFeatures?: { Name?: {} | undefined; Value?: {} | undefined }[] | undefined
                UseDefaultProcessorFeatures?: boolean | undefined
                DBParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                SourceDbiResourceId?: string | undefined
                MaxAllocatedStorage?: number | undefined
                SourceDBInstanceAutomatedBackupsArn?: string | undefined
                EnableCustomerOwnedIp?: boolean | undefined
                CustomIamInstanceProfile?: string | undefined
                BackupTarget?: string | undefined
                NetworkType?: string | undefined
                StorageThroughput?: number | undefined
                AllocatedStorage?: number | undefined
                Action: 'RestoreDBInstanceToPointInTime'
                Version: '2014-10-31'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DBInstanceAutomatedBackupNotFoundFault
            outputFormat: 'text'
            status: 501
          }
        | {
            input: {
              query: {
                SourceDBInstanceIdentifier?: string | undefined
                TargetDBInstanceIdentifier: string
                RestoreTime?: string | undefined
                UseLatestRestorableTime?: boolean | undefined
                DBInstanceClass?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                DBSubnetGroupName?: string | undefined
                MultiAZ?: boolean | undefined
                PubliclyAccessible?: boolean | undefined
                AutoMinorVersionUpgrade?: boolean | undefined
                LicenseModel?: string | undefined
                DBName?: string | undefined
                Engine?: string | undefined
                Iops?: number | undefined
                OptionGroupName?: string | undefined
                CopyTagsToSnapshot?: boolean | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                StorageType?: string | undefined
                TdeCredentialArn?: string | undefined
                TdeCredentialPassword?: string | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                Domain?: string | undefined
                DomainIAMRoleName?: string | undefined
                DomainFqdn?: string | undefined
                DomainOu?: string | undefined
                DomainAuthSecretArn?: string | undefined
                DomainDnsIps?: String[] | undefined
                EnableIAMDatabaseAuthentication?: boolean | undefined
                EnableCloudwatchLogsExports?: String[] | undefined
                ProcessorFeatures?: { Name?: {} | undefined; Value?: {} | undefined }[] | undefined
                UseDefaultProcessorFeatures?: boolean | undefined
                DBParameterGroupName?: string | undefined
                DeletionProtection?: boolean | undefined
                SourceDbiResourceId?: string | undefined
                MaxAllocatedStorage?: number | undefined
                SourceDBInstanceAutomatedBackupsArn?: string | undefined
                EnableCustomerOwnedIp?: boolean | undefined
                CustomIamInstanceProfile?: string | undefined
                BackupTarget?: string | undefined
                NetworkType?: string | undefined
                StorageThroughput?: number | undefined
                AllocatedStorage?: number | undefined
                Action: 'RestoreDBInstanceToPointInTime'
                Version: '2014-10-31'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NetworkTypeNotSupported
            outputFormat: 'text'
            status: 502
          }
      $post:
        | {
            input: {
              query: { Action: 'RestoreDBInstanceToPointInTime'; Version: '2014-10-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBInstanceToPointInTimeMessage }
            output: RestoreDBInstanceToPointInTimeResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'RestoreDBInstanceToPointInTime'; Version: '2014-10-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBInstanceToPointInTimeMessage }
            output: DBParameterGroupNotFoundFault
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: { Action: 'RestoreDBInstanceToPointInTime'; Version: '2014-10-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBInstanceToPointInTimeMessage }
            output: DBInstanceAutomatedBackupNotFoundFault
            outputFormat: 'text'
            status: 501
          }
        | {
            input: {
              query: { Action: 'RestoreDBInstanceToPointInTime'; Version: '2014-10-31' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreDBInstanceToPointInTimeMessage }
            output: NetworkTypeNotSupported
            outputFormat: 'text'
            status: 502
          }
    }
  } & {
    '/#Action=RevokeDBSecurityGroupIngress': {
      $get: {
        input: {
          query: {
            DBSecurityGroupName: string
            CIDRIP?: string | undefined
            EC2SecurityGroupName?: string | undefined
            EC2SecurityGroupId?: string | undefined
            EC2SecurityGroupOwnerId?: string | undefined
            Action: 'RevokeDBSecurityGroupIngress'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RevokeDBSecurityGroupIngressResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RevokeDBSecurityGroupIngress'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RevokeDBSecurityGroupIngressMessage }
        output: RevokeDBSecurityGroupIngressResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=StartActivityStream': {
      $get: {
        input: {
          query: {
            ResourceArn: string
            Mode: 'sync' | 'async'
            KmsKeyId: string
            ApplyImmediately?: boolean | undefined
            EngineNativeAuditFieldsIncluded?: boolean | undefined
            Action: 'StartActivityStream'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StartActivityStreamResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'StartActivityStream'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartActivityStreamRequest }
        output: StartActivityStreamResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=StartDBCluster': {
      $get: {
        input: {
          query: { DBClusterIdentifier: string; Action: 'StartDBCluster'; Version: '2014-10-31' }
        } & {
          header: {
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
      $post: {
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
    }
  } & {
    '/#Action=StartDBInstance': {
      $get: {
        input: {
          query: { DBInstanceIdentifier: string; Action: 'StartDBInstance'; Version: '2014-10-31' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StartDBInstanceResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'StartDBInstance'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartDBInstanceMessage }
        output: StartDBInstanceResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=StartDBInstanceAutomatedBackupsReplication': {
      $get: {
        input: {
          query: {
            SourceDBInstanceArn: string
            BackupRetentionPeriod?: number | undefined
            KmsKeyId?: string | undefined
            PreSignedUrl?: string | undefined
            Action: 'StartDBInstanceAutomatedBackupsReplication'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StartDBInstanceAutomatedBackupsReplicationResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'StartDBInstanceAutomatedBackupsReplication'; Version: '2014-10-31' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartDBInstanceAutomatedBackupsReplicationMessage }
        output: StartDBInstanceAutomatedBackupsReplicationResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=StartExportTask': {
      $get: {
        input: {
          query: {
            ExportTaskIdentifier: string
            SourceArn: string
            S3BucketName: string
            IamRoleArn: string
            KmsKeyId: string
            S3Prefix?: string | undefined
            ExportOnly?: String[] | undefined
            Action: 'StartExportTask'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ExportTask
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'StartExportTask'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartExportTaskMessage }
        output: ExportTask
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=StopActivityStream': {
      $get: {
        input: {
          query: {
            ResourceArn: string
            ApplyImmediately?: boolean | undefined
            Action: 'StopActivityStream'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StopActivityStreamResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'StopActivityStream'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopActivityStreamRequest }
        output: StopActivityStreamResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=StopDBCluster': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Action=StopDBInstance': {
      $get: {
        input: {
          query: {
            DBInstanceIdentifier: string
            DBSnapshotIdentifier?: string | undefined
            Action: 'StopDBInstance'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StopDBInstanceResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'StopDBInstance'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopDBInstanceMessage }
        output: StopDBInstanceResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=StopDBInstanceAutomatedBackupsReplication': {
      $get: {
        input: {
          query: {
            SourceDBInstanceArn: string
            Action: 'StopDBInstanceAutomatedBackupsReplication'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StopDBInstanceAutomatedBackupsReplicationResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'StopDBInstanceAutomatedBackupsReplication'; Version: '2014-10-31' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopDBInstanceAutomatedBackupsReplicationMessage }
        output: StopDBInstanceAutomatedBackupsReplicationResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=SwitchoverBlueGreenDeployment': {
      $get: {
        input: {
          query: {
            BlueGreenDeploymentIdentifier: string
            SwitchoverTimeout?: number | undefined
            Action: 'SwitchoverBlueGreenDeployment'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: SwitchoverBlueGreenDeploymentResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'SwitchoverBlueGreenDeployment'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SwitchoverBlueGreenDeploymentRequest }
        output: SwitchoverBlueGreenDeploymentResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=SwitchoverReadReplica': {
      $get: {
        input: {
          query: {
            DBInstanceIdentifier: string
            Action: 'SwitchoverReadReplica'
            Version: '2014-10-31'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: SwitchoverReadReplicaResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'SwitchoverReadReplica'; Version: '2014-10-31' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SwitchoverReadReplicaMessage }
        output: SwitchoverReadReplicaResult
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
