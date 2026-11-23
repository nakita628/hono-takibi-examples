import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetBaldrApiServiceCopyBackupToRegionHandler,
  xAmzTargetBaldrApiServiceCreateClusterHandler,
  xAmzTargetBaldrApiServiceCreateHsmHandler,
  xAmzTargetBaldrApiServiceDeleteBackupHandler,
  xAmzTargetBaldrApiServiceDeleteClusterHandler,
  xAmzTargetBaldrApiServiceDeleteHsmHandler,
  xAmzTargetBaldrApiServiceDescribeBackupsHandler,
  xAmzTargetBaldrApiServiceDescribeClustersHandler,
  xAmzTargetBaldrApiServiceInitializeClusterHandler,
  xAmzTargetBaldrApiServiceListTagsHandler,
  xAmzTargetBaldrApiServiceModifyBackupAttributesHandler,
  xAmzTargetBaldrApiServiceModifyClusterHandler,
  xAmzTargetBaldrApiServiceRestoreBackupHandler,
  xAmzTargetBaldrApiServiceTagResourceHandler,
  xAmzTargetBaldrApiServiceUntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetBaldrApiServiceCopyBackupToRegionHandler)
  .route('/', xAmzTargetBaldrApiServiceCreateClusterHandler)
  .route('/', xAmzTargetBaldrApiServiceCreateHsmHandler)
  .route('/', xAmzTargetBaldrApiServiceDeleteBackupHandler)
  .route('/', xAmzTargetBaldrApiServiceDeleteClusterHandler)
  .route('/', xAmzTargetBaldrApiServiceDeleteHsmHandler)
  .route('/', xAmzTargetBaldrApiServiceDescribeBackupsHandler)
  .route('/', xAmzTargetBaldrApiServiceDescribeClustersHandler)
  .route('/', xAmzTargetBaldrApiServiceInitializeClusterHandler)
  .route('/', xAmzTargetBaldrApiServiceListTagsHandler)
  .route('/', xAmzTargetBaldrApiServiceModifyBackupAttributesHandler)
  .route('/', xAmzTargetBaldrApiServiceModifyClusterHandler)
  .route('/', xAmzTargetBaldrApiServiceRestoreBackupHandler)
  .route('/', xAmzTargetBaldrApiServiceTagResourceHandler)
  .route('/', xAmzTargetBaldrApiServiceUntagResourceHandler)

export default app
