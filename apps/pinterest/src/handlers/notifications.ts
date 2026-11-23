import type { RouteHandler } from '@hono/zod-openapi'
import type { postNotificationsRoute } from '../routes'

export const postNotificationsRouteHandler: RouteHandler<typeof postNotificationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
