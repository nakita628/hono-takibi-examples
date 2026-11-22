import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetSchemaVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetSchemaVersionHandler = app.openapi(
  postXAmzTargetAWSGlueGetSchemaVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
