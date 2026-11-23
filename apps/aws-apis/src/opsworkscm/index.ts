import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetOpsWorksCmV20161101AssociateNodeHandler,
  xAmzTargetOpsWorksCmV20161101CreateBackupHandler,
  xAmzTargetOpsWorksCmV20161101CreateServerHandler,
  xAmzTargetOpsWorksCmV20161101DeleteBackupHandler,
  xAmzTargetOpsWorksCmV20161101DeleteServerHandler,
  xAmzTargetOpsWorksCmV20161101DescribeAccountAttributesHandler,
  xAmzTargetOpsWorksCmV20161101DescribeBackupsHandler,
  xAmzTargetOpsWorksCmV20161101DescribeEventsHandler,
  xAmzTargetOpsWorksCmV20161101DescribeNodeAssociationStatusHandler,
  xAmzTargetOpsWorksCmV20161101DescribeServersHandler,
  xAmzTargetOpsWorksCmV20161101DisassociateNodeHandler,
  xAmzTargetOpsWorksCmV20161101ExportServerEngineAttributeHandler,
  xAmzTargetOpsWorksCmV20161101ListTagsForResourceHandler,
  xAmzTargetOpsWorksCmV20161101RestoreServerHandler,
  xAmzTargetOpsWorksCmV20161101StartMaintenanceHandler,
  xAmzTargetOpsWorksCmV20161101TagResourceHandler,
  xAmzTargetOpsWorksCmV20161101UntagResourceHandler,
  xAmzTargetOpsWorksCmV20161101UpdateServerEngineAttributesHandler,
  xAmzTargetOpsWorksCmV20161101UpdateServerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetOpsWorksCmV20161101AssociateNodeHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101CreateBackupHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101CreateServerHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101DeleteBackupHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101DeleteServerHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101DescribeAccountAttributesHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101DescribeBackupsHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101DescribeEventsHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101DescribeNodeAssociationStatusHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101DescribeServersHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101DisassociateNodeHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101ExportServerEngineAttributeHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101ListTagsForResourceHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101RestoreServerHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101StartMaintenanceHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101TagResourceHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101UntagResourceHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101UpdateServerHandler)
  .route('/', xAmzTargetOpsWorksCmV20161101UpdateServerEngineAttributesHandler)

export default app
