import type { RouteHandler } from '@hono/zod-openapi'
import type { getLocationsRoute } from '../routes'

export const getLocationsRouteHandler: RouteHandler<typeof getLocationsRoute> = async (c) => {
  throw new Error('Not implemented')
}
