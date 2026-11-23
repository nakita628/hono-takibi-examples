import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueListSessionsHandler = app.openapi(
  postXAmzTargetAWSGlueListSessionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
