import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateTransitGatewayConnectRoute,
  postActionCreateTransitGatewayConnectRoute,
} from '../routes'

export const getActionCreateTransitGatewayConnectRouteHandler: RouteHandler<
  typeof getActionCreateTransitGatewayConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateTransitGatewayConnectRouteHandler: RouteHandler<
  typeof postActionCreateTransitGatewayConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}
