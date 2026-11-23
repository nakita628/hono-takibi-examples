import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSearchTransitGatewayRoutesRoute,
  postActionSearchTransitGatewayRoutesRoute,
} from '../routes'

export const getActionSearchTransitGatewayRoutesRouteHandler: RouteHandler<
  typeof getActionSearchTransitGatewayRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSearchTransitGatewayRoutesRouteHandler: RouteHandler<
  typeof postActionSearchTransitGatewayRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
