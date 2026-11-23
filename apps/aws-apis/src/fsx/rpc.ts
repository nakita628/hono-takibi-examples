import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSSimbaAPIServiceV20180301AssociateFileSystemAliases(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.AssociateFileSystemAliases'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301CancelDataRepositoryTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CancelDataRepositoryTask'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301CopyBackup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CopyBackup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301CreateBackup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateBackup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryAssociation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateDataRepositoryTask'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301CreateFileCache(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileCache'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystem(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystem'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemFromBackup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301CreateSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateSnapshot'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301CreateStorageVirtualMachine(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301CreateVolume(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolume'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeFromBackup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.CreateVolumeFromBackup'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301DeleteBackup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteBackup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301DeleteDataRepositoryAssociation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileCache(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileCache'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301DeleteFileSystem(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteFileSystem'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301DeleteSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteSnapshot'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301DeleteStorageVirtualMachine(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301DeleteVolume(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DeleteVolume'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301DescribeBackups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeBackups'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryAssociations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryTasks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileCaches(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileCaches'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemAliases(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystemAliases'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystems(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeFileSystems'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301DescribeSnapshots(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeSnapshots'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301DescribeStorageVirtualMachines(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301DescribeVolumes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DescribeVolumes'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301DisassociateFileSystemAliases(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301ReleaseFileSystemNfsV3Locks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301RestoreVolumeFromSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301TagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301UpdateDataRepositoryAssociation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileCache(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileCache'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301UpdateFileSystem(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateFileSystem'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301UpdateSnapshot(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateSnapshot'].$post(args, options),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301UpdateStorageVirtualMachine(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSSimbaAPIServiceV20180301UpdateVolume(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSSimbaAPIService_v20180301.UpdateVolume'].$post(args, options),
  )
}
