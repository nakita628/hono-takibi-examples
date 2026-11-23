import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateTransitGatewayRoute,
  postActionCreateTransitGatewayRoute,
} from '../routes'

export const getActionCreateTransitGatewayRouteHandler: RouteHandler<
  typeof getActionCreateTransitGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateTransitGatewayRouteHandler: RouteHandler<
  typeof postActionCreateTransitGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
