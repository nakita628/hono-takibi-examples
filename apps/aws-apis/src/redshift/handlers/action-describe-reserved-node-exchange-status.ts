import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeReservedNodeExchangeStatusRoute,
  postActionDescribeReservedNodeExchangeStatusRoute,
} from '../routes'

export const getActionDescribeReservedNodeExchangeStatusRouteHandler: RouteHandler<
  typeof getActionDescribeReservedNodeExchangeStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeReservedNodeExchangeStatusRouteHandler: RouteHandler<
  typeof postActionDescribeReservedNodeExchangeStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
