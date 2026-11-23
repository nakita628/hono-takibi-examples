import type { RouteHandler } from '@hono/zod-openapi'
import type { getSourceLocationsRoute } from '../routes'

export const getSourceLocationsRouteHandler: RouteHandler<typeof getSourceLocationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
