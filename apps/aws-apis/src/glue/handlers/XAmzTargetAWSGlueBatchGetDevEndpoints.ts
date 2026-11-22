import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchGetDevEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueBatchGetDevEndpointsHandler = app.openapi(
  postXAmzTargetAWSGlueBatchGetDevEndpointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
