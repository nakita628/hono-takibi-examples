import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetStorageGateway20130630ActivateGatewayHandler,
  xAmzTargetStorageGateway20130630AddCacheHandler,
  xAmzTargetStorageGateway20130630AddTagsToResourceHandler,
  xAmzTargetStorageGateway20130630AddUploadBufferHandler,
  xAmzTargetStorageGateway20130630AddWorkingStorageHandler,
  xAmzTargetStorageGateway20130630AssignTapePoolHandler,
  xAmzTargetStorageGateway20130630AssociateFileSystemHandler,
  xAmzTargetStorageGateway20130630AttachVolumeHandler,
  xAmzTargetStorageGateway20130630CancelArchivalHandler,
  xAmzTargetStorageGateway20130630CancelRetrievalHandler,
  xAmzTargetStorageGateway20130630CreateCachediScsiVolumeHandler,
  xAmzTargetStorageGateway20130630CreateNfsFileShareHandler,
  xAmzTargetStorageGateway20130630CreateSmbFileShareHandler,
  xAmzTargetStorageGateway20130630CreateSnapshotFromVolumeRecoveryPointHandler,
  xAmzTargetStorageGateway20130630CreateSnapshotHandler,
  xAmzTargetStorageGateway20130630CreateStorediScsiVolumeHandler,
  xAmzTargetStorageGateway20130630CreateTapePoolHandler,
  xAmzTargetStorageGateway20130630CreateTapesHandler,
  xAmzTargetStorageGateway20130630CreateTapeWithBarcodeHandler,
  xAmzTargetStorageGateway20130630DeleteAutomaticTapeCreationPolicyHandler,
  xAmzTargetStorageGateway20130630DeleteBandwidthRateLimitHandler,
  xAmzTargetStorageGateway20130630DeleteChapCredentialsHandler,
  xAmzTargetStorageGateway20130630DeleteFileShareHandler,
  xAmzTargetStorageGateway20130630DeleteGatewayHandler,
  xAmzTargetStorageGateway20130630DeleteSnapshotScheduleHandler,
  xAmzTargetStorageGateway20130630DeleteTapeArchiveHandler,
  xAmzTargetStorageGateway20130630DeleteTapeHandler,
  xAmzTargetStorageGateway20130630DeleteTapePoolHandler,
  xAmzTargetStorageGateway20130630DeleteVolumeHandler,
  xAmzTargetStorageGateway20130630DescribeAvailabilityMonitorTestHandler,
  xAmzTargetStorageGateway20130630DescribeBandwidthRateLimitHandler,
  xAmzTargetStorageGateway20130630DescribeBandwidthRateLimitScheduleHandler,
  xAmzTargetStorageGateway20130630DescribeCachediScsiVolumesHandler,
  xAmzTargetStorageGateway20130630DescribeCacheHandler,
  xAmzTargetStorageGateway20130630DescribeChapCredentialsHandler,
  xAmzTargetStorageGateway20130630DescribeFileSystemAssociationsHandler,
  xAmzTargetStorageGateway20130630DescribeGatewayInformationHandler,
  xAmzTargetStorageGateway20130630DescribeMaintenanceStartTimeHandler,
  xAmzTargetStorageGateway20130630DescribeNfsFileSharesHandler,
  xAmzTargetStorageGateway20130630DescribeSmbFileSharesHandler,
  xAmzTargetStorageGateway20130630DescribeSmbSettingsHandler,
  xAmzTargetStorageGateway20130630DescribeSnapshotScheduleHandler,
  xAmzTargetStorageGateway20130630DescribeStorediScsiVolumesHandler,
  xAmzTargetStorageGateway20130630DescribeTapeArchivesHandler,
  xAmzTargetStorageGateway20130630DescribeTapeRecoveryPointsHandler,
  xAmzTargetStorageGateway20130630DescribeTapesHandler,
  xAmzTargetStorageGateway20130630DescribeUploadBufferHandler,
  xAmzTargetStorageGateway20130630DescribeVtlDevicesHandler,
  xAmzTargetStorageGateway20130630DescribeWorkingStorageHandler,
  xAmzTargetStorageGateway20130630DetachVolumeHandler,
  xAmzTargetStorageGateway20130630DisableGatewayHandler,
  xAmzTargetStorageGateway20130630DisassociateFileSystemHandler,
  xAmzTargetStorageGateway20130630JoinDomainHandler,
  xAmzTargetStorageGateway20130630ListAutomaticTapeCreationPoliciesHandler,
  xAmzTargetStorageGateway20130630ListFileSharesHandler,
  xAmzTargetStorageGateway20130630ListFileSystemAssociationsHandler,
  xAmzTargetStorageGateway20130630ListGatewaysHandler,
  xAmzTargetStorageGateway20130630ListLocalDisksHandler,
  xAmzTargetStorageGateway20130630ListTagsForResourceHandler,
  xAmzTargetStorageGateway20130630ListTapePoolsHandler,
  xAmzTargetStorageGateway20130630ListTapesHandler,
  xAmzTargetStorageGateway20130630ListVolumeInitiatorsHandler,
  xAmzTargetStorageGateway20130630ListVolumeRecoveryPointsHandler,
  xAmzTargetStorageGateway20130630ListVolumesHandler,
  xAmzTargetStorageGateway20130630NotifyWhenUploadedHandler,
  xAmzTargetStorageGateway20130630RefreshCacheHandler,
  xAmzTargetStorageGateway20130630RemoveTagsFromResourceHandler,
  xAmzTargetStorageGateway20130630ResetCacheHandler,
  xAmzTargetStorageGateway20130630RetrieveTapeArchiveHandler,
  xAmzTargetStorageGateway20130630RetrieveTapeRecoveryPointHandler,
  xAmzTargetStorageGateway20130630SetLocalConsolePasswordHandler,
  xAmzTargetStorageGateway20130630SetSmbGuestPasswordHandler,
  xAmzTargetStorageGateway20130630ShutdownGatewayHandler,
  xAmzTargetStorageGateway20130630StartAvailabilityMonitorTestHandler,
  xAmzTargetStorageGateway20130630StartGatewayHandler,
  xAmzTargetStorageGateway20130630UpdateAutomaticTapeCreationPolicyHandler,
  xAmzTargetStorageGateway20130630UpdateBandwidthRateLimitHandler,
  xAmzTargetStorageGateway20130630UpdateBandwidthRateLimitScheduleHandler,
  xAmzTargetStorageGateway20130630UpdateChapCredentialsHandler,
  xAmzTargetStorageGateway20130630UpdateFileSystemAssociationHandler,
  xAmzTargetStorageGateway20130630UpdateGatewayInformationHandler,
  xAmzTargetStorageGateway20130630UpdateGatewaySoftwareNowHandler,
  xAmzTargetStorageGateway20130630UpdateMaintenanceStartTimeHandler,
  xAmzTargetStorageGateway20130630UpdateNfsFileShareHandler,
  xAmzTargetStorageGateway20130630UpdateSmbFileShareHandler,
  xAmzTargetStorageGateway20130630UpdateSmbFileShareVisibilityHandler,
  xAmzTargetStorageGateway20130630UpdateSmbLocalGroupsHandler,
  xAmzTargetStorageGateway20130630UpdateSmbSecurityStrategyHandler,
  xAmzTargetStorageGateway20130630UpdateSnapshotScheduleHandler,
  xAmzTargetStorageGateway20130630UpdateVtlDeviceTypeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetStorageGateway20130630ActivateGatewayHandler)
  .route('/', xAmzTargetStorageGateway20130630AddCacheHandler)
  .route('/', xAmzTargetStorageGateway20130630AddTagsToResourceHandler)
  .route('/', xAmzTargetStorageGateway20130630AddUploadBufferHandler)
  .route('/', xAmzTargetStorageGateway20130630AddWorkingStorageHandler)
  .route('/', xAmzTargetStorageGateway20130630AssignTapePoolHandler)
  .route('/', xAmzTargetStorageGateway20130630AssociateFileSystemHandler)
  .route('/', xAmzTargetStorageGateway20130630AttachVolumeHandler)
  .route('/', xAmzTargetStorageGateway20130630CancelArchivalHandler)
  .route('/', xAmzTargetStorageGateway20130630CancelRetrievalHandler)
  .route('/', xAmzTargetStorageGateway20130630CreateCachediScsiVolumeHandler)
  .route('/', xAmzTargetStorageGateway20130630CreateNfsFileShareHandler)
  .route('/', xAmzTargetStorageGateway20130630CreateSmbFileShareHandler)
  .route('/', xAmzTargetStorageGateway20130630CreateSnapshotHandler)
  .route('/', xAmzTargetStorageGateway20130630CreateSnapshotFromVolumeRecoveryPointHandler)
  .route('/', xAmzTargetStorageGateway20130630CreateStorediScsiVolumeHandler)
  .route('/', xAmzTargetStorageGateway20130630CreateTapePoolHandler)
  .route('/', xAmzTargetStorageGateway20130630CreateTapeWithBarcodeHandler)
  .route('/', xAmzTargetStorageGateway20130630CreateTapesHandler)
  .route('/', xAmzTargetStorageGateway20130630DeleteAutomaticTapeCreationPolicyHandler)
  .route('/', xAmzTargetStorageGateway20130630DeleteBandwidthRateLimitHandler)
  .route('/', xAmzTargetStorageGateway20130630DeleteChapCredentialsHandler)
  .route('/', xAmzTargetStorageGateway20130630DeleteFileShareHandler)
  .route('/', xAmzTargetStorageGateway20130630DeleteGatewayHandler)
  .route('/', xAmzTargetStorageGateway20130630DeleteSnapshotScheduleHandler)
  .route('/', xAmzTargetStorageGateway20130630DeleteTapeHandler)
  .route('/', xAmzTargetStorageGateway20130630DeleteTapeArchiveHandler)
  .route('/', xAmzTargetStorageGateway20130630DeleteTapePoolHandler)
  .route('/', xAmzTargetStorageGateway20130630DeleteVolumeHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeAvailabilityMonitorTestHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeBandwidthRateLimitHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeBandwidthRateLimitScheduleHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeCacheHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeCachediScsiVolumesHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeChapCredentialsHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeFileSystemAssociationsHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeGatewayInformationHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeMaintenanceStartTimeHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeNfsFileSharesHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeSmbFileSharesHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeSmbSettingsHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeSnapshotScheduleHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeStorediScsiVolumesHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeTapeArchivesHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeTapeRecoveryPointsHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeTapesHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeUploadBufferHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeVtlDevicesHandler)
  .route('/', xAmzTargetStorageGateway20130630DescribeWorkingStorageHandler)
  .route('/', xAmzTargetStorageGateway20130630DetachVolumeHandler)
  .route('/', xAmzTargetStorageGateway20130630DisableGatewayHandler)
  .route('/', xAmzTargetStorageGateway20130630DisassociateFileSystemHandler)
  .route('/', xAmzTargetStorageGateway20130630JoinDomainHandler)
  .route('/', xAmzTargetStorageGateway20130630ListAutomaticTapeCreationPoliciesHandler)
  .route('/', xAmzTargetStorageGateway20130630ListFileSharesHandler)
  .route('/', xAmzTargetStorageGateway20130630ListFileSystemAssociationsHandler)
  .route('/', xAmzTargetStorageGateway20130630ListGatewaysHandler)
  .route('/', xAmzTargetStorageGateway20130630ListLocalDisksHandler)
  .route('/', xAmzTargetStorageGateway20130630ListTagsForResourceHandler)
  .route('/', xAmzTargetStorageGateway20130630ListTapePoolsHandler)
  .route('/', xAmzTargetStorageGateway20130630ListTapesHandler)
  .route('/', xAmzTargetStorageGateway20130630ListVolumeInitiatorsHandler)
  .route('/', xAmzTargetStorageGateway20130630ListVolumeRecoveryPointsHandler)
  .route('/', xAmzTargetStorageGateway20130630ListVolumesHandler)
  .route('/', xAmzTargetStorageGateway20130630NotifyWhenUploadedHandler)
  .route('/', xAmzTargetStorageGateway20130630RefreshCacheHandler)
  .route('/', xAmzTargetStorageGateway20130630RemoveTagsFromResourceHandler)
  .route('/', xAmzTargetStorageGateway20130630ResetCacheHandler)
  .route('/', xAmzTargetStorageGateway20130630RetrieveTapeArchiveHandler)
  .route('/', xAmzTargetStorageGateway20130630RetrieveTapeRecoveryPointHandler)
  .route('/', xAmzTargetStorageGateway20130630SetLocalConsolePasswordHandler)
  .route('/', xAmzTargetStorageGateway20130630SetSmbGuestPasswordHandler)
  .route('/', xAmzTargetStorageGateway20130630ShutdownGatewayHandler)
  .route('/', xAmzTargetStorageGateway20130630StartAvailabilityMonitorTestHandler)
  .route('/', xAmzTargetStorageGateway20130630StartGatewayHandler)
  .route('/', xAmzTargetStorageGateway20130630UpdateAutomaticTapeCreationPolicyHandler)
  .route('/', xAmzTargetStorageGateway20130630UpdateBandwidthRateLimitHandler)
  .route('/', xAmzTargetStorageGateway20130630UpdateBandwidthRateLimitScheduleHandler)
  .route('/', xAmzTargetStorageGateway20130630UpdateChapCredentialsHandler)
  .route('/', xAmzTargetStorageGateway20130630UpdateFileSystemAssociationHandler)
  .route('/', xAmzTargetStorageGateway20130630UpdateGatewayInformationHandler)
  .route('/', xAmzTargetStorageGateway20130630UpdateGatewaySoftwareNowHandler)
  .route('/', xAmzTargetStorageGateway20130630UpdateMaintenanceStartTimeHandler)
  .route('/', xAmzTargetStorageGateway20130630UpdateNfsFileShareHandler)
  .route('/', xAmzTargetStorageGateway20130630UpdateSmbFileShareHandler)
  .route('/', xAmzTargetStorageGateway20130630UpdateSmbFileShareVisibilityHandler)
  .route('/', xAmzTargetStorageGateway20130630UpdateSmbLocalGroupsHandler)
  .route('/', xAmzTargetStorageGateway20130630UpdateSmbSecurityStrategyHandler)
  .route('/', xAmzTargetStorageGateway20130630UpdateSnapshotScheduleHandler)
  .route('/', xAmzTargetStorageGateway20130630UpdateVtlDeviceTypeHandler)

export default app
