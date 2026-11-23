type ActivateGatewayInput = {
  ActivationKey: {}
  GatewayName: {}
  GatewayTimezone: {}
  GatewayRegion: {}
  GatewayType?: {} | undefined
  TapeDriveType?: {} | undefined
  MediumChangerType?: {} | undefined
  Tags?: {} | undefined
}
type GatewayARN = string
type ActivateGatewayOutput = { GatewayARN?: GatewayARN | undefined }
type AddCacheInput = { GatewayARN: GatewayARN; DiskIds: {} }
type AddCacheOutput = { GatewayARN?: GatewayARN | undefined }
type AddTagsToResourceInput = { ResourceARN: {}; Tags: {} }
type AddTagsToResourceOutput = { ResourceARN?: {} | undefined }
type AddUploadBufferInput = { GatewayARN: GatewayARN; DiskIds: {} }
type AddUploadBufferOutput = { GatewayARN?: GatewayARN | undefined }
type AddWorkingStorageInput = { GatewayARN: GatewayARN; DiskIds: {} }
type AddWorkingStorageOutput = { GatewayARN?: GatewayARN | undefined }
type AssignTapePoolInput = { TapeARN: {}; PoolId: {}; BypassGovernanceRetention?: {} | undefined }
type AssignTapePoolOutput = { TapeARN?: {} | undefined }
type CacheAttributes = { CacheStaleTimeoutInSeconds?: {} | undefined }
type AssociateFileSystemInput = {
  UserName: {}
  Password: {}
  ClientToken: {}
  GatewayARN: GatewayARN
  LocationARN: {}
  Tags?: {} | undefined
  AuditDestinationARN?: {} | undefined
  CacheAttributes?: CacheAttributes | undefined
  EndpointNetworkConfiguration?: { IpAddresses?: {} | undefined } | undefined
}
type AssociateFileSystemOutput = { FileSystemAssociationARN?: {} | undefined }
type AttachVolumeInput = {
  GatewayARN: {}
  TargetName?: {} | undefined
  VolumeARN: {}
  NetworkInterfaceId: {}
  DiskId?: {} | undefined
}
type AttachVolumeOutput = { VolumeARN?: {} | undefined; TargetARN?: {} | undefined }
type CancelArchivalInput = { GatewayARN: GatewayARN; TapeARN: {} }
type CancelArchivalOutput = { TapeARN?: {} | undefined }
type CancelRetrievalInput = { GatewayARN: GatewayARN; TapeARN: {} }
type CancelRetrievalOutput = { TapeARN?: {} | undefined }
type CreateCachediSCSIVolumeInput = {
  GatewayARN: GatewayARN
  VolumeSizeInBytes: {}
  SnapshotId?: {} | undefined
  TargetName: {}
  SourceVolumeARN?: {} | undefined
  NetworkInterfaceId: {}
  ClientToken: {}
  KMSEncrypted?: {} | undefined
  KMSKey?: {} | undefined
  Tags?: {} | undefined
}
type CreateCachediSCSIVolumeOutput = { VolumeARN?: {} | undefined; TargetARN?: {} | undefined }
type CreateNFSFileShareInput = {
  ClientToken: {}
  NFSFileShareDefaults?:
    | {
        FileMode?: {} | undefined
        DirectoryMode?: {} | undefined
        GroupId?: {} | undefined
        OwnerId?: {} | undefined
      }
    | undefined
  GatewayARN: {}
  KMSEncrypted?: {} | undefined
  KMSKey?: {} | undefined
  Role: {}
  LocationARN: {}
  DefaultStorageClass?: {} | undefined
  ObjectACL?: {} | undefined
  ClientList?: {} | undefined
  Squash?: {} | undefined
  ReadOnly?: {} | undefined
  GuessMIMETypeEnabled?: {} | undefined
  RequesterPays?: {} | undefined
  Tags?: {} | undefined
  FileShareName?: {} | undefined
  CacheAttributes?: { CacheStaleTimeoutInSeconds?: {} | undefined } | undefined
  NotificationPolicy?: {} | undefined
  VPCEndpointDNSName?: {} | undefined
  BucketRegion?: {} | undefined
  AuditDestinationARN?: {} | undefined
}
type CreateNFSFileShareOutput = { FileShareARN?: {} | undefined }
type CreateSMBFileShareInput = {
  ClientToken: {}
  GatewayARN: {}
  KMSEncrypted?: {} | undefined
  KMSKey?: {} | undefined
  Role: {}
  LocationARN: {}
  DefaultStorageClass?: {} | undefined
  ObjectACL?: {} | undefined
  ReadOnly?: {} | undefined
  GuessMIMETypeEnabled?: {} | undefined
  RequesterPays?: {} | undefined
  SMBACLEnabled?: {} | undefined
  AccessBasedEnumeration?: {} | undefined
  AdminUserList?: {} | undefined
  ValidUserList?: {} | undefined
  InvalidUserList?: {} | undefined
  AuditDestinationARN?: {} | undefined
  Authentication?: {} | undefined
  CaseSensitivity?: {} | undefined
  Tags?: {} | undefined
  FileShareName?: {} | undefined
  CacheAttributes?: { CacheStaleTimeoutInSeconds?: {} | undefined } | undefined
  NotificationPolicy?: {} | undefined
  VPCEndpointDNSName?: {} | undefined
  BucketRegion?: {} | undefined
  OplocksEnabled?: {} | undefined
}
type CreateSMBFileShareOutput = { FileShareARN?: {} | undefined }
type CreateSnapshotInput = { VolumeARN: {}; SnapshotDescription: {}; Tags?: {} | undefined }
type CreateSnapshotOutput = { VolumeARN?: {} | undefined; SnapshotId?: {} | undefined }
type CreateSnapshotFromVolumeRecoveryPointInput = {
  VolumeARN: {}
  SnapshotDescription: {}
  Tags?: {} | undefined
}
type CreateSnapshotFromVolumeRecoveryPointOutput = {
  SnapshotId?: {} | undefined
  VolumeARN?: {} | undefined
  VolumeRecoveryPointTime?: {} | undefined
}
type CreateStorediSCSIVolumeInput = {
  GatewayARN: GatewayARN
  DiskId: {}
  SnapshotId?: {} | undefined
  PreserveExistingData: {}
  TargetName: {}
  NetworkInterfaceId: {}
  KMSEncrypted?: {} | undefined
  KMSKey?: {} | undefined
  Tags?: {} | undefined
}
type CreateStorediSCSIVolumeOutput = {
  VolumeARN?: {} | undefined
  VolumeSizeInBytes?: {} | undefined
  TargetARN?: {} | undefined
}
type CreateTapePoolInput = {
  PoolName: {}
  StorageClass: {}
  RetentionLockType?: {} | undefined
  RetentionLockTimeInDays?: {} | undefined
  Tags?: {} | undefined
}
type CreateTapePoolOutput = { PoolARN?: {} | undefined }
type CreateTapeWithBarcodeInput = {
  GatewayARN: {}
  TapeSizeInBytes: {}
  TapeBarcode: {}
  KMSEncrypted?: {} | undefined
  KMSKey?: {} | undefined
  PoolId?: {} | undefined
  Worm?: {} | undefined
  Tags?: {} | undefined
}
type CreateTapeWithBarcodeOutput = { TapeARN?: {} | undefined }
type CreateTapesInput = {
  GatewayARN: {}
  TapeSizeInBytes: {}
  ClientToken: {}
  NumTapesToCreate: {}
  TapeBarcodePrefix: {}
  KMSEncrypted?: {} | undefined
  KMSKey?: {} | undefined
  PoolId?: {} | undefined
  Worm?: {} | undefined
  Tags?: {} | undefined
}
type CreateTapesOutput = { TapeARNs?: {} | undefined }
type DeleteAutomaticTapeCreationPolicyInput = { GatewayARN: GatewayARN }
type DeleteAutomaticTapeCreationPolicyOutput = { GatewayARN?: GatewayARN | undefined }
type DeleteBandwidthRateLimitInput = { GatewayARN: GatewayARN; BandwidthType: {} }
type DeleteBandwidthRateLimitOutput = { GatewayARN?: GatewayARN | undefined }
type DeleteChapCredentialsInput = { TargetARN: {}; InitiatorName: {} }
type DeleteChapCredentialsOutput = { TargetARN?: {} | undefined; InitiatorName?: {} | undefined }
type DeleteFileShareInput = { FileShareARN: {}; ForceDelete?: {} | undefined }
type DeleteFileShareOutput = { FileShareARN?: {} | undefined }
type DeleteGatewayInput = { GatewayARN: GatewayARN }
type DeleteGatewayOutput = { GatewayARN?: GatewayARN | undefined }
type DeleteSnapshotScheduleInput = { VolumeARN: {} }
type DeleteSnapshotScheduleOutput = { VolumeARN?: {} | undefined }
type DeleteTapeInput = { GatewayARN: {}; TapeARN: {}; BypassGovernanceRetention?: {} | undefined }
type DeleteTapeOutput = { TapeARN?: {} | undefined }
type DeleteTapeArchiveInput = { TapeARN: {}; BypassGovernanceRetention?: {} | undefined }
type DeleteTapeArchiveOutput = { TapeARN?: {} | undefined }
type DeleteTapePoolInput = { PoolARN: {} }
type DeleteTapePoolOutput = { PoolARN?: {} | undefined }
type DeleteVolumeInput = { VolumeARN: {} }
type DeleteVolumeOutput = { VolumeARN?: {} | undefined }
type DescribeAvailabilityMonitorTestInput = { GatewayARN: GatewayARN }
type DescribeAvailabilityMonitorTestOutput = {
  GatewayARN?: GatewayARN | undefined
  Status?: {} | undefined
  StartTime?: {} | undefined
}
type DescribeBandwidthRateLimitInput = { GatewayARN: GatewayARN }
type DescribeBandwidthRateLimitOutput = {
  GatewayARN?: GatewayARN | undefined
  AverageUploadRateLimitInBitsPerSec?: {} | undefined
  AverageDownloadRateLimitInBitsPerSec?: {} | undefined
}
type DescribeBandwidthRateLimitScheduleInput = { GatewayARN: GatewayARN }
type DescribeBandwidthRateLimitScheduleOutput = {
  GatewayARN?: GatewayARN | undefined
  BandwidthRateLimitIntervals?: {} | undefined
}
type DescribeCacheInput = { GatewayARN: GatewayARN }
type DescribeCacheOutput = {
  GatewayARN?: GatewayARN | undefined
  DiskIds?: {} | undefined
  CacheAllocatedInBytes?: {} | undefined
  CacheUsedPercentage?: {} | undefined
  CacheDirtyPercentage?: {} | undefined
  CacheHitPercentage?: {} | undefined
  CacheMissPercentage?: {} | undefined
}
type DescribeCachediSCSIVolumesInput = { VolumeARNs: {} }
type DescribeCachediSCSIVolumesOutput = { CachediSCSIVolumes?: {} | undefined }
type DescribeChapCredentialsInput = { TargetARN: {} }
type DescribeChapCredentialsOutput = { ChapCredentials?: {} | undefined }
type DescribeFileSystemAssociationsInput = { FileSystemAssociationARNList: {} }
type DescribeFileSystemAssociationsOutput = { FileSystemAssociationInfoList?: {} | undefined }
type DescribeGatewayInformationInput = { GatewayARN: GatewayARN }
type DescribeGatewayInformationOutput = {
  GatewayARN?: GatewayARN | undefined
  GatewayId?: {} | undefined
  GatewayName?: {} | undefined
  GatewayTimezone?: {} | undefined
  GatewayState?: {} | undefined
  GatewayNetworkInterfaces?: {} | undefined
  GatewayType?: {} | undefined
  NextUpdateAvailabilityDate?: {} | undefined
  LastSoftwareUpdate?: {} | undefined
  Ec2InstanceId?: {} | undefined
  Ec2InstanceRegion?: {} | undefined
  Tags?: {} | undefined
  VPCEndpoint?: {} | undefined
  CloudWatchLogGroupARN?: {} | undefined
  HostEnvironment?: {} | undefined
  EndpointType?: {} | undefined
  SoftwareUpdatesEndDate?: {} | undefined
  DeprecationDate?: {} | undefined
  GatewayCapacity?: {} | undefined
  SupportedGatewayCapacities?: {} | undefined
  HostEnvironmentId?: {} | undefined
}
type DescribeMaintenanceStartTimeInput = { GatewayARN: GatewayARN }
type DescribeMaintenanceStartTimeOutput = {
  GatewayARN?: GatewayARN | undefined
  HourOfDay?: {} | undefined
  MinuteOfHour?: {} | undefined
  DayOfWeek?: {} | undefined
  DayOfMonth?: {} | undefined
  Timezone?: {} | undefined
}
type DescribeNFSFileSharesInput = { FileShareARNList: {} }
type DescribeNFSFileSharesOutput = { NFSFileShareInfoList?: {} | undefined }
type DescribeSMBFileSharesInput = { FileShareARNList: {} }
type DescribeSMBFileSharesOutput = { SMBFileShareInfoList?: {} | undefined }
type DescribeSMBSettingsInput = { GatewayARN: GatewayARN }
type DescribeSMBSettingsOutput = {
  GatewayARN?: GatewayARN | undefined
  DomainName?: {} | undefined
  ActiveDirectoryStatus?: {} | undefined
  SMBGuestPasswordSet?: {} | undefined
  SMBSecurityStrategy?: {} | undefined
  FileSharesVisible?: {} | undefined
  SMBLocalGroups?: { GatewayAdmins?: {} | undefined } | undefined
}
type DescribeSnapshotScheduleInput = { VolumeARN: {} }
type DescribeSnapshotScheduleOutput = {
  VolumeARN?: {} | undefined
  StartAt?: {} | undefined
  RecurrenceInHours?: {} | undefined
  Description?: {} | undefined
  Timezone?: {} | undefined
  Tags?: {} | undefined
}
type DescribeStorediSCSIVolumesInput = { VolumeARNs: {} }
type DescribeStorediSCSIVolumesOutput = { StorediSCSIVolumes?: {} | undefined }
type DescribeTapeArchivesInput = {
  TapeARNs?: {} | undefined
  Marker?: {} | undefined
  Limit?: {} | undefined
}
type DescribeTapeArchivesOutput = { TapeArchives?: {} | undefined; Marker?: {} | undefined }
type DescribeTapeRecoveryPointsInput = {
  GatewayARN: GatewayARN
  Marker?: {} | undefined
  Limit?: {} | undefined
}
type DescribeTapeRecoveryPointsOutput = {
  GatewayARN?: GatewayARN | undefined
  TapeRecoveryPointInfos?: {} | undefined
  Marker?: {} | undefined
}
type DescribeTapesInput = {
  GatewayARN: GatewayARN
  TapeARNs?: {} | undefined
  Marker?: {} | undefined
  Limit?: {} | undefined
}
type DescribeTapesOutput = { Tapes?: {} | undefined; Marker?: {} | undefined }
type DescribeUploadBufferInput = { GatewayARN: GatewayARN }
type DescribeUploadBufferOutput = {
  GatewayARN?: GatewayARN | undefined
  DiskIds?: {} | undefined
  UploadBufferUsedInBytes?: {} | undefined
  UploadBufferAllocatedInBytes?: {} | undefined
}
type DescribeVTLDevicesInput = {
  GatewayARN: GatewayARN
  VTLDeviceARNs?: {} | undefined
  Marker?: {} | undefined
  Limit?: {} | undefined
}
type DescribeVTLDevicesOutput = {
  GatewayARN?: GatewayARN | undefined
  VTLDevices?: {} | undefined
  Marker?: {} | undefined
}
type DescribeWorkingStorageInput = { GatewayARN: GatewayARN }
type DescribeWorkingStorageOutput = {
  GatewayARN?: GatewayARN | undefined
  DiskIds?: {} | undefined
  WorkingStorageUsedInBytes?: {} | undefined
  WorkingStorageAllocatedInBytes?: {} | undefined
}
type DetachVolumeInput = { VolumeARN: {}; ForceDetach?: {} | undefined }
type DetachVolumeOutput = { VolumeARN?: {} | undefined }
type DisableGatewayInput = { GatewayARN: GatewayARN }
type DisableGatewayOutput = { GatewayARN?: {} | undefined }
type DisassociateFileSystemInput = { FileSystemAssociationARN: {}; ForceDelete?: {} | undefined }
type DisassociateFileSystemOutput = { FileSystemAssociationARN?: {} | undefined }
type JoinDomainInput = {
  GatewayARN: {}
  DomainName: {}
  OrganizationalUnit?: {} | undefined
  DomainControllers?: {} | undefined
  TimeoutInSeconds?: {} | undefined
  UserName: {}
  Password: {}
}
type JoinDomainOutput = { GatewayARN?: {} | undefined; ActiveDirectoryStatus?: {} | undefined }
type ListAutomaticTapeCreationPoliciesInput = { GatewayARN?: GatewayARN | undefined }
type ListAutomaticTapeCreationPoliciesOutput = { AutomaticTapeCreationPolicyInfos?: {} | undefined }
type ListFileSharesInput = {
  GatewayARN?: {} | undefined
  Limit?: {} | undefined
  Marker?: {} | undefined
}
type ListFileSharesOutput = {
  Marker?: {} | undefined
  NextMarker?: {} | undefined
  FileShareInfoList?: {} | undefined
}
type ListFileSystemAssociationsInput = {
  GatewayARN?: GatewayARN | undefined
  Limit?: {} | undefined
  Marker?: {} | undefined
}
type ListFileSystemAssociationsOutput = {
  Marker?: {} | undefined
  NextMarker?: {} | undefined
  FileSystemAssociationSummaryList?: {} | undefined
}
type ListGatewaysInput = { Marker?: {} | undefined; Limit?: {} | undefined }
type ListGatewaysOutput = { Gateways?: {} | undefined; Marker?: {} | undefined }
type ListLocalDisksInput = { GatewayARN: GatewayARN }
type ListLocalDisksOutput = { GatewayARN?: GatewayARN | undefined; Disks?: {} | undefined }
type ListTagsForResourceInput = { ResourceARN: {}; Marker?: {} | undefined; Limit?: {} | undefined }
type ListTagsForResourceOutput = {
  ResourceARN?: {} | undefined
  Marker?: {} | undefined
  Tags?: {} | undefined
}
type ListTapePoolsInput = {
  PoolARNs?: {} | undefined
  Marker?: {} | undefined
  Limit?: {} | undefined
}
type ListTapePoolsOutput = { PoolInfos?: {} | undefined; Marker?: {} | undefined }
type TapeARN = string
type TapeARNs = TapeARN[]
type ListTapesInput = {
  TapeARNs?: TapeARNs | undefined
  Marker?: {} | undefined
  Limit?: {} | undefined
}
type TapeInfo = {
  TapeARN?: {} | undefined
  TapeBarcode?: {} | undefined
  TapeSizeInBytes?: {} | undefined
  TapeStatus?: {} | undefined
  GatewayARN?: {} | undefined
  PoolId?: {} | undefined
  RetentionStartDate?: {} | undefined
  PoolEntryDate?: {} | undefined
}
type TapeInfos = TapeInfo[]
type ListTapesOutput = { TapeInfos?: TapeInfos | undefined; Marker?: {} | undefined }
type ListVolumeInitiatorsInput = { VolumeARN: {} }
type ListVolumeInitiatorsOutput = { Initiators?: {} | undefined }
type ListVolumeRecoveryPointsInput = { GatewayARN: GatewayARN }
type ListVolumeRecoveryPointsOutput = {
  GatewayARN?: GatewayARN | undefined
  VolumeRecoveryPointInfos?: {} | undefined
}
type ListVolumesInput = {
  GatewayARN?: GatewayARN | undefined
  Marker?: {} | undefined
  Limit?: {} | undefined
}
type ListVolumesOutput = {
  GatewayARN?: GatewayARN | undefined
  Marker?: {} | undefined
  VolumeInfos?: {} | undefined
}
type FileShareARN = string
type NotifyWhenUploadedInput = { FileShareARN: FileShareARN }
type NotificationId = string
type NotifyWhenUploadedOutput = {
  FileShareARN?: FileShareARN | undefined
  NotificationId?: NotificationId | undefined
}
type RefreshCacheInput = {
  FileShareARN: {}
  FolderList?: {} | undefined
  Recursive?: {} | undefined
}
type RefreshCacheOutput = {
  FileShareARN?: FileShareARN | undefined
  NotificationId?: NotificationId | undefined
}
type RemoveTagsFromResourceInput = { ResourceARN: {}; TagKeys: {} }
type RemoveTagsFromResourceOutput = { ResourceARN?: {} | undefined }
type ResetCacheInput = { GatewayARN: GatewayARN }
type ResetCacheOutput = { GatewayARN?: GatewayARN | undefined }
type RetrieveTapeArchiveInput = { TapeARN: {}; GatewayARN: {} }
type RetrieveTapeArchiveOutput = { TapeARN?: {} | undefined }
type RetrieveTapeRecoveryPointInput = { TapeARN: {}; GatewayARN: GatewayARN }
type RetrieveTapeRecoveryPointOutput = { TapeARN?: {} | undefined }
type SetLocalConsolePasswordInput = { GatewayARN: GatewayARN; LocalConsolePassword: {} }
type SetLocalConsolePasswordOutput = { GatewayARN?: GatewayARN | undefined }
type SetSMBGuestPasswordInput = { GatewayARN: {}; Password: {} }
type SetSMBGuestPasswordOutput = { GatewayARN?: GatewayARN | undefined }
type ShutdownGatewayInput = { GatewayARN: GatewayARN }
type ShutdownGatewayOutput = { GatewayARN?: GatewayARN | undefined }
type StartAvailabilityMonitorTestInput = { GatewayARN: GatewayARN }
type StartAvailabilityMonitorTestOutput = { GatewayARN?: GatewayARN | undefined }
type StartGatewayInput = { GatewayARN: GatewayARN }
type StartGatewayOutput = { GatewayARN?: GatewayARN | undefined }
type UpdateAutomaticTapeCreationPolicyInput = {
  AutomaticTapeCreationRules: {}
  GatewayARN: GatewayARN
}
type UpdateAutomaticTapeCreationPolicyOutput = { GatewayARN?: GatewayARN | undefined }
type UpdateBandwidthRateLimitInput = {
  GatewayARN: GatewayARN
  AverageUploadRateLimitInBitsPerSec?: {} | undefined
  AverageDownloadRateLimitInBitsPerSec?: {} | undefined
}
type UpdateBandwidthRateLimitOutput = { GatewayARN?: GatewayARN | undefined }
type UpdateBandwidthRateLimitScheduleInput = {
  GatewayARN: GatewayARN
  BandwidthRateLimitIntervals: {}
}
type UpdateBandwidthRateLimitScheduleOutput = { GatewayARN?: GatewayARN | undefined }
type UpdateChapCredentialsInput = {
  TargetARN: {}
  SecretToAuthenticateInitiator: {}
  InitiatorName: {}
  SecretToAuthenticateTarget?: {} | undefined
}
type UpdateChapCredentialsOutput = { TargetARN?: {} | undefined; InitiatorName?: {} | undefined }
type UpdateFileSystemAssociationInput = {
  FileSystemAssociationARN: {}
  UserName?: {} | undefined
  Password?: {} | undefined
  AuditDestinationARN?: {} | undefined
  CacheAttributes?: CacheAttributes | undefined
}
type UpdateFileSystemAssociationOutput = { FileSystemAssociationARN?: {} | undefined }
type GatewayName = string
type UpdateGatewayInformationInput = {
  GatewayARN: GatewayARN
  GatewayName?: GatewayName | undefined
  GatewayTimezone?: {} | undefined
  CloudWatchLogGroupARN?: {} | undefined
  GatewayCapacity?: {} | undefined
}
type UpdateGatewayInformationOutput = {
  GatewayARN?: GatewayARN | undefined
  GatewayName?: {} | undefined
}
type UpdateGatewaySoftwareNowInput = { GatewayARN: GatewayARN }
type UpdateGatewaySoftwareNowOutput = { GatewayARN?: GatewayARN | undefined }
type UpdateMaintenanceStartTimeInput = {
  GatewayARN: GatewayARN
  HourOfDay: {}
  MinuteOfHour: {}
  DayOfWeek?: {} | undefined
  DayOfMonth?: {} | undefined
}
type UpdateMaintenanceStartTimeOutput = { GatewayARN?: GatewayARN | undefined }
type UpdateNFSFileShareInput = {
  FileShareARN: {}
  KMSEncrypted?: {} | undefined
  KMSKey?: {} | undefined
  NFSFileShareDefaults?:
    | {
        FileMode?: {} | undefined
        DirectoryMode?: {} | undefined
        GroupId?: {} | undefined
        OwnerId?: {} | undefined
      }
    | undefined
  DefaultStorageClass?: {} | undefined
  ObjectACL?: {} | undefined
  ClientList?: {} | undefined
  Squash?: {} | undefined
  ReadOnly?: {} | undefined
  GuessMIMETypeEnabled?: {} | undefined
  RequesterPays?: {} | undefined
  FileShareName?: {} | undefined
  CacheAttributes?: { CacheStaleTimeoutInSeconds?: {} | undefined } | undefined
  NotificationPolicy?: {} | undefined
  AuditDestinationARN?: {} | undefined
}
type UpdateNFSFileShareOutput = { FileShareARN?: {} | undefined }
type UpdateSMBFileShareInput = {
  FileShareARN: {}
  KMSEncrypted?: {} | undefined
  KMSKey?: {} | undefined
  DefaultStorageClass?: {} | undefined
  ObjectACL?: {} | undefined
  ReadOnly?: {} | undefined
  GuessMIMETypeEnabled?: {} | undefined
  RequesterPays?: {} | undefined
  SMBACLEnabled?: {} | undefined
  AccessBasedEnumeration?: {} | undefined
  AdminUserList?: {} | undefined
  ValidUserList?: {} | undefined
  InvalidUserList?: {} | undefined
  AuditDestinationARN?: {} | undefined
  CaseSensitivity?: {} | undefined
  FileShareName?: {} | undefined
  CacheAttributes?: { CacheStaleTimeoutInSeconds?: {} | undefined } | undefined
  NotificationPolicy?: {} | undefined
  OplocksEnabled?: {} | undefined
}
type UpdateSMBFileShareOutput = { FileShareARN?: {} | undefined }
type UpdateSMBFileShareVisibilityInput = { GatewayARN: GatewayARN; FileSharesVisible: {} }
type UpdateSMBFileShareVisibilityOutput = { GatewayARN?: GatewayARN | undefined }
type UpdateSMBLocalGroupsInput = {
  GatewayARN: GatewayARN
  SMBLocalGroups: { GatewayAdmins?: {} | undefined }
}
type UpdateSMBLocalGroupsOutput = { GatewayARN?: GatewayARN | undefined }
type UpdateSMBSecurityStrategyInput = { GatewayARN: GatewayARN; SMBSecurityStrategy: {} }
type UpdateSMBSecurityStrategyOutput = { GatewayARN?: GatewayARN | undefined }
type UpdateSnapshotScheduleInput = {
  VolumeARN: {}
  StartAt: {}
  RecurrenceInHours: {}
  Description?: {} | undefined
  Tags?: {} | undefined
}
type UpdateSnapshotScheduleOutput = { VolumeARN?: {} | undefined }
type UpdateVTLDeviceTypeInput = { VTLDeviceARN: {}; DeviceType: {} }
type UpdateVTLDeviceTypeOutput = { VTLDeviceARN?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=StorageGateway_20130630.ActivateGateway': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.ActivateGateway'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ActivateGatewayInput }
        output: ActivateGatewayOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.AddCache': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.AddCache'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddCacheInput }
        output: AddCacheOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.AddTagsToResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.AddTagsToResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddTagsToResourceInput }
        output: AddTagsToResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.AddUploadBuffer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddUploadBufferInput }
        output: AddUploadBufferOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.AddWorkingStorage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddWorkingStorageInput }
        output: AddWorkingStorageOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.AssignTapePool': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.AssignTapePool'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssignTapePoolInput }
        output: AssignTapePoolOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.AssociateFileSystem'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateFileSystemInput }
        output: AssociateFileSystemOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.AttachVolume': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.AttachVolume'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AttachVolumeInput }
        output: AttachVolumeOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.CancelArchival': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.CancelArchival'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelArchivalInput }
        output: CancelArchivalOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.CancelRetrieval': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.CancelRetrieval'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelRetrievalInput }
        output: CancelRetrievalOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.CreateCachediSCSIVolume'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCachediSCSIVolumeInput }
        output: CreateCachediSCSIVolumeOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.CreateNFSFileShare'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateNFSFileShareInput }
        output: CreateNFSFileShareOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.CreateSMBFileShare'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSMBFileShareInput }
        output: CreateSMBFileShareOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.CreateSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.CreateSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSnapshotInput }
        output: CreateSnapshotOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSnapshotFromVolumeRecoveryPointInput }
        output: CreateSnapshotFromVolumeRecoveryPointOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.CreateStorediSCSIVolume'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateStorediSCSIVolumeInput }
        output: CreateStorediSCSIVolumeOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.CreateTapePool': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.CreateTapePool'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateTapePoolInput }
        output: CreateTapePoolOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.CreateTapeWithBarcode'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateTapeWithBarcodeInput }
        output: CreateTapeWithBarcodeOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.CreateTapes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.CreateTapes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateTapesInput }
        output: CreateTapesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAutomaticTapeCreationPolicyInput }
        output: DeleteAutomaticTapeCreationPolicyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DeleteBandwidthRateLimit'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteBandwidthRateLimitInput }
        output: DeleteBandwidthRateLimitOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DeleteChapCredentials'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteChapCredentialsInput }
        output: DeleteChapCredentialsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DeleteFileShare': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DeleteFileShare'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteFileShareInput }
        output: DeleteFileShareOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DeleteGateway': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DeleteGateway'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteGatewayInput }
        output: DeleteGatewayOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DeleteSnapshotSchedule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSnapshotScheduleInput }
        output: DeleteSnapshotScheduleOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DeleteTape': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DeleteTape'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTapeInput }
        output: DeleteTapeOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DeleteTapeArchive'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTapeArchiveInput }
        output: DeleteTapeArchiveOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DeleteTapePool': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DeleteTapePool'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTapePoolInput }
        output: DeleteTapePoolOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DeleteVolume': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DeleteVolume'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteVolumeInput }
        output: DeleteVolumeOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeAvailabilityMonitorTest'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAvailabilityMonitorTestInput }
        output: DescribeAvailabilityMonitorTestOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeBandwidthRateLimit'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeBandwidthRateLimitInput }
        output: DescribeBandwidthRateLimitOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeBandwidthRateLimitSchedule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeBandwidthRateLimitScheduleInput }
        output: DescribeBandwidthRateLimitScheduleOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeCache': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeCache'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCacheInput }
        output: DescribeCacheOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeCachediSCSIVolumes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCachediSCSIVolumesInput }
        output: DescribeCachediSCSIVolumesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeChapCredentials'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeChapCredentialsInput }
        output: DescribeChapCredentialsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeFileSystemAssociations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeFileSystemAssociationsInput }
        output: DescribeFileSystemAssociationsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeGatewayInformation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeGatewayInformationInput }
        output: DescribeGatewayInformationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeMaintenanceStartTime'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeMaintenanceStartTimeInput }
        output: DescribeMaintenanceStartTimeOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeNFSFileShares'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeNFSFileSharesInput }
        output: DescribeNFSFileSharesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeSMBFileShares'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSMBFileSharesInput }
        output: DescribeSMBFileSharesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeSMBSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSMBSettingsInput }
        output: DescribeSMBSettingsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeSnapshotSchedule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSnapshotScheduleInput }
        output: DescribeSnapshotScheduleOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeStorediSCSIVolumes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeStorediSCSIVolumesInput }
        output: DescribeStorediSCSIVolumesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeTapeArchives'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTapeArchivesInput }
        output: DescribeTapeArchivesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeTapeRecoveryPoints'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTapeRecoveryPointsInput }
        output: DescribeTapeRecoveryPointsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeTapes': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeTapes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTapesInput }
        output: DescribeTapesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeUploadBuffer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeUploadBufferInput }
        output: DescribeUploadBufferOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeVTLDevices'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeVTLDevicesInput }
        output: DescribeVTLDevicesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DescribeWorkingStorage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeWorkingStorageInput }
        output: DescribeWorkingStorageOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DetachVolume': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DetachVolume'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetachVolumeInput }
        output: DetachVolumeOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DisableGateway': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DisableGateway'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableGatewayInput }
        output: DisableGatewayOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.DisassociateFileSystem'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateFileSystemInput }
        output: DisassociateFileSystemOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.JoinDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.JoinDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: JoinDomainInput }
        output: JoinDomainOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.ListAutomaticTapeCreationPolicies'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAutomaticTapeCreationPoliciesInput }
        output: ListAutomaticTapeCreationPoliciesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.ListFileShares': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.ListFileShares'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFileSharesInput }
        output: ListFileSharesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.ListFileSystemAssociations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFileSystemAssociationsInput }
        output: ListFileSystemAssociationsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.ListGateways': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.ListGateways'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListGatewaysInput }
        output: ListGatewaysOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.ListLocalDisks': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.ListLocalDisks'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListLocalDisksInput }
        output: ListLocalDisksOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.ListTagsForResource': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceInput }
        output: ListTagsForResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.ListTapePools': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.ListTapePools'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTapePoolsInput }
        output: ListTapePoolsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.ListTapes': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.ListTapes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTapesInput }
        output: ListTapesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.ListVolumeInitiators'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListVolumeInitiatorsInput }
        output: ListVolumeInitiatorsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.ListVolumeRecoveryPoints'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListVolumeRecoveryPointsInput }
        output: ListVolumeRecoveryPointsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.ListVolumes': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.ListVolumes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListVolumesInput }
        output: ListVolumesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.NotifyWhenUploaded'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: NotifyWhenUploadedInput }
        output: NotifyWhenUploadedOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.RefreshCache': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.RefreshCache'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RefreshCacheInput }
        output: RefreshCacheOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.RemoveTagsFromResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveTagsFromResourceInput }
        output: RemoveTagsFromResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.ResetCache': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.ResetCache'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResetCacheInput }
        output: ResetCacheOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.RetrieveTapeArchive'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RetrieveTapeArchiveInput }
        output: RetrieveTapeArchiveOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.RetrieveTapeRecoveryPoint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RetrieveTapeRecoveryPointInput }
        output: RetrieveTapeRecoveryPointOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.SetLocalConsolePassword'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetLocalConsolePasswordInput }
        output: SetLocalConsolePasswordOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.SetSMBGuestPassword'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetSMBGuestPasswordInput }
        output: SetSMBGuestPasswordOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.ShutdownGateway': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.ShutdownGateway'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ShutdownGatewayInput }
        output: ShutdownGatewayOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.StartAvailabilityMonitorTest'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartAvailabilityMonitorTestInput }
        output: StartAvailabilityMonitorTestOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.StartGateway': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.StartGateway'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartGatewayInput }
        output: StartGatewayOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAutomaticTapeCreationPolicyInput }
        output: UpdateAutomaticTapeCreationPolicyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.UpdateBandwidthRateLimit'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateBandwidthRateLimitInput }
        output: UpdateBandwidthRateLimitOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.UpdateBandwidthRateLimitSchedule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateBandwidthRateLimitScheduleInput }
        output: UpdateBandwidthRateLimitScheduleOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.UpdateChapCredentials'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateChapCredentialsInput }
        output: UpdateChapCredentialsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.UpdateFileSystemAssociation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateFileSystemAssociationInput }
        output: UpdateFileSystemAssociationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.UpdateGatewayInformation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateGatewayInformationInput }
        output: UpdateGatewayInformationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.UpdateGatewaySoftwareNow'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateGatewaySoftwareNowInput }
        output: UpdateGatewaySoftwareNowOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.UpdateMaintenanceStartTime'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateMaintenanceStartTimeInput }
        output: UpdateMaintenanceStartTimeOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.UpdateNFSFileShare'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateNFSFileShareInput }
        output: UpdateNFSFileShareOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.UpdateSMBFileShare'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSMBFileShareInput }
        output: UpdateSMBFileShareOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.UpdateSMBFileShareVisibility'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSMBFileShareVisibilityInput }
        output: UpdateSMBFileShareVisibilityOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.UpdateSMBLocalGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSMBLocalGroupsInput }
        output: UpdateSMBLocalGroupsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.UpdateSMBSecurityStrategy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSMBSecurityStrategyInput }
        output: UpdateSMBSecurityStrategyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.UpdateSnapshotSchedule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSnapshotScheduleInput }
        output: UpdateSnapshotScheduleOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'StorageGateway_20130630.UpdateVTLDeviceType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateVTLDeviceTypeInput }
        output: UpdateVTLDeviceTypeOutput
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
