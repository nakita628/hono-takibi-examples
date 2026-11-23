import type { RouteHandler } from '@hono/zod-openapi'
import type { postDndSetSnoozeRoute } from '../routes'

export const postDndSetSnoozeRouteHandler: RouteHandler<typeof postDndSetSnoozeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
