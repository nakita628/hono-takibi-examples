import type { RouteHandler } from '@hono/zod-openapi'
import type { postMarkAllAsReadRoute } from '../routes'

export const postMarkAllAsReadRouteHandler: RouteHandler<typeof postMarkAllAsReadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
