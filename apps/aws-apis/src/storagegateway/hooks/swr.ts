import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetStorageGateway_20130630ActivateGatewayKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.ActivateGateway'] as const
}

export function getXAmzTargetStorageGateway_20130630AddCacheKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.AddCache'] as const
}

export function getXAmzTargetStorageGateway_20130630AddTagsToResourceKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.AddTagsToResource'] as const
}

export function getXAmzTargetStorageGateway_20130630AddUploadBufferKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer'] as const
}

export function getXAmzTargetStorageGateway_20130630AddWorkingStorageKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage'] as const
}

export function getXAmzTargetStorageGateway_20130630AssignTapePoolKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.AssignTapePool'] as const
}

export function getXAmzTargetStorageGateway_20130630AssociateFileSystemKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem'] as const
}

export function getXAmzTargetStorageGateway_20130630AttachVolumeKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.AttachVolume'] as const
}

export function getXAmzTargetStorageGateway_20130630CancelArchivalKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.CancelArchival'] as const
}

export function getXAmzTargetStorageGateway_20130630CancelRetrievalKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.CancelRetrieval'] as const
}

export function getXAmzTargetStorageGateway_20130630CreateCachediSCSIVolumeKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume'] as const
}

export function getXAmzTargetStorageGateway_20130630CreateNFSFileShareKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare'] as const
}

export function getXAmzTargetStorageGateway_20130630CreateSMBFileShareKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare'] as const
}

export function getXAmzTargetStorageGateway_20130630CreateSnapshotKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.CreateSnapshot'] as const
}

export function getXAmzTargetStorageGateway_20130630CreateSnapshotFromVolumeRecoveryPointKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint'] as const
}

export function getXAmzTargetStorageGateway_20130630CreateStorediSCSIVolumeKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume'] as const
}

export function getXAmzTargetStorageGateway_20130630CreateTapePoolKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.CreateTapePool'] as const
}

export function getXAmzTargetStorageGateway_20130630CreateTapeWithBarcodeKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode'] as const
}

export function getXAmzTargetStorageGateway_20130630CreateTapesKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.CreateTapes'] as const
}

export function getXAmzTargetStorageGateway_20130630DeleteAutomaticTapeCreationPolicyKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy'] as const
}

export function getXAmzTargetStorageGateway_20130630DeleteBandwidthRateLimitKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit'] as const
}

export function getXAmzTargetStorageGateway_20130630DeleteChapCredentialsKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials'] as const
}

export function getXAmzTargetStorageGateway_20130630DeleteFileShareKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DeleteFileShare'] as const
}

export function getXAmzTargetStorageGateway_20130630DeleteGatewayKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DeleteGateway'] as const
}

export function getXAmzTargetStorageGateway_20130630DeleteSnapshotScheduleKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule'] as const
}

export function getXAmzTargetStorageGateway_20130630DeleteTapeKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DeleteTape'] as const
}

export function getXAmzTargetStorageGateway_20130630DeleteTapeArchiveKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive'] as const
}

export function getXAmzTargetStorageGateway_20130630DeleteTapePoolKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DeleteTapePool'] as const
}

export function getXAmzTargetStorageGateway_20130630DeleteVolumeKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DeleteVolume'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeAvailabilityMonitorTestKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeBandwidthRateLimitKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeBandwidthRateLimitScheduleKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeCacheKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeCache'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeCachediSCSIVolumesKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeChapCredentialsKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeFileSystemAssociationsKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeGatewayInformationKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeMaintenanceStartTimeKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeNFSFileSharesKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeSMBFileSharesKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeSMBSettingsKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeSnapshotScheduleKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeStorediSCSIVolumesKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeTapeArchivesKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeTapeRecoveryPointsKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeTapesKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeTapes'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeUploadBufferKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeVTLDevicesKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices'] as const
}

export function getXAmzTargetStorageGateway_20130630DescribeWorkingStorageKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage'] as const
}

export function getXAmzTargetStorageGateway_20130630DetachVolumeKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DetachVolume'] as const
}

export function getXAmzTargetStorageGateway_20130630DisableGatewayKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DisableGateway'] as const
}

export function getXAmzTargetStorageGateway_20130630DisassociateFileSystemKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem'] as const
}

export function getXAmzTargetStorageGateway_20130630JoinDomainKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.JoinDomain'] as const
}

export function getXAmzTargetStorageGateway_20130630ListAutomaticTapeCreationPoliciesKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies'] as const
}

export function getXAmzTargetStorageGateway_20130630ListFileSharesKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.ListFileShares'] as const
}

export function getXAmzTargetStorageGateway_20130630ListFileSystemAssociationsKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations'] as const
}

export function getXAmzTargetStorageGateway_20130630ListGatewaysKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.ListGateways'] as const
}

export function getXAmzTargetStorageGateway_20130630ListLocalDisksKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.ListLocalDisks'] as const
}

export function getXAmzTargetStorageGateway_20130630ListTagsForResourceKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.ListTagsForResource'] as const
}

export function getXAmzTargetStorageGateway_20130630ListTapePoolsKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.ListTapePools'] as const
}

export function getXAmzTargetStorageGateway_20130630ListTapesKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.ListTapes'] as const
}

export function getXAmzTargetStorageGateway_20130630ListVolumeInitiatorsKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators'] as const
}

export function getXAmzTargetStorageGateway_20130630ListVolumeRecoveryPointsKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints'] as const
}

export function getXAmzTargetStorageGateway_20130630ListVolumesKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.ListVolumes'] as const
}

export function getXAmzTargetStorageGateway_20130630NotifyWhenUploadedKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded'] as const
}

export function getXAmzTargetStorageGateway_20130630RefreshCacheKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.RefreshCache'] as const
}

export function getXAmzTargetStorageGateway_20130630RemoveTagsFromResourceKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource'] as const
}

export function getXAmzTargetStorageGateway_20130630ResetCacheKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.ResetCache'] as const
}

export function getXAmzTargetStorageGateway_20130630RetrieveTapeArchiveKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive'] as const
}

export function getXAmzTargetStorageGateway_20130630RetrieveTapeRecoveryPointKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint'] as const
}

export function getXAmzTargetStorageGateway_20130630SetLocalConsolePasswordKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword'] as const
}

export function getXAmzTargetStorageGateway_20130630SetSMBGuestPasswordKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword'] as const
}

export function getXAmzTargetStorageGateway_20130630ShutdownGatewayKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.ShutdownGateway'] as const
}

export function getXAmzTargetStorageGateway_20130630StartAvailabilityMonitorTestKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest'] as const
}

export function getXAmzTargetStorageGateway_20130630StartGatewayKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.StartGateway'] as const
}

export function getXAmzTargetStorageGateway_20130630UpdateAutomaticTapeCreationPolicyKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy'] as const
}

export function getXAmzTargetStorageGateway_20130630UpdateBandwidthRateLimitKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit'] as const
}

export function getXAmzTargetStorageGateway_20130630UpdateBandwidthRateLimitScheduleKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule'] as const
}

export function getXAmzTargetStorageGateway_20130630UpdateChapCredentialsKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials'] as const
}

export function getXAmzTargetStorageGateway_20130630UpdateFileSystemAssociationKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation'] as const
}

export function getXAmzTargetStorageGateway_20130630UpdateGatewayInformationKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation'] as const
}

export function getXAmzTargetStorageGateway_20130630UpdateGatewaySoftwareNowKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow'] as const
}

export function getXAmzTargetStorageGateway_20130630UpdateMaintenanceStartTimeKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime'] as const
}

export function getXAmzTargetStorageGateway_20130630UpdateNFSFileShareKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare'] as const
}

export function getXAmzTargetStorageGateway_20130630UpdateSMBFileShareKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare'] as const
}

export function getXAmzTargetStorageGateway_20130630UpdateSMBFileShareVisibilityKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility'] as const
}

export function getXAmzTargetStorageGateway_20130630UpdateSMBLocalGroupsKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups'] as const
}

export function getXAmzTargetStorageGateway_20130630UpdateSMBSecurityStrategyKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy'] as const
}

export function getXAmzTargetStorageGateway_20130630UpdateSnapshotScheduleKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule'] as const
}

export function getXAmzTargetStorageGateway_20130630UpdateVTLDeviceTypeKey() {
  return ['#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType'] as const
}

export function getPostXAmzTargetStorageGateway20130630ActivateGatewayKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ActivateGateway',
    '/#X-Amz-Target=StorageGateway_20130630.ActivateGateway',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630ActivateGateway<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.ActivateGateway']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ActivateGateway']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630ActivateGatewayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.ActivateGateway']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.ActivateGateway'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630AddCacheKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.AddCache',
    '/#X-Amz-Target=StorageGateway_20130630.AddCache',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630AddCache<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.AddCache']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.AddCache']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630AddCacheKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddCache']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.AddCache'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630AddTagsToResourceKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.AddTagsToResource',
    '/#X-Amz-Target=StorageGateway_20130630.AddTagsToResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630AddTagsToResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddTagsToResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddTagsToResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630AddTagsToResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddTagsToResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.AddTagsToResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630AddUploadBufferKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer',
    '/#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630AddUploadBuffer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630AddUploadBufferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630AddWorkingStorageKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage',
    '/#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630AddWorkingStorage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630AddWorkingStorageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630AssignTapePoolKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.AssignTapePool',
    '/#X-Amz-Target=StorageGateway_20130630.AssignTapePool',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630AssignTapePool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.AssignTapePool']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.AssignTapePool']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630AssignTapePoolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.AssignTapePool']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.AssignTapePool'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630AssociateFileSystemKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem',
    '/#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630AssociateFileSystem<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630AssociateFileSystemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630AttachVolumeKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.AttachVolume',
    '/#X-Amz-Target=StorageGateway_20130630.AttachVolume',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630AttachVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.AttachVolume']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.AttachVolume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630AttachVolumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.AttachVolume']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.AttachVolume'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630CancelArchivalKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CancelArchival',
    '/#X-Amz-Target=StorageGateway_20130630.CancelArchival',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630CancelArchival<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.CancelArchival']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CancelArchival']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630CancelArchivalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.CancelArchival']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.CancelArchival'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630CancelRetrievalKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CancelRetrieval',
    '/#X-Amz-Target=StorageGateway_20130630.CancelRetrieval',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630CancelRetrieval<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.CancelRetrieval']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CancelRetrieval']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630CancelRetrievalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.CancelRetrieval']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.CancelRetrieval'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630CreateCachediSCSIVolumeKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume',
    '/#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630CreateCachediSCSIVolume<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630CreateCachediSCSIVolumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630CreateNFSFileShareKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare',
    '/#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630CreateNFSFileShare<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630CreateNFSFileShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630CreateSMBFileShareKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare',
    '/#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630CreateSMBFileShare<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630CreateSMBFileShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630CreateSnapshotKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateSnapshot',
    '/#X-Amz-Target=StorageGateway_20130630.CreateSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630CreateSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630CreateSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.CreateSnapshot'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630CreateSnapshotFromVolumeRecoveryPointKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint',
    '/#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630CreateSnapshotFromVolumeRecoveryPoint<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStorageGateway20130630CreateSnapshotFromVolumeRecoveryPointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630CreateStorediSCSIVolumeKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume',
    '/#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630CreateStorediSCSIVolume<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630CreateStorediSCSIVolumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630CreateTapePoolKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateTapePool',
    '/#X-Amz-Target=StorageGateway_20130630.CreateTapePool',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630CreateTapePool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapePool']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapePool']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630CreateTapePoolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapePool']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.CreateTapePool'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630CreateTapeWithBarcodeKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode',
    '/#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630CreateTapeWithBarcode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630CreateTapeWithBarcodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630CreateTapesKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateTapes',
    '/#X-Amz-Target=StorageGateway_20130630.CreateTapes',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630CreateTapes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630CreateTapesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.CreateTapes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DeleteAutomaticTapeCreationPolicyKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DeleteAutomaticTapeCreationPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStorageGateway20130630DeleteAutomaticTapeCreationPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DeleteBandwidthRateLimitKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DeleteBandwidthRateLimit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DeleteBandwidthRateLimitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DeleteChapCredentialsKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DeleteChapCredentials<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DeleteChapCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DeleteFileShareKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteFileShare',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteFileShare',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DeleteFileShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteFileShare']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteFileShare']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DeleteFileShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteFileShare']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DeleteFileShare'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DeleteGatewayKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteGateway',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteGateway',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DeleteGateway<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteGateway']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteGateway']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DeleteGatewayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteGateway']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DeleteGateway'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DeleteSnapshotScheduleKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DeleteSnapshotSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DeleteSnapshotScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DeleteTapeKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteTape',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteTape',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DeleteTape<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTape']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTape']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DeleteTapeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTape']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DeleteTape'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DeleteTapeArchiveKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DeleteTapeArchive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DeleteTapeArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DeleteTapePoolKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteTapePool',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteTapePool',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DeleteTapePool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTapePool']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTapePool']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DeleteTapePoolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTapePool']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DeleteTapePool'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DeleteVolumeKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteVolume',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteVolume',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DeleteVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteVolume']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteVolume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DeleteVolumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteVolume']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DeleteVolume'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeAvailabilityMonitorTestKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeAvailabilityMonitorTest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStorageGateway20130630DescribeAvailabilityMonitorTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeBandwidthRateLimit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitScheduleKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeCacheKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeCache',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeCache',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeCache<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeCache']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeCache']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DescribeCacheKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeCache']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeCache'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeCachediSCSIVolumesKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeCachediSCSIVolumes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DescribeCachediSCSIVolumesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeChapCredentialsKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeChapCredentials<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DescribeChapCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeFileSystemAssociationsKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeFileSystemAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStorageGateway20130630DescribeFileSystemAssociationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeGatewayInformationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeGatewayInformation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DescribeGatewayInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeMaintenanceStartTimeKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeMaintenanceStartTime<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStorageGateway20130630DescribeMaintenanceStartTimeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeNFSFileSharesKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeNFSFileShares<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DescribeNFSFileSharesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeSMBFileSharesKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeSMBFileShares<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DescribeSMBFileSharesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeSMBSettingsKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeSMBSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DescribeSMBSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeSnapshotScheduleKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeSnapshotSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DescribeSnapshotScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeStorediSCSIVolumesKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeStorediSCSIVolumes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DescribeStorediSCSIVolumesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeTapeArchivesKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeTapeArchives<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DescribeTapeArchivesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeTapeRecoveryPointsKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeTapeRecoveryPoints<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DescribeTapeRecoveryPointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeTapesKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeTapes',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeTapes',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeTapes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DescribeTapesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeTapes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeUploadBufferKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeUploadBuffer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DescribeUploadBufferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeVTLDevicesKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeVTLDevices<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DescribeVTLDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DescribeWorkingStorageKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DescribeWorkingStorage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DescribeWorkingStorageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DetachVolumeKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DetachVolume',
    '/#X-Amz-Target=StorageGateway_20130630.DetachVolume',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DetachVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DetachVolume']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.DetachVolume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DetachVolumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DetachVolume']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DetachVolume'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DisableGatewayKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DisableGateway',
    '/#X-Amz-Target=StorageGateway_20130630.DisableGateway',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DisableGateway<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DisableGateway']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DisableGateway']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DisableGatewayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DisableGateway']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DisableGateway'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630DisassociateFileSystemKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem',
    '/#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630DisassociateFileSystem<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630DisassociateFileSystemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630JoinDomainKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.JoinDomain',
    '/#X-Amz-Target=StorageGateway_20130630.JoinDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630JoinDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.JoinDomain']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.JoinDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630JoinDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.JoinDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.JoinDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630ListAutomaticTapeCreationPoliciesKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies',
    '/#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630ListAutomaticTapeCreationPolicies<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStorageGateway20130630ListAutomaticTapeCreationPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630ListFileSharesKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListFileShares',
    '/#X-Amz-Target=StorageGateway_20130630.ListFileShares',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630ListFileShares<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListFileShares']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListFileShares']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630ListFileSharesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListFileShares']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.ListFileShares'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630ListFileSystemAssociationsKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations',
    '/#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630ListFileSystemAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630ListFileSystemAssociationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630ListGatewaysKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListGateways',
    '/#X-Amz-Target=StorageGateway_20130630.ListGateways',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630ListGateways<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListGateways']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.ListGateways']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630ListGatewaysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListGateways']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.ListGateways'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630ListLocalDisksKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListLocalDisks',
    '/#X-Amz-Target=StorageGateway_20130630.ListLocalDisks',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630ListLocalDisks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListLocalDisks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListLocalDisks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630ListLocalDisksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListLocalDisks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.ListLocalDisks'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListTagsForResource',
    '/#X-Amz-Target=StorageGateway_20130630.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630ListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630ListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630ListTapePoolsKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListTapePools',
    '/#X-Amz-Target=StorageGateway_20130630.ListTapePools',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630ListTapePools<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTapePools']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTapePools']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630ListTapePoolsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTapePools']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.ListTapePools'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630ListTapesKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListTapes',
    '/#X-Amz-Target=StorageGateway_20130630.ListTapes',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630ListTapes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTapes']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTapes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630ListTapesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTapes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.ListTapes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630ListVolumeInitiatorsKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators',
    '/#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630ListVolumeInitiators<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630ListVolumeInitiatorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630ListVolumeRecoveryPointsKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints',
    '/#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630ListVolumeRecoveryPoints<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630ListVolumeRecoveryPointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630ListVolumesKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListVolumes',
    '/#X-Amz-Target=StorageGateway_20130630.ListVolumes',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630ListVolumes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630ListVolumesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.ListVolumes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630NotifyWhenUploadedKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded',
    '/#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630NotifyWhenUploaded<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630NotifyWhenUploadedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630RefreshCacheKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.RefreshCache',
    '/#X-Amz-Target=StorageGateway_20130630.RefreshCache',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630RefreshCache<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.RefreshCache']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.RefreshCache']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630RefreshCacheKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.RefreshCache']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.RefreshCache'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630RemoveTagsFromResourceKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource',
    '/#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630RemoveTagsFromResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630RemoveTagsFromResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630ResetCacheKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ResetCache',
    '/#X-Amz-Target=StorageGateway_20130630.ResetCache',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630ResetCache<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.ResetCache']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.ResetCache']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630ResetCacheKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.ResetCache']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.ResetCache'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630RetrieveTapeArchiveKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive',
    '/#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630RetrieveTapeArchive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630RetrieveTapeArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630RetrieveTapeRecoveryPointKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint',
    '/#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630RetrieveTapeRecoveryPoint<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630RetrieveTapeRecoveryPointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630SetLocalConsolePasswordKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword',
    '/#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630SetLocalConsolePassword<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630SetLocalConsolePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630SetSMBGuestPasswordKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword',
    '/#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630SetSMBGuestPassword<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630SetSMBGuestPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630ShutdownGatewayKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ShutdownGateway',
    '/#X-Amz-Target=StorageGateway_20130630.ShutdownGateway',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630ShutdownGateway<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.ShutdownGateway']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ShutdownGateway']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630ShutdownGatewayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.ShutdownGateway']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.ShutdownGateway'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630StartAvailabilityMonitorTestKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest',
    '/#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630StartAvailabilityMonitorTest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStorageGateway20130630StartAvailabilityMonitorTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630StartGatewayKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.StartGateway',
    '/#X-Amz-Target=StorageGateway_20130630.StartGateway',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630StartGateway<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.StartGateway']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.StartGateway']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630StartGatewayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.StartGateway']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.StartGateway'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630UpdateAutomaticTapeCreationPolicyKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630UpdateAutomaticTapeCreationPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStorageGateway20130630UpdateAutomaticTapeCreationPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630UpdateBandwidthRateLimit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitScheduleKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630UpdateChapCredentialsKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630UpdateChapCredentials<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630UpdateChapCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630UpdateFileSystemAssociationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630UpdateFileSystemAssociation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStorageGateway20130630UpdateFileSystemAssociationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630UpdateGatewayInformationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630UpdateGatewayInformation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630UpdateGatewayInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630UpdateGatewaySoftwareNowKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630UpdateGatewaySoftwareNow<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630UpdateGatewaySoftwareNowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630UpdateMaintenanceStartTimeKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630UpdateMaintenanceStartTime<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630UpdateMaintenanceStartTimeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630UpdateNFSFileShareKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630UpdateNFSFileShare<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630UpdateNFSFileShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630UpdateSMBFileShareKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630UpdateSMBFileShare<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630UpdateSMBFileShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630UpdateSMBFileShareVisibilityKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630UpdateSMBFileShareVisibility<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetStorageGateway20130630UpdateSMBFileShareVisibilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630UpdateSMBLocalGroupsKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630UpdateSMBLocalGroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630UpdateSMBLocalGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630UpdateSMBSecurityStrategyKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630UpdateSMBSecurityStrategy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630UpdateSMBSecurityStrategyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630UpdateSnapshotScheduleKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630UpdateSnapshotSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630UpdateSnapshotScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetStorageGateway20130630UpdateVTLDeviceTypeKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType',
    'POST',
  ] as const
}

export function usePostXAmzTargetStorageGateway20130630UpdateVTLDeviceType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetStorageGateway20130630UpdateVTLDeviceTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
