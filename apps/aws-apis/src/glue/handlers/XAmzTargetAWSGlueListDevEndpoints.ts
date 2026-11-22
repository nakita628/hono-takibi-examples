import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListDevEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueListDevEndpointsHandler = app.openapi(
  postXAmzTargetAWSGlueListDevEndpointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
