import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateCustomerGatewayRoute,
  postActionCreateCustomerGatewayRoute,
} from '../routes'

export const getActionCreateCustomerGatewayRouteHandler: RouteHandler<
  typeof getActionCreateCustomerGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateCustomerGatewayRouteHandler: RouteHandler<
  typeof postActionCreateCustomerGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
