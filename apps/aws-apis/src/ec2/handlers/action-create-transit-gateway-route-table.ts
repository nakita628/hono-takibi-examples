import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateTransitGatewayRouteTableRoute,
  postActionCreateTransitGatewayRouteTableRoute,
} from '../routes'

export const getActionCreateTransitGatewayRouteTableRouteHandler: RouteHandler<
  typeof getActionCreateTransitGatewayRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateTransitGatewayRouteTableRouteHandler: RouteHandler<
  typeof postActionCreateTransitGatewayRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
