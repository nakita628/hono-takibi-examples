import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeTransitGatewayConnectsRoute,
  postActionDescribeTransitGatewayConnectsRoute,
} from '../routes'

export const getActionDescribeTransitGatewayConnectsRouteHandler: RouteHandler<
  typeof getActionDescribeTransitGatewayConnectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeTransitGatewayConnectsRouteHandler: RouteHandler<
  typeof postActionDescribeTransitGatewayConnectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
