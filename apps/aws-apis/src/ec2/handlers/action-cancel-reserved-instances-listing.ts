import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCancelReservedInstancesListingRoute,
  postActionCancelReservedInstancesListingRoute,
} from '../routes'

export const getActionCancelReservedInstancesListingRouteHandler: RouteHandler<
  typeof getActionCancelReservedInstancesListingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCancelReservedInstancesListingRouteHandler: RouteHandler<
  typeof postActionCancelReservedInstancesListingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
