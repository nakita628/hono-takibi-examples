import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetStatementHandler = app.openapi(
  postXAmzTargetAWSGlueGetStatementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
