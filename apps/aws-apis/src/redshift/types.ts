type AcceptReservedNodeExchangeOutputMessage = {
  ExchangedReservedNode?:
    | {
        ReservedNodeId?: {} | undefined
        ReservedNodeOfferingId?: {} | undefined
        NodeType?: {} | undefined
        StartTime?: {} | undefined
        Duration?: {} | undefined
        FixedPrice?: {} | undefined
        UsagePrice?: {} | undefined
        CurrencyCode?: {} | undefined
        NodeCount?: {} | undefined
        State?: {} | undefined
        OfferingType?: {} | undefined
        RecurringCharges?: {} | undefined
        ReservedNodeOfferingType?: {} | undefined
      }
    | undefined
}
type AcceptReservedNodeExchangeInputMessage = {
  ReservedNodeId: {}
  TargetReservedNodeOfferingId: {}
}
type PartnerIntegrationOutputMessage = {
  DatabaseName?: {} | undefined
  PartnerName?: {} | undefined
}
type PartnerIntegrationInputMessage = {
  AccountId: {}
  ClusterIdentifier: {}
  DatabaseName: {}
  PartnerName: {}
}
type DataShare = {
  DataShareArn?: {} | undefined
  ProducerArn?: {} | undefined
  AllowPubliclyAccessibleConsumers?: {} | undefined
  DataShareAssociations?: {} | undefined
  ManagedBy?: {} | undefined
}
type AssociateDataShareConsumerMessage = {
  DataShareArn: {}
  AssociateEntireAccount?: {} | undefined
  ConsumerArn?: {} | undefined
  ConsumerRegion?: {} | undefined
}
type ClusterSecurityGroup = {
  ClusterSecurityGroupName?: {} | undefined
  Description?: {} | undefined
  EC2SecurityGroups?: {} | undefined
  IPRanges?: {} | undefined
  Tags?: {} | undefined
}
type AuthorizeClusterSecurityGroupIngressResult = {
  ClusterSecurityGroup?: ClusterSecurityGroup | undefined
}
type AuthorizeClusterSecurityGroupIngressMessage = {
  ClusterSecurityGroupName: {}
  CIDRIP?: {} | undefined
  EC2SecurityGroupName?: {} | undefined
  EC2SecurityGroupOwnerId?: {} | undefined
}
type AuthorizeDataShareMessage = { DataShareArn: {}; ConsumerIdentifier: {} }
type EndpointAuthorization = {
  Grantor?: {} | undefined
  Grantee?: {} | undefined
  ClusterIdentifier?: {} | undefined
  AuthorizeTime?: {} | undefined
  ClusterStatus?: {} | undefined
  Status?: {} | undefined
  AllowedAllVPCs?: {} | undefined
  AllowedVPCs?: {} | undefined
  EndpointCount?: {} | undefined
}
type AuthorizeEndpointAccessMessage = {
  ClusterIdentifier?: {} | undefined
  Account: {}
  VpcIds?: {} | undefined
}
type Snapshot = {
  SnapshotIdentifier?: {} | undefined
  ClusterIdentifier?: {} | undefined
  SnapshotCreateTime?: {} | undefined
  Status?: {} | undefined
  Port?: {} | undefined
  AvailabilityZone?: {} | undefined
  ClusterCreateTime?: {} | undefined
  MasterUsername?: {} | undefined
  ClusterVersion?: {} | undefined
  EngineFullVersion?: {} | undefined
  SnapshotType?: {} | undefined
  NodeType?: {} | undefined
  NumberOfNodes?: {} | undefined
  DBName?: {} | undefined
  VpcId?: {} | undefined
  Encrypted?: {} | undefined
  KmsKeyId?: {} | undefined
  EncryptedWithHSM?: {} | undefined
  AccountsWithRestoreAccess?: {} | undefined
  OwnerAccount?: {} | undefined
  TotalBackupSizeInMegaBytes?: {} | undefined
  ActualIncrementalBackupSizeInMegaBytes?: {} | undefined
  BackupProgressInMegaBytes?: {} | undefined
  CurrentBackupRateInMegaBytesPerSecond?: {} | undefined
  EstimatedSecondsToCompletion?: {} | undefined
  ElapsedTimeInSeconds?: {} | undefined
  SourceRegion?: {} | undefined
  Tags?: {} | undefined
  RestorableNodeTypes?: {} | undefined
  EnhancedVpcRouting?: {} | undefined
  MaintenanceTrackName?: {} | undefined
  ManualSnapshotRetentionPeriod?: {} | undefined
  ManualSnapshotRemainingDays?: {} | undefined
  SnapshotRetentionStartTime?: {} | undefined
}
type AuthorizeSnapshotAccessResult = { Snapshot?: Snapshot | undefined }
type AuthorizeSnapshotAccessMessage = {
  SnapshotIdentifier?: {} | undefined
  SnapshotArn?: {} | undefined
  SnapshotClusterIdentifier?: {} | undefined
  AccountWithRestoreAccess: {}
}
type BatchDeleteClusterSnapshotsResult = { Resources?: {} | undefined; Errors?: {} | undefined }
type BatchDeleteClusterSnapshotsRequest = { Identifiers: {} }
type BatchModifyClusterSnapshotsOutputMessage = {
  Resources?: {} | undefined
  Errors?: {} | undefined
}
type BatchModifyClusterSnapshotsMessage = {
  SnapshotIdentifierList: {}
  ManualSnapshotRetentionPeriod?: {} | undefined
  Force?: {} | undefined
}
type ResizeProgressMessage = {
  TargetNodeType?: {} | undefined
  TargetNumberOfNodes?: {} | undefined
  TargetClusterType?: {} | undefined
  Status?: {} | undefined
  ImportTablesCompleted?: {} | undefined
  ImportTablesInProgress?: {} | undefined
  ImportTablesNotStarted?: {} | undefined
  AvgResizeRateInMegaBytesPerSecond?: {} | undefined
  TotalResizeDataInMegaBytes?: {} | undefined
  ProgressInMegaBytes?: {} | undefined
  ElapsedTimeInSeconds?: {} | undefined
  EstimatedTimeToCompletionInSeconds?: {} | undefined
  ResizeType?: {} | undefined
  Message?: {} | undefined
  TargetEncryptionType?: {} | undefined
  DataTransferProgressPercent?: {} | undefined
}
type CancelResizeMessage = { ClusterIdentifier: {} }
type CopyClusterSnapshotResult = { Snapshot?: Snapshot | undefined }
type CopyClusterSnapshotMessage = {
  SourceSnapshotIdentifier: {}
  SourceSnapshotClusterIdentifier?: {} | undefined
  TargetSnapshotIdentifier: {}
  ManualSnapshotRetentionPeriod?: {} | undefined
}
type CreateAuthenticationProfileResult = {
  AuthenticationProfileName?: {} | undefined
  AuthenticationProfileContent?: {} | undefined
}
type CreateAuthenticationProfileMessage = {
  AuthenticationProfileName: {}
  AuthenticationProfileContent: {}
}
type Cluster = {
  ClusterIdentifier?: {} | undefined
  NodeType?: {} | undefined
  ClusterStatus?: {} | undefined
  ClusterAvailabilityStatus?: {} | undefined
  ModifyStatus?: {} | undefined
  MasterUsername?: {} | undefined
  DBName?: {} | undefined
  Endpoint?:
    | { Address?: {} | undefined; Port?: {} | undefined; VpcEndpoints?: {} | undefined }
    | undefined
  ClusterCreateTime?: {} | undefined
  AutomatedSnapshotRetentionPeriod?: {} | undefined
  ManualSnapshotRetentionPeriod?: {} | undefined
  ClusterSecurityGroups?: {} | undefined
  VpcSecurityGroups?: {} | undefined
  ClusterParameterGroups?: {} | undefined
  ClusterSubnetGroupName?: {} | undefined
  VpcId?: {} | undefined
  AvailabilityZone?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  PendingModifiedValues?:
    | {
        MasterUserPassword?: {} | undefined
        NodeType?: {} | undefined
        NumberOfNodes?: {} | undefined
        ClusterType?: {} | undefined
        ClusterVersion?: {} | undefined
        AutomatedSnapshotRetentionPeriod?: {} | undefined
        ClusterIdentifier?: {} | undefined
        PubliclyAccessible?: {} | undefined
        EnhancedVpcRouting?: {} | undefined
        MaintenanceTrackName?: {} | undefined
        EncryptionType?: {} | undefined
      }
    | undefined
  ClusterVersion?: {} | undefined
  AllowVersionUpgrade?: {} | undefined
  NumberOfNodes?: {} | undefined
  PubliclyAccessible?: {} | undefined
  Encrypted?: {} | undefined
  RestoreStatus?:
    | {
        Status?: {} | undefined
        CurrentRestoreRateInMegaBytesPerSecond?: {} | undefined
        SnapshotSizeInMegaBytes?: {} | undefined
        ProgressInMegaBytes?: {} | undefined
        ElapsedTimeInSeconds?: {} | undefined
        EstimatedTimeToCompletionInSeconds?: {} | undefined
      }
    | undefined
  DataTransferProgress?:
    | {
        Status?: {} | undefined
        CurrentRateInMegaBytesPerSecond?: {} | undefined
        TotalDataInMegaBytes?: {} | undefined
        DataTransferredInMegaBytes?: {} | undefined
        EstimatedTimeToCompletionInSeconds?: {} | undefined
        ElapsedTimeInSeconds?: {} | undefined
      }
    | undefined
  HsmStatus?:
    | {
        HsmClientCertificateIdentifier?: {} | undefined
        HsmConfigurationIdentifier?: {} | undefined
        Status?: {} | undefined
      }
    | undefined
  ClusterSnapshotCopyStatus?:
    | {
        DestinationRegion?: {} | undefined
        RetentionPeriod?: {} | undefined
        ManualSnapshotRetentionPeriod?: {} | undefined
        SnapshotCopyGrantName?: {} | undefined
      }
    | undefined
  ClusterPublicKey?: {} | undefined
  ClusterNodes?: {} | undefined
  ElasticIpStatus?: { ElasticIp?: {} | undefined; Status?: {} | undefined } | undefined
  ClusterRevisionNumber?: {} | undefined
  Tags?: {} | undefined
  KmsKeyId?: {} | undefined
  EnhancedVpcRouting?: {} | undefined
  IamRoles?: {} | undefined
  PendingActions?: {} | undefined
  MaintenanceTrackName?: {} | undefined
  ElasticResizeNumberOfNodeOptions?: {} | undefined
  DeferredMaintenanceWindows?: {} | undefined
  SnapshotScheduleIdentifier?: {} | undefined
  SnapshotScheduleState?: {} | undefined
  ExpectedNextSnapshotScheduleTime?: {} | undefined
  ExpectedNextSnapshotScheduleTimeStatus?: {} | undefined
  NextMaintenanceWindowStartTime?: {} | undefined
  ResizeInfo?: { ResizeType?: {} | undefined; AllowCancelResize?: {} | undefined } | undefined
  AvailabilityZoneRelocationStatus?: {} | undefined
  ClusterNamespaceArn?: {} | undefined
  TotalStorageCapacityInMegaBytes?: {} | undefined
  AquaConfiguration?:
    | { AquaStatus?: {} | undefined; AquaConfigurationStatus?: {} | undefined }
    | undefined
  DefaultIamRoleArn?: {} | undefined
  ReservedNodeExchangeStatus?:
    | {
        ReservedNodeExchangeRequestId?: {} | undefined
        Status?: {} | undefined
        RequestTime?: {} | undefined
        SourceReservedNodeId?: {} | undefined
        SourceReservedNodeType?: {} | undefined
        SourceReservedNodeCount?: {} | undefined
        TargetReservedNodeOfferingId?: {} | undefined
        TargetReservedNodeType?: {} | undefined
        TargetReservedNodeCount?: {} | undefined
      }
    | undefined
}
type CreateClusterResult = { Cluster?: Cluster | undefined }
type SnapshotScheduleNotFoundFault = { [x: string]: unknown }
type InvalidRetentionPeriodFault = { [x: string]: unknown }
type CreateClusterMessage = {
  DBName?: {} | undefined
  ClusterIdentifier: {}
  ClusterType?: {} | undefined
  NodeType: {}
  MasterUsername: {}
  MasterUserPassword: {}
  ClusterSecurityGroups?: {} | undefined
  VpcSecurityGroupIds?: {} | undefined
  ClusterSubnetGroupName?: {} | undefined
  AvailabilityZone?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  ClusterParameterGroupName?: {} | undefined
  AutomatedSnapshotRetentionPeriod?: {} | undefined
  ManualSnapshotRetentionPeriod?: {} | undefined
  Port?: {} | undefined
  ClusterVersion?: {} | undefined
  AllowVersionUpgrade?: {} | undefined
  NumberOfNodes?: {} | undefined
  PubliclyAccessible?: {} | undefined
  Encrypted?: {} | undefined
  HsmClientCertificateIdentifier?: {} | undefined
  HsmConfigurationIdentifier?: {} | undefined
  ElasticIp?: {} | undefined
  Tags?: {} | undefined
  KmsKeyId?: {} | undefined
  EnhancedVpcRouting?: {} | undefined
  AdditionalInfo?: {} | undefined
  IamRoles?: {} | undefined
  MaintenanceTrackName?: {} | undefined
  SnapshotScheduleIdentifier?: {} | undefined
  AvailabilityZoneRelocation?: {} | undefined
  AquaConfigurationStatus?: {} | undefined
  DefaultIamRoleArn?: {} | undefined
  LoadSampleData?: {} | undefined
}
type ClusterParameterGroup = {
  ParameterGroupName?: {} | undefined
  ParameterGroupFamily?: {} | undefined
  Description?: {} | undefined
  Tags?: {} | undefined
}
type CreateClusterParameterGroupResult = {
  ClusterParameterGroup?: ClusterParameterGroup | undefined
}
type CreateClusterParameterGroupMessage = {
  ParameterGroupName: {}
  ParameterGroupFamily: {}
  Description: {}
  Tags?: {} | undefined
}
type CreateClusterSecurityGroupResult = { ClusterSecurityGroup?: ClusterSecurityGroup | undefined }
type CreateClusterSecurityGroupMessage = {
  ClusterSecurityGroupName: {}
  Description: {}
  Tags?: {} | undefined
}
type CreateClusterSnapshotResult = { Snapshot?: Snapshot | undefined }
type CreateClusterSnapshotMessage = {
  SnapshotIdentifier: {}
  ClusterIdentifier: {}
  ManualSnapshotRetentionPeriod?: {} | undefined
  Tags?: {} | undefined
}
type ClusterSubnetGroup = {
  ClusterSubnetGroupName?: {} | undefined
  Description?: {} | undefined
  VpcId?: {} | undefined
  SubnetGroupStatus?: {} | undefined
  Subnets?: {} | undefined
  Tags?: {} | undefined
}
type CreateClusterSubnetGroupResult = { ClusterSubnetGroup?: ClusterSubnetGroup | undefined }
type CreateClusterSubnetGroupMessage = {
  ClusterSubnetGroupName: {}
  Description: {}
  SubnetIds: {}
  Tags?: {} | undefined
}
type VpcEndpoint = {
  VpcEndpointId?: {} | undefined
  VpcId?: {} | undefined
  NetworkInterfaces?: {} | undefined
}
type EndpointAccess = {
  ClusterIdentifier?: {} | undefined
  ResourceOwner?: {} | undefined
  SubnetGroupName?: {} | undefined
  EndpointStatus?: {} | undefined
  EndpointName?: {} | undefined
  EndpointCreateTime?: {} | undefined
  Port?: {} | undefined
  Address?: {} | undefined
  VpcSecurityGroups?: {} | undefined
  VpcEndpoint?: VpcEndpoint | undefined
}
type CreateEndpointAccessMessage = {
  ClusterIdentifier?: {} | undefined
  ResourceOwner?: {} | undefined
  EndpointName: {}
  SubnetGroupName: {}
  VpcSecurityGroupIds?: {} | undefined
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
  Severity?: {} | undefined
  Enabled?: {} | undefined
  Tags?: {} | undefined
}
type CreateEventSubscriptionResult = { EventSubscription?: EventSubscription | undefined }
type CreateEventSubscriptionMessage = {
  SubscriptionName: {}
  SnsTopicArn: {}
  SourceType?: {} | undefined
  SourceIds?: {} | undefined
  EventCategories?: {} | undefined
  Severity?: {} | undefined
  Enabled?: {} | undefined
  Tags?: {} | undefined
}
type HsmClientCertificate = {
  HsmClientCertificateIdentifier?: {} | undefined
  HsmClientCertificatePublicKey?: {} | undefined
  Tags?: {} | undefined
}
type CreateHsmClientCertificateResult = { HsmClientCertificate?: HsmClientCertificate | undefined }
type CreateHsmClientCertificateMessage = {
  HsmClientCertificateIdentifier: {}
  Tags?: {} | undefined
}
type HsmConfiguration = {
  HsmConfigurationIdentifier?: {} | undefined
  Description?: {} | undefined
  HsmIpAddress?: {} | undefined
  HsmPartitionName?: {} | undefined
  Tags?: {} | undefined
}
type CreateHsmConfigurationResult = { HsmConfiguration?: HsmConfiguration | undefined }
type CreateHsmConfigurationMessage = {
  HsmConfigurationIdentifier: {}
  Description: {}
  HsmIpAddress: {}
  HsmPartitionName: {}
  HsmPartitionPassword: {}
  HsmServerPublicCertificate: {}
  Tags?: {} | undefined
}
type ScheduledAction = {
  ScheduledActionName?: {} | undefined
  TargetAction?:
    | {
        ResizeCluster?:
          | {
              ClusterIdentifier: {}
              ClusterType?: {} | undefined
              NodeType?: {} | undefined
              NumberOfNodes?: {} | undefined
              Classic?: {} | undefined
              ReservedNodeId?: {} | undefined
              TargetReservedNodeOfferingId?: {} | undefined
            }
          | undefined
        PauseCluster?: { ClusterIdentifier: {} } | undefined
        ResumeCluster?: { ClusterIdentifier: {} } | undefined
      }
    | undefined
  Schedule?: {} | undefined
  IamRole?: {} | undefined
  ScheduledActionDescription?: {} | undefined
  State?: {} | undefined
  NextInvocations?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
}
type CreateScheduledActionMessage = {
  ScheduledActionName: {}
  TargetAction: {
    ResizeCluster?:
      | {
          ClusterIdentifier: {}
          ClusterType?: {} | undefined
          NodeType?: {} | undefined
          NumberOfNodes?: {} | undefined
          Classic?: {} | undefined
          ReservedNodeId?: {} | undefined
          TargetReservedNodeOfferingId?: {} | undefined
        }
      | undefined
    PauseCluster?: { ClusterIdentifier: {} } | undefined
    ResumeCluster?: { ClusterIdentifier: {} } | undefined
  }
  Schedule: {}
  IamRole: {}
  ScheduledActionDescription?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  Enable?: {} | undefined
}
type SnapshotCopyGrant = {
  SnapshotCopyGrantName?: {} | undefined
  KmsKeyId?: {} | undefined
  Tags?: {} | undefined
}
type CreateSnapshotCopyGrantResult = { SnapshotCopyGrant?: SnapshotCopyGrant | undefined }
type CreateSnapshotCopyGrantMessage = {
  SnapshotCopyGrantName: {}
  KmsKeyId?: {} | undefined
  Tags?: {} | undefined
}
type SnapshotSchedule = {
  ScheduleDefinitions?: {} | undefined
  ScheduleIdentifier?: {} | undefined
  ScheduleDescription?: {} | undefined
  Tags?: {} | undefined
  NextInvocations?: {} | undefined
  AssociatedClusterCount?: {} | undefined
  AssociatedClusters?: {} | undefined
}
type CreateSnapshotScheduleMessage = {
  ScheduleDefinitions?: {} | undefined
  ScheduleIdentifier?: {} | undefined
  ScheduleDescription?: {} | undefined
  Tags?: {} | undefined
  DryRun?: {} | undefined
  NextInvocations?: {} | undefined
}
type CreateTagsMessage = { ResourceName: {}; Tags: {} }
type UsageLimit = {
  UsageLimitId?: {} | undefined
  ClusterIdentifier?: {} | undefined
  FeatureType?: {} | undefined
  LimitType?: {} | undefined
  Amount?: {} | undefined
  Period?: {} | undefined
  BreachAction?: {} | undefined
  Tags?: {} | undefined
}
type CreateUsageLimitMessage = {
  ClusterIdentifier: {}
  FeatureType: {}
  LimitType: {}
  Amount: {}
  Period?: {} | undefined
  BreachAction?: {} | undefined
  Tags?: {} | undefined
}
type DeauthorizeDataShareMessage = { DataShareArn: {}; ConsumerIdentifier: {} }
type DeleteAuthenticationProfileResult = { AuthenticationProfileName?: {} | undefined }
type DeleteAuthenticationProfileMessage = { AuthenticationProfileName: {} }
type DeleteClusterResult = { Cluster?: Cluster | undefined }
type DeleteClusterMessage = {
  ClusterIdentifier: {}
  SkipFinalClusterSnapshot?: {} | undefined
  FinalClusterSnapshotIdentifier?: {} | undefined
  FinalClusterSnapshotRetentionPeriod?: {} | undefined
}
type DeleteClusterParameterGroupMessage = { ParameterGroupName: {} }
type DeleteClusterSecurityGroupMessage = { ClusterSecurityGroupName: {} }
type DeleteClusterSnapshotResult = { Snapshot?: Snapshot | undefined }
type DeleteClusterSnapshotMessage = {
  SnapshotIdentifier: {}
  SnapshotClusterIdentifier?: {} | undefined
}
type DeleteClusterSubnetGroupMessage = { ClusterSubnetGroupName: {} }
type DeleteEndpointAccessMessage = { EndpointName: {} }
type DeleteEventSubscriptionMessage = { SubscriptionName: {} }
type DeleteHsmClientCertificateMessage = { HsmClientCertificateIdentifier: {} }
type DeleteHsmConfigurationMessage = { HsmConfigurationIdentifier: {} }
type DeleteScheduledActionMessage = { ScheduledActionName: {} }
type DeleteSnapshotCopyGrantMessage = { SnapshotCopyGrantName: {} }
type DeleteSnapshotScheduleMessage = { ScheduleIdentifier: {} }
type DeleteTagsMessage = { ResourceName: {}; TagKeys: {} }
type DeleteUsageLimitMessage = { UsageLimitId: {} }
type AccountAttributeList = { AccountAttributes?: {} | undefined }
type DescribeAccountAttributesMessage = { AttributeNames?: {} | undefined }
type DescribeAuthenticationProfilesResult = { AuthenticationProfiles?: {} | undefined }
type DescribeAuthenticationProfilesMessage = { AuthenticationProfileName?: {} | undefined }
type ClusterDbRevisionsMessage = { Marker?: {} | undefined; ClusterDbRevisions?: {} | undefined }
type DescribeClusterDbRevisionsMessage = {
  ClusterIdentifier?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type ClusterParameterGroupsMessage = { Marker?: {} | undefined; ParameterGroups?: {} | undefined }
type DescribeClusterParameterGroupsMessage = {
  ParameterGroupName?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  TagKeys?: {} | undefined
  TagValues?: {} | undefined
}
type ClusterParameterGroupDetails = { Parameters?: {} | undefined; Marker?: {} | undefined }
type DescribeClusterParametersMessage = {
  ParameterGroupName: {}
  Source?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type ClusterSecurityGroupMessage = {
  Marker?: {} | undefined
  ClusterSecurityGroups?: {} | undefined
}
type DescribeClusterSecurityGroupsMessage = {
  ClusterSecurityGroupName?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  TagKeys?: {} | undefined
  TagValues?: {} | undefined
}
type SnapshotMessage = { Marker?: {} | undefined; Snapshots?: {} | undefined }
type DescribeClusterSnapshotsMessage = {
  ClusterIdentifier?: {} | undefined
  SnapshotIdentifier?: {} | undefined
  SnapshotArn?: {} | undefined
  SnapshotType?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  OwnerAccount?: {} | undefined
  TagKeys?: {} | undefined
  TagValues?: {} | undefined
  ClusterExists?: {} | undefined
  SortingEntities?: {} | undefined
}
type ClusterSubnetGroupMessage = { Marker?: {} | undefined; ClusterSubnetGroups?: {} | undefined }
type DescribeClusterSubnetGroupsMessage = {
  ClusterSubnetGroupName?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  TagKeys?: {} | undefined
  TagValues?: {} | undefined
}
type TrackListMessage = { MaintenanceTracks?: {} | undefined; Marker?: {} | undefined }
type DescribeClusterTracksMessage = {
  MaintenanceTrackName?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type ClusterVersionsMessage = { Marker?: {} | undefined; ClusterVersions?: {} | undefined }
type DescribeClusterVersionsMessage = {
  ClusterVersion?: {} | undefined
  ClusterParameterGroupFamily?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type ClustersMessage = { Marker?: {} | undefined; Clusters?: {} | undefined }
type DescribeClustersMessage = {
  ClusterIdentifier?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  TagKeys?: {} | undefined
  TagValues?: {} | undefined
}
type DescribeDataSharesResult = { DataShares?: {} | undefined; Marker?: {} | undefined }
type DescribeDataSharesMessage = {
  DataShareArn?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeDataSharesForConsumerResult = { DataShares?: {} | undefined; Marker?: {} | undefined }
type DescribeDataSharesForConsumerMessage = {
  ConsumerArn?: {} | undefined
  Status?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeDataSharesForProducerResult = { DataShares?: {} | undefined; Marker?: {} | undefined }
type DescribeDataSharesForProducerMessage = {
  ProducerArn?: {} | undefined
  Status?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DefaultClusterParameters = {
  ParameterGroupFamily?: {} | undefined
  Marker?: {} | undefined
  Parameters?: {} | undefined
}
type DescribeDefaultClusterParametersResult = {
  DefaultClusterParameters?: DefaultClusterParameters | undefined
}
type DescribeDefaultClusterParametersMessage = {
  ParameterGroupFamily: {}
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type EndpointAccessList = { EndpointAccessList?: {} | undefined; Marker?: {} | undefined }
type DescribeEndpointAccessMessage = {
  ClusterIdentifier?: {} | undefined
  ResourceOwner?: {} | undefined
  EndpointName?: {} | undefined
  VpcId?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type EndpointAuthorizationList = {
  EndpointAuthorizationList?: {} | undefined
  Marker?: {} | undefined
}
type DescribeEndpointAuthorizationMessage = {
  ClusterIdentifier?: {} | undefined
  Account?: {} | undefined
  Grantee?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type EventCategoriesMessage = { EventCategoriesMapList?: {} | undefined }
type DescribeEventCategoriesMessage = { SourceType?: {} | undefined }
type EventSubscriptionsMessage = {
  Marker?: {} | undefined
  EventSubscriptionsList?: {} | undefined
}
type DescribeEventSubscriptionsMessage = {
  SubscriptionName?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  TagKeys?: {} | undefined
  TagValues?: {} | undefined
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
type HsmClientCertificateMessage = {
  Marker?: {} | undefined
  HsmClientCertificates?: {} | undefined
}
type DescribeHsmClientCertificatesMessage = {
  HsmClientCertificateIdentifier?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  TagKeys?: {} | undefined
  TagValues?: {} | undefined
}
type HsmConfigurationMessage = { Marker?: {} | undefined; HsmConfigurations?: {} | undefined }
type DescribeHsmConfigurationsMessage = {
  HsmConfigurationIdentifier?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  TagKeys?: {} | undefined
  TagValues?: {} | undefined
}
type LoggingStatus = {
  LoggingEnabled?: {} | undefined
  BucketName?: {} | undefined
  S3KeyPrefix?: {} | undefined
  LastSuccessfulDeliveryTime?: {} | undefined
  LastFailureTime?: {} | undefined
  LastFailureMessage?: {} | undefined
  LogDestinationType?: {} | undefined
  LogExports?: {} | undefined
}
type DescribeLoggingStatusMessage = { ClusterIdentifier: {} }
type NodeConfigurationOptionsMessage = {
  NodeConfigurationOptionList?: {} | undefined
  Marker?: {} | undefined
}
type DescribeNodeConfigurationOptionsMessage = {
  ActionType: {}
  ClusterIdentifier?: {} | undefined
  SnapshotIdentifier?: {} | undefined
  SnapshotArn?: {} | undefined
  OwnerAccount?: {} | undefined
  Filters?: {} | undefined
  Marker?: {} | undefined
  MaxRecords?: {} | undefined
}
type OrderableClusterOptionsMessage = {
  OrderableClusterOptions?: {} | undefined
  Marker?: {} | undefined
}
type DescribeOrderableClusterOptionsMessage = {
  ClusterVersion?: {} | undefined
  NodeType?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribePartnersOutputMessage = { PartnerIntegrationInfoList?: {} | undefined }
type DescribePartnersInputMessage = {
  AccountId: {}
  ClusterIdentifier: {}
  DatabaseName?: {} | undefined
  PartnerName?: {} | undefined
}
type DescribeReservedNodeExchangeStatusOutputMessage = {
  ReservedNodeExchangeStatusDetails?: {} | undefined
  Marker?: {} | undefined
}
type DescribeReservedNodeExchangeStatusInputMessage = {
  ReservedNodeId?: {} | undefined
  ReservedNodeExchangeRequestId?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type ReservedNodeOfferingsMessage = {
  Marker?: {} | undefined
  ReservedNodeOfferings?: {} | undefined
}
type DescribeReservedNodeOfferingsMessage = {
  ReservedNodeOfferingId?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type ReservedNodesMessage = { Marker?: {} | undefined; ReservedNodes?: {} | undefined }
type DescribeReservedNodesMessage = {
  ReservedNodeId?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type DescribeResizeMessage = { ClusterIdentifier: {} }
type ScheduledActionsMessage = { Marker?: {} | undefined; ScheduledActions?: {} | undefined }
type DescribeScheduledActionsMessage = {
  ScheduledActionName?: {} | undefined
  TargetActionType?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  Active?: {} | undefined
  Filters?: {} | undefined
  Marker?: {} | undefined
  MaxRecords?: {} | undefined
}
type SnapshotCopyGrantMessage = { Marker?: {} | undefined; SnapshotCopyGrants?: {} | undefined }
type DescribeSnapshotCopyGrantsMessage = {
  SnapshotCopyGrantName?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  TagKeys?: {} | undefined
  TagValues?: {} | undefined
}
type DescribeSnapshotSchedulesOutputMessage = {
  SnapshotSchedules?: {} | undefined
  Marker?: {} | undefined
}
type DescribeSnapshotSchedulesMessage = {
  ClusterIdentifier?: {} | undefined
  ScheduleIdentifier?: {} | undefined
  TagKeys?: {} | undefined
  TagValues?: {} | undefined
  Marker?: {} | undefined
  MaxRecords?: {} | undefined
}
type CustomerStorageMessage = {
  TotalBackupSizeInMegaBytes?: {} | undefined
  TotalProvisionedStorageInMegaBytes?: {} | undefined
}
type TableRestoreStatusMessage = {
  TableRestoreStatusDetails?: {} | undefined
  Marker?: {} | undefined
}
type DescribeTableRestoreStatusMessage = {
  ClusterIdentifier?: {} | undefined
  TableRestoreRequestId?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type TaggedResourceListMessage = { TaggedResources?: {} | undefined; Marker?: {} | undefined }
type DescribeTagsMessage = {
  ResourceName?: {} | undefined
  ResourceType?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  TagKeys?: {} | undefined
  TagValues?: {} | undefined
}
type UsageLimitList = { UsageLimits?: {} | undefined; Marker?: {} | undefined }
type DescribeUsageLimitsMessage = {
  UsageLimitId?: {} | undefined
  ClusterIdentifier?: {} | undefined
  FeatureType?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
  TagKeys?: {} | undefined
  TagValues?: {} | undefined
}
type DisableLoggingMessage = { ClusterIdentifier: {} }
type DisableSnapshotCopyResult = { Cluster?: Cluster | undefined }
type DisableSnapshotCopyMessage = { ClusterIdentifier: {} }
type DisassociateDataShareConsumerMessage = {
  DataShareArn: {}
  DisassociateEntireAccount?: {} | undefined
  ConsumerArn?: {} | undefined
  ConsumerRegion?: {} | undefined
}
type String = string
type EnableLoggingMessage = {
  ClusterIdentifier: {}
  BucketName?: {} | undefined
  S3KeyPrefix?: {} | undefined
  LogDestinationType?: {} | undefined
  LogExports?: {} | undefined
}
type EnableSnapshotCopyResult = { Cluster?: Cluster | undefined }
type EnableSnapshotCopyMessage = {
  ClusterIdentifier: {}
  DestinationRegion: {}
  RetentionPeriod?: {} | undefined
  SnapshotCopyGrantName?: {} | undefined
  ManualSnapshotRetentionPeriod?: {} | undefined
}
type ClusterCredentials = {
  DbUser?: {} | undefined
  DbPassword?: {} | undefined
  Expiration?: {} | undefined
}
type GetClusterCredentialsMessage = {
  DbUser: {}
  DbName?: {} | undefined
  ClusterIdentifier: {}
  DurationSeconds?: {} | undefined
  AutoCreate?: {} | undefined
  DbGroups?: {} | undefined
}
type ClusterExtendedCredentials = {
  DbUser?: {} | undefined
  DbPassword?: {} | undefined
  Expiration?: {} | undefined
  NextRefreshTime?: {} | undefined
}
type GetClusterCredentialsWithIAMMessage = {
  DbName?: {} | undefined
  ClusterIdentifier: {}
  DurationSeconds?: {} | undefined
}
type GetReservedNodeExchangeConfigurationOptionsOutputMessage = {
  Marker?: {} | undefined
  ReservedNodeConfigurationOptionList?: {} | undefined
}
type GetReservedNodeExchangeConfigurationOptionsInputMessage = {
  ActionType: {}
  ClusterIdentifier?: {} | undefined
  SnapshotIdentifier?: {} | undefined
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type GetReservedNodeExchangeOfferingsOutputMessage = {
  Marker?: {} | undefined
  ReservedNodeOfferings?: {} | undefined
}
type GetReservedNodeExchangeOfferingsInputMessage = {
  ReservedNodeId: {}
  MaxRecords?: {} | undefined
  Marker?: {} | undefined
}
type ModifyAquaOutputMessage = {
  AquaConfiguration?:
    | { AquaStatus?: {} | undefined; AquaConfigurationStatus?: {} | undefined }
    | undefined
}
type ModifyAquaInputMessage = { ClusterIdentifier: {}; AquaConfigurationStatus?: {} | undefined }
type ModifyAuthenticationProfileResult = {
  AuthenticationProfileName?: {} | undefined
  AuthenticationProfileContent?: {} | undefined
}
type ModifyAuthenticationProfileMessage = {
  AuthenticationProfileName: {}
  AuthenticationProfileContent: {}
}
type ModifyClusterResult = { Cluster?: Cluster | undefined }
type ModifyClusterMessage = {
  ClusterIdentifier: {}
  ClusterType?: {} | undefined
  NodeType?: {} | undefined
  NumberOfNodes?: {} | undefined
  ClusterSecurityGroups?: {} | undefined
  VpcSecurityGroupIds?: {} | undefined
  MasterUserPassword?: {} | undefined
  ClusterParameterGroupName?: {} | undefined
  AutomatedSnapshotRetentionPeriod?: {} | undefined
  ManualSnapshotRetentionPeriod?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  ClusterVersion?: {} | undefined
  AllowVersionUpgrade?: {} | undefined
  HsmClientCertificateIdentifier?: {} | undefined
  HsmConfigurationIdentifier?: {} | undefined
  NewClusterIdentifier?: {} | undefined
  PubliclyAccessible?: {} | undefined
  ElasticIp?: {} | undefined
  EnhancedVpcRouting?: {} | undefined
  MaintenanceTrackName?: {} | undefined
  Encrypted?: {} | undefined
  KmsKeyId?: {} | undefined
  AvailabilityZoneRelocation?: {} | undefined
  AvailabilityZone?: {} | undefined
  Port?: {} | undefined
}
type ModifyClusterDbRevisionResult = { Cluster?: Cluster | undefined }
type ModifyClusterDbRevisionMessage = { ClusterIdentifier: {}; RevisionTarget: {} }
type ModifyClusterIamRolesResult = { Cluster?: Cluster | undefined }
type ModifyClusterIamRolesMessage = {
  ClusterIdentifier: {}
  AddIamRoles?: {} | undefined
  RemoveIamRoles?: {} | undefined
  DefaultIamRoleArn?: {} | undefined
}
type ModifyClusterMaintenanceResult = { Cluster?: Cluster | undefined }
type ModifyClusterMaintenanceMessage = {
  ClusterIdentifier: {}
  DeferMaintenance?: {} | undefined
  DeferMaintenanceIdentifier?: {} | undefined
  DeferMaintenanceStartTime?: {} | undefined
  DeferMaintenanceEndTime?: {} | undefined
  DeferMaintenanceDuration?: {} | undefined
}
type ClusterParameterGroupNameMessage = {
  ParameterGroupName?: {} | undefined
  ParameterGroupStatus?: {} | undefined
}
type ModifyClusterParameterGroupMessage = { ParameterGroupName: {}; Parameters: {} }
type ModifyClusterSnapshotResult = { Snapshot?: Snapshot | undefined }
type ModifyClusterSnapshotMessage = {
  SnapshotIdentifier: {}
  ManualSnapshotRetentionPeriod?: {} | undefined
  Force?: {} | undefined
}
type ModifyClusterSnapshotScheduleMessage = {
  ClusterIdentifier: {}
  ScheduleIdentifier?: {} | undefined
  DisassociateSchedule?: {} | undefined
}
type ModifyClusterSubnetGroupResult = { ClusterSubnetGroup?: ClusterSubnetGroup | undefined }
type ModifyClusterSubnetGroupMessage = {
  ClusterSubnetGroupName: {}
  Description?: {} | undefined
  SubnetIds: {}
}
type ModifyEndpointAccessMessage = { EndpointName: {}; VpcSecurityGroupIds?: {} | undefined }
type ModifyEventSubscriptionResult = { EventSubscription?: EventSubscription | undefined }
type ModifyEventSubscriptionMessage = {
  SubscriptionName: {}
  SnsTopicArn?: {} | undefined
  SourceType?: {} | undefined
  SourceIds?: {} | undefined
  EventCategories?: {} | undefined
  Severity?: {} | undefined
  Enabled?: {} | undefined
}
type ModifyScheduledActionMessage = {
  ScheduledActionName: {}
  TargetAction?:
    | {
        ResizeCluster?:
          | {
              ClusterIdentifier: {}
              ClusterType?: {} | undefined
              NodeType?: {} | undefined
              NumberOfNodes?: {} | undefined
              Classic?: {} | undefined
              ReservedNodeId?: {} | undefined
              TargetReservedNodeOfferingId?: {} | undefined
            }
          | undefined
        PauseCluster?: { ClusterIdentifier: {} } | undefined
        ResumeCluster?: { ClusterIdentifier: {} } | undefined
      }
    | undefined
  Schedule?: {} | undefined
  IamRole?: {} | undefined
  ScheduledActionDescription?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  Enable?: {} | undefined
}
type ModifySnapshotCopyRetentionPeriodResult = { Cluster?: Cluster | undefined }
type ModifySnapshotCopyRetentionPeriodMessage = {
  ClusterIdentifier: {}
  RetentionPeriod: {}
  Manual?: {} | undefined
}
type ModifySnapshotScheduleMessage = { ScheduleIdentifier: {}; ScheduleDefinitions: {} }
type ModifyUsageLimitMessage = {
  UsageLimitId: {}
  Amount?: {} | undefined
  BreachAction?: {} | undefined
}
type PauseClusterResult = { Cluster?: Cluster | undefined }
type PauseClusterMessage = { ClusterIdentifier: {} }
type ReservedNode = {
  ReservedNodeId?: {} | undefined
  ReservedNodeOfferingId?: {} | undefined
  NodeType?: {} | undefined
  StartTime?: {} | undefined
  Duration?: {} | undefined
  FixedPrice?: {} | undefined
  UsagePrice?: {} | undefined
  CurrencyCode?: {} | undefined
  NodeCount?: {} | undefined
  State?: {} | undefined
  OfferingType?: {} | undefined
  RecurringCharges?: {} | undefined
  ReservedNodeOfferingType?: {} | undefined
}
type PurchaseReservedNodeOfferingResult = { ReservedNode?: ReservedNode | undefined }
type PurchaseReservedNodeOfferingMessage = {
  ReservedNodeOfferingId: {}
  NodeCount?: {} | undefined
}
type RebootClusterResult = { Cluster?: Cluster | undefined }
type RebootClusterMessage = { ClusterIdentifier: {} }
type RejectDataShareMessage = { DataShareArn: {} }
type ResetClusterParameterGroupMessage = {
  ParameterGroupName: {}
  ResetAllParameters?: {} | undefined
  Parameters?: {} | undefined
}
type ResizeClusterResult = { Cluster?: Cluster | undefined }
type ResizeClusterMessage = {
  ClusterIdentifier: {}
  ClusterType?: {} | undefined
  NodeType?: {} | undefined
  NumberOfNodes?: {} | undefined
  Classic?: {} | undefined
  ReservedNodeId?: {} | undefined
  TargetReservedNodeOfferingId?: {} | undefined
}
type RestoreFromClusterSnapshotResult = { Cluster?: Cluster | undefined }
type DependentServiceRequestThrottlingFault = { [x: string]: unknown }
type InvalidClusterTrackFault = { [x: string]: unknown }
type TagLimitExceededFault = { [x: string]: unknown }
type InvalidTagFault = { [x: string]: unknown }
type ReservedNodeNotFoundFault = { [x: string]: unknown }
type InvalidReservedNodeStateFault = { [x: string]: unknown }
type ReservedNodeAlreadyMigratedFault = { [x: string]: unknown }
type ReservedNodeOfferingNotFoundFault = { [x: string]: unknown }
type ReservedNodeAlreadyExistsFault = { [x: string]: unknown }
type UnsupportedOperationFault = { [x: string]: unknown }
type RestoreFromClusterSnapshotMessage = {
  ClusterIdentifier: {}
  SnapshotIdentifier?: {} | undefined
  SnapshotArn?: {} | undefined
  SnapshotClusterIdentifier?: {} | undefined
  Port?: {} | undefined
  AvailabilityZone?: {} | undefined
  AllowVersionUpgrade?: {} | undefined
  ClusterSubnetGroupName?: {} | undefined
  PubliclyAccessible?: {} | undefined
  OwnerAccount?: {} | undefined
  HsmClientCertificateIdentifier?: {} | undefined
  HsmConfigurationIdentifier?: {} | undefined
  ElasticIp?: {} | undefined
  ClusterParameterGroupName?: {} | undefined
  ClusterSecurityGroups?: {} | undefined
  VpcSecurityGroupIds?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  AutomatedSnapshotRetentionPeriod?: {} | undefined
  ManualSnapshotRetentionPeriod?: {} | undefined
  KmsKeyId?: {} | undefined
  NodeType?: {} | undefined
  EnhancedVpcRouting?: {} | undefined
  AdditionalInfo?: {} | undefined
  IamRoles?: {} | undefined
  MaintenanceTrackName?: {} | undefined
  SnapshotScheduleIdentifier?: {} | undefined
  NumberOfNodes?: {} | undefined
  AvailabilityZoneRelocation?: {} | undefined
  AquaConfigurationStatus?: {} | undefined
  DefaultIamRoleArn?: {} | undefined
  ReservedNodeId?: {} | undefined
  TargetReservedNodeOfferingId?: {} | undefined
  Encrypted?: {} | undefined
}
type TableRestoreStatus = {
  TableRestoreRequestId?: {} | undefined
  Status?: {} | undefined
  Message?: {} | undefined
  RequestTime?: {} | undefined
  ProgressInMegaBytes?: {} | undefined
  TotalDataInMegaBytes?: {} | undefined
  ClusterIdentifier?: {} | undefined
  SnapshotIdentifier?: {} | undefined
  SourceDatabaseName?: {} | undefined
  SourceSchemaName?: {} | undefined
  SourceTableName?: {} | undefined
  TargetDatabaseName?: {} | undefined
  TargetSchemaName?: {} | undefined
  NewTableName?: {} | undefined
}
type RestoreTableFromClusterSnapshotResult = { TableRestoreStatus?: TableRestoreStatus | undefined }
type RestoreTableFromClusterSnapshotMessage = {
  ClusterIdentifier: {}
  SnapshotIdentifier: {}
  SourceDatabaseName: {}
  SourceSchemaName?: {} | undefined
  SourceTableName: {}
  TargetDatabaseName?: {} | undefined
  TargetSchemaName?: {} | undefined
  NewTableName: {}
  EnableCaseSensitiveIdentifier?: {} | undefined
}
type ResumeClusterResult = { Cluster?: Cluster | undefined }
type ResumeClusterMessage = { ClusterIdentifier: {} }
type RevokeClusterSecurityGroupIngressResult = {
  ClusterSecurityGroup?: ClusterSecurityGroup | undefined
}
type RevokeClusterSecurityGroupIngressMessage = {
  ClusterSecurityGroupName: {}
  CIDRIP?: {} | undefined
  EC2SecurityGroupName?: {} | undefined
  EC2SecurityGroupOwnerId?: {} | undefined
}
type RevokeEndpointAccessMessage = {
  ClusterIdentifier?: {} | undefined
  Account?: {} | undefined
  VpcIds?: {} | undefined
  Force?: {} | undefined
}
type RevokeSnapshotAccessResult = { Snapshot?: Snapshot | undefined }
type RevokeSnapshotAccessMessage = {
  SnapshotIdentifier?: {} | undefined
  SnapshotArn?: {} | undefined
  SnapshotClusterIdentifier?: {} | undefined
  AccountWithRestoreAccess: {}
}
type RotateEncryptionKeyResult = { Cluster?: Cluster | undefined }
type RotateEncryptionKeyMessage = { ClusterIdentifier: {} }
type UpdatePartnerStatusInputMessage = {
  AccountId: {}
  ClusterIdentifier: {}
  DatabaseName: {}
  PartnerName: {}
  Status: {}
  StatusMessage?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Action=AcceptReservedNodeExchange': {
      $get: {
        input: {
          query: {
            ReservedNodeId: string
            TargetReservedNodeOfferingId: string
            Action: 'AcceptReservedNodeExchange'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: AcceptReservedNodeExchangeOutputMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'AcceptReservedNodeExchange'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AcceptReservedNodeExchangeInputMessage }
        output: AcceptReservedNodeExchangeOutputMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=AddPartner': {
      $get: {
        input: {
          query: {
            AccountId: string
            ClusterIdentifier: string
            DatabaseName: string
            PartnerName: string
            Action: 'AddPartner'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: PartnerIntegrationOutputMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'AddPartner'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PartnerIntegrationInputMessage }
        output: PartnerIntegrationOutputMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=AssociateDataShareConsumer': {
      $get: {
        input: {
          query: {
            DataShareArn: string
            AssociateEntireAccount?: boolean | undefined
            ConsumerArn?: string | undefined
            ConsumerRegion?: string | undefined
            Action: 'AssociateDataShareConsumer'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DataShare
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'AssociateDataShareConsumer'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateDataShareConsumerMessage }
        output: DataShare
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=AuthorizeClusterSecurityGroupIngress': {
      $get: {
        input: {
          query: {
            ClusterSecurityGroupName: string
            CIDRIP?: string | undefined
            EC2SecurityGroupName?: string | undefined
            EC2SecurityGroupOwnerId?: string | undefined
            Action: 'AuthorizeClusterSecurityGroupIngress'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: AuthorizeClusterSecurityGroupIngressResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'AuthorizeClusterSecurityGroupIngress'; Version: '2012-12-01' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AuthorizeClusterSecurityGroupIngressMessage }
        output: AuthorizeClusterSecurityGroupIngressResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=AuthorizeDataShare': {
      $get: {
        input: {
          query: {
            DataShareArn: string
            ConsumerIdentifier: string
            Action: 'AuthorizeDataShare'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DataShare
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'AuthorizeDataShare'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AuthorizeDataShareMessage }
        output: DataShare
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=AuthorizeEndpointAccess': {
      $get: {
        input: {
          query: {
            ClusterIdentifier?: string | undefined
            Account: string
            VpcIds?: {}[] | undefined
            Action: 'AuthorizeEndpointAccess'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: EndpointAuthorization
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'AuthorizeEndpointAccess'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AuthorizeEndpointAccessMessage }
        output: EndpointAuthorization
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=AuthorizeSnapshotAccess': {
      $get: {
        input: {
          query: {
            SnapshotIdentifier?: string | undefined
            SnapshotArn?: string | undefined
            SnapshotClusterIdentifier?: string | undefined
            AccountWithRestoreAccess: string
            Action: 'AuthorizeSnapshotAccess'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: AuthorizeSnapshotAccessResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'AuthorizeSnapshotAccess'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AuthorizeSnapshotAccessMessage }
        output: AuthorizeSnapshotAccessResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=BatchDeleteClusterSnapshots': {
      $get: {
        input: {
          query: {
            Identifiers: { SnapshotIdentifier: {}; SnapshotClusterIdentifier?: {} | undefined }[]
            Action: 'BatchDeleteClusterSnapshots'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: BatchDeleteClusterSnapshotsResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'BatchDeleteClusterSnapshots'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchDeleteClusterSnapshotsRequest }
        output: BatchDeleteClusterSnapshotsResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=BatchModifyClusterSnapshots': {
      $get: {
        input: {
          query: {
            SnapshotIdentifierList: {}[]
            ManualSnapshotRetentionPeriod?: number | undefined
            Force?: boolean | undefined
            Action: 'BatchModifyClusterSnapshots'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: BatchModifyClusterSnapshotsOutputMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'BatchModifyClusterSnapshots'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchModifyClusterSnapshotsMessage }
        output: BatchModifyClusterSnapshotsOutputMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CancelResize': {
      $get: {
        input: {
          query: { ClusterIdentifier: string; Action: 'CancelResize'; Version: '2012-12-01' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ResizeProgressMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CancelResize'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelResizeMessage }
        output: ResizeProgressMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CopyClusterSnapshot': {
      $get: {
        input: {
          query: {
            SourceSnapshotIdentifier: string
            SourceSnapshotClusterIdentifier?: string | undefined
            TargetSnapshotIdentifier: string
            ManualSnapshotRetentionPeriod?: number | undefined
            Action: 'CopyClusterSnapshot'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CopyClusterSnapshotResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CopyClusterSnapshot'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CopyClusterSnapshotMessage }
        output: CopyClusterSnapshotResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateAuthenticationProfile': {
      $get: {
        input: {
          query: {
            AuthenticationProfileName: string
            AuthenticationProfileContent: string
            Action: 'CreateAuthenticationProfile'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateAuthenticationProfileResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateAuthenticationProfile'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAuthenticationProfileMessage }
        output: CreateAuthenticationProfileResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateCluster': {
      $get:
        | {
            input: {
              query: {
                DBName?: string | undefined
                ClusterIdentifier: string
                ClusterType?: string | undefined
                NodeType: string
                MasterUsername: string
                MasterUserPassword: string
                ClusterSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ClusterSubnetGroupName?: string | undefined
                AvailabilityZone?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ClusterParameterGroupName?: string | undefined
                AutomatedSnapshotRetentionPeriod?: number | undefined
                ManualSnapshotRetentionPeriod?: number | undefined
                Port?: number | undefined
                ClusterVersion?: string | undefined
                AllowVersionUpgrade?: boolean | undefined
                NumberOfNodes?: number | undefined
                PubliclyAccessible?: boolean | undefined
                Encrypted?: boolean | undefined
                HsmClientCertificateIdentifier?: string | undefined
                HsmConfigurationIdentifier?: string | undefined
                ElasticIp?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnhancedVpcRouting?: boolean | undefined
                AdditionalInfo?: string | undefined
                IamRoles?: {}[] | undefined
                MaintenanceTrackName?: string | undefined
                SnapshotScheduleIdentifier?: string | undefined
                AvailabilityZoneRelocation?: boolean | undefined
                AquaConfigurationStatus?: 'enabled' | 'disabled' | 'auto' | undefined
                DefaultIamRoleArn?: string | undefined
                LoadSampleData?: string | undefined
                Action: 'CreateCluster'
                Version: '2012-12-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CreateClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                ClusterIdentifier: string
                ClusterType?: string | undefined
                NodeType: string
                MasterUsername: string
                MasterUserPassword: string
                ClusterSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ClusterSubnetGroupName?: string | undefined
                AvailabilityZone?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ClusterParameterGroupName?: string | undefined
                AutomatedSnapshotRetentionPeriod?: number | undefined
                ManualSnapshotRetentionPeriod?: number | undefined
                Port?: number | undefined
                ClusterVersion?: string | undefined
                AllowVersionUpgrade?: boolean | undefined
                NumberOfNodes?: number | undefined
                PubliclyAccessible?: boolean | undefined
                Encrypted?: boolean | undefined
                HsmClientCertificateIdentifier?: string | undefined
                HsmConfigurationIdentifier?: string | undefined
                ElasticIp?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnhancedVpcRouting?: boolean | undefined
                AdditionalInfo?: string | undefined
                IamRoles?: {}[] | undefined
                MaintenanceTrackName?: string | undefined
                SnapshotScheduleIdentifier?: string | undefined
                AvailabilityZoneRelocation?: boolean | undefined
                AquaConfigurationStatus?: 'enabled' | 'disabled' | 'auto' | undefined
                DefaultIamRoleArn?: string | undefined
                LoadSampleData?: string | undefined
                Action: 'CreateCluster'
                Version: '2012-12-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: SnapshotScheduleNotFoundFault
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                DBName?: string | undefined
                ClusterIdentifier: string
                ClusterType?: string | undefined
                NodeType: string
                MasterUsername: string
                MasterUserPassword: string
                ClusterSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                ClusterSubnetGroupName?: string | undefined
                AvailabilityZone?: string | undefined
                PreferredMaintenanceWindow?: string | undefined
                ClusterParameterGroupName?: string | undefined
                AutomatedSnapshotRetentionPeriod?: number | undefined
                ManualSnapshotRetentionPeriod?: number | undefined
                Port?: number | undefined
                ClusterVersion?: string | undefined
                AllowVersionUpgrade?: boolean | undefined
                NumberOfNodes?: number | undefined
                PubliclyAccessible?: boolean | undefined
                Encrypted?: boolean | undefined
                HsmClientCertificateIdentifier?: string | undefined
                HsmConfigurationIdentifier?: string | undefined
                ElasticIp?: string | undefined
                Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                KmsKeyId?: string | undefined
                EnhancedVpcRouting?: boolean | undefined
                AdditionalInfo?: string | undefined
                IamRoles?: {}[] | undefined
                MaintenanceTrackName?: string | undefined
                SnapshotScheduleIdentifier?: string | undefined
                AvailabilityZoneRelocation?: boolean | undefined
                AquaConfigurationStatus?: 'enabled' | 'disabled' | 'auto' | undefined
                DefaultIamRoleArn?: string | undefined
                LoadSampleData?: string | undefined
                Action: 'CreateCluster'
                Version: '2012-12-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRetentionPeriodFault
            outputFormat: 'text'
            status: 501
          }
      $post:
        | {
            input: { query: { Action: 'CreateCluster'; Version: '2012-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateClusterMessage }
            output: CreateClusterResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateCluster'; Version: '2012-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateClusterMessage }
            output: SnapshotScheduleNotFoundFault
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { Action: 'CreateCluster'; Version: '2012-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateClusterMessage }
            output: InvalidRetentionPeriodFault
            outputFormat: 'text'
            status: 501
          }
    }
  } & {
    '/#Action=CreateClusterParameterGroup': {
      $get: {
        input: {
          query: {
            ParameterGroupName: string
            ParameterGroupFamily: string
            Description: string
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateClusterParameterGroup'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateClusterParameterGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateClusterParameterGroup'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateClusterParameterGroupMessage }
        output: CreateClusterParameterGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateClusterSecurityGroup': {
      $get: {
        input: {
          query: {
            ClusterSecurityGroupName: string
            Description: string
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateClusterSecurityGroup'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateClusterSecurityGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateClusterSecurityGroup'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateClusterSecurityGroupMessage }
        output: CreateClusterSecurityGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateClusterSnapshot': {
      $get: {
        input: {
          query: {
            SnapshotIdentifier: string
            ClusterIdentifier: string
            ManualSnapshotRetentionPeriod?: number | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateClusterSnapshot'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateClusterSnapshotResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateClusterSnapshot'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateClusterSnapshotMessage }
        output: CreateClusterSnapshotResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateClusterSubnetGroup': {
      $get: {
        input: {
          query: {
            ClusterSubnetGroupName: string
            Description: string
            SubnetIds: {}[]
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateClusterSubnetGroup'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateClusterSubnetGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateClusterSubnetGroup'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateClusterSubnetGroupMessage }
        output: CreateClusterSubnetGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateEndpointAccess': {
      $get: {
        input: {
          query: {
            ClusterIdentifier?: string | undefined
            ResourceOwner?: string | undefined
            EndpointName: string
            SubnetGroupName: string
            VpcSecurityGroupIds?: {}[] | undefined
            Action: 'CreateEndpointAccess'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: EndpointAccess
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateEndpointAccess'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateEndpointAccessMessage }
        output: EndpointAccess
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
            SourceIds?: {}[] | undefined
            EventCategories?: {}[] | undefined
            Severity?: string | undefined
            Enabled?: boolean | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateEventSubscription'
            Version: '2012-12-01'
          }
        } & {
          header: {
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
        input: { query: { Action: 'CreateEventSubscription'; Version: '2012-12-01' } } & {
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
    '/#Action=CreateHsmClientCertificate': {
      $get: {
        input: {
          query: {
            HsmClientCertificateIdentifier: string
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateHsmClientCertificate'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateHsmClientCertificateResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateHsmClientCertificate'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateHsmClientCertificateMessage }
        output: CreateHsmClientCertificateResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateHsmConfiguration': {
      $get: {
        input: {
          query: {
            HsmConfigurationIdentifier: string
            Description: string
            HsmIpAddress: string
            HsmPartitionName: string
            HsmPartitionPassword: string
            HsmServerPublicCertificate: string
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateHsmConfiguration'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateHsmConfigurationResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateHsmConfiguration'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateHsmConfigurationMessage }
        output: CreateHsmConfigurationResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateScheduledAction': {
      $get: {
        input: {
          query: {
            ScheduledActionName: string
            TargetAction: {
              ResizeCluster?:
                | {
                    ClusterIdentifier: {}
                    ClusterType?: {} | undefined
                    NodeType?: {} | undefined
                    NumberOfNodes?: {} | undefined
                    Classic?: {} | undefined
                    ReservedNodeId?: {} | undefined
                    TargetReservedNodeOfferingId?: {} | undefined
                  }
                | undefined
              PauseCluster?: { ClusterIdentifier: {} } | undefined
              ResumeCluster?: { ClusterIdentifier: {} } | undefined
            }
            Schedule: string
            IamRole: string
            ScheduledActionDescription?: string | undefined
            StartTime?: string | undefined
            EndTime?: string | undefined
            Enable?: boolean | undefined
            Action: 'CreateScheduledAction'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ScheduledAction
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateScheduledAction'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateScheduledActionMessage }
        output: ScheduledAction
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateSnapshotCopyGrant': {
      $get: {
        input: {
          query: {
            SnapshotCopyGrantName: string
            KmsKeyId?: string | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateSnapshotCopyGrant'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateSnapshotCopyGrantResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateSnapshotCopyGrant'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSnapshotCopyGrantMessage }
        output: CreateSnapshotCopyGrantResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateSnapshotSchedule': {
      $get: {
        input: {
          query: {
            ScheduleDefinitions?: {}[] | undefined
            ScheduleIdentifier?: string | undefined
            ScheduleDescription?: string | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            DryRun?: boolean | undefined
            NextInvocations?: number | undefined
            Action: 'CreateSnapshotSchedule'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: SnapshotSchedule
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateSnapshotSchedule'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSnapshotScheduleMessage }
        output: SnapshotSchedule
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateTags': {
      $get: {
        input: {
          query: {
            ResourceName: string
            Tags: { Key?: {} | undefined; Value?: {} | undefined }[]
            Action: 'CreateTags'
            Version: '2012-12-01'
          }
        } & {
          header: {
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
        input: { query: { Action: 'CreateTags'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateTagsMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=CreateUsageLimit': {
      $get: {
        input: {
          query: {
            ClusterIdentifier: string
            FeatureType: 'spectrum' | 'concurrency-scaling' | 'cross-region-datasharing'
            LimitType: 'time' | 'data-scanned'
            Amount: number
            Period?: 'daily' | 'weekly' | 'monthly' | undefined
            BreachAction?: 'log' | 'emit-metric' | 'disable' | undefined
            Tags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
            Action: 'CreateUsageLimit'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UsageLimit
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateUsageLimit'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateUsageLimitMessage }
        output: UsageLimit
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeauthorizeDataShare': {
      $get: {
        input: {
          query: {
            DataShareArn: string
            ConsumerIdentifier: string
            Action: 'DeauthorizeDataShare'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DataShare
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeauthorizeDataShare'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeauthorizeDataShareMessage }
        output: DataShare
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteAuthenticationProfile': {
      $get: {
        input: {
          query: {
            AuthenticationProfileName: string
            Action: 'DeleteAuthenticationProfile'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteAuthenticationProfileResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteAuthenticationProfile'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAuthenticationProfileMessage }
        output: DeleteAuthenticationProfileResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteCluster': {
      $get: {
        input: {
          query: {
            ClusterIdentifier: string
            SkipFinalClusterSnapshot?: boolean | undefined
            FinalClusterSnapshotIdentifier?: string | undefined
            FinalClusterSnapshotRetentionPeriod?: number | undefined
            Action: 'DeleteCluster'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteClusterResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteCluster'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteClusterMessage }
        output: DeleteClusterResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteClusterParameterGroup': {
      $get: {
        input: {
          query: {
            ParameterGroupName: string
            Action: 'DeleteClusterParameterGroup'
            Version: '2012-12-01'
          }
        } & {
          header: {
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
        input: { query: { Action: 'DeleteClusterParameterGroup'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteClusterParameterGroupMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteClusterSecurityGroup': {
      $get: {
        input: {
          query: {
            ClusterSecurityGroupName: string
            Action: 'DeleteClusterSecurityGroup'
            Version: '2012-12-01'
          }
        } & {
          header: {
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
        input: { query: { Action: 'DeleteClusterSecurityGroup'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteClusterSecurityGroupMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteClusterSnapshot': {
      $get: {
        input: {
          query: {
            SnapshotIdentifier: string
            SnapshotClusterIdentifier?: string | undefined
            Action: 'DeleteClusterSnapshot'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteClusterSnapshotResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteClusterSnapshot'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteClusterSnapshotMessage }
        output: DeleteClusterSnapshotResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteClusterSubnetGroup': {
      $get: {
        input: {
          query: {
            ClusterSubnetGroupName: string
            Action: 'DeleteClusterSubnetGroup'
            Version: '2012-12-01'
          }
        } & {
          header: {
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
        input: { query: { Action: 'DeleteClusterSubnetGroup'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteClusterSubnetGroupMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteEndpointAccess': {
      $get: {
        input: {
          query: { EndpointName: string; Action: 'DeleteEndpointAccess'; Version: '2012-12-01' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: EndpointAccess
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteEndpointAccess'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEndpointAccessMessage }
        output: EndpointAccess
        outputFormat: 'text'
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
            Version: '2012-12-01'
          }
        } & {
          header: {
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
        input: { query: { Action: 'DeleteEventSubscription'; Version: '2012-12-01' } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteHsmClientCertificate': {
      $get: {
        input: {
          query: {
            HsmClientCertificateIdentifier: string
            Action: 'DeleteHsmClientCertificate'
            Version: '2012-12-01'
          }
        } & {
          header: {
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
        input: { query: { Action: 'DeleteHsmClientCertificate'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteHsmClientCertificateMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteHsmConfiguration': {
      $get: {
        input: {
          query: {
            HsmConfigurationIdentifier: string
            Action: 'DeleteHsmConfiguration'
            Version: '2012-12-01'
          }
        } & {
          header: {
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
        input: { query: { Action: 'DeleteHsmConfiguration'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteHsmConfigurationMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeletePartner': {
      $get: {
        input: {
          query: {
            AccountId: string
            ClusterIdentifier: string
            DatabaseName: string
            PartnerName: string
            Action: 'DeletePartner'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: PartnerIntegrationOutputMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeletePartner'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PartnerIntegrationInputMessage }
        output: PartnerIntegrationOutputMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteScheduledAction': {
      $get: {
        input: {
          query: {
            ScheduledActionName: string
            Action: 'DeleteScheduledAction'
            Version: '2012-12-01'
          }
        } & {
          header: {
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
        input: { query: { Action: 'DeleteScheduledAction'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteScheduledActionMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteSnapshotCopyGrant': {
      $get: {
        input: {
          query: {
            SnapshotCopyGrantName: string
            Action: 'DeleteSnapshotCopyGrant'
            Version: '2012-12-01'
          }
        } & {
          header: {
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
        input: { query: { Action: 'DeleteSnapshotCopyGrant'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSnapshotCopyGrantMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteSnapshotSchedule': {
      $get: {
        input: {
          query: {
            ScheduleIdentifier: string
            Action: 'DeleteSnapshotSchedule'
            Version: '2012-12-01'
          }
        } & {
          header: {
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
        input: { query: { Action: 'DeleteSnapshotSchedule'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSnapshotScheduleMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteTags': {
      $get: {
        input: {
          query: {
            ResourceName: string
            TagKeys: {}[]
            Action: 'DeleteTags'
            Version: '2012-12-01'
          }
        } & {
          header: {
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
        input: { query: { Action: 'DeleteTags'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTagsMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteUsageLimit': {
      $get: {
        input: {
          query: { UsageLimitId: string; Action: 'DeleteUsageLimit'; Version: '2012-12-01' }
        } & {
          header: {
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
        input: { query: { Action: 'DeleteUsageLimit'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteUsageLimitMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DescribeAccountAttributes': {
      $get: {
        input: {
          query: {
            AttributeNames?: {}[] | undefined
            Action: 'DescribeAccountAttributes'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: AccountAttributeList
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeAccountAttributes'; Version: '2012-12-01' } } & {
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
        output: AccountAttributeList
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeAuthenticationProfiles': {
      $get: {
        input: {
          query: {
            AuthenticationProfileName?: string | undefined
            Action: 'DescribeAuthenticationProfiles'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeAuthenticationProfilesResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeAuthenticationProfiles'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAuthenticationProfilesMessage }
        output: DescribeAuthenticationProfilesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeClusterDbRevisions': {
      $get: {
        input: {
          query: {
            ClusterIdentifier?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeClusterDbRevisions'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ClusterDbRevisionsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeClusterDbRevisions'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeClusterDbRevisionsMessage }
        output: ClusterDbRevisionsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeClusterParameterGroups': {
      $get: {
        input: {
          query: {
            ParameterGroupName?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            TagKeys?: {}[] | undefined
            TagValues?: {}[] | undefined
            Action: 'DescribeClusterParameterGroups'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ClusterParameterGroupsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeClusterParameterGroups'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeClusterParameterGroupsMessage }
        output: ClusterParameterGroupsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeClusterParameters': {
      $get: {
        input: {
          query: {
            ParameterGroupName: string
            Source?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeClusterParameters'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ClusterParameterGroupDetails
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeClusterParameters'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeClusterParametersMessage }
        output: ClusterParameterGroupDetails
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeClusterSecurityGroups': {
      $get: {
        input: {
          query: {
            ClusterSecurityGroupName?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            TagKeys?: {}[] | undefined
            TagValues?: {}[] | undefined
            Action: 'DescribeClusterSecurityGroups'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ClusterSecurityGroupMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeClusterSecurityGroups'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeClusterSecurityGroupsMessage }
        output: ClusterSecurityGroupMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeClusterSnapshots': {
      $get: {
        input: {
          query: {
            ClusterIdentifier?: string | undefined
            SnapshotIdentifier?: string | undefined
            SnapshotArn?: string | undefined
            SnapshotType?: string | undefined
            StartTime?: string | undefined
            EndTime?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            OwnerAccount?: string | undefined
            TagKeys?: {}[] | undefined
            TagValues?: {}[] | undefined
            ClusterExists?: boolean | undefined
            SortingEntities?: { Attribute: {}; SortOrder?: {} | undefined }[] | undefined
            Action: 'DescribeClusterSnapshots'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: SnapshotMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeClusterSnapshots'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeClusterSnapshotsMessage }
        output: SnapshotMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeClusterSubnetGroups': {
      $get: {
        input: {
          query: {
            ClusterSubnetGroupName?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            TagKeys?: {}[] | undefined
            TagValues?: {}[] | undefined
            Action: 'DescribeClusterSubnetGroups'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ClusterSubnetGroupMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeClusterSubnetGroups'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeClusterSubnetGroupsMessage }
        output: ClusterSubnetGroupMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeClusterTracks': {
      $get: {
        input: {
          query: {
            MaintenanceTrackName?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeClusterTracks'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: TrackListMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeClusterTracks'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeClusterTracksMessage }
        output: TrackListMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeClusterVersions': {
      $get: {
        input: {
          query: {
            ClusterVersion?: string | undefined
            ClusterParameterGroupFamily?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeClusterVersions'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ClusterVersionsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeClusterVersions'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeClusterVersionsMessage }
        output: ClusterVersionsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeClusters': {
      $get: {
        input: {
          query: {
            ClusterIdentifier?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            TagKeys?: {}[] | undefined
            TagValues?: {}[] | undefined
            Action: 'DescribeClusters'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ClustersMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeClusters'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeClustersMessage }
        output: ClustersMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeDataShares': {
      $get: {
        input: {
          query: {
            DataShareArn?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeDataShares'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeDataSharesResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeDataShares'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDataSharesMessage }
        output: DescribeDataSharesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeDataSharesForConsumer': {
      $get: {
        input: {
          query: {
            ConsumerArn?: string | undefined
            Status?: 'ACTIVE' | 'AVAILABLE' | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeDataSharesForConsumer'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeDataSharesForConsumerResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeDataSharesForConsumer'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDataSharesForConsumerMessage }
        output: DescribeDataSharesForConsumerResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeDataSharesForProducer': {
      $get: {
        input: {
          query: {
            ProducerArn?: string | undefined
            Status?:
              | 'ACTIVE'
              | 'AUTHORIZED'
              | 'PENDING_AUTHORIZATION'
              | 'DEAUTHORIZED'
              | 'REJECTED'
              | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeDataSharesForProducer'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeDataSharesForProducerResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeDataSharesForProducer'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDataSharesForProducerMessage }
        output: DescribeDataSharesForProducerResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeDefaultClusterParameters': {
      $get: {
        input: {
          query: {
            ParameterGroupFamily: string
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeDefaultClusterParameters'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeDefaultClusterParametersResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeDefaultClusterParameters'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDefaultClusterParametersMessage }
        output: DescribeDefaultClusterParametersResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeEndpointAccess': {
      $get: {
        input: {
          query: {
            ClusterIdentifier?: string | undefined
            ResourceOwner?: string | undefined
            EndpointName?: string | undefined
            VpcId?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeEndpointAccess'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: EndpointAccessList
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeEndpointAccess'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEndpointAccessMessage }
        output: EndpointAccessList
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeEndpointAuthorization': {
      $get: {
        input: {
          query: {
            ClusterIdentifier?: string | undefined
            Account?: string | undefined
            Grantee?: boolean | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeEndpointAuthorization'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: EndpointAuthorizationList
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeEndpointAuthorization'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEndpointAuthorizationMessage }
        output: EndpointAuthorizationList
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
            Action: 'DescribeEventCategories'
            Version: '2012-12-01'
          }
        } & {
          header: {
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
        input: { query: { Action: 'DescribeEventCategories'; Version: '2012-12-01' } } & {
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
            MaxRecords?: number | undefined
            Marker?: string | undefined
            TagKeys?: {}[] | undefined
            TagValues?: {}[] | undefined
            Action: 'DescribeEventSubscriptions'
            Version: '2012-12-01'
          }
        } & {
          header: {
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
            Version: '2012-12-01'
          }
        } & {
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
              | 'cluster'
              | 'cluster-parameter-group'
              | 'cluster-security-group'
              | 'cluster-snapshot'
              | 'scheduled-action'
              | undefined
            StartTime?: string | undefined
            EndTime?: string | undefined
            Duration?: number | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeEvents'
            Version: '2012-12-01'
          }
        } & {
          header: {
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
            Version: '2012-12-01'
          }
        } & {
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
    '/#Action=DescribeHsmClientCertificates': {
      $get: {
        input: {
          query: {
            HsmClientCertificateIdentifier?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            TagKeys?: {}[] | undefined
            TagValues?: {}[] | undefined
            Action: 'DescribeHsmClientCertificates'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: HsmClientCertificateMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeHsmClientCertificates'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeHsmClientCertificatesMessage }
        output: HsmClientCertificateMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeHsmConfigurations': {
      $get: {
        input: {
          query: {
            HsmConfigurationIdentifier?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            TagKeys?: {}[] | undefined
            TagValues?: {}[] | undefined
            Action: 'DescribeHsmConfigurations'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: HsmConfigurationMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeHsmConfigurations'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeHsmConfigurationsMessage }
        output: HsmConfigurationMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeLoggingStatus': {
      $get: {
        input: {
          query: {
            ClusterIdentifier: string
            Action: 'DescribeLoggingStatus'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: LoggingStatus
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeLoggingStatus'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeLoggingStatusMessage }
        output: LoggingStatus
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeNodeConfigurationOptions': {
      $get: {
        input: {
          query: {
            ActionType: 'restore-cluster' | 'recommend-node-config' | 'resize-cluster'
            ClusterIdentifier?: string | undefined
            SnapshotIdentifier?: string | undefined
            SnapshotArn?: string | undefined
            OwnerAccount?: string | undefined
            Filter?:
              | { Name?: {} | undefined; Operator?: {} | undefined; Values?: {} | undefined }[]
              | undefined
            Marker?: string | undefined
            MaxRecords?: number | undefined
            Action: 'DescribeNodeConfigurationOptions'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: NodeConfigurationOptionsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeNodeConfigurationOptions'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeNodeConfigurationOptionsMessage }
        output: NodeConfigurationOptionsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeOrderableClusterOptions': {
      $get: {
        input: {
          query: {
            ClusterVersion?: string | undefined
            NodeType?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeOrderableClusterOptions'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: OrderableClusterOptionsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeOrderableClusterOptions'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeOrderableClusterOptionsMessage }
        output: OrderableClusterOptionsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribePartners': {
      $get: {
        input: {
          query: {
            AccountId: string
            ClusterIdentifier: string
            DatabaseName?: string | undefined
            PartnerName?: string | undefined
            Action: 'DescribePartners'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribePartnersOutputMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribePartners'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePartnersInputMessage }
        output: DescribePartnersOutputMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeReservedNodeExchangeStatus': {
      $get: {
        input: {
          query: {
            ReservedNodeId?: string | undefined
            ReservedNodeExchangeRequestId?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeReservedNodeExchangeStatus'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeReservedNodeExchangeStatusOutputMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeReservedNodeExchangeStatus'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeReservedNodeExchangeStatusInputMessage }
        output: DescribeReservedNodeExchangeStatusOutputMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeReservedNodeOfferings': {
      $get: {
        input: {
          query: {
            ReservedNodeOfferingId?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeReservedNodeOfferings'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ReservedNodeOfferingsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeReservedNodeOfferings'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeReservedNodeOfferingsMessage }
        output: ReservedNodeOfferingsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeReservedNodes': {
      $get: {
        input: {
          query: {
            ReservedNodeId?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeReservedNodes'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ReservedNodesMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeReservedNodes'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeReservedNodesMessage }
        output: ReservedNodesMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeResize': {
      $get: {
        input: {
          query: { ClusterIdentifier: string; Action: 'DescribeResize'; Version: '2012-12-01' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ResizeProgressMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeResize'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeResizeMessage }
        output: ResizeProgressMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeScheduledActions': {
      $get: {
        input: {
          query: {
            ScheduledActionName?: string | undefined
            TargetActionType?: 'ResizeCluster' | 'PauseCluster' | 'ResumeCluster' | undefined
            StartTime?: string | undefined
            EndTime?: string | undefined
            Active?: boolean | undefined
            Filters?: { Name: {}; Values: {} }[] | undefined
            Marker?: string | undefined
            MaxRecords?: number | undefined
            Action: 'DescribeScheduledActions'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ScheduledActionsMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeScheduledActions'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeScheduledActionsMessage }
        output: ScheduledActionsMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeSnapshotCopyGrants': {
      $get: {
        input: {
          query: {
            SnapshotCopyGrantName?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            TagKeys?: {}[] | undefined
            TagValues?: {}[] | undefined
            Action: 'DescribeSnapshotCopyGrants'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: SnapshotCopyGrantMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeSnapshotCopyGrants'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSnapshotCopyGrantsMessage }
        output: SnapshotCopyGrantMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeSnapshotSchedules': {
      $get: {
        input: {
          query: {
            ClusterIdentifier?: string | undefined
            ScheduleIdentifier?: string | undefined
            TagKeys?: {}[] | undefined
            TagValues?: {}[] | undefined
            Marker?: string | undefined
            MaxRecords?: number | undefined
            Action: 'DescribeSnapshotSchedules'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeSnapshotSchedulesOutputMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeSnapshotSchedules'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSnapshotSchedulesMessage }
        output: DescribeSnapshotSchedulesOutputMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeStorage': {
      $get: {
        input: { query: { Action: 'DescribeStorage'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CustomerStorageMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeStorage'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CustomerStorageMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeTableRestoreStatus': {
      $get: {
        input: {
          query: {
            ClusterIdentifier?: string | undefined
            TableRestoreRequestId?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'DescribeTableRestoreStatus'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: TableRestoreStatusMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeTableRestoreStatus'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTableRestoreStatusMessage }
        output: TableRestoreStatusMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeTags': {
      $get: {
        input: {
          query: {
            ResourceName?: string | undefined
            ResourceType?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            TagKeys?: {}[] | undefined
            TagValues?: {}[] | undefined
            Action: 'DescribeTags'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: TaggedResourceListMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeTags'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTagsMessage }
        output: TaggedResourceListMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeUsageLimits': {
      $get: {
        input: {
          query: {
            UsageLimitId?: string | undefined
            ClusterIdentifier?: string | undefined
            FeatureType?:
              | 'spectrum'
              | 'concurrency-scaling'
              | 'cross-region-datasharing'
              | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            TagKeys?: {}[] | undefined
            TagValues?: {}[] | undefined
            Action: 'DescribeUsageLimits'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UsageLimitList
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'DescribeUsageLimits'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeUsageLimitsMessage }
        output: UsageLimitList
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DisableLogging': {
      $get: {
        input: {
          query: { ClusterIdentifier: string; Action: 'DisableLogging'; Version: '2012-12-01' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: LoggingStatus
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DisableLogging'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableLoggingMessage }
        output: LoggingStatus
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DisableSnapshotCopy': {
      $get: {
        input: {
          query: { ClusterIdentifier: string; Action: 'DisableSnapshotCopy'; Version: '2012-12-01' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DisableSnapshotCopyResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DisableSnapshotCopy'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableSnapshotCopyMessage }
        output: DisableSnapshotCopyResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DisassociateDataShareConsumer': {
      $get: {
        input: {
          query: {
            DataShareArn: string
            DisassociateEntireAccount?: boolean | undefined
            ConsumerArn?: string | undefined
            ConsumerRegion?: string | undefined
            Action: 'DisassociateDataShareConsumer'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DataShare
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DisassociateDataShareConsumer'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateDataShareConsumerMessage }
        output: DataShare
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=EnableLogging': {
      $get: {
        input: {
          query: {
            ClusterIdentifier: string
            BucketName?: string | undefined
            S3KeyPrefix?: string | undefined
            LogDestinationType?: 's3' | 'cloudwatch' | undefined
            LogExports?: String[] | undefined
            Action: 'EnableLogging'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: LoggingStatus
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'EnableLogging'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableLoggingMessage }
        output: LoggingStatus
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=EnableSnapshotCopy': {
      $get: {
        input: {
          query: {
            ClusterIdentifier: string
            DestinationRegion: string
            RetentionPeriod?: number | undefined
            SnapshotCopyGrantName?: string | undefined
            ManualSnapshotRetentionPeriod?: number | undefined
            Action: 'EnableSnapshotCopy'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: EnableSnapshotCopyResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'EnableSnapshotCopy'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableSnapshotCopyMessage }
        output: EnableSnapshotCopyResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetClusterCredentials': {
      $get: {
        input: {
          query: {
            DbUser: string
            DbName?: string | undefined
            ClusterIdentifier: string
            DurationSeconds?: number | undefined
            AutoCreate?: boolean | undefined
            DbGroups?: {}[] | undefined
            Action: 'GetClusterCredentials'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ClusterCredentials
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetClusterCredentials'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetClusterCredentialsMessage }
        output: ClusterCredentials
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetClusterCredentialsWithIAM': {
      $get: {
        input: {
          query: {
            DbName?: string | undefined
            ClusterIdentifier: string
            DurationSeconds?: number | undefined
            Action: 'GetClusterCredentialsWithIAM'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ClusterExtendedCredentials
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetClusterCredentialsWithIAM'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetClusterCredentialsWithIAMMessage }
        output: ClusterExtendedCredentials
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetReservedNodeExchangeConfigurationOptions': {
      $get: {
        input: {
          query: {
            ActionType: 'restore-cluster' | 'resize-cluster'
            ClusterIdentifier?: string | undefined
            SnapshotIdentifier?: string | undefined
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'GetReservedNodeExchangeConfigurationOptions'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetReservedNodeExchangeConfigurationOptionsOutputMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'GetReservedNodeExchangeConfigurationOptions'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetReservedNodeExchangeConfigurationOptionsInputMessage }
        output: GetReservedNodeExchangeConfigurationOptionsOutputMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetReservedNodeExchangeOfferings': {
      $get: {
        input: {
          query: {
            ReservedNodeId: string
            MaxRecords?: number | undefined
            Marker?: string | undefined
            Action: 'GetReservedNodeExchangeOfferings'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetReservedNodeExchangeOfferingsOutputMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            Marker?: string | undefined
            Action: 'GetReservedNodeExchangeOfferings'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetReservedNodeExchangeOfferingsInputMessage }
        output: GetReservedNodeExchangeOfferingsOutputMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyAquaConfiguration': {
      $get: {
        input: {
          query: {
            ClusterIdentifier: string
            AquaConfigurationStatus?: 'enabled' | 'disabled' | 'auto' | undefined
            Action: 'ModifyAquaConfiguration'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyAquaOutputMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyAquaConfiguration'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyAquaInputMessage }
        output: ModifyAquaOutputMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyAuthenticationProfile': {
      $get: {
        input: {
          query: {
            AuthenticationProfileName: string
            AuthenticationProfileContent: string
            Action: 'ModifyAuthenticationProfile'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyAuthenticationProfileResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyAuthenticationProfile'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyAuthenticationProfileMessage }
        output: ModifyAuthenticationProfileResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyCluster': {
      $get: {
        input: {
          query: {
            ClusterIdentifier: string
            ClusterType?: string | undefined
            NodeType?: string | undefined
            NumberOfNodes?: number | undefined
            ClusterSecurityGroups?: {}[] | undefined
            VpcSecurityGroupIds?: {}[] | undefined
            MasterUserPassword?: string | undefined
            ClusterParameterGroupName?: string | undefined
            AutomatedSnapshotRetentionPeriod?: number | undefined
            ManualSnapshotRetentionPeriod?: number | undefined
            PreferredMaintenanceWindow?: string | undefined
            ClusterVersion?: string | undefined
            AllowVersionUpgrade?: boolean | undefined
            HsmClientCertificateIdentifier?: string | undefined
            HsmConfigurationIdentifier?: string | undefined
            NewClusterIdentifier?: string | undefined
            PubliclyAccessible?: boolean | undefined
            ElasticIp?: string | undefined
            EnhancedVpcRouting?: boolean | undefined
            MaintenanceTrackName?: string | undefined
            Encrypted?: boolean | undefined
            KmsKeyId?: string | undefined
            AvailabilityZoneRelocation?: boolean | undefined
            AvailabilityZone?: string | undefined
            Port?: number | undefined
            Action: 'ModifyCluster'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyClusterResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyCluster'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyClusterMessage }
        output: ModifyClusterResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyClusterDbRevision': {
      $get: {
        input: {
          query: {
            ClusterIdentifier: string
            RevisionTarget: string
            Action: 'ModifyClusterDbRevision'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyClusterDbRevisionResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyClusterDbRevision'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyClusterDbRevisionMessage }
        output: ModifyClusterDbRevisionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyClusterIamRoles': {
      $get: {
        input: {
          query: {
            ClusterIdentifier: string
            AddIamRoles?: {}[] | undefined
            RemoveIamRoles?: {}[] | undefined
            DefaultIamRoleArn?: string | undefined
            Action: 'ModifyClusterIamRoles'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyClusterIamRolesResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyClusterIamRoles'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyClusterIamRolesMessage }
        output: ModifyClusterIamRolesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyClusterMaintenance': {
      $get: {
        input: {
          query: {
            ClusterIdentifier: string
            DeferMaintenance?: boolean | undefined
            DeferMaintenanceIdentifier?: string | undefined
            DeferMaintenanceStartTime?: string | undefined
            DeferMaintenanceEndTime?: string | undefined
            DeferMaintenanceDuration?: number | undefined
            Action: 'ModifyClusterMaintenance'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyClusterMaintenanceResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyClusterMaintenance'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyClusterMaintenanceMessage }
        output: ModifyClusterMaintenanceResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyClusterParameterGroup': {
      $get: {
        input: {
          query: {
            ParameterGroupName: string
            Parameters: {
              ParameterName?: {} | undefined
              ParameterValue?: {} | undefined
              Description?: {} | undefined
              Source?: {} | undefined
              DataType?: {} | undefined
              AllowedValues?: {} | undefined
              ApplyType?: {} | undefined
              IsModifiable?: {} | undefined
              MinimumEngineVersion?: {} | undefined
            }[]
            Action: 'ModifyClusterParameterGroup'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ClusterParameterGroupNameMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyClusterParameterGroup'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyClusterParameterGroupMessage }
        output: ClusterParameterGroupNameMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyClusterSnapshot': {
      $get: {
        input: {
          query: {
            SnapshotIdentifier: string
            ManualSnapshotRetentionPeriod?: number | undefined
            Force?: boolean | undefined
            Action: 'ModifyClusterSnapshot'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyClusterSnapshotResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyClusterSnapshot'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyClusterSnapshotMessage }
        output: ModifyClusterSnapshotResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyClusterSnapshotSchedule': {
      $get: {
        input: {
          query: {
            ClusterIdentifier: string
            ScheduleIdentifier?: string | undefined
            DisassociateSchedule?: boolean | undefined
            Action: 'ModifyClusterSnapshotSchedule'
            Version: '2012-12-01'
          }
        } & {
          header: {
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
        input: { query: { Action: 'ModifyClusterSnapshotSchedule'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyClusterSnapshotScheduleMessage }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=ModifyClusterSubnetGroup': {
      $get: {
        input: {
          query: {
            ClusterSubnetGroupName: string
            Description?: string | undefined
            SubnetIds: {}[]
            Action: 'ModifyClusterSubnetGroup'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifyClusterSubnetGroupResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyClusterSubnetGroup'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyClusterSubnetGroupMessage }
        output: ModifyClusterSubnetGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyEndpointAccess': {
      $get: {
        input: {
          query: {
            EndpointName: string
            VpcSecurityGroupIds?: {}[] | undefined
            Action: 'ModifyEndpointAccess'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: EndpointAccess
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyEndpointAccess'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyEndpointAccessMessage }
        output: EndpointAccess
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
            SourceIds?: {}[] | undefined
            EventCategories?: {}[] | undefined
            Severity?: string | undefined
            Enabled?: boolean | undefined
            Action: 'ModifyEventSubscription'
            Version: '2012-12-01'
          }
        } & {
          header: {
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
        input: { query: { Action: 'ModifyEventSubscription'; Version: '2012-12-01' } } & {
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
    '/#Action=ModifyScheduledAction': {
      $get: {
        input: {
          query: {
            ScheduledActionName: string
            TargetAction?:
              | {
                  ResizeCluster?:
                    | {
                        ClusterIdentifier: {}
                        ClusterType?: {} | undefined
                        NodeType?: {} | undefined
                        NumberOfNodes?: {} | undefined
                        Classic?: {} | undefined
                        ReservedNodeId?: {} | undefined
                        TargetReservedNodeOfferingId?: {} | undefined
                      }
                    | undefined
                  PauseCluster?: { ClusterIdentifier: {} } | undefined
                  ResumeCluster?: { ClusterIdentifier: {} } | undefined
                }
              | undefined
            Schedule?: string | undefined
            IamRole?: string | undefined
            ScheduledActionDescription?: string | undefined
            StartTime?: string | undefined
            EndTime?: string | undefined
            Enable?: boolean | undefined
            Action: 'ModifyScheduledAction'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ScheduledAction
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyScheduledAction'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyScheduledActionMessage }
        output: ScheduledAction
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifySnapshotCopyRetentionPeriod': {
      $get: {
        input: {
          query: {
            ClusterIdentifier: string
            RetentionPeriod: number
            Manual?: boolean | undefined
            Action: 'ModifySnapshotCopyRetentionPeriod'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ModifySnapshotCopyRetentionPeriodResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifySnapshotCopyRetentionPeriod'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifySnapshotCopyRetentionPeriodMessage }
        output: ModifySnapshotCopyRetentionPeriodResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifySnapshotSchedule': {
      $get: {
        input: {
          query: {
            ScheduleIdentifier: string
            ScheduleDefinitions: {}[]
            Action: 'ModifySnapshotSchedule'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: SnapshotSchedule
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifySnapshotSchedule'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifySnapshotScheduleMessage }
        output: SnapshotSchedule
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ModifyUsageLimit': {
      $get: {
        input: {
          query: {
            UsageLimitId: string
            Amount?: number | undefined
            BreachAction?: 'log' | 'emit-metric' | 'disable' | undefined
            Action: 'ModifyUsageLimit'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UsageLimit
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ModifyUsageLimit'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyUsageLimitMessage }
        output: UsageLimit
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=PauseCluster': {
      $get: {
        input: {
          query: { ClusterIdentifier: string; Action: 'PauseCluster'; Version: '2012-12-01' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: PauseClusterResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'PauseCluster'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PauseClusterMessage }
        output: PauseClusterResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=PurchaseReservedNodeOffering': {
      $get: {
        input: {
          query: {
            ReservedNodeOfferingId: string
            NodeCount?: number | undefined
            Action: 'PurchaseReservedNodeOffering'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: PurchaseReservedNodeOfferingResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'PurchaseReservedNodeOffering'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PurchaseReservedNodeOfferingMessage }
        output: PurchaseReservedNodeOfferingResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RebootCluster': {
      $get: {
        input: {
          query: { ClusterIdentifier: string; Action: 'RebootCluster'; Version: '2012-12-01' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RebootClusterResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RebootCluster'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RebootClusterMessage }
        output: RebootClusterResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RejectDataShare': {
      $get: {
        input: {
          query: { DataShareArn: string; Action: 'RejectDataShare'; Version: '2012-12-01' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DataShare
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RejectDataShare'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RejectDataShareMessage }
        output: DataShare
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ResetClusterParameterGroup': {
      $get: {
        input: {
          query: {
            ParameterGroupName: string
            ResetAllParameters?: boolean | undefined
            Parameters?:
              | {
                  ParameterName?: {} | undefined
                  ParameterValue?: {} | undefined
                  Description?: {} | undefined
                  Source?: {} | undefined
                  DataType?: {} | undefined
                  AllowedValues?: {} | undefined
                  ApplyType?: {} | undefined
                  IsModifiable?: {} | undefined
                  MinimumEngineVersion?: {} | undefined
                }[]
              | undefined
            Action: 'ResetClusterParameterGroup'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ClusterParameterGroupNameMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ResetClusterParameterGroup'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResetClusterParameterGroupMessage }
        output: ClusterParameterGroupNameMessage
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ResizeCluster': {
      $get: {
        input: {
          query: {
            ClusterIdentifier: string
            ClusterType?: string | undefined
            NodeType?: string | undefined
            NumberOfNodes?: number | undefined
            Classic?: boolean | undefined
            ReservedNodeId?: string | undefined
            TargetReservedNodeOfferingId?: string | undefined
            Action: 'ResizeCluster'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ResizeClusterResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ResizeCluster'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResizeClusterMessage }
        output: ResizeClusterResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RestoreFromClusterSnapshot': {
      $get:
        | {
            input: {
              query: {
                ClusterIdentifier: string
                SnapshotIdentifier?: string | undefined
                SnapshotArn?: string | undefined
                SnapshotClusterIdentifier?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                AllowVersionUpgrade?: boolean | undefined
                ClusterSubnetGroupName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                OwnerAccount?: string | undefined
                HsmClientCertificateIdentifier?: string | undefined
                HsmConfigurationIdentifier?: string | undefined
                ElasticIp?: string | undefined
                ClusterParameterGroupName?: string | undefined
                ClusterSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                PreferredMaintenanceWindow?: string | undefined
                AutomatedSnapshotRetentionPeriod?: number | undefined
                ManualSnapshotRetentionPeriod?: number | undefined
                KmsKeyId?: string | undefined
                NodeType?: string | undefined
                EnhancedVpcRouting?: boolean | undefined
                AdditionalInfo?: string | undefined
                IamRoles?: {}[] | undefined
                MaintenanceTrackName?: string | undefined
                SnapshotScheduleIdentifier?: string | undefined
                NumberOfNodes?: number | undefined
                AvailabilityZoneRelocation?: boolean | undefined
                AquaConfigurationStatus?: 'enabled' | 'disabled' | 'auto' | undefined
                DefaultIamRoleArn?: string | undefined
                ReservedNodeId?: string | undefined
                TargetReservedNodeOfferingId?: string | undefined
                Encrypted?: boolean | undefined
                Action: 'RestoreFromClusterSnapshot'
                Version: '2012-12-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RestoreFromClusterSnapshotResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ClusterIdentifier: string
                SnapshotIdentifier?: string | undefined
                SnapshotArn?: string | undefined
                SnapshotClusterIdentifier?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                AllowVersionUpgrade?: boolean | undefined
                ClusterSubnetGroupName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                OwnerAccount?: string | undefined
                HsmClientCertificateIdentifier?: string | undefined
                HsmConfigurationIdentifier?: string | undefined
                ElasticIp?: string | undefined
                ClusterParameterGroupName?: string | undefined
                ClusterSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                PreferredMaintenanceWindow?: string | undefined
                AutomatedSnapshotRetentionPeriod?: number | undefined
                ManualSnapshotRetentionPeriod?: number | undefined
                KmsKeyId?: string | undefined
                NodeType?: string | undefined
                EnhancedVpcRouting?: boolean | undefined
                AdditionalInfo?: string | undefined
                IamRoles?: {}[] | undefined
                MaintenanceTrackName?: string | undefined
                SnapshotScheduleIdentifier?: string | undefined
                NumberOfNodes?: number | undefined
                AvailabilityZoneRelocation?: boolean | undefined
                AquaConfigurationStatus?: 'enabled' | 'disabled' | 'auto' | undefined
                DefaultIamRoleArn?: string | undefined
                ReservedNodeId?: string | undefined
                TargetReservedNodeOfferingId?: string | undefined
                Encrypted?: boolean | undefined
                Action: 'RestoreFromClusterSnapshot'
                Version: '2012-12-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependentServiceRequestThrottlingFault
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                ClusterIdentifier: string
                SnapshotIdentifier?: string | undefined
                SnapshotArn?: string | undefined
                SnapshotClusterIdentifier?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                AllowVersionUpgrade?: boolean | undefined
                ClusterSubnetGroupName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                OwnerAccount?: string | undefined
                HsmClientCertificateIdentifier?: string | undefined
                HsmConfigurationIdentifier?: string | undefined
                ElasticIp?: string | undefined
                ClusterParameterGroupName?: string | undefined
                ClusterSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                PreferredMaintenanceWindow?: string | undefined
                AutomatedSnapshotRetentionPeriod?: number | undefined
                ManualSnapshotRetentionPeriod?: number | undefined
                KmsKeyId?: string | undefined
                NodeType?: string | undefined
                EnhancedVpcRouting?: boolean | undefined
                AdditionalInfo?: string | undefined
                IamRoles?: {}[] | undefined
                MaintenanceTrackName?: string | undefined
                SnapshotScheduleIdentifier?: string | undefined
                NumberOfNodes?: number | undefined
                AvailabilityZoneRelocation?: boolean | undefined
                AquaConfigurationStatus?: 'enabled' | 'disabled' | 'auto' | undefined
                DefaultIamRoleArn?: string | undefined
                ReservedNodeId?: string | undefined
                TargetReservedNodeOfferingId?: string | undefined
                Encrypted?: boolean | undefined
                Action: 'RestoreFromClusterSnapshot'
                Version: '2012-12-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidClusterTrackFault
            outputFormat: 'text'
            status: 501
          }
        | {
            input: {
              query: {
                ClusterIdentifier: string
                SnapshotIdentifier?: string | undefined
                SnapshotArn?: string | undefined
                SnapshotClusterIdentifier?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                AllowVersionUpgrade?: boolean | undefined
                ClusterSubnetGroupName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                OwnerAccount?: string | undefined
                HsmClientCertificateIdentifier?: string | undefined
                HsmConfigurationIdentifier?: string | undefined
                ElasticIp?: string | undefined
                ClusterParameterGroupName?: string | undefined
                ClusterSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                PreferredMaintenanceWindow?: string | undefined
                AutomatedSnapshotRetentionPeriod?: number | undefined
                ManualSnapshotRetentionPeriod?: number | undefined
                KmsKeyId?: string | undefined
                NodeType?: string | undefined
                EnhancedVpcRouting?: boolean | undefined
                AdditionalInfo?: string | undefined
                IamRoles?: {}[] | undefined
                MaintenanceTrackName?: string | undefined
                SnapshotScheduleIdentifier?: string | undefined
                NumberOfNodes?: number | undefined
                AvailabilityZoneRelocation?: boolean | undefined
                AquaConfigurationStatus?: 'enabled' | 'disabled' | 'auto' | undefined
                DefaultIamRoleArn?: string | undefined
                ReservedNodeId?: string | undefined
                TargetReservedNodeOfferingId?: string | undefined
                Encrypted?: boolean | undefined
                Action: 'RestoreFromClusterSnapshot'
                Version: '2012-12-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: SnapshotScheduleNotFoundFault
            outputFormat: 'text'
            status: 502
          }
        | {
            input: {
              query: {
                ClusterIdentifier: string
                SnapshotIdentifier?: string | undefined
                SnapshotArn?: string | undefined
                SnapshotClusterIdentifier?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                AllowVersionUpgrade?: boolean | undefined
                ClusterSubnetGroupName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                OwnerAccount?: string | undefined
                HsmClientCertificateIdentifier?: string | undefined
                HsmConfigurationIdentifier?: string | undefined
                ElasticIp?: string | undefined
                ClusterParameterGroupName?: string | undefined
                ClusterSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                PreferredMaintenanceWindow?: string | undefined
                AutomatedSnapshotRetentionPeriod?: number | undefined
                ManualSnapshotRetentionPeriod?: number | undefined
                KmsKeyId?: string | undefined
                NodeType?: string | undefined
                EnhancedVpcRouting?: boolean | undefined
                AdditionalInfo?: string | undefined
                IamRoles?: {}[] | undefined
                MaintenanceTrackName?: string | undefined
                SnapshotScheduleIdentifier?: string | undefined
                NumberOfNodes?: number | undefined
                AvailabilityZoneRelocation?: boolean | undefined
                AquaConfigurationStatus?: 'enabled' | 'disabled' | 'auto' | undefined
                DefaultIamRoleArn?: string | undefined
                ReservedNodeId?: string | undefined
                TargetReservedNodeOfferingId?: string | undefined
                Encrypted?: boolean | undefined
                Action: 'RestoreFromClusterSnapshot'
                Version: '2012-12-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TagLimitExceededFault
            outputFormat: 'text'
            status: 503
          }
        | {
            input: {
              query: {
                ClusterIdentifier: string
                SnapshotIdentifier?: string | undefined
                SnapshotArn?: string | undefined
                SnapshotClusterIdentifier?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                AllowVersionUpgrade?: boolean | undefined
                ClusterSubnetGroupName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                OwnerAccount?: string | undefined
                HsmClientCertificateIdentifier?: string | undefined
                HsmConfigurationIdentifier?: string | undefined
                ElasticIp?: string | undefined
                ClusterParameterGroupName?: string | undefined
                ClusterSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                PreferredMaintenanceWindow?: string | undefined
                AutomatedSnapshotRetentionPeriod?: number | undefined
                ManualSnapshotRetentionPeriod?: number | undefined
                KmsKeyId?: string | undefined
                NodeType?: string | undefined
                EnhancedVpcRouting?: boolean | undefined
                AdditionalInfo?: string | undefined
                IamRoles?: {}[] | undefined
                MaintenanceTrackName?: string | undefined
                SnapshotScheduleIdentifier?: string | undefined
                NumberOfNodes?: number | undefined
                AvailabilityZoneRelocation?: boolean | undefined
                AquaConfigurationStatus?: 'enabled' | 'disabled' | 'auto' | undefined
                DefaultIamRoleArn?: string | undefined
                ReservedNodeId?: string | undefined
                TargetReservedNodeOfferingId?: string | undefined
                Encrypted?: boolean | undefined
                Action: 'RestoreFromClusterSnapshot'
                Version: '2012-12-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidTagFault
            outputFormat: 'text'
            status: 504
          }
        | {
            input: {
              query: {
                ClusterIdentifier: string
                SnapshotIdentifier?: string | undefined
                SnapshotArn?: string | undefined
                SnapshotClusterIdentifier?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                AllowVersionUpgrade?: boolean | undefined
                ClusterSubnetGroupName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                OwnerAccount?: string | undefined
                HsmClientCertificateIdentifier?: string | undefined
                HsmConfigurationIdentifier?: string | undefined
                ElasticIp?: string | undefined
                ClusterParameterGroupName?: string | undefined
                ClusterSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                PreferredMaintenanceWindow?: string | undefined
                AutomatedSnapshotRetentionPeriod?: number | undefined
                ManualSnapshotRetentionPeriod?: number | undefined
                KmsKeyId?: string | undefined
                NodeType?: string | undefined
                EnhancedVpcRouting?: boolean | undefined
                AdditionalInfo?: string | undefined
                IamRoles?: {}[] | undefined
                MaintenanceTrackName?: string | undefined
                SnapshotScheduleIdentifier?: string | undefined
                NumberOfNodes?: number | undefined
                AvailabilityZoneRelocation?: boolean | undefined
                AquaConfigurationStatus?: 'enabled' | 'disabled' | 'auto' | undefined
                DefaultIamRoleArn?: string | undefined
                ReservedNodeId?: string | undefined
                TargetReservedNodeOfferingId?: string | undefined
                Encrypted?: boolean | undefined
                Action: 'RestoreFromClusterSnapshot'
                Version: '2012-12-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ReservedNodeNotFoundFault
            outputFormat: 'text'
            status: 505
          }
        | {
            input: {
              query: {
                ClusterIdentifier: string
                SnapshotIdentifier?: string | undefined
                SnapshotArn?: string | undefined
                SnapshotClusterIdentifier?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                AllowVersionUpgrade?: boolean | undefined
                ClusterSubnetGroupName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                OwnerAccount?: string | undefined
                HsmClientCertificateIdentifier?: string | undefined
                HsmConfigurationIdentifier?: string | undefined
                ElasticIp?: string | undefined
                ClusterParameterGroupName?: string | undefined
                ClusterSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                PreferredMaintenanceWindow?: string | undefined
                AutomatedSnapshotRetentionPeriod?: number | undefined
                ManualSnapshotRetentionPeriod?: number | undefined
                KmsKeyId?: string | undefined
                NodeType?: string | undefined
                EnhancedVpcRouting?: boolean | undefined
                AdditionalInfo?: string | undefined
                IamRoles?: {}[] | undefined
                MaintenanceTrackName?: string | undefined
                SnapshotScheduleIdentifier?: string | undefined
                NumberOfNodes?: number | undefined
                AvailabilityZoneRelocation?: boolean | undefined
                AquaConfigurationStatus?: 'enabled' | 'disabled' | 'auto' | undefined
                DefaultIamRoleArn?: string | undefined
                ReservedNodeId?: string | undefined
                TargetReservedNodeOfferingId?: string | undefined
                Encrypted?: boolean | undefined
                Action: 'RestoreFromClusterSnapshot'
                Version: '2012-12-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidReservedNodeStateFault
            outputFormat: 'text'
            status: 506
          }
        | {
            input: {
              query: {
                ClusterIdentifier: string
                SnapshotIdentifier?: string | undefined
                SnapshotArn?: string | undefined
                SnapshotClusterIdentifier?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                AllowVersionUpgrade?: boolean | undefined
                ClusterSubnetGroupName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                OwnerAccount?: string | undefined
                HsmClientCertificateIdentifier?: string | undefined
                HsmConfigurationIdentifier?: string | undefined
                ElasticIp?: string | undefined
                ClusterParameterGroupName?: string | undefined
                ClusterSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                PreferredMaintenanceWindow?: string | undefined
                AutomatedSnapshotRetentionPeriod?: number | undefined
                ManualSnapshotRetentionPeriod?: number | undefined
                KmsKeyId?: string | undefined
                NodeType?: string | undefined
                EnhancedVpcRouting?: boolean | undefined
                AdditionalInfo?: string | undefined
                IamRoles?: {}[] | undefined
                MaintenanceTrackName?: string | undefined
                SnapshotScheduleIdentifier?: string | undefined
                NumberOfNodes?: number | undefined
                AvailabilityZoneRelocation?: boolean | undefined
                AquaConfigurationStatus?: 'enabled' | 'disabled' | 'auto' | undefined
                DefaultIamRoleArn?: string | undefined
                ReservedNodeId?: string | undefined
                TargetReservedNodeOfferingId?: string | undefined
                Encrypted?: boolean | undefined
                Action: 'RestoreFromClusterSnapshot'
                Version: '2012-12-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ReservedNodeAlreadyMigratedFault
            outputFormat: 'text'
            status: 507
          }
        | {
            input: {
              query: {
                ClusterIdentifier: string
                SnapshotIdentifier?: string | undefined
                SnapshotArn?: string | undefined
                SnapshotClusterIdentifier?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                AllowVersionUpgrade?: boolean | undefined
                ClusterSubnetGroupName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                OwnerAccount?: string | undefined
                HsmClientCertificateIdentifier?: string | undefined
                HsmConfigurationIdentifier?: string | undefined
                ElasticIp?: string | undefined
                ClusterParameterGroupName?: string | undefined
                ClusterSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                PreferredMaintenanceWindow?: string | undefined
                AutomatedSnapshotRetentionPeriod?: number | undefined
                ManualSnapshotRetentionPeriod?: number | undefined
                KmsKeyId?: string | undefined
                NodeType?: string | undefined
                EnhancedVpcRouting?: boolean | undefined
                AdditionalInfo?: string | undefined
                IamRoles?: {}[] | undefined
                MaintenanceTrackName?: string | undefined
                SnapshotScheduleIdentifier?: string | undefined
                NumberOfNodes?: number | undefined
                AvailabilityZoneRelocation?: boolean | undefined
                AquaConfigurationStatus?: 'enabled' | 'disabled' | 'auto' | undefined
                DefaultIamRoleArn?: string | undefined
                ReservedNodeId?: string | undefined
                TargetReservedNodeOfferingId?: string | undefined
                Encrypted?: boolean | undefined
                Action: 'RestoreFromClusterSnapshot'
                Version: '2012-12-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ReservedNodeOfferingNotFoundFault
            outputFormat: 'text'
            status: 508
          }
        | {
            input: {
              query: {
                ClusterIdentifier: string
                SnapshotIdentifier?: string | undefined
                SnapshotArn?: string | undefined
                SnapshotClusterIdentifier?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                AllowVersionUpgrade?: boolean | undefined
                ClusterSubnetGroupName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                OwnerAccount?: string | undefined
                HsmClientCertificateIdentifier?: string | undefined
                HsmConfigurationIdentifier?: string | undefined
                ElasticIp?: string | undefined
                ClusterParameterGroupName?: string | undefined
                ClusterSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                PreferredMaintenanceWindow?: string | undefined
                AutomatedSnapshotRetentionPeriod?: number | undefined
                ManualSnapshotRetentionPeriod?: number | undefined
                KmsKeyId?: string | undefined
                NodeType?: string | undefined
                EnhancedVpcRouting?: boolean | undefined
                AdditionalInfo?: string | undefined
                IamRoles?: {}[] | undefined
                MaintenanceTrackName?: string | undefined
                SnapshotScheduleIdentifier?: string | undefined
                NumberOfNodes?: number | undefined
                AvailabilityZoneRelocation?: boolean | undefined
                AquaConfigurationStatus?: 'enabled' | 'disabled' | 'auto' | undefined
                DefaultIamRoleArn?: string | undefined
                ReservedNodeId?: string | undefined
                TargetReservedNodeOfferingId?: string | undefined
                Encrypted?: boolean | undefined
                Action: 'RestoreFromClusterSnapshot'
                Version: '2012-12-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ReservedNodeAlreadyExistsFault
            outputFormat: 'text'
            status: 510
          }
        | {
            input: {
              query: {
                ClusterIdentifier: string
                SnapshotIdentifier?: string | undefined
                SnapshotArn?: string | undefined
                SnapshotClusterIdentifier?: string | undefined
                Port?: number | undefined
                AvailabilityZone?: string | undefined
                AllowVersionUpgrade?: boolean | undefined
                ClusterSubnetGroupName?: string | undefined
                PubliclyAccessible?: boolean | undefined
                OwnerAccount?: string | undefined
                HsmClientCertificateIdentifier?: string | undefined
                HsmConfigurationIdentifier?: string | undefined
                ElasticIp?: string | undefined
                ClusterParameterGroupName?: string | undefined
                ClusterSecurityGroups?: {}[] | undefined
                VpcSecurityGroupIds?: {}[] | undefined
                PreferredMaintenanceWindow?: string | undefined
                AutomatedSnapshotRetentionPeriod?: number | undefined
                ManualSnapshotRetentionPeriod?: number | undefined
                KmsKeyId?: string | undefined
                NodeType?: string | undefined
                EnhancedVpcRouting?: boolean | undefined
                AdditionalInfo?: string | undefined
                IamRoles?: {}[] | undefined
                MaintenanceTrackName?: string | undefined
                SnapshotScheduleIdentifier?: string | undefined
                NumberOfNodes?: number | undefined
                AvailabilityZoneRelocation?: boolean | undefined
                AquaConfigurationStatus?: 'enabled' | 'disabled' | 'auto' | undefined
                DefaultIamRoleArn?: string | undefined
                ReservedNodeId?: string | undefined
                TargetReservedNodeOfferingId?: string | undefined
                Encrypted?: boolean | undefined
                Action: 'RestoreFromClusterSnapshot'
                Version: '2012-12-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnsupportedOperationFault
            outputFormat: 'text'
            status: 511
          }
      $post:
        | {
            input: { query: { Action: 'RestoreFromClusterSnapshot'; Version: '2012-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreFromClusterSnapshotMessage }
            output: RestoreFromClusterSnapshotResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'RestoreFromClusterSnapshot'; Version: '2012-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreFromClusterSnapshotMessage }
            output: DependentServiceRequestThrottlingFault
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { Action: 'RestoreFromClusterSnapshot'; Version: '2012-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreFromClusterSnapshotMessage }
            output: InvalidClusterTrackFault
            outputFormat: 'text'
            status: 501
          }
        | {
            input: { query: { Action: 'RestoreFromClusterSnapshot'; Version: '2012-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreFromClusterSnapshotMessage }
            output: SnapshotScheduleNotFoundFault
            outputFormat: 'text'
            status: 502
          }
        | {
            input: { query: { Action: 'RestoreFromClusterSnapshot'; Version: '2012-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreFromClusterSnapshotMessage }
            output: TagLimitExceededFault
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { query: { Action: 'RestoreFromClusterSnapshot'; Version: '2012-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreFromClusterSnapshotMessage }
            output: InvalidTagFault
            outputFormat: 'text'
            status: 504
          }
        | {
            input: { query: { Action: 'RestoreFromClusterSnapshot'; Version: '2012-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreFromClusterSnapshotMessage }
            output: ReservedNodeNotFoundFault
            outputFormat: 'text'
            status: 505
          }
        | {
            input: { query: { Action: 'RestoreFromClusterSnapshot'; Version: '2012-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreFromClusterSnapshotMessage }
            output: InvalidReservedNodeStateFault
            outputFormat: 'text'
            status: 506
          }
        | {
            input: { query: { Action: 'RestoreFromClusterSnapshot'; Version: '2012-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreFromClusterSnapshotMessage }
            output: ReservedNodeAlreadyMigratedFault
            outputFormat: 'text'
            status: 507
          }
        | {
            input: { query: { Action: 'RestoreFromClusterSnapshot'; Version: '2012-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreFromClusterSnapshotMessage }
            output: ReservedNodeOfferingNotFoundFault
            outputFormat: 'text'
            status: 508
          }
        | {
            input: { query: { Action: 'RestoreFromClusterSnapshot'; Version: '2012-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreFromClusterSnapshotMessage }
            output: ReservedNodeAlreadyExistsFault
            outputFormat: 'text'
            status: 510
          }
        | {
            input: { query: { Action: 'RestoreFromClusterSnapshot'; Version: '2012-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreFromClusterSnapshotMessage }
            output: UnsupportedOperationFault
            outputFormat: 'text'
            status: 511
          }
    }
  } & {
    '/#Action=RestoreTableFromClusterSnapshot': {
      $get: {
        input: {
          query: {
            ClusterIdentifier: string
            SnapshotIdentifier: string
            SourceDatabaseName: string
            SourceSchemaName?: string | undefined
            SourceTableName: string
            TargetDatabaseName?: string | undefined
            TargetSchemaName?: string | undefined
            NewTableName: string
            EnableCaseSensitiveIdentifier?: boolean | undefined
            Action: 'RestoreTableFromClusterSnapshot'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RestoreTableFromClusterSnapshotResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RestoreTableFromClusterSnapshot'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RestoreTableFromClusterSnapshotMessage }
        output: RestoreTableFromClusterSnapshotResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ResumeCluster': {
      $get: {
        input: {
          query: { ClusterIdentifier: string; Action: 'ResumeCluster'; Version: '2012-12-01' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ResumeClusterResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ResumeCluster'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResumeClusterMessage }
        output: ResumeClusterResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RevokeClusterSecurityGroupIngress': {
      $get: {
        input: {
          query: {
            ClusterSecurityGroupName: string
            CIDRIP?: string | undefined
            EC2SecurityGroupName?: string | undefined
            EC2SecurityGroupOwnerId?: string | undefined
            Action: 'RevokeClusterSecurityGroupIngress'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RevokeClusterSecurityGroupIngressResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RevokeClusterSecurityGroupIngress'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RevokeClusterSecurityGroupIngressMessage }
        output: RevokeClusterSecurityGroupIngressResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RevokeEndpointAccess': {
      $get: {
        input: {
          query: {
            ClusterIdentifier?: string | undefined
            Account?: string | undefined
            VpcIds?: {}[] | undefined
            Force?: boolean | undefined
            Action: 'RevokeEndpointAccess'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: EndpointAuthorization
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RevokeEndpointAccess'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RevokeEndpointAccessMessage }
        output: EndpointAuthorization
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RevokeSnapshotAccess': {
      $get: {
        input: {
          query: {
            SnapshotIdentifier?: string | undefined
            SnapshotArn?: string | undefined
            SnapshotClusterIdentifier?: string | undefined
            AccountWithRestoreAccess: string
            Action: 'RevokeSnapshotAccess'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RevokeSnapshotAccessResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RevokeSnapshotAccess'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RevokeSnapshotAccessMessage }
        output: RevokeSnapshotAccessResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RotateEncryptionKey': {
      $get: {
        input: {
          query: { ClusterIdentifier: string; Action: 'RotateEncryptionKey'; Version: '2012-12-01' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RotateEncryptionKeyResult
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RotateEncryptionKey'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RotateEncryptionKeyMessage }
        output: RotateEncryptionKeyResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=UpdatePartnerStatus': {
      $get: {
        input: {
          query: {
            AccountId: string
            ClusterIdentifier: string
            DatabaseName: string
            PartnerName: string
            Status: 'Active' | 'Inactive' | 'RuntimeFailure' | 'ConnectionFailure'
            StatusMessage?: string | undefined
            Action: 'UpdatePartnerStatus'
            Version: '2012-12-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: PartnerIntegrationOutputMessage
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'UpdatePartnerStatus'; Version: '2012-12-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePartnerStatusInputMessage }
        output: PartnerIntegrationOutputMessage
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
