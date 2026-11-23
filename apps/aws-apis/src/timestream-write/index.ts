import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetTimestream20181101CreateBatchLoadTaskHandler,
  xAmzTargetTimestream20181101CreateDatabaseHandler,
  xAmzTargetTimestream20181101CreateTableHandler,
  xAmzTargetTimestream20181101DeleteDatabaseHandler,
  xAmzTargetTimestream20181101DeleteTableHandler,
  xAmzTargetTimestream20181101DescribeBatchLoadTaskHandler,
  xAmzTargetTimestream20181101DescribeDatabaseHandler,
  xAmzTargetTimestream20181101DescribeEndpointsHandler,
  xAmzTargetTimestream20181101DescribeTableHandler,
  xAmzTargetTimestream20181101ListBatchLoadTasksHandler,
  xAmzTargetTimestream20181101ListDatabasesHandler,
  xAmzTargetTimestream20181101ListTablesHandler,
  xAmzTargetTimestream20181101ListTagsForResourceHandler,
  xAmzTargetTimestream20181101ResumeBatchLoadTaskHandler,
  xAmzTargetTimestream20181101TagResourceHandler,
  xAmzTargetTimestream20181101UntagResourceHandler,
  xAmzTargetTimestream20181101UpdateDatabaseHandler,
  xAmzTargetTimestream20181101UpdateTableHandler,
  xAmzTargetTimestream20181101WriteRecordsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetTimestream20181101CreateBatchLoadTaskHandler)
  .route('/', xAmzTargetTimestream20181101CreateDatabaseHandler)
  .route('/', xAmzTargetTimestream20181101CreateTableHandler)
  .route('/', xAmzTargetTimestream20181101DeleteDatabaseHandler)
  .route('/', xAmzTargetTimestream20181101DeleteTableHandler)
  .route('/', xAmzTargetTimestream20181101DescribeBatchLoadTaskHandler)
  .route('/', xAmzTargetTimestream20181101DescribeDatabaseHandler)
  .route('/', xAmzTargetTimestream20181101DescribeEndpointsHandler)
  .route('/', xAmzTargetTimestream20181101DescribeTableHandler)
  .route('/', xAmzTargetTimestream20181101ListBatchLoadTasksHandler)
  .route('/', xAmzTargetTimestream20181101ListDatabasesHandler)
  .route('/', xAmzTargetTimestream20181101ListTablesHandler)
  .route('/', xAmzTargetTimestream20181101ListTagsForResourceHandler)
  .route('/', xAmzTargetTimestream20181101ResumeBatchLoadTaskHandler)
  .route('/', xAmzTargetTimestream20181101TagResourceHandler)
  .route('/', xAmzTargetTimestream20181101UntagResourceHandler)
  .route('/', xAmzTargetTimestream20181101UpdateDatabaseHandler)
  .route('/', xAmzTargetTimestream20181101UpdateTableHandler)
  .route('/', xAmzTargetTimestream20181101WriteRecordsHandler)

export default app
