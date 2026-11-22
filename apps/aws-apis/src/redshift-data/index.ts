import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetRedshiftDataBatchExecuteStatementHandler,
  XAmzTargetRedshiftDataCancelStatementHandler,
  XAmzTargetRedshiftDataDescribeStatementHandler,
  XAmzTargetRedshiftDataDescribeTableHandler,
  XAmzTargetRedshiftDataExecuteStatementHandler,
  XAmzTargetRedshiftDataGetStatementResultHandler,
  XAmzTargetRedshiftDataListDatabasesHandler,
  XAmzTargetRedshiftDataListSchemasHandler,
  XAmzTargetRedshiftDataListStatementsHandler,
  XAmzTargetRedshiftDataListTablesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetRedshiftDataBatchExecuteStatementHandler)
  .route('/', XAmzTargetRedshiftDataCancelStatementHandler)
  .route('/', XAmzTargetRedshiftDataDescribeStatementHandler)
  .route('/', XAmzTargetRedshiftDataDescribeTableHandler)
  .route('/', XAmzTargetRedshiftDataExecuteStatementHandler)
  .route('/', XAmzTargetRedshiftDataGetStatementResultHandler)
  .route('/', XAmzTargetRedshiftDataListDatabasesHandler)
  .route('/', XAmzTargetRedshiftDataListSchemasHandler)
  .route('/', XAmzTargetRedshiftDataListStatementsHandler)
  .route('/', XAmzTargetRedshiftDataListTablesHandler)

export default app
