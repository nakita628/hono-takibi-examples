import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteMessageRoute } from '../routes'

export const postDeleteMessageRouteHandler: RouteHandler<typeof postDeleteMessageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
