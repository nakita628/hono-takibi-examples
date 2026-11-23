import type { RouteHandler } from '@hono/zod-openapi'
import type { postOfferEngineOffersListRoute } from '../routes'

export const postOfferEngineOffersListRouteHandler: RouteHandler<
  typeof postOfferEngineOffersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
