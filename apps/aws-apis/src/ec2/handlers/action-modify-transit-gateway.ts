import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyTransitGatewayRoute,
  postActionModifyTransitGatewayRoute,
} from '../routes'

export const getActionModifyTransitGatewayRouteHandler: RouteHandler<
  typeof getActionModifyTransitGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyTransitGatewayRouteHandler: RouteHandler<
  typeof postActionModifyTransitGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
