import type { RouteHandler } from '@hono/zod-openapi'
import type { postDebugLogIndexRoute } from '../routes'

export const postDebugLogIndexRouteHandler: RouteHandler<typeof postDebugLogIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
