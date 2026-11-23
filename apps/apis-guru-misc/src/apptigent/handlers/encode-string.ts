import type { RouteHandler } from '@hono/zod-openapi'
import type { postEncodeStringRoute } from '../routes'

export const postEncodeStringRouteHandler: RouteHandler<typeof postEncodeStringRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
