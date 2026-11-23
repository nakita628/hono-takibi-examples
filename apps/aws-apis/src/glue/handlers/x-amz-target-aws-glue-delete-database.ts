import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeleteDatabaseHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
