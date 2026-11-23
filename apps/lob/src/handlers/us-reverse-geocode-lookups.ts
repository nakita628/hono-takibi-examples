import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsReverseGeocodeLookupsRoute } from '../routes'

export const postUsReverseGeocodeLookupsRouteHandler: RouteHandler<
  typeof postUsReverseGeocodeLookupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
