import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127ListEndpointsHandler = app.openapi(
  postXAmzTargetComprehend20171127ListEndpointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
