import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreatePathwayRoute } from '../routes'

export const postCreatePathwayRouteHandler: RouteHandler<typeof postCreatePathwayRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
