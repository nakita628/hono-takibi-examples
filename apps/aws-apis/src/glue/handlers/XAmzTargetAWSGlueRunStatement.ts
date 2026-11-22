import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueRunStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueRunStatementHandler = app.openapi(
  postXAmzTargetAWSGlueRunStatementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
