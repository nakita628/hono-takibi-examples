import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetSchemaVersionsDiffRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetSchemaVersionsDiffHandler = app.openapi(
  postXAmzTargetAWSGlueGetSchemaVersionsDiffRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
