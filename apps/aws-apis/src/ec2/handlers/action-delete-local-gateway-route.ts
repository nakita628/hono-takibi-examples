import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteLocalGatewayRouteRoute,
  postActionDeleteLocalGatewayRouteRoute,
} from '../routes'

export const getActionDeleteLocalGatewayRouteRouteHandler: RouteHandler<
  typeof getActionDeleteLocalGatewayRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteLocalGatewayRouteRouteHandler: RouteHandler<
  typeof postActionDeleteLocalGatewayRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
