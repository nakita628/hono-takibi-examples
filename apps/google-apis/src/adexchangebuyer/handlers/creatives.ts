import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCreativesAccountIdBuyerCreativeIdListDealsRoute,
  getCreativesAccountIdBuyerCreativeIdRoute,
  getCreativesRoute,
  postCreativesAccountIdBuyerCreativeIdAddDealDealIdRoute,
  postCreativesAccountIdBuyerCreativeIdRemoveDealDealIdRoute,
  postCreativesRoute,
} from '../routes'

export const getCreativesRouteHandler: RouteHandler<typeof getCreativesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCreativesRouteHandler: RouteHandler<typeof postCreativesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCreativesAccountIdBuyerCreativeIdRouteHandler: RouteHandler<
  typeof getCreativesAccountIdBuyerCreativeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCreativesAccountIdBuyerCreativeIdAddDealDealIdRouteHandler: RouteHandler<
  typeof postCreativesAccountIdBuyerCreativeIdAddDealDealIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCreativesAccountIdBuyerCreativeIdListDealsRouteHandler: RouteHandler<
  typeof getCreativesAccountIdBuyerCreativeIdListDealsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCreativesAccountIdBuyerCreativeIdRemoveDealDealIdRouteHandler: RouteHandler<
  typeof postCreativesAccountIdBuyerCreativeIdRemoveDealDealIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
