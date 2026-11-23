import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverListResolverEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverListResolverEndpointsHandler = app.openapi(
  postXAmzTargetRoute53ResolverListResolverEndpointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
