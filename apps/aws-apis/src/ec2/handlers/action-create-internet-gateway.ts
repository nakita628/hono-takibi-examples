import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateInternetGatewayRoute,
  postActionCreateInternetGatewayRoute,
} from '../routes'

export const getActionCreateInternetGatewayRouteHandler: RouteHandler<
  typeof getActionCreateInternetGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateInternetGatewayRouteHandler: RouteHandler<
  typeof postActionCreateInternetGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
