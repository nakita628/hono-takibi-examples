import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateStreamRoute } from '../routes'

export const postUpdateStreamRouteHandler: RouteHandler<typeof postUpdateStreamRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
