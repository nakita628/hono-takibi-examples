import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeExpressionsRoute,
  postActionDescribeExpressionsRoute,
} from '../routes'

export const getActionDescribeExpressionsRouteHandler: RouteHandler<
  typeof getActionDescribeExpressionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeExpressionsRouteHandler: RouteHandler<
  typeof postActionDescribeExpressionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
