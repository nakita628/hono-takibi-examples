import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListStatementsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueListStatementsHandler = app.openapi(
  postXAmzTargetAWSGlueListStatementsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
