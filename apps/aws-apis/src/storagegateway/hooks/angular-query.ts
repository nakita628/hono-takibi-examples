import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getPostXAmzTargetStorageGateway20130630ActivateGatewayMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ActivateGateway',
    '/#X-Amz-Target=StorageGateway_20130630.ActivateGateway',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630ActivateGatewayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ActivateGateway']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630ActivateGatewayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.ActivateGateway']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.ActivateGateway'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630ActivateGateway<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.ActivateGateway']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630ActivateGatewayMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630AddCacheMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.AddCache',
    '/#X-Amz-Target=StorageGateway_20130630.AddCache',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630AddCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.AddCache']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630AddCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddCache']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.AddCache'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630AddCache<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddCache']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddCache']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630AddCacheMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630AddTagsToResourceMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.AddTagsToResource',
    '/#X-Amz-Target=StorageGateway_20130630.AddTagsToResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630AddTagsToResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddTagsToResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630AddTagsToResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddTagsToResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.AddTagsToResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630AddTagsToResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddTagsToResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630AddTagsToResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630AddUploadBufferMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer',
    '/#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630AddUploadBufferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630AddUploadBufferMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630AddUploadBuffer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddUploadBuffer']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630AddUploadBufferMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630AddWorkingStorageMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage',
    '/#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630AddWorkingStorageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630AddWorkingStorageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630AddWorkingStorage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.AddWorkingStorage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630AddWorkingStorageMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630AssignTapePoolMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.AssignTapePool',
    '/#X-Amz-Target=StorageGateway_20130630.AssignTapePool',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630AssignTapePoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.AssignTapePool']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630AssignTapePoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.AssignTapePool']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.AssignTapePool'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630AssignTapePool<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.AssignTapePool']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630AssignTapePoolMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630AssociateFileSystemMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem',
    '/#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630AssociateFileSystemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630AssociateFileSystemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630AssociateFileSystem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.AssociateFileSystem']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630AssociateFileSystemMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630AttachVolumeMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.AttachVolume',
    '/#X-Amz-Target=StorageGateway_20130630.AttachVolume',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630AttachVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.AttachVolume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630AttachVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.AttachVolume']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.AttachVolume'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630AttachVolume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.AttachVolume']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630AttachVolumeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630CancelArchivalMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CancelArchival',
    '/#X-Amz-Target=StorageGateway_20130630.CancelArchival',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630CancelArchivalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CancelArchival']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630CancelArchivalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.CancelArchival']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.CancelArchival'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630CancelArchival<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.CancelArchival']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630CancelArchivalMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630CancelRetrievalMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CancelRetrieval',
    '/#X-Amz-Target=StorageGateway_20130630.CancelRetrieval',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630CancelRetrievalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CancelRetrieval']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630CancelRetrievalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.CancelRetrieval']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.CancelRetrieval'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630CancelRetrieval<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.CancelRetrieval']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630CancelRetrievalMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630CreateCachediSCSIVolumeMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume',
    '/#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630CreateCachediSCSIVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630CreateCachediSCSIVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630CreateCachediSCSIVolume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateCachediSCSIVolume']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630CreateCachediSCSIVolumeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630CreateNFSFileShareMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare',
    '/#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630CreateNFSFileShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630CreateNFSFileShareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630CreateNFSFileShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateNFSFileShare']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630CreateNFSFileShareMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630CreateSMBFileShareMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare',
    '/#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630CreateSMBFileShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630CreateSMBFileShareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630CreateSMBFileShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSMBFileShare']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630CreateSMBFileShareMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630CreateSnapshotMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateSnapshot',
    '/#X-Amz-Target=StorageGateway_20130630.CreateSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630CreateSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630CreateSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.CreateSnapshot'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630CreateSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSnapshot']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630CreateSnapshotMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630CreateSnapshotFromVolumeRecoveryPointMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint',
    '/#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630CreateSnapshotFromVolumeRecoveryPointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStorageGateway20130630CreateSnapshotFromVolumeRecoveryPointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630CreateSnapshotFromVolumeRecoveryPoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630CreateSnapshotFromVolumeRecoveryPointMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630CreateStorediSCSIVolumeMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume',
    '/#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630CreateStorediSCSIVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630CreateStorediSCSIVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630CreateStorediSCSIVolume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateStorediSCSIVolume']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630CreateStorediSCSIVolumeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630CreateTapePoolMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateTapePool',
    '/#X-Amz-Target=StorageGateway_20130630.CreateTapePool',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630CreateTapePoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapePool']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630CreateTapePoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapePool']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.CreateTapePool'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630CreateTapePool<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapePool']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630CreateTapePoolMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630CreateTapeWithBarcodeMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode',
    '/#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630CreateTapeWithBarcodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630CreateTapeWithBarcodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630CreateTapeWithBarcode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapeWithBarcode']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630CreateTapeWithBarcodeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630CreateTapesMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.CreateTapes',
    '/#X-Amz-Target=StorageGateway_20130630.CreateTapes',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630CreateTapesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630CreateTapesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.CreateTapes'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630CreateTapes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.CreateTapes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630CreateTapesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DeleteAutomaticTapeCreationPolicyMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DeleteAutomaticTapeCreationPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStorageGateway20130630DeleteAutomaticTapeCreationPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DeleteAutomaticTapeCreationPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DeleteAutomaticTapeCreationPolicyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DeleteBandwidthRateLimitMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DeleteBandwidthRateLimitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DeleteBandwidthRateLimitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DeleteBandwidthRateLimit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteBandwidthRateLimit']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DeleteBandwidthRateLimitMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DeleteChapCredentialsMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DeleteChapCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DeleteChapCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DeleteChapCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteChapCredentials']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DeleteChapCredentialsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DeleteFileShareMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteFileShare',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteFileShare',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DeleteFileShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteFileShare']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DeleteFileShareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteFileShare']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DeleteFileShare'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DeleteFileShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteFileShare']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630DeleteFileShareMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DeleteGatewayMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteGateway',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteGateway',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DeleteGatewayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteGateway']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DeleteGatewayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteGateway']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DeleteGateway'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DeleteGateway<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteGateway']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630DeleteGatewayMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DeleteSnapshotScheduleMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DeleteSnapshotScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DeleteSnapshotScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DeleteSnapshotSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteSnapshotSchedule']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DeleteSnapshotScheduleMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DeleteTapeMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteTape',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteTape',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DeleteTapeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTape']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DeleteTapeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTape']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DeleteTape'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DeleteTape<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTape']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTape']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630DeleteTapeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DeleteTapeArchiveMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DeleteTapeArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DeleteTapeArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DeleteTapeArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTapeArchive']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DeleteTapeArchiveMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DeleteTapePoolMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteTapePool',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteTapePool',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DeleteTapePoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTapePool']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DeleteTapePoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTapePool']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DeleteTapePool'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DeleteTapePool<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteTapePool']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630DeleteTapePoolMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DeleteVolumeMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DeleteVolume',
    '/#X-Amz-Target=StorageGateway_20130630.DeleteVolume',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DeleteVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteVolume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DeleteVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteVolume']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DeleteVolume'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DeleteVolume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DeleteVolume']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630DeleteVolumeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeAvailabilityMonitorTestMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeAvailabilityMonitorTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStorageGateway20130630DescribeAvailabilityMonitorTestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeAvailabilityMonitorTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeAvailabilityMonitorTest']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeAvailabilityMonitorTestMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeBandwidthRateLimit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimit']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitScheduleMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeBandwidthRateLimitSchedule']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitScheduleMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeCacheMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeCache',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeCache',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeCache']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeCache']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeCache'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeCache<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeCache']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630DescribeCacheMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeCachediSCSIVolumesMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeCachediSCSIVolumesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeCachediSCSIVolumesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeCachediSCSIVolumes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeCachediSCSIVolumes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeCachediSCSIVolumesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeChapCredentialsMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeChapCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeChapCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeChapCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeChapCredentials']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeChapCredentialsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeFileSystemAssociationsMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeFileSystemAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeFileSystemAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeFileSystemAssociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeFileSystemAssociations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeFileSystemAssociationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeGatewayInformationMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeGatewayInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeGatewayInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeGatewayInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeGatewayInformation']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeGatewayInformationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeMaintenanceStartTimeMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeMaintenanceStartTimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeMaintenanceStartTimeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeMaintenanceStartTime<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeMaintenanceStartTime']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeMaintenanceStartTimeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeNFSFileSharesMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeNFSFileSharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeNFSFileSharesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeNFSFileShares<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeNFSFileShares']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeNFSFileSharesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeSMBFileSharesMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeSMBFileSharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeSMBFileSharesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeSMBFileShares<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSMBFileShares']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeSMBFileSharesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeSMBSettingsMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeSMBSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeSMBSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeSMBSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSMBSettings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeSMBSettingsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeSnapshotScheduleMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeSnapshotScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeSnapshotScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeSnapshotSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeSnapshotSchedule']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeSnapshotScheduleMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeStorediSCSIVolumesMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeStorediSCSIVolumesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeStorediSCSIVolumesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeStorediSCSIVolumes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeStorediSCSIVolumes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeStorediSCSIVolumesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeTapeArchivesMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeTapeArchivesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeTapeArchivesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeTapeArchives<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapeArchives']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeTapeArchivesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeTapeRecoveryPointsMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeTapeRecoveryPointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeTapeRecoveryPointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeTapeRecoveryPoints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapeRecoveryPoints']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeTapeRecoveryPointsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeTapesMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeTapes',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeTapes',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeTapesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeTapesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeTapes'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeTapes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeTapes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630DescribeTapesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeUploadBufferMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeUploadBufferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeUploadBufferMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeUploadBuffer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeUploadBuffer']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeUploadBufferMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeVTLDevicesMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeVTLDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeVTLDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeVTLDevices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeVTLDevices']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeVTLDevicesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DescribeWorkingStorageMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage',
    '/#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DescribeWorkingStorageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DescribeWorkingStorageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DescribeWorkingStorage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DescribeWorkingStorage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DescribeWorkingStorageMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DetachVolumeMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DetachVolume',
    '/#X-Amz-Target=StorageGateway_20130630.DetachVolume',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DetachVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DetachVolume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DetachVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DetachVolume']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DetachVolume'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DetachVolume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DetachVolume']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630DetachVolumeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DisableGatewayMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DisableGateway',
    '/#X-Amz-Target=StorageGateway_20130630.DisableGateway',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DisableGatewayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DisableGateway']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DisableGatewayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DisableGateway']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DisableGateway'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DisableGateway<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DisableGateway']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630DisableGatewayMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630DisassociateFileSystemMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem',
    '/#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630DisassociateFileSystemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630DisassociateFileSystemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630DisassociateFileSystem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.DisassociateFileSystem']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630DisassociateFileSystemMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630JoinDomainMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.JoinDomain',
    '/#X-Amz-Target=StorageGateway_20130630.JoinDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630JoinDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.JoinDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630JoinDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.JoinDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.JoinDomain'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630JoinDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=StorageGateway_20130630.JoinDomain']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.JoinDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630JoinDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630ListAutomaticTapeCreationPoliciesMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies',
    '/#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630ListAutomaticTapeCreationPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStorageGateway20130630ListAutomaticTapeCreationPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630ListAutomaticTapeCreationPolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListAutomaticTapeCreationPolicies']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630ListAutomaticTapeCreationPoliciesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630ListFileSharesMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListFileShares',
    '/#X-Amz-Target=StorageGateway_20130630.ListFileShares',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630ListFileSharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListFileShares']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630ListFileSharesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListFileShares']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.ListFileShares'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630ListFileShares<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListFileShares']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630ListFileSharesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630ListFileSystemAssociationsMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations',
    '/#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630ListFileSystemAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630ListFileSystemAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630ListFileSystemAssociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListFileSystemAssociations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630ListFileSystemAssociationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630ListGatewaysMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListGateways',
    '/#X-Amz-Target=StorageGateway_20130630.ListGateways',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630ListGatewaysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListGateways']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630ListGatewaysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListGateways']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.ListGateways'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630ListGateways<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListGateways']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630ListGatewaysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630ListLocalDisksMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListLocalDisks',
    '/#X-Amz-Target=StorageGateway_20130630.ListLocalDisks',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630ListLocalDisksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListLocalDisks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630ListLocalDisksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListLocalDisks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.ListLocalDisks'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630ListLocalDisks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListLocalDisks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630ListLocalDisksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListTagsForResource',
    '/#X-Amz-Target=StorageGateway_20130630.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630ListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630ListTagsForResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630ListTapePoolsMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListTapePools',
    '/#X-Amz-Target=StorageGateway_20130630.ListTapePools',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630ListTapePoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTapePools']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630ListTapePoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTapePools']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.ListTapePools'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630ListTapePools<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTapePools']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630ListTapePoolsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630ListTapesMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListTapes',
    '/#X-Amz-Target=StorageGateway_20130630.ListTapes',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630ListTapesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTapes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630ListTapesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTapes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.ListTapes'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630ListTapes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTapes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListTapes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630ListTapesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630ListVolumeInitiatorsMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators',
    '/#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630ListVolumeInitiatorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630ListVolumeInitiatorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630ListVolumeInitiators<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumeInitiators']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630ListVolumeInitiatorsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630ListVolumeRecoveryPointsMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints',
    '/#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630ListVolumeRecoveryPointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630ListVolumeRecoveryPointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630ListVolumeRecoveryPoints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumeRecoveryPoints']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630ListVolumeRecoveryPointsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630ListVolumesMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ListVolumes',
    '/#X-Amz-Target=StorageGateway_20130630.ListVolumes',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630ListVolumesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630ListVolumesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.ListVolumes'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630ListVolumes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.ListVolumes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630ListVolumesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630NotifyWhenUploadedMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded',
    '/#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630NotifyWhenUploadedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630NotifyWhenUploadedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630NotifyWhenUploaded<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.NotifyWhenUploaded']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630NotifyWhenUploadedMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630RefreshCacheMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.RefreshCache',
    '/#X-Amz-Target=StorageGateway_20130630.RefreshCache',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630RefreshCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.RefreshCache']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630RefreshCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.RefreshCache']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.RefreshCache'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630RefreshCache<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.RefreshCache']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630RefreshCacheMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630RemoveTagsFromResourceMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource',
    '/#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630RemoveTagsFromResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630RemoveTagsFromResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630RemoveTagsFromResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.RemoveTagsFromResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630RemoveTagsFromResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630ResetCacheMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ResetCache',
    '/#X-Amz-Target=StorageGateway_20130630.ResetCache',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630ResetCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=StorageGateway_20130630.ResetCache']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630ResetCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.ResetCache']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.ResetCache'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630ResetCache<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=StorageGateway_20130630.ResetCache']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.ResetCache']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630ResetCacheMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630RetrieveTapeArchiveMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive',
    '/#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630RetrieveTapeArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630RetrieveTapeArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630RetrieveTapeArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeArchive']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630RetrieveTapeArchiveMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630RetrieveTapeRecoveryPointMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint',
    '/#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630RetrieveTapeRecoveryPointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630RetrieveTapeRecoveryPointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630RetrieveTapeRecoveryPoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.RetrieveTapeRecoveryPoint']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630RetrieveTapeRecoveryPointMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630SetLocalConsolePasswordMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword',
    '/#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630SetLocalConsolePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630SetLocalConsolePasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630SetLocalConsolePassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.SetLocalConsolePassword']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630SetLocalConsolePasswordMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630SetSMBGuestPasswordMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword',
    '/#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630SetSMBGuestPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630SetSMBGuestPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630SetSMBGuestPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.SetSMBGuestPassword']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630SetSMBGuestPasswordMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630ShutdownGatewayMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.ShutdownGateway',
    '/#X-Amz-Target=StorageGateway_20130630.ShutdownGateway',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630ShutdownGatewayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.ShutdownGateway']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630ShutdownGatewayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.ShutdownGateway']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.ShutdownGateway'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630ShutdownGateway<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.ShutdownGateway']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630ShutdownGatewayMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630StartAvailabilityMonitorTestMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest',
    '/#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630StartAvailabilityMonitorTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630StartAvailabilityMonitorTestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630StartAvailabilityMonitorTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.StartAvailabilityMonitorTest']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630StartAvailabilityMonitorTestMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630StartGatewayMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.StartGateway',
    '/#X-Amz-Target=StorageGateway_20130630.StartGateway',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630StartGatewayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.StartGateway']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630StartGatewayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.StartGateway']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.StartGateway'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630StartGateway<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.StartGateway']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetStorageGateway20130630StartGatewayMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630UpdateAutomaticTapeCreationPolicyMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630UpdateAutomaticTapeCreationPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStorageGateway20130630UpdateAutomaticTapeCreationPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630UpdateAutomaticTapeCreationPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630UpdateAutomaticTapeCreationPolicyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630UpdateBandwidthRateLimit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimit']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitScheduleMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateBandwidthRateLimitSchedule']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitScheduleMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630UpdateChapCredentialsMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630UpdateChapCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630UpdateChapCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630UpdateChapCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateChapCredentials']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630UpdateChapCredentialsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630UpdateFileSystemAssociationMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630UpdateFileSystemAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630UpdateFileSystemAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630UpdateFileSystemAssociation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateFileSystemAssociation']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630UpdateFileSystemAssociationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630UpdateGatewayInformationMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630UpdateGatewayInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630UpdateGatewayInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630UpdateGatewayInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateGatewayInformation']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630UpdateGatewayInformationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630UpdateGatewaySoftwareNowMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630UpdateGatewaySoftwareNowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630UpdateGatewaySoftwareNowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630UpdateGatewaySoftwareNow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateGatewaySoftwareNow']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630UpdateGatewaySoftwareNowMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630UpdateMaintenanceStartTimeMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630UpdateMaintenanceStartTimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630UpdateMaintenanceStartTimeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630UpdateMaintenanceStartTime<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateMaintenanceStartTime']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630UpdateMaintenanceStartTimeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630UpdateNFSFileShareMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630UpdateNFSFileShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630UpdateNFSFileShareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630UpdateNFSFileShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateNFSFileShare']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630UpdateNFSFileShareMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630UpdateSMBFileShareMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630UpdateSMBFileShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630UpdateSMBFileShareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630UpdateSMBFileShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShare']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630UpdateSMBFileShareMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630UpdateSMBFileShareVisibilityMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630UpdateSMBFileShareVisibilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630UpdateSMBFileShareVisibilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630UpdateSMBFileShareVisibility<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBFileShareVisibility']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630UpdateSMBFileShareVisibilityMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630UpdateSMBLocalGroupsMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630UpdateSMBLocalGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630UpdateSMBLocalGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630UpdateSMBLocalGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBLocalGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630UpdateSMBLocalGroupsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630UpdateSMBSecurityStrategyMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630UpdateSMBSecurityStrategyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630UpdateSMBSecurityStrategyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630UpdateSMBSecurityStrategy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSMBSecurityStrategy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630UpdateSMBSecurityStrategyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630UpdateSnapshotScheduleMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630UpdateSnapshotScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630UpdateSnapshotScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630UpdateSnapshotSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateSnapshotSchedule']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630UpdateSnapshotScheduleMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetStorageGateway20130630UpdateVTLDeviceTypeMutationKey() {
  return [
    '#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType',
    '/#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType',
    'POST',
  ] as const
}

export function getPostXAmzTargetStorageGateway20130630UpdateVTLDeviceTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetStorageGateway20130630UpdateVTLDeviceTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetStorageGateway20130630UpdateVTLDeviceType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=StorageGateway_20130630.UpdateVTLDeviceType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetStorageGateway20130630UpdateVTLDeviceTypeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
