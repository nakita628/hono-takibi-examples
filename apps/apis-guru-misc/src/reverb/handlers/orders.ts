import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrdersOrderIdFeedbackBuyerRoute,
  getOrdersOrderIdFeedbackSellerRoute,
  postOrdersOrderIdFeedbackBuyerRoute,
  postOrdersOrderIdFeedbackSellerRoute,
} from '../routes'

export const getOrdersOrderIdFeedbackBuyerRouteHandler: RouteHandler<
  typeof getOrdersOrderIdFeedbackBuyerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrdersOrderIdFeedbackBuyerRouteHandler: RouteHandler<
  typeof postOrdersOrderIdFeedbackBuyerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrdersOrderIdFeedbackSellerRouteHandler: RouteHandler<
  typeof getOrdersOrderIdFeedbackSellerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrdersOrderIdFeedbackSellerRouteHandler: RouteHandler<
  typeof postOrdersOrderIdFeedbackSellerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
