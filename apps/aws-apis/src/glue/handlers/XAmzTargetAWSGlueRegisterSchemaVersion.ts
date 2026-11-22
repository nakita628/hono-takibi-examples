import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueRegisterSchemaVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueRegisterSchemaVersionHandler = app.openapi(
  postXAmzTargetAWSGlueRegisterSchemaVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
