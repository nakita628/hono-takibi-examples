import type { RouteHandler } from '@hono/zod-openapi'
import type { getNotificationEventConditionsRoute } from '../routes'

export const getNotificationEventConditionsRouteHandler: RouteHandler<
  typeof getNotificationEventConditionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
