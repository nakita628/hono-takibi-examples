import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetConnectionsHandler = app.openapi(
  postXAmzTargetAWSGlueGetConnectionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
