import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddressHandler = app.openapi(
  postXAmzTargetRoute53ResolverDisassociateResolverEndpointIpAddressRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
