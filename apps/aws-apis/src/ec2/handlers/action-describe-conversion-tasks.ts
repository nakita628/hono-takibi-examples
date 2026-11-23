import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeConversionTasksRoute,
  postActionDescribeConversionTasksRoute,
} from '../routes'

export const getActionDescribeConversionTasksRouteHandler: RouteHandler<
  typeof getActionDescribeConversionTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeConversionTasksRouteHandler: RouteHandler<
  typeof postActionDescribeConversionTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
