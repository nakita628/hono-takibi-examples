import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetStorageGateway20130630ActivateGatewayHandler,
  XAmzTargetStorageGateway20130630AddCacheHandler,
  XAmzTargetStorageGateway20130630AddTagsToResourceHandler,
  XAmzTargetStorageGateway20130630AddUploadBufferHandler,
  XAmzTargetStorageGateway20130630AddWorkingStorageHandler,
  XAmzTargetStorageGateway20130630AssignTapePoolHandler,
  XAmzTargetStorageGateway20130630AssociateFileSystemHandler,
  XAmzTargetStorageGateway20130630AttachVolumeHandler,
  XAmzTargetStorageGateway20130630CancelArchivalHandler,
  XAmzTargetStorageGateway20130630CancelRetrievalHandler,
  XAmzTargetStorageGateway20130630CreateCachediSCSIVolumeHandler,
  XAmzTargetStorageGateway20130630CreateNFSFileShareHandler,
  XAmzTargetStorageGateway20130630CreateSMBFileShareHandler,
  XAmzTargetStorageGateway20130630CreateSnapshotFromVolumeRecoveryPointHandler,
  XAmzTargetStorageGateway20130630CreateSnapshotHandler,
  XAmzTargetStorageGateway20130630CreateStorediSCSIVolumeHandler,
  XAmzTargetStorageGateway20130630CreateTapePoolHandler,
  XAmzTargetStorageGateway20130630CreateTapesHandler,
  XAmzTargetStorageGateway20130630CreateTapeWithBarcodeHandler,
  XAmzTargetStorageGateway20130630DeleteAutomaticTapeCreationPolicyHandler,
  XAmzTargetStorageGateway20130630DeleteBandwidthRateLimitHandler,
  XAmzTargetStorageGateway20130630DeleteChapCredentialsHandler,
  XAmzTargetStorageGateway20130630DeleteFileShareHandler,
  XAmzTargetStorageGateway20130630DeleteGatewayHandler,
  XAmzTargetStorageGateway20130630DeleteSnapshotScheduleHandler,
  XAmzTargetStorageGateway20130630DeleteTapeArchiveHandler,
  XAmzTargetStorageGateway20130630DeleteTapeHandler,
  XAmzTargetStorageGateway20130630DeleteTapePoolHandler,
  XAmzTargetStorageGateway20130630DeleteVolumeHandler,
  XAmzTargetStorageGateway20130630DescribeAvailabilityMonitorTestHandler,
  XAmzTargetStorageGateway20130630DescribeBandwidthRateLimitHandler,
  XAmzTargetStorageGateway20130630DescribeBandwidthRateLimitScheduleHandler,
  XAmzTargetStorageGateway20130630DescribeCachediSCSIVolumesHandler,
  XAmzTargetStorageGateway20130630DescribeCacheHandler,
  XAmzTargetStorageGateway20130630DescribeChapCredentialsHandler,
  XAmzTargetStorageGateway20130630DescribeFileSystemAssociationsHandler,
  XAmzTargetStorageGateway20130630DescribeGatewayInformationHandler,
  XAmzTargetStorageGateway20130630DescribeMaintenanceStartTimeHandler,
  XAmzTargetStorageGateway20130630DescribeNFSFileSharesHandler,
  XAmzTargetStorageGateway20130630DescribeSMBFileSharesHandler,
  XAmzTargetStorageGateway20130630DescribeSMBSettingsHandler,
  XAmzTargetStorageGateway20130630DescribeSnapshotScheduleHandler,
  XAmzTargetStorageGateway20130630DescribeStorediSCSIVolumesHandler,
  XAmzTargetStorageGateway20130630DescribeTapeArchivesHandler,
  XAmzTargetStorageGateway20130630DescribeTapeRecoveryPointsHandler,
  XAmzTargetStorageGateway20130630DescribeTapesHandler,
  XAmzTargetStorageGateway20130630DescribeUploadBufferHandler,
  XAmzTargetStorageGateway20130630DescribeVTLDevicesHandler,
  XAmzTargetStorageGateway20130630DescribeWorkingStorageHandler,
  XAmzTargetStorageGateway20130630DetachVolumeHandler,
  XAmzTargetStorageGateway20130630DisableGatewayHandler,
  XAmzTargetStorageGateway20130630DisassociateFileSystemHandler,
  XAmzTargetStorageGateway20130630JoinDomainHandler,
  XAmzTargetStorageGateway20130630ListAutomaticTapeCreationPoliciesHandler,
  XAmzTargetStorageGateway20130630ListFileSharesHandler,
  XAmzTargetStorageGateway20130630ListFileSystemAssociationsHandler,
  XAmzTargetStorageGateway20130630ListGatewaysHandler,
  XAmzTargetStorageGateway20130630ListLocalDisksHandler,
  XAmzTargetStorageGateway20130630ListTagsForResourceHandler,
  XAmzTargetStorageGateway20130630ListTapePoolsHandler,
  XAmzTargetStorageGateway20130630ListTapesHandler,
  XAmzTargetStorageGateway20130630ListVolumeInitiatorsHandler,
  XAmzTargetStorageGateway20130630ListVolumeRecoveryPointsHandler,
  XAmzTargetStorageGateway20130630ListVolumesHandler,
  XAmzTargetStorageGateway20130630NotifyWhenUploadedHandler,
  XAmzTargetStorageGateway20130630RefreshCacheHandler,
  XAmzTargetStorageGateway20130630RemoveTagsFromResourceHandler,
  XAmzTargetStorageGateway20130630ResetCacheHandler,
  XAmzTargetStorageGateway20130630RetrieveTapeArchiveHandler,
  XAmzTargetStorageGateway20130630RetrieveTapeRecoveryPointHandler,
  XAmzTargetStorageGateway20130630SetLocalConsolePasswordHandler,
  XAmzTargetStorageGateway20130630SetSMBGuestPasswordHandler,
  XAmzTargetStorageGateway20130630ShutdownGatewayHandler,
  XAmzTargetStorageGateway20130630StartAvailabilityMonitorTestHandler,
  XAmzTargetStorageGateway20130630StartGatewayHandler,
  XAmzTargetStorageGateway20130630UpdateAutomaticTapeCreationPolicyHandler,
  XAmzTargetStorageGateway20130630UpdateBandwidthRateLimitHandler,
  XAmzTargetStorageGateway20130630UpdateBandwidthRateLimitScheduleHandler,
  XAmzTargetStorageGateway20130630UpdateChapCredentialsHandler,
  XAmzTargetStorageGateway20130630UpdateFileSystemAssociationHandler,
  XAmzTargetStorageGateway20130630UpdateGatewayInformationHandler,
  XAmzTargetStorageGateway20130630UpdateGatewaySoftwareNowHandler,
  XAmzTargetStorageGateway20130630UpdateMaintenanceStartTimeHandler,
  XAmzTargetStorageGateway20130630UpdateNFSFileShareHandler,
  XAmzTargetStorageGateway20130630UpdateSMBFileShareHandler,
  XAmzTargetStorageGateway20130630UpdateSMBFileShareVisibilityHandler,
  XAmzTargetStorageGateway20130630UpdateSMBLocalGroupsHandler,
  XAmzTargetStorageGateway20130630UpdateSMBSecurityStrategyHandler,
  XAmzTargetStorageGateway20130630UpdateSnapshotScheduleHandler,
  XAmzTargetStorageGateway20130630UpdateVTLDeviceTypeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetStorageGateway20130630ActivateGatewayHandler)
  .route('/', XAmzTargetStorageGateway20130630AddCacheHandler)
  .route('/', XAmzTargetStorageGateway20130630AddTagsToResourceHandler)
  .route('/', XAmzTargetStorageGateway20130630AddUploadBufferHandler)
  .route('/', XAmzTargetStorageGateway20130630AddWorkingStorageHandler)
  .route('/', XAmzTargetStorageGateway20130630AssignTapePoolHandler)
  .route('/', XAmzTargetStorageGateway20130630AssociateFileSystemHandler)
  .route('/', XAmzTargetStorageGateway20130630AttachVolumeHandler)
  .route('/', XAmzTargetStorageGateway20130630CancelArchivalHandler)
  .route('/', XAmzTargetStorageGateway20130630CancelRetrievalHandler)
  .route('/', XAmzTargetStorageGateway20130630CreateCachediSCSIVolumeHandler)
  .route('/', XAmzTargetStorageGateway20130630CreateNFSFileShareHandler)
  .route('/', XAmzTargetStorageGateway20130630CreateSMBFileShareHandler)
  .route('/', XAmzTargetStorageGateway20130630CreateSnapshotHandler)
  .route('/', XAmzTargetStorageGateway20130630CreateSnapshotFromVolumeRecoveryPointHandler)
  .route('/', XAmzTargetStorageGateway20130630CreateStorediSCSIVolumeHandler)
  .route('/', XAmzTargetStorageGateway20130630CreateTapePoolHandler)
  .route('/', XAmzTargetStorageGateway20130630CreateTapeWithBarcodeHandler)
  .route('/', XAmzTargetStorageGateway20130630CreateTapesHandler)
  .route('/', XAmzTargetStorageGateway20130630DeleteAutomaticTapeCreationPolicyHandler)
  .route('/', XAmzTargetStorageGateway20130630DeleteBandwidthRateLimitHandler)
  .route('/', XAmzTargetStorageGateway20130630DeleteChapCredentialsHandler)
  .route('/', XAmzTargetStorageGateway20130630DeleteFileShareHandler)
  .route('/', XAmzTargetStorageGateway20130630DeleteGatewayHandler)
  .route('/', XAmzTargetStorageGateway20130630DeleteSnapshotScheduleHandler)
  .route('/', XAmzTargetStorageGateway20130630DeleteTapeHandler)
  .route('/', XAmzTargetStorageGateway20130630DeleteTapeArchiveHandler)
  .route('/', XAmzTargetStorageGateway20130630DeleteTapePoolHandler)
  .route('/', XAmzTargetStorageGateway20130630DeleteVolumeHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeAvailabilityMonitorTestHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeBandwidthRateLimitHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeBandwidthRateLimitScheduleHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeCacheHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeCachediSCSIVolumesHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeChapCredentialsHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeFileSystemAssociationsHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeGatewayInformationHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeMaintenanceStartTimeHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeNFSFileSharesHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeSMBFileSharesHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeSMBSettingsHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeSnapshotScheduleHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeStorediSCSIVolumesHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeTapeArchivesHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeTapeRecoveryPointsHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeTapesHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeUploadBufferHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeVTLDevicesHandler)
  .route('/', XAmzTargetStorageGateway20130630DescribeWorkingStorageHandler)
  .route('/', XAmzTargetStorageGateway20130630DetachVolumeHandler)
  .route('/', XAmzTargetStorageGateway20130630DisableGatewayHandler)
  .route('/', XAmzTargetStorageGateway20130630DisassociateFileSystemHandler)
  .route('/', XAmzTargetStorageGateway20130630JoinDomainHandler)
  .route('/', XAmzTargetStorageGateway20130630ListAutomaticTapeCreationPoliciesHandler)
  .route('/', XAmzTargetStorageGateway20130630ListFileSharesHandler)
  .route('/', XAmzTargetStorageGateway20130630ListFileSystemAssociationsHandler)
  .route('/', XAmzTargetStorageGateway20130630ListGatewaysHandler)
  .route('/', XAmzTargetStorageGateway20130630ListLocalDisksHandler)
  .route('/', XAmzTargetStorageGateway20130630ListTagsForResourceHandler)
  .route('/', XAmzTargetStorageGateway20130630ListTapePoolsHandler)
  .route('/', XAmzTargetStorageGateway20130630ListTapesHandler)
  .route('/', XAmzTargetStorageGateway20130630ListVolumeInitiatorsHandler)
  .route('/', XAmzTargetStorageGateway20130630ListVolumeRecoveryPointsHandler)
  .route('/', XAmzTargetStorageGateway20130630ListVolumesHandler)
  .route('/', XAmzTargetStorageGateway20130630NotifyWhenUploadedHandler)
  .route('/', XAmzTargetStorageGateway20130630RefreshCacheHandler)
  .route('/', XAmzTargetStorageGateway20130630RemoveTagsFromResourceHandler)
  .route('/', XAmzTargetStorageGateway20130630ResetCacheHandler)
  .route('/', XAmzTargetStorageGateway20130630RetrieveTapeArchiveHandler)
  .route('/', XAmzTargetStorageGateway20130630RetrieveTapeRecoveryPointHandler)
  .route('/', XAmzTargetStorageGateway20130630SetLocalConsolePasswordHandler)
  .route('/', XAmzTargetStorageGateway20130630SetSMBGuestPasswordHandler)
  .route('/', XAmzTargetStorageGateway20130630ShutdownGatewayHandler)
  .route('/', XAmzTargetStorageGateway20130630StartAvailabilityMonitorTestHandler)
  .route('/', XAmzTargetStorageGateway20130630StartGatewayHandler)
  .route('/', XAmzTargetStorageGateway20130630UpdateAutomaticTapeCreationPolicyHandler)
  .route('/', XAmzTargetStorageGateway20130630UpdateBandwidthRateLimitHandler)
  .route('/', XAmzTargetStorageGateway20130630UpdateBandwidthRateLimitScheduleHandler)
  .route('/', XAmzTargetStorageGateway20130630UpdateChapCredentialsHandler)
  .route('/', XAmzTargetStorageGateway20130630UpdateFileSystemAssociationHandler)
  .route('/', XAmzTargetStorageGateway20130630UpdateGatewayInformationHandler)
  .route('/', XAmzTargetStorageGateway20130630UpdateGatewaySoftwareNowHandler)
  .route('/', XAmzTargetStorageGateway20130630UpdateMaintenanceStartTimeHandler)
  .route('/', XAmzTargetStorageGateway20130630UpdateNFSFileShareHandler)
  .route('/', XAmzTargetStorageGateway20130630UpdateSMBFileShareHandler)
  .route('/', XAmzTargetStorageGateway20130630UpdateSMBFileShareVisibilityHandler)
  .route('/', XAmzTargetStorageGateway20130630UpdateSMBLocalGroupsHandler)
  .route('/', XAmzTargetStorageGateway20130630UpdateSMBSecurityStrategyHandler)
  .route('/', XAmzTargetStorageGateway20130630UpdateSnapshotScheduleHandler)
  .route('/', XAmzTargetStorageGateway20130630UpdateVTLDeviceTypeHandler)

export default app
