import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionEnableAlarmActionsRoute, postActionEnableAlarmActionsRoute } from '../routes'

export const getActionEnableAlarmActionsRouteHandler: RouteHandler<
  typeof getActionEnableAlarmActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEnableAlarmActionsRouteHandler: RouteHandler<
  typeof postActionEnableAlarmActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
