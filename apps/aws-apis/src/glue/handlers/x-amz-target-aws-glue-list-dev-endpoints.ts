import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListDevEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueListDevEndpointsHandler = app.openapi(
  postXAmzTargetAWSGlueListDevEndpointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
