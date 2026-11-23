import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteInternetGatewayRoute,
  postActionDeleteInternetGatewayRoute,
} from '../routes'

export const getActionDeleteInternetGatewayRouteHandler: RouteHandler<
  typeof getActionDeleteInternetGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteInternetGatewayRouteHandler: RouteHandler<
  typeof postActionDeleteInternetGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
