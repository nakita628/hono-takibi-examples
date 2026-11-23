import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteDevEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeleteDevEndpointHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteDevEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
