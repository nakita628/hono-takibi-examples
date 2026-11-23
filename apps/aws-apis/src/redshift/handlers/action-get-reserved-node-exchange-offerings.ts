import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetReservedNodeExchangeOfferingsRoute,
  postActionGetReservedNodeExchangeOfferingsRoute,
} from '../routes'

export const getActionGetReservedNodeExchangeOfferingsRouteHandler: RouteHandler<
  typeof getActionGetReservedNodeExchangeOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetReservedNodeExchangeOfferingsRouteHandler: RouteHandler<
  typeof postActionGetReservedNodeExchangeOfferingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
