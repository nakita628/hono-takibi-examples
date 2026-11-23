import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetDatabaseHandler = app.openapi(
  postXAmzTargetAWSGlueGetDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
