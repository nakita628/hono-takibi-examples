import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetStorageGateway20130630ActivateGateway(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.ActivateGateway']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.ActivateGateway'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630AddCache(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddCache']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.AddCache'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630AddTagsToResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddTagsToResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.AddTagsToResource'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630AddUploadBuffer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630AddWorkingStorage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630AssignTapePool(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.AssignTapePool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.AssignTapePool'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630AssociateFileSystem(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630AttachVolume(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.AttachVolume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.AttachVolume'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630CancelArchival(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.CancelArchival']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.CancelArchival'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630CancelRetrieval(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.CancelRetrieval']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.CancelRetrieval'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630CreateCachediSCSIVolume(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630CreateNFSFileShare(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630CreateSMBFileShare(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630CreateSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.CreateSnapshot'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630CreateSnapshotFromVolumeRecoveryPoint(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetStorageGateway20130630CreateStorediSCSIVolume(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630CreateTapePool(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapePool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.CreateTapePool'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630CreateTapeWithBarcode(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630CreateTapes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.CreateTapes'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DeleteAutomaticTapeCreationPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetStorageGateway20130630DeleteBandwidthRateLimit(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DeleteChapCredentials(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DeleteFileShare(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteFileShare']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DeleteFileShare'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DeleteGateway(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteGateway']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DeleteGateway'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DeleteSnapshotSchedule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DeleteTape(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTape']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DeleteTape'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DeleteTapeArchive(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DeleteTapePool(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTapePool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DeleteTapePool'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DeleteVolume(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteVolume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DeleteVolume'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeAvailabilityMonitorTest(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeBandwidthRateLimit(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitSchedule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeCache(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeCache']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeCache'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeCachediSCSIVolumes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeChapCredentials(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeFileSystemAssociations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeGatewayInformation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeMaintenanceStartTime(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeNFSFileShares(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeSMBFileShares(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeSMBSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeSnapshotSchedule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeStorediSCSIVolumes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeTapeArchives(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeTapeRecoveryPoints(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeTapes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeTapes'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeUploadBuffer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeVTLDevices(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DescribeWorkingStorage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DetachVolume(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DetachVolume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DetachVolume'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DisableGateway(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DisableGateway']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DisableGateway'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630DisassociateFileSystem(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630JoinDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.JoinDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.JoinDomain'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630ListAutomaticTapeCreationPolicies(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetStorageGateway20130630ListFileShares(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListFileShares']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.ListFileShares'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630ListFileSystemAssociations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630ListGateways(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListGateways']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.ListGateways'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630ListLocalDisks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListLocalDisks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.ListLocalDisks'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630ListTapePools(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTapePools']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.ListTapePools'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630ListTapes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTapes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.ListTapes'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630ListVolumeInitiators(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630ListVolumeRecoveryPoints(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630ListVolumes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.ListVolumes'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630NotifyWhenUploaded(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630RefreshCache(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.RefreshCache']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.RefreshCache'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630RemoveTagsFromResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630ResetCache(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.ResetCache']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.ResetCache'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630RetrieveTapeArchive(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630RetrieveTapeRecoveryPoint(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630SetLocalConsolePassword(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630SetSMBGuestPassword(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630ShutdownGateway(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.ShutdownGateway']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.ShutdownGateway'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630StartAvailabilityMonitorTest(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetStorageGateway20130630StartGateway(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.StartGateway']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.StartGateway'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630UpdateAutomaticTapeCreationPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetStorageGateway20130630UpdateBandwidthRateLimit(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitSchedule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetStorageGateway20130630UpdateChapCredentials(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630UpdateFileSystemAssociation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetStorageGateway20130630UpdateGatewayInformation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630UpdateGatewaySoftwareNow(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630UpdateMaintenanceStartTime(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630UpdateNFSFileShare(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630UpdateSMBFileShare(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630UpdateSMBFileShareVisibility(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetStorageGateway20130630UpdateSMBLocalGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630UpdateSMBSecurityStrategy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630UpdateSnapshotSchedule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule'].$post(args, options),
  )
}

export async function postXAmzTargetStorageGateway20130630UpdateVTLDeviceType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType'].$post(args, options),
  )
}
