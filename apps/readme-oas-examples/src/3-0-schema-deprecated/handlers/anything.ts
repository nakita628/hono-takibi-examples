import type { RouteHandler } from '@hono/zod-openapi'
import type { postAnythingRoute } from '../routes'

export const postAnythingRouteHandler: RouteHandler<typeof postAnythingRoute> = async (c) => {
  throw new Error('Not implemented')
}
