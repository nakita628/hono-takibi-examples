import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverListResolverEndpointIpAddressesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverListResolverEndpointIpAddressesHandler = app.openapi(
  postXAmzTargetRoute53ResolverListResolverEndpointIpAddressesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
