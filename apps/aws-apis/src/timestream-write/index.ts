import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetTimestream20181101CreateBatchLoadTaskHandler,
  XAmzTargetTimestream20181101CreateDatabaseHandler,
  XAmzTargetTimestream20181101CreateTableHandler,
  XAmzTargetTimestream20181101DeleteDatabaseHandler,
  XAmzTargetTimestream20181101DeleteTableHandler,
  XAmzTargetTimestream20181101DescribeBatchLoadTaskHandler,
  XAmzTargetTimestream20181101DescribeDatabaseHandler,
  XAmzTargetTimestream20181101DescribeEndpointsHandler,
  XAmzTargetTimestream20181101DescribeTableHandler,
  XAmzTargetTimestream20181101ListBatchLoadTasksHandler,
  XAmzTargetTimestream20181101ListDatabasesHandler,
  XAmzTargetTimestream20181101ListTablesHandler,
  XAmzTargetTimestream20181101ListTagsForResourceHandler,
  XAmzTargetTimestream20181101ResumeBatchLoadTaskHandler,
  XAmzTargetTimestream20181101TagResourceHandler,
  XAmzTargetTimestream20181101UntagResourceHandler,
  XAmzTargetTimestream20181101UpdateDatabaseHandler,
  XAmzTargetTimestream20181101UpdateTableHandler,
  XAmzTargetTimestream20181101WriteRecordsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetTimestream20181101CreateBatchLoadTaskHandler)
  .route('/', XAmzTargetTimestream20181101CreateDatabaseHandler)
  .route('/', XAmzTargetTimestream20181101CreateTableHandler)
  .route('/', XAmzTargetTimestream20181101DeleteDatabaseHandler)
  .route('/', XAmzTargetTimestream20181101DeleteTableHandler)
  .route('/', XAmzTargetTimestream20181101DescribeBatchLoadTaskHandler)
  .route('/', XAmzTargetTimestream20181101DescribeDatabaseHandler)
  .route('/', XAmzTargetTimestream20181101DescribeEndpointsHandler)
  .route('/', XAmzTargetTimestream20181101DescribeTableHandler)
  .route('/', XAmzTargetTimestream20181101ListBatchLoadTasksHandler)
  .route('/', XAmzTargetTimestream20181101ListDatabasesHandler)
  .route('/', XAmzTargetTimestream20181101ListTablesHandler)
  .route('/', XAmzTargetTimestream20181101ListTagsForResourceHandler)
  .route('/', XAmzTargetTimestream20181101ResumeBatchLoadTaskHandler)
  .route('/', XAmzTargetTimestream20181101TagResourceHandler)
  .route('/', XAmzTargetTimestream20181101UntagResourceHandler)
  .route('/', XAmzTargetTimestream20181101UpdateDatabaseHandler)
  .route('/', XAmzTargetTimestream20181101UpdateTableHandler)
  .route('/', XAmzTargetTimestream20181101WriteRecordsHandler)

export default app
