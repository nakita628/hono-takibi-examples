import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSalesSaleIdListingsRoute,
  getSalesReverbRoute,
  getSalesSellerRoute,
  getSalesSlugRoute,
  postSalesSaleIdListingsRoute,
} from '../routes'

export const getSalesReverbRouteHandler: RouteHandler<typeof getSalesReverbRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSalesSellerRouteHandler: RouteHandler<typeof getSalesSellerRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSalesSaleIdListingsRouteHandler: RouteHandler<
  typeof deleteSalesSaleIdListingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSalesSaleIdListingsRouteHandler: RouteHandler<
  typeof postSalesSaleIdListingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSalesSlugRouteHandler: RouteHandler<typeof getSalesSlugRoute> = async (c) => {
  throw new Error('Not implemented')
}
