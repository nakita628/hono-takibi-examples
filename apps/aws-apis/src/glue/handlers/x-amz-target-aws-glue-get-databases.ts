import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetDatabasesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetDatabasesHandler = app.openapi(
  postXAmzTargetAWSGlueGetDatabasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
