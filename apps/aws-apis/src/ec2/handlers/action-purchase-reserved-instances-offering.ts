import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionPurchaseReservedInstancesOfferingRoute,
  postActionPurchaseReservedInstancesOfferingRoute,
} from '../routes'

export const getActionPurchaseReservedInstancesOfferingRouteHandler: RouteHandler<
  typeof getActionPurchaseReservedInstancesOfferingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPurchaseReservedInstancesOfferingRouteHandler: RouteHandler<
  typeof postActionPurchaseReservedInstancesOfferingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
