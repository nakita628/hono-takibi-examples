import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductOfferingsIdRoute, getProductOfferingsRoute } from '../routes'

export const getProductOfferingsRouteHandler: RouteHandler<
  typeof getProductOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProductOfferingsIdRouteHandler: RouteHandler<
  typeof getProductOfferingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
