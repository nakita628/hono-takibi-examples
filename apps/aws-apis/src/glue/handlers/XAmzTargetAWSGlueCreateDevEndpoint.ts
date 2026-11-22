import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateDevEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueCreateDevEndpointHandler = app.openapi(
  postXAmzTargetAWSGlueCreateDevEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
