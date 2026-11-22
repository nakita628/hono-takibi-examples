import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSSimbaAPIServiceV20180301AssociateFileSystemAliasesHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301CancelDataRepositoryTaskHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301CopyBackupHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301CreateBackupHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryAssociationHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryTaskHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301CreateFileCacheHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemFromBackupHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301CreateSnapshotHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301CreateStorageVirtualMachineHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeFromBackupHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301DeleteBackupHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301DeleteDataRepositoryAssociationHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301DeleteFileCacheHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301DeleteFileSystemHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301DeleteSnapshotHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301DeleteStorageVirtualMachineHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301DeleteVolumeHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301DescribeBackupsHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryAssociationsHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryTasksHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301DescribeFileCachesHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemAliasesHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemsHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301DescribeSnapshotsHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301DescribeStorageVirtualMachinesHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301DescribeVolumesHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301DisassociateFileSystemAliasesHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301ListTagsForResourceHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301ReleaseFileSystemNfsV3LocksHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301RestoreVolumeFromSnapshotHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301TagResourceHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301UntagResourceHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301UpdateDataRepositoryAssociationHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301UpdateFileCacheHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301UpdateFileSystemHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301UpdateSnapshotHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301UpdateStorageVirtualMachineHandler,
  XAmzTargetAWSSimbaAPIServiceV20180301UpdateVolumeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301AssociateFileSystemAliasesHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301CancelDataRepositoryTaskHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301CopyBackupHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301CreateBackupHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryAssociationHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryTaskHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301CreateFileCacheHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301CreateFileSystemFromBackupHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301CreateSnapshotHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301CreateStorageVirtualMachineHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeFromBackupHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301DeleteBackupHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301DeleteDataRepositoryAssociationHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301DeleteFileCacheHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301DeleteFileSystemHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301DeleteSnapshotHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301DeleteStorageVirtualMachineHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301DeleteVolumeHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301DescribeBackupsHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryAssociationsHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryTasksHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301DescribeFileCachesHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemAliasesHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemsHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301DescribeSnapshotsHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301DescribeStorageVirtualMachinesHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301DescribeVolumesHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301DisassociateFileSystemAliasesHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301ListTagsForResourceHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301ReleaseFileSystemNfsV3LocksHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301RestoreVolumeFromSnapshotHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301TagResourceHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301UntagResourceHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301UpdateDataRepositoryAssociationHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301UpdateFileCacheHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301UpdateFileSystemHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301UpdateSnapshotHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301UpdateStorageVirtualMachineHandler)
  .route('/', XAmzTargetAWSSimbaAPIServiceV20180301UpdateVolumeHandler)

export default app
