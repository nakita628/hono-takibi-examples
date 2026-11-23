import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateTransitGatewayRouteRoute,
  postActionCreateTransitGatewayRouteRoute,
} from '../routes'

export const getActionCreateTransitGatewayRouteRouteHandler: RouteHandler<
  typeof getActionCreateTransitGatewayRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateTransitGatewayRouteRouteHandler: RouteHandler<
  typeof postActionCreateTransitGatewayRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
