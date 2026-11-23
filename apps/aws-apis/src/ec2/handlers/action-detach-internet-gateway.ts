import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDetachInternetGatewayRoute,
  postActionDetachInternetGatewayRoute,
} from '../routes'

export const getActionDetachInternetGatewayRouteHandler: RouteHandler<
  typeof getActionDetachInternetGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDetachInternetGatewayRouteHandler: RouteHandler<
  typeof postActionDetachInternetGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
