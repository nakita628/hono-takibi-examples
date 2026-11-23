import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteTransitGatewayRouteTableRoute,
  postActionDeleteTransitGatewayRouteTableRoute,
} from '../routes'

export const getActionDeleteTransitGatewayRouteTableRouteHandler: RouteHandler<
  typeof getActionDeleteTransitGatewayRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteTransitGatewayRouteTableRouteHandler: RouteHandler<
  typeof postActionDeleteTransitGatewayRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
