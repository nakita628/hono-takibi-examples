import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSetAlarmStateRoute, postActionSetAlarmStateRoute } from '../routes'

export const getActionSetAlarmStateRouteHandler: RouteHandler<
  typeof getActionSetAlarmStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetAlarmStateRouteHandler: RouteHandler<
  typeof postActionSetAlarmStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
