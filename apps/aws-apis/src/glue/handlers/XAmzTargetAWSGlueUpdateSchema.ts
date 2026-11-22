import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueUpdateSchemaHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateSchemaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
