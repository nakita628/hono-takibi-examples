import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301AssociateFileSystemAliasesKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301AssociateFileSystemAliases<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301AssociateFileSystemAliasesKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CancelDataRepositoryTaskKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CancelDataRepositoryTask<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301CancelDataRepositoryTaskKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CopyBackupKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CopyBackup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301CopyBackupKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateBackupKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateBackup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateBackupKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryAssociationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryAssociation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryAssociationKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryTaskKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryTask<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryTaskKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileCacheKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileCache<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileCacheKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystem<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemFromBackupKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemFromBackup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemFromBackupKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateSnapshotKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateSnapshotKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateStorageVirtualMachineKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateStorageVirtualMachine<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateStorageVirtualMachineKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateVolume<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeFromBackupKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeFromBackup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeFromBackupKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteBackupKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DeleteBackup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteBackupKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteDataRepositoryAssociationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DeleteDataRepositoryAssociation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteDataRepositoryAssociationKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileCacheKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileCache<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileCacheKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileSystemKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileSystem<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileSystemKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteSnapshotKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DeleteSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteSnapshotKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteStorageVirtualMachineKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DeleteStorageVirtualMachine<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteStorageVirtualMachineKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteVolumeKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DeleteVolume<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301DeleteVolumeKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeBackupsKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeBackups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeBackupsKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryAssociationsKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryAssociationsKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryTasksKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryTasks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryTasksKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileCachesKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileCaches<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileCachesKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemAliasesKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemAliases<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemAliasesKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemsKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystems<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemsKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeSnapshotsKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeSnapshots<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeSnapshotsKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeStorageVirtualMachinesKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeStorageVirtualMachines<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeStorageVirtualMachinesKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeVolumesKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DescribeVolumes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301DescribeVolumesKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301DisassociateFileSystemAliasesKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301DisassociateFileSystemAliases<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301DisassociateFileSystemAliasesKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301ListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301ReleaseFileSystemNfsV3LocksKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301ReleaseFileSystemNfsV3Locks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301ReleaseFileSystemNfsV3LocksKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301RestoreVolumeFromSnapshotKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301RestoreVolumeFromSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301RestoreVolumeFromSnapshotKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301TagResourceKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301TagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301TagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UntagResourceKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301UntagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateDataRepositoryAssociationKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301UpdateDataRepositoryAssociation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateDataRepositoryAssociationKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileCacheKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileCache<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileCacheKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileSystemKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileSystem<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileSystemKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateSnapshotKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301UpdateSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateSnapshotKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateStorageVirtualMachineKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301UpdateStorageVirtualMachine<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateStorageVirtualMachineKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateVolumeKey() {
  return [
    '#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume',
    '/#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSSimbaAPIServiceV20180301UpdateVolume<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSSimbaAPIServiceV20180301UpdateVolumeKey()
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
            (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
