import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetSchemaVersionsDiffRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetSchemaVersionsDiffHandler = app.openapi(
  postXAmzTargetAWSGlueGetSchemaVersionsDiffRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
