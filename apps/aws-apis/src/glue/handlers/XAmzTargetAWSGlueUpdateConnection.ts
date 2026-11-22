import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueUpdateConnectionHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
