import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionPurchaseReservedDBInstancesOfferingRoute,
  postActionPurchaseReservedDBInstancesOfferingRoute,
} from '../routes'

export const getActionPurchaseReservedDBInstancesOfferingRouteHandler: RouteHandler<
  typeof getActionPurchaseReservedDBInstancesOfferingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPurchaseReservedDBInstancesOfferingRouteHandler: RouteHandler<
  typeof postActionPurchaseReservedDBInstancesOfferingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
