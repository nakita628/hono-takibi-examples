import type { RouteHandler } from '@hono/zod-openapi'
import type { postDecodeStringRoute } from '../routes'

export const postDecodeStringRouteHandler: RouteHandler<typeof postDecodeStringRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
