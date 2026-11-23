import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDataSharesForConsumerRoute,
  postActionDescribeDataSharesForConsumerRoute,
} from '../routes'

export const getActionDescribeDataSharesForConsumerRouteHandler: RouteHandler<
  typeof getActionDescribeDataSharesForConsumerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDataSharesForConsumerRouteHandler: RouteHandler<
  typeof postActionDescribeDataSharesForConsumerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
