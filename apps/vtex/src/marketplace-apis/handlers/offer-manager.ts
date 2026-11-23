import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOfferManagerPvtOffersRoute,
  getOfferManagerPvtProductProductIdRoute,
  getOfferManagerPvtProductProductIdSkuSkuIdRoute,
} from '../routes'

export const getOfferManagerPvtOffersRouteHandler: RouteHandler<
  typeof getOfferManagerPvtOffersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOfferManagerPvtProductProductIdRouteHandler: RouteHandler<
  typeof getOfferManagerPvtProductProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOfferManagerPvtProductProductIdSkuSkuIdRouteHandler: RouteHandler<
  typeof getOfferManagerPvtProductProductIdSkuSkuIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
