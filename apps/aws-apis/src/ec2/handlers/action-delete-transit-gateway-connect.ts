import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteTransitGatewayConnectRoute,
  postActionDeleteTransitGatewayConnectRoute,
} from '../routes'

export const getActionDeleteTransitGatewayConnectRouteHandler: RouteHandler<
  typeof getActionDeleteTransitGatewayConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteTransitGatewayConnectRouteHandler: RouteHandler<
  typeof postActionDeleteTransitGatewayConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}
