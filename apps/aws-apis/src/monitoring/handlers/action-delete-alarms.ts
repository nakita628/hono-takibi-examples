import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteAlarmsRoute, postActionDeleteAlarmsRoute } from '../routes'

export const getActionDeleteAlarmsRouteHandler: RouteHandler<
  typeof getActionDeleteAlarmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteAlarmsRouteHandler: RouteHandler<
  typeof postActionDeleteAlarmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
