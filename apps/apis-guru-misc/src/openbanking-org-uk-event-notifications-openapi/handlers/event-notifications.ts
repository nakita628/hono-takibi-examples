import type { RouteHandler } from '@hono/zod-openapi'
import type { postEventNotificationsRoute } from '../routes'

export const postEventNotificationsRouteHandler: RouteHandler<
  typeof postEventNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
