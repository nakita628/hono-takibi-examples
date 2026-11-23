import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchAutocompleteTenantRoute, getSearchRestaurantsTenantRoute } from '../routes'

export const getSearchAutocompleteTenantRouteHandler: RouteHandler<
  typeof getSearchAutocompleteTenantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchRestaurantsTenantRouteHandler: RouteHandler<
  typeof getSearchRestaurantsTenantRoute
> = async (c) => {
  throw new Error('Not implemented')
}
