import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getShopsIdStorefrontsRoute,
  getShopsShopIdShippingProfilesRoute,
  getShopsSlugFeedbackBuyerRoute,
  getShopsSlugFeedbackRoute,
  getShopsSlugFeedbackSellerRoute,
  getShopsSlugRoute,
} from '../routes'

export const getShopsIdStorefrontsRouteHandler: RouteHandler<
  typeof getShopsIdStorefrontsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShopsShopIdShippingProfilesRouteHandler: RouteHandler<
  typeof getShopsShopIdShippingProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShopsSlugRouteHandler: RouteHandler<typeof getShopsSlugRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getShopsSlugFeedbackRouteHandler: RouteHandler<
  typeof getShopsSlugFeedbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShopsSlugFeedbackBuyerRouteHandler: RouteHandler<
  typeof getShopsSlugFeedbackBuyerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShopsSlugFeedbackSellerRouteHandler: RouteHandler<
  typeof getShopsSlugFeedbackSellerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
