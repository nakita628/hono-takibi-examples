import type { RouteHandler } from '@hono/zod-openapi'
import type { getUpdatePathwayRoute } from '../routes'

export const getUpdatePathwayRouteHandler: RouteHandler<typeof getUpdatePathwayRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
