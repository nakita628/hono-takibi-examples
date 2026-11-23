import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeAlarmsForMetricRoute,
  postActionDescribeAlarmsForMetricRoute,
} from '../routes'

export const getActionDescribeAlarmsForMetricRouteHandler: RouteHandler<
  typeof getActionDescribeAlarmsForMetricRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAlarmsForMetricRouteHandler: RouteHandler<
  typeof postActionDescribeAlarmsForMetricRoute
> = async (c) => {
  throw new Error('Not implemented')
}
