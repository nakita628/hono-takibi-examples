import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteDevEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeleteDevEndpointHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteDevEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
