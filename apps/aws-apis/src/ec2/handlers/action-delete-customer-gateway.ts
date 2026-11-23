import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteCustomerGatewayRoute,
  postActionDeleteCustomerGatewayRoute,
} from '../routes'

export const getActionDeleteCustomerGatewayRouteHandler: RouteHandler<
  typeof getActionDeleteCustomerGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteCustomerGatewayRouteHandler: RouteHandler<
  typeof postActionDeleteCustomerGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
