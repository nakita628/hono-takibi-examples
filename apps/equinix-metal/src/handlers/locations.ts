import type { RouteHandler } from '@hono/zod-openapi'
import type { getLocationsMetrosIdRoute, getLocationsMetrosRoute } from '../routes'

export const getLocationsMetrosRouteHandler: RouteHandler<typeof getLocationsMetrosRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getLocationsMetrosIdRouteHandler: RouteHandler<
  typeof getLocationsMetrosIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
