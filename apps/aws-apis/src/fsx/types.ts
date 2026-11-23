type ClientRequestToken = string
type AssociateFileSystemAliasesRequest = {
  ClientRequestToken?: ClientRequestToken | undefined
  FileSystemId: {}
  Aliases: {}
}
type AssociateFileSystemAliasesResponse = { Aliases?: {} | undefined }
type CancelDataRepositoryTaskRequest = { TaskId: {} }
type CancelDataRepositoryTaskResponse = { Lifecycle?: {} | undefined; TaskId?: {} | undefined }
type KmsKeyId = string
type Tag = { Key: {}; Value: {} }
type Tags = Tag[]
type CopyBackupRequest = {
  ClientRequestToken?: ClientRequestToken | undefined
  SourceBackupId: {}
  SourceRegion?: {} | undefined
  KmsKeyId?: KmsKeyId | undefined
  CopyTags?: {} | undefined
  Tags?: Tags | undefined
}
type ProgressPercent = number
type FileSystemFailureDetails = { Message?: {} | undefined }
type SelfManagedActiveDirectoryAttributes = {
  DomainName?: {} | undefined
  OrganizationalUnitDistinguishedName?: {} | undefined
  FileSystemAdministratorsGroup?: {} | undefined
  UserName?: {} | undefined
  DnsIps?: {} | undefined
}
type Alias = { Name?: {} | undefined; Lifecycle?: {} | undefined }
type Aliases = Alias[]
type ErrorMessage = string
type DataRepositoryFailureDetails = { Message?: ErrorMessage | undefined }
type DataRepositoryConfiguration = {
  Lifecycle?: {} | undefined
  ImportPath?: {} | undefined
  ExportPath?: {} | undefined
  ImportedFileChunkSize?: {} | undefined
  AutoImportPolicy?: {} | undefined
  FailureDetails?: DataRepositoryFailureDetails | undefined
}
type DailyTime = string
type AutomaticBackupRetentionDays = number
type LustreFileSystemConfiguration = {
  WeeklyMaintenanceStartTime?: {} | undefined
  DataRepositoryConfiguration?: DataRepositoryConfiguration | undefined
  DeploymentType?: {} | undefined
  PerUnitStorageThroughput?: {} | undefined
  MountName?: {} | undefined
  DailyAutomaticBackupStartTime?: DailyTime | undefined
  AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
  CopyTagsToBackups?: {} | undefined
  DriveCacheType?: {} | undefined
  DataCompressionType?: {} | undefined
  LogConfiguration?: { Level: {}; Destination?: {} | undefined } | undefined
  RootSquashConfiguration?:
    | { RootSquash?: {} | undefined; NoSquashNids?: {} | undefined }
    | undefined
}
type DNSName = string
type SubnetId = string
type MegabytesPerSecond = number
type WeeklyTime = string
type DiskIopsConfiguration = { Mode?: {} | undefined; Iops?: {} | undefined }
type ResourceARN = string
type AWSAccountId = string
type BackupId = string
type CreationTime = string
type FileSystemId = string
type OntapVolumeConfiguration = {
  FlexCacheEndpointType?: {} | undefined
  JunctionPath?: {} | undefined
  SecurityStyle?: {} | undefined
  SizeInMegabytes?: {} | undefined
  StorageEfficiencyEnabled?: {} | undefined
  StorageVirtualMachineId?: {} | undefined
  StorageVirtualMachineRoot?: {} | undefined
  TieringPolicy?: { CoolingPeriod?: {} | undefined; Name?: {} | undefined } | undefined
  UUID?: {} | undefined
  OntapVolumeType?: {} | undefined
  SnapshotPolicy?: {} | undefined
  CopyTagsToBackups?: {} | undefined
}
type Volume = {
  CreationTime?: CreationTime | undefined
  FileSystemId?: FileSystemId | undefined
  Lifecycle?: {} | undefined
  Name?: {} | undefined
  OntapConfiguration?: OntapVolumeConfiguration | undefined
  ResourceARN?: ResourceARN | undefined
  Tags?: Tags | undefined
  VolumeId?: {} | undefined
  VolumeType?: {} | undefined
  LifecycleTransitionReason?: { Message?: ErrorMessage | undefined } | undefined
  AdministrativeActions?: {} | undefined
  OpenZFSConfiguration?:
    | {
        ParentVolumeId?: {} | undefined
        VolumePath?: {} | undefined
        StorageCapacityReservationGiB?: {} | undefined
        StorageCapacityQuotaGiB?: {} | undefined
        RecordSizeKiB?: {} | undefined
        DataCompressionType?: {} | undefined
        CopyTagsToSnapshots?: {} | undefined
        OriginSnapshot?:
          | { SnapshotARN?: ResourceARN | undefined; CopyStrategy?: {} | undefined }
          | undefined
        ReadOnly?: {} | undefined
        NfsExports?: {} | undefined
        UserAndGroupQuotas?: {} | undefined
        RestoreToSnapshot?: {} | undefined
        DeleteIntermediateSnaphots?: {} | undefined
        DeleteClonedVolumes?: {} | undefined
      }
    | undefined
}
type Backup = {
  BackupId: {}
  Lifecycle: {}
  FailureDetails?: { Message?: {} | undefined } | undefined
  Type: {}
  ProgressPercent?: ProgressPercent | undefined
  CreationTime: {}
  KmsKeyId?: {} | undefined
  ResourceARN?: {} | undefined
  Tags?: {} | undefined
  FileSystem: {
    OwnerId?: {} | undefined
    CreationTime?: {} | undefined
    FileSystemId?: {} | undefined
    FileSystemType?: {} | undefined
    Lifecycle?: {} | undefined
    FailureDetails?: FileSystemFailureDetails | undefined
    StorageCapacity?: {} | undefined
    StorageType?: {} | undefined
    VpcId?: {} | undefined
    SubnetIds?: {} | undefined
    NetworkInterfaceIds?: {} | undefined
    DNSName?: {} | undefined
    KmsKeyId?: {} | undefined
    ResourceARN?: {} | undefined
    Tags?: {} | undefined
    WindowsConfiguration?:
      | {
          ActiveDirectoryId?: {} | undefined
          SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes | undefined
          DeploymentType?: {} | undefined
          RemoteAdministrationEndpoint?: {} | undefined
          PreferredSubnetId?: {} | undefined
          PreferredFileServerIp?: {} | undefined
          ThroughputCapacity?: {} | undefined
          MaintenanceOperationsInProgress?: {} | undefined
          WeeklyMaintenanceStartTime?: {} | undefined
          DailyAutomaticBackupStartTime?: {} | undefined
          AutomaticBackupRetentionDays?: {} | undefined
          CopyTagsToBackups?: {} | undefined
          Aliases?: Aliases | undefined
          AuditLogConfiguration?:
            | {
                FileAccessAuditLogLevel: {}
                FileShareAccessAuditLogLevel: {}
                AuditLogDestination?: {} | undefined
              }
            | undefined
        }
      | undefined
    LustreConfiguration?: LustreFileSystemConfiguration | undefined
    AdministrativeActions?: {} | undefined
    OntapConfiguration?:
      | {
          AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
          DailyAutomaticBackupStartTime?: DailyTime | undefined
          DeploymentType?: {} | undefined
          EndpointIpAddressRange?: {} | undefined
          Endpoints?:
            | {
                Intercluster?:
                  | { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined }
                  | undefined
                Management?:
                  | { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined }
                  | undefined
              }
            | undefined
          DiskIopsConfiguration?: { Mode?: {} | undefined; Iops?: {} | undefined } | undefined
          PreferredSubnetId?: SubnetId | undefined
          RouteTableIds?: {} | undefined
          ThroughputCapacity?: MegabytesPerSecond | undefined
          WeeklyMaintenanceStartTime?: WeeklyTime | undefined
        }
      | undefined
    FileSystemTypeVersion?: {} | undefined
    OpenZFSConfiguration?:
      | {
          AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
          CopyTagsToBackups?: {} | undefined
          CopyTagsToVolumes?: {} | undefined
          DailyAutomaticBackupStartTime?: DailyTime | undefined
          DeploymentType?: {} | undefined
          ThroughputCapacity?: {} | undefined
          WeeklyMaintenanceStartTime?: WeeklyTime | undefined
          DiskIopsConfiguration?: DiskIopsConfiguration | undefined
          RootVolumeId?: {} | undefined
        }
      | undefined
  }
  DirectoryInformation?:
    | {
        DomainName?: {} | undefined
        ActiveDirectoryId?: {} | undefined
        ResourceARN?: ResourceARN | undefined
      }
    | undefined
  OwnerId?: AWSAccountId | undefined
  SourceBackupId?: BackupId | undefined
  SourceBackupRegion?: {} | undefined
  ResourceType?: {} | undefined
  Volume?: Volume | undefined
}
type CopyBackupResponse = { Backup?: Backup | undefined }
type CreateBackupRequest = {
  FileSystemId?: {} | undefined
  ClientRequestToken?: {} | undefined
  Tags?: {} | undefined
  VolumeId?: {} | undefined
}
type CreateBackupResponse = {
  Backup?:
    | {
        BackupId: {}
        Lifecycle: {}
        FailureDetails?: { Message?: {} | undefined } | undefined
        Type: {}
        ProgressPercent?: ProgressPercent | undefined
        CreationTime: {}
        KmsKeyId?: {} | undefined
        ResourceARN?: {} | undefined
        Tags?: {} | undefined
        FileSystem: {
          OwnerId?: {} | undefined
          CreationTime?: {} | undefined
          FileSystemId?: {} | undefined
          FileSystemType?: {} | undefined
          Lifecycle?: {} | undefined
          FailureDetails?: FileSystemFailureDetails | undefined
          StorageCapacity?: {} | undefined
          StorageType?: {} | undefined
          VpcId?: {} | undefined
          SubnetIds?: {} | undefined
          NetworkInterfaceIds?: {} | undefined
          DNSName?: {} | undefined
          KmsKeyId?: {} | undefined
          ResourceARN?: {} | undefined
          Tags?: {} | undefined
          WindowsConfiguration?:
            | {
                ActiveDirectoryId?: {} | undefined
                SelfManagedActiveDirectoryConfiguration?:
                  | SelfManagedActiveDirectoryAttributes
                  | undefined
                DeploymentType?: {} | undefined
                RemoteAdministrationEndpoint?: {} | undefined
                PreferredSubnetId?: {} | undefined
                PreferredFileServerIp?: {} | undefined
                ThroughputCapacity?: {} | undefined
                MaintenanceOperationsInProgress?: {} | undefined
                WeeklyMaintenanceStartTime?: {} | undefined
                DailyAutomaticBackupStartTime?: {} | undefined
                AutomaticBackupRetentionDays?: {} | undefined
                CopyTagsToBackups?: {} | undefined
                Aliases?: Aliases | undefined
                AuditLogConfiguration?:
                  | {
                      FileAccessAuditLogLevel: {}
                      FileShareAccessAuditLogLevel: {}
                      AuditLogDestination?: {} | undefined
                    }
                  | undefined
              }
            | undefined
          LustreConfiguration?: LustreFileSystemConfiguration | undefined
          AdministrativeActions?: {} | undefined
          OntapConfiguration?:
            | {
                AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
                DailyAutomaticBackupStartTime?: DailyTime | undefined
                DeploymentType?: {} | undefined
                EndpointIpAddressRange?: {} | undefined
                Endpoints?:
                  | {
                      Intercluster?:
                        | { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined }
                        | undefined
                      Management?:
                        | { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined }
                        | undefined
                    }
                  | undefined
                DiskIopsConfiguration?: { Mode?: {} | undefined; Iops?: {} | undefined } | undefined
                PreferredSubnetId?: SubnetId | undefined
                RouteTableIds?: {} | undefined
                ThroughputCapacity?: MegabytesPerSecond | undefined
                WeeklyMaintenanceStartTime?: WeeklyTime | undefined
              }
            | undefined
          FileSystemTypeVersion?: {} | undefined
          OpenZFSConfiguration?:
            | {
                AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
                CopyTagsToBackups?: {} | undefined
                CopyTagsToVolumes?: {} | undefined
                DailyAutomaticBackupStartTime?: DailyTime | undefined
                DeploymentType?: {} | undefined
                ThroughputCapacity?: {} | undefined
                WeeklyMaintenanceStartTime?: WeeklyTime | undefined
                DiskIopsConfiguration?: DiskIopsConfiguration | undefined
                RootVolumeId?: {} | undefined
              }
            | undefined
        }
        DirectoryInformation?:
          | {
              DomainName?: {} | undefined
              ActiveDirectoryId?: {} | undefined
              ResourceARN?: ResourceARN | undefined
            }
          | undefined
        OwnerId?: AWSAccountId | undefined
        SourceBackupId?: BackupId | undefined
        SourceBackupRegion?: {} | undefined
        ResourceType?: {} | undefined
        Volume?: Volume | undefined
      }
    | undefined
}
type CreateDataRepositoryAssociationRequest = {
  FileSystemId: FileSystemId
  FileSystemPath?: {} | undefined
  DataRepositoryPath: {}
  BatchImportMetaDataOnCreate?: {} | undefined
  ImportedFileChunkSize?: {} | undefined
  S3?:
    | {
        AutoImportPolicy?: { Events?: {} | undefined } | undefined
        AutoExportPolicy?: { Events?: {} | undefined } | undefined
      }
    | undefined
  ClientRequestToken?: ClientRequestToken | undefined
  Tags?: Tags | undefined
}
type CreateDataRepositoryAssociationResponse = {
  Association?:
    | {
        AssociationId?: {} | undefined
        ResourceARN?: ResourceARN | undefined
        FileSystemId?: FileSystemId | undefined
        Lifecycle?: {} | undefined
        FailureDetails?: DataRepositoryFailureDetails | undefined
        FileSystemPath?: {} | undefined
        DataRepositoryPath?: {} | undefined
        BatchImportMetaDataOnCreate?: {} | undefined
        ImportedFileChunkSize?: {} | undefined
        S3?:
          | {
              AutoImportPolicy?: { Events?: {} | undefined } | undefined
              AutoExportPolicy?: { Events?: {} | undefined } | undefined
            }
          | undefined
        Tags?: Tags | undefined
        CreationTime?: CreationTime | undefined
        FileCacheId?: {} | undefined
        FileCachePath?: {} | undefined
        DataRepositorySubdirectories?: {} | undefined
        NFS?:
          | {
              Version: {}
              DnsIps?: {} | undefined
              AutoExportPolicy?: { Events?: {} | undefined } | undefined
            }
          | undefined
      }
    | undefined
}
type CreateDataRepositoryTaskRequest = {
  Type: {}
  Paths?: {} | undefined
  FileSystemId: FileSystemId
  Report: { Enabled: {}; Path?: {} | undefined; Format?: {} | undefined; Scope?: {} | undefined }
  ClientRequestToken?: ClientRequestToken | undefined
  Tags?: Tags | undefined
  CapacityToRelease?: {} | undefined
}
type CompletionReport = {
  Enabled: {}
  Path?: {} | undefined
  Format?: {} | undefined
  Scope?: {} | undefined
}
type CreateDataRepositoryTaskResponse = {
  DataRepositoryTask?:
    | {
        TaskId: {}
        Lifecycle: {}
        Type: {}
        CreationTime: CreationTime
        StartTime?: {} | undefined
        EndTime?: {} | undefined
        ResourceARN?: ResourceARN | undefined
        Tags?: Tags | undefined
        FileSystemId?: {} | undefined
        Paths?: {} | undefined
        FailureDetails?: { Message?: ErrorMessage | undefined } | undefined
        Status?:
          | {
              TotalCount?: {} | undefined
              SucceededCount?: {} | undefined
              FailedCount?: {} | undefined
              LastUpdatedTime?: {} | undefined
              ReleasedCapacity?: {} | undefined
            }
          | undefined
        Report?: CompletionReport | undefined
        CapacityToRelease?: {} | undefined
        FileCacheId?: {} | undefined
      }
    | undefined
}
type SubnetIds = SubnetId[]
type CreateFileCacheRequest = {
  ClientRequestToken?: {} | undefined
  FileCacheType: {}
  FileCacheTypeVersion: {}
  StorageCapacity: {}
  SubnetIds: SubnetIds
  SecurityGroupIds?: {} | undefined
  Tags?: Tags | undefined
  CopyTagsToDataRepositoryAssociations?: {} | undefined
  KmsKeyId?: {} | undefined
  LustreConfiguration?:
    | {
        PerUnitStorageThroughput: {}
        DeploymentType: {}
        WeeklyMaintenanceStartTime?: WeeklyTime | undefined
        MetadataConfiguration: { StorageCapacity: {} }
      }
    | undefined
  DataRepositoryAssociations?: {} | undefined
}
type VpcId = string
type NetworkInterfaceId = string
type NetworkInterfaceIds = NetworkInterfaceId[]
type CreateFileCacheResponse = {
  FileCache?:
    | {
        OwnerId?: AWSAccountId | undefined
        CreationTime?: CreationTime | undefined
        FileCacheId?: {} | undefined
        FileCacheType?: {} | undefined
        FileCacheTypeVersion?: {} | undefined
        Lifecycle?: {} | undefined
        FailureDetails?: { Message?: {} | undefined } | undefined
        StorageCapacity?: {} | undefined
        VpcId?: VpcId | undefined
        SubnetIds?: SubnetIds | undefined
        NetworkInterfaceIds?: NetworkInterfaceIds | undefined
        DNSName?: {} | undefined
        KmsKeyId?: {} | undefined
        ResourceARN?: ResourceARN | undefined
        Tags?: Tags | undefined
        CopyTagsToDataRepositoryAssociations?: {} | undefined
        LustreConfiguration?:
          | {
              PerUnitStorageThroughput?: {} | undefined
              DeploymentType?: {} | undefined
              MountName?: {} | undefined
              WeeklyMaintenanceStartTime?: WeeklyTime | undefined
              MetadataConfiguration?: { StorageCapacity: {} } | undefined
              LogConfiguration?: { Level: {}; Destination?: {} | undefined } | undefined
            }
          | undefined
        DataRepositoryAssociationIds?: {} | undefined
      }
    | undefined
}
type SelfManagedActiveDirectoryConfiguration = {
  DomainName: {}
  OrganizationalUnitDistinguishedName?: {} | undefined
  FileSystemAdministratorsGroup?: {} | undefined
  UserName: {}
  Password: {}
  DnsIps: {}
}
type CreateFileSystemLustreConfiguration = {
  WeeklyMaintenanceStartTime?: {} | undefined
  ImportPath?: {} | undefined
  ExportPath?: {} | undefined
  ImportedFileChunkSize?: {} | undefined
  DeploymentType?: {} | undefined
  AutoImportPolicy?: {} | undefined
  PerUnitStorageThroughput?: {} | undefined
  DailyAutomaticBackupStartTime?: DailyTime | undefined
  AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
  CopyTagsToBackups?: {} | undefined
  DriveCacheType?: {} | undefined
  DataCompressionType?: {} | undefined
  LogConfiguration?: { Level: {}; Destination?: {} | undefined } | undefined
  RootSquashConfiguration?:
    | { RootSquash?: {} | undefined; NoSquashNids?: {} | undefined }
    | undefined
}
type CreateFileSystemOntapConfiguration = {
  AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
  DailyAutomaticBackupStartTime?: DailyTime | undefined
  DeploymentType: {}
  EndpointIpAddressRange?: {} | undefined
  FsxAdminPassword?: {} | undefined
  DiskIopsConfiguration?: { Mode?: {} | undefined; Iops?: {} | undefined } | undefined
  PreferredSubnetId?: {} | undefined
  RouteTableIds?: {} | undefined
  ThroughputCapacity: {}
  WeeklyMaintenanceStartTime?: WeeklyTime | undefined
}
type CreateFileSystemRequest = {
  ClientRequestToken?: {} | undefined
  FileSystemType: {}
  StorageCapacity: {}
  StorageType?: {} | undefined
  SubnetIds: {}
  SecurityGroupIds?: {} | undefined
  Tags?: {} | undefined
  KmsKeyId?: KmsKeyId | undefined
  WindowsConfiguration?:
    | {
        ActiveDirectoryId?: {} | undefined
        SelfManagedActiveDirectoryConfiguration?:
          | SelfManagedActiveDirectoryConfiguration
          | undefined
        DeploymentType?: {} | undefined
        PreferredSubnetId?: {} | undefined
        ThroughputCapacity: {}
        WeeklyMaintenanceStartTime?: {} | undefined
        DailyAutomaticBackupStartTime?: {} | undefined
        AutomaticBackupRetentionDays?: {} | undefined
        CopyTagsToBackups?: {} | undefined
        Aliases?: {} | undefined
        AuditLogConfiguration?:
          | {
              FileAccessAuditLogLevel: {}
              FileShareAccessAuditLogLevel: {}
              AuditLogDestination?: {} | undefined
            }
          | undefined
      }
    | undefined
  LustreConfiguration?: CreateFileSystemLustreConfiguration | undefined
  OntapConfiguration?: CreateFileSystemOntapConfiguration | undefined
  FileSystemTypeVersion?: {} | undefined
  OpenZFSConfiguration?:
    | {
        AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
        CopyTagsToBackups?: {} | undefined
        CopyTagsToVolumes?: {} | undefined
        DailyAutomaticBackupStartTime?: DailyTime | undefined
        DeploymentType: {}
        ThroughputCapacity: {}
        WeeklyMaintenanceStartTime?: WeeklyTime | undefined
        DiskIopsConfiguration?: DiskIopsConfiguration | undefined
        RootVolumeConfiguration?:
          | {
              RecordSizeKiB?: {} | undefined
              DataCompressionType?: {} | undefined
              NfsExports?: {} | undefined
              UserAndGroupQuotas?: {} | undefined
              CopyTagsToSnapshots?: {} | undefined
              ReadOnly?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type CreateFileSystemResponse = {
  FileSystem?:
    | {
        OwnerId?: {} | undefined
        CreationTime?: {} | undefined
        FileSystemId?: {} | undefined
        FileSystemType?: {} | undefined
        Lifecycle?: {} | undefined
        FailureDetails?: FileSystemFailureDetails | undefined
        StorageCapacity?: {} | undefined
        StorageType?: {} | undefined
        VpcId?: {} | undefined
        SubnetIds?: {} | undefined
        NetworkInterfaceIds?: {} | undefined
        DNSName?: {} | undefined
        KmsKeyId?: {} | undefined
        ResourceARN?: {} | undefined
        Tags?: {} | undefined
        WindowsConfiguration?:
          | {
              ActiveDirectoryId?: {} | undefined
              SelfManagedActiveDirectoryConfiguration?:
                | SelfManagedActiveDirectoryAttributes
                | undefined
              DeploymentType?: {} | undefined
              RemoteAdministrationEndpoint?: {} | undefined
              PreferredSubnetId?: {} | undefined
              PreferredFileServerIp?: {} | undefined
              ThroughputCapacity?: {} | undefined
              MaintenanceOperationsInProgress?: {} | undefined
              WeeklyMaintenanceStartTime?: {} | undefined
              DailyAutomaticBackupStartTime?: {} | undefined
              AutomaticBackupRetentionDays?: {} | undefined
              CopyTagsToBackups?: {} | undefined
              Aliases?: Aliases | undefined
              AuditLogConfiguration?:
                | {
                    FileAccessAuditLogLevel: {}
                    FileShareAccessAuditLogLevel: {}
                    AuditLogDestination?: {} | undefined
                  }
                | undefined
            }
          | undefined
        LustreConfiguration?: LustreFileSystemConfiguration | undefined
        AdministrativeActions?: {} | undefined
        OntapConfiguration?:
          | {
              AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
              DailyAutomaticBackupStartTime?: DailyTime | undefined
              DeploymentType?: {} | undefined
              EndpointIpAddressRange?: {} | undefined
              Endpoints?:
                | {
                    Intercluster?:
                      | { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined }
                      | undefined
                    Management?:
                      | { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined }
                      | undefined
                  }
                | undefined
              DiskIopsConfiguration?: { Mode?: {} | undefined; Iops?: {} | undefined } | undefined
              PreferredSubnetId?: SubnetId | undefined
              RouteTableIds?: {} | undefined
              ThroughputCapacity?: MegabytesPerSecond | undefined
              WeeklyMaintenanceStartTime?: WeeklyTime | undefined
            }
          | undefined
        FileSystemTypeVersion?: {} | undefined
        OpenZFSConfiguration?:
          | {
              AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
              CopyTagsToBackups?: {} | undefined
              CopyTagsToVolumes?: {} | undefined
              DailyAutomaticBackupStartTime?: DailyTime | undefined
              DeploymentType?: {} | undefined
              ThroughputCapacity?: {} | undefined
              WeeklyMaintenanceStartTime?: WeeklyTime | undefined
              DiskIopsConfiguration?: DiskIopsConfiguration | undefined
              RootVolumeId?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type CreateFileSystemFromBackupRequest = {
  BackupId: BackupId
  ClientRequestToken?: {} | undefined
  SubnetIds: {}
  SecurityGroupIds?: {} | undefined
  Tags?: {} | undefined
  WindowsConfiguration?:
    | {
        ActiveDirectoryId?: {} | undefined
        SelfManagedActiveDirectoryConfiguration?:
          | SelfManagedActiveDirectoryConfiguration
          | undefined
        DeploymentType?: {} | undefined
        PreferredSubnetId?: {} | undefined
        ThroughputCapacity: {}
        WeeklyMaintenanceStartTime?: {} | undefined
        DailyAutomaticBackupStartTime?: {} | undefined
        AutomaticBackupRetentionDays?: {} | undefined
        CopyTagsToBackups?: {} | undefined
        Aliases?: {} | undefined
        AuditLogConfiguration?:
          | {
              FileAccessAuditLogLevel: {}
              FileShareAccessAuditLogLevel: {}
              AuditLogDestination?: {} | undefined
            }
          | undefined
      }
    | undefined
  LustreConfiguration?: CreateFileSystemLustreConfiguration | undefined
  StorageType?: {} | undefined
  KmsKeyId?: KmsKeyId | undefined
  FileSystemTypeVersion?: {} | undefined
  OpenZFSConfiguration?:
    | {
        AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
        CopyTagsToBackups?: {} | undefined
        CopyTagsToVolumes?: {} | undefined
        DailyAutomaticBackupStartTime?: DailyTime | undefined
        DeploymentType: {}
        ThroughputCapacity: {}
        WeeklyMaintenanceStartTime?: WeeklyTime | undefined
        DiskIopsConfiguration?: DiskIopsConfiguration | undefined
        RootVolumeConfiguration?:
          | {
              RecordSizeKiB?: {} | undefined
              DataCompressionType?: {} | undefined
              NfsExports?: {} | undefined
              UserAndGroupQuotas?: {} | undefined
              CopyTagsToSnapshots?: {} | undefined
              ReadOnly?: {} | undefined
            }
          | undefined
      }
    | undefined
  StorageCapacity?: {} | undefined
}
type CreateFileSystemFromBackupResponse = {
  FileSystem?:
    | {
        OwnerId?: {} | undefined
        CreationTime?: {} | undefined
        FileSystemId?: {} | undefined
        FileSystemType?: {} | undefined
        Lifecycle?: {} | undefined
        FailureDetails?: FileSystemFailureDetails | undefined
        StorageCapacity?: {} | undefined
        StorageType?: {} | undefined
        VpcId?: {} | undefined
        SubnetIds?: {} | undefined
        NetworkInterfaceIds?: {} | undefined
        DNSName?: {} | undefined
        KmsKeyId?: {} | undefined
        ResourceARN?: {} | undefined
        Tags?: {} | undefined
        WindowsConfiguration?:
          | {
              ActiveDirectoryId?: {} | undefined
              SelfManagedActiveDirectoryConfiguration?:
                | SelfManagedActiveDirectoryAttributes
                | undefined
              DeploymentType?: {} | undefined
              RemoteAdministrationEndpoint?: {} | undefined
              PreferredSubnetId?: {} | undefined
              PreferredFileServerIp?: {} | undefined
              ThroughputCapacity?: {} | undefined
              MaintenanceOperationsInProgress?: {} | undefined
              WeeklyMaintenanceStartTime?: {} | undefined
              DailyAutomaticBackupStartTime?: {} | undefined
              AutomaticBackupRetentionDays?: {} | undefined
              CopyTagsToBackups?: {} | undefined
              Aliases?: Aliases | undefined
              AuditLogConfiguration?:
                | {
                    FileAccessAuditLogLevel: {}
                    FileShareAccessAuditLogLevel: {}
                    AuditLogDestination?: {} | undefined
                  }
                | undefined
            }
          | undefined
        LustreConfiguration?: LustreFileSystemConfiguration | undefined
        AdministrativeActions?: {} | undefined
        OntapConfiguration?:
          | {
              AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
              DailyAutomaticBackupStartTime?: DailyTime | undefined
              DeploymentType?: {} | undefined
              EndpointIpAddressRange?: {} | undefined
              Endpoints?:
                | {
                    Intercluster?:
                      | { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined }
                      | undefined
                    Management?:
                      | { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined }
                      | undefined
                  }
                | undefined
              DiskIopsConfiguration?: { Mode?: {} | undefined; Iops?: {} | undefined } | undefined
              PreferredSubnetId?: SubnetId | undefined
              RouteTableIds?: {} | undefined
              ThroughputCapacity?: MegabytesPerSecond | undefined
              WeeklyMaintenanceStartTime?: WeeklyTime | undefined
            }
          | undefined
        FileSystemTypeVersion?: {} | undefined
        OpenZFSConfiguration?:
          | {
              AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
              CopyTagsToBackups?: {} | undefined
              CopyTagsToVolumes?: {} | undefined
              DailyAutomaticBackupStartTime?: DailyTime | undefined
              DeploymentType?: {} | undefined
              ThroughputCapacity?: {} | undefined
              WeeklyMaintenanceStartTime?: WeeklyTime | undefined
              DiskIopsConfiguration?: DiskIopsConfiguration | undefined
              RootVolumeId?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type CreateSnapshotRequest = {
  ClientRequestToken?: ClientRequestToken | undefined
  Name: {}
  VolumeId: {}
  Tags?: Tags | undefined
}
type LifecycleTransitionReason = { Message?: ErrorMessage | undefined }
type CreateSnapshotResponse = {
  Snapshot?:
    | {
        ResourceARN?: ResourceARN | undefined
        SnapshotId?: {} | undefined
        Name?: {} | undefined
        VolumeId?: {} | undefined
        CreationTime?: CreationTime | undefined
        Lifecycle?: {} | undefined
        LifecycleTransitionReason?: LifecycleTransitionReason | undefined
        Tags?: Tags | undefined
        AdministrativeActions?: {} | undefined
      }
    | undefined
}
type CreateStorageVirtualMachineRequest = {
  ActiveDirectoryConfiguration?:
    | {
        NetBiosName: {}
        SelfManagedActiveDirectoryConfiguration?:
          | SelfManagedActiveDirectoryConfiguration
          | undefined
      }
    | undefined
  ClientRequestToken?: ClientRequestToken | undefined
  FileSystemId: FileSystemId
  Name: {}
  SvmAdminPassword?: {} | undefined
  Tags?: Tags | undefined
  RootVolumeSecurityStyle?: {} | undefined
}
type CreateStorageVirtualMachineResponse = {
  StorageVirtualMachine?:
    | {
        ActiveDirectoryConfiguration?:
          | {
              NetBiosName?: {} | undefined
              SelfManagedActiveDirectoryConfiguration?:
                | SelfManagedActiveDirectoryAttributes
                | undefined
            }
          | undefined
        CreationTime?: CreationTime | undefined
        Endpoints?:
          | {
              Iscsi?: { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined } | undefined
              Management?:
                | { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined }
                | undefined
              Nfs?: { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined } | undefined
              Smb?: { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined } | undefined
            }
          | undefined
        FileSystemId?: FileSystemId | undefined
        Lifecycle?: {} | undefined
        Name?: {} | undefined
        ResourceARN?: ResourceARN | undefined
        StorageVirtualMachineId?: {} | undefined
        Subtype?: {} | undefined
        UUID?: {} | undefined
        Tags?: Tags | undefined
        LifecycleTransitionReason?: { Message?: ErrorMessage | undefined } | undefined
        RootVolumeSecurityStyle?: {} | undefined
      }
    | undefined
}
type TieringPolicy = { CoolingPeriod?: {} | undefined; Name?: {} | undefined }
type CreateVolumeRequest = {
  ClientRequestToken?: ClientRequestToken | undefined
  VolumeType: {}
  Name: {}
  OntapConfiguration?:
    | {
        JunctionPath?: {} | undefined
        SecurityStyle?: {} | undefined
        SizeInMegabytes: {}
        StorageEfficiencyEnabled?: {} | undefined
        StorageVirtualMachineId: {}
        TieringPolicy?: TieringPolicy | undefined
        OntapVolumeType?: {} | undefined
        SnapshotPolicy?: {} | undefined
        CopyTagsToBackups?: {} | undefined
      }
    | undefined
  Tags?: Tags | undefined
  OpenZFSConfiguration?:
    | {
        ParentVolumeId: {}
        StorageCapacityReservationGiB?: {} | undefined
        StorageCapacityQuotaGiB?: {} | undefined
        RecordSizeKiB?: {} | undefined
        DataCompressionType?: {} | undefined
        CopyTagsToSnapshots?: {} | undefined
        OriginSnapshot?: { SnapshotARN: ResourceARN; CopyStrategy: {} } | undefined
        ReadOnly?: {} | undefined
        NfsExports?: {} | undefined
        UserAndGroupQuotas?: {} | undefined
      }
    | undefined
}
type CreateVolumeResponse = {
  Volume?:
    | {
        CreationTime?: CreationTime | undefined
        FileSystemId?: FileSystemId | undefined
        Lifecycle?: {} | undefined
        Name?: {} | undefined
        OntapConfiguration?: OntapVolumeConfiguration | undefined
        ResourceARN?: ResourceARN | undefined
        Tags?: Tags | undefined
        VolumeId?: {} | undefined
        VolumeType?: {} | undefined
        LifecycleTransitionReason?: { Message?: ErrorMessage | undefined } | undefined
        AdministrativeActions?: {} | undefined
        OpenZFSConfiguration?:
          | {
              ParentVolumeId?: {} | undefined
              VolumePath?: {} | undefined
              StorageCapacityReservationGiB?: {} | undefined
              StorageCapacityQuotaGiB?: {} | undefined
              RecordSizeKiB?: {} | undefined
              DataCompressionType?: {} | undefined
              CopyTagsToSnapshots?: {} | undefined
              OriginSnapshot?:
                | { SnapshotARN?: ResourceARN | undefined; CopyStrategy?: {} | undefined }
                | undefined
              ReadOnly?: {} | undefined
              NfsExports?: {} | undefined
              UserAndGroupQuotas?: {} | undefined
              RestoreToSnapshot?: {} | undefined
              DeleteIntermediateSnaphots?: {} | undefined
              DeleteClonedVolumes?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type CreateVolumeFromBackupRequest = {
  BackupId: BackupId
  ClientRequestToken?: ClientRequestToken | undefined
  Name: {}
  OntapConfiguration?:
    | {
        JunctionPath?: {} | undefined
        SecurityStyle?: {} | undefined
        SizeInMegabytes: {}
        StorageEfficiencyEnabled?: {} | undefined
        StorageVirtualMachineId: {}
        TieringPolicy?: TieringPolicy | undefined
        OntapVolumeType?: {} | undefined
        SnapshotPolicy?: {} | undefined
        CopyTagsToBackups?: {} | undefined
      }
    | undefined
  Tags?: Tags | undefined
}
type CreateVolumeFromBackupResponse = {
  Volume?:
    | {
        CreationTime?: CreationTime | undefined
        FileSystemId?: FileSystemId | undefined
        Lifecycle?: {} | undefined
        Name?: {} | undefined
        OntapConfiguration?: OntapVolumeConfiguration | undefined
        ResourceARN?: ResourceARN | undefined
        Tags?: Tags | undefined
        VolumeId?: {} | undefined
        VolumeType?: {} | undefined
        LifecycleTransitionReason?: { Message?: ErrorMessage | undefined } | undefined
        AdministrativeActions?: {} | undefined
        OpenZFSConfiguration?:
          | {
              ParentVolumeId?: {} | undefined
              VolumePath?: {} | undefined
              StorageCapacityReservationGiB?: {} | undefined
              StorageCapacityQuotaGiB?: {} | undefined
              RecordSizeKiB?: {} | undefined
              DataCompressionType?: {} | undefined
              CopyTagsToSnapshots?: {} | undefined
              OriginSnapshot?:
                | { SnapshotARN?: ResourceARN | undefined; CopyStrategy?: {} | undefined }
                | undefined
              ReadOnly?: {} | undefined
              NfsExports?: {} | undefined
              UserAndGroupQuotas?: {} | undefined
              RestoreToSnapshot?: {} | undefined
              DeleteIntermediateSnaphots?: {} | undefined
              DeleteClonedVolumes?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type DeleteBackupRequest = { BackupId: {}; ClientRequestToken?: {} | undefined }
type DeleteBackupResponse = { BackupId?: {} | undefined; Lifecycle?: {} | undefined }
type DeleteDataRepositoryAssociationRequest = {
  AssociationId: {}
  ClientRequestToken?: ClientRequestToken | undefined
  DeleteDataInFileSystem?: {} | undefined
}
type DeleteDataRepositoryAssociationResponse = {
  AssociationId?: {} | undefined
  Lifecycle?: {} | undefined
  DeleteDataInFileSystem?: {} | undefined
}
type DeleteFileCacheRequest = {
  FileCacheId: {}
  ClientRequestToken?: ClientRequestToken | undefined
}
type DeleteFileCacheResponse = { FileCacheId?: {} | undefined; Lifecycle?: {} | undefined }
type DeleteFileSystemWindowsConfiguration = {
  SkipFinalBackup?: {} | undefined
  FinalBackupTags?: {} | undefined
}
type DeleteFileSystemLustreConfiguration = {
  SkipFinalBackup?: {} | undefined
  FinalBackupTags?: {} | undefined
}
type DeleteFileSystemRequest = {
  FileSystemId: {}
  ClientRequestToken?: {} | undefined
  WindowsConfiguration?: DeleteFileSystemWindowsConfiguration | undefined
  LustreConfiguration?: DeleteFileSystemLustreConfiguration | undefined
  OpenZFSConfiguration?:
    | {
        SkipFinalBackup?: {} | undefined
        FinalBackupTags?: {} | undefined
        Options?: {} | undefined
      }
    | undefined
}
type DeleteFileSystemWindowsResponse = {
  FinalBackupId?: {} | undefined
  FinalBackupTags?: {} | undefined
}
type DeleteFileSystemLustreResponse = {
  FinalBackupId?: {} | undefined
  FinalBackupTags?: {} | undefined
}
type DeleteFileSystemResponse = {
  FileSystemId?: {} | undefined
  Lifecycle?: {} | undefined
  WindowsResponse?: DeleteFileSystemWindowsResponse | undefined
  LustreResponse?: DeleteFileSystemLustreResponse | undefined
  OpenZFSResponse?:
    | { FinalBackupId?: BackupId | undefined; FinalBackupTags?: Tags | undefined }
    | undefined
}
type DeleteSnapshotRequest = { ClientRequestToken?: ClientRequestToken | undefined; SnapshotId: {} }
type DeleteSnapshotResponse = { SnapshotId?: {} | undefined; Lifecycle?: {} | undefined }
type DeleteStorageVirtualMachineRequest = {
  ClientRequestToken?: ClientRequestToken | undefined
  StorageVirtualMachineId: {}
}
type DeleteStorageVirtualMachineResponse = {
  StorageVirtualMachineId?: {} | undefined
  Lifecycle?: {} | undefined
}
type DeleteVolumeRequest = {
  ClientRequestToken?: ClientRequestToken | undefined
  VolumeId: {}
  OntapConfiguration?:
    | { SkipFinalBackup?: {} | undefined; FinalBackupTags?: Tags | undefined }
    | undefined
  OpenZFSConfiguration?: { Options?: {} | undefined } | undefined
}
type DeleteVolumeResponse = {
  VolumeId?: {} | undefined
  Lifecycle?: {} | undefined
  OntapResponse?:
    | { FinalBackupId?: BackupId | undefined; FinalBackupTags?: Tags | undefined }
    | undefined
}
type DescribeBackupsRequest = {
  BackupIds?: {} | undefined
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeBackupsResponse = { Backups?: {} | undefined; NextToken?: {} | undefined }
type Filter = { Name?: {} | undefined; Values?: {} | undefined }
type Filters = Filter[]
type NextToken = string
type DescribeDataRepositoryAssociationsRequest = {
  AssociationIds?: {} | undefined
  Filters?: Filters | undefined
  MaxResults?: {} | undefined
  NextToken?: NextToken | undefined
}
type DescribeDataRepositoryAssociationsResponse = {
  Associations?: {} | undefined
  NextToken?: NextToken | undefined
}
type MaxResults = number
type DescribeDataRepositoryTasksRequest = {
  TaskIds?: {} | undefined
  Filters?: {} | undefined
  MaxResults?: MaxResults | undefined
  NextToken?: NextToken | undefined
}
type DescribeDataRepositoryTasksResponse = {
  DataRepositoryTasks?: {} | undefined
  NextToken?: NextToken | undefined
}
type DescribeFileCachesRequest = {
  FileCacheIds?: {} | undefined
  MaxResults?: MaxResults | undefined
  NextToken?: NextToken | undefined
}
type DescribeFileCachesResponse = { FileCaches?: {} | undefined; NextToken?: NextToken | undefined }
type DescribeFileSystemAliasesRequest = {
  ClientRequestToken?: ClientRequestToken | undefined
  FileSystemId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFileSystemAliasesResponse = { Aliases?: {} | undefined; NextToken?: {} | undefined }
type DescribeFileSystemsRequest = {
  FileSystemIds?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFileSystemsResponse = { FileSystems?: {} | undefined; NextToken?: {} | undefined }
type DescribeSnapshotsRequest = {
  SnapshotIds?: {} | undefined
  Filters?: {} | undefined
  MaxResults?: MaxResults | undefined
  NextToken?: NextToken | undefined
}
type DescribeSnapshotsResponse = { Snapshots?: {} | undefined; NextToken?: NextToken | undefined }
type DescribeStorageVirtualMachinesRequest = {
  StorageVirtualMachineIds?: {} | undefined
  Filters?: {} | undefined
  MaxResults?: MaxResults | undefined
  NextToken?: NextToken | undefined
}
type DescribeStorageVirtualMachinesResponse = {
  StorageVirtualMachines?: {} | undefined
  NextToken?: NextToken | undefined
}
type DescribeVolumesRequest = {
  VolumeIds?: {} | undefined
  Filters?: {} | undefined
  MaxResults?: MaxResults | undefined
  NextToken?: NextToken | undefined
}
type DescribeVolumesResponse = { Volumes?: {} | undefined; NextToken?: NextToken | undefined }
type DisassociateFileSystemAliasesRequest = {
  ClientRequestToken?: ClientRequestToken | undefined
  FileSystemId: {}
  Aliases: {}
}
type DisassociateFileSystemAliasesResponse = { Aliases?: {} | undefined }
type ListTagsForResourceRequest = {
  ResourceARN: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceResponse = { Tags?: {} | undefined; NextToken?: {} | undefined }
type ReleaseFileSystemNfsV3LocksRequest = {
  FileSystemId: FileSystemId
  ClientRequestToken?: ClientRequestToken | undefined
}
type FileSystem = {
  OwnerId?: {} | undefined
  CreationTime?: {} | undefined
  FileSystemId?: {} | undefined
  FileSystemType?: {} | undefined
  Lifecycle?: {} | undefined
  FailureDetails?: FileSystemFailureDetails | undefined
  StorageCapacity?: {} | undefined
  StorageType?: {} | undefined
  VpcId?: {} | undefined
  SubnetIds?: {} | undefined
  NetworkInterfaceIds?: {} | undefined
  DNSName?: {} | undefined
  KmsKeyId?: {} | undefined
  ResourceARN?: {} | undefined
  Tags?: {} | undefined
  WindowsConfiguration?:
    | {
        ActiveDirectoryId?: {} | undefined
        SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes | undefined
        DeploymentType?: {} | undefined
        RemoteAdministrationEndpoint?: {} | undefined
        PreferredSubnetId?: {} | undefined
        PreferredFileServerIp?: {} | undefined
        ThroughputCapacity?: {} | undefined
        MaintenanceOperationsInProgress?: {} | undefined
        WeeklyMaintenanceStartTime?: {} | undefined
        DailyAutomaticBackupStartTime?: {} | undefined
        AutomaticBackupRetentionDays?: {} | undefined
        CopyTagsToBackups?: {} | undefined
        Aliases?: Aliases | undefined
        AuditLogConfiguration?:
          | {
              FileAccessAuditLogLevel: {}
              FileShareAccessAuditLogLevel: {}
              AuditLogDestination?: {} | undefined
            }
          | undefined
      }
    | undefined
  LustreConfiguration?: LustreFileSystemConfiguration | undefined
  AdministrativeActions?: {} | undefined
  OntapConfiguration?:
    | {
        AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
        DailyAutomaticBackupStartTime?: DailyTime | undefined
        DeploymentType?: {} | undefined
        EndpointIpAddressRange?: {} | undefined
        Endpoints?:
          | {
              Intercluster?:
                | { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined }
                | undefined
              Management?:
                | { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined }
                | undefined
            }
          | undefined
        DiskIopsConfiguration?: { Mode?: {} | undefined; Iops?: {} | undefined } | undefined
        PreferredSubnetId?: SubnetId | undefined
        RouteTableIds?: {} | undefined
        ThroughputCapacity?: MegabytesPerSecond | undefined
        WeeklyMaintenanceStartTime?: WeeklyTime | undefined
      }
    | undefined
  FileSystemTypeVersion?: {} | undefined
  OpenZFSConfiguration?:
    | {
        AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
        CopyTagsToBackups?: {} | undefined
        CopyTagsToVolumes?: {} | undefined
        DailyAutomaticBackupStartTime?: DailyTime | undefined
        DeploymentType?: {} | undefined
        ThroughputCapacity?: {} | undefined
        WeeklyMaintenanceStartTime?: WeeklyTime | undefined
        DiskIopsConfiguration?: DiskIopsConfiguration | undefined
        RootVolumeId?: {} | undefined
      }
    | undefined
}
type ReleaseFileSystemNfsV3LocksResponse = { FileSystem?: FileSystem | undefined }
type RestoreVolumeFromSnapshotRequest = {
  ClientRequestToken?: ClientRequestToken | undefined
  VolumeId: {}
  SnapshotId: {}
  Options?: {} | undefined
}
type RestoreVolumeFromSnapshotResponse = {
  VolumeId?: {} | undefined
  Lifecycle?: {} | undefined
  AdministrativeActions?: {} | undefined
}
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateDataRepositoryAssociationRequest = {
  AssociationId: {}
  ClientRequestToken?: ClientRequestToken | undefined
  ImportedFileChunkSize?: {} | undefined
  S3?:
    | {
        AutoImportPolicy?: { Events?: {} | undefined } | undefined
        AutoExportPolicy?: { Events?: {} | undefined } | undefined
      }
    | undefined
}
type UpdateDataRepositoryAssociationResponse = {
  Association?:
    | {
        AssociationId?: {} | undefined
        ResourceARN?: ResourceARN | undefined
        FileSystemId?: FileSystemId | undefined
        Lifecycle?: {} | undefined
        FailureDetails?: DataRepositoryFailureDetails | undefined
        FileSystemPath?: {} | undefined
        DataRepositoryPath?: {} | undefined
        BatchImportMetaDataOnCreate?: {} | undefined
        ImportedFileChunkSize?: {} | undefined
        S3?:
          | {
              AutoImportPolicy?: { Events?: {} | undefined } | undefined
              AutoExportPolicy?: { Events?: {} | undefined } | undefined
            }
          | undefined
        Tags?: Tags | undefined
        CreationTime?: CreationTime | undefined
        FileCacheId?: {} | undefined
        FileCachePath?: {} | undefined
        DataRepositorySubdirectories?: {} | undefined
        NFS?:
          | {
              Version: {}
              DnsIps?: {} | undefined
              AutoExportPolicy?: { Events?: {} | undefined } | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateFileCacheRequest = {
  FileCacheId: {}
  ClientRequestToken?: ClientRequestToken | undefined
  LustreConfiguration?: { WeeklyMaintenanceStartTime?: WeeklyTime | undefined } | undefined
}
type UpdateFileCacheResponse = {
  FileCache?:
    | {
        OwnerId?: AWSAccountId | undefined
        CreationTime?: CreationTime | undefined
        FileCacheId?: {} | undefined
        FileCacheType?: {} | undefined
        FileCacheTypeVersion?: {} | undefined
        Lifecycle?: {} | undefined
        FailureDetails?: { Message?: {} | undefined } | undefined
        StorageCapacity?: {} | undefined
        VpcId?: VpcId | undefined
        SubnetIds?: SubnetIds | undefined
        NetworkInterfaceIds?: NetworkInterfaceIds | undefined
        DNSName?: {} | undefined
        KmsKeyId?: {} | undefined
        ResourceARN?: ResourceARN | undefined
        LustreConfiguration?:
          | {
              PerUnitStorageThroughput?: {} | undefined
              DeploymentType?: {} | undefined
              MountName?: {} | undefined
              WeeklyMaintenanceStartTime?: WeeklyTime | undefined
              MetadataConfiguration?: { StorageCapacity: {} } | undefined
              LogConfiguration?: { Level: {}; Destination?: {} | undefined } | undefined
            }
          | undefined
        DataRepositoryAssociationIds?: {} | undefined
      }
    | undefined
}
type UpdateFileSystemLustreConfiguration = {
  WeeklyMaintenanceStartTime?: {} | undefined
  DailyAutomaticBackupStartTime?: DailyTime | undefined
  AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
  AutoImportPolicy?: {} | undefined
  DataCompressionType?: {} | undefined
  LogConfiguration?: { Level: {}; Destination?: {} | undefined } | undefined
  RootSquashConfiguration?:
    | { RootSquash?: {} | undefined; NoSquashNids?: {} | undefined }
    | undefined
}
type UpdateFileSystemOntapConfiguration = {
  AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
  DailyAutomaticBackupStartTime?: DailyTime | undefined
  FsxAdminPassword?: {} | undefined
  WeeklyMaintenanceStartTime?: WeeklyTime | undefined
  DiskIopsConfiguration?: { Mode?: {} | undefined; Iops?: {} | undefined } | undefined
  ThroughputCapacity?: {} | undefined
  AddRouteTableIds?: {} | undefined
  RemoveRouteTableIds?: {} | undefined
}
type UpdateFileSystemRequest = {
  FileSystemId: {}
  ClientRequestToken?: {} | undefined
  StorageCapacity?: {} | undefined
  WindowsConfiguration?:
    | {
        WeeklyMaintenanceStartTime?: {} | undefined
        DailyAutomaticBackupStartTime?: {} | undefined
        AutomaticBackupRetentionDays?: {} | undefined
        ThroughputCapacity?: {} | undefined
        SelfManagedActiveDirectoryConfiguration?:
          | { UserName?: {} | undefined; Password?: {} | undefined; DnsIps?: {} | undefined }
          | undefined
        AuditLogConfiguration?:
          | {
              FileAccessAuditLogLevel: {}
              FileShareAccessAuditLogLevel: {}
              AuditLogDestination?: {} | undefined
            }
          | undefined
      }
    | undefined
  LustreConfiguration?: UpdateFileSystemLustreConfiguration | undefined
  OntapConfiguration?: UpdateFileSystemOntapConfiguration | undefined
  OpenZFSConfiguration?:
    | {
        AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
        CopyTagsToBackups?: {} | undefined
        CopyTagsToVolumes?: {} | undefined
        DailyAutomaticBackupStartTime?: DailyTime | undefined
        ThroughputCapacity?: {} | undefined
        WeeklyMaintenanceStartTime?: WeeklyTime | undefined
        DiskIopsConfiguration?: DiskIopsConfiguration | undefined
      }
    | undefined
}
type UpdateFileSystemResponse = {
  FileSystem?:
    | {
        OwnerId?: {} | undefined
        CreationTime?: {} | undefined
        FileSystemId?: {} | undefined
        FileSystemType?: {} | undefined
        Lifecycle?: {} | undefined
        FailureDetails?: FileSystemFailureDetails | undefined
        StorageCapacity?: {} | undefined
        StorageType?: {} | undefined
        VpcId?: {} | undefined
        SubnetIds?: {} | undefined
        NetworkInterfaceIds?: {} | undefined
        DNSName?: {} | undefined
        KmsKeyId?: {} | undefined
        ResourceARN?: {} | undefined
        Tags?: {} | undefined
        WindowsConfiguration?:
          | {
              ActiveDirectoryId?: {} | undefined
              SelfManagedActiveDirectoryConfiguration?:
                | SelfManagedActiveDirectoryAttributes
                | undefined
              DeploymentType?: {} | undefined
              RemoteAdministrationEndpoint?: {} | undefined
              PreferredSubnetId?: {} | undefined
              PreferredFileServerIp?: {} | undefined
              ThroughputCapacity?: {} | undefined
              MaintenanceOperationsInProgress?: {} | undefined
              WeeklyMaintenanceStartTime?: {} | undefined
              DailyAutomaticBackupStartTime?: {} | undefined
              AutomaticBackupRetentionDays?: {} | undefined
              CopyTagsToBackups?: {} | undefined
              Aliases?: Aliases | undefined
              AuditLogConfiguration?:
                | {
                    FileAccessAuditLogLevel: {}
                    FileShareAccessAuditLogLevel: {}
                    AuditLogDestination?: {} | undefined
                  }
                | undefined
            }
          | undefined
        LustreConfiguration?: LustreFileSystemConfiguration | undefined
        AdministrativeActions?: {} | undefined
        OntapConfiguration?:
          | {
              AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
              DailyAutomaticBackupStartTime?: DailyTime | undefined
              DeploymentType?: {} | undefined
              EndpointIpAddressRange?: {} | undefined
              Endpoints?:
                | {
                    Intercluster?:
                      | { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined }
                      | undefined
                    Management?:
                      | { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined }
                      | undefined
                  }
                | undefined
              DiskIopsConfiguration?: { Mode?: {} | undefined; Iops?: {} | undefined } | undefined
              PreferredSubnetId?: SubnetId | undefined
              RouteTableIds?: {} | undefined
              ThroughputCapacity?: MegabytesPerSecond | undefined
              WeeklyMaintenanceStartTime?: WeeklyTime | undefined
            }
          | undefined
        FileSystemTypeVersion?: {} | undefined
        OpenZFSConfiguration?:
          | {
              AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays | undefined
              CopyTagsToBackups?: {} | undefined
              CopyTagsToVolumes?: {} | undefined
              DailyAutomaticBackupStartTime?: DailyTime | undefined
              DeploymentType?: {} | undefined
              ThroughputCapacity?: {} | undefined
              WeeklyMaintenanceStartTime?: WeeklyTime | undefined
              DiskIopsConfiguration?: DiskIopsConfiguration | undefined
              RootVolumeId?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateSnapshotRequest = {
  ClientRequestToken?: ClientRequestToken | undefined
  Name: {}
  SnapshotId: {}
}
type UpdateSnapshotResponse = {
  Snapshot?:
    | {
        ResourceARN?: ResourceARN | undefined
        SnapshotId?: {} | undefined
        Name?: {} | undefined
        VolumeId?: {} | undefined
        CreationTime?: CreationTime | undefined
        Lifecycle?: {} | undefined
        LifecycleTransitionReason?: LifecycleTransitionReason | undefined
        Tags?: Tags | undefined
        AdministrativeActions?: {} | undefined
      }
    | undefined
}
type SelfManagedActiveDirectoryConfigurationUpdates = {
  UserName?: {} | undefined
  Password?: {} | undefined
  DnsIps?: {} | undefined
}
type UpdateStorageVirtualMachineRequest = {
  ActiveDirectoryConfiguration?:
    | {
        SelfManagedActiveDirectoryConfiguration?:
          | SelfManagedActiveDirectoryConfigurationUpdates
          | undefined
      }
    | undefined
  ClientRequestToken?: ClientRequestToken | undefined
  StorageVirtualMachineId: {}
  SvmAdminPassword?: {} | undefined
}
type StorageVirtualMachine = {
  ActiveDirectoryConfiguration?:
    | {
        NetBiosName?: {} | undefined
        SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes | undefined
      }
    | undefined
  CreationTime?: CreationTime | undefined
  Endpoints?:
    | {
        Iscsi?: { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined } | undefined
        Management?: { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined } | undefined
        Nfs?: { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined } | undefined
        Smb?: { DNSName?: DNSName | undefined; IpAddresses?: {} | undefined } | undefined
      }
    | undefined
  FileSystemId?: FileSystemId | undefined
  Lifecycle?: {} | undefined
  Name?: {} | undefined
  ResourceARN?: ResourceARN | undefined
  StorageVirtualMachineId?: {} | undefined
  Subtype?: {} | undefined
  UUID?: {} | undefined
  Tags?: Tags | undefined
  LifecycleTransitionReason?: { Message?: ErrorMessage | undefined } | undefined
  RootVolumeSecurityStyle?: {} | undefined
}
type UpdateStorageVirtualMachineResponse = {
  StorageVirtualMachine?: StorageVirtualMachine | undefined
}
type UpdateVolumeRequest = {
  ClientRequestToken?: ClientRequestToken | undefined
  VolumeId: {}
  OntapConfiguration?:
    | {
        JunctionPath?: {} | undefined
        SecurityStyle?: {} | undefined
        SizeInMegabytes?: {} | undefined
        StorageEfficiencyEnabled?: {} | undefined
        TieringPolicy?: { CoolingPeriod?: {} | undefined; Name?: {} | undefined } | undefined
        SnapshotPolicy?: {} | undefined
        CopyTagsToBackups?: {} | undefined
      }
    | undefined
  Name?: {} | undefined
  OpenZFSConfiguration?:
    | {
        StorageCapacityReservationGiB?: {} | undefined
        StorageCapacityQuotaGiB?: {} | undefined
        RecordSizeKiB?: {} | undefined
        DataCompressionType?: {} | undefined
        NfsExports?: {} | undefined
        UserAndGroupQuotas?: {} | undefined
        ReadOnly?: {} | undefined
      }
    | undefined
}
type UpdateVolumeResponse = {
  Volume?:
    | {
        CreationTime?: CreationTime | undefined
        FileSystemId?: FileSystemId | undefined
        Lifecycle?: {} | undefined
        Name?: {} | undefined
        OntapConfiguration?: OntapVolumeConfiguration | undefined
        ResourceARN?: ResourceARN | undefined
        Tags?: Tags | undefined
        VolumeId?: {} | undefined
        VolumeType?: {} | undefined
        LifecycleTransitionReason?: { Message?: ErrorMessage | undefined } | undefined
        AdministrativeActions?: {} | undefined
        OpenZFSConfiguration?:
          | {
              ParentVolumeId?: {} | undefined
              VolumePath?: {} | undefined
              StorageCapacityReservationGiB?: {} | undefined
              StorageCapacityQuotaGiB?: {} | undefined
              RecordSizeKiB?: {} | undefined
              DataCompressionType?: {} | undefined
              CopyTagsToSnapshots?: {} | undefined
              OriginSnapshot?:
                | { SnapshotARN?: ResourceARN | undefined; CopyStrategy?: {} | undefined }
                | undefined
              ReadOnly?: {} | undefined
              NfsExports?: {} | undefined
              UserAndGroupQuotas?: {} | undefined
              RestoreToSnapshot?: {} | undefined
              DeleteIntermediateSnaphots?: {} | undefined
              DeleteClonedVolumes?: {} | undefined
            }
          | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.AssociateFileSystemAliases'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateFileSystemAliasesRequest }
        output: AssociateFileSystemAliasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.CancelDataRepositoryTask'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelDataRepositoryTaskRequest }
        output: CancelDataRepositoryTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.CopyBackup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CopyBackupRequest }
        output: CopyBackupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.CreateBackup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateBackupRequest }
        output: CreateBackupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDataRepositoryAssociationRequest }
        output: CreateDataRepositoryAssociationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.CreateDataRepositoryTask'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDataRepositoryTaskRequest }
        output: CreateDataRepositoryTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.CreateFileCache'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateFileCacheRequest }
        output: CreateFileCacheResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.CreateFileSystem'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateFileSystemRequest }
        output: CreateFileSystemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateFileSystemFromBackupRequest }
        output: CreateFileSystemFromBackupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.CreateSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSnapshotRequest }
        output: CreateSnapshotResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateStorageVirtualMachineRequest }
        output: CreateStorageVirtualMachineResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.CreateVolume'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateVolumeRequest }
        output: CreateVolumeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.CreateVolumeFromBackup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateVolumeFromBackupRequest }
        output: CreateVolumeFromBackupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.DeleteBackup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteBackupRequest }
        output: DeleteBackupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDataRepositoryAssociationRequest }
        output: DeleteDataRepositoryAssociationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.DeleteFileCache'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteFileCacheRequest }
        output: DeleteFileCacheResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.DeleteFileSystem'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteFileSystemRequest }
        output: DeleteFileSystemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.DeleteSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSnapshotRequest }
        output: DeleteSnapshotResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteStorageVirtualMachineRequest }
        output: DeleteStorageVirtualMachineResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.DeleteVolume'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteVolumeRequest }
        output: DeleteVolumeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.DescribeBackups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeBackupsRequest }
        output: DescribeBackupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDataRepositoryAssociationsRequest }
        output: DescribeDataRepositoryAssociationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDataRepositoryTasksRequest }
        output: DescribeDataRepositoryTasksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.DescribeFileCaches'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeFileCachesRequest }
        output: DescribeFileCachesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.DescribeFileSystemAliases'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeFileSystemAliasesRequest }
        output: DescribeFileSystemAliasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.DescribeFileSystems'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeFileSystemsRequest }
        output: DescribeFileSystemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.DescribeSnapshots'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSnapshotsRequest }
        output: DescribeSnapshotsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeStorageVirtualMachinesRequest }
        output: DescribeStorageVirtualMachinesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.DescribeVolumes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeVolumesRequest }
        output: DescribeVolumesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateFileSystemAliasesRequest }
        output: DisassociateFileSystemAliasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceRequest }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ReleaseFileSystemNfsV3LocksRequest }
        output: ReleaseFileSystemNfsV3LocksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RestoreVolumeFromSnapshotRequest }
        output: RestoreVolumeFromSnapshotResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDataRepositoryAssociationRequest }
        output: UpdateDataRepositoryAssociationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.UpdateFileCache'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateFileCacheRequest }
        output: UpdateFileCacheResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.UpdateFileSystem'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateFileSystemRequest }
        output: UpdateFileSystemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.UpdateSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSnapshotRequest }
        output: UpdateSnapshotResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateStorageVirtualMachineRequest }
        output: UpdateStorageVirtualMachineResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSSimbaAPIService_v20180301.UpdateVolume'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateVolumeRequest }
        output: UpdateVolumeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
