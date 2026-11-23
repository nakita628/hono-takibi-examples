import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetDevEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetDevEndpointsHandler = app.openapi(
  postXAmzTargetAWSGlueGetDevEndpointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
