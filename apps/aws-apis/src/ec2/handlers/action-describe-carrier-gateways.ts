import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeCarrierGatewaysRoute,
  postActionDescribeCarrierGatewaysRoute,
} from '../routes'

export const getActionDescribeCarrierGatewaysRouteHandler: RouteHandler<
  typeof getActionDescribeCarrierGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeCarrierGatewaysRouteHandler: RouteHandler<
  typeof postActionDescribeCarrierGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
