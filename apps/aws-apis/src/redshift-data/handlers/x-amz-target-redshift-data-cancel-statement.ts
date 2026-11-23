import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRedshiftDataCancelStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRedshiftDataCancelStatementHandler = app.openapi(
  postXAmzTargetRedshiftDataCancelStatementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
