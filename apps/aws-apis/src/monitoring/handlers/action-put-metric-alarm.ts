import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPutMetricAlarmRoute, postActionPutMetricAlarmRoute } from '../routes'

export const getActionPutMetricAlarmRouteHandler: RouteHandler<
  typeof getActionPutMetricAlarmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutMetricAlarmRouteHandler: RouteHandler<
  typeof postActionPutMetricAlarmRoute
> = async (c) => {
  throw new Error('Not implemented')
}
