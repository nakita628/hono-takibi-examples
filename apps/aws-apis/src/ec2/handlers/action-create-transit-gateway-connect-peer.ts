import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateTransitGatewayConnectPeerRoute,
  postActionCreateTransitGatewayConnectPeerRoute,
} from '../routes'

export const getActionCreateTransitGatewayConnectPeerRouteHandler: RouteHandler<
  typeof getActionCreateTransitGatewayConnectPeerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateTransitGatewayConnectPeerRouteHandler: RouteHandler<
  typeof postActionCreateTransitGatewayConnectPeerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
