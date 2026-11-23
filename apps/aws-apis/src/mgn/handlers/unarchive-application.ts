import type { RouteHandler } from '@hono/zod-openapi'
import type { postUnarchiveApplicationRoute } from '../routes'

export const postUnarchiveApplicationRouteHandler: RouteHandler<
  typeof postUnarchiveApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
