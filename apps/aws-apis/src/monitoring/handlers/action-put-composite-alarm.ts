import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPutCompositeAlarmRoute, postActionPutCompositeAlarmRoute } from '../routes'

export const getActionPutCompositeAlarmRouteHandler: RouteHandler<
  typeof getActionPutCompositeAlarmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutCompositeAlarmRouteHandler: RouteHandler<
  typeof postActionPutCompositeAlarmRoute
> = async (c) => {
  throw new Error('Not implemented')
}
