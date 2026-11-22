import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverDeleteResolverEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverDeleteResolverEndpointHandler = app.openapi(
  postXAmzTargetRoute53ResolverDeleteResolverEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
