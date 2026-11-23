import type { RouteHandler } from '@hono/zod-openapi'
import type { postGroupResourcesRoute } from '../routes'

export const postGroupResourcesRouteHandler: RouteHandler<typeof postGroupResourcesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
