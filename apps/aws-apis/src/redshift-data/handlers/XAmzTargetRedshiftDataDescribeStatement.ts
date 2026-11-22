import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRedshiftDataDescribeStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRedshiftDataDescribeStatementHandler = app.openapi(
  postXAmzTargetRedshiftDataDescribeStatementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
