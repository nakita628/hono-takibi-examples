import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCommerceSubscriptionItemsSubscriptionItemIdRoute,
  getCommercePlansRoute,
  getCommerceSubscriptionItemsRoute,
} from '../routes'

export const getCommercePlansRouteHandler: RouteHandler<typeof getCommercePlansRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCommerceSubscriptionItemsRouteHandler: RouteHandler<
  typeof getCommerceSubscriptionItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommerceSubscriptionItemsSubscriptionItemIdRouteHandler: RouteHandler<
  typeof deleteCommerceSubscriptionItemsSubscriptionItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
