import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListSchemasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueListSchemasHandler = app.openapi(
  postXAmzTargetAWSGlueListSchemasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
