import type { RouteHandler } from '@hono/zod-openapi'
import type { postTravelTripParserRoute } from '../routes'

export const postTravelTripParserRouteHandler: RouteHandler<
  typeof postTravelTripParserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
