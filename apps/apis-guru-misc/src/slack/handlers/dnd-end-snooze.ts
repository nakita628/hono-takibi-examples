import type { RouteHandler } from '@hono/zod-openapi'
import type { postDndEndSnoozeRoute } from '../routes'

export const postDndEndSnoozeRouteHandler: RouteHandler<typeof postDndEndSnoozeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
