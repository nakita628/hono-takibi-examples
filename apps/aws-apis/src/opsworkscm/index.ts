import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetOpsWorksCMV20161101AssociateNodeHandler,
  XAmzTargetOpsWorksCMV20161101CreateBackupHandler,
  XAmzTargetOpsWorksCMV20161101CreateServerHandler,
  XAmzTargetOpsWorksCMV20161101DeleteBackupHandler,
  XAmzTargetOpsWorksCMV20161101DeleteServerHandler,
  XAmzTargetOpsWorksCMV20161101DescribeAccountAttributesHandler,
  XAmzTargetOpsWorksCMV20161101DescribeBackupsHandler,
  XAmzTargetOpsWorksCMV20161101DescribeEventsHandler,
  XAmzTargetOpsWorksCMV20161101DescribeNodeAssociationStatusHandler,
  XAmzTargetOpsWorksCMV20161101DescribeServersHandler,
  XAmzTargetOpsWorksCMV20161101DisassociateNodeHandler,
  XAmzTargetOpsWorksCMV20161101ExportServerEngineAttributeHandler,
  XAmzTargetOpsWorksCMV20161101ListTagsForResourceHandler,
  XAmzTargetOpsWorksCMV20161101RestoreServerHandler,
  XAmzTargetOpsWorksCMV20161101StartMaintenanceHandler,
  XAmzTargetOpsWorksCMV20161101TagResourceHandler,
  XAmzTargetOpsWorksCMV20161101UntagResourceHandler,
  XAmzTargetOpsWorksCMV20161101UpdateServerEngineAttributesHandler,
  XAmzTargetOpsWorksCMV20161101UpdateServerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetOpsWorksCMV20161101AssociateNodeHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101CreateBackupHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101CreateServerHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101DeleteBackupHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101DeleteServerHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101DescribeAccountAttributesHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101DescribeBackupsHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101DescribeEventsHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101DescribeNodeAssociationStatusHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101DescribeServersHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101DisassociateNodeHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101ExportServerEngineAttributeHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101ListTagsForResourceHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101RestoreServerHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101StartMaintenanceHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101TagResourceHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101UntagResourceHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101UpdateServerHandler)
  .route('/', XAmzTargetOpsWorksCMV20161101UpdateServerEngineAttributesHandler)

export default app
