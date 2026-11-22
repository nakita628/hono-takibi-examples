import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRedshiftDataCancelStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRedshiftDataCancelStatementHandler = app.openapi(
  postXAmzTargetRedshiftDataCancelStatementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
