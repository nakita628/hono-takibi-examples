import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteTransitGatewayRoute,
  postActionDeleteTransitGatewayRoute,
} from '../routes'

export const getActionDeleteTransitGatewayRouteHandler: RouteHandler<
  typeof getActionDeleteTransitGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteTransitGatewayRouteHandler: RouteHandler<
  typeof postActionDeleteTransitGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
