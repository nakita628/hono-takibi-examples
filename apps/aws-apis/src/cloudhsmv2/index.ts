import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetBaldrApiServiceCopyBackupToRegionRoute,
  postXAmzTargetBaldrApiServiceCreateClusterRoute,
  postXAmzTargetBaldrApiServiceCreateHsmRoute,
  postXAmzTargetBaldrApiServiceDeleteBackupRoute,
  postXAmzTargetBaldrApiServiceDeleteClusterRoute,
  postXAmzTargetBaldrApiServiceDeleteHsmRoute,
  postXAmzTargetBaldrApiServiceDescribeBackupsRoute,
  postXAmzTargetBaldrApiServiceDescribeClustersRoute,
  postXAmzTargetBaldrApiServiceInitializeClusterRoute,
  postXAmzTargetBaldrApiServiceListTagsRoute,
  postXAmzTargetBaldrApiServiceModifyBackupAttributesRoute,
  postXAmzTargetBaldrApiServiceModifyClusterRoute,
  postXAmzTargetBaldrApiServiceRestoreBackupRoute,
  postXAmzTargetBaldrApiServiceTagResourceRoute,
  postXAmzTargetBaldrApiServiceUntagResourceRoute,
} from './routes'
import {
  postXAmzTargetBaldrApiServiceCopyBackupToRegionRouteHandler,
  postXAmzTargetBaldrApiServiceCreateClusterRouteHandler,
  postXAmzTargetBaldrApiServiceCreateHsmRouteHandler,
  postXAmzTargetBaldrApiServiceDeleteBackupRouteHandler,
  postXAmzTargetBaldrApiServiceDeleteClusterRouteHandler,
  postXAmzTargetBaldrApiServiceDeleteHsmRouteHandler,
  postXAmzTargetBaldrApiServiceDescribeBackupsRouteHandler,
  postXAmzTargetBaldrApiServiceDescribeClustersRouteHandler,
  postXAmzTargetBaldrApiServiceInitializeClusterRouteHandler,
  postXAmzTargetBaldrApiServiceListTagsRouteHandler,
  postXAmzTargetBaldrApiServiceModifyBackupAttributesRouteHandler,
  postXAmzTargetBaldrApiServiceModifyClusterRouteHandler,
  postXAmzTargetBaldrApiServiceRestoreBackupRouteHandler,
  postXAmzTargetBaldrApiServiceTagResourceRouteHandler,
  postXAmzTargetBaldrApiServiceUntagResourceRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetBaldrApiServiceCopyBackupToRegionRoute,
    postXAmzTargetBaldrApiServiceCopyBackupToRegionRouteHandler,
  )
  .openapi(
    postXAmzTargetBaldrApiServiceCreateClusterRoute,
    postXAmzTargetBaldrApiServiceCreateClusterRouteHandler,
  )
  .openapi(
    postXAmzTargetBaldrApiServiceCreateHsmRoute,
    postXAmzTargetBaldrApiServiceCreateHsmRouteHandler,
  )
  .openapi(
    postXAmzTargetBaldrApiServiceDeleteBackupRoute,
    postXAmzTargetBaldrApiServiceDeleteBackupRouteHandler,
  )
  .openapi(
    postXAmzTargetBaldrApiServiceDeleteClusterRoute,
    postXAmzTargetBaldrApiServiceDeleteClusterRouteHandler,
  )
  .openapi(
    postXAmzTargetBaldrApiServiceDeleteHsmRoute,
    postXAmzTargetBaldrApiServiceDeleteHsmRouteHandler,
  )
  .openapi(
    postXAmzTargetBaldrApiServiceDescribeBackupsRoute,
    postXAmzTargetBaldrApiServiceDescribeBackupsRouteHandler,
  )
  .openapi(
    postXAmzTargetBaldrApiServiceDescribeClustersRoute,
    postXAmzTargetBaldrApiServiceDescribeClustersRouteHandler,
  )
  .openapi(
    postXAmzTargetBaldrApiServiceInitializeClusterRoute,
    postXAmzTargetBaldrApiServiceInitializeClusterRouteHandler,
  )
  .openapi(
    postXAmzTargetBaldrApiServiceListTagsRoute,
    postXAmzTargetBaldrApiServiceListTagsRouteHandler,
  )
  .openapi(
    postXAmzTargetBaldrApiServiceModifyBackupAttributesRoute,
    postXAmzTargetBaldrApiServiceModifyBackupAttributesRouteHandler,
  )
  .openapi(
    postXAmzTargetBaldrApiServiceModifyClusterRoute,
    postXAmzTargetBaldrApiServiceModifyClusterRouteHandler,
  )
  .openapi(
    postXAmzTargetBaldrApiServiceRestoreBackupRoute,
    postXAmzTargetBaldrApiServiceRestoreBackupRouteHandler,
  )
  .openapi(
    postXAmzTargetBaldrApiServiceTagResourceRoute,
    postXAmzTargetBaldrApiServiceTagResourceRouteHandler,
  )
  .openapi(
    postXAmzTargetBaldrApiServiceUntagResourceRoute,
    postXAmzTargetBaldrApiServiceUntagResourceRouteHandler,
  )

export default app
