import type { RouteHandler } from '@hono/zod-openapi'
import type { postSessionsIndexRoute } from '../routes'

export const postSessionsIndexRouteHandler: RouteHandler<typeof postSessionsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
