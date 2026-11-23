import type { RouteHandler } from '@hono/zod-openapi'
import type { getShoppingFlightOffersRoute, postShoppingFlightOffersRoute } from '../routes'

export const getShoppingFlightOffersRouteHandler: RouteHandler<
  typeof getShoppingFlightOffersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postShoppingFlightOffersRouteHandler: RouteHandler<
  typeof postShoppingFlightOffersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
