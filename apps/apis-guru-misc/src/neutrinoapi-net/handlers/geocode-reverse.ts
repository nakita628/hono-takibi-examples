import type { RouteHandler } from '@hono/zod-openapi'
import type { getGeocodeReverseRoute } from '../routes'

export const getGeocodeReverseRouteHandler: RouteHandler<typeof getGeocodeReverseRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
