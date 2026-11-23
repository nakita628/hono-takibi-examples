import type { RouteHandler } from '@hono/zod-openapi'
import type { getCrossListingsRoute } from '../routes'

export const getCrossListingsRouteHandler: RouteHandler<typeof getCrossListingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
