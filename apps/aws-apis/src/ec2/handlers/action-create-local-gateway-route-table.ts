import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateLocalGatewayRouteTableRoute,
  postActionCreateLocalGatewayRouteTableRoute,
} from '../routes'

export const getActionCreateLocalGatewayRouteTableRouteHandler: RouteHandler<
  typeof getActionCreateLocalGatewayRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateLocalGatewayRouteTableRouteHandler: RouteHandler<
  typeof postActionCreateLocalGatewayRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
