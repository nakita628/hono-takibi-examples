import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DeleteEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127DeleteEndpointHandler = app.openapi(
  postXAmzTargetComprehend20171127DeleteEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
