import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCheckSchemaVersionValidityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueCheckSchemaVersionValidityHandler = app.openapi(
  postXAmzTargetAWSGlueCheckSchemaVersionValidityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
