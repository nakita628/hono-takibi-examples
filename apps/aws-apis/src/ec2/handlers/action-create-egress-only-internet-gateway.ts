import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateEgressOnlyInternetGatewayRoute,
  postActionCreateEgressOnlyInternetGatewayRoute,
} from '../routes'

export const getActionCreateEgressOnlyInternetGatewayRouteHandler: RouteHandler<
  typeof getActionCreateEgressOnlyInternetGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateEgressOnlyInternetGatewayRouteHandler: RouteHandler<
  typeof postActionCreateEgressOnlyInternetGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
