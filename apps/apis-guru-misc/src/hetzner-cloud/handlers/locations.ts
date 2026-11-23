import type { RouteHandler } from '@hono/zod-openapi'
import type { getLocationsIdRoute, getLocationsRoute } from '../routes'

export const getLocationsRouteHandler: RouteHandler<typeof getLocationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLocationsIdRouteHandler: RouteHandler<typeof getLocationsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
