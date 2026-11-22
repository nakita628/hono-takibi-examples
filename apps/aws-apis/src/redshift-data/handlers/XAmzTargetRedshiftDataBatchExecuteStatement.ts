import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRedshiftDataBatchExecuteStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRedshiftDataBatchExecuteStatementHandler = app.openapi(
  postXAmzTargetRedshiftDataBatchExecuteStatementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
