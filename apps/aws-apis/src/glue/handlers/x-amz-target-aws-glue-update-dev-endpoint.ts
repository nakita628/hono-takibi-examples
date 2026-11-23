import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateDevEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueUpdateDevEndpointHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateDevEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
