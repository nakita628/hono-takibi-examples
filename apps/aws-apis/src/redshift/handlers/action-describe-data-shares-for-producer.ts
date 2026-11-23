import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDataSharesForProducerRoute,
  postActionDescribeDataSharesForProducerRoute,
} from '../routes'

export const getActionDescribeDataSharesForProducerRouteHandler: RouteHandler<
  typeof getActionDescribeDataSharesForProducerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDataSharesForProducerRouteHandler: RouteHandler<
  typeof postActionDescribeDataSharesForProducerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
