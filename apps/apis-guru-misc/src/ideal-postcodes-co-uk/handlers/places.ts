import type { RouteHandler } from '@hono/zod-openapi'
import type { getPlacesPlaceRoute, getPlacesRoute } from '../routes'

export const getPlacesRouteHandler: RouteHandler<typeof getPlacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlacesPlaceRouteHandler: RouteHandler<typeof getPlacesPlaceRoute> = async (c) => {
  throw new Error('Not implemented')
}
