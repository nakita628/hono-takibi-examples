import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateReservedInstancesListingRoute,
  postActionCreateReservedInstancesListingRoute,
} from '../routes'

export const getActionCreateReservedInstancesListingRouteHandler: RouteHandler<
  typeof getActionCreateReservedInstancesListingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateReservedInstancesListingRouteHandler: RouteHandler<
  typeof postActionCreateReservedInstancesListingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
