import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionPurchaseReservedNodeOfferingRoute,
  postActionPurchaseReservedNodeOfferingRoute,
} from '../routes'

export const getActionPurchaseReservedNodeOfferingRouteHandler: RouteHandler<
  typeof getActionPurchaseReservedNodeOfferingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPurchaseReservedNodeOfferingRouteHandler: RouteHandler<
  typeof postActionPurchaseReservedNodeOfferingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
