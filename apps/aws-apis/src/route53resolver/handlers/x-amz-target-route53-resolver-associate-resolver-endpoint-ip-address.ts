import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverAssociateResolverEndpointIpAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverAssociateResolverEndpointIpAddressHandler = app.openapi(
  postXAmzTargetRoute53ResolverAssociateResolverEndpointIpAddressRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
