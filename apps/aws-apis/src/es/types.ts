type OwnerId = string
type DomainName = string
type Region = string
type AcceptInboundCrossClusterSearchConnectionResponse = {
  CrossClusterSearchConnection?:
    | {
        SourceDomainInfo?:
          | { OwnerId?: OwnerId | undefined; DomainName: DomainName; Region?: Region | undefined }
          | undefined
        DestinationDomainInfo?:
          | { OwnerId?: OwnerId | undefined; DomainName: DomainName; Region?: Region | undefined }
          | undefined
        CrossClusterSearchConnectionId?: {} | undefined
        ConnectionStatus?: { StatusCode?: {} | undefined; Message?: {} | undefined } | undefined
      }
    | undefined
}
type Tag = { Key: {}; Value: {} }
type PackageVersion = string
type ErrorType = string
type ErrorMessage = string
type AssociatePackageResponse = {
  DomainPackageDetails?:
    | {
        PackageID?: {} | undefined
        PackageName?: {} | undefined
        PackageType?: {} | undefined
        LastUpdated?: {} | undefined
        DomainName?: {} | undefined
        DomainPackageStatus?: {} | undefined
        PackageVersion?: PackageVersion | undefined
        ReferencePath?: {} | undefined
        ErrorDetails?:
          | { ErrorType?: ErrorType | undefined; ErrorMessage?: ErrorMessage | undefined }
          | undefined
      }
    | undefined
}
type AuthorizeVpcEndpointAccessResponse = {
  AuthorizedPrincipal: { PrincipalType?: {} | undefined; Principal?: {} | undefined }
}
type CancelElasticsearchServiceSoftwareUpdateResponse = {
  ServiceSoftwareOptions?:
    | {
        CurrentVersion?: {} | undefined
        NewVersion?: {} | undefined
        UpdateAvailable?: {} | undefined
        Cancellable?: {} | undefined
        UpdateStatus?: {} | undefined
        Description?: {} | undefined
        AutomatedUpdateDate?: {} | undefined
        OptionalDeployment?: {} | undefined
      }
    | undefined
}
type String = string
type CloudWatchLogsLogGroupArn = string
type LogPublishingOption = {
  CloudWatchLogsLogGroupArn?: CloudWatchLogsLogGroupArn | undefined
  Enabled?: {} | undefined
}
type ElasticsearchVersionString = string
type CreateElasticsearchDomainResponse = {
  DomainStatus?:
    | {
        DomainId: {}
        DomainName: {}
        ARN: {}
        Created?: {} | undefined
        Deleted?: {} | undefined
        Endpoint?: {} | undefined
        Endpoints?: {} | undefined
        Processing?: {} | undefined
        UpgradeProcessing?: {} | undefined
        ElasticsearchVersion?: ElasticsearchVersionString | undefined
        ElasticsearchClusterConfig: {
          InstanceType?: {} | undefined
          InstanceCount?: {} | undefined
          DedicatedMasterEnabled?: {} | undefined
          ZoneAwarenessEnabled?: {} | undefined
          ZoneAwarenessConfig?: { AvailabilityZoneCount?: {} | undefined } | undefined
          DedicatedMasterType?: {} | undefined
          DedicatedMasterCount?: {} | undefined
          WarmEnabled?: {} | undefined
          WarmType?: {} | undefined
          WarmCount?: {} | undefined
          ColdStorageOptions?: { Enabled: {} } | undefined
        }
        EBSOptions?:
          | {
              EBSEnabled?: {} | undefined
              VolumeType?: {} | undefined
              VolumeSize?: {} | undefined
              Iops?: {} | undefined
              Throughput?: {} | undefined
            }
          | undefined
        AccessPolicies?: {} | undefined
        SnapshotOptions?: { AutomatedSnapshotStartHour?: {} | undefined } | undefined
        VPCOptions?:
          | {
              VPCId?: {} | undefined
              SubnetIds?: {} | undefined
              AvailabilityZones?: {} | undefined
              SecurityGroupIds?: {} | undefined
            }
          | undefined
        CognitoOptions?:
          | {
              Enabled?: {} | undefined
              UserPoolId?: {} | undefined
              IdentityPoolId?: {} | undefined
              RoleArn?: {} | undefined
            }
          | undefined
        EncryptionAtRestOptions?:
          | { Enabled?: {} | undefined; KmsKeyId?: {} | undefined }
          | undefined
        NodeToNodeEncryptionOptions?: { Enabled?: {} | undefined } | undefined
        AdvancedOptions?: {} | undefined
        LogPublishingOptions?: {} | undefined
        ServiceSoftwareOptions?:
          | {
              CurrentVersion?: {} | undefined
              NewVersion?: {} | undefined
              UpdateAvailable?: {} | undefined
              Cancellable?: {} | undefined
              UpdateStatus?: {} | undefined
              Description?: {} | undefined
              AutomatedUpdateDate?: {} | undefined
              OptionalDeployment?: {} | undefined
            }
          | undefined
        DomainEndpointOptions?:
          | {
              EnforceHTTPS?: {} | undefined
              TLSSecurityPolicy?: {} | undefined
              CustomEndpointEnabled?: {} | undefined
              CustomEndpoint?: {} | undefined
              CustomEndpointCertificateArn?: {} | undefined
            }
          | undefined
        AdvancedSecurityOptions?:
          | {
              Enabled?: {} | undefined
              InternalUserDatabaseEnabled?: {} | undefined
              SAMLOptions?:
                | {
                    Enabled?: {} | undefined
                    Idp?: { MetadataContent: {}; EntityId: {} } | undefined
                    SubjectKey?: {} | undefined
                    RolesKey?: {} | undefined
                    SessionTimeoutMinutes?: {} | undefined
                  }
                | undefined
              AnonymousAuthDisableDate?: {} | undefined
              AnonymousAuthEnabled?: {} | undefined
            }
          | undefined
        AutoTuneOptions?: { State?: {} | undefined; ErrorMessage?: {} | undefined } | undefined
        ChangeProgressDetails?: { ChangeId?: {} | undefined; Message?: {} | undefined } | undefined
      }
    | undefined
}
type CreateOutboundCrossClusterSearchConnectionResponse = {
  SourceDomainInfo?:
    | { OwnerId?: OwnerId | undefined; DomainName: DomainName; Region?: Region | undefined }
    | undefined
  DestinationDomainInfo?:
    | { OwnerId?: OwnerId | undefined; DomainName: DomainName; Region?: Region | undefined }
    | undefined
  ConnectionAlias?: {} | undefined
  ConnectionStatus?: { StatusCode?: {} | undefined; Message?: {} | undefined } | undefined
  CrossClusterSearchConnectionId?: {} | undefined
}
type LastUpdated = string
type CreatePackageResponse = {
  PackageDetails?:
    | {
        PackageID?: {} | undefined
        PackageName?: {} | undefined
        PackageType?: {} | undefined
        PackageDescription?: {} | undefined
        PackageStatus?: {} | undefined
        CreatedAt?: {} | undefined
        LastUpdatedAt?: LastUpdated | undefined
        AvailablePackageVersion?: PackageVersion | undefined
        ErrorDetails?:
          | { ErrorType?: ErrorType | undefined; ErrorMessage?: ErrorMessage | undefined }
          | undefined
      }
    | undefined
}
type CreateVpcEndpointResponse = {
  VpcEndpoint: {
    VpcEndpointId?: {} | undefined
    VpcEndpointOwner?: {} | undefined
    DomainArn?: {} | undefined
    VpcOptions?:
      | {
          VPCId?: {} | undefined
          SubnetIds?: {} | undefined
          AvailabilityZones?: {} | undefined
          SecurityGroupIds?: {} | undefined
        }
      | undefined
    Status?: {} | undefined
    Endpoint?: {} | undefined
  }
}
type ListVpcEndpointsResponse = { VpcEndpointSummaryList: {}; NextToken: {} }
type DeleteElasticsearchDomainResponse = {
  DomainStatus?:
    | {
        DomainId: {}
        DomainName: {}
        ARN: {}
        Created?: {} | undefined
        Deleted?: {} | undefined
        Endpoint?: {} | undefined
        Endpoints?: {} | undefined
        Processing?: {} | undefined
        UpgradeProcessing?: {} | undefined
        ElasticsearchVersion?: ElasticsearchVersionString | undefined
        ElasticsearchClusterConfig: {
          InstanceType?: {} | undefined
          InstanceCount?: {} | undefined
          DedicatedMasterEnabled?: {} | undefined
          ZoneAwarenessEnabled?: {} | undefined
          ZoneAwarenessConfig?: { AvailabilityZoneCount?: {} | undefined } | undefined
          DedicatedMasterType?: {} | undefined
          DedicatedMasterCount?: {} | undefined
          WarmEnabled?: {} | undefined
          WarmType?: {} | undefined
          WarmCount?: {} | undefined
          ColdStorageOptions?: { Enabled: {} } | undefined
        }
        EBSOptions?:
          | {
              EBSEnabled?: {} | undefined
              VolumeType?: {} | undefined
              VolumeSize?: {} | undefined
              Iops?: {} | undefined
              Throughput?: {} | undefined
            }
          | undefined
        AccessPolicies?: {} | undefined
        SnapshotOptions?: { AutomatedSnapshotStartHour?: {} | undefined } | undefined
        VPCOptions?:
          | {
              VPCId?: {} | undefined
              SubnetIds?: {} | undefined
              AvailabilityZones?: {} | undefined
              SecurityGroupIds?: {} | undefined
            }
          | undefined
        CognitoOptions?:
          | {
              Enabled?: {} | undefined
              UserPoolId?: {} | undefined
              IdentityPoolId?: {} | undefined
              RoleArn?: {} | undefined
            }
          | undefined
        EncryptionAtRestOptions?:
          | { Enabled?: {} | undefined; KmsKeyId?: {} | undefined }
          | undefined
        NodeToNodeEncryptionOptions?: { Enabled?: {} | undefined } | undefined
        AdvancedOptions?: {} | undefined
        LogPublishingOptions?: {} | undefined
        ServiceSoftwareOptions?:
          | {
              CurrentVersion?: {} | undefined
              NewVersion?: {} | undefined
              UpdateAvailable?: {} | undefined
              Cancellable?: {} | undefined
              UpdateStatus?: {} | undefined
              Description?: {} | undefined
              AutomatedUpdateDate?: {} | undefined
              OptionalDeployment?: {} | undefined
            }
          | undefined
        DomainEndpointOptions?:
          | {
              EnforceHTTPS?: {} | undefined
              TLSSecurityPolicy?: {} | undefined
              CustomEndpointEnabled?: {} | undefined
              CustomEndpoint?: {} | undefined
              CustomEndpointCertificateArn?: {} | undefined
            }
          | undefined
        AdvancedSecurityOptions?:
          | {
              Enabled?: {} | undefined
              InternalUserDatabaseEnabled?: {} | undefined
              SAMLOptions?:
                | {
                    Enabled?: {} | undefined
                    Idp?: { MetadataContent: {}; EntityId: {} } | undefined
                    SubjectKey?: {} | undefined
                    RolesKey?: {} | undefined
                    SessionTimeoutMinutes?: {} | undefined
                  }
                | undefined
              AnonymousAuthDisableDate?: {} | undefined
              AnonymousAuthEnabled?: {} | undefined
            }
          | undefined
        AutoTuneOptions?: { State?: {} | undefined; ErrorMessage?: {} | undefined } | undefined
        ChangeProgressDetails?: { ChangeId?: {} | undefined; Message?: {} | undefined } | undefined
      }
    | undefined
}
type DescribeElasticsearchDomainResponse = {
  DomainStatus: {
    DomainId: {}
    DomainName: {}
    ARN: {}
    Created?: {} | undefined
    Deleted?: {} | undefined
    Endpoint?: {} | undefined
    Endpoints?: {} | undefined
    Processing?: {} | undefined
    UpgradeProcessing?: {} | undefined
    ElasticsearchVersion?: ElasticsearchVersionString | undefined
    ElasticsearchClusterConfig: {
      InstanceType?: {} | undefined
      InstanceCount?: {} | undefined
      DedicatedMasterEnabled?: {} | undefined
      ZoneAwarenessEnabled?: {} | undefined
      ZoneAwarenessConfig?: { AvailabilityZoneCount?: {} | undefined } | undefined
      DedicatedMasterType?: {} | undefined
      DedicatedMasterCount?: {} | undefined
      WarmEnabled?: {} | undefined
      WarmType?: {} | undefined
      WarmCount?: {} | undefined
      ColdStorageOptions?: { Enabled: {} } | undefined
    }
    EBSOptions?:
      | {
          EBSEnabled?: {} | undefined
          VolumeType?: {} | undefined
          VolumeSize?: {} | undefined
          Iops?: {} | undefined
          Throughput?: {} | undefined
        }
      | undefined
    AccessPolicies?: {} | undefined
    SnapshotOptions?: { AutomatedSnapshotStartHour?: {} | undefined } | undefined
    VPCOptions?:
      | {
          VPCId?: {} | undefined
          SubnetIds?: {} | undefined
          AvailabilityZones?: {} | undefined
          SecurityGroupIds?: {} | undefined
        }
      | undefined
    CognitoOptions?:
      | {
          Enabled?: {} | undefined
          UserPoolId?: {} | undefined
          IdentityPoolId?: {} | undefined
          RoleArn?: {} | undefined
        }
      | undefined
    EncryptionAtRestOptions?: { Enabled?: {} | undefined; KmsKeyId?: {} | undefined } | undefined
    NodeToNodeEncryptionOptions?: { Enabled?: {} | undefined } | undefined
    AdvancedOptions?: {} | undefined
    LogPublishingOptions?: {} | undefined
    ServiceSoftwareOptions?:
      | {
          CurrentVersion?: {} | undefined
          NewVersion?: {} | undefined
          UpdateAvailable?: {} | undefined
          Cancellable?: {} | undefined
          UpdateStatus?: {} | undefined
          Description?: {} | undefined
          AutomatedUpdateDate?: {} | undefined
          OptionalDeployment?: {} | undefined
        }
      | undefined
    DomainEndpointOptions?:
      | {
          EnforceHTTPS?: {} | undefined
          TLSSecurityPolicy?: {} | undefined
          CustomEndpointEnabled?: {} | undefined
          CustomEndpoint?: {} | undefined
          CustomEndpointCertificateArn?: {} | undefined
        }
      | undefined
    AdvancedSecurityOptions?:
      | {
          Enabled?: {} | undefined
          InternalUserDatabaseEnabled?: {} | undefined
          SAMLOptions?:
            | {
                Enabled?: {} | undefined
                Idp?: { MetadataContent: {}; EntityId: {} } | undefined
                SubjectKey?: {} | undefined
                RolesKey?: {} | undefined
                SessionTimeoutMinutes?: {} | undefined
              }
            | undefined
          AnonymousAuthDisableDate?: {} | undefined
          AnonymousAuthEnabled?: {} | undefined
        }
      | undefined
    AutoTuneOptions?: { State?: {} | undefined; ErrorMessage?: {} | undefined } | undefined
    ChangeProgressDetails?: { ChangeId?: {} | undefined; Message?: {} | undefined } | undefined
  }
}
type DeleteInboundCrossClusterSearchConnectionResponse = {
  CrossClusterSearchConnection?:
    | {
        SourceDomainInfo?:
          | { OwnerId?: OwnerId | undefined; DomainName: DomainName; Region?: Region | undefined }
          | undefined
        DestinationDomainInfo?:
          | { OwnerId?: OwnerId | undefined; DomainName: DomainName; Region?: Region | undefined }
          | undefined
        CrossClusterSearchConnectionId?: {} | undefined
        ConnectionStatus?: { StatusCode?: {} | undefined; Message?: {} | undefined } | undefined
      }
    | undefined
}
type DeleteOutboundCrossClusterSearchConnectionResponse = {
  CrossClusterSearchConnection?:
    | {
        SourceDomainInfo?:
          | { OwnerId?: OwnerId | undefined; DomainName: DomainName; Region?: Region | undefined }
          | undefined
        DestinationDomainInfo?:
          | { OwnerId?: OwnerId | undefined; DomainName: DomainName; Region?: Region | undefined }
          | undefined
        CrossClusterSearchConnectionId?: {} | undefined
        ConnectionAlias?: {} | undefined
        ConnectionStatus?: { StatusCode?: {} | undefined; Message?: {} | undefined } | undefined
      }
    | undefined
}
type DeletePackageResponse = {
  PackageDetails?:
    | {
        PackageID?: {} | undefined
        PackageName?: {} | undefined
        PackageType?: {} | undefined
        PackageDescription?: {} | undefined
        PackageStatus?: {} | undefined
        CreatedAt?: {} | undefined
        LastUpdatedAt?: LastUpdated | undefined
        AvailablePackageVersion?: PackageVersion | undefined
        ErrorDetails?:
          | { ErrorType?: ErrorType | undefined; ErrorMessage?: ErrorMessage | undefined }
          | undefined
      }
    | undefined
}
type DeleteVpcEndpointResponse = {
  VpcEndpointSummary: {
    VpcEndpointId?: {} | undefined
    VpcEndpointOwner?: {} | undefined
    DomainArn?: {} | undefined
    Status?: {} | undefined
  }
}
type DescribeDomainAutoTunesResponse = { AutoTunes?: {} | undefined; NextToken?: {} | undefined }
type DescribeDomainChangeProgressResponse = {
  ChangeProgressStatus?:
    | {
        ChangeId?: {} | undefined
        StartTime?: {} | undefined
        Status?: {} | undefined
        PendingProperties?: {} | undefined
        CompletedProperties?: {} | undefined
        TotalNumberOfStages?: {} | undefined
        ChangeProgressStages?: {} | undefined
      }
    | undefined
}
type DescribeElasticsearchDomainConfigResponse = {
  DomainConfig: {
    ElasticsearchVersion?:
      | {
          Options: {}
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    ElasticsearchClusterConfig?:
      | {
          Options: {
            InstanceType?: {} | undefined
            InstanceCount?: {} | undefined
            DedicatedMasterEnabled?: {} | undefined
            ZoneAwarenessEnabled?: {} | undefined
            ZoneAwarenessConfig?: { AvailabilityZoneCount?: {} | undefined } | undefined
            DedicatedMasterType?: {} | undefined
            DedicatedMasterCount?: {} | undefined
            WarmEnabled?: {} | undefined
            WarmType?: {} | undefined
            WarmCount?: {} | undefined
            ColdStorageOptions?: { Enabled: {} } | undefined
          }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    EBSOptions?:
      | {
          Options: {
            EBSEnabled?: {} | undefined
            VolumeType?: {} | undefined
            VolumeSize?: {} | undefined
            Iops?: {} | undefined
            Throughput?: {} | undefined
          }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    AccessPolicies?:
      | {
          Options: {}
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    SnapshotOptions?:
      | {
          Options: { AutomatedSnapshotStartHour?: {} | undefined }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    VPCOptions?:
      | {
          Options: {
            VPCId?: {} | undefined
            SubnetIds?: {} | undefined
            AvailabilityZones?: {} | undefined
            SecurityGroupIds?: {} | undefined
          }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    CognitoOptions?:
      | {
          Options: {
            Enabled?: {} | undefined
            UserPoolId?: {} | undefined
            IdentityPoolId?: {} | undefined
            RoleArn?: {} | undefined
          }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    EncryptionAtRestOptions?:
      | {
          Options: { Enabled?: {} | undefined; KmsKeyId?: {} | undefined }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    NodeToNodeEncryptionOptions?:
      | {
          Options: { Enabled?: {} | undefined }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    AdvancedOptions?:
      | {
          Options: {}
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    LogPublishingOptions?:
      | {
          Options?: {} | undefined
          Status?:
            | {
                CreationDate: {}
                UpdateDate: {}
                UpdateVersion?: {} | undefined
                State: {}
                PendingDeletion?: {} | undefined
              }
            | undefined
        }
      | undefined
    DomainEndpointOptions?:
      | {
          Options: {
            EnforceHTTPS?: {} | undefined
            TLSSecurityPolicy?: {} | undefined
            CustomEndpointEnabled?: {} | undefined
            CustomEndpoint?: {} | undefined
            CustomEndpointCertificateArn?: {} | undefined
          }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    AdvancedSecurityOptions?:
      | {
          Options: {
            Enabled?: {} | undefined
            InternalUserDatabaseEnabled?: {} | undefined
            SAMLOptions?:
              | {
                  Enabled?: {} | undefined
                  Idp?: { MetadataContent: {}; EntityId: {} } | undefined
                  SubjectKey?: {} | undefined
                  RolesKey?: {} | undefined
                  SessionTimeoutMinutes?: {} | undefined
                }
              | undefined
            AnonymousAuthDisableDate?: {} | undefined
            AnonymousAuthEnabled?: {} | undefined
          }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    AutoTuneOptions?:
      | {
          Options?:
            | {
                DesiredState?: {} | undefined
                RollbackOnDisable?: {} | undefined
                MaintenanceSchedules?: {} | undefined
              }
            | undefined
          Status?:
            | {
                CreationDate: {}
                UpdateDate: {}
                UpdateVersion?: {} | undefined
                State: {}
                ErrorMessage?: {} | undefined
                PendingDeletion?: {} | undefined
              }
            | undefined
        }
      | undefined
    ChangeProgressDetails?: { ChangeId?: {} | undefined; Message?: {} | undefined } | undefined
  }
}
type UpdateElasticsearchDomainConfigResponse = {
  DomainConfig: {
    ElasticsearchVersion?:
      | {
          Options: {}
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    ElasticsearchClusterConfig?:
      | {
          Options: {
            InstanceType?: {} | undefined
            InstanceCount?: {} | undefined
            DedicatedMasterEnabled?: {} | undefined
            ZoneAwarenessEnabled?: {} | undefined
            ZoneAwarenessConfig?: { AvailabilityZoneCount?: {} | undefined } | undefined
            DedicatedMasterType?: {} | undefined
            DedicatedMasterCount?: {} | undefined
            WarmEnabled?: {} | undefined
            WarmType?: {} | undefined
            WarmCount?: {} | undefined
            ColdStorageOptions?: { Enabled: {} } | undefined
          }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    EBSOptions?:
      | {
          Options: {
            EBSEnabled?: {} | undefined
            VolumeType?: {} | undefined
            VolumeSize?: {} | undefined
            Iops?: {} | undefined
            Throughput?: {} | undefined
          }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    AccessPolicies?:
      | {
          Options: {}
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    SnapshotOptions?:
      | {
          Options: { AutomatedSnapshotStartHour?: {} | undefined }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    VPCOptions?:
      | {
          Options: {
            VPCId?: {} | undefined
            SubnetIds?: {} | undefined
            AvailabilityZones?: {} | undefined
            SecurityGroupIds?: {} | undefined
          }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    CognitoOptions?:
      | {
          Options: {
            Enabled?: {} | undefined
            UserPoolId?: {} | undefined
            IdentityPoolId?: {} | undefined
            RoleArn?: {} | undefined
          }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    EncryptionAtRestOptions?:
      | {
          Options: { Enabled?: {} | undefined; KmsKeyId?: {} | undefined }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    NodeToNodeEncryptionOptions?:
      | {
          Options: { Enabled?: {} | undefined }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    AdvancedOptions?:
      | {
          Options: {}
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    LogPublishingOptions?:
      | {
          Options?: {} | undefined
          Status?:
            | {
                CreationDate: {}
                UpdateDate: {}
                UpdateVersion?: {} | undefined
                State: {}
                PendingDeletion?: {} | undefined
              }
            | undefined
        }
      | undefined
    DomainEndpointOptions?:
      | {
          Options: {
            EnforceHTTPS?: {} | undefined
            TLSSecurityPolicy?: {} | undefined
            CustomEndpointEnabled?: {} | undefined
            CustomEndpoint?: {} | undefined
            CustomEndpointCertificateArn?: {} | undefined
          }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    AdvancedSecurityOptions?:
      | {
          Options: {
            Enabled?: {} | undefined
            InternalUserDatabaseEnabled?: {} | undefined
            SAMLOptions?:
              | {
                  Enabled?: {} | undefined
                  Idp?: { MetadataContent: {}; EntityId: {} } | undefined
                  SubjectKey?: {} | undefined
                  RolesKey?: {} | undefined
                  SessionTimeoutMinutes?: {} | undefined
                }
              | undefined
            AnonymousAuthDisableDate?: {} | undefined
            AnonymousAuthEnabled?: {} | undefined
          }
          Status: {
            CreationDate: {}
            UpdateDate: {}
            UpdateVersion?: {} | undefined
            State: {}
            PendingDeletion?: {} | undefined
          }
        }
      | undefined
    AutoTuneOptions?:
      | {
          Options?:
            | {
                DesiredState?: {} | undefined
                RollbackOnDisable?: {} | undefined
                MaintenanceSchedules?: {} | undefined
              }
            | undefined
          Status?:
            | {
                CreationDate: {}
                UpdateDate: {}
                UpdateVersion?: {} | undefined
                State: {}
                ErrorMessage?: {} | undefined
                PendingDeletion?: {} | undefined
              }
            | undefined
        }
      | undefined
    ChangeProgressDetails?: { ChangeId?: {} | undefined; Message?: {} | undefined } | undefined
  }
  DryRunResults?: { DeploymentType?: {} | undefined; Message?: {} | undefined } | undefined
}
type DescribeElasticsearchDomainsResponse = { DomainStatusList: {} }
type MinimumInstanceCount = number
type MaximumInstanceCount = number
type InstanceCountLimits = {
  MinimumInstanceCount?: MinimumInstanceCount | undefined
  MaximumInstanceCount?: MaximumInstanceCount | undefined
}
type InstanceLimits = { InstanceCountLimits?: InstanceCountLimits | undefined }
type Limits = {
  StorageTypes?: {} | undefined
  InstanceLimits?: InstanceLimits | undefined
  AdditionalLimits?: {} | undefined
}
type LimitsByRole = { [x: string]: Limits }
type DescribeElasticsearchInstanceTypeLimitsResponse = { LimitsByRole?: LimitsByRole | undefined }
type Filter = { Name?: {} | undefined; Values?: {} | undefined }
type DescribeInboundCrossClusterSearchConnectionsResponse = {
  CrossClusterSearchConnections?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeOutboundCrossClusterSearchConnectionsResponse = {
  CrossClusterSearchConnections?: {} | undefined
  NextToken?: {} | undefined
}
type DescribePackagesFilter = { Name?: {} | undefined; Value?: {} | undefined }
type DescribePackagesResponse = {
  PackageDetailsList?: {} | undefined
  NextToken?: String | undefined
}
type DescribeReservedElasticsearchInstanceOfferingsResponse = {
  NextToken?: {} | undefined
  ReservedElasticsearchInstanceOfferings?: {} | undefined
}
type DescribeReservedElasticsearchInstancesResponse = {
  NextToken?: {} | undefined
  ReservedElasticsearchInstances?: {} | undefined
}
type VpcEndpointId = string
type DescribeVpcEndpointsResponse = { VpcEndpoints: {}; VpcEndpointErrors: {} }
type DissociatePackageResponse = {
  DomainPackageDetails?:
    | {
        PackageID?: {} | undefined
        PackageName?: {} | undefined
        PackageType?: {} | undefined
        LastUpdated?: {} | undefined
        DomainName?: {} | undefined
        DomainPackageStatus?: {} | undefined
        PackageVersion?: PackageVersion | undefined
        ReferencePath?: {} | undefined
        ErrorDetails?:
          | { ErrorType?: ErrorType | undefined; ErrorMessage?: ErrorMessage | undefined }
          | undefined
      }
    | undefined
}
type GetCompatibleElasticsearchVersionsResponse = {
  CompatibleElasticsearchVersions?: {} | undefined
}
type PackageID = string
type GetPackageVersionHistoryResponse = {
  PackageID?: PackageID | undefined
  PackageVersionHistoryList?: {} | undefined
  NextToken?: String | undefined
}
type GetUpgradeHistoryResponse = { UpgradeHistories?: {} | undefined; NextToken?: {} | undefined }
type GetUpgradeStatusResponse = {
  UpgradeStep?: {} | undefined
  StepStatus?: {} | undefined
  UpgradeName?: {} | undefined
}
type ListDomainNamesResponse = { DomainNames?: {} | undefined }
type ListDomainsForPackageResponse = {
  DomainPackageDetailsList?: {} | undefined
  NextToken?: String | undefined
}
type ListElasticsearchInstanceTypesResponse = {
  ElasticsearchInstanceTypes?: {} | undefined
  NextToken?: {} | undefined
}
type ElasticsearchVersionList = ElasticsearchVersionString[]
type NextToken = string
type ListElasticsearchVersionsResponse = {
  ElasticsearchVersions?: ElasticsearchVersionList | undefined
  NextToken?: NextToken | undefined
}
type ListPackagesForDomainResponse = {
  DomainPackageDetailsList?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsResponse = { TagList?: {} | undefined }
type ListVpcEndpointAccessResponse = { AuthorizedPrincipalList: {}; NextToken: {} }
type ListVpcEndpointsForDomainResponse = { VpcEndpointSummaryList: {}; NextToken: {} }
type PurchaseReservedElasticsearchInstanceOfferingResponse = {
  ReservedElasticsearchInstanceId?: {} | undefined
  ReservationName?: {} | undefined
}
type RejectInboundCrossClusterSearchConnectionResponse = {
  CrossClusterSearchConnection?:
    | {
        SourceDomainInfo?:
          | { OwnerId?: OwnerId | undefined; DomainName: DomainName; Region?: Region | undefined }
          | undefined
        DestinationDomainInfo?:
          | { OwnerId?: OwnerId | undefined; DomainName: DomainName; Region?: Region | undefined }
          | undefined
        CrossClusterSearchConnectionId?: {} | undefined
        ConnectionStatus?: { StatusCode?: {} | undefined; Message?: {} | undefined } | undefined
      }
    | undefined
}
type RevokeVpcEndpointAccessResponse = { [x: string]: unknown }
type StartElasticsearchServiceSoftwareUpdateResponse = {
  ServiceSoftwareOptions?:
    | {
        CurrentVersion?: {} | undefined
        NewVersion?: {} | undefined
        UpdateAvailable?: {} | undefined
        Cancellable?: {} | undefined
        UpdateStatus?: {} | undefined
        Description?: {} | undefined
        AutomatedUpdateDate?: {} | undefined
        OptionalDeployment?: {} | undefined
      }
    | undefined
}
type UpdatePackageResponse = {
  PackageDetails?:
    | {
        PackageID?: {} | undefined
        PackageName?: {} | undefined
        PackageType?: {} | undefined
        PackageDescription?: {} | undefined
        PackageStatus?: {} | undefined
        CreatedAt?: {} | undefined
        LastUpdatedAt?: LastUpdated | undefined
        AvailablePackageVersion?: PackageVersion | undefined
        ErrorDetails?:
          | { ErrorType?: ErrorType | undefined; ErrorMessage?: ErrorMessage | undefined }
          | undefined
      }
    | undefined
}
type UpdateVpcEndpointResponse = {
  VpcEndpoint: {
    VpcEndpointId?: {} | undefined
    VpcEndpointOwner?: {} | undefined
    DomainArn?: {} | undefined
    VpcOptions?:
      | {
          VPCId?: {} | undefined
          SubnetIds?: {} | undefined
          AvailabilityZones?: {} | undefined
          SecurityGroupIds?: {} | undefined
        }
      | undefined
    Status?: {} | undefined
    Endpoint?: {} | undefined
  }
}
type ChangeProgressDetails = { ChangeId?: {} | undefined; Message?: {} | undefined }
type UpgradeElasticsearchDomainResponse = {
  DomainName?: DomainName | undefined
  TargetVersion?: {} | undefined
  PerformCheckOnly?: {} | undefined
  ChangeProgressDetails?: ChangeProgressDetails | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/2015-01-01/es/ccs/inboundConnection/:ConnectionId/accept': {
      $put: {
        input: { param: { ConnectionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: AcceptInboundCrossClusterSearchConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/tags': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ARN: string; TagList: Tag[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/2015-01-01/packages/associate/:PackageID/:DomainName': {
      $post: {
        input: { param: { PackageID: string; DomainName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: AssociatePackageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/domain/:DomainName/authorizeVpcEndpointAccess': {
      $post: {
        input: { param: { DomainName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Account: string } }
        output: AuthorizeVpcEndpointAccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/serviceSoftwareUpdate/cancel': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { DomainName: string } }
        output: CancelElasticsearchServiceSoftwareUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/domain': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            DomainName: string
            ElasticsearchVersion?: string | undefined
            ElasticsearchClusterConfig?:
              | {
                  InstanceType?: {} | undefined
                  InstanceCount?: {} | undefined
                  DedicatedMasterEnabled?: {} | undefined
                  ZoneAwarenessEnabled?: {} | undefined
                  ZoneAwarenessConfig?: { AvailabilityZoneCount?: {} | undefined } | undefined
                  DedicatedMasterType?: {} | undefined
                  DedicatedMasterCount?: {} | undefined
                  WarmEnabled?: {} | undefined
                  WarmType?: {} | undefined
                  WarmCount?: {} | undefined
                  ColdStorageOptions?: { Enabled: {} } | undefined
                }
              | undefined
            EBSOptions?:
              | {
                  EBSEnabled?: {} | undefined
                  VolumeType?: {} | undefined
                  VolumeSize?: {} | undefined
                  Iops?: {} | undefined
                  Throughput?: {} | undefined
                }
              | undefined
            AccessPolicies?: string | undefined
            SnapshotOptions?: { AutomatedSnapshotStartHour?: {} | undefined } | undefined
            VPCOptions?:
              | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
              | undefined
            CognitoOptions?:
              | {
                  Enabled?: {} | undefined
                  UserPoolId?: {} | undefined
                  IdentityPoolId?: {} | undefined
                  RoleArn?: {} | undefined
                }
              | undefined
            EncryptionAtRestOptions?:
              | { Enabled?: {} | undefined; KmsKeyId?: {} | undefined }
              | undefined
            NodeToNodeEncryptionOptions?: { Enabled?: {} | undefined } | undefined
            AdvancedOptions?: { [x: string]: String } | undefined
            LogPublishingOptions?: { [x: string]: LogPublishingOption } | undefined
            DomainEndpointOptions?:
              | {
                  EnforceHTTPS?: {} | undefined
                  TLSSecurityPolicy?: {} | undefined
                  CustomEndpointEnabled?: {} | undefined
                  CustomEndpoint?: {} | undefined
                  CustomEndpointCertificateArn?: {} | undefined
                }
              | undefined
            AdvancedSecurityOptions?:
              | {
                  Enabled?: {} | undefined
                  InternalUserDatabaseEnabled?: {} | undefined
                  MasterUserOptions?:
                    | {
                        MasterUserARN?: {} | undefined
                        MasterUserName?: {} | undefined
                        MasterUserPassword?: {} | undefined
                      }
                    | undefined
                  SAMLOptions?:
                    | {
                        Enabled?: {} | undefined
                        Idp?: { MetadataContent: {}; EntityId: {} } | undefined
                        MasterUserName?: {} | undefined
                        MasterBackendRole?: {} | undefined
                        SubjectKey?: {} | undefined
                        RolesKey?: {} | undefined
                        SessionTimeoutMinutes?: {} | undefined
                      }
                    | undefined
                  AnonymousAuthEnabled?: {} | undefined
                }
              | undefined
            AutoTuneOptions?:
              | { DesiredState?: {} | undefined; MaintenanceSchedules?: {} | undefined }
              | undefined
            TagList?: Tag[] | undefined
          }
        }
        output: CreateElasticsearchDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/ccs/outboundConnection': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            SourceDomainInfo: {
              OwnerId?: OwnerId | undefined
              DomainName?: DomainName | undefined
              Region?: Region | undefined
            }
            DestinationDomainInfo: {
              OwnerId?: OwnerId | undefined
              DomainName?: DomainName | undefined
              Region?: Region | undefined
            }
            ConnectionAlias: string
          }
        }
        output: CreateOutboundCrossClusterSearchConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/packages': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            PackageName: string
            PackageType: 'TXT-DICTIONARY'
            PackageDescription?: string | undefined
            PackageSource: { S3BucketName?: {} | undefined; S3Key?: {} | undefined }
          }
        }
        output: CreatePackageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/vpcEndpoints': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            DomainArn: string
            VpcOptions: { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
            ClientToken?: string | undefined
          }
        }
        output: CreateVpcEndpointResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListVpcEndpointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/domain/:DomainName': {
      $delete: {
        input: { param: { DomainName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteElasticsearchDomainResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { DomainName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeElasticsearchDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/role': {
      $delete: {
        input: {
          header: {
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
    }
  } & {
    '/2015-01-01/es/ccs/inboundConnection/:ConnectionId': {
      $delete: {
        input: { param: { ConnectionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteInboundCrossClusterSearchConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/ccs/outboundConnection/:ConnectionId': {
      $delete: {
        input: { param: { ConnectionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteOutboundCrossClusterSearchConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/packages/:PackageID': {
      $delete: {
        input: { param: { PackageID: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeletePackageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/vpcEndpoints/:VpcEndpointId': {
      $delete: {
        input: { param: { VpcEndpointId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteVpcEndpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/domain/:DomainName/autoTunes': {
      $get: {
        input: { param: { DomainName: string } } & {
          query: { MaxResults?: string | undefined; NextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
        output: DescribeDomainAutoTunesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/domain/:DomainName/progress': {
      $get: {
        input: { param: { DomainName: string } } & { query: { changeid?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeDomainChangeProgressResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/domain/:DomainName/config': {
      $get: {
        input: { param: { DomainName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeElasticsearchDomainConfigResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { DomainName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            ElasticsearchClusterConfig?:
              | {
                  InstanceType?: {} | undefined
                  InstanceCount?: {} | undefined
                  DedicatedMasterEnabled?: {} | undefined
                  ZoneAwarenessEnabled?: {} | undefined
                  ZoneAwarenessConfig?: { AvailabilityZoneCount?: {} | undefined } | undefined
                  DedicatedMasterType?: {} | undefined
                  DedicatedMasterCount?: {} | undefined
                  WarmEnabled?: {} | undefined
                  WarmType?: {} | undefined
                  WarmCount?: {} | undefined
                  ColdStorageOptions?: { Enabled: {} } | undefined
                }
              | undefined
            EBSOptions?:
              | {
                  EBSEnabled?: {} | undefined
                  VolumeType?: {} | undefined
                  VolumeSize?: {} | undefined
                  Iops?: {} | undefined
                  Throughput?: {} | undefined
                }
              | undefined
            SnapshotOptions?: { AutomatedSnapshotStartHour?: {} | undefined } | undefined
            VPCOptions?:
              | { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
              | undefined
            CognitoOptions?:
              | {
                  Enabled?: {} | undefined
                  UserPoolId?: {} | undefined
                  IdentityPoolId?: {} | undefined
                  RoleArn?: {} | undefined
                }
              | undefined
            AdvancedOptions?: { [x: string]: String } | undefined
            AccessPolicies?: string | undefined
            LogPublishingOptions?: { [x: string]: LogPublishingOption } | undefined
            DomainEndpointOptions?:
              | {
                  EnforceHTTPS?: {} | undefined
                  TLSSecurityPolicy?: {} | undefined
                  CustomEndpointEnabled?: {} | undefined
                  CustomEndpoint?: {} | undefined
                  CustomEndpointCertificateArn?: {} | undefined
                }
              | undefined
            AdvancedSecurityOptions?:
              | {
                  Enabled?: {} | undefined
                  InternalUserDatabaseEnabled?: {} | undefined
                  MasterUserOptions?:
                    | {
                        MasterUserARN?: {} | undefined
                        MasterUserName?: {} | undefined
                        MasterUserPassword?: {} | undefined
                      }
                    | undefined
                  SAMLOptions?:
                    | {
                        Enabled?: {} | undefined
                        Idp?: { MetadataContent: {}; EntityId: {} } | undefined
                        MasterUserName?: {} | undefined
                        MasterBackendRole?: {} | undefined
                        SubjectKey?: {} | undefined
                        RolesKey?: {} | undefined
                        SessionTimeoutMinutes?: {} | undefined
                      }
                    | undefined
                  AnonymousAuthEnabled?: {} | undefined
                }
              | undefined
            NodeToNodeEncryptionOptions?: { Enabled?: {} | undefined } | undefined
            EncryptionAtRestOptions?:
              | { Enabled?: {} | undefined; KmsKeyId?: {} | undefined }
              | undefined
            AutoTuneOptions?:
              | {
                  DesiredState?: {} | undefined
                  RollbackOnDisable?: {} | undefined
                  MaintenanceSchedules?: {} | undefined
                }
              | undefined
            DryRun?: boolean | undefined
          }
        }
        output: UpdateElasticsearchDomainConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/domain-info': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { DomainNames: DomainName[] } }
        output: DescribeElasticsearchDomainsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/instanceTypeLimits/:ElasticsearchVersion/:InstanceType': {
      $get: {
        input: {
          param: {
            InstanceType:
              | 'm3.medium.elasticsearch'
              | 'm3.large.elasticsearch'
              | 'm3.xlarge.elasticsearch'
              | 'm3.2xlarge.elasticsearch'
              | 'm4.large.elasticsearch'
              | 'm4.xlarge.elasticsearch'
              | 'm4.2xlarge.elasticsearch'
              | 'm4.4xlarge.elasticsearch'
              | 'm4.10xlarge.elasticsearch'
              | 'm5.large.elasticsearch'
              | 'm5.xlarge.elasticsearch'
              | 'm5.2xlarge.elasticsearch'
              | 'm5.4xlarge.elasticsearch'
              | 'm5.12xlarge.elasticsearch'
              | 'r5.large.elasticsearch'
              | 'r5.xlarge.elasticsearch'
              | 'r5.2xlarge.elasticsearch'
              | 'r5.4xlarge.elasticsearch'
              | 'r5.12xlarge.elasticsearch'
              | 'c5.large.elasticsearch'
              | 'c5.xlarge.elasticsearch'
              | 'c5.2xlarge.elasticsearch'
              | 'c5.4xlarge.elasticsearch'
              | 'c5.9xlarge.elasticsearch'
              | 'c5.18xlarge.elasticsearch'
              | 'ultrawarm1.medium.elasticsearch'
              | 'ultrawarm1.large.elasticsearch'
              | 't2.micro.elasticsearch'
              | 't2.small.elasticsearch'
              | 't2.medium.elasticsearch'
              | 'r3.large.elasticsearch'
              | 'r3.xlarge.elasticsearch'
              | 'r3.2xlarge.elasticsearch'
              | 'r3.4xlarge.elasticsearch'
              | 'r3.8xlarge.elasticsearch'
              | 'i2.xlarge.elasticsearch'
              | 'i2.2xlarge.elasticsearch'
              | 'd2.xlarge.elasticsearch'
              | 'd2.2xlarge.elasticsearch'
              | 'd2.4xlarge.elasticsearch'
              | 'd2.8xlarge.elasticsearch'
              | 'c4.large.elasticsearch'
              | 'c4.xlarge.elasticsearch'
              | 'c4.2xlarge.elasticsearch'
              | 'c4.4xlarge.elasticsearch'
              | 'c4.8xlarge.elasticsearch'
              | 'r4.large.elasticsearch'
              | 'r4.xlarge.elasticsearch'
              | 'r4.2xlarge.elasticsearch'
              | 'r4.4xlarge.elasticsearch'
              | 'r4.8xlarge.elasticsearch'
              | 'r4.16xlarge.elasticsearch'
              | 'i3.large.elasticsearch'
              | 'i3.xlarge.elasticsearch'
              | 'i3.2xlarge.elasticsearch'
              | 'i3.4xlarge.elasticsearch'
              | 'i3.8xlarge.elasticsearch'
              | 'i3.16xlarge.elasticsearch'
            ElasticsearchVersion: string
          }
        } & { query: { domainName?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeElasticsearchInstanceTypeLimitsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/ccs/inboundConnection/search': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Filters?: Filter[] | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: DescribeInboundCrossClusterSearchConnectionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/ccs/outboundConnection/search': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Filters?: Filter[] | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: DescribeOutboundCrossClusterSearchConnectionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/packages/describe': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Filters?: DescribePackagesFilter[] | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: DescribePackagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/reservedInstanceOfferings': {
      $get: {
        input: {
          query: {
            offeringId?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeReservedElasticsearchInstanceOfferingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/reservedInstances': {
      $get: {
        input: {
          query: {
            reservationId?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeReservedElasticsearchInstancesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/vpcEndpoints/describe': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { VpcEndpointIds: VpcEndpointId[] } }
        output: DescribeVpcEndpointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/packages/dissociate/:PackageID/:DomainName': {
      $post: {
        input: { param: { PackageID: string; DomainName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DissociatePackageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/compatibleVersions': {
      $get: {
        input: { query: { domainName?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetCompatibleElasticsearchVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/packages/:PackageID/history': {
      $get: {
        input: { param: { PackageID: string } } & {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetPackageVersionHistoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/upgradeDomain/:DomainName/history': {
      $get: {
        input: { param: { DomainName: string } } & {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetUpgradeHistoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/upgradeDomain/:DomainName/status': {
      $get: {
        input: { param: { DomainName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetUpgradeStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/domain': {
      $get: {
        input: { query: { engineType?: 'OpenSearch' | 'Elasticsearch' | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListDomainNamesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/packages/:PackageID/domains': {
      $get: {
        input: { param: { PackageID: string } } & {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListDomainsForPackageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/instanceTypes/:ElasticsearchVersion': {
      $get: {
        input: { param: { ElasticsearchVersion: string } } & {
          query: {
            domainName?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListElasticsearchInstanceTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/versions': {
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListElasticsearchVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/domain/:DomainName/packages': {
      $get: {
        input: { param: { DomainName: string } } & {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListPackagesForDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/tags/#arn': {
      $get: {
        input: { query: { arn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/domain/:DomainName/listVpcEndpointAccess': {
      $get: {
        input: { param: { DomainName: string } } & { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListVpcEndpointAccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/domain/:DomainName/vpcEndpoints': {
      $get: {
        input: { param: { DomainName: string } } & { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListVpcEndpointsForDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/purchaseReservedInstanceOffering': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            ReservedElasticsearchInstanceOfferingId: string
            ReservationName: string
            InstanceCount?: number | undefined
          }
        }
        output: PurchaseReservedElasticsearchInstanceOfferingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/ccs/inboundConnection/:ConnectionId/reject': {
      $put: {
        input: { param: { ConnectionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RejectInboundCrossClusterSearchConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/tags-removal': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ARN: string; TagKeys: String[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/domain/:DomainName/revokeVpcEndpointAccess': {
      $post: {
        input: { param: { DomainName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Account: string } }
        output: RevokeVpcEndpointAccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/serviceSoftwareUpdate/start': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { DomainName: string } }
        output: StartElasticsearchServiceSoftwareUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/packages/update': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            PackageID: string
            PackageSource: { S3BucketName?: {} | undefined; S3Key?: {} | undefined }
            PackageDescription?: string | undefined
            CommitMessage?: string | undefined
          }
        }
        output: UpdatePackageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/vpcEndpoints/update': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            VpcEndpointId: string
            VpcOptions: { SubnetIds?: {} | undefined; SecurityGroupIds?: {} | undefined }
          }
        }
        output: UpdateVpcEndpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-01-01/es/upgradeDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            DomainName: string
            TargetVersion: string
            PerformCheckOnly?: boolean | undefined
          }
        }
        output: UpgradeElasticsearchDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
