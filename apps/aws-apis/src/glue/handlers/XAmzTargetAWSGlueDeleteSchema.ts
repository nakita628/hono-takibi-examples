import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeleteSchemaHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteSchemaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
