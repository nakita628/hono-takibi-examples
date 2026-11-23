import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeCustomerGatewaysRoute,
  postActionDescribeCustomerGatewaysRoute,
} from '../routes'

export const getActionDescribeCustomerGatewaysRouteHandler: RouteHandler<
  typeof getActionDescribeCustomerGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeCustomerGatewaysRouteHandler: RouteHandler<
  typeof postActionDescribeCustomerGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
