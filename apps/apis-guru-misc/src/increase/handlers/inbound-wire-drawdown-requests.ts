import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdRoute,
  getInboundWireDrawdownRequestsRoute,
} from '../routes'

export const getInboundWireDrawdownRequestsRouteHandler: RouteHandler<
  typeof getInboundWireDrawdownRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdRouteHandler: RouteHandler<
  typeof getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
