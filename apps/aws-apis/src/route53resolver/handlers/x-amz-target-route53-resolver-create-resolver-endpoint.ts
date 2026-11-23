import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverCreateResolverEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverCreateResolverEndpointHandler = app.openapi(
  postXAmzTargetRoute53ResolverCreateResolverEndpointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
