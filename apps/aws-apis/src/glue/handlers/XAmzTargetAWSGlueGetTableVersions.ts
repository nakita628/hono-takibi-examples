import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetTableVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetTableVersionsHandler = app.openapi(
  postXAmzTargetAWSGlueGetTableVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
