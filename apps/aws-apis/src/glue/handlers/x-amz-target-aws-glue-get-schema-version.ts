import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetSchemaVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetSchemaVersionHandler = app.openapi(
  postXAmzTargetAWSGlueGetSchemaVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
