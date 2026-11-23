import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisableAlarmActionsRoute,
  postActionDisableAlarmActionsRoute,
} from '../routes'

export const getActionDisableAlarmActionsRouteHandler: RouteHandler<
  typeof getActionDisableAlarmActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisableAlarmActionsRouteHandler: RouteHandler<
  typeof postActionDisableAlarmActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
