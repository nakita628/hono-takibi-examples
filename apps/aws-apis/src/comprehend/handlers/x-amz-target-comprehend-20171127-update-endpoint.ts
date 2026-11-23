import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127UpdateEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127UpdateEndpointHandler = app.openapi(
  postXAmzTargetComprehend20171127UpdateEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
