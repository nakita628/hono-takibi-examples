import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverGetResolverEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverGetResolverEndpointHandler = app.openapi(
  postXAmzTargetRoute53ResolverGetResolverEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
