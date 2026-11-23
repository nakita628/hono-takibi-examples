import type { RouteHandler } from '@hono/zod-openapi'
import type { getNotificationsRoute } from '../routes'

export const getNotificationsRouteHandler: RouteHandler<typeof getNotificationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
