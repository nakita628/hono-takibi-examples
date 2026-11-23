import type { RouteHandler } from '@hono/zod-openapi'
import type { postWidgetsTokenRoute } from '../routes'

export const postWidgetsTokenRouteHandler: RouteHandler<typeof postWidgetsTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
