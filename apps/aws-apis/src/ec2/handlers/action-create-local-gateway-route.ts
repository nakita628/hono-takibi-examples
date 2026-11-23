import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateLocalGatewayRouteRoute,
  postActionCreateLocalGatewayRouteRoute,
} from '../routes'

export const getActionCreateLocalGatewayRouteRouteHandler: RouteHandler<
  typeof getActionCreateLocalGatewayRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateLocalGatewayRouteRouteHandler: RouteHandler<
  typeof postActionCreateLocalGatewayRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
