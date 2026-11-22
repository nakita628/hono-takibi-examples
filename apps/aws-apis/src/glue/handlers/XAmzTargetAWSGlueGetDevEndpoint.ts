import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetDevEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetDevEndpointHandler = app.openapi(
  postXAmzTargetAWSGlueGetDevEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
