import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeAlarmsRoute, postActionDescribeAlarmsRoute } from '../routes'

export const getActionDescribeAlarmsRouteHandler: RouteHandler<
  typeof getActionDescribeAlarmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAlarmsRouteHandler: RouteHandler<
  typeof postActionDescribeAlarmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
