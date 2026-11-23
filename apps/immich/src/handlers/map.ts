import type { RouteHandler } from '@hono/zod-openapi'
import type { getMapMarkersRoute, getMapReverseGeocodeRoute } from '../routes'

export const getMapMarkersRouteHandler: RouteHandler<typeof getMapMarkersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMapReverseGeocodeRouteHandler: RouteHandler<
  typeof getMapReverseGeocodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
