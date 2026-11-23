import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAssociateTransitGatewayRouteTableRoute,
  postActionAssociateTransitGatewayRouteTableRoute,
} from '../routes'

export const getActionAssociateTransitGatewayRouteTableRouteHandler: RouteHandler<
  typeof getActionAssociateTransitGatewayRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssociateTransitGatewayRouteTableRouteHandler: RouteHandler<
  typeof postActionAssociateTransitGatewayRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
