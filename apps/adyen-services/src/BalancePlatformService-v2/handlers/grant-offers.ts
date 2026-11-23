import type { RouteHandler } from '@hono/zod-openapi'
import type { getGrantOffersGrantOfferIdRoute, getGrantOffersRoute } from '../routes'

export const getGrantOffersRouteHandler: RouteHandler<typeof getGrantOffersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGrantOffersGrantOfferIdRouteHandler: RouteHandler<
  typeof getGrantOffersGrantOfferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
