import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueUpdateDatabaseHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
