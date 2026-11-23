import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteProductSubscriptionsProductSubscriptionArnRoute,
  getProductSubscriptionsRoute,
  postProductSubscriptionsRoute,
} from '../routes'

export const deleteProductSubscriptionsProductSubscriptionArnRouteHandler: RouteHandler<
  typeof deleteProductSubscriptionsProductSubscriptionArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProductSubscriptionsRouteHandler: RouteHandler<
  typeof postProductSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProductSubscriptionsRouteHandler: RouteHandler<
  typeof getProductSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
