import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyLocalGatewayRouteRoute,
  postActionModifyLocalGatewayRouteRoute,
} from '../routes'

export const getActionModifyLocalGatewayRouteRouteHandler: RouteHandler<
  typeof getActionModifyLocalGatewayRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyLocalGatewayRouteRouteHandler: RouteHandler<
  typeof postActionModifyLocalGatewayRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
