import type { RouteHandler } from '@hono/zod-openapi'
import type { getListingsByDateRoute } from '../routes'

export const getListingsByDateRouteHandler: RouteHandler<typeof getListingsByDateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
