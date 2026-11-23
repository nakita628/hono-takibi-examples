import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverUpdateResolverEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverUpdateResolverEndpointHandler = app.openapi(
  postXAmzTargetRoute53ResolverUpdateResolverEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
