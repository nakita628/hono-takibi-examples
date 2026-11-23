import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetRedshiftDataBatchExecuteStatementHandler,
  xAmzTargetRedshiftDataCancelStatementHandler,
  xAmzTargetRedshiftDataDescribeStatementHandler,
  xAmzTargetRedshiftDataDescribeTableHandler,
  xAmzTargetRedshiftDataExecuteStatementHandler,
  xAmzTargetRedshiftDataGetStatementResultHandler,
  xAmzTargetRedshiftDataListDatabasesHandler,
  xAmzTargetRedshiftDataListSchemasHandler,
  xAmzTargetRedshiftDataListStatementsHandler,
  xAmzTargetRedshiftDataListTablesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetRedshiftDataBatchExecuteStatementHandler)
  .route('/', xAmzTargetRedshiftDataCancelStatementHandler)
  .route('/', xAmzTargetRedshiftDataDescribeStatementHandler)
  .route('/', xAmzTargetRedshiftDataDescribeTableHandler)
  .route('/', xAmzTargetRedshiftDataExecuteStatementHandler)
  .route('/', xAmzTargetRedshiftDataGetStatementResultHandler)
  .route('/', xAmzTargetRedshiftDataListDatabasesHandler)
  .route('/', xAmzTargetRedshiftDataListSchemasHandler)
  .route('/', xAmzTargetRedshiftDataListStatementsHandler)
  .route('/', xAmzTargetRedshiftDataListTablesHandler)

export default app
