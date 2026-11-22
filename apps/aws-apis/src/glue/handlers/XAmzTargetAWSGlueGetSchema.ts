import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetSchemaHandler = app.openapi(
  postXAmzTargetAWSGlueGetSchemaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
