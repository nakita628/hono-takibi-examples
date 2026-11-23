import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsSimbaApiServiceV20180301AssociateFileSystemAliasesHandler,
  xAmzTargetAwsSimbaApiServiceV20180301CancelDataRepositoryTaskHandler,
  xAmzTargetAwsSimbaApiServiceV20180301CopyBackupHandler,
  xAmzTargetAwsSimbaApiServiceV20180301CreateBackupHandler,
  xAmzTargetAwsSimbaApiServiceV20180301CreateDataRepositoryAssociationHandler,
  xAmzTargetAwsSimbaApiServiceV20180301CreateDataRepositoryTaskHandler,
  xAmzTargetAwsSimbaApiServiceV20180301CreateFileCacheHandler,
  xAmzTargetAwsSimbaApiServiceV20180301CreateFileSystemFromBackupHandler,
  xAmzTargetAwsSimbaApiServiceV20180301CreateFileSystemHandler,
  xAmzTargetAwsSimbaApiServiceV20180301CreateSnapshotHandler,
  xAmzTargetAwsSimbaApiServiceV20180301CreateStorageVirtualMachineHandler,
  xAmzTargetAwsSimbaApiServiceV20180301CreateVolumeFromBackupHandler,
  xAmzTargetAwsSimbaApiServiceV20180301CreateVolumeHandler,
  xAmzTargetAwsSimbaApiServiceV20180301DeleteBackupHandler,
  xAmzTargetAwsSimbaApiServiceV20180301DeleteDataRepositoryAssociationHandler,
  xAmzTargetAwsSimbaApiServiceV20180301DeleteFileCacheHandler,
  xAmzTargetAwsSimbaApiServiceV20180301DeleteFileSystemHandler,
  xAmzTargetAwsSimbaApiServiceV20180301DeleteSnapshotHandler,
  xAmzTargetAwsSimbaApiServiceV20180301DeleteStorageVirtualMachineHandler,
  xAmzTargetAwsSimbaApiServiceV20180301DeleteVolumeHandler,
  xAmzTargetAwsSimbaApiServiceV20180301DescribeBackupsHandler,
  xAmzTargetAwsSimbaApiServiceV20180301DescribeDataRepositoryAssociationsHandler,
  xAmzTargetAwsSimbaApiServiceV20180301DescribeDataRepositoryTasksHandler,
  xAmzTargetAwsSimbaApiServiceV20180301DescribeFileCachesHandler,
  xAmzTargetAwsSimbaApiServiceV20180301DescribeFileSystemAliasesHandler,
  xAmzTargetAwsSimbaApiServiceV20180301DescribeFileSystemsHandler,
  xAmzTargetAwsSimbaApiServiceV20180301DescribeSnapshotsHandler,
  xAmzTargetAwsSimbaApiServiceV20180301DescribeStorageVirtualMachinesHandler,
  xAmzTargetAwsSimbaApiServiceV20180301DescribeVolumesHandler,
  xAmzTargetAwsSimbaApiServiceV20180301DisassociateFileSystemAliasesHandler,
  xAmzTargetAwsSimbaApiServiceV20180301ListTagsForResourceHandler,
  xAmzTargetAwsSimbaApiServiceV20180301ReleaseFileSystemNfsV3LocksHandler,
  xAmzTargetAwsSimbaApiServiceV20180301RestoreVolumeFromSnapshotHandler,
  xAmzTargetAwsSimbaApiServiceV20180301TagResourceHandler,
  xAmzTargetAwsSimbaApiServiceV20180301UntagResourceHandler,
  xAmzTargetAwsSimbaApiServiceV20180301UpdateDataRepositoryAssociationHandler,
  xAmzTargetAwsSimbaApiServiceV20180301UpdateFileCacheHandler,
  xAmzTargetAwsSimbaApiServiceV20180301UpdateFileSystemHandler,
  xAmzTargetAwsSimbaApiServiceV20180301UpdateSnapshotHandler,
  xAmzTargetAwsSimbaApiServiceV20180301UpdateStorageVirtualMachineHandler,
  xAmzTargetAwsSimbaApiServiceV20180301UpdateVolumeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301AssociateFileSystemAliasesHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301CancelDataRepositoryTaskHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301CopyBackupHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301CreateBackupHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301CreateDataRepositoryAssociationHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301CreateDataRepositoryTaskHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301CreateFileCacheHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301CreateFileSystemHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301CreateFileSystemFromBackupHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301CreateSnapshotHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301CreateStorageVirtualMachineHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301CreateVolumeHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301CreateVolumeFromBackupHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301DeleteBackupHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301DeleteDataRepositoryAssociationHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301DeleteFileCacheHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301DeleteFileSystemHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301DeleteSnapshotHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301DeleteStorageVirtualMachineHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301DeleteVolumeHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301DescribeBackupsHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301DescribeDataRepositoryAssociationsHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301DescribeDataRepositoryTasksHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301DescribeFileCachesHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301DescribeFileSystemAliasesHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301DescribeFileSystemsHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301DescribeSnapshotsHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301DescribeStorageVirtualMachinesHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301DescribeVolumesHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301DisassociateFileSystemAliasesHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301ListTagsForResourceHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301ReleaseFileSystemNfsV3LocksHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301RestoreVolumeFromSnapshotHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301TagResourceHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301UntagResourceHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301UpdateDataRepositoryAssociationHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301UpdateFileCacheHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301UpdateFileSystemHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301UpdateSnapshotHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301UpdateStorageVirtualMachineHandler)
  .route('/', xAmzTargetAwsSimbaApiServiceV20180301UpdateVolumeHandler)

export default app
