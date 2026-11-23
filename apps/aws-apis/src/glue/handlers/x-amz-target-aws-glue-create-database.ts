import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueCreateDatabaseHandler = app.openapi(
  postXAmzTargetAWSGlueCreateDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
