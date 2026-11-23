import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetRedshiftDataBatchExecuteStatementRoute,
  postXAmzTargetRedshiftDataCancelStatementRoute,
  postXAmzTargetRedshiftDataDescribeStatementRoute,
  postXAmzTargetRedshiftDataDescribeTableRoute,
  postXAmzTargetRedshiftDataExecuteStatementRoute,
  postXAmzTargetRedshiftDataGetStatementResultRoute,
  postXAmzTargetRedshiftDataListDatabasesRoute,
  postXAmzTargetRedshiftDataListSchemasRoute,
  postXAmzTargetRedshiftDataListStatementsRoute,
  postXAmzTargetRedshiftDataListTablesRoute,
} from './routes'
import {
  postXAmzTargetRedshiftDataBatchExecuteStatementRouteHandler,
  postXAmzTargetRedshiftDataCancelStatementRouteHandler,
  postXAmzTargetRedshiftDataDescribeStatementRouteHandler,
  postXAmzTargetRedshiftDataDescribeTableRouteHandler,
  postXAmzTargetRedshiftDataExecuteStatementRouteHandler,
  postXAmzTargetRedshiftDataGetStatementResultRouteHandler,
  postXAmzTargetRedshiftDataListDatabasesRouteHandler,
  postXAmzTargetRedshiftDataListSchemasRouteHandler,
  postXAmzTargetRedshiftDataListStatementsRouteHandler,
  postXAmzTargetRedshiftDataListTablesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetRedshiftDataBatchExecuteStatementRoute,
    postXAmzTargetRedshiftDataBatchExecuteStatementRouteHandler,
  )
  .openapi(
    postXAmzTargetRedshiftDataCancelStatementRoute,
    postXAmzTargetRedshiftDataCancelStatementRouteHandler,
  )
  .openapi(
    postXAmzTargetRedshiftDataDescribeStatementRoute,
    postXAmzTargetRedshiftDataDescribeStatementRouteHandler,
  )
  .openapi(
    postXAmzTargetRedshiftDataDescribeTableRoute,
    postXAmzTargetRedshiftDataDescribeTableRouteHandler,
  )
  .openapi(
    postXAmzTargetRedshiftDataExecuteStatementRoute,
    postXAmzTargetRedshiftDataExecuteStatementRouteHandler,
  )
  .openapi(
    postXAmzTargetRedshiftDataGetStatementResultRoute,
    postXAmzTargetRedshiftDataGetStatementResultRouteHandler,
  )
  .openapi(
    postXAmzTargetRedshiftDataListDatabasesRoute,
    postXAmzTargetRedshiftDataListDatabasesRouteHandler,
  )
  .openapi(
    postXAmzTargetRedshiftDataListSchemasRoute,
    postXAmzTargetRedshiftDataListSchemasRouteHandler,
  )
  .openapi(
    postXAmzTargetRedshiftDataListStatementsRoute,
    postXAmzTargetRedshiftDataListStatementsRouteHandler,
  )
  .openapi(
    postXAmzTargetRedshiftDataListTablesRoute,
    postXAmzTargetRedshiftDataListTablesRouteHandler,
  )

export default app
