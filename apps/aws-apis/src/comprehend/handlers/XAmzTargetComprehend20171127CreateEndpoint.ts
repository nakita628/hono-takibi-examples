import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127CreateEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127CreateEndpointHandler = app.openapi(
  postXAmzTargetComprehend20171127CreateEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
