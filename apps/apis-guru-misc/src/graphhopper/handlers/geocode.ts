import type { RouteHandler } from '@hono/zod-openapi'
import type { getGeocodeRoute } from '../routes'

export const getGeocodeRouteHandler: RouteHandler<typeof getGeocodeRoute> = async (c) => {
  throw new Error('Not implemented')
}
