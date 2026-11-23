import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeAlarmHistoryRoute,
  postActionDescribeAlarmHistoryRoute,
} from '../routes'

export const getActionDescribeAlarmHistoryRouteHandler: RouteHandler<
  typeof getActionDescribeAlarmHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAlarmHistoryRouteHandler: RouteHandler<
  typeof postActionDescribeAlarmHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
