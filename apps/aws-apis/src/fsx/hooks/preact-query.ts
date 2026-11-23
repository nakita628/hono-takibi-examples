import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSSimbaAPIServiceV20180301AssociateFileSystemAliasesKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301CancelDataRepositoryTaskKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301CopyBackupKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301CreateBackupKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryAssociationKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryTaskKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301CreateFileCacheKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemFromBackupKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301CreateSnapshotKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301CreateStorageVirtualMachineKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeFromBackupKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301DeleteBackupKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301DeleteDataRepositoryAssociationKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileCacheKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileSystemKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301DeleteSnapshotKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301DeleteStorageVirtualMachineKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301DeleteVolumeKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301DescribeBackupsKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryAssociationsKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryTasksKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileCachesKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemAliasesKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemsKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301DescribeSnapshotsKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301DescribeStorageVirtualMachinesKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301DescribeVolumesKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301DisassociateFileSystemAliasesKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301ListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301ReleaseFileSystemNfsV3LocksKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301RestoreVolumeFromSnapshotKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301TagResourceKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301UntagResourceKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301UpdateDataRepositoryAssociationKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileCacheKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileSystemKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301UpdateSnapshotKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301UpdateStorageVirtualMachineKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine'] as const
}

export function getXAmzTargetAWSSimbaAPIServiceV20180301UpdateVolumeKey() {
  return ['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume'] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301AssociateFileSystemAliasesMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301AssociateFileSystemAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSSimbaAPIServiceV20180301AssociateFileSystemAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301AssociateFileSystemAliases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301AssociateFileSystemAliasesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CancelDataRepositoryTaskMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CancelDataRepositoryTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301CancelDataRepositoryTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CancelDataRepositoryTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301CancelDataRepositoryTaskMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CopyBackupMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CopyBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301CopyBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CopyBackup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSSimbaAPIServiceV20180301CopyBackupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateBackupMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateBackup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateBackupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryAssociationMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryAssociation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryAssociationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryTaskMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryTaskMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileCacheMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileCache<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileCacheMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemFromBackupMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemFromBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemFromBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemFromBackup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemFromBackupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateSnapshotMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateSnapshotMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateStorageVirtualMachineMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateStorageVirtualMachineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateStorageVirtualMachineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateStorageVirtualMachine<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateStorageVirtualMachineMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateVolume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeFromBackupMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeFromBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeFromBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeFromBackup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeFromBackupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteBackupMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DeleteBackup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteBackupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteDataRepositoryAssociationMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteDataRepositoryAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteDataRepositoryAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DeleteDataRepositoryAssociation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteDataRepositoryAssociationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileCacheMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileCache<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileCacheMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileSystemMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileSystemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileSystemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileSystem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileSystemMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteSnapshotMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DeleteSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteSnapshotMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteStorageVirtualMachineMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteStorageVirtualMachineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteStorageVirtualMachineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DeleteStorageVirtualMachine<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteStorageVirtualMachineMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteVolumeMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DeleteVolume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteVolumeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeBackupsMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeBackups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeBackupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryAssociationsMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryAssociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryAssociationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryTasksMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryTasks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryTasksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileCachesMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileCachesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileCachesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileCaches<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileCachesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemAliasesMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemAliases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemAliasesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemsMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeSnapshotsMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeSnapshots<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeSnapshotsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeStorageVirtualMachinesMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeStorageVirtualMachinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeStorageVirtualMachinesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeStorageVirtualMachines<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeStorageVirtualMachinesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeVolumesMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeVolumesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeVolumesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeVolumes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeVolumesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DisassociateFileSystemAliasesMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DisassociateFileSystemAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSSimbaAPIServiceV20180301DisassociateFileSystemAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DisassociateFileSystemAliases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301DisassociateFileSystemAliasesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301ListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301ListTagsForResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301ReleaseFileSystemNfsV3LocksMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301ReleaseFileSystemNfsV3LocksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSSimbaAPIServiceV20180301ReleaseFileSystemNfsV3LocksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301ReleaseFileSystemNfsV3Locks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301ReleaseFileSystemNfsV3LocksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301RestoreVolumeFromSnapshotMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301RestoreVolumeFromSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301RestoreVolumeFromSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301RestoreVolumeFromSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301RestoreVolumeFromSnapshotMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301TagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301TagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSSimbaAPIServiceV20180301TagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301UntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSSimbaAPIServiceV20180301UntagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateDataRepositoryAssociationMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateDataRepositoryAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateDataRepositoryAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301UpdateDataRepositoryAssociation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateDataRepositoryAssociationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileCacheMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileCache<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileCacheMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileSystemMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileSystemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileSystemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileSystem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileSystemMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateSnapshotMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301UpdateSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateSnapshotMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateStorageVirtualMachineMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateStorageVirtualMachineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateStorageVirtualMachineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301UpdateStorageVirtualMachine<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateStorageVirtualMachineMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateVolumeMutationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateVolumeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301UpdateVolume<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateVolumeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
