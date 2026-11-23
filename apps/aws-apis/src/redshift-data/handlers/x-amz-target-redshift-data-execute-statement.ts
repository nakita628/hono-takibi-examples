import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRedshiftDataExecuteStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRedshiftDataExecuteStatementHandler = app.openapi(
  postXAmzTargetRedshiftDataExecuteStatementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
