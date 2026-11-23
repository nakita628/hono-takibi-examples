import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteEgressOnlyInternetGatewayRoute,
  postActionDeleteEgressOnlyInternetGatewayRoute,
} from '../routes'

export const getActionDeleteEgressOnlyInternetGatewayRouteHandler: RouteHandler<
  typeof getActionDeleteEgressOnlyInternetGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteEgressOnlyInternetGatewayRouteHandler: RouteHandler<
  typeof postActionDeleteEgressOnlyInternetGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
