import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetBaldrApiServiceCopyBackupToRegionHandler,
  XAmzTargetBaldrApiServiceCreateClusterHandler,
  XAmzTargetBaldrApiServiceCreateHsmHandler,
  XAmzTargetBaldrApiServiceDeleteBackupHandler,
  XAmzTargetBaldrApiServiceDeleteClusterHandler,
  XAmzTargetBaldrApiServiceDeleteHsmHandler,
  XAmzTargetBaldrApiServiceDescribeBackupsHandler,
  XAmzTargetBaldrApiServiceDescribeClustersHandler,
  XAmzTargetBaldrApiServiceInitializeClusterHandler,
  XAmzTargetBaldrApiServiceListTagsHandler,
  XAmzTargetBaldrApiServiceModifyBackupAttributesHandler,
  XAmzTargetBaldrApiServiceModifyClusterHandler,
  XAmzTargetBaldrApiServiceRestoreBackupHandler,
  XAmzTargetBaldrApiServiceTagResourceHandler,
  XAmzTargetBaldrApiServiceUntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetBaldrApiServiceCopyBackupToRegionHandler)
  .route('/', XAmzTargetBaldrApiServiceCreateClusterHandler)
  .route('/', XAmzTargetBaldrApiServiceCreateHsmHandler)
  .route('/', XAmzTargetBaldrApiServiceDeleteBackupHandler)
  .route('/', XAmzTargetBaldrApiServiceDeleteClusterHandler)
  .route('/', XAmzTargetBaldrApiServiceDeleteHsmHandler)
  .route('/', XAmzTargetBaldrApiServiceDescribeBackupsHandler)
  .route('/', XAmzTargetBaldrApiServiceDescribeClustersHandler)
  .route('/', XAmzTargetBaldrApiServiceInitializeClusterHandler)
  .route('/', XAmzTargetBaldrApiServiceListTagsHandler)
  .route('/', XAmzTargetBaldrApiServiceModifyBackupAttributesHandler)
  .route('/', XAmzTargetBaldrApiServiceModifyClusterHandler)
  .route('/', XAmzTargetBaldrApiServiceRestoreBackupHandler)
  .route('/', XAmzTargetBaldrApiServiceTagResourceHandler)
  .route('/', XAmzTargetBaldrApiServiceUntagResourceHandler)

export default app
