import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteStreamRoute } from '../routes'

export const postDeleteStreamRouteHandler: RouteHandler<typeof postDeleteStreamRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
