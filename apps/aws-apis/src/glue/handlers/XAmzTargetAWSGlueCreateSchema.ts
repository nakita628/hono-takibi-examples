import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueCreateSchemaHandler = app.openapi(
  postXAmzTargetAWSGlueCreateSchemaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
