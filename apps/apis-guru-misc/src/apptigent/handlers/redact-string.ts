import type { RouteHandler } from '@hono/zod-openapi'
import type { postRedactStringRoute } from '../routes'

export const postRedactStringRouteHandler: RouteHandler<typeof postRedactStringRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
