import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAttachInternetGatewayRoute,
  postActionAttachInternetGatewayRoute,
} from '../routes'

export const getActionAttachInternetGatewayRouteHandler: RouteHandler<
  typeof getActionAttachInternetGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAttachInternetGatewayRouteHandler: RouteHandler<
  typeof postActionAttachInternetGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
